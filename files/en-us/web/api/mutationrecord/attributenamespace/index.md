---
title: MutationRecord.attributeNamespace()
slug: Web/API/MutationRecord/attributeNamespace
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DOM Reference
  - Interface
  - MutationRecord
  - NeedsContent
  - NeedsUpdate
  - Reference
  - mutation
  - method
browser-compat: api.MutationRecord.attributeNamespace
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} method **`attributeNamespace()`** returns the namespace of the mutated attribute in the {{domxref("MutationRecord")}} observed by the target of a {{domxref("MutationObserver")}}.

## Syntax

```js-nolint
attributeNamespace()
```

### Parameters

None.

### Return value

If the mutated node type is `attributes`, the method returns the namespace of the mutated attribute of the mutation target; returns `null` otherwise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
