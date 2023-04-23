---
title: "CustomElementRegistry: define() method"
short-title: define()
slug: Web/API/CustomElementRegistry/define
page-type: web-api-instance-method
browser-compat: api.CustomElementRegistry.define
---

{{APIRef("CustomElementRegistry")}}

The **`define()`** method of the
{{domxref("CustomElementRegistry")}} interface defines a new custom element.

There are two types of custom elements you can create:

- **Autonomous custom element**: Standalone elements; they don't inherit
  from built-in HTML elements.
- **Customized built-in element**: These elements inherit from — and
  extend — built-in HTML elements.

## Syntax

```js-nolint
define(name, constructor)
define(name, constructor, options)
```

### Parameters

- `name`
  - : Name for the new custom element. Note that custom element names must contain a
    hyphen.
- `constructor`
  - : Constructor for the new custom element.
- `options` {{optional_inline}}

  - : Object that controls how the element is defined. One option is currently supported:

    - `extends`
      - : String specifying the name of a built-in element to
        extend. Used to create a _customized built-in element_.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("CustomElementRegistry")}} already contains an
    entry with the same name or the same constructor (or is otherwise
    already defined), or <code>extends</code> is specified and it is a
    [valid custom element name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name),
    or <code>extends</code> is specified but the element it is trying to extend is an unknown element.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the provided name is not a [valid custom element name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name).
- {{jsxref("TypeError")}}
  - : Thrown if the referenced constructor is not a constructor.

> **Note:** You'll often get `NotSupportedError`s thrown that
> seem like `define()` is failing, but instead it is likely a problem with
> {{domxref("Element.attachShadow()")}}.

## Examples

### Autonomous custom element

The following code is taken from our [popup-info-box-web-component](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)
example ([see it live also](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)).

```js
// Create a class for the element
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // Insert icon
    const img = document.createElement("img");
    img.src = this.hasAttribute("img")
      ? this.getAttribute("img")
      : "img/default.png";
    icon.appendChild(img);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: relative;
      }
      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }
      img {
        width: 1.2rem;
      }
      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Define the new element
customElements.define("popup-info", PopUpInfo);
```

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC) is an extra security feature — it is the last 3 or 4 numbers on the back of your card."></popup-info>
```

> **Note:** Constructors for autonomous custom elements must extend
> {{domxref("HTMLElement")}}.

### Customized built-in element

The following code is taken from our [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component)
example ([see it live also](https://mdn.github.io/web-components-examples/word-count-web-component/)).

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
    setInterval(() => {
      const count = `Words: ${countWords(wcParent)}`;
      text.textContent = count;
    }, 200);
  }
}

// Define the new element
customElements.define("word-count", WordCount, { extends: "p" });
```

```html
<p is="word-count"></p>
```

### Creating an element which disables the ability to attach a shadow root

If the class used for the element contains the static property `disabledFeatures` returning the string \`shadow\` this will cause {{domxref("Element.attachShadow()")}} to return a `NotSupportedError` {{domxref("DOMException")}}.

```js
class PopUpInfo extends HTMLElement {
  static get disabledFeatures() {
    return ["shadow"];
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    // this will cause an error to be thrown when the element is defined.
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
