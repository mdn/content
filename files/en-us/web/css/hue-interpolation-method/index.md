---
title: <hue-interpolation-method>
slug: Web/CSS/hue-interpolation-method
page-type: css-type
browser-compat:
  - css.types.color.color-mix
  - css.types.image.gradient.conic-gradient.hue_interpolation_method
  - css.types.image.gradient.linear-gradient.hue_interpolation_method
  - css.types.image.gradient.radial-gradient.hue_interpolation_method
  - css.types.image.gradient.repeating-conic-gradient.hue_interpolation_method
  - css.types.image.gradient.repeating-linear-gradient.hue_interpolation_method
  - css.types.image.gradient.repeating-radial-gradient.hue_interpolation_method
spec-urls: https://drafts.csswg.org/css-color/#hue-interpolation
---

{{CSSRef}}

The **`<hue-interpolation-method>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents the algorithm used for interpolation between {{CSSXref("&lt;hue&gt;")}} values.
The interpolation method specifies how to find a midpoint between two hue values based on a color wheel.
It is used as a component of the {{CSSXref("&lt;color-interpolation-method&gt;")}} data type.

When interpolating `<hue>` values, the hue interpolation algorithm defaults to [`shorter`](#values).

## Syntax

A `<hue-interpolation-method>` value consists of the name of a hue interpolation algorithm followed by a literal token `hue`:

```plain
shorter hue
longer hue
increasing hue
decreasing hue
```

### Values

Any pair of hue angles `θ1` and `θ2` correspond to two radii on the {{Glossary("color wheel")}}, which cut the circumference into two possible arcs for interpolation. Both arcs start at the first radius and end at the second radius, but one goes clockwise and the other goes counterclockwise.

> **Note:** The following descriptions and illustrations are based on color wheels in which hue angles increase in a clockwise direction. Be aware that there are color wheels where an increase in angles will be a counterclockwise operation.

There are four algorithms to determine which arc is used:

- `shorter`

  - : Use the shorter arc. When the two radii coincide, the arc degenerates to a single point. When both arcs have the same lengths:

    - If `θ1 < θ2`, use the clockwise arc;
    - If `θ1 > θ2`, use the counterclockwise arc.

    | `θ1 = 45deg`, `θ2 = 135deg`                                        | `θ1 = -225deg`, `θ2 = 45deg`                                        |
    | ------------------------------------------------------------------ | ------------------------------------------------------------------- |
    | ![shorter with θ1 = 45deg and θ2 = 135deg](shorter_increasing.png) | ![shorter with θ1 = -225deg and θ2 = 45deg](shorter_decreasing.png) |

- `longer`

  - : Use the longer arc. When the two radii coincide:

    - If `θ1 ≤ θ2`, the arc becomes the full circumference with a clockwise orientation.
    - If `θ1 > θ2`, the arc becomes the full circumference with a counterclockwise orientation.

    When both arcs have the same lengths:

    - If `θ1 < θ2`, use the clockwise arc;
    - If `θ1 > θ2`, use the counterclockwise arc.

    | `θ1 = 45deg`, `θ2 = -225deg`                                      | `θ1 = 135deg`, `θ2 = 45deg`                                      |
    | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
    | ![longer with θ1 = 45deg and θ2 = -225deg](longer_decreasing.png) | ![longer with θ1 = 135deg and θ2 = 45deg](longer_increasing.png) |

- `increasing`

  - : Use the clockwise arc. When the two radii coincide:

    - If `θ1 < θ2`, the arc becomes the full circumference with a clockwise orientation.
    - If `θ1 ≥ θ2`, the arc degenerates to a single point.

    | `θ1 = 45deg`, `θ2 = 135deg`                                           | `θ1 = 495deg`, `θ2 = 45deg`                                          |
    | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
    | ![increasing with θ1 = 45deg and θ2 = 135deg](shorter_increasing.png) | ![increasing with θ1 = 495deg and θ2 = 45deg](longer_increasing.png) |

- `decreasing`

  - : Use the counterclockwise arc. When the two radii coincide:

    - If `θ1 ≤ θ2`, the arc degenerates to a single point.
    - If `θ1 > θ2`, the arc becomes the full circumference with a counterclockwise orientation.

    | `θ1 = 45deg`, `θ2 = 495deg`                                          | `θ1 = 135deg`, `θ2 = 45deg`                                           |
    | -------------------------------------------------------------------- | --------------------------------------------------------------------- |
    | ![decreasing with θ1 = 45deg and θ2 = 495deg](longer_decreasing.png) | ![decreasing with θ1 = 135deg and θ2 = 45deg](shorter_decreasing.png) |

## Formal syntax

{{CSSSyntax}}

## Examples

### Comparing hue interpolation algorithms

The following example shows the effect of using different hue interpolation algorithms in a {{CSSXref("linear-gradient()")}}.

#### HTML

```html
<div class="hsl">
  <p>HSL</p>
</div>
<div class="hsl-increasing">
  <p>HSL increasing</p>
</div>
<div class="hsl-decreasing">
  <p>HSL decreasing</p>
</div>
<div class="hsl-longer">
  <p>HSL longer</p>
</div>
<div class="hsl-named">
  <p>HSL named</p>
</div>
<div class="hsl-named-longer">
  <p>HSL named (longer)</p>
</div>
```

#### CSS

```css hidden
div {
  border: 1px solid black;
  height: 50px;
  margin: 10px;
  width: 90%;
}
p {
  color: white;
  margin: 6px;
}
```

```css
.hsl {
  background: linear-gradient(
    to right in hsl,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-increasing {
  background: linear-gradient(
    to right in hsl increasing hue,
    hsl(190deg 100% 50%),
    hsl(180deg 100% 50%)
  );
}
.hsl-decreasing {
  background: linear-gradient(
    to right in hsl decreasing hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-longer {
  background: linear-gradient(
    to right in hsl longer hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-named {
  background: linear-gradient(to right in hsl, orange, yellow);
}
.hsl-named-longer {
  background: linear-gradient(to right in hsl longer hue, orange, yellow);
}
```

#### Result

{{EmbedLiveSample("comparing_hue_interpolation_methods", "100%", 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{CSSXref("&lt;hue&gt;")}}
