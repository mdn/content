---
title: MutationRecord.previousSibling()
slug: Web/API/MutationRecord/previousSibling
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
browser-compat: api.MutationRecord.previousSibling
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} method **`previousSibling()`** returns the node before an added or removed node.

## Syntax

```js-nolint
nextSibling()
```

### Parameters

None.

### Return value

If a node is added or removed with a mutation observed by a {{domxref("MutationObserver")}}, the method returns the node before (the next sibling of) the added or removed node; returns `null` otherwise.

## Examples

In this code snippet, the observer will log to the console the tag name of every node added to the target node with the {{domxref("MutationObserver.observe")}} method. It will then use the {{domxref("MutationRecord.previousSibling")}} method to log the tag name of the node after the before node.

```js
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
            console.log(mutation.addedNodes[i].tagName);
            console.log(mutation.addedNodes[i].previousSibling.tagName);
        }
    });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
