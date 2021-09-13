---
title: Text.replaceWholeText()
slug: Web/API/Text/replaceWholeText
tags:
  - API
  - DOM
  - Method
  - Deprecated
  - Text
browser-compat: api.Text.replaceWholeText
---
{{ApiRef("DOM")}}{{deprecated_header}}

The **`Text.replaceWholeText()`** method replaces the text of
the node and all of its logically adjacent text nodes with the specified text. The
replaced nodes are removed, including the current node, unless it was the recipient of
the replacement text.

A {{domxref("DOMException")}} with the value `NO_MODIFICATION_ERR` is thrown
if one of the text nodes being replaced is read only.

This method returns the text node which received the replacement text, or
`null` if the replacement text is an empty string. The returned node is the
current node unless the current node is read only, in which case the returned node is a
newly created text node of the same type which has been inserted at the location of the
replacement.

> **Note:** In order to achieve a similar effect in modern browsers,
> consider using {{domxref("Node.textContent")}} or {{domxref("Element.innerHTML")}}.

## Syntax

```js
replacementNode = textnode.replaceWholeText(content)
```

## Specifications

This method was originally present in the DOM specification. It has been removed and this feature is no longer on track to become a standard.

Instead, consider using algorithms based on {{domxref("Node.textContent")}} or {{domxref("Element.innerHTML")}}.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Text")}} interface it belongs to.
