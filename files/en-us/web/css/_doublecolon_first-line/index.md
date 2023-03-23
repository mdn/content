---
title: "::first-line"
slug: Web/CSS/::first-line
page-type: css-pseudo-element
browser-compat: css.selectors.first-line
---

{{CSSRef}}

The **`::first-line`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) applies styles to the first line of a [block-level element](/en-US/docs/Web/CSS/Visual_formatting_model#block-level_elements_and_block_boxes).

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-first-line.html", "tabbed-shorter")}}

The effects of `::first-line` are limited by the length and content of the first line of text in the element. The length of the first line depends on many factors, including the width of the element, the width of the document, and the font size of the text. `::first-line` has no effect when the first child of the element, which would be the first part of the first line, is an inline block-level element, such as an inline table.

> **Note:** [Selectors Level 3](https://drafts.csswg.org/selectors-3/#first-line) introduced the double-colon notation (`::`) to distinguish [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) from [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements), which are single-colon `:`. Browsers accept both `::first-line` and `:first-line`, which was introduced in CSS2.

For the purposes of CSS {{CSSXref("background")}}, the `::first-line` pseudo-element is like an inline-level element meaning that in a left-justified first line, the background may not extend all the way to the right margin.

## Allowable properties

Only a small subset of CSS properties can be used with the `::first-line` pseudo-element:

- All font-related properties: {{CSSXref("font")}}, {{CSSXref("font-family")}}, {{CSSXref("font-feature-settings")}}, {{CSSXref("font-kerning")}}, {{CSSXref("font-language-override")}}, {{CSSXref("font-palette")}}, {{CSSXref("font-size")}}, {{CSSXref("font-size-adjust")}}, {{CSSXref("font-stretch")}}, {{CSSXref("font-style")}}, {{CSSXref("font-synthesis")}}, {{CSSXref("font-variant")}}, {{CSSXref("font-variant-alternates")}}, {{CSSXref("font-variant-caps")}}, {{CSSXref("font-variant-east-asian")}}, {{CSSXref("font-variant-emoji")}}, {{CSSXref("font-variant-ligatures")}}, {{CSSXref("font-variant-numeric")}}, {{CSSXref("font-variant-position")}}, {{CSSXref("font-weight")}}, and {{CSSXref("line-height")}}
- All background-related properties: {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{Cssxref("background-attachment")}}, and {{cssxref("background-blend-mode")}}
- The {{cssxref("color")}} property
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}}, and {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, and {{cssxref("vertical-align")}}.

## Syntax

```css
::first-line {
  /* ... */
}
```

## Examples

### HTML

```html
<p>
  Styles will only be applied to the first line of this paragraph. After that,
  all text will be styled like normal. See what I mean?
</p>

<span>
  The first line of this text will not receive special styling because it is not
  a block-level element.
</span>
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
