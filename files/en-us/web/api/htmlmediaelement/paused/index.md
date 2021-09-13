---
title: HTMLMediaElement.paused
slug: Web/API/HTMLMediaElement/paused
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Read-only
browser-compat: api.HTMLMediaElement.paused
---
{{APIRef("HTML DOM")}}

The read-only **`HTMLMediaElement.paused`** property
tells whether the media element is paused.

## Syntax

```js
var isPaused = audioOrVideo.paused
```

### Value

A boolean value. `true` is paused and `false` is not
paused.

## Example

```js
var obj = document.createElement('video');
console.log(obj.paused); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
