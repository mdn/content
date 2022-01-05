---
title: Selection.selectAllChildren()
slug: Web/API/Selection/selectAllChildren
tags:
  - API
  - HTML Editing
  - Method
  - Reference
  - Selection
browser-compat: api.Selection.selectAllChildren
---
{{ ApiRef("DOM") }}

The **`Selection.selectAllChildren()`** method adds all the
children of the specified node to the selection. Previous selection is lost.

## Syntax

```js
sel.selectAllChildren(parentNode)
```

### Parameters

- `parentNode`
  - : All children of `parentNode` will be selected. `parentNode`
    itself is not part of the selection.

## Example

### HTML

```html
<main>
  <button>Select Footer</button>
  <p>Welcome to my website.</p>
  <p>I hope you enjoy your visit.</p>
</main>
<footer>
  <address>webmaster@example.com</address>
  <p>© 2019</p>
</footer>
```

### JavaScript

```js
const button = document.querySelector('button');
const footer = document.querySelector('footer');

button.addEventListener('click', (e) => {
  window.getSelection().selectAllChildren(footer);
});
```

### Result

{{EmbedLiveSample("Example", 700, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
