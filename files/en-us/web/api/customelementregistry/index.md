---
title: CustomElementRegistry
slug: Web/API/CustomElementRegistry
page-type: web-api-interface
tags:
  - API
  - CustomElementRegistry
  - Interface
  - Reference
  - Web Components
browser-compat: api.CustomElementRegistry
---
{{DefaultAPISidebar("Web Components")}}

The **`CustomElementRegistry`** interface provides methods for registering custom elements and querying registered elements. To get an instance of it, use the {{domxref("window.customElements")}} property.

## Methods

- {{domxref("CustomElementRegistry.define()")}}
  - : Defines a new [custom element](/en-US/docs/Web/Web_Components/Using_custom_elements).
- {{domxref("CustomElementRegistry.get()")}}
  - : Returns the constructor for the named custom element, or {{jsxref("undefined")}} if the custom element is not defined.
- {{domxref("CustomElementRegistry.upgrade()")}}
  - : Upgrades a custom element directly, even before it is connected to its shadow root.
- {{domxref("CustomElementRegistry.whenDefined()")}}
  - : Returns an empty {{jsxref("Promise")}} that resolves when a custom element becomes defined with the given name. If such a custom element is already defined, the returned promise is immediately fulfilled.

## Examples

The following code is taken from our [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) example ([see it live also](https://mdn.github.io/web-components-examples/word-count-web-component/)). Note how we use the {{domxref("CustomElementRegistry.define()")}} method to define the custom element after creating its class.

```js
// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    const wcParent = this.parentNode;

    function countWords(node){
      const text = node.innerText || node.textContent;
      return text.trim().split(/\s+/g).filter((a) => a.trim().length > 0).length;
    }

    const count = `Words: ${countWords(wcParent)}`;

    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});

    // Create text node and add word count to it
    const text = document.createElement('span');
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);

    // Update count when element content changes
    setInterval(() => {
      const count = `Words: ${countWords(wcParent)}`;
      text.textContent = count;
    }, 200);
  }
}

// Define the new element
customElements.define('word-count', WordCount, { extends: 'p' });
```

> **Note:** The `CustomElementRegistry` is available through the {{domxref("Window.customElements")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
