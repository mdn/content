---
title: '<link>: The External Resource Link element'
slug: Web/HTML/Element/link
tags:
  - Element
  - HTML
  - HTML document metadata
  - Link
  - Reference
  - Web
  - Web Performance
  - metadata
browser-compat: html.elements.link
---

{{HTMLRef}}

The **`<link>`** [HTML](/en-US/docs/Web/HTML) element specifies relationships between the current document and an external resource.
This element is most commonly used to link to {{Glossary("CSS", "stylesheets")}}, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.

{{EmbedInteractiveExample("pages/tabbed/link.html", "tabbed-shorter")}}

To link an external stylesheet, you'd include a `<link>` element inside your {{HTMLElement("head")}} like this:

```html
<link href="main.css" rel="stylesheet">
```

This simple example provides the path to the stylesheet inside an `href` attribute, and a `rel` attribute with a value of `stylesheet`. The `rel` stands for "relationship", and is probably one of the key features of the `<link>` element — the value denotes how the item being linked to is related to the containing document.
As you'll see from our [Link types](/en-US/docs/Web/HTML/Link_types) reference, there are many different kinds of relationship.

There are a number of other common types you'll come across. For example, a link to the site's favicon:

```html
<link rel="icon" href="favicon.ico">
```

There are a number of other icon `rel` values, mainly used to indicate special icon types for use on various mobile platforms, e.g.:

```html
<link rel="apple-touch-icon-precomposed" sizes="114x114"
      href="apple-icon-114.png" type="image/png">
```

The `sizes` attribute indicates the icon size, while the `type` contains the MIME type of the resource being linked.
These provide useful hints to allow the browser to choose the most appropriate icon available.

You can also provide a media type or query inside a `media` attribute; this resource will then only be loaded if the media condition is true. For example:

```html
<link href="print.css" rel="stylesheet" media="print">
<link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">
```

Some interesting new performance and security features have been added to the `<link>` element too. Take this example:

```html
<link rel="preload" href="myFont.woff2" as="font"
      type="font/woff2" crossorigin="anonymous">
```

A `rel` value of `preload` indicates that the browser should preload this resource (see [Preloading content with rel="preload"](/en-US/docs/Web/HTML/Link_types/preload) for more details), with the `as` attribute indicating the specific class of content being fetched.
The `crossorigin` attribute indicates whether the resource should be fetched with a {{Glossary("CORS")}} request.

Other usage notes:

- A `<link>` element can occur either in the {{HTMLElement("head")}} or {{HTMLElement("body")}} element, depending on whether it has a [link type](https://html.spec.whatwg.org/multipage/links.html#body-ok) that is **body-ok**.
  For example, the `stylesheet` link type is body-ok, and therefore `<link rel="stylesheet">` is permitted in the body.
  However, this isn't a good practice to follow; it makes more sense to separate your `<link>` elements from your body content, putting them in the `<head>`.
- When using `<link>` to establish a favicon for a site, and your site uses a Content Security Policy (CSP) to enhance its security, the policy applies to the favicon.
  If you encounter problems with the favicon not loading, verify that the {{HTTPHeader("Content-Security-Policy")}} header's [`img-src` directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) is not preventing access to it.
- The HTML and XHTML specifications define event handlers for the `<link>` element, but it is unclear how they would be used.
- Under XHTML 1.0, empty elements such as `<link>` require a trailing slash: `<link />`.
- WebTV supports the use of the value `next` for `rel` to preload the next page in a document series.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{HTMLAttrDef("as")}}

  - : This attribute is only used when `rel="preload"` or `rel="prefetch"` has been set on the `<link>` element.
    It specifies the type of content being loaded by the `<link>`, which is necessary for request matching, application of correct [content security policy](/en-US/docs/Web/HTTP/CSP), and setting of correct {{HTTPHeader("Accept")}} request header.
    Furthermore, `rel="preload"` uses this as a signal for request prioritization.
    The table below lists the valid values for this attribute and the elements or resources they apply to.

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Value</th>
          <th scope="col">Applies To</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>audio</td>
          <td><code>&#x3C;audio></code> elements</td>
        </tr>
        <tr>
          <td>document</td>
          <td><code>&#x3C;iframe></code> and <code>&#x3C;frame></code> elements</td>
        </tr>
        <tr>
          <td>embed</td>
          <td><code>&#x3C;embed></code> elements</td>
        </tr>
        <tr>
          <td>fetch</td>
          <td>
            <p>fetch, XHR</p>
            <div class="notecard note">
              <p>
                <strong>Note:</strong> This value also requires
                <code>&#x3C;link></code> to contain the crossorigin attribute.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>font</td>
          <td>CSS @font-face</td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code> and <code>&#x3C;picture></code> elements with
            srcset or imageset attributes, SVG <code>&#x3C;image></code> elements,
            CSS <code>*-image</code> rules
          </td>
        </tr>
        <tr>
          <td>object</td>
          <td><code>&#x3C;object></code> elements</td>
        </tr>
        <tr>
          <td>script</td>
          <td>
            <code>&#x3C;script></code> elements, Worker <code>importScripts</code>
          </td>
        </tr>
        <tr>
          <td>style</td>
          <td>
            <code>&#x3C;link rel=stylesheet></code> elements, CSS
            <code>@import</code>
          </td>
        </tr>
        <tr>
          <td>track</td>
          <td><code>&#x3C;track></code> elements</td>
        </tr>
        <tr>
          <td>video</td>
          <td><code>&#x3C;video></code> elements</td>
        </tr>
        <tr>
          <td>worker</td>
          <td>Worker, SharedWorker</td>
        </tr>
      </tbody>
    </table>

- {{HTMLAttrDef("crossorigin")}}

  - : This enumerated attribute indicates whether {{Glossary("CORS")}} must be used when fetching the resource.
    [CORS-enabled images](/en-US/docs/Web/HTML/CORS_enabled_image) can be reused in the {{HTMLElement("canvas")}} element without being _tainted_.
    The allowed values are:

    - `anonymous`
      - : A cross-origin request (i.e. with an {{HTTPHeader("Origin")}} HTTP header) is performed, but no credential is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication).
        If the server does not give credentials to the origin site (by not setting the {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP header) the resource will be tainted and its usage restricted.
    - `use-credentials`
      - : A cross-origin request (i.e. with an `Origin` HTTP header) is performed along with a credential sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed).
        If the server does not give credentials to the origin site (through {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP header), the resource will be _tainted_ and its usage restricted.

    If the attribute is not present, the resource is fetched without a {{Glossary("CORS")}} request (i.e. without sending the `Origin` HTTP header), preventing its non-tainted usage. If invalid, it is handled as if the enumerated keyword **anonymous** was used.
    See [CORS settings attributes](/en-US/docs/Web/HTML/Attributes/crossorigin) for additional information.

- {{HTMLAttrDef("disabled")}} {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : For `rel="stylesheet"` only, the `disabled` Boolean attribute indicates whether or not the described stylesheet should be loaded and applied to the document.
    If `disabled` is specified in the HTML when it is loaded, the stylesheet will not be loaded during page load.
    Instead, the stylesheet will be loaded on-demand, if and when the `disabled` attribute is changed to `false` or removed.

    Setting the `disabled` property in the DOM causes the stylesheet to be removed from the document's {{domxref("Document.styleSheets")}} list.

- {{htmlattrdef("fetchpriority")}} {{Experimental_Inline}}

  - : Provides a hint of the relative priority to use when fetching a preloaded resource. Allowed values:

    - `high`
      - : Signals a high-priority fetch relative to other resources of the same type.
    - `low`
      - : Signals a low-priority fetch relative to other resources of the same type.
    - `auto`
      - : Default: Signals automatic determination of fetch priority relative to other resources of the same type.

- {{HTMLAttrDef("href")}}
  - : This attribute specifies the {{glossary("URL")}} of the linked resource. A URL can be absolute or relative.
- {{HTMLAttrDef("hreflang")}}
  - : This attribute indicates the language of the linked resource.
    It is purely advisory.
    Allowed values are specified by {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.
    Use this attribute only if the {{HTMLAttrxRef("href", "a")}} attribute is present.
- {{HTMLAttrDef("imagesizes")}}
  - : For `rel="preload"` and `as="image"` only, the `imagesizes` attribute is [a sizes attribute](https://html.spec.whatwg.org/multipage/images.html#sizes-attribute) that indicates to preload the appropriate resource used by an `img` element with corresponding values for its `srcset` and `sizes` attributes.
- {{HTMLAttrDef("imagesrcset")}}
  - : For `rel="preload"` and `as="image"` only, the `imagesrcset` attribute is [a sourceset attribute](https://html.spec.whatwg.org/multipage/images.html#srcset-attribute) that indicates to preload the appropriate resource used by an `img` element with corresponding values for its `srcset` and `sizes` attributes.
- {{HTMLAttrDef("integrity")}}
  - : Contains inline metadata — a base64-encoded cryptographic hash of the resource (file) you're telling the browser to fetch.
    The browser can use this to verify that the fetched resource has been delivered free of unexpected manipulation.
    See [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity).
- {{HTMLAttrDef("media")}}

  - : This attribute specifies the media that the linked resource applies to. Its value must be a media type / [media query](/en-US/docs/Web/CSS/Media_Queries).
    This attribute is mainly useful when linking to external stylesheets — it allows the user agent to pick the best adapted one for the device it runs on.

    > **Note:**
    >
    > - In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., [media types and groups](/en-US/docs/Web/CSS/@media), where defined and allowed as values for this attribute, such as `print`, `screen`, `aural`, `braille`.
    >   HTML5 extended this to any kind of [media queries](/en-US/docs/Web/CSS/Media_Queries), which are a superset of the allowed values of HTML 4.
    > - Browsers not supporting [CSS Media Queries](/en-US/docs/Web/CSS/Media_Queries) won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4.

- {{HTMLAttrDef("prefetch")}} {{secureContext_inline}} {{experimental_inline}}
  - : Identifies a resource that might be required by the next navigation and that the user agent should retrieve it.
    This allows the user agent to respond faster when the resource is requested in the future.
- {{HTMLAttrDef("referrerpolicy")}}

  - : A string indicating which referrer to use when fetching the resource:

    - `no-referrer` means that the {{HTTPHeader("Referer")}} header will not be sent.
    - `no-referrer-when-downgrade` means that no {{HTTPHeader("Referer")}} header will be sent when navigating to an origin without TLS (HTTPS).
      This is a user agent's default behavior, if no policy is otherwise specified.
    - `origin` means that the referrer will be the origin of the page, which is roughly the scheme, the host, and the port.
    - `origin-when-cross-origin` means that navigating to other origins will be limited to the scheme, the host, and the port, while navigating on the same origin will include the referrer's path.
    - `unsafe-url` means that the referrer will include the origin and the path (but not the fragment, password, or username).
      This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.

- {{HTMLAttrDef("rel")}}
  - : This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of [link type values](/en-US/docs/Web/HTML/Link_types).
- {{HTMLAttrDef("sizes")}} {{Experimental_Inline}}

  - : This attribute defines the sizes of the icons for visual media contained in the resource.
    It must be present only if the {{HTMLAttrxRef("rel", "link")}} contains a value of `icon` or a non-standard type such as Apple's `apple-touch-icon`.
    It may have the following values:

    - `any`, meaning that the icon can be scaled to any size as it is in a vector format, like `image/svg+xml`.
    - a white-space separated list of sizes, each in the format `<width in pixels>x<height in pixels>` or `<width in pixels>X<height in pixels>`. Each of these sizes must be contained in the resource.

    > **Note:** Most icon formats are only able to store one single icon; therefore most of the time the {{HTMLAttrxRef("sizes")}} attribute contains only one entry.
    > MS's ICO format does, as well as Apple's ICNS. ICO is more ubiquitous, so you should use this format if cross-browser support is a concern (especially for old IE versions).

- {{HTMLAttrDef("title")}}
  - : The `title` attribute has special semantics on the `<link>` element.
    When used on a `<link rel="stylesheet">` it defines a [default or an alternate stylesheet](/en-US/docs/Web/CSS/Alternative_style_sheets).
- {{HTMLAttrDef("type")}}
  - : This attribute is used to define the type of the content linked to.
    The value of the attribute should be a MIME type such as **text/html**, **text/css**, and so on.
    The common use of this attribute is to define the type of stylesheet being referenced (such as **text/css**), but given that CSS is the only stylesheet language used on the web, not only is it possible to omit the `type` attribute, but is actually now recommended practice.
    It is also used on `rel="preload"` link types, to make sure the browser only downloads file types that it supports.

### Non-standard attributes

- {{HTMLAttrDef("methods")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : The value of this attribute provides information about the functions that might be performed on an object.
    The values generally are given by the HTTP protocol when it is used, but it might (for similar reasons as for the **title** attribute) be useful to include advisory information in advance in the link.
    For example, the browser might choose a different rendering of a link as a function of the methods specified;
    something that is searchable might get a different icon, or an outside link might render with an indication of leaving the current site.
    This attribute is not well understood nor supported, even by the defining browser, Internet Explorer 4.
- {{HTMLAttrDef("target")}} {{Deprecated_Inline}}
  - : Defines the frame or window name that has the defined linking relationship or that will show the rendering of any linked resource.

### Obsolete attributes

- {{HTMLAttrDef("charset")}} {{deprecated_inline}}

  - : This attribute defines the character encoding of the linked resource.
    The value is a space- and/or comma-delimited list of character sets as defined in {{rfc(2045)}}.
    The default value is `iso-8859-1`.

    > **Note:** To produce the same effect as this obsolete attribute, use the {{HTTPHeader("Content-Type")}} HTTP header on the linked resource.

- {{HTMLAttrDef("rev")}} {{deprecated_inline}}

  - : The value of this attribute shows the relationship of the current document to the linked document, as defined by the {{HTMLAttrxRef("href", "link")}} attribute.
    The attribute thus defines the reverse relationship compared to the value of the `rel` attribute.
    [Link type values](/en-US/docs/Web/HTML/Link_types) for the attribute are similar to the possible values for {{HTMLAttrxRef("rel", "link")}}.

    > **Note:** Instead of `rev`, you should use the {{HTMLAttrxRef("rel", "link")}} attribute with the opposite [link type value](/en-US/docs/Web/HTML/Link_types).
    > For example, to establish the reverse link for `made`, specify `author`. Also this attribute doesn't stand for "revision" and must not be used with a version number, even though many sites misuse it in this way.

## Examples

### Including a stylesheet

To include a stylesheet in a page, use the following syntax:

```html
<link href="style.css" rel="stylesheet">
```

### Providing alternative stylesheets

You can also specify [alternative style sheets](/en-US/docs/Web/CSS/Alternative_style_sheets).

The user can choose which style sheet to use by choosing it from the **View > Page Style** menu.
This provides a way for users to see multiple versions of a page.

```html
<link href="default.css" rel="stylesheet" title="Default Style">
<link href="fancy.css" rel="alternate stylesheet" title="Fancy">
<link href="basic.css" rel="alternate stylesheet" title="Basic">
```

### Providing icons for different usage contexts

You can include links to several different icons on the same page, and the browser will choose which one works best for its particular context using the `rel` and `sizes` values as hints.

```html
<!-- third-generation iPad with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon144.png">
<!-- iPhone with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon114.png">
<!-- first- and second-generation iPad: -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon72.png">
<!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
<link rel="apple-touch-icon-precomposed" href="favicon57.png">
<!-- basic favicon -->
<link rel="icon" href="favicon32.png">
```

### Conditionally loading resources with media queries

You can provide a media type or query inside a `media` attribute;
this resource will then only be loaded if the media condition is true. For example:

```html
<link href="print.css" rel="stylesheet" media="print">
<link href="mobile.css" rel="stylesheet" media="all">
<link href="desktop.css" rel="stylesheet" media="screen and (min-width: 600px)">
<link href="highres.css" rel="stylesheet" media="screen and (min-resolution: 300dpi)">
```

### Stylesheet load events

You can determine when a style sheet has been loaded by watching for a `load` event to fire on it; similarly, you can detect if an error has occurred while processing a style sheet by watching for an `error` event:

```html
<script>
  const stylesheet = document.querySelector('#my-stylesheet');

  stylesheet.onload = () => {
    // Do something interesting; the sheet has been loaded
  }

  stylesheet.onerror = () => {
    console.log("An error occurred loading the stylesheet!");
  }
</script>

<link rel="stylesheet" href="mystylesheet.css" id="my-stylesheet">
```

> **Note:** The `load` event fires once the stylesheet and all of its imported content has been loaded and parsed, and immediately before the styles start being applied to the content.

### Preload examples

You can find a number of `<link rel="preload">` examples in [Preloading content with `rel="preload"`](/en-US/docs/Web/HTML/Link_types/preload).

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        Metadata content.
        If <code><a href="/en-US/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code> is present:
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">Flow content</a> and
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>.
      </td>
    </tr>
    <tr>
      <th>Permitted content</th>
      <td>None, it is an {{Glossary("empty element")}}.</td>
    </tr>
    <tr>
      <th>Tag omission</th>
      <td>
        As it is a void element, the start tag must be present and the end tag must not be present
      </td>
    </tr>
    <tr>
      <th>Permitted parents</th>
      <td>
        Any element that accepts metadata elements.
        If <a href="/en-US/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> is present: any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>{{ARIARole("link")}} with <code>href</code> attribute</td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th>DOM interface</th>
      <td>{{DOMxRef("HTMLLinkElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Link")}} HTTP header
