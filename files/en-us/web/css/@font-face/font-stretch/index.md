---
title: font-stretch
slug: Web/CSS/@font-face/font-stretch
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.font-stretch
---

{{CSSRef}}

The **`font-stretch`** CSS descriptor allows authors to specify a normal, condensed, or expanded face for the fonts specified in the {{cssxref("@font-face")}} at-rule.

For a particular font family, authors can download various font faces which correspond to the different styles of the same font family, and then use the `font-stretch` descriptor to explicitly specify the font face's stretch. The values for the CSS descriptor is same as that of its corresponding font property.

## Syntax

```css
/* Single values */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* multiple values */
font-stretch: 75% 125%;
font-stretch: condensed ultra-condensed;
```

The `font-stretch` property is described using any one of the values listed below.

### Values

- `normal`
  - : Specifies a normal font face.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Specifies a more condensed font face than normal, with ultra-condensed as the most condensed.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Specifies a more expanded font face than normal, with ultra-expanded as the most expanded.
- `<percentage>`
  - : A {{cssxref("&lt;percentage&gt;")}} value between 50% and 200% (inclusive). Negative values are not allowed for this property.

In earlier versions of the `font-stretch` specification, the property accepts only the nine keyword values. CSS Fonts Level 4 extends the syntax to accept a `<percentage>` value as well. This enables variable fonts to offer something more like a continuum of character widths. For TrueType or OpenType variable fonts, the "wdth" variation is used to implement varying widths.

If the font does not provide a face that exactly matches the given value, then values less than 100% map to a narrower face, and values greater than or equal to 100% map to a wider face.

### Keyword to numeric mapping

The table below shows the mapping between keyword values and numeric percentages:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Keyword</th>
      <th scope="col">Percentage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ultra-condensed</code></td>
      <td>50%</td>
    </tr>
    <tr>
      <td><code>extra-condensed</code></td>
      <td>62.5%</td>
    </tr>
    <tr>
      <td><code>condensed</code></td>
      <td>75%</td>
    </tr>
    <tr>
      <td><code>semi-condensed</code></td>
      <td>87.5%</td>
    </tr>
    <tr>
      <td><code>normal</code></td>
      <td>100%</td>
    </tr>
    <tr>
      <td><code>semi-expanded</code></td>
      <td>112.5%</td>
    </tr>
    <tr>
      <td><code>expanded</code></td>
      <td>125%</td>
    </tr>
    <tr>
      <td><code>extra-expanded</code></td>
      <td>150%</td>
    </tr>
    <tr>
      <td><code>ultra-expanded</code></td>
      <td>200%</td>
    </tr>
  </tbody>
</table>

### Variable fonts

Most fonts have a particular width which corresponds to one of the keyterm values. However some fonts, called variable fonts, can support a range of stretching with more or less fine granularity, and this can give the designer a much closer degree of control over the chosen weight. For this, percentage ranges are useful.

For TrueType or OpenType variable fonts, the "wdth" variation is used to implement varying glyph widths.

## Accessibility

People with dyslexia and other cognitive conditions may have difficulty reading fonts that are too condensed, especially if the font has a [low contrast color ratio](/en-US/docs/Web/CSS/color#accessibility).

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a percentage range for font-stretch

The following find a local Open Sans font or import it, and allow using the font for normal, semi-condensed and semi-expanded states.

```css
@font-face {
  font-family: "Open Sans";
  src:
    local("Open Sans") format("woff2"),
    url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-stretch: 87.5% 112.5%;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}} descriptor
