---
title: MutationRecord.removedNodes()
slug: Web/API/MutationRecord/removedNodes
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
browser-compat: api.MutationRecord.removedNodes
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} method **`removedNodes()`** returns a {{domxref("NodeList")}} of nodes removed from a target node by a mutation observed with a {{domxref("MutationObserver")}}.

## Syntax

```js-nolint
addedNodes()
```

### Parameters

None.

### Return value

If the mutated node type is `childList`, the method returns a `NodeList` of the nodes removed from the target of the mutation observed by the {{domxref("MutationObserver")}}, and will return an empty `NodeList` if there are no mutations observed; returns `null` if the mutated node type is not of `childList`.

## Examples

In this code snippet, the observer will log to the console the tag name of every node removed from the target node with the {{domxref("MutationObserver.observe")}} method.

```js
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        for (var i = 0; i < mutation.removedNodes.length; i++) {
            console.log(mutation.removedNodes[i].tagName);
        }
    });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
