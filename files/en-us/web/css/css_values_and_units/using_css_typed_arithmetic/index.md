---
title: Using CSS typed arithmetic
short-title: Using typed arithmetic
slug: Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic
page-type: guide
sidebar: cssref
---

**CSS typed arithmetic** refers to permitted calculations performed with typed CSS values via functions such as {{cssxref("calc()")}}, and specifically, to the behavior defined in the [CSS values and units](/en-US/docs/Web/CSS/CSS_values_and_units) module. CSS typed arithmetic enables dividing a value with one unit by a value with a different unit of the same data type, resulting in unitless quotients.

These quotients can then be used as a {{cssxref("number")}} in the values of unitless properties, or converted into any numeric data type (such as a {{cssxref("length")}}, {{cssxref("percentage")}}, or {{cssxref("angle")}}) by multiplying them by a numeric typed value.

This typed arithmetic behavior enables relationships to be created between different values on a page. This article explores typed arithmetic and presents several examples that make use of it.

> [!NOTE]
> Originally, the [CSS values and units](/en-US/docs/Web/CSS/CSS_Values_and_Units) module limited the arguments multiplication and division operations could take to make dividing by zero detectable at parse time and avoid issues such as squared units. Typed arithmetic relaxes some of those restrictions in [supporting browsers](/en-US/docs/Web/CSS/calc#browser_compatibility).

## CSS typed arithmetic rules

When performing calculations on values in CSS, there are some rules around compatibility of values with different data types.

### Addition and subtraction

When adding or subtracting values, all the values must be within the same overall data type. The following examples all produce valid results:

```css example-good
/* <length-percentage> units */
calc(250px - 150px)
calc(100% - 50px)
calc(50vw + 2rem)
calc(25cqw + 3in)

/* <angle> units */
calc(40deg + 2rad)
calc(420deg - 1turn)
```

However, the following are invalid. The results of such mixed-type calculations would be meaningless:

```css example-bad
calc(200px + 100ms)
calc(50% + 90deg)
```

## Multiplication

When multiplying values in CSS, only one of the values can have a unit. All other values must be unitless {{cssxref("number")}} values. This is because you want a product that is a greater or lesser amount of the same unit, and do not want to create squared units, which no CSS properties accept.

```css example-good
calc(200px * 4) /* 800px */
calc(60deg * 3) /* 180deg */
```

If you try to multiply two values with units — even the same units — normal mathematical rules dictate that the units should be multiplied as well. For example:

```css example-bad
calc(200px * 4px)
```

In this case, the function is invalid as <code>800px<sup>2</sup></code> is meaningless in CSS.

## Division

When dividing values in CSS, you can divide a value with a unit by a unitless value:

```css example-good
calc(1000px / 2) /* 500px */
calc(360deg / 4) /* 90deg */
```

However, you can't divide a unitless value by a value with a unit as that doesn't make sense:

```css example-bad
calc(1000 / 2px) /* ?!? */
```

In addition — **and this is where it gets interesting** — It used to be the case that you couldn't divide one value with a unit by another, even different units of the same overall type. However, the specification updates mentioned earlier mean **this is now possible**.

When a value of any numeric data type is divided by a value of the same type, the units cancel each other out, and you are left with a unitless value. Behind the scenes, the two values are computed before being divided by one another.

As a result, the same calculation can have very different results depending on the context it is used in and the units of the divisor.

Take the following example:

```css
calc(100vw / 1px)
```

The `100vw` is equal to `100%` of the width of the viewport. If the viewport is currently `1000px` wide, the calculation will return the unitless value `1000`. However, if the viewport is `500px` wide, the calculation will return the unitless value `500`.

If we replace the `1px` divisor by `1em`, we get very different results:

```css
calc(100vw / 1em)
```

If the viewport is `1000px` wide, and `1em` is equal to the browser default of `16px` at the point of calculation, the previous calculation will return `1000px / 16px` = `62.5`.

## Why is the behavioral update useful?

The above behavioral change doesn't sound very significant at first, but it enables all kinds of useful associations between different values, resulting in an interesting set of responsive UI features.

The key to all of this is being able to represent values in a unitless form via divisions like this one (which is already achievable in a limited manner via the [`tan(atan2())` hack](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j)):

```css
--viewport-width-in-pixels: calc(100vw / 1px);
```

You can then dynamically vary other property values based on this value, regardless of what units they have. For example:

```css
/* Unitless value can be immediately transferred to opacity */
opacity: calc(var(--viewport-width-in-pixels) / 1000 - 0.5);

/* Multiply by 1deg to create an <angle> value */
rotate: calc(var(--viewport-width-in-pixels) * 1deg);

/* Multiply by 1rem to create a <length> value */
font-size: calc(var(--viewport-width-in-pixels) * 1rem / 200);
```

Let's walk through some examples to show how CSS typed arithmetic can be useful.

## Basic example: responsive background opacity

The [responsive background opacity](https://mdn.github.io/dom-examples/css-typed-arithmetic/responsive-background-opacity) example ([see source code](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/responsive-background-opacity)) shows how to vary the opacity of a background image as the viewport width is changed. Having the background image fade out as the screen gets narrower means the image is less likely to affect the readability of the text content as they start to overlap.

### HTML

The HTML contains some basic text content wrapped in a {{htmlelement("div")}} element.

```html
<div class="wrapper">
  <h1>Prose of the century</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</div>
```

### CSS

We start by defining a [CSS custom property](/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) called `--width-percentage` on the {{cssxref(":root")}} element, which contains the result of the calculation `100vw / 2000px`. This value represents the viewport width as a percentage of `2000px` that we will later use as an alpha channel value. When the viewport is `2000px` wide, the calculation will return `1`, which is equivalent to `100%` alpha. Anything less than a `2000px` viewport width will result in a smaller value.

```css
:root {
  --width-percentage: calc((100vw / 2000px));
}
```

We then set a fixed {{cssxref("width")}} and some {{cssxref("padding")}} on the wrapper `<div>`, and center it horizontally using {{cssxref("margin")}}.

```css
.wrapper {
  width: 480px;
  padding: 20px;
  margin: 0 auto;
}
```

Finally, we set multiple backgrounds on the {{htmlelement("body")}} element. We'll go through these in reverse order:

1. The last and therefore bottom-most {{cssxref("background")}} value is a non-repeating background image located near the top-right corner.
2. The top background is a white semi-transparent overlay created using a {{cssxref("linear-gradient()")}} function with both color stops set to the same color. The color's alpha channel value is calculated as `1` minus the `--width-percentage` custom property we set earlier: As the viewport width gets narrower, `--width-percentage` will get smaller, therefore the white gradient will become more opaque, reducing the opacity of the background image.

```css
body {
  background:
    linear-gradient(
      rgb(255 255 255 / calc(1 - var(--width-percentage))),
      rgb(255 255 255 / calc(1 - var(--width-percentage)))
    ),
    url("https://mdn.github.io/shared-assets/images/examples/colorful-heart.png")
      no-repeat top 50px right 50px;
}
```

## Varying values of different types based on a single value

The [different type variations](https://mdn.github.io/dom-examples/css-typed-arithmetic/different-type-variations) example ([see source code](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/different-type-variations)) works in a very similar way to the previous example, except that in this case, we demonstrate the use of a single variable value in the definition of multiple other values with different data types.

Specifically, we set a paragraph's background color _and_ font size based on the viewport width.

### HTML

The markup for this example contains a paragraph of text:

```html
<p>Hello there!</p>
```

### CSS

We start off our CSS in a similar way to the previous demo, creating a unitless value based on the viewport width. This time, we calculate it by dividing `100vw` by `1px` and store the resulting number in a custom property called `--viewport-in-pixels`. The value represents the current viewport width in pixels, without any units.

```css
:root {
  --viewport-in-pixels: calc(100vw / 1px);
}
```

Now on to the styling of the paragraph itself. We first give it some basic styles (a {{cssxref("border")}} and {{cssxref("text-align")}} of `center`), then set two values based on the `--viewport-in-pixels` property created earlier:

1. We set the {{cssxref("font-size")}} of the paragraph to a value equal to `--viewport-in-pixels` divided by `200`, multplied by `1em` to convert it into `em`s.
2. We set the {{cssxref("background-color")}} of the paragraph to an [`lch()`](/en-US/docs/Web/CSS/color_value/lch) color value. The lightness and chroma components are constant values (`75%` and `50%`, respectively), whereas the hue component is set to `--viewport-in-pixels` divided by `10`, plus `100`. We then multiply the result of that by `1deg` to ensure the value is an {{cssxref("angle")}}.
   > [!NOTE]
   > This last step is not strictly necessary, as `lch()` also accepts unitless hue values. However, a degree value may be more intuitive, and we wanted to show another example of how the unitless value can be converted into a different data type.

```css
p {
  border: 5px solid black;
  text-align: center;
  font-size: calc(1em * (var(--viewport-in-pixels) / 200));
  background-color: lch(
    75% 50% calc((100 + (var(--viewport-in-pixels) / 10)) * 1deg)
  );
}
```

## An animated story circle

The [animated story circle](https://mdn.github.io/dom-examples/css-typed-arithmetic/animated-story-circle) example ([see source code](https://github.com/mdn/dom-examples/tree/main/css-typed-arithmetic/animated-story-circle)) demonstrates a more complex effect created by leveraging CSS typed arithmetic rules. In this case, the different paragraphs of a body of text are laid out in a circle emanating from a center point. What's more, the circle of paragraphs closes up into a fan shape when the viewport is made narrower, and opens up again when it is made wider.

### HTML

The HTML is fairly basic — a {{htmlelement("div")}} containing multiple {{htmlelement("p")}} elements. The text of the first paragraph is wrapped in a {{htmlelement("strong")}} element to provide an indicator of where to start reading.

```html
<div class="story-circle">
  <p><strong>Hello there!</strong></p>
  <p>This is</p>
  <p>quite an</p>
  <p>interesting way</p>
  <p>to tell a</p>
  <p>story</p>
  <p>all around in</p>
  <p>a circle.</p>
  <p>What fun!</p>
</div>
```

### CSS

We start the CSS by setting a {{cssxref("height")}} of `100%` on the {{cssxref(":root")}} element.

```css
:root {
  height: 100%;
}
```

Next, we set several properties on the {{htmlelement("body")}} element:

- We start by setting a `height` of `inherit`, meaning the `<body>` will inherit the `:root` element's `100%` height and therefore span the full height of the viewport.
- Next, we horizontally center the `<body>` using {{cssxref("margin")}}, and give it a {{cssxref("max-width")}}. As you'll see later on, this upper bound is important for controlling the maximum rotation of the fan/circle shape.
- We center the child element of the `<body>` (the `<div>` with `class="story-circle"`) horizontally and vertically inside it using [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout).
- We use the {{cssxref("container-type")}} property to declare the `<body>` as an inline [size query container](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries). This is important because we want to vary the shape rotation based on the `<body>` width, and not the viewport width as we did in previous examples. Setting it as a size query container allows us to reference its size in calculations.

```css
body {
  height: inherit;
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  container-type: inline-size;
}
```

We now come to styling the `story-circle` `<div>`. We give it a `width` and `height` of `1px`, meaning it acts as a reference point for the paragraphs to be positioned around in the center of the screen (we don't even need to set positioning on it, as it is fine for the paragraphs to be positioned relative to the `<body>`).

We then create a custom property called `--width-percentage` that contains the result of `100cqw` (100% of the width of the element's parent query container, which is the `<body>` element) divided by `1200px`, minus `0.33333`. This is the key value that wll control the amount the circle rotates by as the viewport width is changed.

```css
.story-circle {
  width: 1px;
  height: 1px;
  --width-percentage: calc((100cqw / 1200px) - 0.33333);
}
```

We are using the container query width rather than the viewport width to control the rotation because we want to set a maximum bound for the container, which is controlled by the `<body>` `max-width`. If the rotation value becomes greater than a full circle, the last paragraph will start to overlap the first one, which spoils the effect.

Since the `max-width` is `1600px`, you might have expected the calculation to be `100cqw / 1600px)`. This would work, but we've instead gone for `(100cqw / 1200px) - 0.33333` (the `0.33333` comes from `1600px/1200px - 1`). This still causes the maximum rotation to occur at a `<body>` width of `1600px`, but the fan now has a smaller minimum rotation, which gives a better effect at narrow viewport widths.

The final style rule selects the paragraphs themselves. Most of this styling is rudimentary. It is worth pointing out that we have set {{cssxref("position")}} to `absolute` to cause all of the paragraphs to sit on top of one another, and we've set a {{cssxref("transform-origin")}} value of `center left` to cause paragraphs to rotate around the center of their left edge, so they will all fan out from a center point over their containing `<div>`.

Now onto the interesting bit — we define a custom property called `--angle` that contains the unitless rotation angle of the paragraph, before setting the {{cssxref("rotate")}} property to the resulting value. We multiply the resulting number by `1deg` to convert it to a degree value. The `--angle` custom property is the product of three values:

1. The paragraph's {{cssxref("sibling-index()")}} - `1`, which causes the first paragraph to have a rotation angle of `0`, as we want it to be horizontal.
2. `360` divided by the paragraph's {{cssxref("sibling-count()")}}, which causes all the paragraphs to be equally spaced around the circle, meaning the design will still work if the number of paragraphs changes.
3. our `--width-percentage` custom property, which causes the rotation of the paragraphs around the circle to vary as the viewport width changes. Remember that this property has a maximum value of `1`, which will be achieved when the `<body>` element hits its `max-width` of `1600px`.

```css
p {
  padding: 10px;
  width: 150px;
  text-align: right;
  background: linear-gradient(to right, red, orange 50%);
  border-radius: 5px;

  position: absolute;
  transform-origin: center left;

  --angle: calc(
    ((sibling-index() - 1) * (360 / sibling-count())) * var(--width-percentage)
  );
  rotate: calc(var(--angle) * 1deg);
}
```

## See also

- {{cssxref("calc()")}}, {{cssxref("abs()")}}
- [CSS values and units](/en-US/docs/Web/CSS/CSS_Values_and_Units) module
- [CSS Typed Arithmetic](https://css-tricks.com/css-typed-arithmetic/) on css-tricks.com (2025)
