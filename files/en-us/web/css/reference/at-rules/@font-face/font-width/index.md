---
title: font-width
slug: Web/CSS/Reference/At-rules/@font-face/font-width
page-type: css-at-rule-descriptor
status:
  - experimental
browser-compat: css.at-rules.font-face.font-width
sidebar: cssref
---

{{SeeCompatTable}}

> [!NOTE]
> The `font-width` descriptor is the modern replacement for the {{cssxref("@font-face/font-stretch")}} descriptor, which is a legacy alias. While `font-width` is the specification's preferred name, `font-stretch` currently has broader browser support. Check the [fallback example](#providing_a_font-stretch_fallback) and [browser compatibility](#browser_compatibility) table for details.

The **`font-width`** [CSS](/en-US/docs/Web/CSS) descriptor allows authors to specify a normal, condensed, or expanded face for the fonts specified in the {{cssxref("@font-face")}} at-rule.

For a particular font family, authors can download various font faces corresponding to the different styles of the same font family, and then use the `font-width` descriptor to specify the font face's width explicitly. The available `font-width` descriptor values are the same as those of the corresponding {{cssxref("font-width")}} property.

## Syntax

```css
/* Single values */
font-width: ultra-condensed;
font-width: extra-condensed;
font-width: condensed;
font-width: semi-condensed;
font-width: normal;
font-width: semi-expanded;
font-width: expanded;
font-width: extra-expanded;
font-width: ultra-expanded;
font-width: 50%;
font-width: 100%;
font-width: 200%;

/* Multiple values */
font-width: 75% 125%;
font-width: condensed ultra-condensed;
```

The `font-width` descriptor can take a single value from the list below.

### Values

- `normal`
  - : Specifies a normally condensed font face.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Specifies a more condensed font face than normal, with ultra-condensed being the most condensed.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Specifies a more expanded font face than normal, with ultra-expanded being the most expanded.
- `<percentage>`
  - : A {{cssxref("&lt;percentage&gt;")}} value between 50% and 200% (inclusive). Negative values are not allowed for this descriptor.

In earlier versions of the `font-width` specification, the descriptor accepts only the nine keyword values. CSS Fonts Level 4 extends the syntax to accept a `<percentage>` value as well. This enables variable fonts to offer a continuous variation of character widths. For TrueType or OpenType variable fonts, the `wdth` variation is used to implement varying widths.

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

### Setting a percentage range for font-width

The following example uses the [League Mono](https://www.theleagueofmoveabletype.com/league-mono) font. It synthesizes different font families from the same font file using the `font-width` descriptor with different keywords and percentages.

```html
<p>League Mono</p>
<p>League Mono</p>
<p>League Mono</p>
```

```css
@font-face {
  font-family: "League Mono Ultra Condensed";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-width: ultra-condensed; /* same as 50% */
}

@font-face {
  font-family: "League Mono Normal";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-width: 100%; /* same as normal */
}

@font-face {
  font-family: "League Mono Ultra Expanded";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-width: ultra-expanded; /* same as 200% */
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

{{EmbedLiveSample("Setting font width percentages", "100%", 200)}}

### Providing a font-stretch fallback

Because `font-width` does not yet have broad browser support, you may want to include the legacy {{cssxref("@font-face/font-stretch")}} descriptor as a fallback. Place `font-stretch` before `font-width` so that supporting browsers use the modern descriptor:

```css
@font-face {
  font-family: "MyFont";
  src: url("my-font.woff2") format("woff2");
  font-stretch: condensed; /* for browsers that don't support font-width */
  font-width: condensed;
}
```

> [!NOTE]
> You can automate this fallback pattern using the [postcss-preset-env](https://preset-env.cssdb.org/) plugin for PostCSS, which includes the [postcss-font-width-property](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-width-property) transform to convert `font-width` declarations to `font-stretch` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Legacy {{cssxref("@font-face/font-stretch")}} alias descriptor with better browser support
- {{cssxref("@font-face/font-display", "font-display")}} descriptor
- {{cssxref("@font-face/font-family", "font-family")}} descriptor
- {{cssxref("@font-face/font-weight", "font-weight")}} descriptor
- {{cssxref("@font-face/font-style", "font-style")}} descriptor
- {{cssxref("font-feature-settings", "font-feature-settings")}} property
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} descriptor
- {{cssxref("@font-face/src", "src")}} descriptor
- {{cssxref("@font-face/unicode-range", "unicode-range")}} descriptor
