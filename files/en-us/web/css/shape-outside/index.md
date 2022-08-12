---
title: shape-outside
slug: Web/CSS/shape-outside
tags:
  - Boundaries
  - CSS
  - CSS Property
  - CSS Shapes
  - Float Area
  - Property
  - Reference
  - Shape
  - margin
  - recipe:css-property
  - shape-outside
  - wrapping
browser-compat: css.properties.shape-outside
---
{{CSSRef}}

The **`shape-outside`** [CSS](/en-US/docs/Web/CSS) property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.

{{EmbedInteractiveExample("pages/css/shape-outside.html")}}

## Syntax

```css
/* Keyword values */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* Function values */
shape-outside: circle();
shape-outside: ellipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);
shape-outside: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');

/* <url> value */
shape-outside: url(image.png);

/* <gradient> value */
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);

/* Global values */
shape-outside: inherit;
shape-outside: initial;
shape-outside: revert;
shape-outside: revert-layer;
shape-outside: unset;
```

The `shape-outside` property is specified using the values from the list below, which define the _float area_ for _float elements_. The float area determines the shape around which inline content (float elements) wrap.

### Values

- `none`
  - : The float area is unaffected. Inline content wraps around the element's margin box, like usual.
- `<shape-box>`

  - : The float area is computed according to the shape of a float element's edges (as defined by the [CSS box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)). This can be `margin-box`, `border-box`, `padding-box`, or `content-box`. The shape includes any curvature created by the {{cssxref("border-radius")}} property (behavior which is similar to {{cssxref("background-clip")}}).

    - `margin-box`
      - : Defines the shape enclosed by the outside margin edge. The corner radii of this shape are determined by the corresponding {{cssxref("border-radius")}} and {{cssxref("margin")}} values. If the `border-radius / margin` ratio is `1` or more, then the margin box corner radius is `border-radius + margin`. If the ratio is less than `1`, then the margin box corner radius is `border-radius + (margin * (1 + (ratio-1)^3))`.
    - `border-box`
      - : Defines the shape enclosed by the outside border edge. The shape follows the normal border radius shaping rules for the outside of the border.
    - `padding-box`
      - : Defines the shape enclosed by the outside padding edge. The shape follows the normal border radius shaping rules for the inside of the border.
    - `content-box`
      - : Defines the shape enclosed by the outside content edge. Each corner radius of this box is the larger of `0` or `border-radius - border-width - padding`.

- {{cssxref("&lt;basic-shape&gt;")}}
  - : The float area is computed based on the shape created by of one of {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}},  {{cssxref("basic-shape/polygon","polygon()")}} or, as added in the level 2 specification, `path()`. If a `<shape-box>` is also supplied, it defines the reference box for the `<basic-shape>` function. Otherwise, the reference box defaults to `margin-box`.
- {{cssxref("&lt;image&gt;")}}
  - : The float area is extracted and computed based on the alpha channel of the specified {{cssxref("&lt;image&gt;")}} as defined by {{cssxref("shape-image-threshold")}}.

> **Note:** {{glossary("User agent", "User agents")}} must use the potentially CORS-enabled fetch method defined by the HTML specification for all URLs in a `shape-outside` value. When fetching, user agents must use "Anonymous" mode, set the referrer source to the stylesheet's URL, and set the origin to the URL of the containing document. If this results in network errors such that there is no valid fallback image, the effect is as if the value **`none`** had been specified.

## Interpolation

When animating between one `<basic-shape>` and a second, the rules below are applied. The values in the shape functions interpolate as a simple list. The list values interpolate as {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, or {{cssxref("calc", "calc()")}} where possible. If list values are not one of those types but are identical (such as finding `nonzero` in the same list position in both lists), those values do interpolate.

- Both shapes must use the same reference box.
- If both shapes are the same type, that type is `ellipse()` or `circle()`, and none of the radii use the `closest-side` or `farthest-side` keywords, interpolate between each value in the shape functions.
- If both shapes are of type `inset()`, interpolate between each value in the shape functions.
- If both shapes are of type `polygon()`, both polygons have the same number of vertices, and use the same `<fill-rule>`, interpolate between each value in the shape functions.
- In all other cases no interpolation occurs.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Funneling text

#### HTML

```html
<div class="main">
  <div class="left"></div>
  <div class="right"></div>
  <p>
    Sometimes a web page's text content appears to be
    funneling your attention towards a spot on the page
    to drive you to follow a particular link. Sometimes
    you don't notice.
  </p>
</div>
```

#### CSS

```css
.main {
  width: 530px;
}

.left,
.right {
  width: 40%;
  height: 12ex;
  background-color: lightgray;
}

.left {
  -webkit-shape-outside: polygon(0 0, 100% 100%, 0 100%);
  shape-outside: polygon(0 0, 100% 100%, 0 100%);
  float: left;
  -webkit-clip-path: polygon(0 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 100%, 0 100%);
}

.right {
  -webkit-shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
}

p {
  text-align: center;
}
```

#### Result

{{EmbedLiveSample("Funneling_text", "100%", 130)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Shapes](/en-US/docs/Web/CSS/CSS_Shapes)
- [Overview of CSS Shapes](/en-US/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
- [Shapes from Box Values](/en-US/docs/Web/CSS/CSS_Shapes/From_box_values)
- [Basic Shapes](/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes)
- [Shapes from Images](/en-US/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-image-threshold")}}
