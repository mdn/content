---
title: Content Security Policy (CSP) implementation
slug: Web/Security/Practical_implementation_guides/CSP
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

The [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP header provides fine-grained control over the locations from which resources on a site can be loaded.

## Problem

The main problem this article focuses on is Cross-site scripting ({{Glossary("Cross-site_scripting", "XSS")}}) attacks. These are generally due to a lack of control and awareness of the sources from which site resources are loaded. This problem gets more difficult to manage as sites become larger and more complex and increasingly rely on third-party resources such as JavaScript libraries.

CSP can also help to fix other problems, which are covered in other articles:

- [Preventing clickjacking](/en-US/docs/Web/Security/Practical_implementation_guides/Clickjacking) by stopping your site being embedded into {{htmlelement("iframe")}} elements. This is done using the CSP [`frame-ancestors`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) directive.
- Preventing [manipulator-in-the-middle](/en-US/docs/Glossary/MitM) (MiTM) attacks by upgrading any HTTP connections to HTTPS. This is helped by the CSP [`upgrade-insecure-requests`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) directive. See [HSTS implementation](/en-US/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) for more details.

## Solution

Implementing a robust CSP is the best way to prevent XSS vulnerabilities.

The primary benefit of CSP comes from disabling the use of unsafe inline JavaScript. Inline JavaScript, whether reflected or stored, enables improperly-escaped user inputs to generate code that is interpreted by the web browser as JavaScript. By using CSP to disable inline JavaScript, you can eliminate almost all XSS attacks against your site.

Disabling inline JavaScript means that _all_ JavaScript must be loaded from external files via {{htmlelement("script")}} elements with `src` attributes. Inline [event handler attributes](/en-US/docs/Web/HTML/Attributes#event_handler_attributes), such as `onclick`, and JavaScript inserted directly inside `<script>` tags will fail to work. Furthermore, CSP can also disable internal stylesheets (inside {{htmlelement("style")}} tags) and inline styles (using the [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute).

Therefore, design websites carefully to ensure that CSP causes less problems and becomes easier to implement.

CSP can also be used to provide granular control over:

- Loading other resources such as images, video, and audio ([fetch directives](/en-US/docs/Glossary/Fetch_directive) control resource loading).
- [Web workers](/en-US/docs/Web/API/Web_Workers_API) (via [document directives](/en-US/docs/Glossary/Document_directive)).
- Embedded (i.e., {{htmlelement("iframe")}}) content.
- Navigation / form submission destinations (via [navigation directives](/en-US/docs/Glossary/Navigation_directive)).

### Steps for implementing CSP

> **Note:** Before implementing any actual CSP with the `Content-Security-Policy` header, you are advised to first test it out using the [`Content-Security-Policy-Report-Only`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only) HTTP header. This allows you to see if any violations would have occurred with that policy. This test requires the use of `report-to`/`report-uri`, as explained below.

1. Begin by trying out a policy of `default-src https:`. This is a great first goal because it disables inline code and requires browsers to use HTTPS when loading resources. It will also allow you to start to pinpoint the resources that are failing to load as a result of the policy. [`default-src`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src) serves as a fallback for the other CSP fetch directives.
2. Next, start to make the policy more specific, to allow the items you need, while blocking any unwanted items. You could first widen the policy remit with a reasonably locked-down policy such as `default-src 'none'; form-action 'self'; img-src 'self'; object-src 'none'; script-src 'self'; style-src 'self';`.
3. You can then go on to add specific sources as highlighted during testing; for example, `style-src 'self' https://example.com/`.
4. API endpoints should use a policy that disables resource loading and embedding; for example, `Content-Security-Policy: default-src 'none'; frame-ancestors 'none'`.
5. For existing websites with large codebases that would require too much work to disable inline scripts, you can use some of the CSP features designed to ease adoption on legacy sites. For example, the [`nonce-*`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#nonce-) directive requires that a `<script>` specifies the same nonce in its [`nonce`](/en-US/docs/Web/HTML/Element/script#nonce) attribute for loading to succeed, whereas the [`script-dynamic`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#strict-dynamic) directive extends the trust due to an accompanying nonce to other scripts that the top-level script loads.

Keep the following points in mind:

- If you are unable to use the `Content-Security-Policy` header, pages can instead include a [`<meta http-equiv="Content-Security-Policy" content="…">`](/en-US/docs/Web/HTML/Element/meta#http-equiv) element. This should be the first {{htmlelement("meta")}} element that appears inside the document {{htmlelement("head")}}.
- Care needs to be taken with `data:` URIs because these are unsafe inside `script-src` and `object-src` (or `default-src`).
- Similarly, the use of `script-src 'self'` can be unsafe for sites with JSONP endpoints. These sites should use a `script-src` that includes the path to their JavaScript source folder(s).
- Sites should use the [`report-to`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) and [`report-uri`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) [reporting directives](/en-US/docs/Glossary/Reporting_directive). These cause the browser to [`POST`](/en-US/docs/Web/HTTP/Methods/POST) JSON reports about CSP violations to endpoints (specified in the [`Reporting-Endpoints`](/en-US/docs/Web/HTTP/Headers/Reporting-Endpoints) header in the case of `report-to`). This allows CSP violations to be caught and repaired quickly.
  > **Note:** `report-to` is preferred over the deprecated `report-uri`; however, both are still needed because `report-to` does not yet have full cross-browser support.
- Don't include any unsafe sources inside your CSP. Examples include `unsafe-inline` or `data:` URIs inside `script-src` and overly broad sources or form submission targets.
- Unless sites need the ability to execute plugins, their execution should be disabled with `object-src 'none'`.
- If you are embedding SVG sprites defined in external files via the [`<use>`](/en-US/docs/Web/SVG/Element/use) element, for example:

  ```svg
  <svg>
    <use href="/images/icons.svg#icon"/>
  </svg>
  ```

  your SVG images will be blocked in Firefox if you have a `default-src 'none'` policy set. Firefox does not treat the SVG as an embedded image like other browsers do, therefore `img-src 'self'` will not allow them to be loaded. You need to use `default-src 'self'` if you want your external sprites to load in Firefox (see [bug 1773976](https://bugzilla.mozilla.org/show_bug.cgi?id=1773976) and [this CSP spec issue](https://github.com/w3c/webappsec-csp/issues/199) for more information).

  Alternatively, if the `default-src 'none'` policy is a hard requirement, you can include the SVG sprites inline in the HTML page — see [CSP: default-src](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#firefox_default-src_none_svg_sprite_blocking_issue) for an example.

## Examples

Disable unsafe inline/eval and only allow loading of resources (images, fonts, scripts, etc.) over HTTPS:

```http
Content-Security-Policy: default-src https:
```

Do the same thing, but with a `<meta>` element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

Disable the use of unsafe inline/eval and allow everything else except plugin execution:

```http
Content-Security-Policy: default-src *; object-src 'none'
```

Disable unsafe inline/eval and only load resources from same-origin with the exception of images, which can be loaded from `https://i.imgur.com`. This also disables the execution of plugins:

```http-nolint
Content-Security-Policy: default-src 'self'; img-src 'self' https://i.imgur.com;
  object-src 'none'
```

Disable unsafe inline/eval scripts and plugins, load only scripts and stylesheets from same-origin, allow fonts to be loaded from `https://fonts.gstatic.com`, and allow image loading from same-origin and `https://i.imgur.com`. Sites should aim for policies like this:

```http-nolint
Content-Security-Policy: default-src 'none'; font-src https://fonts.gstatic.com;
  img-src 'self' https://i.imgur.com; object-src 'none'; script-src 'self';
  style-src 'self'
```

Allow legacy sites to load scripts safely, with an increase level of trust provided by a nonce:

```html
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-2726c7f26c'
```

Don't implement the policy yet; only report the violations that would have occurred:

```http-nolint
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-violation-report-endpoint/;
  report-to csp-endpoint;

Report-To: { "group": "csp-endpoint",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/csp-reports" }
              ]
           }
```

Disable resource loading and embedding. APIs should use a policy like this:

```http
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
```

## See also

- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
- [CSP evaluator](https://csp-evaluator.withgoogle.com/)
