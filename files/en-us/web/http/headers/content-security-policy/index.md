---
title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
page-type: http-header
browser-compat: http.headers.Content-Security-Policy
---

{{HTTPSidebar}}

The HTTP **`Content-Security-Policy`** response header allows
website administrators to control resources the user agent is allowed to load for a
given page. With a few exceptions, policies mostly involve specifying server origins and
script endpoints. This helps guard against cross-site scripting attacks
({{Glossary("Cross-site_scripting")}}).

For more information, see the introductory article on [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

where `<policy-directive>` consists of:
`<directive> <value>` with no internal punctuation.

## Directives

### Fetch directives

{{Glossary("Fetch directive","Fetch directives")}} control the locations from which certain resource types may be loaded.

- {{CSP("child-src")}}

  - : Defines the valid sources for [web workers](/en-US/docs/Web/API/Web_Workers_API) and nested browsing contexts loaded using elements such as
    {{HTMLElement("frame")}} and {{HTMLElement("iframe")}}.

    > [!WARNING]
    > Instead of **`child-src`**,
    > if you want to regulate nested browsing contexts and workers,
    > you should use the {{CSP("frame-src")}} and {{CSP("worker-src")}} directives, respectively.

- {{CSP("connect-src")}}
  - : Restricts the URLs which can be loaded using script interfaces.
- {{CSP("default-src")}}
  - : Serves as a fallback for the other {{Glossary("Fetch directive", "fetch directives")}}.
- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : Specifies valid sources for nested browsing contexts loaded into {{HTMLElement("fencedframe")}} elements.
- {{CSP("font-src")}}
  - : Specifies valid sources for fonts loaded using {{cssxref("@font-face")}}.
- {{CSP("frame-src")}}
  - : Specifies valid sources for nested browsing contexts loaded into elements such as
    {{HTMLElement("frame")}} and {{HTMLElement("iframe")}}.
- {{CSP("img-src")}}
  - : Specifies valid sources of images and favicons.
- {{CSP("manifest-src")}}
  - : Specifies valid sources of application manifest files.
- {{CSP("media-src")}}
  - : Specifies valid sources for loading media using the {{HTMLElement("audio")}},
    {{HTMLElement("video")}} and {{HTMLElement("track")}} elements.
- {{CSP("object-src")}}

  - : Specifies valid sources for the {{HTMLElement("object")}} and {{HTMLElement("embed")}} elements.

    > [!NOTE]
    > Elements controlled by `object-src` are perhaps
    > coincidentally considered legacy HTML elements and are not receiving new standardized
    > features (such as the security attributes `sandbox` or `allow`
    > for `<iframe>`). Therefore it is **recommended** to
    > restrict this fetch-directive (e.g., explicitly set `object-src 'none'` if
    > possible).

- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Specifies valid sources to be prefetched or prerendered.
- {{CSP("script-src")}}
  - : Specifies valid sources for JavaScript and WebAssembly resources.
- {{CSP("script-src-elem")}}
  - : Specifies valid sources for JavaScript {{HTMLElement("script")}} elements.
- {{CSP("script-src-attr")}}
  - : Specifies valid sources for JavaScript inline event handlers.
- {{CSP("style-src")}}
  - : Specifies valid sources for stylesheets.
- {{CSP("style-src-elem")}}
  - : Specifies valid sources for stylesheets {{HTMLElement("style")}} elements and
    {{HTMLElement("link")}} elements with `rel="stylesheet"`.
- {{CSP("style-src-attr")}}
  - : Specifies valid sources for inline styles applied to individual DOM elements.
- {{CSP("worker-src")}}
  - : Specifies valid sources for {{domxref("Worker")}}, {{domxref("SharedWorker")}}, or
    {{domxref("ServiceWorker")}} scripts.

### Document directives

Document directives govern the properties of a document or [worker](/en-US/docs/Web/API/Web_Workers_API) environment to which a policy
applies.

- {{CSP("base-uri")}}
  - : Restricts the URLs which can be used in a document's {{HTMLElement("base")}}
    element.
- {{CSP("sandbox")}}
  - : Enables a sandbox for the requested resource similar to the
    {{HTMLElement("iframe")}} [`sandbox`](/en-US/docs/Web/HTML/Element/iframe#sandbox) attribute.

### Navigation directives

Navigation directives govern to which locations a user can navigate or submit a form,
for example.

- {{CSP("form-action")}}
  - : Restricts the URLs which can be used as the target of a form submissions from a
    given context.
- {{CSP("frame-ancestors")}}
  - : Specifies valid parents that may embed a page using {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, or {{HTMLElement("embed")}}.

### Reporting directives

Reporting directives control the destination URL for CSP violation reports in `Content-Security-Policy` and {{HTTPHeader("Content-Security-Policy-Report-Only")}}.

- {{CSP("report-to")}}

  - : Provides the browser with a token identifying the reporting endpoint or group of endpoints to send CSP violation information to.
    The endpoints that the token represents are provided through other HTTP headers, such as {{HTTPHeader("Reporting-Endpoints")}} and {{HTTPHeader("Report-To")}} {{deprecated_inline}}.

    > [!WARNING]
    > This directive is intended to replace [`report-uri`](#report-uri); in browsers that support `report-to`, the `report-uri` directive is ignored.
    > However until `report-to` is broadly supported you should specify both headers as shown (where `endpoint_name` is the name of a separately provided endpoint):
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### Other directives

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : Enforces [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/) at the DOM XSS injection sinks.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Used to specify an allowlist of [Trusted Types](https://w3c.github.io/trusted-types/dist/spec/)
    policies. Trusted Types allows applications to lock down DOM XSS injection sinks to
    only accept non-spoofable, typed values in place of strings.
- {{CSP("upgrade-insecure-requests")}}
  - : Instructs user agents to treat all of a site's insecure URLs (those served over
    HTTP) as though they have been replaced with secure URLs (those served over HTTPS).
    This directive is intended for websites with large numbers of insecure legacy URLs
    that need to be rewritten.

### Deprecated directives

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}

  - : Prevents loading any assets using HTTP when the page is loaded using HTTPS.

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : Provides the browser with a URL where CSP violation reports should be sent.
    This has been superseded by the [`report-to`](#report-to) directive.

## Values

An overview of the allowed values are listed below.
For detailed reference see [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) and the documentation for individual directives.

### Keyword values

- `'none'`
  - : Won't allow loading of any resources.
- `'self'`
  - : Only allow resources from the current origin.
- `'strict-dynamic'`
  - : The trust granted to a script in the page due to an accompanying nonce or hash is extended to the scripts it loads.
- `'report-sample'`
  - : Require a sample of the violating code to be included in the violation report.
- `'inline-speculation-rules'`
  - : Allows the inclusion of [speculation rules](/en-US/docs/Web/API/Speculation_Rules_API) in scripts (see also [`<script type="speculationrules">`](/en-US/docs/Web/HTML/Element/script/type/speculationrules)).

### Unsafe keyword values

- `'unsafe-inline'`
  - : Allow use of inline resources.
- `'unsafe-eval'`
  - : Allow use of dynamic code evaluation such as {{jsxref("Global_Objects/eval", "eval")}}, {{domxref("setTimeout()")}}, and `window.execScript` {{non-standard_inline}}.
- `'unsafe-hashes'`
  - : Allows enabling specific inline event handlers.
- `'wasm-unsafe-eval'`
  - : Allows the loading and execution of WebAssembly modules without the need to also allow unsafe JavaScript execution via `'unsafe-eval'`.
    The single quotes are required.

### Hosts values

- Host

  - Only allow loading of resources from a specific host, with optional scheme, port, and path. For example, `example.com`, `*.example.com`, `https://*.example.com:12/path/to/file.js`.
  - Path parts in the CSP that end in `/` match any path they are a prefix of. For example, `example.com/api/` will match URLs like `example.com/api/users/new`.
  - Other path parts in the CSP are matched exactly; for example, `example.com/file.js` will match `http://example.com/file.js` and `https://example.com/file.js`, but not `https://example.com/file.js/file2.js`.

- Scheme
  - Only allow loading of resources over a specific scheme, should always end with "`:`". For example, `https:`, `http:`, `data:`, etc.

### Other values

- `'nonce-*'`
  - : A cryptographic nonce (only used once) to allow scripts. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial. This is used in conjunction with the [script tag nonce attribute](/en-US/docs/Web/HTML/Element/script#nonce). For example, `nonce-DhcnhD3khTMePgXwdayK9BsMqXjhguVV`.
- `'sha*-*'`
  - : sha256, sha384, or sha512. Followed by a dash and then the sha\* value. For example, `sha256-jzgBGA4UWFFmpOBq0JpdsySukE1FrEN5bUpoK8Z29fY=`.

## CSP in workers

[Workers](/en-US/docs/Web/API/Worker) are in general _not_ governed
by the content security policy of the document (or parent worker) that created them. To
specify a content security policy for the worker, set a
`Content-Security-Policy` response header for the request which requested the
worker script itself.

The exception to this is if the worker script's origin is a globally unique identifier
(for example, if its URL has a scheme of data or blob). In this case, the worker does
inherit the content security policy of the document or worker that created it.

## Multiple content security policies

The CSP mechanism allows multiple policies being specified for a resource, including
via the `Content-Security-Policy` header, the
{{HTTPHeader("Content-Security-Policy-Report-Only")}} header and a
{{HTMLElement("meta")}} element.

You can use the `Content-Security-Policy` header more than once, as in the
example below. Pay special attention to the {{CSP("connect-src")}} directive here. Even
though the second policy would allow the connection, the first policy contains
`connect-src 'none'`. Adding additional policies _can only further
restrict_ the capabilities of the protected resource, which means that there will
be no connection allowed and, as the strictest policy, `connect-src 'none'`
is enforced.

```http
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Examples

### Disable unsafe inline code and only allow HTTPS resources

This HTTP header sets the default policy to only allow resource loading (images, fonts, scripts, etc.) over HTTPS.
Because the `unsafe-inline` and `unsafe-eval` directives are not set, inline scripts will be blocked.

```http
Content-Security-Policy: default-src https:
```

The same restrictions can be applied using the HTML {{htmlelement("meta")}} element.

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### Allow inline code and HTTPS resources, but disable plugins

This policy could be used on a pre-existing site that uses too much inline code to fix, to ensure resources are loaded only over HTTPS and disable plugins:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### Report but don't enforce violations when testing

This example sets the same restrictions as the previous example, but using the {{httpheader("Content-Security-Policy-Report-Only")}} header and the {{CSP("report-to")}} directive.
This approach is used during testing to report violations but not block code from executing.

Endpoints (URLs) to send reports to are defined using the {{HTTPHeader("Reporting-Endpoints")}} HTTP response header.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

A particular endpoint is then selected as the report target in the CSP policy using the {{CSP("report-to")}} directive.

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

Note that the {{CSP("report-uri")}} {{deprecated_inline}} directive is also specified above because `report-to` is not yet broadly supported by browsers.

See [Content Security Policy (CSP) implementation](/en-US/docs/Web/Security/Practical_implementation_guides/CSP) for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Learn about: Content Security Policy](/en-US/docs/Web/HTTP/CSP)
- [Content Security in WebExtensions](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Adopting a strict policy](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Evaluate your
  Content Security Policy
