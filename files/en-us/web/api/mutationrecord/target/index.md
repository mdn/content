---
title: MutationRecord.target()
slug: Web/API/MutationRecord/target
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
browser-compat: api.MutationRecord.target
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} method **`target()`** returns the target of a mutation observed with a {{domxref("MutationObserver")}}.

## Syntax

```js-nolint
type()
```

### Parameters

None.

### Return value

The method returns the node changed by a mutation observed with a {{domxref("MutationObserver")}}; the return value can be vastly different depending on the value of {{domxref("MutationRecord.type")}}.

- If the node type is `attributes`, the method will return the element whose attribute(s) have been mutated.

- If the node type is `childList`, the method will return the element whose child element(s) have been mutated.

- If the node type is `characterData`, the method will return the {{domxref("characterData")}} node.

## Examples

In this code snippet, the `observer` will log to the console the tag name of every element with an observed mutation with the {{domxref("MutationObserver.observe")}} method.

```js
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log(mutation.target.tagName);
    });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
