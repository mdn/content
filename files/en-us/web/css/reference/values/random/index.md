---
title: random()
slug: Web/CSS/Reference/Values/random
page-type: css-function
status:
  - experimental
browser-compat: css.types.random
sidebar: cssref
---

The **`random()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) generates a random numeric value within a specified range. This allows for dynamic, randomized styling using CSS.

{{InteractiveExample("CSS Demo: random()")}}

```html interactive-example
<div class="box"></div>
```

```css interactive-example
.box {
  rotate: random(element-shared, 0deg, 360deg);
  width: random(element-shared, 100px, 500px);
  background: hsl(random(element-shared, 0, 360), 50%, 50%);
  height: random(element-shared, 100px, 500px);
}
```

## Syntax

```css
/* Basic usage */
random(0, 100)

/* With range and units */
random(10px, 500px)
random(0deg, 360deg)

/* With step interval */
random(0, 100, 10)

/* Random base value shared across elements */
random(element-shared, 0, 360)

/* Combined options */
random(element-shared, 0deg, 360deg, 45deg)

/* Using a custom key to share the random value */
random(--my-key, 0, 100)
```

### Parameters

- `<random-value-sharing>` (optional)
  - : Controls which random functions in the document will share a random base value and which will get distinct values.
    This can be either:
    - `auto`
      - : Each use of `random()` in an element's style gets its own unique random base value.
    - {{cssxref("dashed-ident")}}
      - : A custom key for sharing (e.g., `--my-random-key`) the same random base value across styles.
    - `element-shared`
      - : All elements that use `random()` with this parameter will share the same random base value.
    - `fixed <number>`
      - : Specifies a base value between 0 and 1 for the random value to be generated from.

- `<calc-sum>` (minimum)
  - : The minimum value of the random range. Can be a number, dimension, percentage, or calculation. Must use the same type as the maximum value and optional step interval value, if provided.

- `<calc-sum>` (maximum)
  - : The maximum value of the random range. Can be a number, dimension, percentage, or calculation. Must use the same type as the minimum value and optional step interval value, if provided.

- `<calc-sum>` (optional)
  - : Specifies the step interval. Only values that are multiples of this step will be generated. Must use the same type as the minimum and maximum values.

### Return value
  
A random value from the minimum to the maximum in the same type provided for the parameters.

## Description
  
The `random(<calc-sum>, <calc-sum>)` function call specifies a minimum value and a maximum value and a random result is generated within the range specified. The values specified must be of the same value type, [number](/en-US/docs/Web/CSS/Reference/Values/number), [dimension](/en-US/docs/Web/CSS/Reference/Values/dimension), or {{cssxref("percentage")}}, for the function to be valid. While the units in the two parameters don't need to be the same, they do need to be of the same dimension type, such as {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, or {{cssxref("frequency")}} to be valid.

### Random Base Value
The random base value is an underlying deterministic number that generates the final random result similar to a seed given to a randomization algorithm. When the same random base value is used for different `random()` functions, the results will vary in a coordinated way. Different random base values will create independently random results.

### Random Value Sharing
You can optionally provide a `<random-value-sharing>` value as the first parameter which controls how the random base value is shared. Sharing is useful for being able to reuse the same randomly generated value which can be necessary for some design effects. The optional first parameter can use `auto`, an `element-shared` keyword, a custom `<dashed-ident>` or `fixed <number>`.

Use the `element-shared` keyword as the first parameter to share the random base value across all elements that use `random()` with the keyword. When you specify a `<dashed-ident>` (e.g. `--custom-name`), each element gets its own random base value. Within that element, all properties that reference the same ident will share that base value. Combining a `<dashed-ident>` with `element-shared` (e.g. `random(--custom-name element-shared, 0, 100)`) shares the random base value across elements and properties that use the same `<random-value-sharing>` parameter.

#### Automatic behavior
When you omit the first parameter, `auto` is used which causes CSS to auto-generate an ident from the property name and a position. This behavior can cause some unexpected random base value sharing.

```css
.foo {
  margin: random(1px, 100px) random(1px, 100px);
}
.bar {
  width: random(element-shared, 100px, 200px);
}
.bar:hover {
  width: random(element-shared, 200px, 300px);
}
```

In the example above, the use of two `random()` functions for the `margin` property generate "margin 0" and "margin 1" names internal to CSS for each `random()` function, respectively. For the rules applying to `.bar`, each use of `random()` will generate the same name ("width 0") meaning they will both use the same random base value.

To avoid this behavior, you can provide a unique {{cssxref("dashed-ident")}} that is not used elsewhere in the document in order to get a distinct random base value.

### Custom Properties

When using `random()` with custom properties it is important to be aware that custom properties in CSS work like a text replacement mechanism rather than a variable that stores a result. This can lead to counterintuitive behavior.

```css
--random-size: random(1px, 100px);
```

In the above example, the `--random-size` custom property does not "store" the randomly generated result. When `var(--random-size)` is parsed it is effectively replaced with `random(1px, 100px)`, meaning each use creates a new `random()` call. Each call will may have its own base value depending on the context in which its used. 

Use `element-shared`, or a {{cssxref("dashed-ident")}}, or both in `random()` calls assigned to a custom property to share random base values if that is the intent, or use a registered custom property. Registered custom properties using {{cssxref("@property")}} which will compute the random value and store it. 

## Accessibility

Because `random()` can generate an unknown value within a range, you don’t have full control over what you get and that can lead to inaccessible results. For example, if you use `random()` to generate color for text, you could end up with a value that has low contrast. So it’s important to be mindful of the context in which `random()` is being used so that your results are still accessible.

## Formal syntax

{{CSSSyntax}}

## Examples

### Generate random colors for circular badge

#### HTML

```html
<html>
  <body>
    <div class="badge"></div>
    <div class="badge"></div>
    <div class="badge unique"></div>
    <div class="badge unique"></div>
  </body>
</html>
```

#### CSS

```css
.badge {
  width: 4em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: hsl(random(element-shared, 0, 360), 50%, 50%);
}
.badge.unique {
  background: hsl(random(0, 360), 50%, 50%);
}
```

#### Result

{{EmbedLiveSample('Generate random colors for circular badge', '100%', '300px')}}

### Create a starry backdrop by randomly placing particles on the webpage

#### HTML

```html
<html>
  <body>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    ...
    <div class="particle"></div>
  </body>
</html>
```

#### CSS

```css
body {
  background: black;
}

.particle {
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: white;
  position: fixed;
  width: random(0.25em, 1em);
  top: random(0%, 100%);
  left: random(0%, 100%);
}
```

#### Result

{{EmbedLiveSample('Create a starry backdrop by randomly placing particles on the webpage', '100%', '300px')}}


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [webkit.org: Rolling the Dice with CSS random()](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/)
- [CSS Tricks: random()](https://css-tricks.com/almanac/functions/r/random/)
