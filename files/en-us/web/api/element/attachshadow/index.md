---
title: "Element: attachShadow() method"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
page-type: web-api-instance-method
browser-compat: api.Element.attachShadow
---

{{APIRef('Shadow DOM')}}

The **`Element.attachShadow()`** method attaches a shadow DOM tree to the specified element and returns a reference to its {{domxref("ShadowRoot")}}.

## Elements you can attach a shadow to

Note that you can't attach a shadow root to every type of element.
There are some that can't have a shadow DOM for security reasons (for example {{htmlelement("a")}}).

The following is a list of elements you _can_ attach a shadow root to:

- Any autonomous custom element with a [valid name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("blockquote")}}
- {{htmlelement("body")}}
- {{htmlelement("div")}}
- {{htmlelement("footer")}}
- {{htmlelement("Heading_Elements", "h1")}}
- {{htmlelement("Heading_Elements", "h2")}}
- {{htmlelement("Heading_Elements", "h3")}}
- {{htmlelement("Heading_Elements", "h4")}}
- {{htmlelement("Heading_Elements", "h5")}}
- {{htmlelement("Heading_Elements", "h6")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("nav")}}
- {{htmlelement("p")}}
- {{htmlelement("section")}}
- {{htmlelement("span")}}

## Calling this method on an element that is already a shadow host

The method may be called on an element that already has a [declarative shadow root](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom), provided the specified mode `mode` matches the existing mode.
In this case the {{domxref("ShadowRoot")}} that was already present will be cleared and returned.
This allows for cases where, for example, server-side rendering has already declaratively created a shadow root, and then client-side code attempts to attach the root again.

Otherwise calling `attachShadow()` on an element that already has a shadow root will throw an exception.

## Syntax

```js-nolint
attachShadow(options)
```

### Parameters

- `options`

  - : An object which contains the following fields:

    - `mode`

      - : A string specifying the _encapsulation mode_ for the shadow DOM tree.
        This can be one of:

        - `open`

          - : Elements of the shadow root are accessible from JavaScript outside the root,
            for example using {{domxref("Element.shadowRoot")}}:

            ```js
            element.attachShadow({ mode: "open" });
            element.shadowRoot; // Returns a ShadowRoot obj
            ```

        - `closed`

          - : Denies access to the node(s) of a closed shadow root
            from JavaScript outside it:

            ```js
            element.attachShadow({ mode: "closed" });
            element.shadowRoot; // Returns null
            ```

    - `clonable` {{Optional_Inline}}

      - : A boolean that specifies whether the shadow root is clonable: when set to `true`, the shadow host cloned with {{domxref("Node.cloneNode()")}} or {{domxref("Document.importNode()")}} will include shadow root in the copy. Its default value is `false`.

    - `delegatesFocus` {{Optional_Inline}}

      - : A boolean that, when set to `true`, specifies behavior that mitigates custom element issues around focusability.
        When a non-focusable part of the shadow DOM is clicked, the first focusable part is given focus, and the shadow host is given any available `:focus` styling. Its default value is `false`.

    - `serializable` {{Optional_Inline}}

      - : A boolean that, when set to `true`, indicates that the shadow root is serializable.
        If set, the shadow root may be serialized by calling the {{DOMxRef('Element.getHTML()')}} or {{DOMxRef('ShadowRoot.getHTML()')}} methods with the `options.serializableShadowRoots` parameter set `true`.
        Its default value is `false`.

    - `slotAssignment` {{Optional_inline}}

      - : A string specifying the _slot assignment mode_ for the shadow DOM tree. This can be one of:

        - `named`
          - : Elements are automatically assigned to {{HTMLElement("slot")}} elements within this shadow root. Any descendants of the host with a `slot` attribute which matches the `name` attribute of a `<slot>` within this shadow root will be assigned to that slot. Any top-level children of the host with no `slot` attribute will be assigned to a `<slot>` with no `name` attribute (the "default slot") if one is present.
        - `manual`
          - : Elements are not automatically assigned to {{HTMLElement("slot")}} elements. Instead, they must be manually assigned with {{domxref("HTMLSlotElement.assign()")}}.
            Its default value is `named`.

### Return value

Returns a {{domxref("ShadowRoot")}} object.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}

  - : This error may be thrown when you try to attach a shadow root to an element:

    - outside the HTML namespace or that can't have a shadow attached to it.
    - where the element definition static property `disabledFeatures` has been given a value of `"shadow"`.
    - that already has a shadow root that was not created declaratively.
    - that has a [declarative shadow root](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom) but the specified `mode` does not match the existing mode.

## Examples

### Word count custom element

The following example is taken from our [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) demo ([see it live also](https://mdn.github.io/web-components-examples/word-count-web-component/)).
You can see that we use `attachShadow()` in the middle of the code to create a shadow root, which we then attach our custom element's contents to.

```js
// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    const wcParent = this.parentNode;

    function countWords(node) {
      const text = node.innerText || node.textContent;
      return text
        .trim()
        .split(/\s+/g)
        .filter((a) => a.trim().length > 0).length;
    }

    const count = `Words: ${countWords(wcParent)}`;

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create text node and add word count to it
    const text = document.createElement("span");
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);

    // Update count when element content changes
    this.parentNode.addEventListener("input", () => {
      text.textContent = `Words: ${countWords(wcParent)}`;
    });
  }
}

// Define the new element
customElements.define("word-count", WordCount, { extends: "p" });
```

### Disabling shadow DOM

If the element has a static property named `disabledFeatures`, which is an array containing the string `"shadow"`, then the `attachShadow()` call will throw an exception.

For example:

```js
class MyCustomElement extends HTMLElement {
  // Disable shadow DOM for this element.
  static disabledFeatures = ["shadow"];

  constructor() {
    super();
  }

  connectedCallback() {
    // Create a shadow root.
    // This will throw an exception.
    const shadow = this.attachShadow({ mode: "open" });
  }
}

// Define the new element
customElements.define("my-custom-element", MyCustomElement);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ShadowRoot.mode")}}
- {{domxref("ShadowRoot.delegatesFocus")}}
- {{domxref("ShadowRoot.slotAssignment")}}
- Declaratively attach a shadow root with the [`shadowrootmode`](/en-US/docs/Web/HTML/Element/template#shadowrootmode) attribute of the [`<template>` element](/en-US/docs/Web/HTML/Element/template)
- [Declarative shadow DOM](https://web.dev/articles/declarative-shadow-dom) on web.dev (2023)
