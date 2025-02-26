---
title: "MutationEvent: prevValue property"
short-title: prevValue
slug: Web/API/MutationEvent/prevValue
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.MutationEvent.prevValue
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

The **`prevValue`** read-only property of the {{domxref("MutationEvent")}} interface returns a string. In `DOMAttrModified` events, it represents the previous value of the {{domxref("Attr")}} node. In `DOMCharacterDataModified` events, it contains the previous value of the {{domxref("CharacterData")}} node. In all other cases, returns the empty string (`""`).

## Value

A string.

## Examples

```js
element.addEventListener(
  "DOMAttrModified",
  (event) => {
    console.log(event.previousValue);
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
