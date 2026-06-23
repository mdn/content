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
  rotate: random(property, 0deg, 360deg);
  width: random(property, 50px, 300px);
  background-color: hsl(random(property, 0, 360) 50% 50%);
  height: random(property, 50px, 300px);
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

/* With random value sharing scope */
random(auto, 0, 360)
random(element, 0s, 5s)
random(property, 400px, 100px)
random(property-index, 0deg, 360deg)
random(--unique-base, 400px, 100px)
random(fixed 0.5, 1em, 40vw)
random(--unique-base property, 100dpi, 300dpi)
random(--unique-base property-index, 100dpi, 300dpi)

/* With random value sharing scope and step values */
random(property, 0deg, 360deg, 45deg)
random(--my-base element, 1em, 3rem, 2px)
```

### Parameters

- `<random-value-sharing>` {{optional_inline}}
  - : Controls which `random()` functions in the document share a random base value and which receive distinct values. Keywords such as `element`, `property`, and `property-index` define the cache key type used for that sharing.
    This can be one of the following values, or a custom key combined with a cache key type keyword, space-separated:
    - `auto`
      - : A cache key is automatically generated from the property name and position index. Calls with the same generated key share a random base value; calls with different generated keys do not.
    - `element`
      - : The random base value is scoped per element. Each element in the DOM that uses `random(element, ...)` for a given property receives a unique random value independent from other elements. Different properties on the same element still receive independent values unless they are also linked by a matching custom `<dashed-ident>` key.
    - `property`
      - : The random base value is shared across all elements for the same property. Every element using `random(property, ...)` for a given property receives the same random result, making it possible to produce a uniform value across an entire selection.
    - `property-index`
      - : The random base value is scoped per property and per position index within a shorthand value. Each index position in a shorthand property such as {{cssxref("margin")}} receives its own consistent random value across all elements, while different index positions receive independent values. This makes it straightforward to produce distinct-but-consistent values at each shorthand position across elements.
    - {{cssxref("dashed-ident")}}
      - : A custom key (e.g., `--my-random-key`) that links `random()` calls sharing the same key within the same element. Properties on the same element that reference the same custom key share the same random base value, producing matching results across those properties. Elements are independent of each other by default. The custom key can be combined with a cache key type keyword to extend sharing beyond a single element:
        - `--key` alone — per-element cross-property linking. Each element gets its own random value, but linked properties on the same element agree.
        - `--key element` — explicit per-element scope; equivalent to the bare `--key` form.
        - `--key property` — cross-element cross-property linking. All elements share the same value for every property that references the same key, making the entire selection uniform.
        - `--key property-index` — cross-element, per-index linking within shorthand properties. All elements share the same set of values at each shorthand position, while properties referencing the same key at the same position are further linked together. For example, the following makes all elements' top and bottom margins agree with each other (via `--v-space`) and all elements' left and right margins agree with each other (via `--h-space`), while the two groups remain independently random from one another:

        ```css
        .a,
        .b,
        .c {
          margin: random(--v-space property-index, 5px, 30px)
            random(--h-space property-index, 5px, 30px)
            random(--v-space property-index, 5px, 30px)
            random(--h-space property-index, 5px, 30px);
        }
        ```

    - `fixed <number>`
      - : Specifies a fixed base value between `0` and `1`, inclusive, bypassing random generation entirely. This is useful for testing or when a specific, reproducible result is required.

- `<calc-sum>, <calc-sum>`
  - : Two required, comma-separated, `<number>`, `<dimension>`, or `<percentage>` values, or calculations resolving to one of these types, defining the minimum and maximum values, respectively. Both values must be resolvable to the same [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types). If the maximum is less than the minimum, the function will return the first `<calc-sum>` value.

- `<calc-sum>` {{optional_inline}}
  - : The optional third `<calc-sum>`, preceded by a comma, specifies the step interval. If present, and of the same data type as the two comma-separated minimum and maximum `<calc-sum>` values, it defines the return value to be the minimum value or at increments of the step value from the minimum value, up to the maximum value.

### Return value

Returns a random `<number>`, `<dimension>`, or `<percentage>` between the minimum and maximum range values, inclusive, in the same type as the `<calc-sum>` parameters.

## Description

The `random([<random-value-sharing>,] MIN, MAX[, STEP])` function specifies the minimum and maximum values and optional step increments, starting at the minimum value. The function generates a random result within the range specified. The optional [<random-value-sharing>](#random-value-sharing) parameter controls whether and how random base values are shared across properties and elements.

The minimum, maximum, and step values specified must be of the same data type for the function to be valid. While the units in the two to three `<calc-sum>` parameters don't need to be the same, they do need to be of the same data type — such as {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, or {{cssxref("frequency")}} — to be valid.

### Random base value

The random base value works like a [seed for randomness](/en-US/docs/Glossary/RNG). It is a starting number used to generate the final random result. When two `random()` functions share the same base value, their results vary together in a predictable pattern. When they have different base values, their results are completely independent of each other.

The optional first `<random-value-sharing>` parameter controls how the random base value is shared or isolated. Sharing enables reusing the same randomly generated value across multiple properties or elements, which is necessary for certain design effects. The value can be set to `auto`, one of the cache key type keywords (`element`, `property`, or `property-index`), a custom {{cssxref("dashed-ident")}}, or `fixed <number>`. A custom {{cssxref("dashed-ident")}} may be combined with a cache key type keyword, space-separated, to simultaneously control cross-property linking and cross-element scoping.

#### The `element` cache key type

When the `element` keyword is specified, the random base value is scoped per element. Every element in the selection receives its own unique random value for the given property, entirely independent of every other element. Properties on the same element also receive independent values from each other unless a `<dashed-ident>` key is used to link them. The `element` cache key type is the natural choice when you want each element to look visually distinct from its siblings:

```css
.a,
.b,
.c {
  width: random(element, 10px, 200px);
  height: random(element, 10px, 200px);
}
```

In this example, `.a`, `.b`, and `.c` each receive a unique random width and a unique, independently generated random height. No two elements will necessarily share the same dimensions.

#### The `property` cache key type

When the `property` keyword is specified, the random base value is shared across all elements that apply the same property. Every element in the selection receives the same random value for that property, producing a visually uniform outcome across the entire selection:

```css
.a,
.b,
.c {
  width: random(property, 10px, 200px);
  height: random(property, 10px, 200px);
}
```

In this example, `.a`, `.b`, and `.c` will all have the same random width, and all three will share the same independently generated random height. Each property resolves to a single value shared across all three elements.

#### The `property-index` cache key type

When the `property-index` keyword is specified, the random base value is scoped per property and per position index within a shorthand value. Within a shorthand such as {{cssxref("margin")}}, each positional slot (top, right, bottom, left) receives its own consistent random value across all elements, while different slots receive different values from one another:

```css
.card {
  margin: random(property-index, 5px, 30px)
    random(property-index, 5px, 30px)
    random(property-index, 5px, 30px)
    random(property-index, 5px, 30px);
}
```

In this example, all `.card` elements share the same top margin value, the same right margin value, the same bottom margin value, and the same left margin value — but each of those four values is a different random number. This is in contrast to `property`, which would give all four shorthand positions the same shared value, and `auto`, which generates keys by position but in a way that can produce surprising sharing across states (see [Automatic behavior](#automatic-behavior)).

#### Custom names

When you specify a `<dashed-ident>` (e.g., `--custom-name`), each element's `random()` calls that share the same custom key also share the same random base value within that element. Calls with different `<dashed-ident>` values are assigned distinct random base values. When the following is declared, `.a`, `.b`, and `.c` will all be squares, because within each element the `width` and `height` reference the same custom key and therefore share the same base value. Note that in this case `.a`, `.b`, and `.c` each receive a distinct size from one another, since the base value is per-element when no cache key type keyword is specified alongside the custom key:

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

#### Setting both `<dashed-ident>` and a cache key type

Combining a `<dashed-ident>` with a cache key type keyword (e.g., `random(--custom-name property, 0, 100)`) shares the random base value both across properties that reference the same custom key and across elements according to the specified scope.

Using `property` as the cache key type alongside a custom key means that `.a`, `.b`, and `.c` will all be squares of the same size, because the custom key links the two properties together and `property` extends that sharing across all elements:

```css
.a,
.b,
.c {
  width: random(--custom-name property, 10px, 200px);
  height: random(--custom-name property, 10px, 200px);
}
```

To instead scope the custom key per element while still linking properties within each element, use `element` as the cache key type:

````css
.a,
.b,
.c {
  width: random(--custom-name element, 10px, 200px);
  height: random(--custom-name element, 10px, 200px);
}
``` The `--custom-name` key links the two properties within an element, and `element` ensures each element gets a distinct base value.


````

In this case, `.a`, `.b`, and `.c` are each squares (same random width and height within each element), but their sizes differ from each other.

To link named groups of values within a shorthand across all elements, use `property-index` as the cache key type. In the following example, all three elements share the same top and bottom margin (via `--v-space`), and the same left and right margin (via `--h-space`), while the two margin groups remain independently random from each other:

````css
.a,
.b,
.c {
  margin: random(--v-space property-index, 5px, 40px)
    random(--h-space property-index, 5px, 40px)
    random(--v-space property-index, 5px, 40px)
    random(--h-space property-index, 5px, 40px);
}

#### Automatic behavior

When the first parameter is omitted, or explicitly set to `auto`, a key is auto-generated from the property name and position index within the value. This behavior can cause some unexpected random base value sharing.

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

When `<random-value-sharing>` defaults or is explicitly set to `auto`, the user agent auto-generates a key following consistent rules based on property name and position index. Because of this, `random()` functions can end up sharing the same auto-generated key and therefore the same random base value. In this example, the auto-generated key for the `random()` function in the `width` property is the same for `.foo` and `.foo:hover`, so the width value will not change between states. Similarly, the first two `random()` functions in both `margin` declarations share the same auto-generated keys, meaning the first two values in the `margin` shorthand are unchanged on hover; on hover, `.bar`'s top and right margins stay constant, while only the bottom and left margins receive new independent random values.

To avoid this implicit sharing, use an explicit cache key type such as `property-index` for shorthand properties, or `element` or `property` for single-value properties. To get a fully independent value for each `random()` function, provide a unique {{cssxref("dashed-ident")}}.

### Custom properties

As with all CSS functions, when a `random()` function is included within a custom property value, the value remains a function; behaving like a text replacement mechanism, not storing a single return value.

```css
--random-size: random(1px, 100px);
```

In this example, the `--random-size` custom property does not "store" the randomly generated result. When `var(--random-size)` is parsed it is effectively replaced with `random(1px, 100px)`, meaning each use creates a new `random()` function call with its own base value depending on the context in which it is used.

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

### Basic usage

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

We render the five badges as circles. We use the `random()` function within an {{cssxref("color_value/hsl()")}} color function to define the {{cssxref("angle")}} of the {{cssxref("hue")}}. We use the `property` cache key type to share the random hue across all `.badge` and `.badge.desaturated` elements, so the desaturated badge renders as a lower-saturation version of the same {{cssxref("hue")}} used by the regular badges. We then override the `unique` badges with `auto` so each badge resolves its hue independently from the shared property-scoped hue used by the other badges.

```css
.badge {
  display: inline-block;
  width: 5em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: hsl(random(property, 0, 360) 50% 50%);
}
.badge.desaturated {
  background: hsl(random(property, 0, 360) 10% 50%);
}
.badge.unique {
  background: hsl(random(auto, 0, 360) 50% 50%);
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

In this example, we create a starry backdrop to demonstrate using a `<dashed-ident>` combined with the `element` cache key type to share a random base value between properties of each individual element.

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

Every particle has the same styles. We use the `random()` function for the {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}}, and {{cssxref("left")}} values to randomly size and position each particle. We use a `<dashed-ident>` combined with the `element` cache key type for `height` and `width`, so each particle is a perfect circle — its height and width resolve to the same random value — while remaining independently sized from all other particles. We allow the cache key to resolve to `auto` for `top` and `left`, so each axis and each element is positioned fully independently.

```css
body {
  background: black;
}

.particle {
  border-radius: 50%;
  background: white;
  position: fixed;
  width: random(--particle-size element, 0.25em, 1em);
  height: random(--particle-size element, 0.25em, 1em);
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

### Consistent shorthand values across elements

In this example, we demonstrate the `property-index` cache key type to produce a card layout where every card shares the same set of random margin values, with each side of the margin being a different random amount.

#### HTML

```html
<div class="card">Card A</div>
<div class="card">Card B</div>
<div class="card">Card C</div>
```

#### CSS

We apply four `random()` calls with `property-index` to the `margin` shorthand. Each position index (top, right, bottom, left) resolves to its own consistent value shared across all `.card` elements, but the four values differ from each other.

```css
.card {
  background: lightblue;
  padding: 1em;
  margin: random(property-index, 5px, 40px)
    random(property-index, 5px, 40px)
    random(property-index, 5px, 40px)
    random(property-index, 5px, 40px);
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

{{EmbedLiveSample('Consistent shorthand values across elements', '100%', '300px')}}

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
