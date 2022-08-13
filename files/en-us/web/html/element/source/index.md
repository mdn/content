---
title: '<source>: The Media or Image Source element'
slug: Web/HTML/Element/source
tags:
  - Element
  - HTML
  - HTML embedded content
  - Media
  - Reference
  - Web
  - Web Performance
browser-compat: html.elements.source
---

{{HTMLRef}}

The **`<source>`** [HTML](/en-US/docs/Web/HTML) element specifies multiple media resources for the {{HTMLElement("picture")}}, the {{HTMLElement("audio")}} element, or the {{HTMLElement("video")}} element. It is an empty element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for [image file formats](/en-US/docs/Web/Media/Formats/Image_types) and [media file formats](/en-US/docs/Web/Media/Formats).

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None, it is an {{Glossary("empty element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>It must have a start tag, but must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Permitted parents</dfn></th>
      <td>
        <div>
          A media element—{{HTMLElement("audio")}} or
          {{HTMLelement("video")}}—and it must be placed before any
          <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
            >flow content</a
          >
          or {{HTMLElement("track")}} element.
        </div>
        <div>
          A {{HTMLElement("picture")}} element, and it must be placed
          before the {{HTMLElement("img")}} element.
        </div>
      </td>
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
      <td>{{domxref("HTMLSourceElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("type")}}
  - : The [MIME media type of the resource](/en-US/docs/Web/Media/Formats/Image_types), optionally with a [`codecs` parameter](/en-US/docs/Web/Media/Formats/codecs_parameter).

- {{htmlattrdef("src")}}
  - : Required if the `source` element's parent is an {{HTMLElement("audio")}} and {{HTMLElement("video")}} element, but not allowed if the `source` element's parent is a {{HTMLElement("picture")}} element.

    Address of the media resource.

- {{htmlattrdef("srcset")}}
  - : Required if the `source` element's parent is a {{HTMLElement("picture")}} element, but not allowed if the `source` element's parent is an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element.

    A list of one or more strings, separated by commas, indicating a set of possible images represented by the source for the browser to use. Each string is composed of:

    1. One URL specifying an image.
    2. A width descriptor, which consists of a string containing a positive integer directly followed by `"w"`, such as `300w`. The default value, if missing, is the infinity.
    3. A pixel density descriptor, that is a positive floating number directly followed by `"x"`. The default value, if missing, is `1x`.

    Each string in the list must have at least a width descriptor or a pixel density descriptor to be valid. Among the list, there must be only one string containing the same tuple of width descriptor and pixel density descriptor. The browser chooses the most adequate image to display at a given point of time. If width descriptors are used, the `sizes` attribute must also be present, or the `srcset` value will be ignored.

- {{htmlattrdef("sizes")}}
  - : Allowed if the `source` element's parent is a {{HTMLElement("picture")}} element, but not allowed if the `source` element's parent is an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element.

    A list of source sizes that describes the final rendered width of the image represented by the source. Each source size consists of a comma-separated list of media condition-length pairs. This information is used by the browser to determine, before laying the page out, which image defined in {{htmlattrxref("srcset", "source")}} to use. Please note that `sizes` will have its effect only if width dimension descriptors are provided with `srcset` instead of pixel ratio values (200w instead of 2x for example).

- {{htmlattrdef("media")}}
  - : Allowed if the `source` element's parent is a {{HTMLElement("picture")}} element, but not allowed if the `source` element's parent is an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element.

    [Media query](/en-US/docs/Web/CSS/Media_Queries) of the resource's intended media.

- {{htmlattrdef("height")}}
  - : Allowed if the `source` element's parent is a {{HTMLElement("picture")}} element, but not allowed if the `source` element's parent is an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element.

    The intrinsic height of the image, in pixels. Must be an integer without a unit.

- {{htmlattrdef("width")}}
  - : Allowed if the `source` element's parent is a {{HTMLElement("picture")}} element, but not allowed if the `source` element's parent is an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element.

    The intrinsic width of the image in pixels. Must be an integer without a unit.

If the `type` attribute isn't specified, the media's type is retrieved from the server and checked to see if the user agent can handle it; if it can't be rendered, the next `<source>` is checked. If the `type` attribute is specified, it's compared against the types the user agent can present, and if it's not recognized, the server doesn't even get queried; instead, the next `<source>` element is checked at once.

When used in the context of a `<picture>` element, the browser will fall back to using the image specified by the `<picture>` element's {{HTMLElement("img")}} child if it is unable to find a suitable image to use after examining every provided `<source>`.

## Usage notes

The `<source>` element is an **empty element (or void element)**, which means that it not only has no content but also has no closing tag. That is, you _never_ use "`</source>`" in your HTML.

For information about image formats supported by web browsers and guidance on selecting appropriate formats to use, see our [Image file type and format guide](/en-US/docs/Web/Media/Formats/Image_types) on the web. For details on the video and audio media types you can use, see the [Guide to media types formats used on the web](/en-US/docs/Web/Media/Formats).

## Examples

### Video example

This example demonstrates how to offer a video in Ogg format for users whose browsers support Ogg format, and a QuickTime format video for users whose browsers support that. If the `audio` or `video` element is not supported by the browser, a notice is displayed instead. If the browser supports the element but does not support any of the specified formats, an `error` event is raised and the default media controls (if enabled) will indicate an error. Be sure to reference our [guide to media types and formats on the web](/en-US/docs/Web/Media/Formats) for details on what media file formats you can use and how well they're supported by browsers.

```html
<video controls>
  <source src="foo.webm" type="video/webm">
  <source src="foo.ogg" type="video/ogg">
  <source src="foo.mov" type="video/quicktime">
  I'm sorry; your browser doesn't support HTML video.
</video>
```

For more examples, the learning area article [Video and audio content](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) is a great resource.

### Picture example

In this example, two `<source>` elements are included within the {{HTMLElement("picture")}}, providing versions of an image to use when the available space exceeds certain widths. If the available width is less than the smaller of these widths, the user agent will fall back to the image given by the {{HTMLElement("img")}} element.

```html
<picture>
   <source srcset="mdn-logo-wide.png" media="(min-width: 800px)">
   <source srcset="mdn-logo-medium.png" media="(min-width: 600px)">
   <img src="mdn-logo-narrow.png" alt="MDN Web Docs">
</picture>
```

With the `<picture>` element, you must always include an `<img>` with a fallback image, with an `alt` attribute to ensure accessibility (unless the image is an irrelevant background decorative image).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Guide to media types and formats on the web](/en-US/docs/Web/Media/Formats)
- [Image file type and format guide](/en-US/docs/Web/Media/Formats/Image_types)
- {{HTMLElement("picture")}} element
- {{HTMLElement("audio")}} element
- {{HTMLElement("video")}} element
- [Web Performance](/en-US/docs/Learn/Performance)
