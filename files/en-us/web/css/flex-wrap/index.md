---
title: flex-wrap
slug: Web/CSS/flex-wrap
page-type: css-property
browser-compat: css.properties.flex-wrap
---

{{CSSRef}}

The **`flex-wrap`** [CSS](/en-US/docs/Web/CSS) property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

{{EmbedInteractiveExample("pages/css/flex-wrap.html")}}

The {{cssxref("flex-flow")}} property shorthand can be used to set both the {{CSSXRef("flex-direction")}} and `flex-wrap` properties, which define the flex container's main and cross axes, respectively.

## Syntax

```css
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: revert-layer;
flex-wrap: unset;
```

### Values

The `flex-wrap` property is specified as a single keyword chosen from the following values below:

- `nowrap`
  - : The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is the equivalent of [inline-start or block-start](/en-US/docs/Glossary/Flow_relative_values), depending on the {{cssxref("flex-direction")}} value. This is the default value.
- `wrap`
  - : The flex items break into multiple lines. The cross-start is the equivalent of [inline-start or block-start](/en-US/docs/Glossary/Flow_relative_values), depending on the current [writing mode](/en-US/docs/Web/CSS/CSS_writing_modes), and the {{cssxref("flex-direction")}} value.
- `wrap-reverse`
  - : Behaves the same as `wrap`, but cross-start and cross-end are inverted.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting flex container wrap values

#### HTML

```html
<h4>This is an example for flex-wrap:wrap</h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:nowrap</h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:wrap-reverse</h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

#### CSS

```css
/* Common Styles */
.content,
.content1,
.content2 {
  color: #fff;
  font: 100 24px/100px sans-serif;
  height: 150px;
  width: 897px;
  text-align: center;
}

.content div,
.content1 div,
.content2 div {
  height: 50%;
  width: 300px;
}
.red {
  background: orangered;
}
.green {
  background: yellowgreen;
}
.blue {
  background: steelblue;
}

/* Flexbox Styles */
.content {
  display: flex;
  flex-wrap: wrap;
}
.content1 {
  display: flex;
  flex-wrap: nowrap;
}
.content2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

#### Results

{{ EmbedLiveSample('Setting flex container wrap values', '', '700') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXRef("flex-direction")}}
- {{CSSXRef("flex-flow")}} shorthand
- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
