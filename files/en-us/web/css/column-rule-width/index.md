---
title: column-rule-width
slug: Web/CSS/column-rule-width
tags:
  - CSS
  - CSS Multi-column Layout
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.column-rule-width
---
{{ CSSRef}}

The **`column-rule-width`** [CSS](/en-US/docs/Web/CSS) property sets the width of the line drawn between columns in a multi-column layout.

{{EmbedInteractiveExample("pages/css/column-rule-width.html")}}

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
<p>This is a bunch of text split into three columns.
   The `column-rule-width` property is used to change
   the width of the line that is drawn between columns.
   Don't you think that's wonderful?</p>
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

- [Multiple-column Layout](/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-color")}}
- {{CSSXref("column-rule")}}
