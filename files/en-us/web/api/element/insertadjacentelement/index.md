---
title: "Element: insertAdjacentElement() method"
short-title: insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
page-type: web-api-instance-method
browser-compat: api.Element.insertAdjacentElement
---

{{APIRef("DOM")}}

The **`insertAdjacentElement()`** method of the
{{domxref("Element")}} interface inserts a given element node at a given position
relative to the element it is invoked upon.

## Syntax

```js-nolint
insertAdjacentElement(position, element)
```

### Parameters

- `position`

  - : A string representing the position relative to the
    `targetElement`; must match (case-insensitively) one of the following
    strings:

    - `'beforebegin'`: Before the
      `targetElement` itself.
    - `'afterbegin'`: Just inside the
      `targetElement`, before its first child.
    - `'beforeend'`: Just inside the
      `targetElement`, after its last child.
    - `'afterend'`: After the
      `targetElement` itself.

- `element`
  - : The element to be inserted into the tree.

### Return value

The element that was inserted, or `null`, if the insertion failed.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the `position` specified is not a recognized value.
- {{jsxref("TypeError")}}
  - : Thrown if the `element` specified is not a valid element.

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
  const tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement("beforebegin", tempDiv);
  }
  setListener(tempDiv);
});

afterBtn.addEventListener("click", () => {
  const tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  if (activeElem) {
    activeElem.insertAdjacentElement("afterend", tempDiv);
  }
  setListener(tempDiv);
});
```

Have a look at our [insertAdjacentElement.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentElement.html)
demo on GitHub (see the [source code](https://github.com/mdn/dom-examples/blob/main/insert-adjacent/insertAdjacentElement.html) too.) Here, we have a sequence of {{htmlelement("div")}} elements inside a
container. When one is clicked, it becomes selected and you can then press the
_Insert before_ and _Insert after_ buttons to insert new divs before or
after the selected element using `insertAdjacentElement()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("Node.insertBefore()")}} (similar to `beforebegin`, with
  different arguments)
- {{domxref("Node.appendChild()")}} (same effect as `beforeend`)
