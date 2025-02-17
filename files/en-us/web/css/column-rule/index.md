---
title: column-rule
slug: Web/CSS/column-rule
page-type: css-shorthand-property
browser-compat: css.properties.column-rule
---

{{CSSRef}}

The **`column-rule`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets the width, style, and color of the line drawn between columns in a multi-column layout.

{{EmbedInteractiveExample("pages/css/column-rule.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{Cssxref("column-rule-color")}}
- {{Cssxref("column-rule-style")}}
- {{Cssxref("column-rule-width")}}

## Syntax

```css
column-rule: dotted;
column-rule: solid 8px;
column-rule: solid blue;
column-rule: thick inset blue;

/* Global values */
column-rule: inherit;
column-rule: initial;
column-rule: revert;
column-rule: revert-layer;
column-rule: unset;
```

### Values

The `column-rule` property is specified as one, two, or three of the values listed below, in any order.

- `<'column-rule-width'>`
  - : Is a {{cssxref("&lt;length&gt;")}} or one of the three keywords, `thin`, `medium`, or `thick`. See {{cssxref("border-width")}} for details.
- `<'column-rule-style'>`
  - : See {{cssxref("border-style")}} for possible values and details.
- `<'column-rule-color'>`
  - : Is a {{cssxref("&lt;color&gt;")}} value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Example 1

```css
/* Same as "medium dotted currentcolor" */
p.foo {
  column-rule: dotted;
}

/* Same as "medium solid blue" */
p.bar {
  column-rule: solid blue;
}

/* Same as "8px solid currentcolor" */
p.baz {
  column-rule: solid 8px;
}

p.abc {
  column-rule: thick inset blue;
}
```

### Example 2

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns. Take note of how the
  `column-rule` property is used to adjust the style, width, and color of the
  rule that appears between the columns.
</p>
```

#### CSS

```css
.content-box {
  padding: 0.3em;
  background: #ff7;
  column-count: 3;
  column-rule: inset 2px #33f;
}
```

#### Result

{{EmbedLiveSample('Example_2')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Multiple-column Layout](/en-US/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
