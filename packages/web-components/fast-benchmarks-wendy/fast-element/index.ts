import {
    css,
    customElement,
    FASTElement,
    html,
    observable,
    repeat,
} from "@microsoft/fast-element";

declare global {
    interface Window {
        usedJSHeapSize: any;
        gc: any;
    }
    interface Performance {
        memory: any;
    }
}

function measureMemory() {
    if ("gc" in window && "memory" in performance) {
        // Report results in MBs\
        window.gc();
        window.usedJSHeapSize = performance.memory.usedJSHeapSize / 1e6;
    } else {
        window.usedJSHeapSize = 0;
    }
}

/**
 * Applies properties to the target element.
 */
const itemCount = 250;
const itemValueCount = 99;
const updateCount = 6;

let id = 0;
function _random(max: number) {
    return Math.round(Math.random() * 1000) % max;
}
const adjectives = [
    "pretty",
    "large",
    "big",
    "small",
    "tall",
    "short",
    "long",
    "handsome",
    "plain",
    "quaint",
    "clean",
    "elegant",
    "easy",
    "angry",
    "crazy",
    "helpful",
    "mushy",
    "odd",
    "unsightly",
    "adorable",
    "important",
    "inexpensive",
    "cheap",
    "expensive",
    "fancy",
];
const colours = [
    "red",
    "yellow",
    "blue",
    "green",
    "pink",
    "brown",
    "purple",
    "brown",
    "white",
    "black",
    "orange",
];
const nouns = [
    "table",
    "chair",
    "house",
    "bbq",
    "desk",
    "car",
    "pony",
    "cookie",
    "sandwich",
    "burger",
    "pizza",
    "mouse",
    "keyboard",
];

export class RandomItem {
    @observable label: string;

    constructor(public readonly id: number) {
        this.label =
            adjectives[_random(adjectives.length)] +
            " " +
            colours[_random(colours.length)] +
            " " +
            nouns[_random(nouns.length)];
    }
}

function generateData(count: number) {
    const data = [];

    for (let i = 0; i < count; i++) {
        data.push(new RandomItem(++id));
    }

    return data;
}
const data: RandomItem[] = generateData(itemCount);
const otherData = generateData(itemCount * 2).slice(itemCount);

// const xItemTemplate = html`<div @click="${(x) => x.onClick}" class="item">
//   ${(x) => {
//     console.log("x", x);
//     return x;
//   }}
// </div>`;
// @customElement({
//   name: "x-item",
//   template: xItemTemplate,
// })
// class XItem extends FASTElement {
//   static styles = css`
//     .item {
//       display: flex;
//     }
//   `;
//   @observable item: RandomItem;

//   onClick(e: MouseEvent) {
//     console.log(e.type);
//   }
// }

interface Item {
    label: string;
}
const testItemTemplate = html<Item>`
    <div class="item">${x => x.label}</div>
`;

const xAppTemplate = html`
    <div id="container">
        ${repeat(
            x => {
                console.log("x", x);
                return x.items;
            },
            html`
                ${testItemTemplate}
            `
        )}
    </div>
`;

@customElement({
    name: "x-app",
    template: xAppTemplate,
})
class XApp extends FASTElement {
    @observable items: RandomItem[] = data;
}

//support older browsesrs or if we're not using modules
(async () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    let el: XApp;

    const create = () => {
        const el = document.createElement("x-app") as XApp;
        return container.appendChild(el) as XApp;
    };
    const destroy = () => {
        container.innerHTML = "";
    };
    const getTestStartName = (name: string) => `${name}-start`;
    const updateComplete = () => new Promise(r => requestAnimationFrame(r));

    create();
    const render = async () => {
        const test = "render";
        const start = getTestStartName(test);
        performance.mark(start);
        create();
        await updateComplete();
        performance.measure(test, start);
        measureMemory();
        destroy();
    };
    await render();

    const update = async () => {
        const test = "update";
        el = create();
        const start = getTestStartName(test);
        performance.mark(start);
        for (let i = 0; i < updateCount; i++) {
            el.items = i % 2 ? otherData : data;
            await updateComplete();
        }
        performance.measure(test, start);
        measureMemory();
        destroy();
    };
    await update();

    // Log
    performance
        .getEntriesByType("measure")
        .forEach(m => console.log(`${m.name}: ${m.duration.toFixed(3)}ms`));
})();
// console.log("test");

// performance.mark("start");

// console.log("test");
// const container = document.createElement("div");

// const el = document.createElement("span");
// container.appendChild(el);
// performance.measure("render", "start");
