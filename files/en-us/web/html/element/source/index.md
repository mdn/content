---
title: "<source>: The Media or Image Source element"
slug: Web/HTML/Element/source
page-type: html-element
browser-compat: html.elements.source
---

{{HTMLSidebar}}

The **`<source>`** [HTML](/en-US/docs/Web/HTML) element specifies one or more media resources for the {{HTMLElement("picture")}}, {{HTMLElement("audio")}}, and {{HTMLElement("video")}} elements. It is a {{glossary("void element")}}, which means that it has no content and does not require a closing tag. This element is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for [image file formats](/en-US/docs/Web/Media/Guides/Formats/Image_types) and [media file formats](/en-US/docs/Web/Media/Guides/Formats).

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

## Attributes

This element supports all [global attributes](/en-US/docs/Web/HTML/Global_attributes). In addition, the following attributes can be used with it:

- `type`

  - : Specifies the [MIME media type of the image](/en-US/docs/Web/Media/Guides/Formats/Image_types) or [other media type](/en-US/docs/Web/Media/Guides/Formats/Containers), optionally including a [`codecs` parameter](/en-US/docs/Web/Media/Guides/Formats/codecs_parameter).

- `src`

  - : Specifies the URL of the media resource. Required if the parent of `<source>` is {{HTMLElement("audio")}} or {{HTMLElement("video")}}. Not allowed if the parent is {{HTMLElement("picture")}}.

- `srcset`

  - : Specifies a comma-separated list of one or more image URLs and their descriptors. Required if the parent of `<source>` is {{HTMLElement("picture")}}. Not allowed if the parent is {{HTMLElement("audio")}} or {{HTMLElement("video")}}.

    The list consists of strings separated by commas, indicating a set of possible images for the browser to use. Each string is composed of:

    - A URL specifying an image location.
    - An optional width descriptor—a positive integer directly followed by `"w"`, such as `300w`.
    - An optional pixel density descriptor—a positive floating number directly followed by `"x"`, such as `2x`.

    Each string in the list must have either a width descriptor or a pixel density descriptor to be valid. These two descriptors should not be used together; only one should be used consistently throughout the list. The value of each descriptor in the list must be unique. The browser chooses the most adequate image to display at a given point of time based on these descriptors. If the descriptors are not specified, the default value used is `1x`. If the `sizes` attribute is also present, then each string must include a width descriptor. If the browser does not support `srcset`, then `src` will be used for the default image source.

- `sizes`

  - : Specifies a list of source sizes that describe the final rendered width of the image. Allowed if the parent of `<source>` is {{HTMLElement("picture")}}. Not allowed if the parent is {{HTMLElement("audio")}} or {{HTMLElement("video")}}.

    The list consists of source sizes separated by commas. Each source size is media condition-length pair. Before laying the page out, the browser uses this information to determine which image defined in [`srcset`](#srcset) to display. Note that `sizes` will take effect only if width descriptors are provided with `srcset`, not pixel density descriptors (i.e., `200w` should be used instead of `2x`).

- `media`

  - : Specifies the [media query](/en-US/docs/Web/CSS/CSS_media_queries) for the resource's intended media.

- `height`

  - : Specifies the intrinsic height of the image in pixels. Allowed if the parent of `<source>` is a {{HTMLElement("picture")}}. Not allowed if the parent is {{HTMLElement("audio")}} or {{HTMLElement("video")}}.

    The height value must be an integer without any units.

- `width`

  - : Specifies the intrinsic width of the image in pixels. Allowed if the parent of `<source>` is a {{HTMLElement("picture")}}. Not allowed if the parent is {{HTMLElement("audio")}} or {{HTMLElement("video")}}.

    The width value must be an integer without any units.

## Usage notes

The `<source>` element is a **{{glossary("void element")}}**, which means that it not only has no content but also has no closing tag. That is, you _never_ use `</source>` in your HTML.

The browser goes through a list of `<source>` elements to find a format it supports. It uses the first one it can display. For each `<source>` element:

- If the `type` attribute isn't specified, the browser retrieves the media's type from the server and determines if it can be displayed. If the media can't be rendered, the browser checks the next `<source>` in the list.
- If the `type` attribute is specified, the browser immediately compares it with the media types it can display. If the type is not supported, the browser skips querying the server and directly checks the next `<source>` element.

If none of the `<source>` elements provide a usable source:

- In the case of a `<picture>` element, the browser will fall back to using the image specified in the `<picture>` element's {{HTMLElement("img")}} child.
- In the case of an `<audio>` or `<video>` element, the browser will fall back to displaying the content included between the element's opening and closing tags.

For information about image formats supported by web browsers and guidance on selecting appropriate formats to use, see our [Image file type and format guide](/en-US/docs/Web/Media/Guides/Formats/Image_types). For details on the video and audio media types you can use, see the [Media type and format guide](/en-US/docs/Web/Media/Guides/Formats).

## Examples

### Using the `type` attribute with `<video>`

This example demonstrates how to offer a video in different formats: WebM for browsers that support it, Ogg for those that support Ogg, and QuickTime for browsers that support QuickTime. If the `<audio>` or `<video>` element is not supported by the browser, a notice is displayed instead. If the browser supports the element but does not support any of the specified formats, an `error` event is raised and the default media controls (if enabled) will indicate an error. For more details on which media file formats to use and their browser support, refer to our [Media type and format guide](/en-US/docs/Web/Media/Guides/Formats).

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### Using the `media` attribute with `<video>`

This example demonstrates how to offer an alternate source file for viewports above a certain width. When a user's browsing environment meets the specified `media` condition, the associated `<source>` element is chosen. The contents of its `src` attribute are then requested and rendered. If the `media` condition does not match, the browser will move on to the next `<source>` in the list. The second `<source>` option in the code below has no `media` condition, so it will be selected for all other browsing contexts.

```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

For more examples, the [HTML video and audio](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) article in the Learn area is a great resource.

### Using the `media` attribute with `<picture>`

In this example, two `<source>` elements are included within {{HTMLElement("picture")}}, providing versions of an image to use when the available space exceeds certain widths. If the available width is less than the smallest of these widths, the browser will fall back to the image specified in the {{HTMLElement("img")}} element.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

With the `<picture>` element, you must always include an `<img>` with a fallback image. Also, make sure to add an `alt` attribute for accessibility, unless the image is purely decorative and irrelevant to the content.

### Using `height` and `width` attributes with `<picture>`

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

## Technical summary

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
      <td>Must have a start tag and must not have an end tag.</td>
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("audio")}} element
- {{HTMLElement("picture")}} element
- {{HTMLElement("video")}} element
- [Image file type and format guide](/en-US/docs/Web/Media/Guides/Formats/Image_types)
- [Media type and format guide](/en-US/docs/Web/Media/Guides/Formats)
- [Web performance](/en-US/docs/Learn_web_development/Extensions/Performance)
