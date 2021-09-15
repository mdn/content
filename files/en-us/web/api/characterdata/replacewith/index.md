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

The **`CharacterData.replaceWith()`** method replaces characters
in the children list of its parent with a set of {{domxref("Node")}} or {{domxref("DOMString")}} objects.
{{domxref("DOMString")}} objects are inserted as equivalent {{domxref("Text")}} nodes.

## Syntax

```js
replaceWith(...nodes)
```

### Parameters

- `nodes`
  - : A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to replace.

### Exceptions

- {{domxref("HierarchyRequestError")}}: Node cannot be inserted at the specified point
  in the hierarchy.

## Examples

### Using `replaceWith()`

```html
<p id="myText">Some text</p>
```

```js
let text = document.getElementById('myText').firstChild;
text.replaceWith("Other text");
```

```html
<p id="myText">Other text</p>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.replaceData()")}}
