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
  - : A {{domxref("Node")}} representing the node to be moved. Note that this must be an {{domxref("Element")}} or a {{domxref("CharacterData")}} node.
- `referenceNode`
  - : A {{domxref("Node")}} that `movedNode` will be moved before, or `null`. If the value is `null`, `movedNode` is inserted at the end of the `Document`'s child nodes.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : Thrown in any of the following situations:
    - The specified `movedNode` is not part of this document.
    - The specified `movedNode` is not an {{domxref("Element")}} or {{domxref("CharacterData")}} node.
    - You are trying to move `movedNode` before the document's [Doctype](/en-US/docs/Glossary/Doctype) (represented by a {{domxref("DocumentType")}} object).
- `NotFoundError` {{jsxref("TypeError")}}
  - : The specified `referenceNode` is not a child of the node you are calling `moveBefore()` on, that is, the node you are trying to move `movedNode` inside.
- `TypeError` {{jsxref("TypeError")}}
  - : The second argument was not supplied.

## Description

The `moveBefore()` method moves a given node to a new place in the DOM. It provides similar functionality to the {{domxref("Node.insertBefore()")}} method, except that it doesn't remove and then reinsert the node. This means that the state of the node (which would be reset if moving it with `insertBefore()` and similar mechanisms) is preserved after the move. This includes:

- [Animation](/en-US/docs/Web/CSS/CSS_animations) and [transition](/en-US/docs/Web/CSS/CSS_transitions) state.
- {{htmlelement("iframe")}} loading state.
- Interactivity states (for example, {{cssxref(":focus")}} and {{cssxref(":active")}}).
- [Fullscreen](/en-US/docs/Web/API/Fullscreen_API) element state.
- Open/close state of [popovers](/en-US/docs/Web/API/Popover_API).
- Modal state of {{htmlelement("dialog")}} elements (modal dialogs will not be closed).

The play state of {{htmlelement("video")}} and {{htmlelement("audio")}} elements is not included in the above list, as these elements retain their state when removed and reinserted, regardless of the mechanism used.

When observing changes to the DOM using a {{domxref("MutationObserver")}}, nodes moved with `moveBefore()` will be recorded with a [removed node](/en-US/docs/Web/API/MutationRecord/removedNodes) and an [added node](/en-US/docs/Web/API/MutationRecord/addedNodes).

The `moveBefore()` method is not particularly useful when invoked on the `Document` node. There are some non-element uses for it, for example you could use `moveBefore()` to move comment nodes around the root of the `Document`. However, you are much more likely to find a use for invoking it on an individual `DocumentFragment` or `Element` — see {{domxref("DocumentFragment.moveBefore()")}} and {{domxref("Element.moveBefore()")}}.

### `moveBefore()` constraints

There are some constraints to be aware of when using `moveBefore()`:

- It can only work when moving a node within the same document.
- It won't work if you try to move a node that is not connected to the DOM to an already connected parent, or vice versa.

In such cases, `moveBefore()` will fail with a `HierarchyRequestError` exception. If the above constraints are requirements for your particular use case, you should use {{domxref("Node.insertBefore()")}} instead, or use [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) to handle the errors that arise from such cases.

## Examples

### Moving a comment node with `moveBefore()`

In this demo we show how to use `document.moveBefore()` to move a comment node within the DOM.

#### HTML

The HTML is a minimal template that features a comment inside the {{htmlelement("body")}}.

```html live-sample___movebefore-comment
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>document.moveBefore() example</title>
  </head>
  <body>
    <!-- This comment should be at the end of the document -->
    <p>Some content</p>
  </body>
</html>
```

#### JavaScript

In our script, we loop through all the {{domxref("Node.childNodes", "childNodes")}} of the `<body>` element. When we find a node with a {{domxref("Node.nodeType", "nodeType")}} value of `8` (which indicates a comment node), we store a reference to it inside a variable called `commentNode`. We then invoke `document.moveBefore()`, specifying that we want to move the comment node, and specifying a second argument of `null` to insert our comment the end of the `Document`'s child nodes.

```js live-sample___movebefore-comment
let commentNode;

for (node of document.querySelector("body").childNodes) {
  if (node.nodeType === 8) {
    commentNode = node;
  }
}

document.moveBefore(commentNode, null);
```

#### Result

The rendered example looks like this:

{{EmbedLiveSample("movebefore-comment", "100%", "60px")}}

If you inspect the example with your browser's developer tools, you'll notice that the comment has been moved to the end of the document, after the closing `</html>` tag.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DocumentFragment.moveBefore()")}}
- {{domxref("Element.moveBefore()")}}
- {{domxref("Node.insertBefore()")}}
