---
title: column-width
slug: Web/CSS/column-width
page-type: css-property
browser-compat: css.properties.column-width
---

{{CSSRef}}

The **`column-width`** [CSS](/en-US/docs/Web/CSS) property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

{{EmbedInteractiveExample("pages/css/column-width.html")}}

This property can help you create responsive designs that fit different screen sizes. Especially in the presence of the {{cssxref("column-count")}} property (which has precedence), you must specify all related length values to achieve an exact column width. In horizontal text these are {{cssxref('width')}}, {{cssxref('column-width')}}, {{cssxref('column-gap')}}, and {{cssxref('column-rule-width')}}.

## Syntax

```css
/* Keyword value */
column-width: auto;

/* <length> values */
column-width: 60px;
column-width: 15.5em;
column-width: 3.3vw;

/* Global values */
column-width: inherit;
column-width: initial;
column-width: revert;
column-width: revert-layer;
column-width: unset;
```

The `column-width` property is specified as one of the values listed below.

### Values

- {{cssxref("&lt;length&gt;")}}
  - : Indicates the optimal column width. The actual column width may differ from the specified value: it may be wider when necessary to fill available space, and narrower when the available space is too small. The value must be strictly positive or the declaration is invalid. Percentage values are also invalid.
- `auto`
  - : The width of the column is determined by other CSS properties, such as {{cssxref("column-count")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting column width in pixels

#### HTML

```html
<p class="content-box">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
  enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis
  nisl ut aliquip ex ea commodo consequat.
</p>
```

#### CSS

```css
.content-box {
  column-width: 100px;
}
```

#### Result

{{EmbedLiveSample('Setting_column_width_in_pixels', 'auto', 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Multiple-column Layout](/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout) (Learn Layout)
- [Basic Concepts of Multicol](/en-US/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
