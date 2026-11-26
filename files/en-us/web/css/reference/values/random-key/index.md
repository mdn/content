---
title: "`<random-key>` CSS type"
short-title: <random-key>
slug: Web/CSS/Reference/Values/random-key
page-type: css-type
spec-urls: https://drafts.csswg.org/css-color/#typedef-color-random-key
sidebar: cssref
---

The **`<random-key>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types) represents a seed value that controls which functions in the document will share a random base value, or _seed_, and which will get distinct values.

## Associated functions

This data type is accepted as a parameter in the following CSS functions:

- {{cssxref("random()")}}
- {{cssxref("random-key()")}}

## Syntax

```css
/* Keyword values */
auto
element-scoped
property-scoped
property-index-scoped

/* fixed values */
--my-random-key
fixed 0.123

/* Scoped with <dashed-ident> */
--random-key element-scoped
--some-random-key property-scoped
--another-random-key property-index-scoped
```

### Values

This data type is specified as one of the following values:

- `auto`
  - : Specifies an independent random value should be generated. This is the default value, and the equivalent to specifying `element-scoped property-index-scoped`.
- `element-scoped`
  - : Specifies an element-specific identifier be added to the random cache name.
- `property-scoped`
  - : Specifies a property-specific identifies be added to the random cache name.
- `property-index-scoped`
  - : Specifies the property name and index of the containing function be added to the random cache name.
- {{cssxref("dashed-ident")}}
  - : Specifies a custom name for the random cache key shared across all elements and properties using the same identifier. When combined with a `*-scoped` keyword, the sharing behavior is determined by the keyword.
- `fixed <number>`
  - : Specifies the seed's value, as a number between `0` and `1`, inclusive of 0, exclusive of 1.

## Description

An `<random-key>` data type is used to provide a seed value that controls which random functions in a document will share a seed values and which will get distinct values.

Random base values work like a [seeds for randomness](/en-US/docs/Glossary/RNG). They are starting numbers that are used to generate random results. When multiple functions share the same seed, their results vary together in a predictable pattern. When they have different base values, their results are completely independent of each other.

The `<random-key>` data type is an optional parameter in random functions that controls how random base values are shared. It can be `auto`, a scope keyword (`element-scoped`, `property-scoped`, or `property-index-scoped`), a custom {{cssxref("dashed-ident")}}, `fixed <number>`, or a `<dashed-ident>` paired with a scope keyword.

### The `auto` keyword

The `auto` value is the default and is what is applied if the `<random-key>` is excluded. This random function generates independent random values. The random cache name, and thus the result, varies across every `random()` instance in a multi-component value, across different properties, and across different elements. This is equivalent to specifying `element-scoped property-index-scoped`.

When the `<random-key>` is set to `auto`, or omitted and defaults to `auto`, the user agent auto-generates a seed name, or _generated value sharing identifier_, following consistent rules based on property name and order. This can cause random base value sharing. Multiple random functions can end up with the same seed name and, therefore, the same random base value.

```css live-sample___auto
.a,
.b,
.c {
  width: random(auto, 10px, 200px);
  height: random(auto, 10px, 200px);
  border-color: random-item(auto, red, pink, lightpink, maroon, magenta);
  color: random-item(auto, red, pink, lightpink, maroon, magenta);
}
```

In this example, the `auto` keyword makes `.a`, `.b`, and `.c` independent rectangles, since every element gets the independent values for each property, and the properties are independent of each other as well.

{{EmbedLiveSample("Auto", "100%", 250)}}

### The `element-scoped` keyword

The `element-scoped` keyword gives each element its own base value, per property.This parameter adds an element-specific identifier to the random cache name, so if applied over multiple properties (e.g., `width` and `height`) both properties use the same value, but each element (e.g., `<div>`) gets a different random values.

```html hidden live-sample___auto live-sample___element live-sample___property live-sample___both live-sample___custom
<div class="container">
  <div class="a">A</div>
  <div class="b">B</div>
  <div class="c">C</div>
</div>
```

```css live-sample___element
.a,
.b,
.c {
  width: random(element-scoped, 10px, 200px);
  height: random(element-scoped, 10px, 200px);
  border-color: random-item(
    element-scoped,
    red,
    pink,
    lightpink,
    maroon,
    magenta
  );
  color: random-item(element-scoped, red, pink, lightpink, maroon, magenta);
}
```

In this example, the `element-scoped` keyword makes `.a`, `.b`, and `.c` independent squares, since every element gets the same `width` and `height` values, but the values are independent of for each element. The border will also be the same color as the text in each case, but the colors of one box are independent from the others.

{{EmbedLiveSample("Element", "100%", 250)}}

### The `property-scoped` keyword

The `property-scoped` keyword adds the property name to the random cache name, so if applied over multiple properties (e.g., `width` and `height`) both properties gets a different random value, but each element (e.g., `<div>`) uses the same random values.

```css live-sample___property
.a,
.b,
.c {
  border: solid 10px;
  width: random(property-scoped, 10px, 200px);
  height: random(property-scoped, 10px, 200px);
  border-color: random-item(
    property-scoped,
    red,
    pink,
    lightpink,
    maroon,
    magenta
  );
  color: random-item(property-scoped, red, pink, lightpink, maroon, magenta);
}
```

In this example, the `property-scoped` keyword makes `.a`, `.b`, and `.c` identical rectangles, since every element gets the same `width` , `height`, `border-color`, and `color` values, but the dimensions and color values are independent of each other.

{{EmbedLiveSample("Property", "100%", 250)}}

### The `property-index-scoped` keyword

The `property-index-scoped` keywords adds the property name and the index of the `random()` function among all random functions used in the same property value to the random cache name, so multiple instances in the same declaration each get different random values. The `property-index-scoped` keyword works like `property-scoped`, but provides different seeds for each position within a shorthand property.

The `property-index-scoped` keyword is useful in shorthands, where each position needs its own shared value:

```css live-sample___both
.a,
.b,
.c {
  border-width: random(property-index-scoped, 5px, 40px)
    random(property-index-scoped, 5px, 40px)
    random(property-index-scoped, 5px, 40px)
    random(property-index-scoped, 5px, 40px);
  border-style: random-item(
      property-index-scoped,
      dotted,
      dashed,
      solid,
      double,
      groove,
      ridge,
      inset,
      outset
    )
    random-item(
      property-index-scoped,
      dotted,
      dashed,
      solid,
      double,
      groove,
      ridge,
      inset,
      outset
    )
    random-item(
      property-index-scoped,
      dotted,
      dashed,
      solid,
      double,
      groove,
      ridge,
      inset,
      outset
    )
    random-item(
      property-index-scoped,
      dotted,
      dashed,
      solid,
      double,
      groove,
      ridge,
      inset,
      outset
    );
  border-color: random-item(
      property-index-scoped,
      red,
      pink,
      lightpink,
      maroon,
      magenta
    )
    random-item(property-index-scoped, red, pink, lightpink, maroon, magenta)
    random-item(property-index-scoped, red, pink, lightpink, maroon, magenta)
    random-item(property-index-scoped, red, pink, lightpink, maroon, magenta);
}
```

```css hidden live-sample___auto live-sample___element live-sample___property live-sample___both live-sample___custom
.container {
  display: flex;
  gap: 1em;
}
div div {
  background-color: white;
  color: black;
  font-size: 3rem;
  padding: 1em;
  border: 5px solid green;
}

@layer no-support {
  @supports not (border-color: random-item(auto, red, blue)) {
    body::before {
      content: "Your browser doesn't support the random-item() function";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
      margin-bottom: 1rem;
    }
  }
}
```

All three elements get the same top border, the same right border, and so on, but the four borders differ from each other.

{{EmbedLiveSample("both", "100%", 200)}}

### Custom identifiers

The seed can also be a {{cssxref("dashed-ident")}}. This is used to specify a custom name for the random cache key (e.g., `--my-random-key`). When used alone, the same random base value is shared across all elements and properties that use the same identifier. When combined with a `*-scoped` keyword, the sharing behavior is determined by the keyword.

Used alone, the `<dashed-ident>` shares its base value globally: any usage in a random function call anywhere in the document with the same identifier will get the same result. For example, if you use identical `random()` functions, using the same `--custom-name` with the same minimum and maximum values, on different properties, all the functions will return the same values. Similarly, if the same `<dashed-ident>` is used in a `random-item()` function with the same list of options, all the functions will return the same item.

```css live-sample___custom
.a,
.b,
.c {
  border-style: solid;
  width: random(--custom-name, 50px, 200px);
  height: random(--custom-name, 50px, 200px);
  border-width: calc(random(--custom-name, 50px, 200px) / 10);
  padding: calc(random(--custom-name, 50px, 200px) / 10);
  border-color: random-item(
    --custom-name,
    red,
    pink,
    lightpink,
    maroon,
    magenta
  );
  color: random-item(--custom-name, red, pink, lightpink, maroon, magenta);
}
```

This makes `.a`, `.b`, and `.c` identical squares, since every `width` and `height` resolves to the same value, with the padding and border being 10% of that value, which the {{cssxref("color")}} will be the same as the {{cssxref("border")}}.

{{EmbedLiveSample("Custom", "100%", 250)}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting text color opacity

The example demonstrates applying a color with `60%` opacity using the `<random-key>` as a parameter within an {{cssxref("rgb()")}} function, which accepts an optional fourth parameter specifying an alpha value:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

## Specifications

{{Specifications}}

## See also

- {{cssxref("random()")}}
- {{cssxref("random-key()")}}
- [CSS units and values](/en-US/docs/Web/CSS/Guides/Values_and_units) module
- {{jsxref("Math.random()")}}
