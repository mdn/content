---
title: "CharacterData: replaceWith() method"
short-title: replaceWith()
slug: Web/API/CharacterData/replaceWith
page-type: web-api-instance-method
browser-compat: api.CharacterData.replaceWith
---

{{APIRef("DOM")}}

The **`replaceWith()`** method of the {{domxref("CharacterData")}} interface replaces this `CharacterData` in the children list of its parent with a set of {{domxref("Node")}} objects or strings. Strings are inserted as equivalent {{domxref("Text")}} nodes. Nothing happens if {{domxref("Node.parentNode", "parentNode")}} is `null`.

## Syntax

```js-nolint
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* …, */ paramN)
```

### Parameters

- `param1`, …, `paramN`
  - : A set of {{domxref("Node")}} objects or strings to insert.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

```html
<p id="myText">Some text</p>
```

```js
const text = document.getElementById("myText").firstChild;
const em = document.createElement("em");
em.textContent = "Italic text";

text.replaceWith(em); // Replace `Some text` by `Italic text`
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.replaceData()")}}
- {{domxref("DocumentType.replaceWith()")}}
- {{domxref("Element.replaceWith()")}}
