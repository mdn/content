---
title: font-stretch
slug: Web/CSS/Reference/At-rules/@font-face/font-stretch
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.font-stretch
sidebar: cssref
---

> [!NOTE]
> The `font-stretch` descriptor was renamed to {{cssxref("@font-face/font-width")}} in the [CSS Fonts specification](https://drafts.csswg.org/css-fonts/#font-stretch-desc). To preserve compatibility, the specification retains `font-stretch` as a legacy alias for the `font-width` descriptor.

The **`font-stretch`** [CSS](/en-US/docs/Web/CSS) descriptor allows authors to specify a normal, condensed, or expanded face for the fonts specified in the {{cssxref("@font-face")}} at-rule.

For a particular font family, authors can download various font faces corresponding to the different styles of the same font family, and then use the `font-stretch` descriptor to specify the font face's stretch explicitly.

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

/* Multiple values */
font-stretch: 75% 125%;
font-stretch: condensed ultra-condensed;
```

The `font-stretch` descriptor can take a single value from the list below.

### Values

- `normal`
  - : Specifies a normally condensed font face.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Specifies a more condensed font face than normal, with ultra-condensed being the most condensed.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Specifies a more expanded font face than normal, with ultra-expanded being the most expanded.
- `<percentage>`
  - : A {{cssxref("&lt;percentage&gt;")}} value between 50% and 200% (inclusive). Negative values are not allowed for this descriptor.

In earlier versions of the `font-stretch` specification, the descriptor accepts only the nine keyword values. CSS Fonts Level 4 extends the syntax to accept a `<percentage>` value as well. This enables variable fonts to offer a continuous variation of character widths. For TrueType or OpenType variable fonts, the `wdth` variation is used to implement varying widths.

If the font does not provide a face that exactly matches the given value, then values less than `100%` map to a condensed face, and values greater than or equal to `100%` map to an expanded face.

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

Most fonts have a particular width that corresponds to one of the keyterm values. However, variable fonts can support a range of widths with fine granularity, giving the designer a greater degree of control over the chosen weight. For this, percentage ranges are useful.

For TrueType or OpenType variable fonts, the `wdth` variation is used to implement varying glyph widths.

## Accessibility

People with dyslexia and other cognitive conditions may have difficulty reading fonts that are too condensed, especially if the font has a [low color contrast ratio](/en-US/docs/Web/CSS/Reference/Properties/color#accessibility).

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{CSSSyntax("font-width")}}

## Examples

### Setting a percentage range for font-stretch

The following example uses the [League Mono](https://www.theleagueofmoveabletype.com/league-mono) font. It synthesizes different font families from the same font file using the `font-stretch` descriptor with different keywords and percentages.

```html
<p>League Mono</p>
<p>League Mono</p>
<p>League Mono</p>
```

```css
@font-face {
  font-family: "League Mono Ultra Condensed";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-stretch: ultra-condensed; /* same as 50% */
}

@font-face {
  font-family: "League Mono Normal";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-stretch: 100%; /* same as normal */
}

@font-face {
  font-family: "League Mono Ultra Expanded";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-stretch: ultra-expanded; /* same as 200% */
}

p:nth-child(1) {
  font-family: "League Mono Ultra Condensed", sans-serif;
}

p:nth-child(2) {
  font-family: "League Mono Normal", sans-serif;
}

p:nth-child(3) {
  font-family: "League Mono Ultra Expanded", sans-serif;
}
```

{{EmbedLiveSample("Setting font stretch percentages", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Modern {{cssxref("@font-face/font-width")}} descriptor, replacing `font-stretch`
- {{cssxref("@font-face/font-display")}} descriptor
- {{cssxref("@font-face/font-family")}} descriptor
- {{cssxref("@font-face/font-weight")}} descriptor
- {{cssxref("@font-face/font-style")}} descriptor
- {{cssxref("font-feature-settings")}} descriptor
- {{cssxref("@font-face/font-variation-settings")}} descriptor
- {{cssxref("@font-face/src")}} descriptor
- {{cssxref("@font-face/unicode-range", "unicode-range")}} descriptor
