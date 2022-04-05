import { html, repeat } from "@microsoft/fast-element";

export default html`
    <h1>${x => x.title}</h1>
    <ul>
        ${repeat(
            x => x.items,
            html`
                <li>${x => x}</li>
            `
        )}
    </ul>
`;

export const source = {
    title: "Using a repeat directive outside a component",
    items: ["Red", "Green", "Blue", "Yellow"],
};
