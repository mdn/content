---
title: CSSFontFeatureValuesRule
slug: Web/API/CSSFontFeatureValuesRule
page-type: web-api-interface
browser-compat: api.CSSFontFeatureValuesRule
---

{{APIRef("CSSOM")}}

The **`CSSFontFeatureValuesRule`** interface represents an {{cssxref("@font-feature-values")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule), letting developers assign for each font face a common name to specify features indices to be used in {{cssxref("font-variant-alternates")}}.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSFontFeatureValuesRule.fontFamily")}}
  - : A string that identifies the font family this rule applies to.

## Instance methods

_Inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

### Read font family

In this example, we declare two {{cssxref("@font-feature-values")}} one for the _Font One_ font family, and the other for _Font Two_. We then use the CSSOM to read these font families, displaying them into the log.

#### HTML

```html
<pre id="log"></pre>
```

#### CSS

```css
/* At-rule for "nice-style" in Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* At-rule for "nice-style" in Font Two */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

/* Apply the at-rules with a single declaration */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

#### JavaScript

```js
const log = document.getElementById("log");
const rules = document.styleSheets[document.styleSheets.length - 1].cssRules;

const fontOne = rules[0]; // A CSSFontFeatureValuesRule
log.textContent = `The 1st '@font-feature-values' family: "${fontOne.fontFamily}".\n`;

const fontTwo = rules[1]; // Another CSSFontFeatureValuesRule
log.textContent += `The 2nd '@font-feature-values' family: "${fontTwo.fontFamily}".`;
```

{{EmbedLiveSample("read_font_family", "100%", "75px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-feature-values")}}
