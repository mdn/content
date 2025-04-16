---
title: columns
slug: Web/CSS/columns
page-type: css-shorthand-property
browser-compat: css.properties.columns
---

{{CSSRef}}

The **`columns`** [CSS](/en-US/docs/Web/CSS) shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

{{InteractiveExample("CSS Demo: columns")}}

```css interactive-example-choice
columns: 2;
```

```css interactive-example-choice
columns: 6rem auto;
```

```css interactive-example-choice
columns: 12em;
```

```css interactive-example-choice
columns: 3;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  min-width: 21rem;
  text-align: left;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`column-count`](/en-US/docs/Web/CSS/column-count)
- [`column-width`](/en-US/docs/Web/CSS/column-width)

## Syntax

```css
/* Column width */
columns: 18em;

/* Column count */
columns: auto;
columns: 2;

/* Both column width and count */
columns: 2 auto;
columns: auto 12em;
columns: auto auto;

/* Global values */
columns: inherit;
columns: initial;
columns: revert;
columns: revert-layer;
columns: unset;
```

The `columns` property may be specified as one or two of the values listed below, in any order.

### Values

- `<'column-width'>`
  - : The ideal column width, defined as a {{cssxref("&lt;length&gt;")}} or the keyword `auto`. The actual width may be wider or narrower to fit the available space. See {{cssxref("column-width")}}.
- `<'column-count'>`
  - : The ideal number of columns into which the element's content should be flowed, defined as an {{cssxref("&lt;integer&gt;")}} or the keyword `auto`. If neither this value nor the column's width are `auto`, it merely indicates the maximum allowable number of columns. See {{cssxref("column-count")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting three equal columns

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns using the CSS `columns`
  property. The text is equally distributed over the columns.
</p>
```

#### CSS

```css
.content-box {
  columns: 3 auto;
}
```

#### Result

{{EmbedLiveSample('Setting_three_equal_columns', 'auto', 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("widows")}}
- {{cssxref("orphans")}}
- [Paged media](/en-US/docs/Web/CSS/CSS_paged_media)
- [Learn: Multiple-column Layout](/en-US/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
