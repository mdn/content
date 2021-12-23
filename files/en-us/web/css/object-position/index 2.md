---
title: object-position
slug: Web/CSS/object-position
tags:
  - CSS
  - CSS Images
  - CSS Property
  - Layout
  - Position
  - Reference
  - Replaced Elements
  - css layout
  - object-position
  - recipe:css-property
browser-compat: css.properties.object-position
---
{{CSSRef}}

The **`object-position`** [CSS](/en-US/docs/Web/CSS) property specifies the alignment of the selected [replaced element](/en-US/docs/Web/CSS/Replaced_element)'s contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.

You can adjust how the replaced element's object's intrinsic size (that is, its natural size) is adjusted to fit within the element's box using the {{cssxref("object-fit")}} property.

{{EmbedInteractiveExample("pages/css/object-position.html")}}

## Syntax

```css
/* <position> values */
object-position: center top;
object-position: 100px 50px;

/* Global values */
object-position: inherit;
object-position: initial;
object-position: revert;
object-position: unset;
```

### Values

- {{cssxref("&lt;position&gt;")}}
  - : From one to four values that define the 2D position of the element. Relative or absolute offsets can be used.

> **Note:** The position can be set so that the replaced element is drawn outside its box.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Positioning image content

#### HTML

Here we see HTML that includes two {{HTMLElement("img")}} elements, each displaying the MDN logo.

```html
<img id="object-position-1" src="mdn.svg" alt="MDN Logo"/>
<img id="object-position-2" src="mdn.svg" alt="MDN Logo"/>
```

#### CSS

The CSS includes default styling for the `<img>` element itself, as well as separate styles for each of the two images.

```css
img {
  width: 300px;
  height: 250px;
  border: 1px solid black;
  background-color: silver;
  margin-right: 1em;
  object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
```

The first image is positioned with its left edge inset 10 pixels from the left edge of the element's box. The second image is positioned with its right edge flush against the right edge of the element's box and is located 10% of the way down the height of the element's box.

#### Result

{{ EmbedLiveSample('Positioning_image_content', '100%','600px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other image-related CSS properties: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
