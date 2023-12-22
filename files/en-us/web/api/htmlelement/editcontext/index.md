---
title: "HTMLElement: editContext property"
short-title: editContext
slug: Web/API/HTMLElement/editContext
page-type: web-api-instance-property
browser-compat: api.HTMLElement.editContext
---

{{APIRef("EditContext API")}}

The **`editContext`** property of the {{domxref("HTMLElement")}} interface gets and sets an element's associated {{domxref("EditContext")}} object.

The {{domxref("EditContext API", "", "", "nocode")}} can be used to build rich text editors on the web that support a variety of input methods and text rendering options.

### Element association

Setting the `editContext` property of an element to a {{domxref("EditContext")}} instance associates that element with the `EditContext` instance.

The association is one-to-one:

- An element can only be associated to one `EditContext` instance.
- An `EditContext` instance can only be associated to one element.

### Garbage collection

An `EditContext` instance keeps its associated element alive, even if the element is removed from the DOM. If you want the element to be garbage collected, clear the `editContext` property of the element.

## Value

An {{domxref("EditContext")}} object.

## Examples

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- ...
