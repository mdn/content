---
title: letter-spacing
slug: Web/CSS/Reference/Properties/letter-spacing
page-type: css-property
browser-compat: css.properties.letter-spacing
sidebar: cssref
---

The **`letter-spacing`** [CSS](/en-US/docs/Web/CSS) property sets the spacing between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` spread characters further apart, while negative values of `letter-spacing` bring characters closer together.

{{InteractiveExample("CSS Demo: letter-spacing")}}

```css interactive-example-choice
letter-spacing: normal;
```

```css interactive-example-choice
letter-spacing: 0.2rem;
```

```css interactive-example-choice
letter-spacing: 1px;
```

```css interactive-example-choice
letter-spacing: 30%;
```

```css interactive-example-choice
letter-spacing: -1px;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    As much mud in the streets as if the waters had but newly retired from the
    face of the earth, and it would not be wonderful to meet a Megalosaurus,
    forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: "Amstelvar";
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: "Amstelvar", serif;
}
```

## Syntax

```css
/* Keyword value */
letter-spacing: normal;

/* <length-percentage> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: -0.5px;
letter-spacing: 50%;

/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: revert;
letter-spacing: revert-layer;
letter-spacing: unset;
```

### Values

- `normal`
  - : The normal letter spacing for the current font. Unlike a value of `0`, this keyword allows the {{glossary("user agent")}} to alter the space between characters in order to justify text.
- {{cssxref("&lt;length-percentage&gt;")}}
  - : Specifies extra inter-character space _in addition to_ the default space between characters. While values can be negative, these may be constrained to implementation-specific limits. User agents may not further increase or decrease the inter-character space in order to justify text.

    Percentage values are calculated relative to the width of the space character of the font applied to the text.

## Accessibility

A large positive or negative `letter-spacing` value will make the word(s) the styling is applied to unreadable. For text styled with a very large positive value, the letters will be so far apart that the word(s) will appear like a series of individual, unconnected letters. For text styled with a very large negative value, the letters can overlap each other to the point where the word(s) may be unrecognizable.

Legible letter-spacing must be determined on a case-by-case basis, as different font families have different character widths. There is no one value that can ensure all font families automatically maintain their legibility.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalization concerns

Some written languages should not have any letter spacing applied. For instance, languages that use the Arabic script expect connected letters to remain visually connected, as in the following example. Applying letter spacing may lead to the text looking broken.

```html live-sample___i18n-sample
<p lang="ar" dir="rtl">شسيبتنمك</p>
```

```css hidden live-sample___i18n-sample
p {
  font-size: 3em;
  margin-inline-start: 5px;
}
```

{{ EmbedLiveSample("i18n-sample", "100%", 180) }}

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting letter-spacing with length values

This example shows several paragraphs with different length `letter-spacing` values set, allowing you to compare them.

#### HTML

The HTML contains several {{htmlelement("p")}} elements containing text content.

```html live-sample___length-letter-spacing
<p class="normal">letter spacing</p>
<p class="em-wide">letter spacing</p>
<p class="em-wider">letter spacing</p>
<p class="em-tight">letter spacing</p>
<p class="px-wide">letter spacing</p>
```

#### CSS

Our CSS applies a different `letting-spacing` value to each paragraph.

```css live-sample___length-letter-spacing
.normal {
  letter-spacing: normal;
}
.em-wide {
  letter-spacing: 0.4em;
}
.em-wider {
  letter-spacing: 1em;
}
.em-tight {
  letter-spacing: -0.05em;
}
.px-wide {
  letter-spacing: 6px;
}
```

#### Result

The rendered result looks like this:

{{ EmbedLiveSample("length-letter-spacing", "100%", 200) }}

### Comparing letter-spacing set with length and percentage

This example demonstrates that percentage `letter-spacing` values are useful for responsive text sizing.

The code displays several paragraphs that have the same `letter-spacing` set on text with increasing font size. We provide functionality to switch between a length and a percentage `letter-spacing` value, so that you can observe the responsive qualities of using a percentage value.

#### HTML

The HTML contains several {{htmlelement("p")}} elements containing text content, and an [`<input type="checkbox">`](/en-US/docs/Web/HTML/Reference/Elements/input/checkbox) that we'll use to toggle between a length `letter-spacing` and a percentage `letter-spacing` value.

```html live-sample___percentage-versus-length
<p class="x-small">X-small font-size (0.8em)</p>
<p class="small">Small font-size (1.3em)</p>
<p class="medium">Medium font-size (2em)</p>
<p class="large">Large font-size (3em)</p>
<p class="x-large">X-Large (3.5em)</p>

<form>
  <label for="ls-toggle">
    Toggle <code>letter-spacing</code> (off: <code>8px</code>, on:
    <code>12%</code>)
  </label>
  <input type="checkbox" id="ls-toggle" />
</form>
```

#### CSS

Our CSS starts by applying increasing {{cssxref("font-size")}} values to each successive paragraph:

```css hidden live-sample___percentage-versus-length
html {
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___percentage-versus-length
.x-small {
  font-size: 0.8em;
}

.small {
  font-size: 1.3em;
}

.medium {
  font-size: 2em;
}

.large {
  font-size: 3em;
}

.x-large {
  font-size: 3.5em;
}
```

We apply a `letter-spacing` value of `8px` to all paragraphs by default. When the checkbox is checked, however, we change the `letter-spacing` value to `12%`:

```css live-sample___percentage-versus-length
p {
  letter-spacing: 8px;
}

p:has(~ form > input:checked) {
  letter-spacing: 12%;
}
```

#### Result

The rendered result looks like this:

{{ EmbedLiveSample("percentage-versus-length", "100%", 460) }}

First, note how the initial length letter spacing value looks OK when applied to the larger font sizes, but it doesn't look good on the smaller font sizes. Now toggle the checkbox, and note how the percentage letter spacing looks appropriate on all lines, as it scales with the font size.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-kerning")}}
- {{cssxref("word-spacing")}}
- SVG {{SVGAttr("letter-spacing")}} attribute
