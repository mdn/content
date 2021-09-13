---
title: HTMLMediaElement.muted
slug: Web/API/HTMLMediaElement/muted
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Web
browser-compat: api.HTMLMediaElement.muted
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.muted`** indicates whether the media
element muted.

## Syntax

```js
var isMuted = audioOrVideo.muted
audio.muted = true;
```

### Value

A boolean value. `true` means muted and `false` means
not muted.

## Example

```js
var obj = document.createElement('video');
console.log(obj.muted); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- {{domxref("HTMLMediaElement.defaultMuted")}}
- {{domxref("HTMLMediaElement.volume")}}
