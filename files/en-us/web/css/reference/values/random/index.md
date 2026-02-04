---
title: random()
slug: Web/CSS/Reference/Values/random
page-type: css-function
status:
  - experimental
browser-compat: css.types.random
sidebar: cssref
---

The **`random()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) generates a random numeric value within a specified range. This allows for dynamic, randomized styling using just CSS.

{{InteractiveExample("CSS Demo: random()")}}

```html interactive-example
<div class="box"></div>
```

```css interactive-example
.box {
  rotate: random(--per-element, 0deg, 360deg);
  width: random(--per-element, 100px, 500px);
  background: hsl(random(--per-element, 0, 360), 50%, 50%);
  height: random(--per-element, 100px, 500px);
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
random(0, 100, by 10)

/* With per-element caching */
random(--per-element, 0, 360)

/* Combined options */
random(--per-element, 0deg, 360deg, by 45deg)

/* With custom caching key */
random(--my-key, 0, 100)
```

### Parameters

The `random(<random-caching-options>, <calc-sum>, <calc-sum>)` function specified an optional random caching strategy, generating a new random value per-element, or caching the generated value with a custom named key.
The `random(<random-caching-options>, <calc-sum>, <calc-sum>)` function specified an optional random caching strategy, generating a new random value per-element, or caching the generated value with a custom named key.


- `angle`
  - : A calculation which resolves to a {{cssxref("&lt;number&gt;")}} or an {{cssxref("angle")}}. When specifying unitless numbers they are interpreted as a number of radians, representing an {{cssxref("angle")}}.



- `<random-caching-options>` (optional)
  - : Controls how random values are cached and reused.
    This can be either:
    - `--per-element`
      - : Each element gets its own unique random value
    - `<dashed-ident>`
      - : A custom caching key (e.g., `--my-random-key`) for controlling value uniqueness

- `<calc-sum>` (minimum)
  - : The minimum value of the random range. Can be a number, dimension, percentage, or calculation.

- `<calc-sum>` (maximum)
  - : The maximum value of the random range. Can be a number, dimension, percentage, or calculation.

- `by <calc-sum>` (optional)
  - : Specifies the step interval. Only values that are multiples of this step will be generated.

## Accessibility

Because `random()` can generate an unknown value within a range, you don’t have full control over what you get and that can lead to inaccessible results. For example, if you use `random()` to generate color for text, you could end up with a value that has low contrast. So it’s important to be mindful of the context in which `random()` is being used so that your results are still accessible.


### Return value

`random()` returns a single value of the same type that was passed in.

## Formal syntax

{{CSSSyntax}}

## Examples

### Generate random colors for circular badge

#### HTML

```html
<html>
  <body>
    <div class="badge"></div>
  </body>
</html>
```

#### CSS

```css
.badge {
  width: 4em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: hsl(random(--per-element, 0, 360), 50%, 50%);
}
```

#### Result

{{EmbedLiveSample('Generate random colors for circular badge', '100%', '300px')}}

### Create a starry backdrop by randomly placing particles on the webpage

#### HTML

```html
<html>
  <body>
    <div class="star"></div>
    ...
    <div class="star"></div>
  </body>
</html>
```

#### CSS

```css
body {
  background: black;
}

.particle {
  height: .25em;
  width: .25em;
  background: white;
  position: fixed;
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
