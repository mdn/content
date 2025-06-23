---
title: "MutationEvent: attrChange property"
short-title: attrChange
slug: Web/API/MutationEvent/attrChange
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.MutationEvent.attrChange
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

The **`attrChange`** read-only property of the {{domxref("MutationEvent")}} interface returns a number indicating what kind of change triggered the `DOMAttrModified` event. The three possible values are `MODIFICATION` (`1`), `ADDITION` (`2`) or `REMOVAL` (`3`). It has no meaning for other events and is then set to `0`.

## Value

An integer: `0`, `1` (`MODIFICATION`), `2` (`ADDITION`), or `3` (`REMOVAL`).

## Examples

```js
element.addEventListener(
  "DOMAttrModified",
  (event) => {
    console.log(event.attrChange);
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
