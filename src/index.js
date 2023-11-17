const {JSDOM} = await import("jsdom");
const {window} = new JSDOM();
const {readFileSync} = await import("node:fs");
const crypto = await import("node:crypto");

globalThis.document = window.document;
globalThis.window = window;
globalThis.HTMLElement = window.HTMLElement;
globalThis.customElements = window.customElements
globalThis.DocumentFragment = window.DocumentFragment;
globalThis.CustomEvent = window.CustomEvent;
globalThis.XMLHttpRequest = window.XMLHttpRequest;
globalThis.crypto = crypto;

await import("@bitsmist-js_v1/core");
document.documentElement.innerHTML = readFileSync("index.html");
