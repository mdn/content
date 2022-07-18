---
title: column-rule
slug: Web/CSS/column-rule
tags:
  - CSS
  - CSS Multi-column Layout
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.column-rule
---
{{CSSRef}}

The **`column-rule`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets the width, style, and color of the line drawn between columns in a multi-column layout.

{{EmbedInteractiveExample("pages/css/column-rule.html")}}

It is a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) that sets the individual `column-rule-*` properties in a single, convenient declaration: {{Cssxref("column-rule-width")}}, {{Cssxref("column-rule-style")}}, and {{Cssxref("column-rule-color")}}.

> **Note:** As with all shorthand properties, any individual value that is not specified is set to its corresponding initial value (possibly overriding values previously set using non-shorthand properties).

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

The `column-rule` property is specified as one, two, or three of the values listed below, in any order.

### Values

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
p.foo { column-rule: dotted; }

/* Same as "medium solid blue" */
p.bar { column-rule: solid blue; }

/* Same as "8px solid currentcolor" */
p.baz { column-rule: solid 8px; }

p.abc { column-rule: thick inset blue; }
```

### Example 2

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns.
  Take note of how the `column-rule` property is used
  to adjust the style, width, and color of the rule
  that appears between the columns.
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

- [Multiple-column Layout](/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
