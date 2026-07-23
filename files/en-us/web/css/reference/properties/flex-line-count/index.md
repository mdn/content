---
title: "`flex-line-count` CSS property"
short-title: flex-line-count
slug: Web/CSS/Reference/Properties/flex-line-count
page-type: css-property
browser-compat: css.properties.flex-line-count
sidebar: cssref
---

The **`flex-line-count`** [CSS](/en-US/docs/Web/CSS) property sets the minimum number of flex lines that flex items will be distributed over in cases where a flex container's {{cssxref("flex-wrap")}} property includes the `balance` keyword. If `balance` if not included in `flex-wrap`, the `flex-line-count` property has no effect.

{{InteractiveExample("CSS Demo: flex-line-count")}}

```css interactive-example-choice
flex-line-count: 2;
```

```css interactive-example-choice
flex-line-count: 3;
```

```css interactive-example-choice
flex-line-count: 4;
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
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
  flex-wrap: wrap balance;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

## Syntax

```css
/* Integer values */
flex-line-count: 1;
flex-line-count: 3;
flex-line-count: 12;

/* Global values */
flex-line-count: inherit;
flex-line-count: initial;
flex-line-count: revert;
flex-line-count: revert-layer;
flex-line-count: unset;
```

### Values

The `flex-line-count` property is specified as a single positive {{cssxref("integer")}} that defines the minimum number of flex lines that balanced, wrapped flex items will be distributed over.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Effect of different `flex-line-count` values

This example includes four identical flex containers with different combinations of `flex-wrap` and `flex-line-count` set on them to demonstrate the effects of `flex-line-count`.

#### HTML

We include four identical container {{htmlelement("div")}}s with a `class` of `box`, each of which has ten child `<div>`s. Each container has a different `id`.

```html
<div class="box" id="box-no-balance">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>

<div class="box" id="box1">...</div>
<div class="box" id="box2">...</div>
<div class="box" id="box3">...</div>
```

```html hidden live-sample___flex-line-count
<p>No <code>balance</code></p>

<div class="box" id="box-no-balance">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>

<p><code>flex-line-count: 3</code></p>

<div class="box" id="box1">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>

<p><code>flex-line-count: 4</code></p>

<div class="box" id="box2">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>

<p><code>flex-line-count: 5</code></p>

<div class="box" id="box3">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

#### CSS

The CSS applied to the flex containers and their children is shown below. Most notably in this first block, we apply `flex-wrap: wrap balance` to all the containers. We also set a {{cssxref("flex")}} value of `1 1 150px` on the flex children so they will take a base width of 150px and then share out the remaining space on each flex line equally.

```css live-sample___flex-line-count
.box {
  width: 100%;
  border: 2px dotted gray;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap balance;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: lightgray;
  flex: 1 1 150px;
}
```

We then apply a different `flex-line-count` value to each flex container. Note how, for the `#box-no-balance` flex container, we also override the original `flex-wrap: wrap balance` value with `wrap`.

```css live-sample___flex-line-count
#box1 {
  flex-line-count: 3;
}

#box2 {
  flex-line-count: 4;
}

#box3 {
  flex-line-count: 5;
}

#box-no-balance {
  flex-line-count: 6;
  flex-wrap: wrap;
}
```

```css hidden live-sample___flex-line-count
* {
  box-sizing: border-box;
}

body {
  padding: 10px 30px;
}

@supports not (flex-line-count: 3) {
  body::before {
    content: "Your browser does not support the flex-line-count property.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

We've hidden the rest of the CSS for brevity.

#### Results

{{ EmbedLiveSample("flex-line-count", "100%", "600") }}

Note the effect of the different property combinations:

- The first flex container doesn't have the `balance` keyword set in its `flex-wrap` value. Its flex children are therefore not given a balanced distribution and are still laid out over three flex lines: its `flex-line-count` value of `6` is ignored.
- The other flex containers are given a balanced distribution for their flex children and laid out over progressively greater numbers of flex lines as the `flex-line-count` value increases.
- Note that the second flex container has `flex-line-count: 3` set on it, but this actually makes no difference to the layout of its flex children, because they fit on a minimum of three lines anyway. You can prove this by inspecting the second flex container using your browser's developer tools and disabling the `flex-line-count` property — the layout should not change.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXRef("flex-wrap")}}
- {{CSSXRef("flex-flow")}} shorthand
- [Basic concepts of flexbox](/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Mastering wrapping of flex items](/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [CSS flexible box layout](/en-US/docs/Web/CSS/Guides/Flexible_box_layout) module
