---
title: HTMLMediaElement.loop
slug: Web/API/HTMLMediaElement/loop
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Web
browser-compat: api.HTMLMediaElement.loop
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.loop`** property reflects the {{htmlattrxref("loop", "video")}} HTML attribute, which controls whether the media element should start over when it reaches the end.

## Value

A boolean value.

## Examples

```js
const obj = document.createElement('video');
obj.loop = true; // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
