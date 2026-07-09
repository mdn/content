---
title: "Window: requestResize() method"
short-title: requestResize()
slug: Web/API/Window/requestResize
page-type: web-api-instance-method
browser-compat: api.Window.requestResize
---

{{APIRef}}

The **`requestResize()`** method of the {{domxref("Window")}} interface updates the size information shared by an embedded document with its embedding parent, but only if the embedded document has opted in to sharing its size information.

## Syntax

```js-nolint
requestResize()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if:
    - The `requestResize()` method was called from a top-level (non-embedded) document.
    - The embedding element is not an {{htmlelement("iframe")}}.
    - The embedded document has not opted in to sharing its layout size by including a [`<meta name="responsive-embedded-sizing">`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) tag.

> [!NOTE]
> If the parent document doesn't set the {{cssxref("frame-sizing")}} CSS property on the embedding `<iframe>`, no exception is thrown, but the `<iframe>` will not be resized.

## Description

For security and privacy reasons, {{htmlelement("iframe")}} elements do not by default expose any information to the parent document about the size of the content in the document they are embedding.

To enable responsive sizing of `<iframe>` elements based on their content, the [`<meta name="responsive-embedded-sizing">`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) tag can be included in an embedded document to opt it in to sharing its size information with the parent document. The {{cssxref("frame-sizing")}} CSS property can then be set on the `<iframe>` to cause it to adopt the same horizontal or vertical size as the embedded document's actual layout size (termed the **internal layout intrinsic size** in the spec). This is useful for avoiding scrollbars on `<iframe>` content so that it fits more seamlessly with its embedder.

To resize the `<iframe>` dynamically as the embedded document changes layout size, you can call the {{domxref("Window.requestResize()")}} method from the embedded document to make it report an updated size, typically from within the event handler that caused its content to change size. If the `<iframe>` is sized using `frame-sizing`, it will then update its size automatically so that it still neatly contains the embeded content.

The embedded document's layout size is automatically reported once when its {{domxref("Document.DOMContentLoaded_event", "DOMContentLoaded")}} event fires, and again when the {{domxref("Window")}} object's {{domxref("Window.load_event", "load")}} event fires. The `requestResize()` method is needed to report subsequent layout size changes.

## Examples

### Using `requestResize()`

Our [`requestResize()` demo](https://mdn.github.io/dom-examples/responsive-iframe-sizing/js-request-resize/) ([see source code](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/js-request-resize)) demonstrates usage of the `requestResize()` method.

#### HTML

We have two HTML documents. The main `index.html` document contains a heading and an `<iframe>`, into which is embedded the `frame.html` document:

```html
<h1>Responsive iframes — basic example</h1>

<iframe src="frame.html"></iframe>
```

The `frame.html` document includes a {{htmlelement("div")}} element with a [`tabindex`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) value of `0` set so that it is focusable. It contains a heading and some paragraphs. The document also includes the `<meta name="responsive-embedded-sizing" />` tag, which opts it in to sharing its content layout size with the parent document.

```html
<head>
  ...

  <meta name="responsive-embedded-sizing" />

  ...
</head>
<body>
  <div tabindex="0">
    <h1>This is my frame</h1>
    <p>This is the content of my discontent.</p>
    <p>This is some more content.</p>
  </div>
</body>
```

#### CSS

The `<iframe>` inside `index.html` is given a `frame-sizing` value of `content-block-size`. Because the `<iframe>` has a horizontal `writing-mode`, its `height` will be set to the embedded document's layout height.

```css
iframe {
  frame-sizing: content-block-size;
  border: 2px solid gray;
}
```

#### JavaScript

The script inside `frame.html` starts by grabbing a reference to the `<div>` element. It then sets `click` and `keypress` event listeners on the `<div>`, both of which run a custom function called `addParagraph()` when the event fires.

```js
const divElem = document.querySelector("div");
divElem.addEventListener("click", addParagraph);
window.addEventListener("keypress", addParagraph);
```

The `addParagraph()` function generates a new paragraph element and appends it to the end of the `<div>` as a child, increasing its height. It then calls `requestResize()` so that the new height is reported to the parent document.

```js
function addParagraph() {
  const para = document.createElement("p");
  para.textContent = "New content.";
  divElem.appendChild(para);
  window.requestResize();
}
```

#### Result

{{EmbedGHLiveSample("responsive-iframe-sizing/js-request-resize/", "100%", 300)}}

Even though no explicit `height` has been set on the `<iframe>`, it is sized to the right height to exactly contain its embedded document, with no scroll bars. Try clicking on the `<div>` or focusing it and pressing a key on the keyboard. As a new paragraph is added to the `<div>`, the `<div>` grows in height, but the `<iframe>` also grows in height to match it.

You can also [load the demo in a separate tab](https://mdn.github.io/dom-examples/responsive-iframe-sizing/js-request-resize/) and view the [source code](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/js-request-resize).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("frame-sizing")}} CSS property
- [CSS box sizing](/en-US/docs/Web/CSS/Guides/Box_sizing) module
- [`<meta name="responsive-embedded-sizing">`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)
