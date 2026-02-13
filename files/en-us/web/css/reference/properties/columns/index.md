---
title: columns
slug: Web/CSS/Reference/Properties/columns
page-type: css-shorthand-property
browser-compat: css.properties.columns
sidebar: cssref
---

The **`columns`** [CSS](/en-US/docs/Web/CSS) shorthand property sets the number of columns to use when drawing an element's contents, the columns' widths, and the columns' heights.

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

- {{cssxref("column-count")}}
- {{cssxref("column-width")}}
- {{cssxref("column-height")}}

## Syntax

```css
/* Column width */
columns: 18em;

/* Column count */
columns: auto;
columns: 2;

/* Column width and count */
columns: 2 auto;
columns: auto 12em;
columns: auto auto;

/* Column width and/or count, and column height */
columns: 18em / 10em;
columns: 2 / 90vh;
columns: 2 auto / 300px;

/* Global values */
columns: inherit;
columns: initial;
columns: revert;
columns: revert-layer;
columns: unset;
```

The `columns` property may be specified as a [`<column-count>`](/en-US/docs/Web/CSS/Reference/Properties/column-count) and/or a [`<column-width>`](/en-US/docs/Web/CSS/Reference/Properties/column-width) value, optionally followed by a forward slash and a [`<column-height>`](/en-US/docs/Web/CSS/Reference/Properties/column-height) value. If both `<column-count>` and `<column-width>` values are specified, they can be specified in any order.

### Values

- `<'column-width'>`
  - : The ideal column width, defined as a {{cssxref("&lt;length&gt;")}} or the keyword `auto`. The actual width may be wider or narrower to fit the available space. See {{cssxref("column-width")}}.
- `<'column-count'>`
  - : The ideal number of columns into which the element's content should be flowed, defined as an {{cssxref("&lt;integer&gt;")}} or the keyword `auto`. If neither this value nor the column's width are `auto`, it indicates the maximum allowable number of columns. See {{cssxref("column-count")}}.
- `<'column-height'>`
  - : The height of the columns defined as a {{cssxref("&lt;length&gt;")}} or the keyword `auto`. See {{cssxref("column-height")}}.

> [!NOTE]
> In browsers that support the `column-height` property, the `columns` property also resets the {{cssxref("column-wrap")}} property to its initial value, `auto`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting three equal columns

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns using the CSS
  <code>columns</code>
  property. The text is equally distributed over the columns.
</p>
```

#### CSS

```css
body {
  width: 60%;
  margin: 0 auto;
}

.content-box {
  columns: 3 auto;
}
```

#### Result

{{EmbedLiveSample('Setting_three_equal_columns', 'auto', 120)}}

### Setting three wrapping, fixed height columns

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns using the CSS
  <code>columns</code> property. This includes a <code>column-count</code> value
  of <code>3</code>, a <code>column-width</code> value of <code>auto</code>, and
  a <code>column-height</code> value of <code>5em</code>. The
  <code>column-wrap</code> value is set to its initial value, <code>auto</code>;
  when a <code>column-height</code> value is included,
  <code>column-wrap: auto</code> resolves to <code>wrap</code>, which allows the
  columns to wrap onto multiple rows. The text is equally distributed over the
  columns, and placed into multiple rows.
</p>
```

#### CSS

```css
body {
  width: 60%;
  margin: 0 auto;
}

.content-box {
  columns: 3 auto / 5em;
}
```

```css hidden
@supports not (columns: 3 auto / 5em) {
  body::before {
    content: "Your browser does not support the 'column-height' value in the 'columns' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    position: fixed;
    inset: 40% 2em;
    height: fit-content;
    text-align: center;
    font-weight: bold;
    padding: 1rem 0;
  }
}
```

#### Result

{{EmbedLiveSample('Setting_three_equal_columns_of_equal_height', 'auto', 320)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("widows")}}
- {{cssxref("orphans")}}
- [Paged media](/en-US/docs/Web/CSS/Guides/Paged_media)
- [Learn: Multiple-column Layout](/en-US/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
