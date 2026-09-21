---
title: "`random()` CSS function"
short-title: random()
slug: Web/CSS/Reference/Values/random
page-type: css-function
status:
  - experimental
browser-compat: css.types.random
sidebar: cssref
---

{{SeeCompatTable}}

The **`random()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) generates a random value within a specified range, optionally limiting the possible values to step size intervals between those limits. It can be used when specifying a {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, or {{CSSxRef("&lt;integer&gt;")}} within a property value.

{{InteractiveExample("CSS Demo: random()")}}

```html interactive-example
<div class="box"></div>
```

```css interactive-example
.box {
  rotate: random(property-scoped, 0deg, 360deg);
  width: random(property-scoped, 50px, 300px);
  background-color: hsl(random(property-scoped, 0, 360) 50% 50%);
  height: random(property-scoped, 50px, 300px);
}

@supports not (order: random(1, 2)) {
  body::before {
    content: "Your browser doesn't support the random() function.";
  }
}
```

## Syntax

```css
/* Basic usage */
random(0, 100)
random(10px, 500px)
random(0deg, 360deg)

/* With step interval */
random(0, 100, 10)
random(0rad, 1turn, 30deg)

/* With <random-key> */
random(auto, 0, 360)
random(property-scoped, 0s, 5s)
random(--unique-base, 400px, 100px)
random(fixed 0.5, 1em, 40vw)
random(--unique-base property-scoped, 100dpi, 300dpi)

/* With <random-key> and step interval */
random(property-scoped, 0deg, 360deg, 45deg)
random(--my-base, 1em, 3rem, 2px)
```

### Parameters

The `random(seed, min, max, step) function accepts two to four comma-separated expressions as its parameters.

- `<random-key>` {{optional_inline}}
  - : Controls which `random()` functions in the document will share a random base value, or _seed_, and which will get distinct values.
    Specified as one of the following values:
    - `auto`
      - : The random function generates independent random values by default. The random cache name, and thus the result, varies across every `random()` instance in a multi-component value, across different properties, and across different elements. This default `<random-key>` value is equivalent to specifying `element-scoped property-index-scoped`.
    - `element-scoped`
      - : Adds an element-specific identifier to the random cache name, so different elements get different random values.
    - `property-scoped`
      - : Adds the property name to the random cache name, so different properties get different random values. Shorthand declarations use the shorthand property's name.
    - `property-index-scoped`
      - : Adds the property name and the index of the `random()` function among all random functions used in the same property value to the random cache name, so multiple instances in the same declaration each get different random values.
    - {{cssxref("dashed-ident")}}
      - : A custom name for the random cache key (e.g., `--my-random-key`). When used alone, the same random base value is shared across all elements and properties that use the same identifier. When combined with a `*-scoped` keyword, the sharing behavior is determined by the keyword.
    - `fixed <number>`
      - : Bypasses the random cache name and uses the `<number>` — between `0` and `1`, inclusive of 0, exclusive of 1 — as the seed's value.

- `<calc-sum>, <calc-sum>`
  - : Specified as `<number>`, `<dimension>`, or `<percentage>` values, or calculations resolving to one of these types, defining the minimum and maximum values, respectively. Both values must be resolvable to the same [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types). If the maximum is less than the minimum, the function will return the first `<calc-sum>` value.

- `<calc-sum>` {{optional_inline}}
  - : Specifies the step interval. If present and of the same data type as the minimum and maximum `<calc-sum>` values, it defines the return value to be the minimum value or at increments of the step value from the minimum value, up to the maximum value.

### Return value

Returns a random `<number>`, `<dimension>`, or `<percentage>` between the minimum and maximum range values, inclusive, in the same type as the `<calc-sum>` parameters.

## Description

The `random(SEED, MIN, MAX, STEP)` function specifies the minimum and maximum values and optional step increments, starting at the minimum value. The function generates a random result within the range specified. The seed, an [optional `<random-key>`](#random-key) parameter, enables sharing or varying random base values across different properties and elements.

The minimum, maximum and step values specified must be of the same data type for the function to be valid. While the units in the two to three `<calc-sum>` parameters don't need to be the same, they do need to be of the same data type, such as {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, or {{cssxref("frequency")}}, to be valid.

### Random base value

The random base value works like a [seed for randomness](/en-US/docs/Glossary/RNG). It's a starting number that is used to generate the final random result. When two `random()` functions share the same base value, their results vary together in a predictable pattern. When they have different base values, their results are completely independent of each other.

The optional first `<random-key>` parameter controls how the random base value is shared. It can be `auto`, a scope keyword (`element-scoped`, `property-scoped`, or `property-index-scoped`), a custom {{cssxref("dashed-ident")}}, `fixed <number>`, or a `<dashed-ident>` paired with a scope keyword.

#### Scope keywords

Used on their own, the scope keywords control sharing without a custom name:

- `property-scoped` shares a base value across all elements, per property.
- `element-scoped` gives each element its own base value, per property.
- `property-index-scoped` works like `property-scoped`, but also separates `random()` calls by position within a shorthand.

The `property-scoped` keyword makes `.a`, `.b`, and `.c` identical rectangles, since every element gets the same `width` value and the same `height` value:

```css
.a,
.b,
.c {
  width: random(property-scoped, 10px, 200px);
  height: random(property-scoped, 10px, 200px);
}
```

The `element-scoped` values would give each element its own independently sized `width` value and `height` value.

The `property-index-scoped` keyword is useful in shorthands, where each position needs its own shared value:

```css
.a,
.b,
.c {
  margin: random(property-index-scoped, 5px, 40px)
    random(property-index-scoped, 5px, 40px)
    random(property-index-scoped, 5px, 40px)
    random(property-index-scoped, 5px, 40px);
}
```

All three elements get the same top margin, the same right margin, and so on, but the four margin values differ from each other.

#### Custom names

A `<dashed-ident>` (e.g., `--custom-name`) used alone shares its base value globally: any `random()` call anywhere in the document with the same identifier gets the same result. This makes `.a`, `.b`, and `.c` identical squares, since every `width` and `height` resolves to the same value:

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

Pair a `<dashed-ident>` with a scope keyword to narrow that sharing. `property-scoped` keeps it global across elements but separates it by property:

```css
.a,
.b,
.c {
  width: random(--custom-name property-scoped, 10px, 200px);
  height: random(--custom-name property-scoped, 10px, 200px);
}
```

`element-scoped` instead keeps `width` and `height` linked within each element, but gives each element its own value, so `.a`, `.b`, and `.c` become squares of different sizes:

```css
.a,
.b,
.c {
  width: random(--custom-name element-scoped, 10px, 200px);
  height: random(--custom-name element-scoped, 10px, 200px);
}
```

#### Automatic behavior

When the first parameter is omitted, or explicitly set to `auto`, an ident is auto-generated from the property name and position. This behavior can cause some unexpected random base value sharing.

```css
.foo {
  width: random(100px, 200px);
}
.foo:hover {
  width: random(100px, 200px);
}
.bar {
  margin: random(1px, 100px) random(1px, 100px);
}
.bar:hover {
  margin: random(1px, 100px) random(1px, 100px) random(1px, 100px)
    random(1px, 100px);
}
```

When the `<random-key>` defaults or is explicitly set to `auto`, the user agent auto-generates a seed name, or _generated value sharing identifier_, following consistent rules based on property name and order. Because of this, `random()` functions can end up with the same seed name and, therefore, the same random base value. In this example, the generated value sharing identifier for the `random()` function in the `width` property value is the same for `.foo` as for `.foo:hover`, so the value won't change between states. Similarly, the first two `random()` functions in both `margin` declarations have the same generated value sharing identifier, meaning the first two values in the `margin` shorthand will be unchanged when hovered; on hover, `bar`'s top and right margins will remain the same, but the bottom and left margins will get independent random values. To get an independent value for each `random()` function, provide a unique {{cssxref("dashed-ident")}}.

### Custom properties

As with all CSS functions, when a `random()` function is included within a custom property value, the value remains a function; behaving like a text replacement mechanism, not storing a single return value.

```css
--random-size: random(1px, 100px);
```

In this example, the `--random-size` custom property does not "store" the randomly generated result. When `var(--random-size)` is parsed it is effectively replaced with `random(1px, 100px)`, meaning each use creates a new `random()` function call with its own base value depending on the context in which its used.

This is not true in the case of using `random()` when registering a custom property with {{cssxref("@property")}}. Registered custom properties compute random values and store them.

In this example, as `--defaultSize` is registered, `.a`, `.b`, and `.c` will be squares of equal size, but their colors will be random, as `--random-angle` was not registered:

```css
@property --defaultSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: random(100px, 200px);
}
:root {
  --random-angle: random(0deg, 360deg);
}
.a,
.b,
.c {
  background-color: hsl(var(--random-angle) 100% 50%);
  height: var(--defaultSize);
  width: var(--defaultSize);
}
```

## Accessibility

Because `random()` can generate an unknown value within a range, you don't have full control over what you get. This can lead to inaccessible results. For example, if you use `random()` to generate text color, you could end up with a value that has low contrast with its background. It is important to be mindful of the context in which `random()` is used, ensuring your results are always accessible.

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic Usage

In this example, we'll generate random colors for some circular badges to demonstrate the basic usage of the `random()` function.

#### HTML

We include five badges, one using the `desaturated` class and two using the `unique` class.

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturated"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

#### CSS

We render the five badges as circles. We use the `random()` function within an {{cssxref("color_value/hsl()")}} color function to define the {{cssxref("angle")}} of the {{cssxref("hue")}}. We set `property-scoped` to share the random base value between the default `badge` and the `desaturated` one, so it is a less saturated version of the same {{cssxref("hue")}}. We then override the `unique` badges to have a truly random `hue` by letting the base value sharing parameter default to `auto`.

```css
.badge {
  display: inline-block;
  width: 5em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: hsl(random(property-scoped, 0, 360) 50% 50%);
}
.badge.desaturated {
  background: hsl(random(property-scoped, 0, 360) 10% 50%);
}
.badge.unique {
  background: hsl(random(0, 360) 50% 50%);
}
```

```css hidden
@supports not (order: random(1, 2)) {
  body::before {
    content: "Your browser doesn't support the random() function.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Result

{{EmbedLiveSample('Generate random colors for circular badge', '100%', '300px')}}

### Random value sharing between properties

In this example, we create a starry backdrop to demonstrate combining a `<dashed-ident>` with `element-scoped` to share a random base value between properties within each individual element, without sharing it across elements.

#### HTML

We include five particles, all sharing the same class name.

```html
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
```

#### CSS

Every particle has the same styles. We use the `random()` function for the {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}}, and {{cssxref("left")}} values to randomly size and position each particle. We pair a `<dashed-ident>` with `element-scoped` for `height` and `width`, so each particle is a circle (its height matches its width) but sized independently of the others. `top` and `left` are left at the default `auto`, so each axis is positioned independently.

```css
body {
  background: black;
}

.particle {
  border-radius: 50%;
  background: white;
  position: fixed;
  width: random(--particle-size element-scoped, 0.25em, 1em);
  height: random(--particle-size element-scoped, 0.25em, 1em);
  top: random(0%, 100%);
  left: random(0%, 100%);
  animation: move 1s alternate-reverse infinite;
}
```

```css hidden
@supports not (order: random(1, 2)) {
  body::before {
    content: "Your browser doesn't support the random() function.";
    color: white;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Result

{{EmbedLiveSample('Random value sharing between properties', '100%', '300px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("calc()")}}
- [CSS units and values](/en-US/docs/Web/CSS/Guides/Values_and_units) module
- {{jsxref("Math.random()")}}
- [Rolling the Dice with CSS random()](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) via webkit.org (2025)
- [CSS Almanac: random()](https://css-tricks.com/almanac/functions/r/random/) via CSS-Tricks.com
