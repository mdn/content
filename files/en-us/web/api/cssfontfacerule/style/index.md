---
title: "CSSFontFaceRule: style property"
short-title: style
slug: Web/API/CSSFontFaceRule/style
page-type: web-api-instance-property
browser-compat: api.CSSFontFaceRule.style
---

{{APIRef("CSSOM")}}

The read-only **`style`** property of the {{domxref("CSSFontFaceRule")}} interface returns a {{domxref("CSSFontFaceDescriptors")}} object representing the descriptors available in the {{cssxref("@font-face")}} rule's body.

## Value

A {{domxref("CSSFontFaceDescriptors")}} object.

Although the `style` property itself is read-only in the sense that you can't replace the `CSSFontFaceDescriptors` object, you can still assign to the `style` property directly, which is equivalent to assigning to its {{domxref("CSSStyleDeclaration/cssText", "cssText")}} property. You can also modify the `CSSFontFaceDescriptors` object using the {{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} and {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}} methods.

## Examples

This example uses the CSS found as an example on the {{cssxref("@font-face")}} page. The first {{domxref("CSSRule")}} returned will be a `CSSFontFaceRule`. The `style` property returns a {{domxref("CSSFontFaceDescriptors")}} object with the properties `fontFamily`, `fontWeight`, and `src` populated with the information from the rule.

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.woff2");
  font-weight: bold;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // A CSSFontFaceDescriptors
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
