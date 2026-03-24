---
title: random()
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
  rotate: random(element-shared, 0deg, 360deg);
  width: random(element-shared, 50px, 300px);
  background-color: hsl(random(element-shared, 0, 360) 50% 50%);
  height: random(element-shared, 50px, 300px);
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

/* With base value */
random(auto, 0, 360)
random(element-shared, 0s, 5s)
random(--unique-base, 400px, 100px)
random(fixed 0.5, 1em, 40vw)
random(--unique-base element-shared, 100dpi, 300dpi)

/* With base and step values */
random(element-shared, 0deg, 360deg, 45deg)
random(--my-base, 1em, 3rem, 2px)
```

### Parameters

- `<random-value-sharing>` {{optional_inline}}
  - : Controls which `random()` functions in the document will share a random base value and which will get distinct values.
    This can be one of the following values, or both a custom key and the keyterm `element-shared`, separated by a space:
    - `auto`
      - : Each use of `random()` in an element's style gets its own unique random base value.
    - {{cssxref("dashed-ident")}}
      - : A custom key (e.g., `--my-random-key`) for sharing the same random base value across properties of an element.
    - `element-shared`
      - : A random base value is shared across all elements for the same property using this key term. This base value is independent from the `random()` functions included in the values of other properties on that same element, unless the random functions also include the same custom key.
    - `fixed <number>`
      - : Specifies a base value between `0` and `1`, inclusive, for the random value to be generated from.

- `<calc-sum>, <calc-sum>`
  - : Two required, comma-separated, `<number>`, `<dimension>`, or `<percentage>` values, or calculations resolving to one of these types, defining the minimum and maximum values, respectively. Both values must be resolvable to the same [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types). If the maximum is less than the minimum, the function will return the first `<calc-sum>` value.

- `<calc-sum>` {{optional_inline}}
  - : The optional third `<calc-sum>`, preceded by a comma, specifies the step interval. If present, and of the same data type as the two comma-separated minimum and maximum `<calc-sum>` values, it defines the return value to be minimum value or at increments of the step value from the minimum value, up to the maximum value.

### Return value

Returns a random `<number>`, `<dimension>`, or `<percentage>` between the minimum and maximum range values, inclusive, in the same type as the `<calc-sum>` parameters.

## Description

The `random(SEED, MIN, MAX, STEP)` function specifies the minimum and maximum values and optional step increments, starting at the minimum value. The function generates a random result within the range specified. The seed, an [optional `<random-value-sharing>`](#random-value-sharing) parameter, enables sharing or varying random base values across different properties and elements.

The minimum, maximum and step values specified must be of the same data type for the function to be valid. While the units in the two to three `<calc-sum>` parameters don't need to be the same, they do need to be of the same data type, such as {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, or {{cssxref("frequency")}}, to be valid.

### Random base value

The random base value works like a [seed for randomness](/en-US/docs/Glossary/RNG). It's a starting number that is used to generate the final random result. When two `random()` functions share the same base value, their results vary together in a predictable pattern. When they have different base values, their results are completely independent of each other.

The optional first `<random-value-sharing>` parameter controls how the random base value is shared. Sharing enables reusing the same randomly generated value, a necessity for some design effects. The value can be set to use `auto`, the `element-shared` keyword, a custom {{cssxref("dashed-ident")}} , or `fixed <number>`. Including a custom {{cssxref("dashed-ident")}} with the `element-shared` keyword, space-separated, is also valid.

#### The `element-shared` keyword

All `random()` functions with the `element-shared` keyword share the same random base value for a single property across all elements. For example, when the following is declared, A, B, and C will be identically sized rectangles, all three having the same random width and all three having the same, independently-generated random height:

```css
A,
B,
C {
  width: random(element-shared, 10px, 200px);
  height: random(element-shared, 10px, 200px);
}
```

#### Custom names

When you specify a `<dashed-ident>` (e.g., `--custom-name`), each element in an element's styles with the same name shares the same random base value, and ones with different `<dashed-ident>` values will be assigned distinct random base values. When the following is declared, A, B, and C will all be squares, because within each element, all properties that reference the same ident will share the same base value. Therefore, the width of each will be the same as it's height. Note that, in this case, A, B, and C will have distinct sizes because the base value sharing is between properties of an element, not between elements.

```css
A,
B,
C {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

#### Setting both `<dashed-ident>` and `element-shared`

Combining a `<dashed-ident>` with `element-shared` (e.g., `random(--custom-name element-shared, 0, 100)`) shares the random base value across both the elements and the properties that use the same `<random-value-sharing>` parameter. Given the following, A, B, and C will all be squares of the same size:

```css
A,
B,
C {
  width: random(--custom-name element-shared, , 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
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

When the `<random-value-sharing>` defaults or is explicitly set to `auto`, the user agent auto-generates a seed name, or _generated value sharing identifier_, following consistent rules based on property name and order. Because of this, `random()` functions can end up with the same seed name and, therefore, the same random base value. In this example, the generated value sharing identifier for the `random()` function in the `width` property value is the same for `.foo` as for `.foo:hover`, so the value won't change between states. Similarly, the first two `random()` functions in both `margin` declarations have the same generated value sharing identifier, meaning the first two values in the `margin` shorthand will be unchanged when hovered; on hover, `bar`'s top and right margins will remain the same, but the bottom and left margins will get independent random values. To get an independent value for each `random()` function, provide a unique {{cssxref("dashed-ident")}}.

### Custom properties

As with all CSS functions, when a `random()` function is included within a custom property value, the value remains a function; behaving like a text replacement mechanism, not storing a single return value.

```css
--random-size: random(1px, 100px);
```

In this example, the `--random-size` custom property does not "store" the randomly generated result. When `var(--random-size)` is parsed it is effectively replaced with `random(1px, 100px)`, meaning each use creates a new `random()` function call with its own base value depending on the context in which its used.

This is not true in the case of using `random()` when registering a custom property with {{cssxref("@property")}}. Registered custom properties compute random values and store them.

In this example, as `--defaultSize` is registered, A, B, and C will be squares of equal size, but their colors will be random, as `--random-angle` was not registered:

```css
@property --defaultSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: random(100px, 200px);
}
:root {
  --random-angle: random(0deg, 360deg);
}
A,
B,
C {
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

We render the five badges as circles. We use the `random()` function within an {{cssxref("hsl()")}} color function to define the {{cssxref("angle")}} of the {{cssxref("hue")}}. We set `element-shared` to share the random base value between the default `badge` and the `desaturated` one, so it is a less saturated version of the same {{cssxref("hue")}}. We then override the `unique` badges to have a truly random `hue` by letting the base value sharing parameter default to `auto`.

```css
.badge {
  display: inline-block;
  width: 5em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: hsl(random(element-shared, 0, 360) 50% 50%);
}
.badge.desaturated {
  background: hsl(random(element-shared, 0, 360) 10% 50%);
}
.badge.unique {
  background: hsl(random(0, 360) 50% 50%);
}

@supports not (order: random(1, 2)) {
  :root::after {
    content: "Your browser doesn't support the random() function.";
  }
}
```

#### Result

{{EmbedLiveSample('Generate random colors for circular badge', '100%', '300px')}}

### Random value sharing between properties

In this example, we create a starry backdrop to demonstrate using a `<dashed-ident>` to share a seed value between properties of an element.

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

Every particle has the same styles. We use the `random()` function for the {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}}, and {{cssxref("left")}} values to randomly size and position each particle. We use a `<dashed-ident>` as the base value for the `height` and `width`, meaning the size of the particles are independent of each other, within a specified range, but each particle's `height` will be the same as it's `width`. We allow the base value to resolve to `auto` for the `top` and `left` properties, so the base value for each property and element is independent of each other.

```css
body {
  background: black;
}

.particle {
  border-radius: 50%;
  background: white;
  position: fixed;
  width: random(--particle-size, 0.25em, 1em);
  height: random(--particle-size, 0.25em, 1em);
  top: random(0%, 100%);
  left: random(0%, 100%);
  animation: move 1s alternate-reverse infinite;
}
```

```css hidden
@supports not (order: random(1, 2)) {
  body::before {
    color: white;
    content: "Your browser doesn't support the random() function.";
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
- {{domxref("Math.random()")}}
- [Rolling the Dice with CSS random()](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) via webkit.org (2025)
- [CSS Almanac: random()](https://css-tricks.com/almanac/functions/r/random/) via CSS-Tricks.com
