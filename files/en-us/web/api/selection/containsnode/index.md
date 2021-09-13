---
title: Selection.containsNode()
slug: Web/API/Selection/containsNode
tags:
  - API
  - Experimental
  - HTML Editing
  - Method
  - Reference
  - Selection
browser-compat: api.Selection.containsNode
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`Selection.containsNode()`** method indicates whether a
specfied node is part of the selection.

## Syntax

```js
sel.containsNode(node, partialContainment)
```

### Parameters

- `node`
  - : The node that is being looked for in the selection.
- `partialContainment` {{optional_inline}}
  - : When `true`, `containsNode()` returns `true` when a
    part of the node is part of the selection. When `false`,
    `containsNode()` only returns `true` when the entire node is
    part of the selection. If not specified, the default value `false` is used.

## Example

### Check for selection

This snippet checks whether anything inside the body element is selected.

```js
console.log(window.getSelection().containsNode(document.body, true));
```

### Find the hidden word

In this example, a message appears when you select the secret word. It uses
{{domxref("EventTarget/addEventListener", "addEventListener()")}} to check for
{{domxref("Document/selectionchange_event", "selectionchange")}} events.

#### HTML

```html
<p>Can you find the secret word?</p>
<p>Hmm, where <span id="secret" style="color:transparent">SECRET</span> could it be?</p>
<p id="win" hidden>You found it!</p>
```

#### JavaScript

```js
const secret = document.getElementById('secret');
const win = document.getElementById('win');

// Listen for selection changes
document.addEventListener('selectionchange', () => {
  const selection = window.getSelection();
  const found = selection.containsNode(secret);

  win.toggleAttribute('hidden', !found);
});
```

#### Result

{{EmbedLiveSample("Find_the_hidden_word")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
