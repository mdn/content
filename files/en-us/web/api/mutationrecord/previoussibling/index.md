---
title: MutationRecord.previousSibling
slug: Web/API/MutationRecord/previousSibling
page-type: web-api-instance-property
tags:
  - previousSibling
  - MutationRecord
  - Property
  - Reference
browser-compat: api.MutationRecord.previousSibling
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} property **`previousSibling`** is the previous sibling of an added or removed child node of the [`target`](/en-US/docs/Web/API/MutationRecord/target) of a {{domxref("MutationObserver")}}.

## Value

If a node is added or removed from the [`target`](/en-US/docs/Web/API/MutationRecord/target) of a {{domxref("MutationObserver")}}, the value is the node before (the previous sibling of) the added or removed node. The value is `null` if there are no added or removed nodes.

## Examples

In this code snippet, the observer will log to the console the tag name of every node added to the target node with the {{domxref("MutationObserver.observe()")}} property. It will then use the {{domxref("MutationRecord.previousSibling")}} property to log the tag name of the node after the before node.

```js
const observer = new MutationObserver(function(mutations) {
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
