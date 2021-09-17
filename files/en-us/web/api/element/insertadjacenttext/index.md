---
title: Element.insertAdjacentText()
slug: Web/API/Element/insertAdjacentText
tags:
  - API
  - DOM
  - Element
  - Gecko
  - Method
  - Reference
  - insertAdjacentText
browser-compat: api.Element.insertAdjacentText
---
{{APIRef("DOM")}}

The **`insertAdjacentText()`** method of the
{{domxref("Element")}} interface inserts a given text node at a given position relative
to the element it is invoked upon.

## Syntax

```js
element.insertAdjacentText(position, element);
```

### Parameters

- `position`

  - : A {{domxref("DOMString")}} representing the position relative to the
    `element`; must be one of the following strings:

    - `'beforebegin'`: Before the `element`
      itself.
    - `'afterbegin'`: Just inside the
      `element`, before its first child.
    - `'beforeend'`: Just inside the
      `element`, after its last child.
    - `'afterend'`: After the `element`
      itself.

- `element`
  - : A {{domxref("DOMString")}} representing the text to be inserted into the tree.

### Return value

Void.

### Exceptions

| Exception     | Explanation                                         |
| ------------- | --------------------------------------------------- |
| `SyntaxError` | The `position` specified is not a recognized value. |

### Visualization of position names

    <!-- beforebegin -->
    <p>
      <!-- afterbegin -->
      foo
      <!-- beforeend -->
    </p>
    <!-- afterend -->

> **Note:** The `beforebegin` and
> `afterend` positions work only if the node is in a tree and has an element
> parent.

## Example

```js
beforeBtn.addEventListener('click', function() {
  para.insertAdjacentText('afterbegin',textInput.value);
});

afterBtn.addEventListener('click', function() {
  para.insertAdjacentText('beforeend',textInput.value);
});
```

Have a look at our [insertAdjacentText.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentText.html)
demo on GitHub (see the [source
code](https://github.com/mdn/dom-examples/blob/master/insert-adjacent/insertAdjacentText.html) too.) Here we have a simple paragraph. You can enter some text into the form
element, then press the _Insert before_ and _Insert after_ buttons to
insert it before or after the existing paragraph text using
`insertAdjacentText()`. Note that the existing text node is not added to —
further text nodes are created containing the new additions.

## Polyfill

You can polyfill the insertAdjacentText`() method` in Internet Explorer 5.5
(maybe earlier) and higher with the following code:

    if (!Element.prototype.insertAdjacentText)
      Element.prototype.insertAdjacentText = function(type, txt){
        this.insertAdjacentHTML(
          type,
          (txt+'') // convert to string
            .replace(/&/g, '&amp;') // embed ampersand symbols
            .replace(/</g, '&lt;') // embed less-than symbols
        )
      }

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentHTML()")}}
