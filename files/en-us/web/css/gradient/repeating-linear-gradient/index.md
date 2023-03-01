---
title: repeating-linear-gradient()
slug: Web/CSS/gradient/repeating-linear-gradient
page-type: css-function
browser-compat: css.types.image.gradient.repeating-linear-gradient
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
repeating-linear-gradient(45deg, blue, red 33.3%);

/* A repeating gradient going from the bottom right to the top left,
   starting blue and finishing red, repeating every 20px */
repeating-linear-gradient(to left top, blue, red 20px);

/* A gradient going from the bottom to top,
   starting blue, turning green after 40%,
   and finishing red. This gradient doesn't repeat because
   the last color stop defaults to 100% */
repeating-linear-gradient(0deg, blue, green 40%, red);

/* A gradient repeating five times, going from the left to right,
   starting red, turning green, and back to red */
repeating-linear-gradient(to right, red 0%, green 10%, red 20%);
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
  - : Th color-hint is an interpolation hint defining how the gradient progresses between adjacent color stops. The length defines at which point between two color stops the gradient color should reach the midpoint of the color transition. If omitted, the midpoint of the color transition is the midpoint between two color stops.

> **Note:** Rendering of [color stops in CSS gradients](#gradient_with_multiple_color_stops) follows the same rules as color stops in [SVG gradients](/en-US/docs/Web/SVG/Tutorial/Gradients).

### Formal syntax

{{csssyntax}}

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
    rgb(26, 198, 204),
    rgb(26, 198, 204) 7%,
    rgb(100, 100, 100) 10%
  );
}
```

{{EmbedLiveSample('Ten_repeating_horizontal_bars', 120, 120)}}

Because the last color stop is 10% and the gradient is vertical, each gradient in the repeated gradient is 10% of the height, fitting 10 horizontal bars.

> **Note:** Please see [Using CSS gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients) for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- Other gradient functions: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
