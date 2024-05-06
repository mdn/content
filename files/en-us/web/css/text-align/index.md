---
title: text-align
slug: Web/CSS/text-align
page-type: css-property
browser-compat: css.properties.text-align
---

{{CSSRef}}

The **`text-align`** [CSS](/en-US/docs/Web/CSS) property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like {{cssxref("vertical-align")}} but in the horizontal direction.

{{EmbedInteractiveExample("pages/css/text-align.html")}}

## Syntax

```css
/* Keyword values */
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: match-parent;

/* Block alignment values (Non-standard syntax) */
text-align: -moz-center;
text-align: -webkit-center;

/* Global values */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: revert-layer;
text-align: unset;
```

The `text-align` property is specified as a single keyword from the list below.

### Values

- `start`
  - : The same as `left` if direction is left-to-right and `right` if direction is right-to-left.
- `end`
  - : The same as `right` if direction is left-to-right and `left` if direction is right-to-left.
- `left`
  - : The inline contents are aligned to the left edge of the line box.
- `right`
  - : The inline contents are aligned to the right edge of the line box.
- `center`
  - : The inline contents are centered within the line box.
- `justify`
  - : The inline contents are justified. Spaces out the content to line up its left and right edges to the left and right edges of the line box, except for the last line.
- `justify-all`
  - : Same as `justify`, but also forces the last line to be justified.
- `match-parent`
  - : Similar to `inherit`, but the values `start` and `end` are calculated according to the parent's {{cssxref("direction")}} and are replaced by the appropriate `left` or `right` value.

## Accessibility concerns

The inconsistent spacing between words created by justified text can be problematic for people with cognitive concerns such as Dyslexia.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Start alignment

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: start;
  border: solid;
}
```

#### Result

{{EmbedLiveSample("Start_alignment","100%","100%")}}

### Centered text

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: center;
  border: solid;
}
```

#### Result

{{EmbedLiveSample("Centered_text", "100%", "100%")}}

### Example using "justify"

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: justify;
  border: solid;
}
```

#### Result

{{EmbedLiveSample('Example using "justify"',"100%","100%")}}

### Table alignment

This example demonstrates how the use of `text-align` on {{htmlelement("table")}} elements, including {{htmlelement("tr")}} rows and {{htmlelement("td")}} cells.

#### HTML

```html
<table>
  <tr id="r1">
    <td id="c11">11</td>
    <td id="c12">12</td>
    <td id="c13">13</td>
  </tr>
  <tr id="r2">
    <td id="c21">21</td>
    <td id="c22">22</td>
    <td id="c23">23</td>
  </tr>
  <tr id="r3">
    <td id="c31">31</td>
    <td id="c32">32</td>
    <td id="c33">33</td>
  </tr>
</table>
```

#### CSS

```css
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}
td {
  border: solid 1px black;
}
#r1 {
  text-align: right;
}
#c12 {
  text-align: center;
}
#r2 {
  text-align: center;
}
#c31 {
  text-align: right;
}
```

#### Result

{{EmbedLiveSample('Table alignment', "100%", "100%")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("margin","margin: auto")}}, {{Cssxref("margin-left","margin-left: auto")}}, {{Cssxref("vertical-align")}}
