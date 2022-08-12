---
title: '<picture>: The Picture element'
slug: Web/HTML/Element/picture
tags:
  - Element
  - Graphics
  - HTML
  - HTML embedded content
  - Images
  - Reference
  - Web
  - WebP
  - picture
browser-compat: html.elements.picture
---
{{HTMLRef}}

The **`<picture>`** [HTML](/en-US/docs/Web/HTML) element contains zero or more {{HTMLElement("source")}} elements and one {{HTMLElement("img")}} element to offer alternative versions of an image for different display/device scenarios.

The browser will consider each child `<source>` element and choose the best match among them. If no matches are found—or the browser doesn't support the `<picture>` element—the URL of the `<img>` element's {{htmlattrxref("src", "img")}} attribute is selected. The selected image is then presented in the space occupied by the `<img>` element.

{{EmbedInteractiveExample("pages/tabbed/picture.html", "tabbed-standard")}}

To decide which URL to load, the {{Glossary("user agent")}} examines each `<source>`'s {{htmlattrxref("srcset", "source")}}, {{htmlattrxref("media", "source")}}, and {{htmlattrxref("type", "source")}} attributes to select a compatible image that best matches the current layout and capabilities of the display device.

The `<img>` element serves two purposes:

1. It describes the size and other attributes of the image and its presentation.
2. It provides a fallback in case none of the offered `<source>` elements are able to provide a usable image.

Common use cases for `<picture>`:

- **Art direction.** Cropping or modifying images for different `media` conditions (for example, loading a simpler version of an image which has too many details, on smaller displays).
- **Offering alternative image formats**, for cases where certain formats are not supported.

  > **Note:** For example, newer formats like [AVIF](/en-US/docs/Web/Media/Formats/Image_types#avif_image) or [WEBP](/en-US/docs/Web/Media/Formats/Image_types#webp_image) have many advantages, but might not be supported by the browser. A list of supported image formats can be found in: [Image file type and format guide](/en-US/docs/Web/Media/Formats/Image_types).

- **Saving bandwidth and speeding page load times** by loading the most appropriate image for the viewer's display.

If providing higher-density versions of an image for high-DPI (Retina) display, use {{htmlattrxref("srcset", "img")}} on the `<img>` element instead. This lets browsers opt for lower-density versions in data-saving modes, and you don't have to write explicit `media` conditions.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >, phrasing content, embedded content
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Zero or more {{HTMLElement("source")}} elements, followed by one
        {{HTMLElement("img")}} element, optionally intermixed with
        script-supporting elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>Any element that allows embedded content.</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLPictureElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes only [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

You can use the {{cssxref("object-position")}} property to adjust the positioning of the image within the element's frame, and the {{cssxref("object-fit")}} property to control how the image is resized to fit within the frame.

> **Note:** Use these properties on the child `<img>` element, **not** the `<picture>` element.

## Examples

These examples demonstrate how different attributes of the {{HTMLElement("source")}} element change the selection of the image inside `<picture>`.

### The media attribute

The `media` attribute specifies a media condition (similar to a media query) that the user agent will evaluate for each {{HTMLElement("source")}} element.

If the {{HTMLElement("source")}}'s media condition evaluates to `false`, the browser skips it and evaluates the next element inside `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
  <img src="mdn-logo-narrow.png" alt="MDN">
</picture>
```

### The srcset attribute

The [{{htmlattrdef("srcset")}}](/en-US/docs/Web/HTML/Element/source#attr-srcset) attribute is used to offer list of possible images _based on size_.

It is composed of a comma-separated list of image descriptors. Each image descriptor is composed of a URL of the image, and _either_:

- a _width descriptor_, followed by a `w` (such as `300w`);
  _OR_
- a _pixel density descriptor_, followed by an `x` (such as `2x`) to serve a high-res image for high-DPI screens.

```html
<picture>
  <source srcset="logo-768.png, logo-768-1.5x.png 1.5x">
  <source srcset="logo-480.png, logo-480-2x.png 2x">
  <img src="logo-320.png" alt="logo">
</picture>
```

### The type attribute

The `type` attribute specifies a [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) for the resource URL(s) in the {{HTMLElement("source")}} element's `srcset` attribute. If the user agent does not support the given type, the {{HTMLElement("source")}} element is skipped.

```html
<picture>
  <source srcset="photo.avif" type="image/avif">
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg" alt="photo">
</picture>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("img")}} element
- {{HTMLElement("source")}} element
- Positioning and sizing the picture within its frame: {{cssxref("object-position")}} and {{cssxref("object-fit")}}
- [Image file type and format guide](/en-US/docs/Web/Media/Formats/Image_types)
