---
title: "CharacterData: replaceWith() method"
short-title: replaceWith()
slug: Web/API/CharacterData/replaceWith
page-type: web-api-instance-method
browser-compat: api.CharacterData.replaceWith
---

{{APIRef("DOM")}}

The **`replaceWith()`** method of the {{domxref("CharacterData")}} interface
replaces this node in the children list of its parent
with a set of {{domxref("Node")}} objects or string.

Strings are inserted as {{domxref("Text")}} nodes; the string is being passed as argument to the {{domxref("Text/Text", "Text()")}} constructor.

## Syntax

```js-nolint
replaceWith(...nodes)
```

### Parameters

- `nodes` {{optional_inline}}
  - : A comma-separated list of {{domxref("Node")}} objects or strings that will replace the current node.

> [!NOTE]
> If no arguments are passed in, this method removes the node from the DOM tree.

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
let text = document.getElementById("myText").firstChild;
let em = document.createElement("em");
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
