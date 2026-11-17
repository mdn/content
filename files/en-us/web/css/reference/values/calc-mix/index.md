---
title: "`calc-mix()` CSS function"
short-title: calc-mix()
slug: Web/CSS/Reference/Values/calc-mix
page-type: css-function
browser-compat: css.types.calc-mix
sidebar: cssref
---

The **`calc-mix()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) returns a weighted average of two or more numeric values, such as lengths, angles, or numbers. Each value can be given a percentage that sets how much it contributes to the result.

{{InteractiveExample("CSS Demo: calc-mix()")}}

```css interactive-example-choice
width: calc-mix(100px, 300px);
```

```css interactive-example-choice
width: calc-mix(100px 75%, 300px 25%);
```

```css interactive-example-choice
width: calc-mix(100px 25%, 300px 75%);
```

```css interactive-example-choice
width: calc-mix(100px 25%, 300px 25%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">Mixed width</div>
</section>
```

```css interactive-example
#example-element {
  padding: 1rem 0;
  background-color: lightblue;
  border: 2px solid steelblue;
  text-align: center;
}
```

## Syntax

```css
/* An even mix of two lengths: 150px */
calc-mix(100px, 200px)

/* 75% of the first length and 25% of the second: 125px */
calc-mix(100px 75%, 200px 25%)

/* Values with different units, as long as they're the same type */
calc-mix(10rem 30%, 50vw 70%)

/* More than two values */
calc-mix(0deg 50%, 90deg 25%, 180deg 25%)

/* Calculations */
calc-mix(100% - 2rem 60%, 20rem 40%)
```

### Parameters

The `calc-mix()` function accepts one or more comma-separated items. Each item consists of the following:

- {{cssxref("calc-sum", "&lt;calc-sum&gt;")}}
  - : A value or calculation that resolves to a {{cssxref("number")}}, a {{cssxref("dimension")}} (such as a {{cssxref("length")}} or an {{cssxref("angle")}}), or a {{cssxref("percentage")}}. All of the values must resolve to the same [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types), but they don't need to use the same units. For example, you can mix `px` and `rem` lengths, but you can't mix a length with an angle.
- {{cssxref("percentage")}} {{optional_inline}}
  - : A percentage between `0%` and `100%`, which sets how much the value contributes to the result. This is called the _mix percentage_.

### Return value

The weighted average of the values, of the same data type as the values.

## Description

The `calc-mix()` function is a [math function](/en-US/docs/Web/CSS/Guides/Values_and_units/Using_math_functions), like {{cssxref("calc()")}}, so it can be used anywhere a number, dimension, or percentage is allowed. It multiplies each value by its mix percentage, then adds the results together. For example, `calc-mix(100px 75%, 200px 25%)` is equivalent to `calc(100px * 0.75 + 200px * 0.25)`, which is `125px`.

This is useful for finding a value at a point between other values. For example, `calc-mix(10rem calc(100% - var(--progress)), 30rem var(--progress))` returns `10rem` when `--progress` is `0%`, `30rem` when it's `100%`, and the corresponding value in between for other percentages.

The `calc-mix()` function is similar to {{cssxref("color_value/color-mix", "color-mix()")}}, which mixes colors in the same way.

### Mix percentages

The mix percentages are adjusted so that they add up to at most `100%`, as follows:

- If some mix percentages are omitted, the remaining percentage, `100%` minus the specified percentages, is shared equally between them. For example, `calc-mix(100px, 200px)` gives each value `50%`, and returns `150px`. Similarly, `calc-mix(100px 30%, 200px)` gives the second value `70%`, and returns `170px`.
- If the mix percentages add up to more than `100%`, they are scaled down proportionally so that they add up to `100%`. For example, `calc-mix(100px 60%, 200px 60%)` is equivalent to `calc-mix(100px 50%, 200px 50%)`, and returns `150px`.
- If the mix percentages add up to less than `100%`, they aren't scaled up. The remaining percentage is mixed with a value of zero, so it doesn't contribute to the result. For example, `calc-mix(100px 25%, 200px 25%)` returns `75px`: `25%` of `100px` plus `25%` of `200px`.

### Computed value

If all of the values and mix percentages can be resolved when the [computed value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) is determined, `calc-mix()` computes to the result. Otherwise, for example when the values contain percentages of a size that isn't known yet, it computes to a `calc-mix()` function with each value and mix percentage computed separately, and the result is determined later.

## Formal syntax

{{csssyntax}}

## Examples

### Mixing two widths

In this example, we use `calc-mix()` to set the width of each bar to a point between a minimum width of `8rem` and a maximum width of `20rem`. Each bar sets a `--progress` custom property, which determines how far between the two widths the bar is.

#### HTML

```html
<div class="bar" style="--progress: 0%">0%</div>
<div class="bar" style="--progress: 25%">25%</div>
<div class="bar" style="--progress: 50%">50%</div>
<div class="bar" style="--progress: 100%">100%</div>
```

#### CSS

The mix percentage of the minimum width is `100%` minus `--progress`, and the mix percentage of the maximum width is `--progress`.

```css
.bar {
  width: calc-mix(8rem calc(100% - var(--progress)), 20rem var(--progress));
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: lightblue;
  border: 2px solid steelblue;
}
```

```css hidden
@layer no-support {
  @supports not (width: calc-mix(1px, 2px)) {
    body::before {
      content: "Your browser doesn't support the calc-mix() function";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
      margin-bottom: 1rem;
    }
  }
}
```

#### Result

{{EmbedLiveSample("Mixing two widths", "", 250)}}

The `0%` bar is `8rem` wide, and the `100%` bar is `20rem` wide. The `25%` bar is `11rem` wide, a quarter of the way between the two widths, and the `50%` bar is `14rem` wide, halfway between them.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("calc()")}}
- {{cssxref("color_value/color-mix", "color-mix()")}}
- [Using CSS math functions](/en-US/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
- [CSS values and units](/en-US/docs/Web/CSS/Guides/Values_and_units) module
