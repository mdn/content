---
title: "MutationRecord: attributeNamespace property"
short-title: attributeNamespace
slug: Web/API/MutationRecord/attributeNamespace
page-type: web-api-instance-property
browser-compat: api.MutationRecord.attributeNamespace
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} read-only property **`attributeNamespace`** is the namespace of the mutated attribute in the {{domxref("MutationRecord")}} observed by a {{domxref("MutationObserver")}}.

## Value

If the record's [`type`](/en-US/docs/Web/API/MutationRecord/type) is `attributes`, the property is a string representing the namespace of the mutated attribute of the mutation target. The value is `null` otherwise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
