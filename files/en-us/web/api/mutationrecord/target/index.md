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

The {{domxref("MutationRecord")}} property **`target`** is the target (i.e. the mutated/changed node) of a mutation observed with a {{domxref("MutationObserver")}}.

## Value

The value of the property is the node changed by a mutation observed with a {{domxref("MutationObserver")}}; the value can be vastly different depending on the value of {{domxref("MutationRecord.type")}}.

- If the record's [`type`](/en-US/docs/Web/API/MutationRecord/type) is `attributes`, the value will be the element whose attribute(s) have been mutated.

- If the record's [`type`](/en-US/docs/Web/API/MutationRecord/type) is `childList`, the value will be the element whose child element(s) have been mutated.

- If the record's [`type`](/en-US/docs/Web/API/MutationRecord/type) is `characterData`, the value will be the {{domxref("characterData")}} node.

## Examples

In this code snippet, the `observer` will log to the console the tag name of every element with an observed mutation with the {{domxref("MutationObserver.observe()")}} property.

```js
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log(mutation.target.tagName);
    });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
