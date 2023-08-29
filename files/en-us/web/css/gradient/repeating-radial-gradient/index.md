---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
page-type: css-function
browser-compat: css.types.image.gradient.repeating-radial-gradient
---

{{CSSRef}}

The **`repeating-radial-gradient()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) creates an image consisting of repeating gradients that radiate from an origin. It is similar to {{cssxref("gradient/radial-gradient", "radial-gradient()")}} and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container, similar to {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. The function's result is an object of the {{cssxref("&lt;gradient&gt;")}} data type, which is a special kind of {{cssxref("&lt;image&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-repeating-radial-gradient.html")}}

With each repetition, the positions of the color stops are shifted by a multiple of the dimensions of the basic radial gradient (the distance between the last color stop and the first). Thus, the position of each ending color stop coincides with a starting color stop; if the color values are different, this will result in a sharp visual transition, which can be mitigated by repeating the first color as the last color.

As with any gradient, a repeating radial gradient has [no intrinsic dimensions](/en-US/docs/Web/CSS/image#description); i.e., it has no natural or preferred size, nor a preferred ratio. Its concrete size will match the size of the element it applies to.

Because `<gradient>`s belong to the `<image>` data type, they can only be used where `<image>`s can be used. For this reason, `repeating-radial-gradient()` won't work on {{cssxref("background-color")}} and other properties that use the {{cssxref("&lt;color&gt;")}} data type.

## Syntax

```css
/* A gradient at the center of its container,
   starting red, changing to blue, and finishing green,
   with the colors repeating every 30px */
repeating-radial-gradient(circle at center, red 0, blue, green 30px);

/* An elliptical gradient near the top left of its container,
   starting red, changing to green and back again,
   repeating five times between the center and the bottom right corner,
   and only once between the center and the top left corner */
repeating-radial-gradient(farthest-corner at 20% 20%, red 0, green, red 20%);
```

### Values

- {{cssxref("&lt;position&gt;")}}
  - : The position of the gradient, interpreted in the same way as {{cssxref("background-position")}} or {{cssxref("transform-origin")}}. If unspecified, it defaults to `center`.
- `<shape>`
  - : The gradient's shape. The value can be `circle` (meaning that the gradient's shape is a circle with constant radius) or `ellipse` (meaning that the shape is an axis-aligned ellipse). If unspecified, it defaults to `ellipse`.
- `<extent-keyword>`

  - : A keyword describing how big the ending shape must be. The possible values are:

    | Keyword           | Description                                                                                                                                                                     |
    | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | The gradient's ending shape meets the side of the box closest to its center (for circles) or meets both the vertical and horizontal sides closest to the center (for ellipses). |
    | `closest-corner`  | The gradient's ending shape is sized so that it exactly meets the closest corner of the box from its center.                                                                    |
    | `farthest-side`   | Similar to `closest-side`, except the ending shape is sized to meet the side of the box farthest from its center (or vertical and horizontal sides).                            |
    | `farthest-corner` | The gradient's ending shape is sized so that it exactly meets the farthest corner of the box from its center.                                                                   |

    > **Note:** Early implementations of this function included other keywords (`cover` and `contain`) as synonyms of the standard `farthest-corner` and `closest-side`, respectively. Use the standard keywords only, as some implementations have already dropped those older variants.

- `<color-stop>`
  - : A color-stop's {{cssxref("&lt;color&gt;")}} value, followed by an optional stop position (either a {{cssxref("&lt;percentage&gt;")}} or a {{cssxref("&lt;length&gt;")}} along the gradient's axis). A percentage of `0%`, or a length of `0`, represents the center of the gradient; the value `100%` represents the intersection of the ending shape with the virtual gradient ray. Percentage values in between are linearly positioned on the virtual gradient ray.

### Formal syntax

{{csssyntax}}

## Examples

### Black and white gradient

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 120px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
}
```

{{EmbedLiveSample('Black_and_white_gradient', 120, 120)}}

### Farthest-corner

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 240px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: repeating-radial-gradient(
    ellipse farthest-corner at 20% 20%,
    red,
    black 5%,
    blue 5%,
    green 10%
  );
  background: repeating-radial-gradient(
    ellipse farthest-corner at 20% 20%,
    red 0 5%,
    green 5% 10%
  );
}
```

{{EmbedLiveSample('Farthest-corner', 120, 120)}}

The elliptical gradient will be centered 20% from the top left, and will repeat 10 times between the center and the farthest corner (the bottom right corner). Browsers supporting multi position color stops will display a red and green striped ellipse. Browsers not supporting the syntax yet will see a gradient that goes from red to black and then from blue to green.

> **Note:** Please see [Using CSS gradients](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients) for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS gradients](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Other gradient functions: {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
