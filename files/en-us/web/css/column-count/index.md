---
title: column-count
slug: Web/CSS/column-count
page-type: css-property
browser-compat: css.properties.column-count
---

{{CSSRef}}

The **`column-count`** [CSS](/en-US/docs/Web/CSS) property breaks an element's content into the specified number of columns.

{{EmbedInteractiveExample("pages/css/column-count.html")}}

## Syntax

```css
/* Keyword value */
column-count: auto;

/* <integer> value */
column-count: 3;

/* Global values */
column-count: inherit;
column-count: initial;
column-count: revert;
column-count: revert-layer;
column-count: unset;
```

### Values

- `auto`
  - : The number of columns is determined by other CSS properties, such as {{cssxref("column-width")}}.
- {{cssxref("&lt;integer&gt;")}}
  - : Is a strictly positive {{cssxref("&lt;integer&gt;")}} describing the ideal number of columns into which the content of the element will be flowed. If the {{cssxref("column-width")}} is also set to a non-`auto` value, it merely indicates the maximum allowed number of columns.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Splitting a paragraph across three columns

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns using the CSS
  <code>column-count</code>
  property. The text is equally distributed over the columns.
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
}
```

#### Result

{{EmbedLiveSample('Splitting_a_paragraph_across_three_columns', 'auto', 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("column-width")}}, {{CSSXref("columns")}} shorthand
- {{CSSXref("column-rule-color")}}, {{CSSXref("column-rule-style")}}, {{CSSXref("column-rule-width")}}, {{CSSXref("column-rule")}} shorthand
- [Learn: Multiple-column Layout](/en-US/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) (Learn Layout)
- [Basic Concepts of Multicol](/en-US/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
