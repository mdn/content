---
title: "DocumentFragment: moveBefore() method"
short-title: moveBefore()
slug: Web/API/DocumentFragment/moveBefore
page-type: web-api-instance-method
browser-compat: api.DocumentFragment.moveBefore
---

{{APIRef("DOM")}}

The **`moveBefore()`** method of the {{domxref("DocumentFragment")}} interface moves a given {{domxref("Node")}} inside the invoking `DocumentFragment` as a direct child, before a given reference node.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameters

- `movedNode`
  - : A {{domxref("Node")}} representing the node to be moved. Note that this must be an {{domxref("Element")}} or a {{domxref("CharacterData")}} node.
- `referenceNode`
  - : A {{domxref("Node")}} that `movedNode` will be moved before, or `null`. If the value is `null`, `movedNode` is inserted at the end of the invoking `DocumentFragment`'s child nodes.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Thrown in any of the following situations:
    - The fragment and `movedNode` have different shadow-including roots (the roots returned by {{domxref("Node.getRootNode()", "getRootNode({ composed: true })")}}).
    - The move would place a node inside itself or one of its descendants, including through a shadow tree.
    - The specified `movedNode` is not an {{domxref("Element")}} or {{domxref("CharacterData")}} node.
- `NotFoundError` {{domxref("DOMException")}}
  - : The specified `referenceNode` is not a child of the `DocumentFragment` you are calling `moveBefore()` on, that is, the fragment you are trying to move `movedNode` inside.
- {{jsxref("TypeError")}}
  - : The second argument was not supplied.

## Description

The `moveBefore()` method moves a given node to a new place in the `DocumentFragment`. It provides similar functionality to the {{domxref("Node.insertBefore()")}} method, except that it doesn't remove and then reinsert the node. This means that the state of the node (which would be reset if moving it with `insertBefore()` and similar mechanisms) is preserved after the move. This includes:

- [Animation](/en-US/docs/Web/CSS/Guides/Animations) and [transition](/en-US/docs/Web/CSS/Guides/Transitions) state.
- {{htmlelement("iframe")}} loading state.
- Interactivity states (for example, {{cssxref(":focus")}} and {{cssxref(":active")}}).
- [Fullscreen](/en-US/docs/Web/API/Fullscreen_API) element state.
- Open/close state of [popovers](/en-US/docs/Web/API/Popover_API).
- Modal state of {{htmlelement("dialog")}} elements (modal dialogs will not be closed).

The play state of {{htmlelement("video")}} and {{htmlelement("audio")}} elements is not included in the above list, as these elements retain their state when removed and reinserted, regardless of the mechanism used.

An ordinary `DocumentFragment` is detached. Appending it to the document transfers its children and leaves the fragment empty; it does not connect the fragment itself. The state-preserving behavior is therefore most useful on a connected {{domxref("ShadowRoot")}}, which inherits from `DocumentFragment`.

When observing changes to the DOM using a {{domxref("MutationObserver")}}, nodes moved with `moveBefore()` will be recorded with a [removed node](/en-US/docs/Web/API/MutationRecord/removedNodes) and an [added node](/en-US/docs/Web/API/MutationRecord/addedNodes).

### `moveBefore()` constraints

There are some constraints to be aware of when using `moveBefore()`:

- It can only work when moving a node within the same shadow-including root. For an ordinary detached fragment, this means moving nodes already within that fragment. For a connected shadow root, nodes connected to the same document meet this requirement.
- It won't work if you try to move a node that is not connected to the DOM to an already connected parent, or vice versa.

In such cases, `moveBefore()` will fail with a `HierarchyRequestError` exception. If the above constraints are requirements for your particular use case, you should use {{domxref("Node.insertBefore()")}} instead, or use [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) to handle the errors that arise from such cases.

## Examples

### Preserving focus inside a shadow root

This example demonstrates how `moveBefore()` preserves an input's focus when moving it inside a shadow root.

#### HTML

The HTML contains a {{htmlelement("div")}} to host the shadow root and an {{htmlelement("output")}} to display whether the input remains focused after each move.

```html live-sample___movebefore-shadow
<div id="host"></div>
<output id="status"></output>
```

#### JavaScript

The script attaches a shadow root to the `<div>` and adds an input and a paragraph to it. The input's `keydown` event listener uses `moveBefore()` to move the input after the paragraph by passing `null`, or before it by passing the paragraph as the reference node. After each move, it updates the status output with whether the input is focused.

```js live-sample___movebefore-shadow
const shadow = document.getElementById("host").attachShadow({ mode: "open" });
const status = document.getElementById("status");
const input = document.createElement("input");
input.setAttribute("aria-label", "Type here, then press Enter to move");
input.placeholder = "Press Enter to move";
const paragraph = document.createElement("p");
paragraph.textContent = "The input can move before or after this paragraph.";
shadow.append(input, paragraph);

input.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.isComposing) {
    return;
  }
  event.preventDefault();
  const reference = input.nextSibling === paragraph ? null : paragraph;
  shadow.moveBefore(input, reference);
  status.textContent = `Input still focused: ${shadow.activeElement === input}`;
});
```

#### Result

{{EmbedLiveSample("movebefore-shadow", "100%", "180")}}

Focus the input and press <kbd>Enter</kbd> to move it before or after the paragraph. The input remains focused.

Using {{domxref("Node.insertBefore()", "shadow.insertBefore(input, reference)")}} instead would remove and reinsert the input, losing its focus. Ordinary reinsertion preserves the text inside the input box, but not the other states listed above.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.moveBefore()")}}
- {{domxref("Element.moveBefore()")}}
- {{domxref("Node.insertBefore()")}}
