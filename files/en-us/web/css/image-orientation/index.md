---
title: image-orientation
slug: Web/CSS/image-orientation
page-type: css-property
browser-compat: css.properties.image-orientation
---

{{CSSRef}}

The **`image-orientation`** [CSS](/en-US/docs/Web/CSS) property specifies a layout-independent correction to the orientation of an image.

{{EmbedInteractiveExample("pages/css/image-orientation.html")}}

## Syntax

```css
/* keyword values */
image-orientation: none;
image-orientation: from-image; /* Use EXIF data from the image */

/* Global values */
image-orientation: inherit;
image-orientation: initial;
image-orientation: revert;
image-orientation: revert-layer;
image-orientation: unset;
```

### Values

- `none`
  - : Does not apply any additional image rotation; the image is oriented as encoded or as other CSS property values dictate.
- `from-image`
  - : Default initial value. The [EXIF](https://en.wikipedia.org/wiki/EXIF) information contained in the image is used to rotate the image appropriately.

> **Warning:** `image-orientation: none;` **does not** override the orientation of non-secure-origin images as encoded by their [EXIF](https://en.wikipedia.org/wiki/EXIF) information, due to security concerns. Find out more from [the CSS working group draft issue](https://github.com/w3c/csswg-drafts/issues/5165).

## Description

This property is intended _only_ to be used for the purpose of correcting the orientation of images which were shot with the camera rotated. It should _not_ be used for arbitrary rotations. For any purpose other than correcting an image's orientation due to how it was shot or scanned, use a {{cssxref("transform")}} property with the `rotate` keyword to specify rotation. This includes any user-directed changes to the orientation of the image, or changes required for printing in portrait versus landscape orientation.

If used in conjunction with other CSS properties, such as a {{cssxref("&lt;transform-function&gt;")}}, any `image-orientation` rotation is applied before any other transformations.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Orienting image from image data

The following image has been rotated through 180 degrees, and the `image-orientation` property is used to correct its orientation based on the EXIF data in the image. By changing the `image-orientation` to `none` you can see the effect of the property.

#### CSS

```css
#image {
  image-orientation: from-image; /* Can be changed in the live sample */
}
```

```css hidden
img {
  margin: 0.5rem 0;
}

label {
  font-family: monospace;
}
```

```html hidden
<img id="image" src="oriole.jpg" alt="Orientation taken from the image" />

<div>
  <input
    type="radio"
    id="from-image"
    name="orientation"
    value="from-image"
    checked />
  <label for="from-image">from-image</label>
</div>

<div>
  <input type="radio" id="none" name="orientation" value="none" />
  <label for="none">none</label>
</div>
```

```js hidden
document.addEventListener("change", (evt) => {
  document.getElementById("image").style.imageOrientation = evt.target.value;
});
```

#### Result

{{EmbedLiveSample("Orienting_image_from_image_data", "100%", 900)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other image-related CSS properties: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
- {{cssxref("transform")}} and {{cssxref("rotate")}}
