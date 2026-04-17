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

Although the `style` property itself is read-only in the sense that you can't replace the `CSSFontFaceDescriptors` object, you can still assign to the `style` property directly, which is equivalent to assigning to its {{domxref("CSSStyleDeclaration/cssText", "cssText")}} property.
You can also modify the `CSSFontFaceDescriptors` object using the {{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} and {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}} methods.

## Examples

### Basic usage

This example defines a {{cssxref("@font-face")}} rule and then uses `CSSFontFaceDescriptors` to read back the descriptor values.

#### CSS

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"),
    local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.woff2") format("woff2");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```

```css hidden
#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

```js
const myRules = document.getElementById("css-output").sheet.cssRules;
for (const rule of myRules) {
  if (rule instanceof CSSFontFaceRule) {
    const descriptors = rule.style;
    if (descriptors instanceof CSSStyleDeclaration) {
      log(`rule.style is a CSSStyleDeclaration.`);
    } else {
      log(`rule.style is a CSSFontFaceDescriptors.`);
    }
    log("Descriptors:");
    log(` font-family: ${descriptors.fontFamily}`);
    log(` src: ${descriptors.src}`);
    log(` font-weight: ${descriptors["font-weight"]}`);
    log(` font-style: ${descriptors.fontStyle}`);
    log(` font-display: ${descriptors["font-display"]}`);
  }
}
```

#### Result

{{EmbedLiveSample("Basic usage", "100%", "250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
