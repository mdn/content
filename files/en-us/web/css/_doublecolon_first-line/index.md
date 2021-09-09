---
title: '::first-line (:first-line)'
slug: Web/CSS/::first-line
tags:
  - CSS
  - Layout
  - Pseudo-element
  - Reference
  - Selector
browser-compat: css.selectors.first-line
---
{{CSSRef}}

The **`::first-line`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) applies styles to the first line of a [block-level element](/en-US/docs/Web/CSS/Visual_formatting_model#block-level_elements_and_block_boxes). Note that the length of the first line depends on many factors, including the width of the element, the width of the document, and the font size of the text.

```css
/* Selects the first line of a <p> */
p::first-line {
  color: red;
}
```

> **Note:** CSS3 introduced the `::first-line` notation (with two colons) to distinguish [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) from [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements). Browsers also accept `:first-line`, introduced in CSS2.

## Allowable properties

Only a small subset of CSS properties can be used with the `::first-line` pseudo-element:

- All font-related properties: {{Cssxref("font")}}, {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}}, and {{Cssxref("font-family")}}
- All background-related properties: {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}},  {{Cssxref("background-attachment")}}, and {{cssxref("background-blend-mode")}}
- The {{cssxref("color")}} property
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}}, and {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, and {{cssxref("vertical-align")}}.

## Syntax

{{csssyntax}}

## Examples

### HTML

```html
<p>Styles will only be applied to the first line of this paragraph.
After that, all text will be styled like normal. See what I mean?</p>

<span>The first line of this text will not receive special styling
because it is not a block-level element.</span>
```

### CSS

```css
::first-line {
  color: blue;
  text-transform: uppercase;

  /* WARNING: DO NOT USE THESE */
  /* Many properties are invalid in ::first-line pseudo-elements */
  margin-left: 20px;
  text-indent: 20px;
}
```

### Result

{{EmbedLiveSample('Examples', 350, 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::first-letter")}}
