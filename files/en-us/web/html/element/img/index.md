---
title: '<img>: The Image Embed element'
slug: Web/HTML/Element/img
tags:
  - Content
  - Element
  - Graphics
  - HTML
  - HTML Graphics
  - HTML Images
  - HTML Photos
  - HTML Pictures
  - HTML embedded content
  - Image
  - Image Element
  - Media
  - Multimedia
  - Photos
  - Pictures
  - Reference
  - Web
browser-compat: html.elements.img
---

{{HTMLRef}}

The **`<img>`** [HTML](/en-US/docs/Web/HTML) element embeds an image into the document.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

The above example shows usage of the `<img>` element:

- The `src` attribute is **required**, and contains the path to the image you want to embed.
- The `alt` attribute holds a text description of the image, which isn't mandatory but is **incredibly useful** for accessibility — screen readers read this description out to their users so they know what the image means. Alt text is also displayed on the page if the image can't be loaded for some reason: for example, network errors, content blocking, or linkrot.

There are many other attributes to achieve various purposes:

- [Referrer](/en-US/docs/Web/HTTP/Headers/Referrer-Policy)/{{glossary("CORS")}} control for security and privacy: see {{htmlattrxref("crossorigin", "img")}} and {{htmlattrxref("referrerpolicy", "img")}}.
- Use both {{htmlattrxref("width", "img")}} and {{htmlattrxref("height", "img")}} to set the intrinsic size of the image, allowing it to take up space before it loads, to mitigate content layout shifts.
- Responsive image hints with {{htmlattrxref("sizes", "img")}} and {{htmlattrxref("srcset", "img")}} (see also the {{htmlelement("picture")}} element and our [Responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) tutorial).

## Supported image formats

The HTML standard doesn't list what image formats to support, so {{glossary("user agent","user agents")}} may support different formats.

> **Note:** The [Image file type and format guide](/en-US/docs/Web/Media/Formats/Image_types) provides comprehensive information about image formats and their web browser support.
> This section is just a summary!

The image file formats that are most commonly used on the web are:

- [APNG (Animated Portable Network Graphics)](/en-US/docs/Web/Media/Formats/Image_types#apng) — Good choice for lossless animation sequences (GIF is less performant)
- [AVIF (AV1 Image File Format)](/en-US/docs/Web/Media/Formats/Image_types#avif) — Good choice for both images and animated images due to high performance.
- [GIF (Graphics Interchange Format)](/en-US/docs/Web/Media/Formats/Image_types#gif) — Good choice for _simple_ images and animations.
- [JPEG (Joint Photographic Expert Group image)](/en-US/docs/Web/Media/Formats/Image_types#jpeg) — Good choice for lossy compression of still images (currently the most popular).
- [PNG (Portable Network Graphics)](/en-US/docs/Web/Media/Formats/Image_types#png) — Good choice for lossy compression of still images (slightly better quality than JPEG).
- [SVG (Scalable Vector Graphics)](/en-US/docs/Web/Media/Formats/Image_types#svg) — Vector image format. Use for images that must be drawn accurately at different sizes.
- [WebP (Web Picture format)](/en-US/docs/Web/Media/Formats/Image_types#webp) — Excellent choice for both images and animated images

Formats like [WebP](/en-US/docs/Web/Media/Formats/Image_types#webp) and [AVIF](/en-US/docs/Web/Media/Formats/Image_types#avif) are highly recommended as they are now broadly (and somewhat deeply) supported by web browsers, and perform much better than PNG, JPEG, GIF for both still and animated images. SVG remains the recommended format for images that must be drawn accurately at different sizes.

## Image loading errors

If an error occurs while loading or rendering an image, and an {{htmlattrxref("onerror")}} event handler has been set on the {{event("error")}} event, that event handler will get called. This can happen in a number of situations, including:

- The `src` attribute is empty (`""`) or `null`.
- The `src` {{glossary("URL")}} is the same as the URL of the page the user is currently on.
- The image is corrupted in some way that prevents it from being loaded.
- The image's metadata is corrupted in such a way that it's impossible to retrieve its dimensions, and no dimensions were specified in the `<img>` element's attributes.
- The image is in a format not supported by the {{Glossary("user agent")}}.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("alt")}}

  - : Defines an alternative text description of the image.

    > **Note:** Browsers do not always display images. There are a number of situations in which a browser might not display images, such as:
    >
    > - Non-visual browsers (such as those used by people with visual impairments)
    > - The user chooses not to display images (saving bandwidth, privacy reasons)
    > - The image is invalid or an [unsupported type](#supported_image_formats)
    >
    > In these cases, the browser may replace the image with the text in the element's `alt` attribute. For these reasons and others, provide a useful value for `alt` whenever possible.

    Omitting `alt` altogether indicates that the image is a key part of the content and no textual equivalent is available. Setting this attribute to an empty string (`alt=""`) indicates that this image is _not_ a key part of the content (it’s decoration or a tracking pixel), and that non-visual browsers may omit it from {{glossary("Rendering engine", "rendering")}}. Visual browsers will also hide the broken image icon if the `alt` is empty and the image failed to display.

    This attribute is also used when copying and pasting the image to text, or saving a linked image to a bookmark.

- {{htmlattrdef("crossorigin")}}

  - : Indicates if the fetching of the image must be done using a {{glossary("CORS")}} request. Image data from a [CORS-enabled image](/en-US/docs/Web/HTML/CORS_enabled_image) returned from a CORS request can be reused in the {{HTMLElement("canvas")}} element without being marked "[tainted](/en-US/docs/Web/HTML/CORS_enabled_image#what_is_a_tainted_canvas)".

    If the `crossorigin` attribute is _not_ specified, then a non-CORS request is sent (without the {{httpheader("Origin")}} request header), and the browser marks the image as tainted and restricts access to its image data, preventing its usage in {{HTMLElement("canvas")}} elements.

    If the `crossorigin` attribute _is_ specified, then a CORS request is sent (with the {{httpheader("Origin")}} request header); but if the server does not opt into allowing cross-origin access to the image data by the origin site (by not sending any {{httpheader("Access-Control-Allow-Origin")}} response header, or by not including the site's origin in any {{httpheader("Access-Control-Allow-Origin")}} response header it does send), then the browser blocks the image from loading, and logs a CORS error to the devtools console.

    Allowed values:

    - `anonymous`
      - : A CORS request is sent with credentials omitted (that is, no {{glossary("cookie", "cookies")}}, [X.509 certificates](https://datatracker.ietf.org/doc/html/rfc5280), or {{httpheader("Authorization")}} request header).
    - `use-credentials`
      - : The CORS request is sent with any credentials included (that is, cookies, X.509 certificates, and the `Authorization` request header). If the server does not opt into sharing credentials with the origin site (by sending back the `Access-Control-Allow-Credentials: true` response header), then the browser marks the image as tainted and restricts access to its image data.

    If the attribute has an invalid value, browsers handle it as if the `anonymous` value was used. See [CORS settings attributes](/en-US/docs/Web/HTML/Attributes/crossorigin) for additional information.

- {{htmlattrdef("decoding")}}

  - : Provides an image decoding hint to the browser. Allowed values:

    - `sync`
      - : Decode the image synchronously, for atomic presentation with other content.
    - `async`
      - : Decode the image asynchronously, to reduce delay in presenting other content.
    - `auto`
      - : Default: no preference for the decoding mode. The browser decides what is best for the user.

- {{htmlattrdef("height")}}
  - : The intrinsic height of the image, in pixels. Must be an integer without a unit.
- {{htmlattrdef("intrinsicsize")}} {{deprecated_inline}}
  - : This attribute tells the browser to ignore the actual {{glossary("intrinsic size")}} of the image and pretend it’s the size specified in the attribute. Specifically, the image would raster at these dimensions and `naturalWidth`/`naturalHeight` on images would return the values specified in this attribute. [Explainer](https://github.com/ojanvafai/intrinsicsize-attribute), [examples](https://googlechrome.github.io/samples/intrinsic-size/index.html)
- {{htmlattrdef("ismap")}}

  - : This Boolean attribute indicates that the image is part of a [server-side map](https://en.wikipedia.org/wiki/Image_map#Server-side). If so, the coordinates where the user clicked on the image are sent to the server.

    > **Note:** **Note:** This attribute is allowed only if the `<img>` element is a descendant of an {{htmlelement("a")}} element with a valid {{htmlattrxref("href","a")}} attribute. This gives users without pointing devices a fallback destination.

- {{htmlattrdef("loading")}} {{experimental_inline}}

  - : Indicates how the browser should load the image:

    - `eager`: Loads the image immediately, regardless of whether or not the image is currently within the visible viewport (this is the default value).
    - `lazy`: Defers loading the image until it reaches a calculated distance from the viewport, as defined by the browser. The intent is to avoid the network and storage bandwidth needed to handle the image until it's reasonably certain that it will be needed. This generally improves the performance of the content in most typical use cases.

      > **Note:** Loading is only deferred when JavaScript is enabled. This is an anti-tracking measure, because if a user agent supported lazy loading when scripting is disabled, it would still be possible for a site to track a user's approximate scroll position throughout a session, by strategically placing images in a page's markup such that a server can track how many images are requested and when.

- {{htmlattrdef("referrerpolicy")}}

  - : A string indicating which referrer to use when fetching the resource:

    - `no-referrer`: The {{HTTPHeader("Referer")}} header will not be sent.
    - `no-referrer-when-downgrade`: The {{HTTPHeader("Referer")}} header will not be sent to {{Glossary("origin")}}s without {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](/en-US/docs/Learn/Common_questions/What_is_a_URL), {{Glossary("host")}}, and {{Glossary("port")}}.
    - `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
    - `same-origin`: A referrer will be sent for {{Glossary("Same-origin policy", "same origin")}}, but cross-origin requests will contain no referrer information.
    - `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
    - `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](/en-US/docs/Web/API/HTMLAnchorElement/hash), [password](/en-US/docs/Web/API/HTMLAnchorElement/password), or [username](/en-US/docs/Web/API/HTMLAnchorElement/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.

- {{htmlattrdef("sizes")}}

  - : One or more strings separated by commas, indicating a set of source sizes. Each source size consists of:

    1.  A [media condition](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#syntax). This must be omitted for the last item in the list.
    2.  A source size value.

    Media Conditions describe properties of the _viewport_, not of the _image_. For example, `(max-height: 500px) 1000px` proposes to use a source of 1000px width, if the _viewport_ is not higher than 500px.

    Source size values specify the intended display size of the image. {{glossary("User agent", "User agents")}} use the current source size to select one of the sources supplied by the `srcset` attribute, when those sources are described using width (`w`) descriptors. The selected source size affects the {{glossary("intrinsic size")}} of the image (the image’s display size if no {{glossary("CSS")}} styling is applied). If the `srcset` attribute is absent, or contains no values with a width descriptor, then the `sizes` attribute has no effect.

- {{htmlattrdef("src")}}
  - : The image {{glossary("URL")}}. Mandatory for the `<img>` element. On {{glossary("Browser", "browsers")}} supporting `srcset`, `src` is treated like a candidate image with a pixel density descriptor `1x`, unless an image with this pixel density descriptor is already defined in `srcset`, or unless `srcset` contains `w` descriptors.
- {{htmlattrdef("srcset")}}

  - : One or more strings separated by commas, indicating possible image sources for the {{glossary("user agent")}} to use. Each string is composed of:

    1.  A {{glossary("URL")}} to an image
    2.  Optionally, whitespace followed by one of:

        - A width descriptor (a positive integer directly followed by `w`). The width descriptor is divided by the source size given in the `sizes` attribute to calculate the effective pixel density.
        - A pixel density descriptor (a positive floating point number directly followed by `x`).

    If no descriptor is specified, the source is assigned the default descriptor of `1x`.

    It is incorrect to mix width descriptors and pixel density descriptors in the same `srcset` attribute. Duplicate descriptors (for instance, two sources in the same `srcset` which are both described with `2x`) are also invalid.

    The user agent selects any of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or {{glossary("bandwidth")}} conditions. See our [Responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) tutorial for an example.

- {{htmlattrdef("width")}}
  - : The intrinsic width of the image in pixels. Must be an integer without a unit.
- {{htmlattrdef("usemap")}}

  - : The partial {{glossary("URL")}} (starting with `#`) of an [image map](/en-US/docs/Web/HTML/Element/map) associated with the element.

    > **Note:** You cannot use this attribute if the `<img>` element is inside an {{htmlelement("a")}} or {{HTMLElement("button")}} element.

### Deprecated attributes

- {{htmlattrdef("align")}} {{deprecated_inline}}

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

- {{htmlattrdef("border")}} {{deprecated_inline}}
  - : The width of a border around the image. Use the {{cssxref('border')}} {{glossary("CSS")}} property instead.
- {{htmlattrdef("hspace")}} {{deprecated_inline}}
  - : The number of pixels of white space on the left and right of the image. Use the {{cssxref('margin')}} CSS property instead.
- {{htmlattrdef("longdesc")}} {{deprecated_inline}}

  - : A link to a more detailed description of the image. Possible values are a {{glossary("URL")}} or an element {{htmlattrxref("id")}}.

    > **Note:** This attribute is mentioned in the latest {{glossary("W3C")}} version, [HTML 5.2](https://www.w3.org/TR/html52/obsolete.html#element-attrdef-img-longdesc), but has been removed from the {{glossary("WHATWG")}}’s [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). It has an uncertain future; authors should use a {{glossary("WAI")}}-{{glossary("ARIA")}} alternative such as [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) or [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details).

- {{htmlattrdef("name")}} {{deprecated_inline}}
  - : A name for the element. Use the {{htmlattrxref("id")}} attribute instead.
- {{htmlattrdef("vspace")}} {{deprecated_inline}}
  - : The number of pixels of white space above and below the image. Use the {{cssxref('margin')}} CSS property instead.

## Styling with CSS

`<img>` is a [replaced element](/en-US/docs/Web/CSS/Replaced_element); it has a {{cssxref("display")}} value of `inline` by default, but its default dimensions are defined by the embedded image's intrinsic values, like it were `inline-block`. You can set properties like {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. on an image.

`<img>` has no baseline, so when images are used in an inline formatting context with {{cssxref("vertical-align")}}`: baseline`, the bottom of the image will be placed on the text baseline.

You can use the {{cssxref("object-position")}} property to position the image within the element's box, and the {{cssxref("object-fit")}} property to adjust the sizing of the image within the box (for example, whether the image should fit the box or fill it even if clipping is required).

Depending on its type, an image may have an intrinsic width and height. For some image types, however, intrinsic dimensions are unnecessary. {{glossary("SVG")}} images, for instance, have no intrinsic dimensions if their root {{SVGElement("svg")}} element doesn't have a `width` or `height` set on it.

## Examples

### Alternative text

The following example embeds an image into the page and includes alternative text for accessibility.

```html
<img src="favicon144.png"
     alt="MDN logo">
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Image link

This example builds upon the previous one, showing how to turn the image into a link. To do so, nest the `<img>` tag inside the {{HTMLElement("a")}}. You should made the alternative text describe the resource the link is pointing to, as if you were using a text link instead.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png"
       alt="Visit the MDN site">
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Using the srcset attribute

In this example we include a `srcset` attribute with a reference to a high-resolution version of the logo; this will be loaded instead of the `src` image on high-resolution devices. The image referenced in the `src` attribute is counted as a `1x` candidate in {{glossary("User agent", "user agents")}} that support `srcset`.

```html
 <img src="favicon72.png"
      alt="MDN logo"
      srcset="favicon144.png 2x">
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Using the srcset and sizes attributes

The `src` attribute is ignored in {{glossary("User agent", "user agents")}} that support `srcset` when `w` descriptors are included. When the `(max-width: 600px)` media condition matches, the 200 pixel-wide image will load (it is the one that matches `200px` most closely), otherwise the other image will load.

```html
 <img src="clock-demo-200px.png"
      alt="Clock"
      srcset="clock-demo-200px.png 200w,
          clock-demo-400px.png 400w"
      sizes="(max-width: 600px) 200px, 50vw">
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> **Note:** To see the resizing in action, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'view the example on a separate page')}}, so you can actually resize the content area.

## Security and privacy concerns

Although `<img>` elements have innocent uses, they can have undesirable consequences for user security and privacy. See [Referer header: privacy and security concerns](/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns) for more information and mitigations.

## Accessibility concerns

### Authoring meaningful alternate descriptions

An `alt` attribute's value should clearly and concisely describe the image's content. It should not describe the presence of the image itself or the file name of the image. If the `alt` attribute is purposefully left off because the image has no textual equivalent, consider alternate methods to present what the image is trying to communicate.

#### Don't

```html example-bad
<img alt="image" src="penguin.jpg">
```

#### Do

```html example-good
<img alt="A Rockhopper Penguin standing on a beach." src="penguin.jpg">
```

When an `alt` attribute is not present on an image, some screen readers may announce the image's file name instead. This can be a confusing experience if the file name isn't representative of the image's contents.

- [An alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### The title attribute

The {{htmlattrxref("title")}} attribute is not an acceptable substitute for the `alt` attribute. Additionally, avoid duplicating the `alt` attribute's value in a `title` attribute declared on the same image. Doing so may cause some screen readers to announce the description twice, creating a confusing experience.

The `title` attribute should also not be used as supplemental captioning information to accompany an image's `alt` description. If an image needs a caption, use the [`figure`](/en-US/docs/Web/HTML/Element/figure) and [`figcaption`](/en-US/docs/Web/HTML/Element/figcaption) elements.

The value of the `title` attribute is usually presented to the user as a tooltip, which appears shortly after the cursor stops moving over the image. While this _can_ provide additional information to the user, you should not assume that the user will ever see it: the user may only have keyboard or touchscreen. If you have information that's particularly important or valuable for the user, present it inline using one of the methods mentioned above instead of using `title`.

- [Using the HTML title attribute – updated | The Paciello Group](https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/)

## Technical summary

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
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#embedded_content"
          >embedded content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >palpable content</a
        >. If the element has a <code>usemap</code> attribute, it also is a part
        of the interactive content category.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None, it is an {{Glossary("empty element")}}.</td>
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
              ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Role_Img"
                >img</a
              ></code
            >
          </li>
          <li>
            with empty <code>alt</code> attribute:
            <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
              >no corresponding role</a
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
                    href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role"
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li>{{ARIARole("link")}}</li>
              <li>{{ARIARole("menuitem")}}</li>
              <li>{{ARIARole("menuitemcheckbox")}}</li>
              <li>{{ARIARole("menuitemradio")}}</li>
              <li>{{ARIARole("option")}}</li>
              <li>{{ARIARole("progressbar")}}</li>
              <li>{{ARIARole("scrollbar")}}</li>
              <li>{{ARIARole("separator")}}</li>
              <li>{{ARIARole("slider")}}</li>
              <li>
                <code
                  ><a
                    href="/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_role"
                    >switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role"
                    >tab</a
                  ></code
                >
              </li>
              <li>{{ARIARole("treeitem")}}</li>
            </ul>
          </li>
          <li>
            with empty <code>alt</code> attribute, {{ARIARole("none")}}
            or {{ARIARole("presentation")}}
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

- [Images in HTML](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Image file type and format guide](/en-US/docs/Web/Media/Formats/Image_types)
- [Responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- {{HTMLElement("picture")}}, {{HTMLElement("object")}} and {{HTMLElement("embed")}} elements
- Other image-related CSS properties: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, and {{cssxref("image-resolution")}}.
