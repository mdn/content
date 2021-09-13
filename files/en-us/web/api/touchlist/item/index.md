---
title: TouchList.item()
slug: Web/API/TouchList/item
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - Mobile
  - Reference
  - TouchList
  - touch
browser-compat: api.TouchList.item
---
{{ APIRef("Touch Events") }}

The **`item()`** method returns the {{ domxref("Touch") }}
object at the specified index in the {{ domxref("TouchList") }}.

## Syntax

```js
var touchPoint = touchList.item(index);
```

### Parameters

- `index`
  - : The index of the {{ domxref("Touch") }} object to retrieve. The index is a number in
    the range of 0 to one less than the length of the {{ domxref("TouchList") }}.

### Return value

- `touchPoint`
  - : The requested {{ domxref("Touch") }} object from the {{ domxref("TouchList") }}.
    Returns `null` if the index is not less than the length of the list.

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
