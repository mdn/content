---
title: "Document: moveBefore() method"
short-title: moveBefore()
slug: Web/API/Document/moveBefore
page-type: web-api-instance-method
browser-compat: api.Document.moveBefore
---

{{APIRef("DOM")}}

The **`moveBefore()`** method of the {{domxref("Document")}} interface moves a given {{domxref("Node")}} inside the `Document` DOM node as a direct child, before a given reference node.

`moveBefore()` provides similar functionality to the {{domxref("Node.insertBefore()")}} method, except that it doesn't remove and then insert the node. This means that the state of the node is preserved after the move, which includes:

- [Animation](/en-US/docs/Web/CSS/CSS_animations) and [transition](/en-US/docs/Web/CSS/CSS_transitions) state.
- {{htmlelement("video")}} play state.
- {{htmlelement("iframe")}} loading state.
- Interactive node {{cssxref(":focus")}} and {{cssxref(":active")}} states.
- Open/close state of [popovers](/en-US/docs/Web/API/Popover_API) and {{htmlelement("dialog")}} elements.

If the given `Node` has not already been added to the DOM, `moveBefore()` inserts it into the specified position. If the node being moved is a {{domxref("DocumentFragment")}}, the entire contents of the `DocumentFragment` are moved into the child list of the specified parent node.

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

- `NotFoundError` {{jsxref("TypeError")}}
  - : The specified `referenceNode` is not a child of the node you are calling `moveBefore()` on, that is, the node you are trying to move `movedNode` inside.
- `TypeError` {{jsxref("TypeError")}}
  - : The second argument was not supplied.

## Examples

The `moveBefore()` method is not particularly useful when invoked on the `Document` node. You are much more likely to find a use for invoking it on an individual {{domxref("Element")}} — see {{DOMxRef("Element.moveBefore()")}} for some examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DocumentFragment.moveBefore()")}}
- {{domxref("Element.moveBefore()")}}
- {{domxref("Node.insertBefore()")}}
