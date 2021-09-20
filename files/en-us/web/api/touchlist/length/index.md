---
title: TouchList.length
slug: Web/API/TouchList/length
tags:
  - API
  - DOM
  - DOM Reference
  - Mobile
  - Property
  - Reference
  - TouchList
  - touch
browser-compat: api.TouchList.length
---
{{ APIRef("Touch Events") }}

The **`length`** read-only property indicates the number of
items (touch points) in a given {{domxref("TouchList")}}.

## Syntax

```js
var numTouches = touchList.length;
```

### Return value

- `numTouches`
  - : The number of touch points in `touchList`.

## Example

This code example illustrates the use of the {{domxref("TouchList")}} interface's
{{domxref("TouchList.item()","item")}} method and the
{{domxref("TouchList.length","length")}} property.

```js
target = document.getElementById("target");

target.addEventListener('touchstart', function(ev) {

  // If this touchstart event started on element target,
  // set touch to the first item in the targetTouches list;
  // otherwise set touch to the first item in the touches list
  var touch;

  if (ev.targetTouches.length >= 1)
     touch = ev.targetTouches.item(0);
  else
     touch = ev.touches.item(0);
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
