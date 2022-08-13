---
title: HTMLMediaElement.controls
slug: Web/API/HTMLMediaElement/controls
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Web
browser-compat: api.HTMLMediaElement.controls
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.controls`** property reflects the
{{htmlattrxref("controls", "video")}} HTML attribute, which controls whether user
interface controls for playing the media item will be displayed.

## Value

A boolean value. A value of `true` means controls will be
displayed.

## Examples

```js
const obj = document.createElement('video');
obj.controls = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
