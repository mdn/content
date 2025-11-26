---
title: "CSSFunctionDeclarations: style property"
short-title: style
slug: Web/API/CSSFunctionDeclarations/style
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CSSFunctionDeclarations.style
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

The read-only **`style`** property of the {{domxref("CSSFunctionDeclarations")}} interface contains a {{domxref("CSSFunctionDescriptors")}} object representing the descriptors available in the {{cssxref("@function")}} rule's body.

## Value

A {{domxref("CSSFunctionDescriptors")}} object.

Although the `style` property itself is read-only in the sense that you can't replace the `CSSFunctionDescriptors` object, you can still assign to the `style` property directly, which is equivalent to assigning to its {{domxref("CSSStyleDeclaration/cssText", "cssText")}} property. You can also modify the `CSSFunctionDescriptors` object using the {{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} and {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}} methods.

## Examples

See the main {{domxref("CSSFunctionDeclarations")}} reference page for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@function")}}
