---
title: "Element: attachShadow() method"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
page-type: web-api-instance-method
browser-compat: api.Element.attachShadow
---

{{APIRef("Shadow DOM")}}

The **`attachShadow()`** method of the {{domxref("Element")}} interface attaches a shadow DOM tree to the specified element and returns a reference to its {{domxref("ShadowRoot")}}.

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
          - : Elements inside the shadow root are accessible from JavaScript via the element's {{domxref("Element.shadowRoot","shadowRoot")}} property.
        - `closed`
          - : Elements inside the shadow root cannot be accessed from JavaScript via the {{domxref("Element.shadowRoot","shadowRoot")}} property, which is set to `null`.

    - `clonable` {{Optional_Inline}}
      - : A boolean that specifies whether the shadow root is clonable: when set to `true`, the shadow host cloned with {{domxref("Node.cloneNode()")}} or {{domxref("Document.importNode()")}} will include shadow root in the copy. Its default value is `false`.

    - `customElementRegistry` {{Optional_Inline}}
      - : A {{DOMxRef('CustomElementRegistry')}} that will be used as the [scoped custom element registry](/en-US/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) of the attached shadow root.
        If `null` or `undefined`, the shadow root will use the global registry referenced by {{domxref("Window.customElements")}}.

    - `delegatesFocus` {{Optional_Inline}}
      - : A boolean that, when set to `true`, specifies behavior that mitigates custom element issues around focusability.
        When a non-focusable part of the shadow DOM is clicked, the first focusable part is given focus, and the shadow host is given any available `:focus` styling. Its default value is `false`.

    - `referenceTarget` {{Optional_Inline}} {{Experimental_Inline}}
      - : A string value that indicates the effective target of any element reference made against the shadow host from outside the host element. The value should be the ID of an element inside the shadow DOM. If set, target references to the host element from outside the shadow DOM will cause the referenced target element to become the effective target of the reference to the host element.

    - `serializable` {{Optional_Inline}}
      - : A boolean that, when set to `true`, indicates that the shadow root is serializable.
        If set, the shadow root may be serialized by calling the {{DOMxRef('Element.getHTML()')}} or {{DOMxRef('ShadowRoot.getHTML()')}} methods with the `options.serializableShadowRoots` parameter set `true`.
        Its default value is `false`.

    - `slotAssignment` {{Optional_inline}}
      - : A string specifying the _slot assignment mode_ for the shadow DOM tree. This can be one of:
        - `named`
          - : Elements are automatically assigned to {{HTMLElement("slot")}} elements within this shadow root.
            Any top-level children of the host with a `slot` attribute which matches the `name` attribute of a `<slot>` within this shadow root will be assigned to that slot.
            Any top-level children of the host with no `slot` attribute will be assigned to the first `<slot>` with no `name` attribute (the "default slot"), if one is present.
            This is the default value.
        - `manual`
          - : Elements are manually assigned to particular slot elements using {{domxref("HTMLSlotElement.assign()")}}.
            No automatic assignment takes place.

### Return value

Returns a {{domxref("ShadowRoot")}} object.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : This error may be thrown when you try to attach a shadow root to an element:
    - outside the HTML namespace or that can't have a shadow attached to it.
    - where the element definition static property `disabledFeatures` has been given a value of `"shadow"`.
    - that already has a shadow root that was not created declaratively.
    - that has a [declarative shadow root](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) but the specified `mode` does not match the existing mode.
    - while passing a `customElementRegistry` value that isn't `null` or a locally scoped registry (that you created using `new CustomElementRegistry()`).
      The error would be thrown if you passed the global registry.

## Description

The **`Element.attachShadow()`** method attaches a shadow DOM tree to the specified element and returns a reference to its {{domxref("ShadowRoot")}}.

This is the programmatic mechanism to create a `ShadowRoot`, which is the root node of a [Shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) attached to a host element (it is also possible to create a `ShadowRoot` declaratively using the [`shadowrootmode`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootmode) attribute of the {{htmlelement("template")}} element).
It is used for creating [custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements).

### Elements you can attach a shadow to

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

### Calling this method on an element that is already a shadow host

The method may be called on an element that already has a [declarative shadow root](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom), provided the specified mode `mode` matches the existing mode.
In this case the {{domxref("ShadowRoot")}} that was already present will be cleared and returned.
This allows for cases where, for example, server-side rendering has already declaratively created a shadow root, and then client-side code attempts to attach the root again.

Otherwise calling `attachShadow()` on an element that already has a shadow root will throw an exception.

### Open and closed shadow roots

A shadow root can be attached with an encapsulation [mode](#mode), which is specified as either `open` or `closed`.

If the `{mode: "open"}` argument is passed, the host element's {{domxref("Element.shadowRoot","shadowRoot")}} property can subsequently be used to get the attached shadow root.
This can be used to access elements in the Shadow DOM:

```js
element.attachShadow({ mode: "open" });
element.shadowRoot; // Returns a ShadowRoot obj
```

If `{mode: "closed"}` is passed then the Element's {{domxref("Element.shadowRoot","shadowRoot")}} property is set to `null`.
Note that JavaScript can still access a closed shadow root by storing the value returned by the function.

```js
element.attachShadow({ mode: "closed" });
element.shadowRoot; // Returns null
```

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

### Shadow DOM with named slot assignment

This example demonstrates named slot assignment.

#### Feature checking

This part of the example defines a warning that will indicate if the type of slot assignment can be changed.

First we create HTML that displays the warning if the mechanism is not supported.

```html
<p id="support-warning" hidden>
  ⛔ Your browser doesn't support setting slot assignment (named assignment is
  used).
</p>
```

This code tests if the {{domxref("ShadowRoot.slotAssignment")}} property is defined, and uses the result to display the warning if it is not.

```js
const isSlotAssignmentSupported = Object.hasOwn(
  ShadowRoot.prototype,
  "slotAssignment",
);

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isSlotAssignmentSupported);
```

#### Creating the web component

This code creates a web component that has three named slots for an article's title, metadata, and body section.
The ShadowRoot is created with `slotAssignment: "named"`.

```js
class MyArticle extends HTMLElement {
  constructor() {
    super();
    // Attach the shadow root specifying that slotAssignment is "named" (not manual)
    this.attachShadow({ mode: "open", slotAssignment: "named" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Define the internal structure and styles
    this.shadowRoot.innerHTML = `
      <style>
        .header {
          background-color: plum;
        }
        .meta {
          background-color: green;
        }
        .body {
          background-color: lightblue;
        }
      </style>

      <h2 class="header">
        <slot name="title"></slot>
      </h2>

      <div class="meta">
        <slot name="meta"></slot>
      </div>

      <div class="body">
        <slot></slot>
      </div>
    `;
  }
}

// Register the component
customElements.define("my-article", MyArticle);
```

#### Using the web component

The HTML below uses the `<my-article>` web component we just created.
The nested elements are rendered in the component's slots based on name matching.
The unnamed elements are rendered in the component's unnamed slot (the body).

```html
<my-article>
  <span slot="title">Text for the title slot</span>
  <span slot="meta">Text for the meta slot</span>

  <p>
    Text 1 with no slot attribute. Goes into default (unnamed) slot inside the
    "body" div.
  </p>
  <p>
    Text 2 with no slot attribute. Also goes into default (unnamed) slot inside
    the "body" div.
  </p>
</my-article>
```

#### Results

The example below should show the content of the slots displayed in the appropriate sections.

{{EmbedLiveSample('Shadow DOM with named slot assignment','100', '220px')}}

> [!NOTE]
> The example will still work even if the warning that shadow root slot assignment is not supported is displayed.
> This is because `named` assignment predates the introduction of the `slotAssignment` property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ShadowRoot.mode")}}
- {{domxref("ShadowRoot.delegatesFocus")}}
- {{domxref("ShadowRoot.slotAssignment")}}
- Declaratively attach a shadow root with the [`shadowrootmode`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootmode) attribute of the [`<template>` element](/en-US/docs/Web/HTML/Reference/Elements/template)
- [Declarative shadow DOM](https://web.dev/articles/declarative-shadow-dom) on web.dev (2023)
