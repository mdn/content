---
title: image-orientation
slug: Web/CSS/image-orientation
tags:
  - CSS
  - CSS Images
  - CSS Property
  - EXIF
  - Experimental
  - Image Correction
  - Image Orientation
  - Deprecated
  - Orientation
  - Reference
  - image-orientation
  - recipe:css-property
browser-compat: css.properties.image-orientation
---
The **`image-orientation`** [CSS](/en-US/docs/Web/CSS) property specifies a layout-independent correction to the orientation of an image.

> **Note:** Values other than `from-image` and `none` are described as deprecated in the specification.

```css
/* keyword values */
image-orientation: none;
image-orientation: from-image; /* Use EXIF data from the image */

/* Global values */
image-orientation: inherit;
image-orientation: initial;
image-resolution: revert;
image-orientation: unset;

/* Optional values, deprecated in CSS */
image-orientation: 90deg; /* Rotate 90deg */
image-orientation: 90deg flip; /* Rotate 90deg, and flip it horizontally */
image-orientation: flip; /* No rotation, only applies a horizontal flip */
```

## Syntax

### Values

- `none`
  - : Does not apply any additional image rotation; the image is oriented as encoded or as other CSS property values dictate.
- `from-image`
  - : Default initial value. The {{interwiki("wikipedia", "EXIF")}} information contained in the image is used to rotate the image appropriately.
- {{cssxref("&lt;angle&gt;")}}{{deprecated_inline}}
  - : The {{cssxref("&lt;angle&gt;")}} of rotation to apply to the image. It is rounded to the nearest `90deg` (`0.25turn`). Positive values cause the image to be rotated to the right (clockwise), negative values to the left (anti-clockwise).
- `flip`{{deprecated_inline}}
  - : The image is flipped horizontally (i.e., reflected) after the rotation given by the {{cssxref("&lt;angle&gt;")}} value is applied. If no {{cssxref("&lt;angle&gt;")}} is given, `0deg` is used.

## Description

This property is intended _only_ to be used for the purpose of correcting the orientation of images which were shot with the camera rotated. It should _not_ be used for arbitrary rotations. For any purpose other than correcting an image's orientation due to how it was shot or scanned, use a {{cssxref("transform")}} property with the `rotate` keyword to specify rotation. This includes any user-directed changes to the orientation of the image, or changes required for printing in portrait versus landscape orientation.

If used in conjunction with other CSS properties, such as a {{cssxref("&lt;transform-function&gt;")}}, any `image-orientation` rotation is applied before any other transformations.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Orienting image from image data

#### CSS

```css
#image {
  image-orientation: from-image; /* Can be changed in the live sample */
}
```

```html hidden
<img id="image" src="mdn.svg"
    alt="Orientation taken from the image">
<select id="imageOrientation">
  <option value="from-image">from-image</option>
  <option value="none">none</option>
</select>
```

```js hidden
var imageOrientation = document.getElementById("imageOrientation");
imageOrientation.addEventListener("change", function (evt) {
  document.getElementById("image").style.imageOrientation = evt.target.value;
});
```

#### Result

{{EmbedLiveSample("Orienting_image_from_image_data", "100%", 240)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other image-related CSS properties: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
- {{cssxref("transform")}} and {{cssxref("rotate")}}

{{CSSRef}}
