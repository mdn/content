---
title: "Selection: anchorOffset property"
short-title: anchorOffset
slug: Web/API/Selection/anchorOffset
page-type: web-api-instance-property
browser-compat: api.Selection.anchorOffset
---

{{ ApiRef("DOM") }}

The **`Selection.anchorOffset`** read-only property returns the
number of characters that the selection's anchor is offset within the
{{domxref("Selection.anchorNode")}} if said node is of type {{domxref("Text")}}, {{domxref("CDATASection")}} or {{domxref("Comment")}}.

In the case of {{domxref("Selection.anchorNode")}} being another type of node, **`Selection.anchorOffset`** returns the number of {{domxref("Node.childNodes")}} the selection's anchor is offset within the {{domxref("Selection.anchorNode")}}.

This number is zero-based. If the selection begins with the first character in the
{{domxref("Selection.anchorNode")}}, `0` is returned.

## Value

A number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
