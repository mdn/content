---
title: Content-Security-Policy (CSP)
short-title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
page-type: http-header
browser-compat: http.headers.Content-Security-Policy
---

{{HTTPSidebar}}

The HTTP **`Content-Security-Policy`** response header allows website administrators to control resources the user agent is allowed to load for a given page. With a few exceptions, policies mostly involve specifying server origins and script endpoints.
This helps guard against {{Glossary("cross-site scripting")}} attacks.

See the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) guide for details about how a CSP is delivered to the browser, what it looks like, along with use cases and deployment strategies.

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

Fetch directives control the locations from which certain resource types may be loaded.

- {{CSP("child-src")}}

  - : Defines the valid sources for [web workers](/en-US/docs/Web/API/Web_Workers_API) and nested browsing contexts loaded using elements such as
    {{HTMLElement("frame")}} and {{HTMLElement("iframe")}}.

    [Fallback](#fallbacks) for `frame-src` and `worker-src`.

- {{CSP("connect-src")}}
  - : Restricts the URLs which can be loaded using script interfaces.
- {{CSP("default-src")}}

  - : Serves as a fallback for the other {{Glossary("Fetch directive", "fetch directives")}}.

    [Fallback](#fallbacks) for all other fetch directives.

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
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Specifies valid sources to be prefetched or prerendered.
- {{CSP("script-src")}}

  - : Specifies valid sources for JavaScript and WebAssembly resources.

    [Fallback](#fallbacks) for `script-src-elem` and `script-src-attr`.

- {{CSP("script-src-elem")}}
  - : Specifies valid sources for JavaScript {{HTMLElement("script")}} elements.
- {{CSP("script-src-attr")}}
  - : Specifies valid sources for JavaScript inline event handlers.
- {{CSP("style-src")}}

  - : Specifies valid sources for stylesheets.

    [Fallback](#fallbacks) for `style-src-elem` and `style-src-attr`.

- {{CSP("style-src-elem")}}
  - : Specifies valid sources for stylesheets {{HTMLElement("style")}} elements and
    {{HTMLElement("link")}} elements with `rel="stylesheet"`.
- {{CSP("style-src-attr")}}
  - : Specifies valid sources for inline styles applied to individual DOM elements.
- {{CSP("worker-src")}}
  - : Specifies valid sources for {{domxref("Worker")}}, {{domxref("SharedWorker")}}, or
    {{domxref("ServiceWorker")}} scripts.

All fetch directives may be specified the single value `'none'`, indicating that the specific resource type should be completely blocked, or as one or more _source expression_ values, indicating valid sources for that resource type. See [Fetch directive syntax](#fetch_directive_syntax) for more details.

#### Fallbacks

Some fetch directives function as fallbacks for other more granular directives. This means that if the more granular directive is not specified, then the fallback is used to provide a policy for that resource type.

- `default-src` is a fallback for all other fetch directives.
- `script-src` is a fallback for `script-src-attr` and `script-src-elem`.
- `style-src` is a fallback for `style-src-attr` and `style-src-elem`.
- `child-src` is a fallback for `frame-src` and `worker-src`.

For example:

- If `img-src` is omitted but `default-src` is included, then the policy defined by `default-src` will be applied to images.
- If `script-src-elem` is omitted but `script-src` is included, then the policy defined by `script-src` will be applied to `<script>` elements.
- If `script-src-elem` and `script-src` are both omitted, but `default-src` is included, then the policy defined by `default-src` will be applied to `<script>` elements.

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
  - : Enforces [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) at the DOM XSS injection sinks.
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Used to specify an allowlist of [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) policies.
    Trusted Types allows applications to lock down DOM XSS injection sinks to only accept non-spoofable, typed values in place of strings.
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

## Fetch directive syntax

All fetch directives may be specified as one of the following:

- the single value `'none'`, indicating that the specific resource type should be completely blocked
- one or more _source expression_ values, indicating valid sources for that resource type.

Each source expression takes one of the forms listed below. Note that not all forms are applicable to all fetch directives: see the documentation for each fetch directive to find out which forms are applicable to it.

The `<host-source>` and `<scheme-source>` formats must be unquoted, and all other formats must be enclosed in single quotes.

### 'nonce-\<nonce_value>'

This value consists of the string `nonce-` followed by a {{glossary("Base64", "base64-encoded")}} string. This string is a random value that the server generates for every HTTP response. For example:

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

The server can then include the same value as the value of the `nonce` attribute of any {{htmlelement("script")}} or {{htmlelement("style")}} resources that they intend to load from the document.

The browser compares the value from the CSP directive against the value in the element attribute, and loads the resource only if they match.

If a directive contains a nonce and `unsafe-inline`, then the browser ignores `unsafe-inline`.

See [Nonces](/en-US/docs/Web/HTTP/CSP#nonces) in the CSP guide for more usage information.

> [!NOTE]
> Nonce source expressions are only applicable to {{htmlelement("script")}} and {{htmlelement("style")}} elements.

### '\<hash_algorithm>-<hash_value>'

This value consists of a string identifying a hash algorithm, followed by `-`, followed by a {{glossary("Base64", "base64-encoded")}} string representing the hash value.

- The hash algorithm identifier must be one of `sha256`, `sha384`, or `sha512`.
- The hash value is the base64-encoded {{glossary("Cryptographic_hash_function", "hash")}} of a `<script>` or `<style>` resource, calculated using one of the following hash functions: SHA-256, SHA-384, or SHA-512.

For example:

```plain
'sha256-cd9827ad...'
```

When the browser receives the document, it hashes the contents of any `<script>` and `<style>` elements, compares the result with any hashes in the CSP directive, and loads the resource only if there is a match.

If the element loads an external resource (for example, using the [`src`](/en-US/docs/Web/HTML/Element/script#src) attribute), then the element must also have the [`integrity`](/en-US/docs/Web/HTML/Element/script#integrity) attribute set.

If a directive contains a hash and `unsafe-inline`, then the browser ignores `unsafe-inline`.

See [Hashes](/en-US/docs/Web/HTTP/CSP#hashes) in the CSP guide for more usage information.

> [!NOTE]
> Hash source expressions are only applicable to {{htmlelement("script")}} and {{htmlelement("style")}} elements.

### \<host-source>

The [URL](/en-US/docs/Web/URI) or IP address of a {{glossary("host")}} that is a valid source for the resource.

The scheme, port number, and path are optional.

If the scheme is omitted, the scheme of the document's origin is used.

When matching schemes, secure upgrades are allowed. For example:

- `http://example.com` will also permit resources from `https://example.com`
- `ws://example.org` will also permit resources from `wss://example.org`.

Wildcards (`'*'`) can be used for subdomains, host address, and port number, indicating that all legal values of each are valid. For example:

- `http://*.example.com` permits resources from any subdomain of `example.com`, over HTTP or HTTPS.

Paths that end in `/` match any path they are a prefix of. For example:

- `example.com/api/` will permit resources from `example.com/api/users/new`.

Paths that do not end in `/` are matched exactly. For example:

- `https://example.com/file.js` permits resources from `https://example.com/file.js` but not `https://example.com/file.js/file2.js`.

### \<scheme-source>

A [scheme](/en-US/docs/Web/URI/Reference/Schemes), such as `https:`. The colon is required.

Secure upgrades are allowed, so:

- `http:` will also permit resources loaded using HTTPS
- `ws:` will also permit resources loaded using WSS.

### 'self'

Resources of the given type may only be loaded from the same {{glossary("origin")}} as the document.

Secure upgrades are allowed. For example:

- If the document is served from `http://example.com`, then a CSP of `'self'` will also permit resources from `https://example.com`.
- If the document is served from `ws://example.org`, then a CSP of `'self'` will also permit resources from `wss://example.org`.

### 'unsafe-eval'

By default, if a CSP contains a `default-src` or a `script-src` directive, then JavaScript functions which evaluate their arguments as JavaScript are disabled. This includes [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval), the [`code`](/en-US/docs/Web/API/Window/setTimeout#code) argument to {{domxref("Window.setTimeout()", "setTimeout()")}}, or the {{jsxref("Function/Function()", "Function()")}} constructor.

The `unsafe-eval` keyword can be used to undo this protection, allowing dynamic evaluation of strings as JavaScript.

> [!WARNING]
> Developers should avoid `'unsafe-eval'`, because it defeats much of the purpose of having a CSP.

See [`eval()` and similar APIs](/en-US/docs/Web/HTTP/CSP#eval_and_similar_apis) in the CSP guide for more usage information.

### 'wasm-unsafe-eval'

By default, if a CSP contains a `default-src` or a `script-src` directive, then a page won't be allowed to compile WebAssembly using functions like [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static).

The `wasm-unsafe-eval` keyword can be used to undo this protection. This is a much safer alternative to `'unsafe-eval'`, since it does not enable general evaluation of JavaScript.

### 'unsafe-inline'

By default, if a CSP contains a `default-src` or a `script-src` directive, then inline JavaScript is not allowed to execute. This includes:

- inline `<script>` tags
- inline event handler attributes
- `javascript:` URLs.

Similarly, if a CSP contains `default-src` or a `style-src` directive, then inline CSS will not be loaded, including:

- inline `<style>` tags
- {{domxref("HTMLElement.style", "style")}} attributes.

The `unsafe-inline` keyword can be used to undo this protection, allowing all these forms to be loaded.

> [!WARNING]
> Developers should avoid `'unsafe-inline'`, because it defeats much of the purpose of having a CSP.

See [Inline JavaScript](/en-US/docs/Web/HTTP/CSP#inline_javascript) in the CSP guide for more usage information.

### 'unsafe-hashes'

By default, if a CSP contains a `default-src` or a `script-src` directive, then inline event handler attributes like `onclick` and inline `style` attributes are not allowed to execute.

The `'unsafe-hashes'` expression allows the browser to use [hash expressions](#hash_algorithm-hash_value) for inline event handlers and `style` attributes. For example, a CSP might contain a directive like this:

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

If the hash value matches the hash of an inline event handler attribute value or of a `style` attribute value, then the code will be allowed to execute.

> [!WARNING]
> The `'unsafe-hashes'` value is unsafe.
>
> In particular, it enables an attack in which the content of the inline event handler attribute is injected into the document as an inline `<script>` element. Suppose the inline event handler is:
>
> ```html
> <button onclick="transferAllMyMoney()">Transfer all my money</button>
> ```
>
> If an attacker can inject an inline `<script>` element containing this code, the CSP will allow it to execute automatically.
>
> However, `'unsafe-hashes'` is much safer than `'unsafe-inline'`.

### 'inline-speculation-rules'

By default, if a CSP contains a `default-src` or a `script-src` directive, then inline JavaScript is not allowed to execute. The `'inline-speculation-rules'` allows the browser to load inline `<script>` elements that have a [`type`](/en-US/docs/Web/HTML/Element/script/type) attribute of [`speculationrules`](/en-US/docs/Web/HTML/Element/script/type/speculationrules).

See the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) for more information.

### 'strict-dynamic'

The `'strict-dynamic'` keyword makes the trust conferred on a script by a [nonce](#nonce-nonce_value) or a [hash](#hash_algorithm-hash_value) extend to scripts that this script dynamically loads, for example by creating new `<script>` tags using {{domxref("Document.createElement()")}} and then inserting them into the document using {{domxref("Node.appendChild()")}}.

If this keyword is present in a directive, then the following source expression values are all ignored:

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

See [The `strict-dynamic` keyword](/en-US/docs/Web/HTTP/CSP#the_strict-dynamic_keyword) in the CSP guide for more usage information.

### 'report-sample'

If this expression is included in a directive controlling scripts or styles, and the directive causes the browser to block any inline scripts, inline styles, or event handler attributes, then the [violation report](/en-US/docs/Web/HTTP/CSP#violation_reporting) that the browser generates will contain a {{domxref("CSPViolationReportBody.sample", "sample")}} property containing the first 40 characters of the blocked resource.

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
