---
title: Logical properties for floating and positioning
slug: Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning
page-type: guide
---

{{CSSRef}}

The [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module contains logical mappings for the physical values of {{cssxref("float")}} and {{cssxref("clear")}}, and also for the positioning properties used with [positioned layout](/en-US/docs/Web/CSS/CSS_positioned_layout). This guide takes a look at how to use these.

## Mapped properties and values

The table below details the {{glossary("logical properties")}} and values discussed in this guide along with their {{glossary("physical properties")}} and values mappings. They assume a horizontal {{cssxref("writing-mode")}}, with a left-to-right direction.

| Logical property or value          | Physical property or value       |
| ---------------------------------- | -------------------------------- |
| {{cssxref("float")}}: inline-start | {{cssxref("float")}}: left       |
| {{cssxref("float")}}: inline-end   | {{cssxref("float")}}: right      |
| {{cssxref("clear")}}: inline-start | {{cssxref("clear")}}: left       |
| {{cssxref("clear")}}: inline-end   | {{cssxref("clear")}}: right      |
| {{cssxref("inset-inline-start")}}  | {{cssxref("left")}}              |
| {{cssxref("inset-inline-end")}}    | {{cssxref("right")}}             |
| {{cssxref("inset-block-start")}}   | {{cssxref("top")}}               |
| {{cssxref("inset-block-end")}}     | {{cssxref("bottom")}}            |
| {{cssxref("text-align")}}: start   | {{cssxref("text-align")}}: left  |
| {{cssxref("text-align")}}: end     | {{cssxref("text-align")}}: right |

In addition to these mapped properties, there are some additional shorthand properties made possible by being able to address block and inline dimensions. These have no mapping to physical properties, aside from the {{cssxref("inset")}} property.

| Logical property            | Purpose                                                                         |
| --------------------------- | ------------------------------------------------------------------------------- |
| {{cssxref("inset-inline")}} | Sets both of the above inset values for the inline dimension simultaneously.    |
| {{cssxref("inset-block")}}  | Sets both of the above inset values for the block dimension simultaneously.     |
| {{cssxref("inset")}}        | Sets all four inset values simultaneously with physical mapping of multi-value. |

## Float and clear example

The physical values used with the {{cssxref("float")}} and {{cssxref("clear")}} properties are `left`, `right` and `both`. The CSS logical properties and values module defines the values `inline-start` and `inline-end` as mappings for `left` and `right`.

In the example below, the first box is floated with `float: left`, and the second with `float: inline-start`.
If you apply `direction: rtl` to the `.inner` selector, the left-floated box always stays on the left, whereas the `inline-start`-floated item follows the `direction` of the text.
You can combine this with `writing-mode: vertical-rl` to see the difference of block layout in combination with `direction` values.

```html live-sample___float
<div class="container">
  <div class="inner">
    <div class="physical box"></div>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale.
  </div>
  <div class="inner">
    <div class="logical box"></div>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale.
  </div>
</div>
```

```css hidden live-sample___float
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}

.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
  width: 100px;
  height: 100px;
}
```

```css live-sample___float
.inner {
  /* direction: rtl; */
  /* writing-mode: vertical-rl; */
}

.physical {
  float: left;
}

.logical {
  float: inline-start;
}
```

{{EmbedLiveSample("float", "", "220px")}}

## Example: Inset properties for positioned layout

CSS positioning generally allows us to position an element in a manner relative to its containing block — we essentially inset the item relative to where it would fall based on normal flow. To position an element relative to the viewport, use the physical properties {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} and {{cssxref("left")}}. When you want the positioning to relate to the flow of text in your writing mode, use {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} and {{cssxref("inset-inline-end")}} instead.

These properties take a length or a percentage as a value, and relate to the user's screen dimensions.

In the below example, the `inset-block-start` and `inset-inline-end` properties are used to position the blue box using absolute positioning inside the area with the grey dotted border, which has `position: relative`. Change the `writing-mode` property to `vertical-rl`, or add `direction: rtl`, and see how the flow relative box stays with the text direction.

```html live-sample___positioning-inset
<div class="container">
  <div class="inner">
    <div class="physical box"></div>
  </div>
  <div class="inner">
    <div class="logical box"></div>
  </div>
</div>
```

```css hidden live-sample___positioning-inset
.container {
  display: flex;
}

.inner {
  width: 200px;
  height: 200px;
  position: relative;
  border: 2px dotted grey;
}

.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  width: 100px;
  height: 100px;
}
```

```css live-sample___positioning-inset
.inner {
  writing-mode: horizontal-tb;
}

.physical {
  position: absolute;
  top: 20px;
  right: 0;
}

.logical {
  position: absolute;
  inset-block-start: 20px;
  inset-inline-end: 0;
}
```

{{EmbedLiveSample("positioning-inset", "", "250px")}}

## New two- and four-value shorthands

As with other properties in the module, we have shorthand properties which give the ability to set two or four values at once.

- {{cssxref("inset")}} — sets all four sides together with physical mapping.
- {{cssxref("inset-inline")}} — sets both logical inline insets.
- {{cssxref("inset-block")}} — sets both logical block insets.

## Example: Logical values for text-align

The {{cssxref("text-align")}} property has logical values that relate to text direction — rather than using `left` and `right` you can use `start` and `end`. In the below example, `text-align: right` is set in the first block and `text-align: end` in the second.

If you change the value of `direction` to `rtl`, you will see that the alignment stays to the right for the first block, but goes to the logical end on the left in the second.

```html live-sample___text-align
<div class="container">
  <div class="inner physical">Aligned text</div>
  <div class="inner logical">Aligned text</div>
</div>
```

```css hidden live-sample___text-align
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  display: flex;
}

.inner {
  width: 200px;
  border: 2px dotted grey;
  padding: 10px;
}
```

```css live-sample___text-align
.inner {
  direction: ltr;
}

.physical {
  text-align: right;
}

.logical {
  text-align: end;
}
```

{{EmbedLiveSample("text-align")}}

This works more consistently when using box alignment that uses start and end rather than physical directions for alignment.
