---
title: CharacterData.remove()
slug: Web/API/CharacterData/remove
tags:
  - API
  - CharacterData
  - DOM
  - Method
browser-compat: api.CharacterData.remove
---
{{APIRef("DOM")}}

The **`CharacterData.remove()`** method removes text.

## Syntax

```js
remove()
```

## Examples

### Using `remove()`

```html
<p id="myText">Some text</p>
```

```js
let text = document.getElementById('myText').firstChild;
text.remove(); // Removes the text
```

```html
<p id="myText"></p>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.remove()")}}
