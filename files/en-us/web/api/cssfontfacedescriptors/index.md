---
title: CSSFontFaceDescriptors
slug: Web/API/CSSFontFaceDescriptors
page-type: web-api-interface
browser-compat: api.CSSFontFaceDescriptors
---

{{APIRef("CSSOM")}}

The **`CSSFontFaceDescriptors`** interface represents a CSS declaration block for an {{cssxref("@font-face")}} [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules).

Each descriptor in the body of the corresponding {{cssxref("@font-face")}} at-rule can be accessed using either its kebab-case property name in [bracket notation](/en-US/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation) or the camel-case version of the property name in [dot notation](/en-US/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation).
For example, you can access the `font-family` CSS descriptor as `style["font-family"]` or `style.fontFamily`, where `style` is a `CSSFontFaceDescriptors` instance.

> [!NOTE]
> The {{domxref("CSSFontFaceRule")}} interface represents a {{cssxref("@font-face")}} at-rule, and the {{domxref("CSSFontFaceRule.style")}} property is an instance of this object.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSStyleDeclaration")}}._

The following property names, in kebab-case (accessed using bracket notation) and camel-case (accessed using dot notation), each represent the value of a descriptor in the corresponding `@font-face` at-rule:

- `font-display` or `fontDisplay`
  - : A string representing the value of the {{cssxref("@font-face/font-display", "font-display")}} descriptor.
- `font-family` or `fontFamily`
  - : A string representing the value of the {{cssxref("@font-face/font-family", "font-family")}} descriptor.
- `font-feature-settings` or `fontFeatureSettings`
  - : A string representing the value of the {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}} descriptor.
- `font-stretch` or `fontStretch`
  - : A string representing the value of the {{cssxref("@font-face/font-stretch", "font-stretch")}} descriptor.
- `font-style` or `fontStyle`
  - : A string representing the value of the {{cssxref("@font-face/font-style", "font-style")}} descriptor.
- `font-weight` or `fontWeight`
  - : A string representing the value of the {{cssxref("@font-face/font-weight", "font-weight")}} descriptor.
- `font-width` or `fontWidth`
  - : A string representing the value of the {{cssxref("@font-face/font-width", "font-width")}} descriptor.
- `size-adjust` or `sizeAdjust`
  - : A string representing the value of the {{cssxref("@font-face/size-adjust", "size-adjust")}} descriptor.
- `src`
  - : A string representing the value of the {{cssxref("@font-face/src", "src")}} descriptor.
- `unicode-range` or `unicodeRange`
  - : A string representing the value of the {{cssxref("@font-face/unicode-range", "unicode-range")}} descriptor.

## Instance methods

_No specific methods; inherits methods from its ancestor {{domxref("CSSStyleDeclaration")}}._

## Examples

### Accessing @font-face descriptor values

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
    const style = rule.style;
    log(`font-family: ${style.fontFamily}`);
    log(`src: ${style.src}`);
    log(`font-weight: ${style["font-weight"]}`);
    log(`font-style: ${style.fontStyle}`);
    log(`font-display: ${style["font-display"]}`);
  }
}
```

#### Result

{{EmbedLiveSample("Accessing @font-face descriptor values", "100%", "250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSFontFaceRule")}}
- {{domxref("CSSFontFaceRule.style")}}
- {{cssxref("@font-face")}}
