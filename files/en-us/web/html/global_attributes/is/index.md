---
title: is
slug: Web/HTML/Global_attributes/is
page-type: html-attribute
browser-compat: html.global_attributes.is
---

{{HTMLSidebar("Global_attributes")}}

> **Note:** [Safari does not plan to support custom built-in elements](https://github.com/WebKit/standards-positions/issues/97) and [browser vendors are exploring alternative solutions to customizing built-ins](https://github.com/WICG/webcomponents/issues/1029). Check the [browser compatibility](#browser_compatibility) section for support information.

The **`is`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) allows you to specify that a standard HTML element should behave like a defined custom built-in element (see [Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements) for more details).

This attribute can only be used if the specified custom element name has been successfully [defined](/en-US/docs/Web/API/CustomElementRegistry/define) in the current document, and extends the element type it is being applied to.

## Examples

The following code is taken from our [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) example ([see it live also](https://mdn.github.io/web-components-examples/word-count-web-component/)).

```js
// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Constructor contents omitted for brevity
    // …
  }
}

// Define the new element
customElements.define("word-count", WordCount, { extends: "p" });
```

```html
<p is="word-count"></p>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
