---
title: "MutationEvent: newValue property"
short-title: newValue
slug: Web/API/MutationEvent/newValue
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.MutationEvent.newValue
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

The **`newValue`** read-only property of the {{domxref("MutationEvent")}} interface returns a string. In `DOMAttrModified` events, it represents the new value of the {{domxref("Attr")}} node. In `DOMCharacterDataModified` events, it contains the new value of the {{domxref("CharacterData")}} node. In all other cases, returns the empty string (`""`).

## Value

A string.

## Examples

```js
element.addEventListener(
  "DOMAttrModified",
  (event) => {
    console.log(event.newValue);
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
