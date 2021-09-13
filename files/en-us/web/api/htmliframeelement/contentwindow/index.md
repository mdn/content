---
title: HTMLIFrameElement.contentWindow
slug: Web/API/HTMLIFrameElement/contentWindow
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

## Example of contentWindow

```js
var x = document.getElementsByTagName("iframe")[0].contentWindow;
//x = window.frames[0];

x.document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
// this would turn the 1st iframe in document blue.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
