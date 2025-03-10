---
title: MutationRecord
slug: Web/API/MutationRecord
page-type: web-api-interface
browser-compat: api.MutationRecord
---

{{APIRef("DOM")}}

The **`MutationRecord`** is a read-only interface that represents an individual DOM mutation observed by a {{domxref("MutationObserver")}}. It is the object inside the array passed to the callback of a {{domxref("MutationObserver")}}.

## Instance properties

- {{domxref("MutationRecord.addedNodes")}} {{ReadOnlyInline}}
  - : The nodes added by a mutation. Will be an empty {{domxref("NodeList")}} if no nodes were added.
- {{domxref("MutationRecord.attributeName")}} {{ReadOnlyInline}}
  - : The name of the changed attribute as a string, or `null`.
- {{domxref("MutationRecord.attributeNamespace")}} {{ReadOnlyInline}}
  - : The namespace of the changed attribute as a string, or `null`.
- {{domxref("MutationRecord.nextSibling")}} {{ReadOnlyInline}}
  - : The next sibling of the added or removed nodes, or `null`.
- {{domxref("MutationRecord.oldValue")}} {{ReadOnlyInline}}
  - : The value depends on the {{domxref("MutationRecord.type")}}:
    - For `attributes`, it is the value of the changed attribute before the change.
    - For `characterData`, it is the data of the changed node before the change.
    - For `childList`, it is `null`.
- {{domxref("MutationRecord.previousSibling")}} {{ReadOnlyInline}}
  - : The previous sibling of the added or removed nodes, or `null`.
- {{domxref("MutationRecord.removedNodes")}} {{ReadOnlyInline}}
  - : The nodes removed by a mutation. Will be an empty {{domxref("NodeList")}} if no nodes were removed.
- {{domxref("MutationRecord.target")}} {{ReadOnlyInline}}
  - : The node the mutation affected, depending on the `MutationRecord.type`.
    - For `attributes`, it is the element whose attribute changed.
    - For `characterData`, it is the `CharacterData` node.
    - For `childList`, it is the node whose children changed.
- {{domxref("MutationRecord.type")}} {{ReadOnlyInline}}
  - : A string representing the type of mutation: `attributes` if the mutation was an attribute mutation, `characterData` if it was a mutation to a `CharacterData` node, and `childList` if it was a mutation to the tree of nodes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
