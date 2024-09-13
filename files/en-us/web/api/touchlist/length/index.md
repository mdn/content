---
title: "TouchList: length property"
short-title: length
slug: Web/API/TouchList/length
page-type: web-api-instance-property
browser-compat: api.TouchList.length
---

{{ APIRef("Touch Events") }}

The **`length`** read-only property indicates the number of
items (touch points) in a given {{domxref("TouchList")}}.

## Value

The number of touch points in `touchList`.

## Examples

This code example illustrates the use of the {{domxref("TouchList")}} interface's
{{domxref("TouchList.item()","item")}} method and the
`length` property.

```js
const target = document.getElementById("target");

target.addEventListener(
  "touchstart",
  (ev) => {
    // If this touchstart event started on element target,
    // set touch to the first item in the targetTouches list;
    // otherwise set touch to the first item in the touches list
    const touch =
      ev.targetTouches.length >= 1
        ? ev.targetTouches.item(0)
        : ev.touches.item(0);
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
