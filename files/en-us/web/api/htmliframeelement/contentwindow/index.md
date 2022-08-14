---
title: HTMLIFrameElement.contentWindow
slug: Web/API/HTMLIFrameElement/contentWindow
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLIFrameElement
  - Property
  - Read-only
  - Reference
  - Web
browser-compat: api.HTMLIFrameElement.contentWindow
---
{{APIRef("HTML DOM")}}

The **`contentWindow`** property returns the [Window](/en-US/docs/Web/API/Window) object of an [HTMLIFrameElement](/en-US/docs/Web/API/HTMLIFrameElement). You can use this `Window` object to access the iframe's document and its internal DOM. This attribute is read-only, but its properties can be manipulated like the global `Window` object.

## Value

A [Window](/en-US/docs/Web/API/Window) object.

## Examples

```js
const x = document.querySelector("iframe").contentWindow;
//x = window.frames[0];

x.document.querySelector("body").style.backgroundColor = "blue";
// this would turn the 1st iframe in document blue.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
