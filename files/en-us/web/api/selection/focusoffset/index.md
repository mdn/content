---
title: "Selection: focusOffset property"
short-title: focusOffset
slug: Web/API/Selection/focusOffset
page-type: web-api-instance-property
browser-compat: api.Selection.focusOffset
---

{{ ApiRef("DOM") }}

The **`Selection.focusOffset`** read-only property returns the
number of characters that the selection's focus is offset within the
{{domxref("Selection.focusNode")}} if said node is of type {{domxref("Text")}}, {{domxref("CDATASection")}} or {{domxref("Comment")}}.

In the case of {{domxref("Selection.focusNode")}} being another type of node, **`Selection.focusOffset`** returns the number of {{domxref("Node.childNodes")}} the selection's focus is offset within the {{domxref("Selection.focusNode")}}.

This number is zero-based. If the selection ends with the first character in the
{{domxref("Selection.focusNode")}}, `0` is returned.

## Value

A number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
