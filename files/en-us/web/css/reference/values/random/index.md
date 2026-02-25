---
title: random()
slug: Web/CSS/Reference/Values/random
page-type: css-function
status:
  - experimental
browser-compat: css.types.random
sidebar: cssref
---

The **`random()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) generates a random value within a specified range, optionally limiting the possible values to step size intervals between those limits. The `random()` function can be used when specifying a {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, or {{CSSxRef("&lt;integer&gt;")}} within a property value.

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
random(0, 100, by 10)
random(0rad, 1turn, 30deg)

/* With base value */
random(auto, 0, 360)
random(element-shared, 0s, 5s)
random(--unique-base, 400px, 100px)
random(fixed 0.5,  1em, 40vw)

/* With base and step values */
random(element-shared, 0deg, 360deg, 45deg)
random(--my-base, 1em, 3rem, 2px)
```

### Parameters

- `<random-value-sharing>` {{optional_inline}}
  - : Controls which random functions in the document will share a random base value and which will get distinct values.
    This can be either:
    - `auto`
      - : Each use of `random()` in an element's style gets its own unique random base value.
    - {{cssxref("dashed-ident")}}
      - : A custom key for sharing (e.g., `--my-random-key`) the same random base value across properties of an element.
    - `element-shared`
      - : A random base value is shared across all elements for a property using `random()` with this key term, while other properties on the same element using `random()` get a unique random base value.
    - `fixed <number>`
      - : Specifies a base value between 0 and 1 for the random value to be generated from.

- `<calc-sum>, <calc-sum>`
  - : Two required, comma-separated, `<number>`, `<dimension>`,  or `<percentage>` values, or calculations resolving to one of these types, defining the minimum and maximum values, respectively. Both values must be resolvable the same [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types).

- `<calc-sum>` {{optional_inline}}
  - : The optional third `<calc-sum>`, preceded by a comma, specifies the step interval. If present, and of the same data type as the two comma-separated minimum and maximum `<calc-sum>` values, it defines the return value to be minimum value or at increments of the step value, up to the maximum value. 

### Return value
  
A random value from the minimum to the maximum in the same type provided for the parameters.

## Description
  
The `random(<random-value-sharing>, <calc-sum>, <calc-sum>, <calc-sum>)` function specifies a minimum value and a maximum value and a random result is generated within the range specified. An [optional `<random-value-sharing>`](#random-value-sharing) parameter enables setting the same or differing random base values between differing properties and different elements.

The minimum, maximum and step values specified must be of the same {{cssxref("number")}}, {{cssxref("dimension")}}, or {{cssxref("percentage")}} data type, for the function to be valid. While the units in the two to three `<calc-sum>` parameters don't need to be the same, they do need to be of the same data type, such as {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, or {{cssxref("frequency")}} to be valid.

### Random base value

The random base value works like a [seed for randomness](/en-US/docs/Glossary/RNG). It's a starting number that is used to generate the final random result. When two `random()` functions share the same base value, their results vary together in a predictable pattern. When they have different base values, their results are completely independent of each other.

### Random value sharing

The optional first`<random-value-sharing>` parameter controls how the random base value is shared. Sharing enables reusing the same randomly generated value, a necessity for some design effects. The value can be set to use `auto`, an `element-shared` keyword, a custom {{cssxref("dashed-ident")}} , or `fixed <number>`.

All the `random()` functions with the `element-shared` keyword share the random base value for the other elements but only for the same property. For example, when the following is declared, A, B, and C will be identically sized rectangles with all the same random width and all the same random height:

```css
A, B, C {
  width: random(element-shared, 10px, 200px);
  height: random(element-shared, 10px, 200px);
}
```
 
When you specify a `<dashed-ident>` (e.g. `--custom-name`), each element in an element’s styles with the same name shares the same random base value, and ones with different `<dashed-ident>` values will be assigned distinct random base values. When the following is declared, A, B, and C will all be squares, because within each element, all properties that reference the same ident will share the same base value. Therefore, the width of each will be the same as it's height, but A, B, and C will have distinct sizes.

```css
A, B, C {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}

```
 
Combining a `<dashed-ident>` with `element-shared` (e.g. `random(--custom-name element-shared, 0, 100)`) shares the random base value across elements and properties that use the same `<random-value-sharing>` parameter. Given the following, A, B, and C will all be squares of the same size:

```css
A, B, C {
  width: random(--custom-name element-shared,, 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
}
```

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

### Custom properties

As with all CSS functions, when a `random()` function is included within a custom property value, the value remains a function; behaving like a text replacement mechanism, not storing a single return value.

```css
--random-size: random(1px, 100px);
```

In the above example, the `--random-size` custom property does not "store" the randomly generated result. When `var(--random-size)` is parsed it is effectively replaced with `random(1px, 100px)`, meaning each use creates a new `random()` call with its own base value depending on the context in which its used. 

This is not true in the case of using `random()` when registering a custom property with {{cssxref("@property")}}. Registered custom properties compute random values and store them. In this example, A, B, and C will be squares of equal size: 

```css
@property --defaultSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: random(100px, 200px);
}
A, B, C {
  height: var(--defaultSize);
  width: var(--defaultSize);
}
```

## Accessibility

Because `random()` can generate an unknown value within a range, you don’t have full control over what you get and that can lead to inaccessible results. For example, if you use `random()` to generate color for text, you could end up with a value that has low contrast. So it’s important to be mindful of the context in which `random()` is being used so that your results are still accessible.

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic Usage

In this example, we'll generate random colors for circular badge, to demonstrate the basic usage of the `random()` function.

#### HTML

We include five badges, one using the `desaturated` class, two with the `unique` class.

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturated"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

#### CSS

We render the five badges as circles. We use the `random()` function to define the {{cssxref("angle")}} of the {{cssxref("hue")}} of an {{cssxref("hsl()")}} color function. We set `element-shared` to share the random base value, which shared with the `desaturated` badge so that it uses the same {{cssxref("hue")}} {{cssxref("angle")}} but with reduced saturation. We then override the base value sharing allowing the `unique` badges to default to `auto` for unique hues.

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
  animation: move 1s alternate-reverse infinite;
}

@supports not (order: random(1, 2)) {
  body::before {
    color: white;
    content: "Your browser doesn't support the random() function.";
  }
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
