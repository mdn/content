---
title: "EditContext: characterBoundsRangeStart property"
short-title: characterBoundsRangeStart
slug: Web/API/EditContext/characterBoundsRangeStart
page-type: web-api-instance-property
browser-compat: api.EditContext.characterBoundsRangeStart
---

{{APIRef("EditContext API")}}

The **`characterBoundsRangeStart`** read-only property of the {{domxref("EditContext")}} interface indicates the index of the character, within the editable text content, that corresponds to the first item in the {{domxref("EditContext.characterBounds()", "characterBounds")}} array.

So, if the `EditContent` contains the characters `abc`, and if `characterBoundRangeStart` is `1`, then that means the first item in the `characterBounds` array contains the bounds for the character `b`.

## Value

A {{jsxref("Number")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
