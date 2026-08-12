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


This property is specified as the following value:

- {{cssxref("integer")}}
  - : A positive integer setting the minimum number of flex lines that balanced, wrapped flex items will be distributed over. The default value is `1`.

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

We've hidden the rest of the CSS for brevity.

#### Results

{{ EmbedLiveSample("flex-line-count", "100%", "600") }}

Note the effect of the different property combinations:

- The first flex container doesn't have the `balance` keyword set in its `flex-wrap` value. Its flex children are therefore not given a balanced distribution and are still laid out over three flex lines: its `flex-line-count` value of `6` is ignored.
- The other flex containers are given a balanced distribution for their flex children and laid out over progressively greater numbers of flex lines as the `flex-line-count` value increases.
- Note that the second flex container has `flex-line-count: 3` set on it, but this actually makes no difference to the layout of its flex children, because they fit on a minimum of three lines anyway. You can prove this by inspecting the second flex container using your browser's developer tools and disabling the `flex-line-count` property — the layout should not change.

### Creating balanced columns

This example demonstrates how `flex-line-count` can be used to create a balanced set of two columns. This is useful for cases such as wiki reference sections, where the layout requirement might be a set number of balanced columns, regardless of the number of items in the list. Setting an explicit {{cssxref("height")}} or {{cssxref("max-height")}} in this case doesn't work, as you may end up with less or more columns than desired.

#### HTML

We include an {{htmlelement("ol")}} element containing ten {{htmlelement("li")}} elements.

```html live-sample___balanced-columns
<ol>
  <li>
    <a href="#">The Silent Cartographer</a>, published by Meridian House,
    released March 12, 2014.
  </li>
  <li>
    <a href="#">Echoes of the Fallow Field</a>, published by Northbridge Press,
    released July 4, 2009.
  </li>
  <li>
    <a href="#">A Ledger of Small Regrets</a>, published by Ashwood & Kline,
    released November 21, 2017.
  </li>
  <li>
    <a href="#">The Clockmaker's Daughter's Shadow</a>, published by Hollow Pine
    Publishing, released February 8, 2011.
  </li>
  <li>
    <a href="#">Salt and Signal</a>, published by Redcliffe Editions, released
    September 30, 2019.
  </li>
  <li>
    <a href="#">Under a Borrowed Sky</a>, published by Fenwick & Marsh, released
    May 16, 2006.
  </li>
  <li>
    <a href="#">The Last Cartel of Winter</a>, published by Graywolf Bindery,
    released January 2, 2021.
  </li>
  <li>
    <a href="#">Notes from an Unfinished Atlas</a>, published by Coastline
    Books, released June 27, 2013.
  </li>
  <li>
    <a href="#">The Weight of Empty Rooms</a>, published by Draymoor House,
    released October 15, 2008.
  </li>
  <li>
    <a href="#">A Brief History of Almost Everyone</a>, published by Ferngate
    Press, released April 9, 2022.
  </li>
</ol>
```

#### CSS

We set the list's {{cssxref("display")}} to `flex`, then set a {{cssxref("gap")}} of `10px` between flex items and `40px` between flex lines. We then set a {{cssxref("flex-direction")}} value of `column` and a {{cssxref("flex-wrap")}} value of `balance` using the {{cssxref("flex-flow")}} shorthand so that the flex lines are arranged in columns and will balance when wrapped.

Finally, we set a `flex-line-count` value of `2`, meaning that, even though no fixed height is set on the list, its content will always be wrapped over two balanced columns, regardless of how much content is included.

```css live-sample___balanced-columns
ol {
  display: flex;
  gap: 10px 40px;
  flex-flow: column balance;
  flex-line-count: 2;
}
```

```css hidden live-sample___flex-line-count, live-sample___balanced-columns
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

{{ EmbedLiveSample("balanced-columns", "100%", "350") }}

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
