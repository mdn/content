---
title: flex-wrap
slug: Web/CSS/flex-wrap
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.flex-wrap
---
{{ CSSRef}}

The **`flex-wrap`** [CSS](/en-US/docs/Web/CSS) property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

{{EmbedInteractiveExample("pages/css/flex-wrap.html")}}

See [Using CSS flexible boxes](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) for more properties and information.

## Syntax

```css
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: unset;
```

The `flex-wrap` property is specified as a single keyword chosen from the list of values below.

### Values

The following values are accepted:

- `nowrap`
  - : The flex items are laid out in a single line which may cause the flex container to overflow. The **cross-start** is either equivalent to **start** or **before** depending on the {{cssxref("flex-direction")}} value. This is the default value.
- `wrap`
  - : The flex items break into multiple lines. The **cross-start** is either equivalent to **start** or **before** depending `flex-direction` value and the **cross-end** is the opposite of the specified **cross-start**.
- `wrap-reverse`
  - : Behaves the same as `wrap` but **cross-start** and **cross-end** are permuted.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting flex container wrap values

#### HTML

```html
<h4>This is an example for flex-wrap:wrap </h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:nowrap </h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:wrap-reverse </h4>
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

{{ EmbedLiveSample('Setting_flex_container_wrap_values', '700px', '700px', '', 'Web/CSS/flex-wrap') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
