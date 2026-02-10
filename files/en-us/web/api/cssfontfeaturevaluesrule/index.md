---
title: CSSFontFeatureValuesRule
slug: Web/API/CSSFontFeatureValuesRule
page-type: web-api-interface
browser-compat: api.CSSFontFeatureValuesRule
---

{{APIRef("CSSOM")}}

The **`CSSFontFeatureValuesRule`** interface represents an {{cssxref("@font-feature-values")}} [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules). The values of its instance properties can be accessed with the [`CSSFontFeatureValuesMap`](/en-US/docs/Web/API/CSSFontFeatureValuesMap)interface.

`@font-feature-values` allows developers to associate, for a given font face, a human-readable name with a numeric index that controls a particular [OpenType font feature](/en-US/docs/Web/CSS/Guides/Fonts/OpenType_fonts).
For features that select alternative glyphs (stylistic, styleset, character-variant, swash, ornament or annotation), the {{cssxref("font-variant-alternates")}} property can then reference the human-readable name in order to apply the associated feature.
This is convenient, because it allows the same name to be used of represent a set of alternative glyphs across a number of fonts.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSFontFeatureValuesRule.annotation")}}
  - : A user defined value definition and value that applies an alternate annotation of the font.
- {{domxref("CSSFontFeatureValuesRule.characterVariant")}}
  - : A user defined value definition and value that applies a stylistic alternatives for characters of the font.
- {{domxref("CSSFontFeatureValuesRule.fontFamily")}}
  - : A string that identifies the font family this rule applies to.
- {{domxref("CSSFontFeatureValuesRule.ornaments")}}
  - : A user defined value definition and value that applies alternative ornaments of the font.
- {{domxref("CSSFontFeatureValuesRule.styleset")}}
  - : A user defined value definition and value that applies alternate style sets of the font.
- {{domxref("CSSFontFeatureValuesRule.stylistic")}}
  - : A user defined value definition and value that applies alternative glyphs of the font.
- {{domxref("CSSFontFeatureValuesRule.swash")}}
  - : A user defined value definition and value that applies alternative swashes of the font.

## Instance methods

_Inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

### Read font family

In this example, we declare two {{cssxref("@font-feature-values")}} one for the _Font One_ font family, and the other for _Font Two_.
In both declarations we define that the name "nice-style" can be used to represent the styleset alternate glyphs for both of the fonts, specifying the index for that alternate in each font family.
The alternate glpyhs are then applied for any `.nice-cook` class, using {{cssxref("font-variant-alternates")}} and passing the name to the [`styleset()`](/en-US/docs/Web/CSS/Reference/Properties/font-variant-alternates#styleset) function.

We then use the CSSOM to read these declaration as `CSSFontFeatureValuesRule` instances, displaying them into the log.

#### HTML

```html
<pre id="log"></pre>
```

#### CSS

```css-nolint
/* At-rule for "nice-style" in Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12; /* name used to represent the alternate set of glyphs at index 12 */
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
  font-variant-alternates: styleset(
    nice-style
  ); /* name selects different index for same alternate in different fonts */
}
```

#### JavaScript

```js
const log = document.getElementById("log");
const rules = document.getElementById("css-output").sheet.cssRules;

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
