---
title: '<area>: The Image Map Area element'
slug: Web/HTML/Element/area
tags:
  - Content
  - Element
  - HTML
  - HTML:Flow content
  - HTML:Phrasing content
  - Multimedia
  - Reference
  - Web
browser-compat: html.elements.area
---

{{HTMLRef}}

The **`<area>`** [HTML](/en-US/docs/Web/HTML) element defines an area inside an image map that has predefined clickable areas. An _image map_ allows geometric areas on an image to be associated with {{Glossary("Hyperlink", "hypertext link")}}.

This element is used only within a {{HTMLElement("map")}} element.

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">Flow content</a>,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>.
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
      <td>
        Any element that accepts <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>. The <code>&#x3C;area></code> element must have an ancestor {{HTMLElement("map")}}, but it need not be a direct parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        {{ARIARole("link")}} when {{htmlattrxref("href", "area")}} attribute is present, otherwise <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">no corresponding role</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("alt")}}
  - : A text string alternative to display on browsers that do not display images.
    The text should be phrased so that it presents the user with the same kind of choice as the image would offer when displayed without the alternative text.
    This attribute is required only if the {{htmlattrxref("href", "area")}} attribute is used.
- {{htmlattrdef("coords")}}

  - : The `coords` attribute details the coordinates of the [`shape`](#attr-shape) attribute in size, shape, and placement of an `<area>`.
    This attribute must not be used if `shape` is set to `default`.

    - `rect`: the value is `x1,y1,x2,y2`.
      The value specifies the coordinates of the top-left and bottom-right corner of the rectangle.`
      For example, in `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` the coordinates are `0,0` and `253,27`, indicating the top-left and bottom-right corners of the rectangle, respectively.
    - `circle`: the value is `x,y,radius`. Value specifies the coordinates of the circle center and the radius.
      For example: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: the value is `x1,y1,x2,y2,..,xn,yn`. Value specifies the coordinates of the edges of the polygon.
      If the first and last coordinate pairs are not the same, the browser will add the last coordinate pair to close the polygon

    The values are numbers of CSS pixels.
    

- {{htmlattrdef("download")}}
  - : This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a resource.
    See {{HTMLElement("a")}} for a full description of the {{htmlattrxref("download", "a")}} attribute.
- {{htmlattrdef("href")}}
  - : The hyperlink target for the area.
    Its value is a valid URL.
    This attribute may be omitted; if so, the `<area>` element does not represent a hyperlink.
- {{htmlattrdef("hreflang")}}
  - : Indicates the language of the linked resource. Allowed values are defined by {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.
    Use this attribute only if the {{htmlattrxref("href", "area")}} attribute is present.
- {{htmlattrdef("ping")}}
  - : Contains a space-separated list of URLs to which, when the hyperlink is followed, {{HTTPMethod("POST")}} requests with the body `PING` will be sent by the browser (in the background).
    Typically used for tracking.
- {{htmlattrdef("referrerpolicy")}}

  - : A string indicating which referrer to use when fetching the resource:

    - `no-referrer`: The {{HTTPHeader("Referer")}} header will not be sent.
    - `no-referrer-when-downgrade`: The {{HTTPHeader("Referer")}} header will not be sent to {{Glossary("origin")}}s without {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](/en-US/docs/Learn/Common_questions/What_is_a_URL), {{Glossary("host")}}, and {{Glossary("port")}}.
    - `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
    - `same-origin`: A referrer will be sent for {{Glossary("Same-origin policy", "same origin")}}, but cross-origin requests will contain no referrer information.
    - `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
    - `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](/en-US/docs/Web/API/HTMLAnchorElement/hash), [password](/en-US/docs/Web/API/HTMLAnchorElement/password), or [username](/en-US/docs/Web/API/HTMLAnchorElement/username)).
      **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.

- {{htmlattrdef("rel")}}
  - : For anchors containing the {{htmlattrxref("href", "area")}} attribute, this attribute specifies the relationship of the target object to the link object.
    The value is a space-separated list of [link types values](/en-US/docs/Web/HTML/Link_types).
    The values and their semantics will be registered by some authority that might have meaning to the document author.
    The default relationship, if no other is given, is void. Use this attribute only if the {{htmlattrxref("href", "area")}} attribute is present.
- {{htmlattrdef("shape")}}
  - : The shape of the associated hot spot. The specifications for HTML defines the values `rect`, which defines a rectangular region; `circle`, which defines a circular region; `poly`, which defines a polygon; and `default`, which indicates the entire region beyond any defined shapes.
- {{htmlattrdef("target")}}

  - : A keyword or author-defined name of the {{Glossary("browsing context")}} to display the linked resource.
    The following keywords have special meanings:

    - `_self` (default): Show the resource in the current browsing context.
    - `_blank`: Show the resource in a new, unnamed browsing context.
    - `_parent`: Show the resource in the parent browsing context of the current one, if the current page is inside a frame.
      If there is no parent, acts the same as `_self`.
    - `_top`: Show the resource in the topmost browsing context (the browsing context that is an ancestor of the current one and has no parent).
      If there is no parent, acts the same as `_self`.

    Use this attribute only if the {{htmlattrxref("href", "area")}} attribute is present.

    > **Note:** Setting `target="_blank"` on `<area>` elements implicitly provides the same `rel` behavior as setting [`rel="noopener"`](/en-US/docs/Web/HTML/Link_types/noopener) which does not set `window.opener`. See [browser compatibility](#browser_compatibility) for support status.

### Deprecated attributes

- {{htmlattrdef("name")}} {{deprecated_inline}}
  - : Define a names for the clickable area so that it can be scripted by older browsers.
- {{htmlattrdef("nohref")}} {{deprecated_inline}}

  - : Indicates that no hyperlink exists for the associated area.

    > **Note:** Since HTML5, omitting the `href` attribute is sufficient.

- {{htmlattrdef("type")}} {{deprecated_inline}}
  - : Hint for the type of the referenced resource. Ignored by browsers.

## Examples

```html
<map name="primary">
  <area shape="circle" coords="75,75,75" href="left.html" alt="Click to go Left">
  <area shape="circle" coords="275,75,75" href="right.html" alt="Click to go Right">
</map>
<img usemap="#primary" src="https://via.placeholder.com/350x150" alt="350 x 150 pic">
```

### Result

{{ EmbedLiveSample('Examples', 360, 160) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
