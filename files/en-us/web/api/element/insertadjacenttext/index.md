---
title: "Element: insertAdjacentText() method"
short-title: insertAdjacentText()
slug: Web/API/Element/insertAdjacentText
page-type: web-api-instance-method
browser-compat: api.Element.insertAdjacentText
---

{{APIRef("DOM")}}

The **`insertAdjacentText()`** method of the {{domxref("Element")}} interface, given a relative position and a string, inserts a new text node at the given position relative to the element it is called from.

## Syntax

```js-nolint
insertAdjacentText(where, data)
```

### Parameters

- `where`

  - : A string representing the position relative to the element the method is called from; must be one of the following strings:

    - `'beforebegin'`: Before the `element` itself.
    - `'afterbegin'`: Just inside the `element`, before its first child.
    - `'beforeend'`: Just inside the `element`, after its last child.
    - `'afterend'`: After the `element` itself.

- `data`
  - : A string from which to create a new text node to insert at the given position `where` relative to the element the method is called from.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if `where` is not a recognized value.

### Visualization of position names

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> [!NOTE]
> The `beforebegin` and
> `afterend` positions work only if the node is in a tree and has an element
> parent.

## Examples

```js
beforeBtn.addEventListener("click", () => {
  para.insertAdjacentText("afterbegin", textInput.value);
});

afterBtn.addEventListener("click", () => {
  para.insertAdjacentText("beforeend", textInput.value);
});
```

Have a look at our [insertAdjacentText.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentText.html)
demo on GitHub (see the [source code](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentText.html) too.) Here we have a simple paragraph. You can enter some text into the form
element, then press the _Insert before_ and _Insert after_ buttons to
insert it before or after the existing paragraph text using
`insertAdjacentText()`. Note that the existing text node is not added to —
further text nodes are created containing the new additions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentHTML()")}}
