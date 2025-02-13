---
title: text-box
slug: Web/CSS/text-box
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.text-box
---

{{CSSRef}}{{seecompattable}}

The **`text-box`** [CSS](/en-US/docs/Web/CSS) property is a shorthand that corresponds to the {{cssxref("text-box-trim")}} and {{cssxref("text-box-edge")}} properties, which together specify the amount of space to trim from the block-start edge and block-end edge of specified text content. This includes, but is not limited to, the text's [leading](/en-US/docs/Glossary/Leading).

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("text-box-trim")}}
- {{cssxref("text-box-edge")}}

## Syntax

```css
/* Single keyword */
text-box: normal;

/* One text-box-edge keyword */
text-box: trim-start text;
text-box: trim-both text;

/* Two text-box-edge keywords */
text-box: trim-start cap alphabetic;
text-box: trim-both ex text;

/* Global values */
text-box: inherit;
text-box: initial;
text-box: revert;
text-box: revert-layer;
text-box: unset;
```

### Values

The `text-box` value can be composed of a {{cssxref("text-box-trim")}} value and a {{cssxref("text-box-edge")}} value separated by a space. See those pages for value descriptions.

The `text-box` property can also take a keyword of `normal`, which is equivalent to `text-box: none auto;`

If `text-box-trim` is omitted, it is set to `trim-both`. If `text-box-edge` is omitted, it is set to `auto`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `text-box` usage

In the following example, we have two `<p>` elements with classes of `one` and `two`.

We apply a `text-box` value of `trim-end cap alphabetic` to the first paragraph. The {{cssxref("text-box-edge")}} value of `cap alphabetic` specifies trimming the over edge to the top of the capital letters and the under edge flush with the text baseline. Because the {{cssxref("text-box-trim")}} value is set to `trim-end`, only the under edge is trimmed.

We apply a `text-box` value of `trim-both ex alphabetic` to the second paragraph. The {{cssxref("text-box-edge")}} value of `ex alphabetic` specifies trimming the over edge to the font's x-height (the top edge of the short lower-case letters) and the under edge flush with the text baseline. Because the {{cssxref("text-box-trim")}} value is set to `trim-both`, both the over _and_ under edge are trimmed.

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
.one {
  text-box: trim-end cap alphabetic;
}

.two {
  text-box: trim-both ex alphabetic;
}

p {
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}
```

#### Result

The output is as follows. Note how we've included a top and bottom border on each paragraph, so that you can see how the space has been trimmed in each case.

{{EmbedLiveSample("Basic `text-box` usage","100%","360")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} data type
- [CSS inline layout](/en-US/docs/Web/CSS/CSS_inline_layout) module
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) on developer.chrome.com (2025)
