---
title: repeating-linear-gradient()
slug: Web/CSS/gradient/repeating-linear-gradient
page-type: css-function
browser-compat: css.types.gradient.repeating-linear-gradient
---

{{CSSRef}}

The **`repeating-linear-gradient()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) creates an image consisting of repeating linear gradients. It is similar to {{cssxref("gradient/linear-gradient", "linear-gradient()")}} and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container. The function's result is an object of the {{cssxref("&lt;gradient&gt;")}} data type, which is a special kind of {{cssxref("&lt;image&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-repeating-linear-gradient.html")}}

The length of the gradient that repeats is the distance between the first and last color stop. If the first color does not have a color-stop-length, the color-stop-length defaults to 0. With each repetition, the positions of the color stops are shifted by a multiple of the length of the basic linear gradient. Thus, the position of each ending color stop coincides with a starting color stop; if the color values are different, this will result in a sharp visual transition. This can be altered with repeating the first color again as the last color.

As with any gradient, a repeating linear gradient has [no intrinsic dimensions](/en-US/docs/Web/CSS/image#description); i.e., it has no natural or preferred size, nor a preferred ratio. Its concrete size will match the size of the element it applies to.

Because `<gradient>`s belong to the `<image>` data type, they can only be used where `<image>`s can be used. For this reason, `repeating-linear-gradient()` won't work on {{Cssxref("background-color")}} and other properties that use the {{cssxref("&lt;color&gt;")}} data type.

## Syntax

```css
/* A repeating gradient tilted 45 degrees,
   starting blue and finishing red, repeating 3 times */
repeating-linear-gradient(45deg, blue, red 33.3%)

/* A repeating gradient going from the bottom right to the top left,
   starting blue and finishing red, repeating every 20px */
repeating-linear-gradient(to left top, blue, red 20px)

/* A gradient going from the bottom to top,
   starting blue, turning green after 40%,
   and finishing red. This gradient doesn't repeat because
   the last color stop defaults to 100% */
repeating-linear-gradient(0deg, blue, green 40%, red)

/* A gradient repeating five times, going from the left to right,
   starting red, turning green, and back to red */
repeating-linear-gradient(to right, red 0%, green 10%, red 20%)

/* Interpolation in rectangular color space */
repeating-linear-gradient(in oklab, blue, red 50px)

/* Interpolation in polar color space */
repeating-linear-gradient(in hsl, blue, red 50px)

/* Interpolation in polar color space
  with longer hue interpolation method */
repeating-linear-gradient(in hsl longer hue, blue, red 50px)
```

### Values

- `<side-or-corner>`

  - : The position of the gradient line's starting point. If specified, it consists of the word `to` and up to two keywords: one indicates the horizontal side (`left` or `right`), and the other the vertical side (`top` or `bottom`). The order of the side keywords does not matter. If unspecified, it defaults to `to bottom`.

    The values `to top`, `to bottom`, `to left`, and `to right` are equivalent to the angles `0deg`, `180deg`, `270deg`, and `90deg` respectively. The other values are translated into an angle.

- {{cssxref("&lt;angle&gt;")}}
  - : The gradient line's angle of direction. A value of `0deg` is equivalent to `to top`; increasing values rotate clockwise from there.
- `<linear-color-stop>`
  - : A color-stop's {{CSSxRef("&lt;color&gt;")}} value, followed by one or two optional stop positions, (each being either a {{CSSxRef("&lt;percentage&gt;")}} or a {{CSSxRef("&lt;length&gt;")}} along the gradient's axis). A percentage of `0%`, or a length of `0`, represents the start of the gradient; the value `100%` is 100% of the image size, meaning the gradient will not repeat.
- `<color-hint>`
  - : The color-hint is an interpolation hint defining how the gradient progresses between adjacent color stops. The length defines at which point between two color stops the gradient color should reach the midpoint of the color transition. If omitted, the midpoint of the color transition is the midpoint between two color stops.

> [!NOTE]
> Rendering of color stops in repeating linear gradients follows the same rules as [color stops in linear gradients](/en-US/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Formal syntax

{{CSSSyntax}}

## Examples

### Zebra stripes

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 20px,
    black 20px,
    black 40px
  );
  /* with multiple color stop lengths */
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 20px,
    black 20px 40px
  );
}
```

{{EmbedLiveSample('Zebra_stripes', 120, 120)}}

### Ten repeating horizontal bars

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(26 198 204),
    rgb(26 198 204) 7%,
    rgb(100 100 100) 10%
  );
}
```

{{EmbedLiveSample('Ten_repeating_horizontal_bars', 120, 120)}}

Because the last color stop is 10% and the gradient is vertical, each gradient in the repeated gradient is 10% of the height, fitting 10 horizontal bars.

### Interpolation in rectangular color space

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: repeating-linear-gradient(90deg in oklab, blue, red 100px);
}
```

{{EmbedLiveSample("Interpolation in rectangular color space", 120, 120)}}

### Interpolating with hue

```html hidden
<div class="shorter">shorter hue</div>
<div class="longer">longer hue</div>
```

```css hidden
div {
  height: 50vh;
  color: #330;
  font-weight: bolder;
  padding-left: 1.5rem;
}
```

In this example for interpolation, [hsl](/en-US/docs/Web/CSS/color_value/hsl) color system is being used and [hue](/en-US/docs/Web/CSS/hue) is being interpolated.

```css
.shorter {
  background: repeating-linear-gradient(
    90deg in hsl shorter hue,
    red,
    blue 300px
  );
}

.longer {
  background: repeating-linear-gradient(
    90deg in hsl longer hue,
    red,
    blue 300px
  );
}
```

The box on the top uses [shorter interpolation](/en-US/docs/Web/CSS/hue-interpolation-method#shorter), meaning the color goes from red to blue using the shorter arc on the [color wheel](/en-US/docs/Glossary/Color_wheel). The box on the bottom uses [longer interpolation](/en-US/docs/Web/CSS/hue-interpolation-method#longer), meaning the color goes from red to blue using the longer arc, traversing through greens, yellows, and oranges.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

> [!NOTE]
> Please see [Using CSS gradients](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients) for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS gradients](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Other gradient functions: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/en-US/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/en-US/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
