---
title: "HTMLElement: editContext property"
short-title: editContext
slug: Web/API/HTMLElement/editContext
page-type: web-api-instance-property
browser-compat: api.HTMLElement.editContext
---

{{APIRef("EditContext API")}}

The **`editContext`** property of the {{domxref("HTMLElement")}} interface gets and sets an element's associated {{domxref("EditContext")}} object.

The {{domxref("EditContext API", "", "", "nocode")}} can be used to build rich text editors on the web that support advanced text input experiences, such as {{glossary("IME")}} (Input Method Editor) composition, emoji picker, or any other platform-specific editing-related UI surfaces.

### Possible elements

Setting the `editContext` property only works on certain types of elements:

- One of these HTML elements: [`<article>`](/en-US/docs/Web/HTML/Element/article), [`<aside>`](/en-US/docs/Web/HTML/Element/aside), [`<blockquote>`](/en-US/docs/Web/HTML/Element/blockquote), [`<body>`](/en-US/docs/Web/HTML/Element/body), [`<div>`](/en-US/docs/Web/HTML/Element/div), [`<footer>`](/en-US/docs/Web/HTML/Element/footer), [`<h1>`](/en-US/docs/Web/HTML/Element/h1), [`<h2>`](/en-US/docs/Web/HTML/Element/h2), [`<h3>`](/en-US/docs/Web/HTML/Element/h3), [`<h4>`](/en-US/docs/Web/HTML/Element/h4), [`<h5>`](/en-US/docs/Web/HTML/Element/h5), [`<h6>`](/en-US/docs/Web/HTML/Element/h6), [`<header>`](/en-US/docs/Web/HTML/Element/header), [`<main>`](/en-US/docs/Web/HTML/Element/main), [`<nav>`](/en-US/docs/Web/HTML/Element/nav), [`<p>`](/en-US/docs/Web/HTML/Element/p), [`<section>`](/en-US/docs/Web/HTML/Element/section), or [`<span>`](/en-US/docs/Web/HTML/Element/span).
- A valid [custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements).
- A [`<canvas>`](/en-US/docs/Web/HTML/Element/canvas) element.

If you try to set the `editContext` property on an element that is not one of the above, a `NotSupportedError` {{domxref("DOMException")}} is thrown.

### Element association

Setting the `editContext` property of an element to a {{domxref("EditContext")}} instance associates that element with the `EditContext` instance.

The association is one-to-one:

- An element can only be associated to one `EditContext` instance.
- An `EditContext` instance can only be associated to one element.

### Garbage collection

An `EditContext` instance will keep its associated element alive if it has other live references, even if the associated element is removed from the DOM.

If you want to make sure the element is garbage collected, clear the `editContext` property of the element.

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

- The {{DOMxRef("EditContext")}} interface.
