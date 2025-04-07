---
title: "Document: moveBefore() method"
short-title: moveBefore()
slug: Web/API/Document/moveBefore
page-type: web-api-instance-method
browser-compat: api.Document.moveBefore
---

{{APIRef("DOM")}}

The **`moveBefore()`** method of the {{domxref("Document")}} interface moves a given {{domxref("Node")}} inside the `Document` DOM node as a direct child, before a given reference node.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameters

- `movedNode`
  - : A {{domxref("Node")}} representing the node to be moved.
- `referenceNode`
  - : A {{domxref("Node")}} that `movedNode` will be moved before, or `null`. If the value is `null`, `movedNode` is inserted at the end of the `Document`'s child nodes.
    > [!NOTE]
    > The `referenceNode` parameter is mandatory. You must explicitly pass a {{domxref("Node")}} or `null`.

### Return value

None ({{jsxref("Undefined")}}).

### Exceptions

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : Thrown when:
    - The specified `referenceNode` is not yet added to the DOM, and you are trying to move it inside a node that is part of the DOM, or vice versa.
    - An attempt is made to move `movedNode` between two different documents.
- `NotFoundError` {{jsxref("TypeError")}}
  - : The specified `referenceNode` is not a child of the node you are calling `moveBefore()` on, that is, the node you are trying to move `movedNode` inside.
- `TypeError` {{jsxref("TypeError")}}
  - : The second argument was not supplied.

## Description

The `moveBefore()` method moves a given node to a new place in the DOM. It provides similar functionality to the {{domxref("Node.insertBefore()")}} method, except that it doesn't remove and then reinsert the node. This means that the state of the node (which would be reset if moving it with `insertBefore()` and similar mechanisms) is preserved after the move. This includes:

- [Animation](/en-US/docs/Web/CSS/CSS_animations) and [transition](/en-US/docs/Web/CSS/CSS_transitions) state.
- {{htmlelement("iframe")}} loading state.
- Interactive node {{cssxref(":focus")}} and {{cssxref(":active")}} states.
- [Fullscreen](/en-US/docs/Web/API/Fullscreen_API) element state.
- Open/close state of [popovers](/en-US/docs/Web/API/Popover_API).
- Modal state of {{htmlelement("dialog")}} elements (modal dialog will not be closed).

The play state of {{htmlelement("video")}} and {{htmlelement("audio")}} elements is not included in the above list, as these elements retain their state when removed and reinserted, regardless of the mechanism used.

> [!NOTE]
> When observing changes to the DOM using a {{domxref("MutationObserver")}}, nodes moved with `moveBefore()` will be recorded with a [removed node](/en-US/docs/Web/API/MutationRecord/removedNodes) and an [added node](/en-US/docs/Web/API/MutationRecord/addedNodes).

### `moveBefore()` constaints

There are some constraints to be aware of when using `moveBefore()`:

- It can only work when moving a node within the same document.
- It won't work if you try to move a node that is not connected to the DOM to an already connected parent, or vice versa.

In such cases, `moveBefore()` will fail with a `HierarchyRequestError` exception. If the above constraints are requirements for your particular use case, you should use {{domxref("Node.insertBefore()")}} instead, or use [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) to handle the errors that arise from such cases.

## Examples

The `moveBefore()` method is not particularly useful when invoked on the `Document` node. There are some non-element uses for it, for example you could use `moveBefore()` to move comment nodes around the root of the `Document`. However, you are much more likely to find a use for invoking it on an individual {{domxref("Element")}} — see {{DOMxRef("Element.moveBefore()")}} for some examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DocumentFragment.moveBefore()")}}
- {{domxref("Element.moveBefore()")}}
- {{domxref("Node.insertBefore()")}}
