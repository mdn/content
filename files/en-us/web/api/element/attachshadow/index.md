---
title: Element.attachShadow()
slug: Web/API/Element/attachShadow
page-type: web-api-instance-method
tags:
  - API
  - Element
  - Method
  - Reference
  - attachShadow
  - shadow DOM
browser-compat: api.Element.attachShadow
---
{{APIRef('Shadow DOM')}}

The **`Element.attachShadow()`** method attaches a shadow DOM tree to the specified element and returns a reference to its {{domxref("ShadowRoot")}}.

## Elements you can attach a shadow to

Note that you can't attach a shadow root to every type of element.
There are some that can't have a shadow DOM for security reasons (for example {{htmlelement("a")}}).

The following is a list of elements you **can** attach a shadow root to:

- Any autonomous custom element with a [valid name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("blockquote")}}
- {{htmlelement("body")}}
- {{htmlelement("div")}}
- {{htmlelement("footer")}}
- {{htmlelement("h1")}}
- {{htmlelement("h2")}}
- {{htmlelement("h3")}}
- {{htmlelement("h4")}}
- {{htmlelement("h5")}}
- {{htmlelement("h6")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("nav")}}
- {{htmlelement("p")}}
- {{htmlelement("section")}}
- {{htmlelement("span")}}

## Syntax

```js
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
            element.shadowRoot; // Returns a ShadowRoot obj
            ```

        - `closed`
          - : Denies access to the node(s) of a closed shadow root
            from JavaScript outside it:

            ```js
            element.shadowRoot; // Returns null
            ```

    - `delegatesFocus`
      - : A boolean that, when set to `true`, specifies behavior that mitigates custom element issues around focusability.
        When a non-focusable part of the shadow DOM is clicked, the first focusable part is given focus, and the shadow host is given any available `:focus` styling.

### Return value

Returns a {{domxref("ShadowRoot")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The element you are trying to attach to is already a shadow host.
- `NotSupportedError` {{domxref("DOMException")}}
  - : You are trying to attach a shadow root to an element outside the HTML namespace, the element cannot have a shadow attached to it,
    or the static property `disabledFeatures` has been given a value of `"shadow"` in the element definition.

## Examples

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ShadowRoot.delegatesFocus")}}
