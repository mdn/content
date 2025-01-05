---
title: shape-outside
slug: Web/CSS/shape-outside
page-type: css-property
browser-compat: css.properties.shape-outside
---

{{CSSRef}}

The **`shape-outside`** [CSS](/en-US/docs/Web/CSS) property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than rectangular boxes.

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

/* Shape box with basic shape */
shape-outside: circle() border-box;
shape-outside: margin-box ellipse();

/* <url> value */
shape-outside: url(image.png);

/* <gradient> value */
shape-outside: linear-gradient(45deg, #fff 150px, red 150px);

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

  - : The float area is computed according to the shape of a float element's edges (as defined by the [CSS box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)). This can be `margin-box`, `border-box`, `padding-box`, or `content-box`. The shape includes any curvature created by the {{cssxref("border-radius")}} property (behavior which is similar to {{cssxref("background-clip")}}).

    - `margin-box`
      - : Defines the shape enclosed by the outside margin edge. The corner radii of this shape are determined by the corresponding {{cssxref("border-radius")}} and {{cssxref("margin")}} values. If the `border-radius / margin` ratio is `1` or more, then the margin box corner radius is `border-radius + margin`. If the ratio is less than `1`, then the margin box corner radius is `border-radius + (margin * (1 + (ratio - 1) ^ 3))`.
    - `border-box`
      - : Defines the shape enclosed by the outside border edge. The shape follows the normal border radius shaping rules for the outside of the border.
    - `padding-box`
      - : Defines the shape enclosed by the outside padding edge. The shape follows the normal border radius shaping rules for the inside of the border.
    - `content-box`
      - : Defines the shape enclosed by the outside content edge. Each corner radius of this box is the larger of `0` or `border-radius - border-width - padding`.

- {{cssxref("&lt;basic-shape&gt;")}}
  - : The float area is computed based on the shape created by an {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}}, or {{cssxref("basic-shape/polygon","polygon()")}} function; other `<basic-shape>` functions are invalid. If a `<shape-box>` is also supplied, it defines the reference box for the `<basic-shape>` function. Otherwise, the reference box defaults to `margin-box`.
- {{cssxref("&lt;image&gt;")}}
  - : The float area is extracted and computed based on the alpha channel of the specified {{cssxref("&lt;image&gt;")}} as defined by {{cssxref("shape-image-threshold")}}.

> [!NOTE]
> If the image is invalid, the effect is as if the keyword `none` had been specified. Additionally, the image must be served with {{Glossary("CORS")}} headers allowing its use.

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
    Sometimes a web page's text content appears to be funneling your attention
    towards a spot on the page to drive you to follow a particular link.
    Sometimes you don't notice.
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
  background-color: lightgray;
  height: 12ex;
  width: 40%;
}

.left {
  clip-path: polygon(0 0, 100% 100%, 0 100%);
  float: left;
  shape-outside: polygon(0 0, 100% 100%, 0 100%);
}

.right {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
}

p {
  text-align: center;
}
```

#### Result

{{EmbedLiveSample("funneling_text", "100%", 130)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes)
- [Overview of shapes](/en-US/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-image-threshold")}}
