---
title: writing-mode
slug: Web/CSS/writing-mode
page-type: css-property
browser-compat: css.properties.writing-mode
---

{{CSSRef}}

The **`writing-mode`** [CSS](/en-US/docs/Web/CSS) property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

{{EmbedInteractiveExample("pages/css/writing-mode.html")}}

This property specifies the _block flow direction_, which is the direction in which block-level containers are stacked, and the direction in which inline-level content flows within a block container. Thus, it also determines the ordering of block-level content.

## Syntax

```css
/* Keyword values */
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;

/* Global values */
writing-mode: inherit;
writing-mode: initial;
writing-mode: revert;
writing-mode: revert-layer;
writing-mode: unset;
```

The `writing-mode` property is specified as one of the values listed below. The flow direction in horizontal scripts is also affected by the [directionality of that script](https://www.w3.org/International/questions/qa-scripts.en), either left-to-right (`ltr`, like English and most other languages) or right-to-left (`rtl`, like Hebrew or Arabic).

### Values

- `horizontal-tb`
  - : For `ltr` scripts, content flows horizontally from left to right. For `rtl` scripts, content flows horizontally from right to left. The next horizontal line is positioned below the previous line.
- `vertical-rl`
  - : For `ltr` scripts, content flows vertically from top to bottom, and the next vertical line is positioned to the left of the previous line. For `rtl` scripts, content flows vertically from bottom to top, and the next vertical line is positioned to the right of the previous line.
- `vertical-lr`
  - : For `ltr` scripts, content flows vertically from top to bottom, and the next vertical line is positioned to the right of the previous line. For `rtl` scripts, content flows vertically from bottom to top, and the next vertical line is positioned to the left of the previous line.
- `sideways-rl` {{experimental_inline}}
  - : For `ltr` scripts, content flows vertically from top to bottom. For `rtl` scripts, content flows vertically from bottom to top. All the glyphs, even those in vertical scripts, are set sideways toward the right.
- `sideways-lr` {{experimental_inline}}
  - : For `ltr` scripts, content flows vertically from bottom to top. For `rtl` scripts, content flows vertically from top to bottom. All the glyphs, even those in vertical scripts, are set sideways toward the left.
- `lr` {{deprecated_inline}}
  - : Deprecated except for SVG1 documents. For CSS, use `horizontal-tb` instead.
- `lr-tb` {{deprecated_inline}}
  - : Deprecated except for SVG1 documents. For CSS, use `horizontal-tb` instead.
- `rl` {{deprecated_inline}}
  - : Deprecated except for SVG1 documents. For CSS, use `horizontal-tb` instead.
- `tb` {{deprecated_inline}}
  - : Deprecated except for SVG1 documents. For CSS, use `vertical-lr` instead.
- `tb-lr` {{deprecated_inline}}
  - : Deprecated except for SVG1 documents. For CSS, use `vertical-lr` instead.
- `tb-rl` {{deprecated_inline}}
  - : Deprecated except for SVG1 documents. For CSS, use `vertical-rl` instead.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Using multiple writing modes

This example demonstrates all of the writing modes, showing each with text in various languages.

#### HTML

The HTML is a {{HTMLElement("table")}} with each writing mode in a row with a column showing text in various scripts using that writing mode.

```html
<table>
  <tr>
    <th>Value</th>
    <th>Vertical script</th>
    <th>Horizontal (LTR) script</th>
    <th>Horizontal (RTL) script</th>
    <th>Mixed script</th>
  </tr>
  <tr>
    <td>horizontal-tb</td>
    <td class="example Text1"><span>我家没有电脑。</span></td>
    <td class="example Text1"><span>Example text</span></td>
    <td class="example Text1"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text1"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>vertical-lr</td>
    <td class="example Text2"><span>我家没有电脑。</span></td>
    <td class="example Text2"><span>Example text</span></td>
    <td class="example Text2"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text2"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>vertical-rl</td>
    <td class="example Text3"><span>我家没有电脑。</span></td>
    <td class="example Text3"><span>Example text</span></td>
    <td class="example Text3"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text3"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>sideways-lr</td>
    <td class="example Text4"><span>我家没有电脑。</span></td>
    <td class="example Text4"><span>Example text</span></td>
    <td class="example Text4"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text4"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>sideways-rl</td>
    <td class="example Text5"><span>我家没有电脑。</span></td>
    <td class="example Text5"><span>Example text</span></td>
    <td class="example Text5"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text5"><span>1994年に至っては</span></td>
  </tr>
</table>
```

#### CSS

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px black solid;
  padding: 3px;
}
th {
  background-color: lightgray;
}
.example {
  height: 75px;
  width: 75px;
}
```

The CSS that adjusts the directionality of the content looks like this:

```css
.example.Text1 span,
.example.Text1 {
  writing-mode: horizontal-tb;
}

.example.Text2 span,
.example.Text2 {
  writing-mode: vertical-lr;
}

.example.Text3 span,
.example.Text3 {
  writing-mode: vertical-rl;
}

.example.Text4 span,
.example.Text4 {
  writing-mode: sideways-lr;
}

.example.Text5 span,
.example.Text5 {
  writing-mode: sideways-rl;
}
```

#### Result

This image shows what the output should look like, in case your browser's support for `writing-mode` is incomplete:

![A 6 rows by 5 columns table showing the various directional flow of text and number adjusted using the vertical-lr or rl, horizontal-lr or rl, sideways-lr or rl horizontal-tb CSS properties. The flow is applied to different languages](screenshot_2020-02-05_21-04-30.png)

{{EmbedLiveSample("Using_multiple_writing_modes", 400, 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG [`writing-mode`](/en-US/docs/Web/SVG/Attribute/writing-mode) attribute
- {{Cssxref("direction")}}
- {{Cssxref("unicode-bidi")}}
- {{Cssxref("text-orientation")}}
- {{Cssxref("text-combine-upright")}}
- [CSS Logical properties](/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [Styling vertical text (Chinese, Japanese, Korean and Mongolian)](https://www.w3.org/International/articles/vertical-text/)
- Extensive browsers support test results: <https://w3c.github.io/i18n-tests/results/writing-mode-vertical>
