---
title: CharacterData.replaceWith()
slug: Web/API/CharacterData/replaceWith
tags:
  - API
  - DOM
  - Method
  - CharacterData
  - Reference
browser-compat: api.CharacterData.replaceWith
---
{{APIRef("DOM")}}

The **`replaceWith()`** method of the {{domxref("CharacterData")}} interface
replaces this node in the children list of its parent
with a set of {{domxref("Node")}} objects or string.

Strings are inserted as {{domxref("Text")}} nodes; the string is being passed as argument to the {{domxref("Text/Text", "Text()")}} constructor.

## Syntax

```js
replaceWith(... nodes)
```

### Parameters

- `nodes` {{optional_inline}}
  - : A comma-separated list of {{domxref("Node")}} objects or strings that will replace the current node.

> **Note:** If there no argument is passed, this method acts just remove the node from the DOM tree.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Example

```html
<p id="myText">Some text</p>
```

```js
let text = document.getElementById('myText').firstChild;
let em = document.createElement("em");
em.textContent = "Italic text";

text.replaceWith(); // Replace `Some text` by `Italic text`
```

{{EmbedLiveSample("Example", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.replaceData()")}}
