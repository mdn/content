---
title: HTMLMediaElement.loop
slug: Web/API/HTMLMediaElement/loop
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

## Syntax

```js
var loop = video.loop;
audio.loop = true;
```

### Value

A boolean value.

## Example

```js
var obj = document.createElement('video');
obj.loop = true; // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
