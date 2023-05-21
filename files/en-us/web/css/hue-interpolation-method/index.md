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

The **`<hue-interpolation-method>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents the algorithm used for interpolation between {{CSSXref("&lt;hue&gt;")}} values. It is used as a component of the {{CSSXref("&lt;color-interpolation-method&gt;")}} data type.

When mixing and [combining](https://drafts.csswg.org/css-values/#combining-values) colors, the hue interpolation algorithm defaults to [`shorter`](#values).

## Syntax

A `<hue-interpolation-method>` value consists of the name of a hue interpolation algorithm followed by a literal token `hue`:

```
shorter hue
longer hue
increasing hue
decreasing hue
```

### Values

Any pair of hue angles `θ1` and `θ2` correspond to two radii on the {{Glossary("color wheel")}}, which cut the circumference into two possible arcs for interpolation. Both arcs start at the fisrt radius and end at the second radius, but one goes clockwise and the other goes counterclockwise.

> **Note:** The following descriptions and illustrations are based on a color wheel in which hue angles increase clockwise. Beware that there are also counterclockwise color wheels.

There are four algorithms to determine which arc is used:

- `shorter`

  - : Use the shorter arc. When the two radii coincide, the arc degenerates to a single point. When both arcs have the same lengths:

    - If `θ1 < θ2`, use the clockwise arc;
    - If `θ1 > θ2`, use the counterclockwise arc.

    Examples:

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

    Examples:

    | `θ1 = 45deg`, `θ2 = -225deg`                                      | `θ1 = 135deg`, `θ2 = 45deg`                                      |
    | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
    | ![longer with θ1 = 45deg and θ2 = -225deg](longer_decreasing.png) | ![longer with θ1 = 135deg and θ2 = 45deg](longer_increasing.png) |

- `increasing`

  - : Use the clockwise arc. When the two radii coincide:

    - If `θ1 < θ2`, the arc becomes the full circumference with a clockwise orientation.
    - If `θ1 ≥ θ2`, the arc degenerates to a single point.

    Examples:

    | `θ1 = 45deg`, `θ2 = 135deg`                                           | `θ1 = 495deg`, `θ2 = 45deg`                                          |
    | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
    | ![increasing with θ1 = 45deg and θ2 = 135deg](shorter_increasing.png) | ![increasing with θ1 = 495deg and θ2 = 45deg](longer_increasing.png) |

- `decreasing`

  - : Use the counterclockwise arc. When the two radii coincide:

    - If `θ1 ≤ θ2`, the arc degenerates to a single point.
    - If `θ1 > θ2`, the arc becomes the full circumference with a counterclockwise orientation.

    Examples:

    | `θ1 = 45deg`, `θ2 = 495deg`                                          | `θ1 = 135deg`, `θ2 = 45deg`                                           |
    | -------------------------------------------------------------------- | --------------------------------------------------------------------- |
    | ![decreasing with θ1 = 45deg and θ2 = 495deg](longer_decreasing.png) | ![decreasing with θ1 = 135deg and θ2 = 45deg](shorter_decreasing.png) |

### Formal syntax

{{CSSSyntax}}

## Examples

### Comparing hue interpolation algorithms

The following example shows the effect of using different hue interpolation algorithms for {{CSSXref("color_value/color-mix", "color-mix()")}}.

#### HTML

```html
<div class="shorter"></div>
<div class="longer"></div>
<div class="increasing"></div>
<div class="decreasing"></div>
```

#### CSS

```css hidden
div {
  border: 1px solid;
  display: inline-block;
  height: 100px;
  margin: 10px;
  width: 100px;
}
```

```css
div {
  background-color: color-mix(in hsl var(--algo) hue, hsl(10 100% 50%), hsl(350 100% 50%));
}

/* 20 degrees */
.shorter {
  --algo: shorter;
}

/* 340 degrees */
.longer {
  --algo: longer;
}

/* 340 degrees */
.increasing {
  --algo: increasing;
}

/* 20 degrees */
.decreasing {
  --algo: decreasing;
}
```

#### Result

{{EmbedLiveSample("comparing_hue_interpolation_methods", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{CSSXref("&lt;hue&gt;")}}
