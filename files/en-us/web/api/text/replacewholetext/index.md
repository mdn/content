---
title: Text.replaceWholeText()
slug: Web/API/Text/replaceWholeText
tags:
  - Method
  - Deprecated
  - Reference
browser-compat: api.Text.replaceWholeText
---
{{ApiRef("DOM")}}{{deprecated_header}}

The **`replaceWholeText()`** method of the {{domxref("Text")}} interface
replaces the text of the node and _all of its logically adjacent text nodes_ with the specified text.
The replaced nodes are removed, including the current node, unless it was the recipient of
the replacement text.

> **Note:** In order to achieve a similar effect in modern browsers,
> consider using {{domxref("Node.textContent")}}, {{domxref("Element.innerHTML")}},
> {{domxref("HTMLELement.innerText")}}, or {{domxref("CharacterData.replaceData()")}}.

## Syntax

```js
replaceWholeText(content)
```

### Parameters

- `content`
  - : The text to replace the nodes with.
    > **Note:** The `content` parameter is not optional but can be set to the empty string (`""`).

### Return value

A {{domxref("Text")}} node with the replaced string, or `null` if the replaces string was `""`.

> **Note:** The returned node is the current node unless the current node is read-only,
> in which case the returned node is a newly created text node of the same type
> which has been inserted at the location of the replacement.

### Exceptions

- `NoModificationError` {{domxref("DOMException")}}
  - : Thrown if all text nodes being replaced are read-only.

## Specifications

This method was originally present in the DOM specification. It has been removed and this feature is no longer on track to become a standard.

Instead, consider using algorithms based on {{domxref("Node.textContent")}}, {{domxref("Element.innerHTML")}},
{{domxref("HTMLELement.innerText")}}, or {{domxref("CharacterData.replaceData()")}}.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Text")}} interface it belongs to.
- {{domxref("Node.textContent")}}, {{domxref("Element.innerHTML")}},
  {{domxref("HTMLELement.innerText")}}, {{domxref("CharacterData.replaceData()")}}
