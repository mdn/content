---
title: CSSFontFaceRule
slug: Web/API/CSSFontFaceRule
page-type: web-api-interface
browser-compat: api.CSSFontFaceRule
---

{{APIRef("CSSOM")}}

The **`CSSFontFaceRule`** interface represents an {{cssxref("@font-face")}} [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSFontFaceRule.style")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("CSSFontFaceDescriptors")}} object that allows reading and setting the descriptors of the associated {{cssxref("@font-face")}} at-rule.

## Instance methods

_Inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

### Accessing @font-face properties

This example defines a {{cssxref("@font-face")}} rule and then iterates the rules on the page to the associated `CSSFontFaceRule`.
It then logs some of the properties.

#### CSS

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.woff2");
  font-weight: bold;
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

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const myRules = document.getElementById("css-output").sheet.cssRules;
for (const rule of myRules) {
  if (rule instanceof CSSFontFaceRule) {
    log(`this: ${rule}`);
    log(` cssText: ${rule.cssText}`);
    log(` parentRule: ${rule.parentRule}`);
    log(` parentStyleSheet: ${rule.parentStyleSheet}`);
    log(` type: ${rule.type}`);
    log(` style: ${rule.style}`);
  }
}
```

#### Result

{{EmbedLiveSample("Accessing @font-face properties", "100%", "250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
