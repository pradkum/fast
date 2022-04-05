import { css, FASTElement, html } from "@microsoft/fast-element";

export class CEButton extends FASTElement {
    static definition = {
        name: "ce-button",
        template: html`
            <slot></slot>
        `,
        styles: css`
            :host {
                display: inline-block;
                text-align: center;
                padding: 0.5em 1em;
                font-size: 1.2em;
                border-radius: 4px;
            }

            :host(:hover) {
                cursor: pointer;
            }

            :host([appearance="neutral"]) {
                background-color: #ededed;
                color: #2b2b2b;
            }
            :host([appearance="accent"]) {
                background-color: #0078d4;
                color: #ffffff;
            }
        `,
        attributes: ["appearance"],
    };

    connectedCallback() {
        super.connectedCallback();

        if (this.appearance === undefined) {
            this.appearance = "neutral";
        }
    }
}
export class CEModal extends FASTElement {
    static definition = {
        name: "ce-modal",
        template: html`
            <div class="content"><slot></slot></div>
        `,
        styles: css`
            :host {
                position: fixed;
                display: "block";
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.2);
                top: 0;
                left: 0;
            }

            .content {
                position: absolute;
                top: 30%;
                left: 30%;
                background: #fff;
                width: 40vw;
                height: 40vh;
                box-sizing: border-box;
                padding: 24px;
                box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
                border-radius: 4px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
            }
        `,
    };
}

FASTElement.define(CEModal);
FASTElement.define(CEButton);

export default html`
    <style>
        :root {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }
    </style>
    <ce-modal>
        <h1>Is SSR Awesome?</h1>
        <p>
            <ce-button>No</ce-button>
            <ce-button appearance="accent">Yes!</ce-button>
        </p>
    </ce-modal>
`;
