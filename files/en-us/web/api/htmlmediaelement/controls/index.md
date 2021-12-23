---
title: HTMLMediaElement.controls
slug: Web/API/HTMLMediaElement/controls
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
interface controls for playing the media item will be displayed.

## Syntax

```js
var ctrls = video.controls;
audio.controls = true;
```

### Value

A boolean value. A value of `true` means controls will be
displayed.

## Example

```js
var obj = document.createElement('video');
obj.controls = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
