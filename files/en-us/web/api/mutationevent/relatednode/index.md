---
title: "MutationEvent: relatedNode property"
short-title: relatedNode
slug: Web/API/MutationEvent/relatedNode
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.MutationEvent.relatedNode
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

The **`relatedNode`** read-only property of the {{domxref("MutationEvent")}} interface returns a string indicating the node related to the event, like the changed node inside the subtree for `DOMSubtreeModified`.

## Value

A string.

## Examples

```js
element.addEventListener(
  "DOMSubtreeModified",
  (event) => {
    console.log(event.relatedNode);
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
