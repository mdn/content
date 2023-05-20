---
title: vertical-align
slug: Web/CSS/vertical-align
page-type: css-property
browser-compat: css.properties.vertical-align
---

{{CSSRef}}

The **`vertical-align`** [CSS](/en-US/docs/Web/CSS) property sets vertical alignment of an inline, inline-block or table-cell box.

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

The vertical-align property can be used in two contexts:

- To vertically align an inline-level element's box inside its containing line box. For example, it could be used to [vertically position an image in a line of text](#vertical_alignment_in_a_line_box).
- To vertically align [the content of a cell in a table](#vertical_alignment_in_a_table_cell).

Note that `vertical-align` only applies to inline, inline-block and table-cell elements: you can't use it to vertically align [block-level elements](/en-US/docs/Glossary/Block-level_content).

## Syntax

```css
/* Keyword values */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <length> values */
vertical-align: 10em;
vertical-align: 4px;

/* <percentage> values */
vertical-align: 20%;

/* Global values */
vertical-align: inherit;
vertical-align: initial;
vertical-align: revert;
vertical-align: revert-layer;
vertical-align: unset;
```

The `vertical-align` property is specified as one of the values listed below.

### Values for inline elements

#### Parent-relative values

These values vertically align the element relative to its parent element:

- `baseline`
  - : Aligns the baseline of the element with the baseline of its parent. The baseline of some [replaced elements](/en-US/docs/Web/CSS/Replaced_element), like {{HTMLElement("textarea")}}, is not specified by the HTML specification, meaning that their behavior with this keyword may vary between browsers.
- `sub`
  - : Aligns the baseline of the element with the subscript-baseline of its parent.
- `super`
  - : Aligns the baseline of the element with the superscript-baseline of its parent.
- `text-top`
  - : Aligns the top of the element with the top of the parent element's font.
- `text-bottom`
  - : Aligns the bottom of the element with the bottom of the parent element's font.
- `middle`
  - : Aligns the middle of the element with the baseline plus half the x-height of the parent.
- {{cssxref("&lt;length&gt;")}}
  - : Aligns the baseline of the element to the given length above the baseline of its parent. A negative value is allowed.
- {{cssxref("&lt;percentage&gt;")}}
  - : Aligns the baseline of the element to the given percentage above the baseline of its parent, with the value being a percentage of the {{Cssxref("line-height")}} property. A negative value is allowed.

#### Line-relative values

The following values vertically align the element relative to the entire line:

- `top`
  - : Aligns the top of the element and its descendants with the top of the entire line.
- `bottom`
  - : Aligns the bottom of the element and its descendants with the bottom of the entire line.

For elements that do not have a baseline, the bottom margin edge is used instead.

### Values for table cells

- `baseline` (and `sub`, `super`, `text-top`, `text-bottom`, `<length>`, and `<percentage>`)
  - : Aligns the baseline of the cell with the baseline of all other cells in the row that are baseline-aligned.
- `top`
  - : Aligns the top padding edge of the cell with the top of the row.
- `middle`
  - : Centers the padding box of the cell within the row.
- `bottom`
  - : Aligns the bottom padding edge of the cell with the bottom of the row.

Negative values are allowed.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

#### HTML

```html
<div>
  An <img src="frame_image.svg" alt="link" width="32" height="32" /> image with
  a default alignment.
</div>
<div>
  An
  <img class="top" src="frame_image.svg" alt="link" width="32" height="32" />
  image with a text-top alignment.
</div>
<div>
  An
  <img class="bottom" src="frame_image.svg" alt="link" width="32" height="32" />
  image with a text-bottom alignment.
</div>
<div>
  An
  <img class="middle" src="frame_image.svg" alt="link" width="32" height="32" />
  image with a middle alignment.
</div>
```

#### CSS

```css
img.top {
  vertical-align: text-top;
}
img.bottom {
  vertical-align: text-bottom;
}
img.middle {
  vertical-align: middle;
}
```

#### Result

{{EmbedLiveSample("Basic_example")}}

### Vertical alignment in a line box

#### HTML

```html-nolint
<p>
top:         <img style="vertical-align: top" src="star.png" alt="star"/>
middle:      <img style="vertical-align: middle" src="star.png" alt="star"/>
bottom:      <img style="vertical-align: bottom" src="star.png" alt="star"/>
super:       <img style="vertical-align: super" src="star.png" alt="star"/>
sub:         <img style="vertical-align: sub" src="star.png" alt="star"/>
</p>

<p>
text-top:    <img style="vertical-align: text-top" src="star.png" alt="star"/>
text-bottom: <img style="vertical-align: text-bottom" src="star.png" alt="star"/>
0.2em:       <img style="vertical-align: 0.2em" src="star.png" alt="star"/>
-1em:        <img style="vertical-align: -1em" src="star.png" alt="star"/>
20%:         <img style="vertical-align: 20%" src="star.png" alt="star"/>
-100%:       <img style="vertical-align: -100%" src="star.png" alt="star"/>
</p>
```

```css hidden
#* {
  box-sizing: border-box;
}

img {
  margin-right: 0.5em;
}

p {
  height: 3em;
  padding: 0 0.5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

#### Result

{{EmbedLiveSample("Vertical_alignment_in_a_line_box", '100%', 160, "", "")}}

### Vertical alignment in a table cell

#### HTML

```html
<table>
  <tr>
    <td style="vertical-align: baseline">baseline</td>
    <td style="vertical-align: top">top</td>
    <td style="vertical-align: middle">middle</td>
    <td style="vertical-align: bottom">bottom</td>
    <td>
      <p>
        There is a theory which states that if ever anyone discovers exactly
        what the Universe is for and why it is here, it will instantly disappear
        and be replaced by something even more bizarre and inexplicable.
      </p>
      <p>
        There is another theory which states that this has already happened.
      </p>
    </td>
  </tr>
</table>
```

#### CSS

```css
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table,
th,
td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}
```

#### Result

{{EmbedLiveSample("Vertical_alignment_in_a_table_cell", '100%', 230, "", "")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Typical use cases of Flexbox, section "Center item"](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox#center_item)
- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Understanding `vertical-align`, or "How (Not) To Vertically Center Content"](http://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align: All You Need To Know](https://christopheraue.net/design/vertical-align)
