---
title: text-box-edge
slug: Web/CSS/text-box-edge
page-type: css-property
status:
  - experimental
browser-compat: css.properties.text-box-edge
---

{{CSSRef}}{{seecompattable}}

The **`text-box-edge`** [CSS](/en-US/docs/Web/CSS) property specifies an amount of space to trim from text content.

Vertical spacing differs between fonts, making consistent typesetting historically challenging on the web. The `text-box-edge` property — along with its counterpart property {{cssxref("text-box-trim")}}, which specifies which edge(s) to trim space from — makes consistent typesetting easier to achieve. The `text-box-edge` property has no effect if `text-box-trim` is set or defaults to `none`.

> [!NOTE]
> The {{cssxref("text-box")}} shorthand property can be used to specify the `text-box-edge` and `text-box-trim` values in a single declaration.

## Syntax

```css
/* Single keyword */
text-box-edge: auto;
text-box-edge: text;

/* Two <text-edge> values */
text-box-edge: text text;
text-box-edge: text alphabetic;
text-box-edge: cap alphabetic;
text-box-edge: ex text;

/* Global values */
text-box-edge: inherit;
text-box-edge: initial;
text-box-edge: revert;
text-box-edge: revert-layer;
text-box-edge: unset;
```

### Value

The `text-box-edge` property value is specified as `auto` or a {{cssxref("&lt;text-edge&gt;")}} value:

- `auto`
  - : Equivalent to the `text-edge` value `text`.
- {{cssxref("&lt;text-edge&gt;")}}
  - : One or two separate keywords representing over and under edge positions to trim the font leading to.
    - If two values are specified, the first value specifies the trimming behavior to apply to the block-start (over) edge of the text, and the second value specifies the trimming behavior to apply to the block-end (under) edge of the text.
      - Valid over edge trimming values: `text` (the default), `cap`, and `ex`.
      - Valid under edge trimming values: `text` (the default) and `alphabetic`.
    - If one value is specified, it specifies the over _and_ under edge trimming behavior. At the time of writing, the only valid single value is `text`.

## Description

Font files specify an amount of space, termed leading, to be included above and below text to provide spacing between lines. The amount of leading included varies between fonts, as does the space within the font (the height of the capital letter, ascenders, descenders, etc.), making it difficult to consistently set block-level text spacing.

The `text-box-edge` property allows you to trim space from the start and/or end edge of the text. It does this by specifying a {{cssxref("&lt;text-edge&gt;")}} value that indicates the over edge and under edge to trim the space to.

Which edge(s) to trim space from is specified using the {{cssxref("text-box-trim")}} property. For example, you can choose to trim space from the over edge or the under edge of the text content, or both.

These properties make it much easier to control text spacing in the block direction.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `text-box-edge` usage

The most common `text-box-edge` values you'll use for horizontal {{cssxref("writing-mode")}} languages such as English or Arabic are `cap alphabetic` and `ex alphabetic`. `cap` trims the over edge to the top of the capital letters, whereas `ex` trims the over edge to the font's x-height (the top of the short lower-case letters). In each case, `alphabetic` trims the under edge flush with the text baseline.

In this example, we demonstrate the effect of both of these common values, on two {{htmlelement("p")}} elements. Additionally, a {{cssxref("text-box-trim")}} value of `trim-both` has been set on both of them, so that their start _and_ end edges are trimmed.

```html hidden
<p class="one">This is .one</p>

<p class="two">This is .two</p>
```

```css hidden
html {
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
}

p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
}
```

```css
p {
  text-box-trim: trim-both;
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}

.one {
  text-box-edge: cap alphabetic;
}

.two {
  text-box-edge: ex alphabetic;
}
```

#### Result

The output is as follows. Note how we've included a top and bottom border on each paragraph, so that you can see how the space has been trimmed in each case.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interactive `text-box-edge` value comparison

For a complete interactive `text-box-edge` example, see the [`text-box-trim` page](/en-US/docs/Web/CSS/text-box-trim#interactive_text-box-trim_and_text-box-edge_value_comparison).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-box")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} data type
- [CSS inline layout](/en-US/docs/Web/CSS/CSS_inline_layout) module
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) on developer.chrome.com (2025)
