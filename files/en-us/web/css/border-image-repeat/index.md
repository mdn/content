---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
page-type: css-property
browser-compat: css.properties.border-image-repeat
---

{{CSSRef}}

The **`border-image-repeat`** [CSS](/en-US/docs/Web/CSS) property defines how the [edge regions](/en-US/docs/Web/CSS/border-image-slice#edge-regions) and [middle region](/en-US/docs/Web/CSS/border-image-slice#middle-region) of a source image are adjusted to fit the dimensions of an element's [border image](/en-US/docs/Web/CSS/border-image). The middle region can be displayed by using the keyword "fill" in the border-image-slice property.

{{EmbedInteractiveExample("pages/css/border-image-repeat.html")}}

## Syntax

```css
/* Keyword value */
border-image-repeat: stretch;
border-image-repeat: repeat;
border-image-repeat: round;
border-image-repeat: space;

/* top and bottom | left and right */
border-image-repeat: round stretch;

/* Global values */
border-image-repeat: inherit;
border-image-repeat: initial;
border-image-repeat: revert;
border-image-repeat: revert-layer;
border-image-repeat: unset;
```

The `border-image-repeat` property may be specified using one or two values chosen from the list of values below.

- When **one** value is specified, it applies the same behavior on **all four sides**.
- When **two** values are specified, the first applies to the **top, middle, and bottom**, the second to the **left and right**.

### Values

- `stretch`
  - : The source image's edge regions are stretched to fill the gap between each border.
- `repeat`
  - : The source image's edge regions are tiled (repeated) to fill the gap between each border. Tiles may be clipped to achieve the proper fit.
- `round`
  - : The source image's edge regions are tiled (repeated) to fill the gap between each border. Tiles may be stretched to achieve the proper fit.
- `space`
  - : The source image's edge regions are tiled (repeated) to fill the gap between each border. Extra space will be distributed in between tiles to achieve the proper fit.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Repeating border images

#### CSS

```css
#bordered {
  width: 12rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 40px solid;
  border-image: url("border.png") 27;
  border-image-repeat: stretch; /* Can be changed in the live sample */
}
```

```html hidden
<div id="bordered">You can try out various border repetition rules on me!</div>

<select id="repetition">
  <option value="stretch">stretch</option>
  <option value="repeat">repeat</option>
  <option value="round">round</option>
  <option value="space">space</option>
  <option value="stretch repeat">stretch repeat</option>
  <option value="space round">space round</option>
</select>
```

```js hidden
const repetition = document.getElementById("repetition");
repetition.addEventListener("change", (evt) => {
  document.getElementById("bordered").style.borderImageRepeat =
    evt.target.value;
});
```

#### Results

{{EmbedLiveSample("Repeating_border_images", "auto", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders)
- [Learn CSS: Backgrounds and borders](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
