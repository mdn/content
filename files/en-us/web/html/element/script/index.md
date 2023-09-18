---
title: "<script>: The Script element"
slug: Web/HTML/Element/script
page-type: html-element
browser-compat: html.elements.script
---

{{HTMLSidebar}}

The **`<script>`** [HTML](/en-US/docs/Web/HTML) element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The `<script>` element can also be used with other languages, such as [WebGL](/en-US/docs/Web/API/WebGL_API)'s GLSL shader programming language and [JSON](/en-US/docs/Glossary/JSON).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#metadata_content">Metadata content</a>,
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content">Phrasing content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>Dynamic script such as <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts <a href="/en-US/docs/Web/HTML/Content_categories#metadata_content">metadata content</a>,
        or any element that accepts <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content">phrasing content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">No corresponding role</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLScriptElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `async`

  - : For classic scripts, if the `async` attribute is present, then the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.

    For [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules), if the `async` attribute is present then the scripts and all their dependencies will be executed in the defer queue, therefore they will get fetched in parallel to parsing and evaluated as soon as they are available.

    This attribute allows the elimination of **parser-blocking JavaScript** where the browser would have to load and evaluate scripts before continuing to parse. `defer` has a similar effect in this case.

    This is a boolean attribute: the presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.

    See [Browser compatibility](#browser_compatibility) for notes on browser support. See also [Async scripts for asm.js](/en-US/docs/Games/Techniques/Async_scripts).

- `crossorigin`
  - : Normal `script` elements pass minimal information to the {{domxref('Window.error_event', 'window.onerror')}} for scripts which do not pass the standard {{Glossary("CORS")}} checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See [CORS settings attributes](/en-US/docs/Web/HTML/Attributes/crossorigin) for a more descriptive explanation of its valid arguments.
- `defer`

  - : This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}.

    Scripts with the `defer` attribute will prevent the `DOMContentLoaded` event from firing until the script has loaded and finished evaluating.

    > **Warning:** This attribute must not be used if the `src` attribute is absent (i.e. for inline scripts), in this case it would have no effect.
    >
    > The `defer` attribute has no effect on [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules) — they defer by default.

    Scripts with the `defer` attribute will execute in the order in which they appear in the document.

    This attribute allows the elimination of **parser-blocking JavaScript** where the browser would have to load and evaluate scripts before continuing to parse. `async` has a similar effect in this case.

- `fetchpriority` {{Experimental_Inline}}

  - : Provides a hint of the relative priority to use when fetching an external script. Allowed values:

    - `high`
      - : Signals a high-priority fetch relative to other external scripts.
    - `low`
      - : Signals a low-priority fetch relative to other external scripts.
    - `auto`
      - : Default: Signals automatic determination of fetch priority relative to other external scripts.

- `integrity`
  - : This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity).
- `nomodule`
  - : This Boolean attribute is set to indicate that the script should not be executed in browsers that support [ES modules](/en-US/docs/Web/JavaScript/Guide/Modules) — in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code.
- `nonce`
  - : A cryptographic nonce (number used once) to allow scripts in a [script-src Content-Security-Policy](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.
- `referrerpolicy`

  - : Indicates which [referrer](/en-US/docs/Web/API/Document/referrer) to send when fetching the script, or resources fetched by the script:

    - `no-referrer`: The {{HTTPHeader("Referer")}} header will not be sent.
    - `no-referrer-when-downgrade`: The {{HTTPHeader("Referer")}} header will not be sent to {{Glossary("origin")}}s without {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host")}}, and {{Glossary("port")}}.
    - `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
    - `same-origin`: A referrer will be sent for {{Glossary("Same-origin policy", "same origin")}}, but cross-origin requests will contain no referrer information.
    - `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
    - `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](/en-US/docs/Web/API/HTMLAnchorElement/hash), [password](/en-US/docs/Web/API/HTMLAnchorElement/password), or [username](/en-US/docs/Web/API/HTMLAnchorElement/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.

    > **Note:** An empty string value (`""`) is both the default value, and a fallback value if `referrerpolicy` is not supported. If `referrerpolicy` is not explicitly specified on the `<script>` element, it will adopt a higher-level referrer policy, i.e. one set on the whole document or domain. If a higher-level policy is not available, the empty string is treated as being equivalent to `strict-origin-when-cross-origin`.

- `src`
  - : This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.
- [**`type`**](/en-US/docs/Web/HTML/Element/script/type)

  - : This attribute indicates the type of script represented.
    The value of this attribute will be one of the following:

    - **Attribute is not set (default), an empty string, or a JavaScript MIME type**
      - : Indicates that the script is a "classic script", containing JavaScript code.
        Authors are encouraged to omit the attribute if the script refers to JavaScript code rather than specify a MIME type.
        JavaScript MIME types are [listed in the IANA media types specification](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript).
    - `module`
      - : This value causes the code to be treated as a JavaScript module.
        The processing of the script contents is deferred.
        The `charset` and `defer` attributes have no effect.
        For information on using `module`, see our [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) guide.
        Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.
    - [`importmap`](/en-US/docs/Web/HTML/Element/script/type/importmap)
      - : This value indicates that the body of the element contains an import map.
        The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps).
    - **Any other value**
      - : The embedded content is treated as a data block, and won't be processed by the browser.
        Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks.
        All of the other attributes will be ignored, including the `src` attribute.

- `blocking` {{Experimental_Inline}}
  - : This attribute explicitly indicates that certain operations should be blocked on the fetching of the script. The operations that are to be blocked must be a space-separated list of blocking attributes listed below.
    - `render`: The rendering of content on the screen is blocked.

### Deprecated attributes

- `charset` {{Deprecated_inline}}
  - : If present, its value must be an {{Glossary("ASCII")}} case-insensitive match for "`utf-8`". It's unnecessary to specify the `charset` attribute, because documents must use UTF-8, and the `script` element inherits its character encoding from the document.
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Like the `type` attribute, this attribute identifies the scripting language in use. Unlike the `type` attribute, however, this attribute's possible values were never standardized. The `type` attribute should be used instead.

## Notes

Scripts without [`async`](#async), [`defer`](#defer) or `type="module"` attributes, as well as inline scripts without the `type="module"` attribute, are fetched and executed immediately before the browser continues to parse the page.

The script should be served with the `text/javascript` MIME type, but browsers are lenient and only block them if the script is served with an image type (`image/*`), a video type (`video/*`), an audio type (`audio/*`), or `text/csv`.
If the script is blocked, an {{domxref("HTMLElement/error_event", "error")}} event is sent to the element; otherwise, a {{domxref("HTMLElement/load_event", "load")}} event is sent.

## Examples

### Basic usage

These examples show how to import (an external) script using the `<script>` element.

```html
<script src="javascript.js"></script>
```

And the following examples show how to put (an inline) script inside the `<script>` element.

```html
<script>
  alert("Hello World!");
</script>
```

### Module fallback

Browsers that support the `module` value for the [`type`](#type) attribute ignore any script with a `nomodule` attribute. That enables you to use module scripts while providing `nomodule`-marked fallback scripts for non-supporting browsers.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Importing modules with importmap

When importing modules in scripts, if you don't use the [`type=importmap`](#importmap) feature, then each module must be imported using a module specifier that is either an absolute or relative URL.
In the example below, the first module specifier ("./shapes/square.js") resolves relative to the base URL of the document, while the second is an absolute URL.

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

An import map allows you to provide a mapping that, if matched, can replace the text in the module specifier.
The import map below defines keys `square` and `circle` that can be used as aliases for the module specifiers shown above.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js",
      "circle": "https://example.com/shapes/circle.js"
    }
  }
</script>
```

This allows us to import modules using names in the module specifier (rather than absolute or relative URLs).

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

For more examples of what you can do with import maps, see the [Importing modules using import maps](/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) section in the JavaScript modules guide.

### Embedding data in HTML

You can also use the `<script>` element to embed data in HTML with server-side rendering by specifying a valid non-JavaScript MIME type in the `type` attribute.

```html
<!-- Generated by the server -->
<script id="data" type="application/json">
  {
    "userId": 1234,
    "userName": "Maria Cruz",
    "memberSince": "2000-01-01T00:00:00.000Z"
  }
</script>

<!-- Static -->
<script>
  const userInfo = JSON.parse(document.getElementById("data").text);
  console.log("User information: %o", userInfo);
</script>
```

### Blocking rendering till a script is fetched and executed

You can include `render` token inside a `blocking` attribute;
the rendering of the page will be blocked till the script is fetched and executed. In the example below, we block rendering on an async script,
so that the script doesn't block parsing but is guaranteed to be evaluated before rendering starts.

```html
<script blocking="render" async src="async-script.js"></script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.currentScript")}}
- [Flavio Copes' article on loading JavaScript efficiently and explaining the differences between `async` and `defer`](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) guide
