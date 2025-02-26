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
writing-mode: sideways-rl;
writing-mode: sideways-lr;

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
- `sideways-rl`
  - : For `ltr` scripts, content flows vertically from top to bottom. For `rtl` scripts, content flows vertically from bottom to top. All the glyphs, even those in vertical scripts, are set sideways toward the right.
- `sideways-lr`
  - : For `ltr` scripts, content flows vertically from bottom to top. For `rtl` scripts, content flows vertically from top to bottom. All the glyphs, even those in vertical scripts, are set sideways toward the left.
- `lr`
  - : Deprecated except for SVG1 documents. For CSS, use `horizontal-tb` instead.
- `lr-tb`
  - : Deprecated except for SVG1 documents. For CSS, use `horizontal-tb` instead.
- `rl`
  - : Deprecated except for SVG1 documents. For CSS, use `horizontal-tb` instead.
- `tb`
  - : Deprecated except for SVG1 documents. For CSS, use `vertical-lr` instead.
- `tb-lr` {{Deprecated_Inline}}
  - : Deprecated except for SVG1 documents. For CSS, use `vertical-lr` instead.
- `tb-rl`
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
  <caption>
    Using multiple writing modes
  </caption>
  <tr>
    <th>Value</th>
    <th>Vertical script</th>
    <th>Horizontal (LTR) script</th>
    <th>Horizontal (RTL) script</th>
    <th>Mixed script</th>
  </tr>
  <tr class="text1">
    <th>horizontal-tb</th>
    <td>我家没有电脑。</td>
    <td>Example text</td>
    <td>מלל ארוך לדוגמא</td>
    <td>1994年に至っては</td>
  </tr>
  <tr class="text2">
    <th>vertical-lr</th>
    <td>我家没有电脑。</td>
    <td>Example text</td>
    <td>מלל ארוך לדוגמא</td>
    <td>1994年に至っては</td>
  </tr>
  <tr class="text3">
    <th>vertical-rl</th>
    <td>我家没有电脑。</td>
    <td>Example text</td>
    <td>מלל ארוך לדוגמא</td>
    <td>1994年に至っては</td>
  </tr>
  <tr class="experimental text4">
    <th>sideways-lr</th>
    <td>我家没有电脑。</td>
    <td>Example text</td>
    <td>מלל ארוך לדוגמא</td>
    <td>1994年に至っては</td>
  </tr>
  <tr class="experimental text5">
    <th>sideways-rl</th>
    <td>我家没有电脑。</td>
    <td>Example text</td>
    <td>מלל ארוך לדוגמא</td>
    <td>1994年に至っては</td>
  </tr>
</table>
<p class="notice">
  Your browser does not support the <code>sideways-lr</code> or
  <code>sideways-rl</code> values.
</p>
```

#### CSS

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 2px black solid;
  padding: 4px;
}
th {
  background-color: lightgray;
}

.experimental {
  display: none;
}

.notice {
  display: table-row;
  font-weight: bold;
  text-align: center;
}

@supports (writing-mode: sideways-lr) {
  .experimental {
    display: table-row;
  }
  .notice {
    display: none;
  }
}
```

The CSS that adjusts the directionality of the content looks like this:

```css
.text1 td {
  writing-mode: horizontal-tb;
}

.text2 td {
  writing-mode: vertical-lr;
}

.text3 td {
  writing-mode: vertical-rl;
}

.text4 td {
  writing-mode: sideways-lr;
}

.text5 td {
  writing-mode: sideways-rl;
}
```

#### Result

{{EmbedLiveSample("Using_multiple_writing_modes", 400, 700)}}

### Using writing-mode with transforms

If your browser doesn't support `sideways-lr`, a workaround is to use {{cssxref("transform")}} to achieve a similar effect depending on the script direction.
The effect of `vertical-rl` is the same as with `sideways-lr`, so no transformation is required for left-to-right scripts.
In some cases, rotating the text 180 degrees is sufficient to achieve the effect of `sideways-lr`, but font glyphs may not be designed to be rotated, so this may produce unexpected positioning or rendering.

#### HTML

```html
<table>
  <caption>
    Using writing-mode with transforms
  </caption>
  <thead>
    <tr>
      <th>Vertical LR</th>
      <th>Vertical LR with transform</th>
      <th>Sideways LR</th>
      <th>Only rotate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="vertical-lr">我家没有电脑。</span>
        <span class="vertical-lr">Example text</span>
      </td>
      <td>
        <span class="vertical-lr rotated">我家没有电脑。</span>
        <span class="vertical-lr rotated">Example text</span>
      </td>
      <td>
        <span class="sideways-lr">我家没有电脑。</span>
        <span class="sideways-lr">Example text</span>
      </td>
      <td>
        <span class="only-rotate">我家没有电脑。</span>
        <span class="only-rotate">Example text</span>
      </td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.vertical-lr {
  writing-mode: vertical-lr;
}

.rotated {
  transform: rotate(180deg);
}

.sideways-lr {
  writing-mode: sideways-lr;
}

.only-rotate {
  inline-size: fit-content;
  transform: rotate(-90deg);
}
```

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 2px black solid;
  padding: 4px;
}
th {
  background-color: lightgray;
}
span {
  display: inline-block;
  width: 1.5em;
  text-align: center;
}
```

#### Result

{{EmbedLiveSample("Using_writing-mode_with_transforms", 400, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("direction")}}
- {{Cssxref("unicode-bidi")}}
- {{Cssxref("text-orientation")}}
- {{Cssxref("text-combine-upright")}}
- [CSS logical properties](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- [CSS writing modes](/en-US/docs/Web/CSS/CSS_writing_modes) module
- SVG {{SVGAttr("writing-mode")}} attribute
- [Styling vertical text (Chinese, Japanese, Korean and Mongolian)](https://www.w3.org/International/articles/vertical-text/) on W3.org (2022)
- [Creating vertical form controls](/en-US/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
