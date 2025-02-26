---
title: ::first-line
slug: Web/CSS/::first-line
page-type: css-pseudo-element
browser-compat: css.selectors.first-line
---

{{CSSRef}}

The **`::first-line`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) applies styles to the first line of a [block container](/en-US/docs/Web/CSS/Visual_formatting_model#block_containers).

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-first-line.html", "tabbed-shorter")}}

The effects of `::first-line` are limited by the length and content of the first line of text in the element. The length of the first line depends on many factors, including the width of the element, the width of the document, and the font size of the text. `::first-line` has no effect when the first child of the element, which would be the first part of the first line, is an inline block-level element, such as an inline table.

> **Note:** [Selectors Level 3](https://drafts.csswg.org/selectors-3/#first-line) introduced the double-colon notation (`::`) to distinguish [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) from the single-colon (`:`) [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes). Browsers accept both `::first-line` and `:first-line`, which was introduced in CSS2.

For the purposes of CSS {{CSSXref("background")}}, the `::first-line` pseudo-element is like an inline-level element meaning that in a left-justified first line, the background may not extend all the way to the right margin.

## Allowable properties

Only a small subset of CSS properties can be used with the `::first-line` pseudo-element:

- All font-related properties: {{Cssxref("font")}}, {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}}, and {{Cssxref("font-family")}}
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

### Styling first line of a paragraph

#### HTML

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

#### CSS

```css hidden
* {
  font-size: 20px;
  font-family: sans-serif;
}
```

```css
::first-line {
  color: blue;
  font-weight: bold;

  /* WARNING: DO NOT USE THESE */
  /* Many properties are invalid in ::first-line pseudo-elements */
  margin-left: 20px;
  text-indent: 20px;
}
```

### Result

{{EmbedLiveSample('styling_first_line_of_a_paragraph', 350, 130)}}

### Styling the first line of a SVG text element

In this example, we style the first line of an SVG {{SVGElement("text")}} element using the `::first-line` pseudo-element.

> [!NOTE]
> At time of writing this feature has [limited support](#browser_compatibility).

#### HTML

```html-nolint
<svg viewBox="0 0 320 150">
  <text y="20">Here is an English paragraph
that is broken into multiple lines
in the source code so that it can
be more easily read and edited
in a text editor.
  </text>
</svg>
```

#### CSS

In order to make the SVG `<text>` element wrap to multiple lines, we use the {{cssxref("white-space", "", "#multiple_lines_in_svg_text_element")}} CSS property. We then select the first line using the `::first-line` pseudo-element.

```css hidden
text {
  font-size: 20px;
  font-family: sans-serif;
}
```

```css
text {
  white-space: break-spaces;
}

text::first-line {
  fill: blue;
  font-weight: bold;
}
```

#### Result

{{EmbedLiveSample("styling_the_first_line_of_a_SVG_text_element", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::first-letter")}}
- {{cssxref("white-space")}}
