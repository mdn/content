---
title: column-rule-color
slug: Web/CSS/column-rule-color
page-type: css-property
browser-compat: css.properties.column-rule-color
---

{{CSSRef}}

The **`column-rule-color`** [CSS](/en-US/docs/Web/CSS) property sets the color of the line drawn between columns in a multi-column layout.

{{InteractiveExample("CSS Demo: column-rule-color")}}

```css interactive-example-choice
column-rule-color: red;
```

```css interactive-example-choice
column-rule-color: rgb(48, 125, 222);
```

```css interactive-example-choice
column-rule-color: hsla(120, 80%, 40%, 0.6);
```

```css interactive-example-choice
column-rule-color: currentcolor;
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
/* <color> values */
column-rule-color: red;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* Global values */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

The `column-rule-color` property is specified as a single `<color>` value.

### Values

- {{cssxref("&lt;color&gt;")}}
  - : The color of the rule that separates columns.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a blue column rule

#### HTML

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: blue;
}
```

#### Result

{{EmbedLiveSample("Setting_a_blue_column_rule")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref("&lt;color&gt;")}} data type
- Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, and {{cssxref("caret-color")}}
