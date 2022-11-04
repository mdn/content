---
title: MutationRecord.nextSibling()
slug: Web/API/MutationRecord/nextSibling
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
browser-compat: api.MutationRecord.nextSibling
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} method **`nextSibling()`** returns the node after an added or removed node. 

## Syntax

```js-nolint
nextSibling()
```

### Parameters

None.

### Return value

If a node is added or removed with a mutation observed by a {{domxref("MutationObserver")}}, the method returns the node after (the next sibling of) the added or removed node; returns `null` otherwise.

## Examples

In this code snippet, the observer will log to the console the tag name of every node added to the target node with the {{domxref("MutationObserver.observe")}} method. It will then use the {{domxref("MutationRecord.nextSibling")}} method to log the tag name of the node after the added node.

```js
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
            console.log(mutation.addedNodes[i].tagName);
            console.log(mutation.addedNodes[i].nextSibling.tagName);
        }
    });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}