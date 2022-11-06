---
title: MutationRecord.addedNodes()
slug: Web/API/MutationRecord/addedNodes
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
browser-compat: api.MutationRecord.addedNodes
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} method **`addedNodes()`** returns a {{domxref("NodeList")}} of nodes added to a target node by a mutation observed with a {{domxref("MutationObserver")}}.

## Syntax

```js-nolint
addedNodes()
```

### Parameters

None.

### Return value

If the mutated node type is `childList`, the method returns a `NodeList` of the nodes added to the target of the mutation observed by the {{domxref("MutationObserver")}}, and will return an empty `NodeList` if there are no mutations observed; returns `null` if the type is not of `childList`.

## Examples

In this code snippet, the observer will log to the console the tag name of every node added to the target node with the {{domxref("MutationObserver.observe")}} method.

```js
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
            console.log(mutation.addedNodes[i].tagName);
        }
    });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
