---
title: "<source>: The Media or Image Source element"
slug: Web/HTML/Element/source
page-type: html-element
browser-compat: html.elements.source
---

{{HTMLSidebar}}

The **`<source>`** [HTML](/en-US/docs/Web/HTML) element specifies multiple media resources for the {{HTMLElement("picture")}}, the {{HTMLElement("audio")}} element, or the {{HTMLElement("video")}} element. It is a {{glossary("void element")}}, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for [image file formats](/en-US/docs/Web/Media/Formats/Image_types) and [media file formats](/en-US/docs/Web/Media/Formats).

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>It must have a start tag, but must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        <div>
          A media element—{{HTMLElement("audio")}} or
          {{HTMLElement("video")}}—and it must be placed before any
          <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
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

- `type`

  - : The [MIME media type of the image](/en-US/docs/Web/Media/Formats/Image_types) or [other media type](/en-US/docs/Web/Media/Formats/Containers), optionally with a [`codecs` parameter](/en-US/docs/Web/Media/Formats/codecs_parameter).

- `src`

  - : Required if the `source` element's parent is an {{HTMLElement("audio")}} and {{HTMLElement("video")}} element, but not allowed if the `source` element's parent is a {{HTMLElement("picture")}} element.

    Address of the media resource.

- `srcset`

  - : Required if the `source` element's parent is a {{HTMLElement("picture")}} element, but not allowed if the `source` element's parent is an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element.

    A list of one or more strings, separated by commas, indicating a set of possible images represented by the source for the browser to use. Each string is composed of:

    1. One URL specifying an image.
    2. A width descriptor, which consists of a string containing a positive integer directly followed by `"w"`, such as `300w`. The default value, if missing, is the infinity.
    3. A pixel density descriptor, that is a positive floating number directly followed by `"x"`. The default value, if missing, is `1x`.

    Each string in the list must have at least a width descriptor or a pixel density descriptor to be valid. The two types of descriptors should not be mixed together and only one should be used consistently throughout the list. Among the list, the value of each descriptor must be unique. The browser chooses the most adequate image to display at a given point of time. If the `sizes` attribute is present, then a width descriptor must be specified for each string. If the browser does not support `srcset`, then `src` will be used for the default source.

- `sizes`

  - : Allowed if the `source` element's parent is a {{HTMLElement("picture")}} element, but not allowed if the `source` element's parent is an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element.

    A list of source sizes that describes the final rendered width of the image represented by the source. Each source size consists of a comma-separated list of media condition-length pairs. Before laying the page out, the browser uses this information to determine which image is defined in [`srcset`](#srcset) to use. Please note that `sizes` will have its effect only if width dimension descriptors are provided with `srcset` instead of pixel ratio values (200w instead of 2x for example).

- `media`

  - : Allowed if the `source` element's parent is a {{HTMLElement("picture")}} element, but not allowed if the `source` element's parent is an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element.

    [Media query](/en-US/docs/Web/CSS/CSS_media_queries) of the resource's intended media.

- `height`

  - : Allowed if the `source` element's parent is a {{HTMLElement("picture")}} element, but not allowed if the `source` element's parent is an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element.

    The intrinsic height of the image, in pixels. Must be an integer without a unit.

- `width`

  - : Allowed if the `source` element's parent is a {{HTMLElement("picture")}} element, but not allowed if the `source` element's parent is an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element.

    The intrinsic width of the image in pixels. Must be an integer without a unit.

If the `type` attribute isn't specified, the media's type is retrieved from the server and checked to see if the user agent can handle it; if it can't be rendered, the next `<source>` is checked. If the `type` attribute is specified, it's compared against the types the user agent can present, and if it's not recognized, the server doesn't even get queried; instead, the next `<source>` element is checked at once.

When used in the context of a `<picture>` element, the browser will fall back to using the image specified by the `<picture>` element's {{HTMLElement("img")}} child if it is unable to find a suitable image to use after examining every provided `<source>`.

## Usage notes

The `<source>` element is a **{{glossary("void element")}}**, which means that it not only has no content but also has no closing tag. That is, you _never_ use "`</source>`" in your HTML.

For information about image formats supported by web browsers and guidance on selecting appropriate formats to use, see our [Image file type and format guide](/en-US/docs/Web/Media/Formats/Image_types) on the web. For details on the video and audio media types you can use, see the [Guide to media types formats used on the web](/en-US/docs/Web/Media/Formats).

## Examples

### Video example

This example demonstrates how to offer a video in Ogg format for users whose browsers support Ogg format, and a QuickTime format video for users whose browsers support that. If the `audio` or `video` element is not supported by the browser, a notice is displayed instead. If the browser supports the element but does not support any of the specified formats, an `error` event is raised and the default media controls (if enabled) will indicate an error. Be sure to reference our [guide to media types and formats on the web](/en-US/docs/Web/Media/Formats) for details on what media file formats you can use and how well they're supported by browsers.

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

For more examples, the learning area article [Video and audio content](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) is a great resource.

### Picture example

In this example, two `<source>` elements are included within the {{HTMLElement("picture")}}, providing versions of an image to use when the available space exceeds certain widths. If the available width is less than the smallest of these widths, the user agent will fall back to the image given by the {{HTMLElement("img")}} element.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

With the `<picture>` element, you must always include an `<img>` with a fallback image, with an `alt` attribute to ensure accessibility (unless the image is an irrelevant background decorative image).

### Picture with height & width attributes example

In this example, three `<source>` elements with `height` and `width` attributes are included in a {{HTMLElement("picture")}} element.
A [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) allows the browser to select an image to display with the `height` and `width` attributes based on the [viewport](/en-US/docs/Glossary/Viewport) size.

```html
<picture>
  <source
    srcset="landscape.png"
    media="(min-width: 1000px)"
    width="1000"
    height="400" />
  <source
    srcset="square.png"
    media="(min-width: 800px)"
    width="800"
    height="800" />
  <source
    srcset="portrait.png"
    media="(min-width: 600px)"
    width="600"
    height="800" />
  <img
    src="fallback.png"
    alt="Image used when the browser does not support the sources"
    width="500"
    height="400" />
</picture>
```

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
