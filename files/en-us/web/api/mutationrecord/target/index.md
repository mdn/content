---
title: MutationRecord.target
slug: Web/API/MutationRecord/target
page-type: web-api-instance-property
tags:
  - target
  - MutationRecord
  - Property
  - Reference
browser-compat: api.MutationRecord.target
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} read-only property **`target`** is the target (i.e. the mutated/changed node) of a mutation observed with a {{domxref("MutationObserver")}}.

## Value

The {{domxref("Node")}} that the mutation affected.

- If the record's {{domxref("MutationRecord.type", "type")}} is `attributes`, this is the {{domxref("Element")}} whose attributes changed.
- If the record's {{domxref("MutationRecord.type", "type")}} is `characterData`, this is the {{domxref("CharacterData")}} node.
- If the record's {{domxref("MutationRecord.type", "type")}} is `childList`, this is the {{domxref("Node")}} whose children changed.

## Examples

In this code snippet, the `observer` will log to the console the tag name of every element with an observed mutation.

```js
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        console.log(mutation.target.tagName);
    });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
