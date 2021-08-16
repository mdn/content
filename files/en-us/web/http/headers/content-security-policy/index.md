---
title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
tags:
  - CSP
  - Content Security Policy
  - HTTP
  - Reference
  - Security
  - header
browser-compat: http.headers.csp.Content-Security-Policy
---
{{HTTPSidebar}}

The HTTP **`Content-Security-Policy`** response header allows
web site administrators to control resources the user agent is allowed to load for a
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

```
Content-Security-Policy: <policy-directive>; <policy-directive>
```

where `<policy-directive>` consists of:
`<directive> <value>` with no internal punctuation.

## Directives

### Fetch directives

Fetch directives control the locations from which certain resource types may be loaded.

- {{CSP("child-src")}}

  - : Defines the valid sources for [web
    workers](/en-US/docs/Web/API/Web_Workers_API) and nested browsing contexts loaded using elements such as
    {{HTMLElement("frame")}} and {{HTMLElement("iframe")}}.

    > **Warning:** Instead of **`child-src`**,
    > if you want to regulate nested browsing contexts and workers,
    > you should use the {{CSP("frame-src")}} and {{CSP("worker-src")}} directives, respectively.

- {{CSP("connect-src")}}
  - : Restricts the URLs which can be loaded using script interfaces
- {{CSP("default-src")}}
  - : Serves as a fallback for the other {{Glossary("Fetch directive", "fetch
    directives")}}.
- {{CSP("font-src")}}
  - : Specifies valid sources for fonts loaded using {{cssxref("@font-face")}}.
- {{CSP("frame-src")}}
  - : Specifies valid sources for nested browsing contexts loading using elements such as
    {{HTMLElement("frame")}} and {{HTMLElement("iframe")}}.
- {{CSP("img-src")}}
  - : Specifies valid sources of images and favicons.
- {{CSP("manifest-src")}}
  - : Specifies valid sources of application manifest files.
- {{CSP("media-src")}}
  - : Specifies valid sources for loading media using the {{HTMLElement("audio")}} ,
    {{HTMLElement("video")}} and {{HTMLElement("track")}} elements.
- {{CSP("object-src")}}

  - : Specifies valid sources for the {{HTMLElement("object")}}, {{HTMLElement("embed")}},
    and {{HTMLElement("applet")}} elements.

    > **Note:** Elements controlled by `object-src` are perhaps
    > coincidentally considered legacy HTML elements and are not receiving new standardized
    > features (such as the security attributes `sandbox` or `allow`
    > for `<iframe>`). Therefore it is **recommended** to
    > restrict this fetch-directive (e.g., explicitly set `object-src 'none'` if
    > possible).

- {{CSP("prefetch-src")}}{{experimental_inline}}
  - : Specifies valid sources to be prefetched or prerendered.
- {{CSP("script-src")}}
  - : Specifies valid sources for JavaScript.
- {{CSP("script-src-elem")}}{{experimental_inline}}
  - : Specifies valid sources for JavaScript {{HTMLElement("script")}} elements.
- {{CSP("script-src-attr")}}{{experimental_inline}}
  - : Specifies valid sources for JavaScript inline event handlers.
- {{CSP("style-src")}}
  - : Specifies valid sources for stylesheets.
- {{CSP("style-src-elem")}}{{experimental_inline}}
  - : Specifies valid sources for stylesheets {{HTMLElement("style")}} elements and
    {{HTMLElement("link")}} elements with `rel="stylesheet"`.
- {{CSP("style-src-attr")}}{{experimental_inline}}
  - : Specifies valid sources for inline styles applied to individual DOM elements.
- {{CSP("worker-src")}}{{experimental_inline}}
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
    {{HTMLElement("iframe")}} {{htmlattrxref("sandbox", "iframe")}} attribute.

### Navigation directives

Navigation directives govern to which locations a user can navigate or submit a form,
for example.

- {{CSP("form-action")}}
  - : Restricts the URLs which can be used as the target of a form submissions from a
    given context.
- {{CSP("frame-ancestors")}}
  - : Specifies valid parents that may embed a page using {{HTMLElement("frame")}},
    {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}}, or
    {{HTMLElement("applet")}}.
- {{CSP("navigate-to")}}{{experimental_inline}}
  - : Restricts the URLs to which a document can initiate navigation by any means,
    including {{HTMLElement("form")}} (if {{CSP("form-action")}} is not specified),
    {{HTMLElement("a")}}, {{DOMxRef("window.location")}}, {{DOMxRef("window.open")}}, etc.

### Reporting directives

Reporting directives control the reporting process of CSP violations. See also the
{{HTTPHeader("Content-Security-Policy-Report-Only")}} header.

- {{CSP("report-uri")}}{{deprecated_inline}}

  - : Instructs the user agent to report attempts to violate the Content Security Policy.
    These violation reports consist of {{Glossary("JSON")}} documents sent via an HTTP
    `POST` request to the specified URI.

    > **Warning:** Though the {{CSP("report-to")}} directive is intended
    > to replace the deprecated **`report-uri`** directive,
    > {{CSP("report-to")}} is not supported in most browsers yet.
    > So for compatibility with current browsers
    > while also adding forward compatibility when browsers get {{CSP("report-to")}} support,
    > you can specify both **`report-uri`** and {{CSP("report-to")}}:
    >
    > ```html
        > Content-Security-Policy: ...; report-uri https://endpoint.example.com; report-to groupname
        > ```
    >
    > In browsers that support {{CSP("report-to")}},
    > the **`report-uri`** directive will be ignored.

- {{CSP("report-to")}}{{experimental_inline}}
  - : Fires a `SecurityPolicyViolationEvent`.

### Other directives

- {{CSP("require-sri-for")}}{{experimental_inline}}
  - : Requires the use of {{Glossary("SRI")}} for scripts or styles on the page.
- {{CSP("require-trusted-types-for")}}{{experimental_inline}}
  - : Enforces [Trusted
    Types](https://w3c.github.io/webappsec-trusted-types/dist/spec/) at the DOM XSS injection sinks.
- {{CSP("trusted-types")}}{{experimental_inline}}
  - : Used to specify an allow-list of [Trusted Types](https://w3c.github.io/webappsec-trusted-types/dist/spec/)
    policies. Trusted Types allows applications to lock down DOM XSS injection sinks to
    only accept non-spoofable, typed values in place of strings.
- {{CSP("upgrade-insecure-requests")}}
  - : Instructs user agents to treat all of a site's insecure URLs (those served over
    HTTP) as though they have been replaced with secure URLs (those served over HTTPS).
    This directive is intended for web sites with large numbers of insecure legacy URLs
    that need to be rewritten.

### Deprecated directives

- {{CSP("block-all-mixed-content")}}{{deprecated_inline}}
  - : Prevents loading any assets using HTTP when the page is loaded using HTTPS.
- {{CSP("plugin-types")}}{{deprecated_inline}}
  - : Restricts the set of plugins that can be embedded into a document by limiting the
    types of resources which can be loaded.
- {{CSP("referrer")}}{{deprecated_inline}}{{non-standard_inline}}
  - : Used to specify information in the [Referer](/en-US/docs/Web/HTTP/Headers/Referer) (sic) header for links away
    from a page. Use the {{HTTPHeader("Referrer-Policy")}} header instead.

## Values

### Keyword values

- `none`
  - : Won't allow loading of any resources.
- `self`
  - : Only allow resources from the current origin.
- `strict-dynamic` {{experimental_inline}}
  - : TBD
- `report-sample` {{experimental_inline}}
  - : TBD

### Unsafe keyword values

- `unsafe-inline`
  - : Allow use of inline resources.
- `unsafe-eval`
  - : Allow use of dynamic code evaluation such as {{jsxref("Global_Objects/eval", "eval")}}, {{domxref("Window.setImmediate", "setImmediate")}}{{non-standard_inline}}, and `window.execScript` {{non-standard_inline}}.
- `unsafe-hashes` {{experimental_inline}}
  - : TBD
- `unsafe-allow-redirects` {{experimental_inline}}
  - : TBD

### Hosts values

- Host
  - : Only allow loading of resources from a specific host, with optional scheme, port, and path. e.g. `example.com`, `*.example.com`, `https://*.example.com:12/path/to/file.js`
- Scheme:
  - : Only allow loading of resources over a specific scheme, should always end with "`:`". e.g. `https:`, `http:`, `data:` etc.

### Other values

- nonce-\*
  - : A cryptographic nonce (only used once) to whitelist scripts. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial. This is used in conjunction with the [script tag nonce attribute](/en-US/docs/Web/HTML/Element/script#attr-nonce). e.g. `nonce-DhcnhD3khTMePgXwdayK9BsMqXjhguVV`
- sha\*-\*
  - : sha256, sha384, or sha512. followed by a dash and then the sha\* value. e.g. `sha256-jzgBGA4UWFFmpOBq0JpdsySukE1FrEN5bUpoK8Z29fY=`

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

```
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Examples

Example: Disable unsafe inline/eval, only allow loading of resources (images, fonts,
scripts, etc.) over https:

### Using the HTTP header

```
Content-Security-Policy: default-src https:
```

### Using the HTML meta element

```
<meta http-equiv="Content-Security-Policy" content="default-src https:">
```

Example: Pre-existing site that uses too much inline code to fix but wants to ensure
resources are loaded only over HTTPS and to disable plugins:

```
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

Example: Do not implement the above policy yet; instead just report violations that
would have occurred:

```
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
```

See [Mozilla
Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security#Examples_5) for more examples.

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
