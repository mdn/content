---
title: "MutationEvent: attrName property"
short-title: attrName
slug: Web/API/MutationEvent/attrName
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.MutationEvent.attrName
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

The **`attrName`** read-only property of the {{domxref("MutationEvent")}} interface returns a string with the name of the node affected by the `DOMAttrModified` event. It has no meaning for other events and is then set to the empty string (`""`).

## Value

A string.

## Examples

```js
element.addEventListener(
  "DOMAttrModified",
  (event) => {
    console.log(event.attrName);
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
