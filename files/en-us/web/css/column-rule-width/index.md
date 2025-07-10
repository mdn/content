---
title: column-rule-width
slug: Web/CSS/column-rule-width
page-type: css-property
browser-compat: css.properties.column-rule-width
---

{{CSSRef}}

The **`column-rule-width`** [CSS](/en-US/docs/Web/CSS) property sets the width of the line drawn between columns in a multi-column layout.

{{InteractiveExample("CSS Demo: column-rule-width")}}

```css interactive-example-choice
column-rule-width: thin;
```

```css interactive-example-choice
column-rule-width: medium;
```

```css interactive-example-choice
column-rule-width: thick;
```

```css interactive-example-choice
column-rule-width: 12px;
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
  columns: 3;
  column-rule: solid;
  text-align: left;
}
```

## Syntax

```css
/* Keyword values */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;

/* <length> values */
column-rule-width: 1px;
column-rule-width: 2.5em;

/* Global values */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: revert;
column-rule-width: revert-layer;
column-rule-width: unset;
```

The `column-rule-width` property is specified as a single `<'border-width'>` value.

### Values

- `<'border-width'>`
  - : Is a keyword defined by {{ cssxref("border-width") }} describing the width of the rule. It may be either a {{cssxref("&lt;length&gt;")}} or one of the `thin`, `medium`, or `thick` keywords.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a thick column rule

#### HTML

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-width`
  property is used to change the width of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-width: thick;
}
```

#### Result

{{EmbedLiveSample("Setting_a_thick_column_rule")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Multiple-column Layout](/en-US/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-color")}}
- {{CSSXref("column-rule")}}
