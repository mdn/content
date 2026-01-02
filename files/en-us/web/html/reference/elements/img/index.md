---
title: "<img>: The Image Embed element"
slug: Web/HTML/Reference/Elements/img
page-type: html-element
browser-compat: html.elements.img
sidebar: htmlsidebar
---

The **`<img>`** [HTML](/en-US/docs/Web/HTML) element embeds an image into the document.

{{InteractiveExample("HTML Demo: &lt;img&gt;", "tabbed-standard")}}

```html interactive-example
<img
  class="fit-picture"
  src="/shared-assets/images/examples/grapefruit-slice.jpg"
  alt="Grapefruit slice atop a pile of other slices" />
```

```css interactive-example
.fit-picture {
  width: 250px;
}
```

The above example shows usage of the `<img>` element:

- The `src` attribute holds the path to the image you want to embed. It is not mandatory if the [srcset](/en-US/docs/Web/API/HTMLImageElement/srcset) attribute is available. However, at least one of the `src` or `srcset` attributes must be provided.
- The `alt` attribute holds a textual replacement for the image, which is mandatory and **incredibly useful** for accessibility — screen readers read the attribute value out to their users so they know what the image means. Alt text is also displayed on the page if the image can't be loaded for some reason: for example, network errors, content blocking, or link rot.

There are many other attributes to achieve various purposes:

- [Referrer](/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{glossary("CORS")}} control for security and privacy: see [`crossorigin`](#crossorigin) and [`referrerpolicy`](#referrerpolicy).
- Use both [`width`](#width) and [`height`](#height) to set the intrinsic size of the image, allowing it to take up space before it loads, to mitigate content layout shifts.
- Responsive image hints with [`sizes`](#sizes) and [`srcset`](#srcset) (see also the {{htmlelement("picture")}} element and our [Responsive images](/en-US/docs/Web/HTML/Guides/Responsive_images) tutorial).

## Supported image formats

The HTML standard doesn't list what image formats to support, so {{glossary("user agent","user agents")}} may support different formats.

> [!NOTE]
> The [Image file type and format guide](/en-US/docs/Web/Media/Guides/Formats/Image_types) provides comprehensive information about image formats and their web browser support.
> This section is just a summary!

The image file formats that are most commonly used on the web are:

- [APNG (Animated Portable Network Graphics)](/en-US/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Good choice for lossless animation sequences (GIF is less performant)
- [AVIF (AV1 Image File Format)](/en-US/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Good choice for both images and animated images due to high performance.
- [GIF (Graphics Interchange Format)](/en-US/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Good choice for _simple_ images and animations.
- [JPEG (Joint Photographic Expert Group image)](/en-US/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Good choice for lossy compression of still images (currently the most popular).
- [PNG (Portable Network Graphics)](/en-US/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Good choice for lossless compression of still images (slightly better quality than JPEG).
- [SVG (Scalable Vector Graphics)](/en-US/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vector image format. Use for images that must be drawn accurately at different sizes.
- [WebP (Web Picture format)](/en-US/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Excellent choice for both images and animated images

Formats like [WebP](/en-US/docs/Web/Media/Guides/Formats/Image_types#webp_image) and [AVIF](/en-US/docs/Web/Media/Guides/Formats/Image_types#avif_image) are recommended as they perform much better than PNG, JPEG, GIF for both still and animated images.

SVG remains the recommended format for images that must be drawn accurately at different sizes.

## Image loading errors

If an error occurs while loading or rendering an image, and an `onerror` event handler has been set for the {{domxref("HTMLElement/error_event", "error")}} event, that event handler will get called. This can happen in several situations, including:

- The `src` or `srcset` attributes are empty (`""`) or `null`.
- The `src` {{glossary("URL")}} is the same as the URL of the page the user is currently on.
- The image is corrupted in some way that prevents it from being loaded.
- The image's metadata is corrupted in such a way that it's impossible to retrieve its dimensions, and no dimensions were specified in the `<img>` element's attributes.
- The image is in a format not supported by the {{Glossary("user agent")}}.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Defines text that can replace the image in the page.

    > [!NOTE]
    > Browsers do not always display images. There are a number of situations in which a browser might not display images, such as:
    >
    > - Non-visual browsers (such as those used by people with visual impairments)
    > - The user chooses not to display images (saving bandwidth, privacy reasons)
    > - The image is invalid or an [unsupported type](#supported_image_formats)
    >
    > In these cases, the browser may replace the image with the text in the element's `alt` attribute. For these reasons and others, provide a useful value for `alt` whenever possible.

    Setting this attribute to an empty string (`alt=""`) indicates that this image is _not_ a key part of the content (it's decoration or a tracking pixel), and that non-visual browsers may omit it from {{glossary("Engine/Rendering", "rendering")}}. Visual browsers will also hide the broken image icon if the `alt` attribute is empty and the image failed to display.

    This attribute is also used when copying and pasting the image to text, or saving a linked image to a bookmark.

- `attributionsrc` {{deprecated_inline}}
  - : Specifies that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header along with the image request.

    On the server-side this is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} header in the response, to register an image-based [attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) or [attribution trigger](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers), respectively. Which response header should be sent back depends on the value of the `Attribution-Reporting-Eligible` header that triggered the registration.

    The corresponding source or trigger event is set off once the browser receives the response containing the image file.

    > [!NOTE]
    > See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

    There are two versions of this attribute that you can set:
    - Boolean, i.e., just the `attributionsrc` name. This specifies that you want the {{httpheader("Attribution-Reporting-Eligible")}} header sent to the same server as the `src` attribute points to. This is fine when you are handling the attribution source or trigger registration on the same server. When registering an attribution trigger this property is optional, and a boolean value will be used if it is omitted.
    - Value containing one or more URLs, for example:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    This is useful in cases where the requested resource is not on a server you control, or you just want to handle registering the attribution source on a different server. In this case, you can specify one or more URLs as the value of `attributionsrc`. When the resource request occurs the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URL(s) specified in `attributionSrc` in addition to the resource origin. These URLs can then respond with an {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} header as appropriate to complete registration.

    > [!NOTE]
    > Specifying multiple URLs means that multiple attribution sources can be registered on the same feature. You might for example have different campaigns that you are trying to measure the success of, which involve generating different reports on different data.

- [`crossorigin`](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Indicates if the fetching of the image must be done using a {{glossary("CORS")}} request. Image data from a [CORS-enabled image](/en-US/docs/Web/HTML/How_to/CORS_enabled_image) returned from a CORS request can be reused in the {{HTMLElement("canvas")}} element without being marked "[tainted](/en-US/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)".

    If the `crossorigin` attribute is _not_ specified, then a non-CORS request is sent (without the {{httpheader("Origin")}} request header), and the browser marks the image as tainted and restricts access to its image data, preventing its usage in {{HTMLElement("canvas")}} elements.

    If the `crossorigin` attribute _is_ specified, then a CORS request is sent (with the {{httpheader("Origin")}} request header); but if the server does not opt into allowing cross-origin access to the image data by the origin site (by not sending any {{httpheader("Access-Control-Allow-Origin")}} response header, or by not including the site's origin in any {{httpheader("Access-Control-Allow-Origin")}} response header it does send), then the browser blocks the image from loading, and logs a CORS error to the devtools console.

    Allowed values:
    - `anonymous`
      - : A CORS request is sent with credentials omitted (that is, no {{glossary("cookie", "cookies")}}, [X.509 certificates](https://datatracker.ietf.org/doc/html/rfc5280), or {{httpheader("Authorization")}} request header).
    - `use-credentials`
      - : The CORS request is sent with any credentials included (that is, cookies, X.509 certificates, and the `Authorization` request header). If the server does not opt into sharing credentials with the origin site (by sending back the `Access-Control-Allow-Credentials: true` response header), then the browser marks the image as tainted and restricts access to its image data.

    If the attribute has an invalid value, browsers handle it as if the `anonymous` value was used. See [CORS settings attributes](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) for additional information.

- `decoding`
  - : This attribute provides a hint to the browser as to whether it should perform image decoding along with rendering the other DOM content in a single presentation step that looks more "correct" (`sync`), or render and present the other DOM content first and then decode the image and present it later (`async`). In practice, `async` means that the next paint does not wait for the image to decode.

    It is often difficult to perceive any noticeable effect when using `decoding` on static `<img>` elements. They'll likely be initially rendered as empty images while the image files are fetched (either from the network or from the cache) and then handled independently anyway, so the "syncing" of content updates is less apparent. However, the blocking of rendering while decoding happens, while often quite small, _can_ be measured — even if it is difficult to observe with the human eye. See [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) for a more detailed analysis (tunetheweb.com, 2023).

    Using different `decoding` types can result in more noticeable differences when dynamically inserting `<img>` elements into the DOM via JavaScript — see {{domxref("HTMLImageElement.decoding")}} for more details.

    Allowed values:
    - `sync`
      - : Decode the image synchronously along with rendering the other DOM content, and present everything together.
    - `async`
      - : Decode the image asynchronously, after rendering and presenting the other DOM content.
    - `auto`
      - : No preference for the decoding mode; the browser decides what is best for the user. This is the default value.

- [`elementtiming`](/en-US/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Marks the image for observation by the {{domxref("PerformanceElementTiming")}} API. The value given becomes an identifier for the observed image element. See also the [`elementtiming`](/en-US/docs/Web/HTML/Reference/Attributes/elementtiming) attribute page.

- [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Provides a hint of the relative priority to use when fetching the image. Allowed values:
    - `high`
      - : Fetch the image at a high priority relative to other images.
    - `low`
      - : Fetch the image at a low priority relative to other images.
    - `auto`
      - : Don't set a preference for the fetch priority.
        This is the default.
        It is used if no value or an invalid value is set.
- `height`
  - : The intrinsic height of the image, in pixels. Must be an integer without a unit.

    > [!NOTE]
    > Including `height` and [`width`](#width) enables the {{glossary("aspect ratio")}} of the image to be calculated by the browser prior to the image being loaded. This aspect ratio is used to reserve the space needed to display the image, reducing or even preventing a layout shift when the image is downloaded and painted to the screen. Reducing layout shift is a major component of good user experience and web performance.

- `ismap`
  - : This Boolean attribute indicates that the image is part of a [server-side map](https://en.wikipedia.org/wiki/Image_map#Server-side). If so, the coordinates where the user clicked on the image are sent to the server.

    > [!NOTE]
    > This attribute is allowed only if the `<img>` element is a descendant of an {{htmlelement("a")}} element with a valid [`href`](/en-US/docs/Web/HTML/Reference/Elements/a#href) attribute. This gives users without pointing devices a fallback destination.

- `loading`
  - : Indicates how the browser should load the image:
    - `eager`
      - : Loads the image immediately, regardless of whether or not the image is currently within the visible viewport (this is the default value).
    - `lazy`
      - : Defers loading the image until it reaches a calculated distance from the viewport, as defined by the browser. The intent is to avoid the network and storage bandwidth needed to handle the image until it's reasonably certain that it will be needed. This generally improves the performance of the content in most typical use cases.

    While explicit [`width`](#width) and [`height`](#height) attributes are recommended for all images to avoid layout shift, they are especially important for lazy-loaded ones. Lazy-loaded images will never be loaded if they do not intersect a visible part of an element, even if loading them would change that, because unloaded images have a `width` and `height` of `0`. It creates an even more disruptive user experience when the content visible in the viewport reflows in the middle of reading it.

    The {{domxref("Window.load_event", "load")}} event is fired after eager-loaded images have been fetched and processed, but before lazy-laded ones are, even if the lazy-loaded images are located within the visual viewport immediately upon initial page load. These images are still loaded as soon as layout completes; they just don't affect the timing of the `load` event. That means that when `load` fires, it's possible that any lazy-loaded images located in the visual viewport may not yet be visible.

    Loading is only deferred when JavaScript is enabled. This is an anti-tracking measure, because if a user agent supported lazy loading when scripting is disabled, it would still be possible for a site to track a user's approximate scroll position throughout a session, by strategically placing images in a page's markup such that a server can track how many images are requested and when.

- `referrerpolicy`
  - : A string indicating which referrer to use when fetching the resource:
    - `no-referrer`: The {{HTTPHeader("Referer")}} header will not be sent.
    - `no-referrer-when-downgrade`: The {{HTTPHeader("Referer")}} header will not be sent to {{Glossary("origin")}}s without {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host")}}, and {{Glossary("port")}}.
    - `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
    - `same-origin`: A referrer will be sent for {{Glossary("Same-origin policy", "same origin")}}, but cross-origin requests will contain no referrer information.
    - `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
    - `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](/en-US/docs/Web/API/HTMLAnchorElement/hash), [password](/en-US/docs/Web/API/HTMLAnchorElement/password), or [username](/en-US/docs/Web/API/HTMLAnchorElement/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.

- `sizes`
  - : One or more values separated by commas, which can be source sizes or the `auto` keyword. The spec requires that the `sizes` attribute to only be present when `srcset` uses width descriptors.

    A **source size** consists of:
    1. A [media condition](/en-US/docs/Web/CSS/Guides/Media_queries/Using#syntax), omitted for the last item in the list.
    2. A source size value.

    Media conditions describe properties of the _viewport_, not the _image_. For example, `(height <= 500px) 1000px` proposes using an image source of 1000px width if the _viewport_ height is 500px or less. Because a source size descriptor specifies the width to use for the image during layout, the media condition is typically (but not necessarily) based on the {{cssxref("@media/width")}}.

    Source size values specify the intended display size of the image. {{glossary("User agent", "User agents")}} use the current source size to select one of the sources supplied by the `srcset` attribute, when those sources are described using width (`w`) descriptors. The selected source size affects the {{glossary("intrinsic size")}} of the image (the image's display size if no {{glossary("CSS")}} styling is applied).

    A source size value can be any non-negative [length](/en-US/docs/Web/CSS/Reference/Values/length). It must not use CSS functions other than the [math functions](/en-US/docs/Web/CSS/Reference/Values/Functions#math_functions). Units are interpreted in the same way as [media queries](/en-US/docs/Web/CSS/Guides/Media_queries), meaning that all relative length units are relative to the document root rather than the `<img>` element. For example, an `em` value is relative to the root font size, not the font size of the image. [Percentage](/en-US/docs/Web/CSS/Reference/Values/percentage) values are not allowed. If the `sizes` attribute is not provided, it has a default value of `100vw` (the viewport width).

    The `auto` keyword can replace the whole list of sizes or the first entry in the list. It is only valid when combined with `loading="lazy"`, and resolves to the [concrete size](/en-US/docs/Web/CSS/Reference/Values/image) of the image. Since the intrinsic size of the image is not yet known, `width` and `height` attributes (or CSS equivalents) should also be specified to prevent the browser from assuming the default image width of 300px.
    For better backward compatibility with browsers that do not support `auto`, you can include fallback sizes after `auto` in the `sizes` attribute:

    ```html
    <img
      loading="lazy"
      width="200"
      height="200"
      sizes="auto, (max-width: 30em) 100vw, (max-width: 50em) 50vw, calc(33vw - 100px)"
      srcset="
        swing-200.jpg   200w,
        swing-400.jpg   400w,
        swing-800.jpg   800w,
        swing-1600.jpg 1600w
      "
      src="swing-400.jpg"
      alt="Kettlebell Swing" />
    ```

- `src`
  - : The image {{glossary("URL")}}. At least one of `src` and [`srcset`](#srcset) is required for an `<img>` element. If [`srcset`](#srcset) is specified, `src` is used in one of two ways:
    - as a fallback for browsers that don't support `srcset`.
    - if `srcset` uses the "x" descriptor, then `src` is equivalent to a source with the density descriptor `1x`; that is, the image specified by `src` is used on low-density screens (such as typical 72 DPI or 96 DPI displays).

- `srcset`
  - : One or more strings separated by commas, indicating possible image sources for the {{glossary("user agent")}} to use.

    Each string is composed of:
    1. A {{glossary("URL")}} to an image
    2. Optionally, whitespace followed by one of:
       - A width descriptor (a positive integer directly followed by `w`). It _must_ match the intrinsic width of the referenced image. The width descriptor is divided by the source size given in the `sizes` attribute to calculate the effective pixel density. For example, to provide an image resource to be used when the renderer needs a 450 pixel wide image, use the width descriptor `450w`. When a `srcset` contains "w" descriptors, the browser uses those descriptors together with the `sizes` attribute to pick a resource.
       - A pixel density descriptor (a positive floating point number directly followed by `x`). It specifies the condition in which the corresponding image resource should be used as the display's pixel density. For example, to provide an image resource to be used when the pixel density is double the standard density, use the pixel density descriptor `2x` or `2.0x`.

    If no descriptor is specified, the source is assigned the default descriptor of `1x`. It is incorrect to mix width descriptors and pixel density descriptors in the same `srcset` attribute. Duplicate descriptors (for instance, two sources in the same `srcset` which are both described with `2x`) are also invalid.

    Space characters, other than the whitespace separating the URL and the corresponding condition descriptor, are ignored; this includes both leading and trailing space, as well as space before or after each comma. However, if an image candidate string contains no descriptors and no whitespace after the URL, the following image candidate string, if there is one, must begin with one or more whitespace, or the comma will be considered part of the URL.

    When the `<img>` element's `srcset` uses `x` descriptors, browsers also consider the URL in the `src` attribute (if present) as a candidate, and assign it a default descriptor of `1x`. On the other hand, if the `srcset` attribute uses width descriptors, `src` is not considered, and the `sizes` attribute is used instead.

    The user agent selects any of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or {{glossary("bandwidth")}} conditions. See our [Responsive images](/en-US/docs/Web/HTML/Guides/Responsive_images) tutorial for an example.

- `width`
  - : The intrinsic width of the image in pixels. Must be an integer without a unit.
- `usemap`
  - : The partial {{glossary("URL")}} (starting with `#`) of an [image map](/en-US/docs/Web/HTML/Reference/Elements/map) associated with the element.

    > [!NOTE]
    > You cannot use this attribute if the `<img>` element is inside an {{htmlelement("a")}} or {{HTMLElement("button")}} element.

### Deprecated attributes

- `align` {{deprecated_inline}}
  - : Aligns the image with its surrounding context. Use the {{cssxref('float')}} and/or {{cssxref('vertical-align')}} {{glossary("CSS")}} properties instead of this attribute. Allowed values:
    - `top`
      - : Equivalent to `vertical-align: top` or `vertical-align: text-top`
    - `middle`
      - : Equivalent to `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : The default, equivalent to `vertical-align: unset` or `vertical-align: initial`
    - `left`
      - : Equivalent to `float: left`
    - `right`
      - : Equivalent to `float: right`

- `border` {{deprecated_inline}}
  - : The width of a border around the image. Use the {{cssxref('border')}} {{glossary("CSS")}} property instead.
- `hspace` {{deprecated_inline}}
  - : The number of pixels of white space on the left and right of the image. Use the {{cssxref('margin')}} CSS property instead.
- `longdesc` {{deprecated_inline}}
  - : A link to a more detailed description of the image. Possible values are a {{glossary("URL")}} or an element [`id`](/en-US/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > This attribute is considered obsolete in the [HTML spec](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc). It has an uncertain future; authors should use a {{glossary("WAI")}}-{{glossary("ARIA")}} alternative such as [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) or [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).

- `name` {{deprecated_inline}}
  - : A name for the element. Use the [`id`](/en-US/docs/Web/HTML/Reference/Global_attributes/id) attribute instead.
- `vspace` {{deprecated_inline}}
  - : The number of pixels of white space above and below the image. Use the {{cssxref('margin')}} CSS property instead.

## Styling with CSS

`<img>` is a {{ glossary("replaced elements", "replaced element")}}; it has a {{cssxref("display")}} value of `inline` by default, but its default dimensions are defined by the embedded image's intrinsic values, like it were `inline-block`. You can set properties like {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. on an image.

`<img>` has no baseline, so when images are used in an inline formatting context with {{cssxref("vertical-align", "vertical-align: baseline")}}, the bottom of the image will be placed on the text baseline.

You can use the {{cssxref("object-position")}} property to position the image within the element's box, and the {{cssxref("object-fit")}} property to adjust the sizing of the image within the box (for example, whether the image should fit the box or fill it even if clipping is required).

Depending on its type, an image may have an intrinsic width and height. For some image types, however, intrinsic dimensions are unnecessary. {{glossary("SVG")}} images, for instance, have no intrinsic dimensions if their root {{SVGElement("svg")}} element doesn't have a `width` or `height` set on it.

## Accessibility

### Authoring meaningful alternate descriptions

An `alt` attribute's value should provide a clear and concise text replacement for the image's content. It should not describe the presence of the image itself or the file name of the image. If the `alt` attribute is purposefully left off because the image has no textual equivalent, consider alternate methods to present what the image is trying to communicate.

#### Don't

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Do

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

An important accessibility test is to read the `alt` attribute content together with preceding textual content to see if it conveys the same meaning as the image. For example, if the image was preceded by the sentence "On my travels, I saw a cute little animal:", the _Don't_ example could be read by a screen reader as "On my travels, I saw a cute little animal: image", which doesn't make sense. The _Do_ example could be read by a screen reader as "On my travels, I saw a cute little animal: A Penguin on a beach.", which does make sense.

For images used to trigger an action, for example, images nested inside an {{htmlelement("a")}} or {{htmlelement("button")}} element, consider describing the triggered action inside the `alt` attribute value. For example, you could write `alt="next page"` instead of `alt="arrow right"`. You could also consider adding an optional further description inside a `title` attribute; this may be read by screen readers if requested by the user.

When an `alt` attribute is not present on an image, some screen readers may announce the image's file name instead. This can be a confusing experience if the file name isn't representative of the image's contents.

- [An alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Identifying SVG as an image

Due to a [VoiceOver bug](https://webkit.org/b/216364), VoiceOver does not correctly announce SVG images as images. Include [`role="img"`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) to all `<img>` elements with SVG source files to ensure assistive technologies correctly announce the SVG as image content.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### The title attribute

The [`title`](/en-US/docs/Web/HTML/Reference/Global_attributes/title) attribute is not an acceptable substitute for the `alt` attribute. Additionally, avoid duplicating the `alt` attribute's value in a `title` attribute declared on the same image. Doing so may cause some screen readers to announce the same text twice, creating a confusing experience.

The `title` attribute should also not be used as supplemental captioning information to accompany an image's `alt` description. If an image needs a caption, use the [`figure`](/en-US/docs/Web/HTML/Reference/Elements/figure) and [`figcaption`](/en-US/docs/Web/HTML/Reference/Elements/figcaption) elements.

The value of the `title` attribute is usually presented to the user as a tooltip, which appears shortly after the cursor stops moving over the image. While this _can_ provide additional information to the user, you should not assume that the user will ever see it: the user may only have keyboard or touchscreen. If you have information that's particularly important or valuable for the user, present it inline using one of the methods mentioned above instead of using `title`.

- [Using the HTML title attribute – updated | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Examples

### Alternative text

The following example embeds an image into the page and includes alternative text for accessibility.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Image link

This example builds upon the previous one, showing how to turn the image into a link. To do so, nest the `<img>` tag inside the {{HTMLElement("a")}}. You should make the alternative text describe the resource the link is pointing to, as if you were using a text link instead.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Using the srcset attribute

In this example we include a `srcset` attribute with a reference to a high-resolution version of the logo; this will be loaded instead of the `src` image on high-resolution devices. The image referenced in the `src` attribute is counted as a `1x` candidate in {{glossary("User agent", "user agents")}} that support `srcset`.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Using the srcset and sizes attributes

The `src` attribute is ignored in {{glossary("User agent", "user agents")}} that support `srcset` when `w` descriptors are included. When the `(width <= 600px)` media condition matches, the 200 pixel-wide image will load (it is the one that matches `200px` most closely), otherwise the other image will load.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> To see the resizing in action, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'view the example on a separate page')}}, so you can actually resize the content area.

## Security and privacy concerns

Although `<img>` elements have innocent uses, they can have undesirable consequences for user security and privacy. See [Referer header: privacy and security concerns](/en-US/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) for more information and mitigations.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >embedded content</a
        >,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >palpable content</a
        >. If the element has a <code>usemap</code> attribute, it also is a part
        of the interactive content category.
      </td>
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
      <td>Any element that accepts embedded content.</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <ul>
          <li>
            with non-empty <code>alt</code> attribute or no
            <code>alt</code> attribute:
            <code
              ><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            with empty <code>alt</code> attribute:
            <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"
              ><code>presentation</code></a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <ul>
          <li>
            with non-empty <code>alt</code> attribute:
            <ul>
              <li>
                <code
                  ><a
                    href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a></li>
              <li><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></li>
              <li><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>progressbar</code></a></li>
              <li><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role"><code>scrollbar</code></a></li>
              <li><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>slider</code></a></li>
              <li>
                <code
                  ><a
                    href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"
                    >switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"
                    >tab</a
                  ></code
                >
              </li>
              <li><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>
            with empty <code>alt</code> attribute, <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
            or <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            with no <code>alt</code> attribute, no <code>role</code> permitted
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLImageElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("picture")}}, {{HTMLElement("object")}}, and {{HTMLElement("embed")}} elements
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, and {{cssxref("image-resolution")}}: Image-related CSS properties.
- {{domxref("HTMLImageElement")}} interface for this element
- [HTML images](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Image file type and format guide](/en-US/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive images](/en-US/docs/Web/HTML/Guides/Responsive_images)
