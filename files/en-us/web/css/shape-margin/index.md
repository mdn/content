---
title: shape-margin
slug: Web/CSS/shape-margin
page-type: css-property
browser-compat: css.properties.shape-margin
---

{{CSSRef}}

The **`shape-margin`** [CSS](/en-US/docs/Web/CSS) property sets a margin for a CSS shape created using {{cssxref("shape-outside")}}.

{{EmbedInteractiveExample("pages/css/shape-margin.html")}}

The margin lets you adjust the distance between the edges of the shape (the **float element**) and the surrounding content.

## Syntax

```css
/* <length> values */
shape-margin: 10px;
shape-margin: 20mm;

/* <percentage> value */
shape-margin: 60%;

/* Global values */
shape-margin: inherit;
shape-margin: initial;
shape-margin: revert;
shape-margin: revert-layer;
shape-margin: unset;
```

### Values

- `<length-percentage>`
  - : Sets the margin of the shape to a {{cssxref("&lt;length&gt;")}} value or to a {{cssxref("&lt;percentage&gt;")}} of the width of the element's containing block.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Adding a margin to a polygon

#### HTML

```html
<section>
  <div class="shape"></div>
  We are not quite sure of any one thing in biology; our knowledge of geology is
  relatively very slight, and the economic laws of society are uncertain to
  every one except some individual who attempts to set them forth; but before
  the world was fashioned the square on the hypotenuse was equal to the sum of
  the squares on the other two sides of a right triangle, and it will be so
  after this world is dead; and the inhabitant of Mars, if one exists, probably
  knows its truth as we know it.
</section>
```

#### CSS

```css
section {
  max-width: 400px;
}

.shape {
  float: left;
  width: 150px;
  height: 150px;
  background-color: maroon;
  clip-path: polygon(0 0, 150px 150px, 0 150px);
  shape-outside: polygon(0 0, 150px 150px, 0 150px);
  shape-margin: 20px;
}
```

#### Result

{{EmbedLiveSample("Adding_a_margin_to_a_polygon", 500, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Shapes](/en-US/docs/Web/CSS/CSS_Shapes)
- [Overview of CSS Shapes](/en-US/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
- {{cssxref("shape-outside")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("&lt;basic-shape&gt;")}}
