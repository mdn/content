---
title: "`flex-flow` CSS property"
short-title: flex-flow
slug: Web/CSS/Reference/Properties/flex-flow
page-type: css-shorthand-property
browser-compat: css.properties.flex-flow
sidebar: cssref
---

The **`flex-flow`** [CSS](/en-US/docs/Web/CSS) [shorthand](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) property specifies the direction of a flex container, as well as its wrapping behavior.

{{InteractiveExample("CSS Demo: flex-flow")}}

```css interactive-example-choice
flex-flow: row wrap;
```

```css interactive-example-choice
flex-flow: row-reverse nowrap;
```

```css interactive-example-choice
flex-flow: row wrap balance;
```

```css interactive-example-choice
flex-flow: column wrap-reverse;
```

```css interactive-example-choice
flex-flow: column wrap;
```

```css interactive-example-choice
flex-flow: column balance wrap;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
    <div>Item Four</div>
    <div>Item Five</div>
    <div>Item Six</div>
    <div>Item Seven</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  max-height: 300px;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 5px 10px;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("flex-direction")}}
- {{cssxref("flex-wrap")}}

## Syntax

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;
flex-flow: wrap balance;
flex-flow: balance wrap-reverse;

/* flex-flow: <'flex-direction'> and <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;
flex-flow: row-reverse balance wrap

/* Global values */
flex-flow: inherit;
flex-flow: initial;
flex-flow: revert;
flex-flow: revert-layer;
flex-flow: unset;
```

### Values

See {{cssxref("flex-direction")}} and {{cssxref("flex-wrap")}} for details on the values.

## Description

The `flex-flow` shorthand property specifies the {{cssxref("flex-direction")}} and {{cssxref("flex-wrap")}} properties, defining the direction of a flex container and its wrapping behavior. It can also define flex items to be balanced when wrapping is allowed.

For example, `column-reverse wrap` will set the main-axis to the block direction with a reversed main-start and main-end, with flex items being allowed to wrap, creating new lines if needed.

```css
.container {
  flex-flow: column-reverse wrap;
}
```

To distribute the flex items evenly across each flex line, you can include the `flex-wrap` keyword [`balance`](/en-US/docs/Web/CSS/Reference/Properties/flex-wrap#balance) in addition to `wrap`:

```css
.container {
  flex-flow: column-reverse wrap balance;
}
```

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates using the `flex-flow` shorthand on a flex container so the items are laid out backwards across multiple rows.

#### HTML

We include a list of words in alphabetical order:

```html
<ul>
  <li>Alphabet</li>
  <li>Banana</li>
  <li>Crayons</li>
  <li>Dinosaurs</li>
  <li>Eggplant</li>
  <li>Foundation</li>
  <li>Ghosts</li>
  <li>Happy</li>
  <li>Igloo</li>
  <li>Janitors</li>
  <li>Kittens</li>
  <li>Lasso</li>
  <li>Magic 8-ball</li>
  <li>Nincompoop</li>
  <li>Orange</li>
  <li>Petunia</li>
  <li>Quality</li>
  <li>Rancid</li>
  <li>Shoelace</li>
  <li>Terydactyl</li>
  <li>Umbrella</li>
  <li>Valentine</li>
  <li>Westward</li>
  <li>Xylophone</li>
</ul>
```

#### CSS

We set the {{HTMLElement("ul")}} to be a flex container with the {{cssxref("display")}} property, define a {{cssxref("width")}}, add a {{cssxref("gap")}} so there is some room between flex items and flex lines, and then set the `flex-flow` to wrap the items in reverse order. Additional CSS has been hidden for brevity.

```css
ul {
  display: flex;
  width: 31em;
  gap: 1em;

  flex-flow: row-reverse wrap-reverse;
}
```

```css hidden
ul {
  list-style: none;
  border: 1px solid;
  font-family: sans-serif;
}
li {
  font-size: 1.25rem;
  padding: 5px;
  border: 1px solid;
  background-color: lightpink;
}
li:nth-of-type(even) {
  background-color: lightgreen;
}
```

#### Result

{{EmbedLiveSample("Basic usage","",310)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ordering flex items](/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
