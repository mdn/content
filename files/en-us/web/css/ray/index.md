---
title: ray()
slug: Web/CSS/ray
page-type: css-function
browser-compat: css.types.ray
---

{{CSSRef}}

The **`ray()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines a straight line segment or path that starts from the specified position of an element and proceeds in the direction defined by the specified angle. The `ray()` function can be used as a parameter in the [`offset-path`](/en-US/docs/Web/CSS/offset-path) property to define the path an animated element can follow.

{{EmbedInteractiveExample("pages/css/function-ray.html")}}

## Syntax

```css
/* property: ray(expression) */
/* all parameters specified */
offset-path: ray(0deg closest-corner contain);

/* two parameters specified, order does not matter */
offset-path: ray(contain 200deg);

/* only one parameter specified */
offset-path: ray(45deg);
```

### Parameters

- [`<angle>`](/en-US/docs/Web/CSS/angle)
  - : Specifies the direction in which the line segment proceeds. `0deg` is pointing up and positive angles increase in the clockwise direction.
- `<size>`

  - : Specifies the length of the line segment and is an optional parameter. It represents the distance between [`offset-distance`](/en-US/docs/Web/CSS/offset-distance)`: 0%` and `offset-distance: 100%`. This parameter accepts one of the following keywords:

    `closest-side`: Distance between the starting point and the closest side of the [containing block](/en-US/docs/Web/CSS/Containing_block) of the element. This is the default value. If the starting point is on the containing block's boundary, the distance is zero. If the starting point is outside the containing block, the edge of the containing block is considered to extend to infinity.

    `closest-corner`: Distance between the starting point and the closest corner of the containing block of the element. If the starting point is on a corner of the containing block, the distance is zero.

    `farthest-side`: Distance between the starting point and the farthest side of the containing block of the element. If the starting point is outside the containing block, the edge of the containing block is considered to extend to infinity.

    `farthest-corner`: Distance between the starting point and the farthest corner of the containing block of the element.

    `sides`: Distance between the starting point and the point where the line segment intersects the containing block's boundary. If the starting point is on or outside the containing block's boundary, the distance is zero.

> **Note:** In the case of `sides`, the segment length depends on the specified `<angle>`. For all other size values, the segment length is constant regardless of the specified `<angle>`.

- `contain`
  - : Reduces the length of the line segment so that the element stays within the containing block even at `offset-distance: 100%`. Specifically, the segment's length is reduced by half the width or half the height of the element's border box, whichever is greater.

## Formal syntax

{{CSSSyntax}}

<!-- ray() = ray( <angle> && <ray-size>? && contain? )
<ray-size> = closest-side | closest-corner | farthest-side | farthest-corner | sides -->

## Examples

### Modify the value of the SVG path d attribute

#### CSS

```css

```

#### HTML

```html

```

#### Result

<!-- {{EmbedLiveSample('', '100%', 200)}} -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`offset-distance`](/en-US/docs/Web/CSS/offset-distance)
- [`offset-path`](/en-US/docs/Web/CSS/offset-path)
