---
title: Content Security Policy (CSP)
slug: Web/Security/Practical_implementation/CSP
page-type: guide
---

The [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP header provides fine-grained control over where resources on their site can be loaded from.

## Problem

Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) attacks are generally due to a lack of control over, and awareness of, where site resources are being loaded from. This gets more difficult to manage as sites become larger and more complex, and rely more on third-party resources such as JavaScript libraries. 

## Solution

Implementing a robust CSP is the best way to prevent XSS vulnerabilities.

The primary benefit of CSP comes from disabling the use of unsafe inline JavaScript. Inline JavaScript — either reflected or stored — enables improperly-escaped user inputs to generate code that is interpreted by the web browser as JavaScript. By using CSP to disable inline JavaScript, you can eliminate almost all XSS attacks against your site.

Disabling inline JavaScript means that _all_ JavaScript must be loaded from external files via {{htmlelement("script")}} elements with `src` attributes. Inline [event handler attributes](/en-US/docs/Web/HTML/Attributes#event_handler_attributes) such as `onclick` will fail to work, as will JavaScript inserted directly inside `<script>` tags. Furthermore, internal stylesheets (inside {{htmlelement("style")}} tags) and inline styles (using the [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute) will also fail to load.

Care must therefore be taken when designing sites so that CSP causes less problems and becomes easier to implement.

CSP can also be used to provide granular control over loading other resources such as images, video, audio, [web workers](/en-US/docs/Web/API/Web_Workers_API), and embedded (i.e. {{htmlelement("iframe")}}) content.

Due to the difficulty in retrofitting CSP into existing websites, CSP is mandatory for all new websites and is strongly recommended for all existing high-risk sites.

### Steps

> **Note:** Before implementing any actual CSP with the `Content-Security-Policy` header, it is recommended to test it out first with the [`Content-Security-Policy-Report-Only`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only) HTTP header, to see if any violations would have occurred with that policy. This requires usage of `report-to`/`report-uri`, as explained below.

1. Begin by trying out a policy of `default-src https:`. This is a great first goal, as it disables inline code and requires HTTPS, and it will also allow you to start to pinpoint what resources are failing to load as a result of the policy.
2. Next, start to make the policy more specific, in an effort to allow the items you need, while blocking any unwanted items. You could first widen the policy remit with a reasonably locked down policy such as `default-src 'none'; form-action 'self'; img-src 'self'; script-src 'self'; style-src 'self';`.
3. You can then go on to add in specific sources as highlighted during testing, for example `style-src 'self' https://example.com/`.
4. API endpoints should use a policy that disables resource loading and embedding, for example `Content-Security-Policy: default-src 'none'; frame-ancestors 'none'`.
5. For existing websites with large codebases that would require too much work to disable inline scripts, you could fall back to `default-src https: 'unsafe-inline'`. This is still helpful as it keeps resources from being accidentally loaded over HTTP. However, it does not provide any XSS protection.

Notes:

- If yo are unable to use the `Content-Security-Policy` header, pages can instead include a `<meta http-equiv="Content-Security-Policy" content="…">` element. This should be the first {{htmlelement("meta")}} element that appears inside the document {{htmlelement("head")}}.
- Care needs to be taken with `data:` URIs, as these are unsafe inside `script-src` and `object-src` (or `default-src`).
- Similarly, the use of `script-src 'self'` can be unsafe for sites with JSONP endpoints. These sites should use a `script-src` that includes the path to their JavaScript source folder(s).
- Sites should use the [`report-to`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) and [`report-uri`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) directives, which [`POST`](/en-US/docs/Web/HTTP/Methods/POST)s JSON reports about CSP violations to specified endpoints. This allows CSP violations to be caught and repaired quickly.
  > **Note:** `report-to` is preferred over the deprecated `report-uri`, however both are still needed because `report-to` does not yet have full cross-browser support.
- Set the `form-action` directive to `'none'` or `'self'`, or to specific sources which are allowed to be used in forms. This directive does not fall back to `default-src`, therefore, not explicitly setting it allows forms to be submitted to any source.
- Unless sites need the ability to execute plugins, their execution should be disabled with `object-src 'none'`.

## Examples

Disable unsafe inline/eval and only allow loading of resources (images, fonts, scripts, etc.) over HTTPS:

```http
Content-Security-Policy: default-src https:
```

Do the same thing, but with a `<meta>` element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:">
```

Disable the use of unsafe inline/eval and allow everything else except plugin execution:

```http
Content-Security-Policy: default-src *; object-src 'none'
```

Disable unsafe inline/eval and only load resources from same-origin with the exception of images, which can be loaded from `https://i.imgur.com`. This also disables the execution of plugins:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' https://i.imgur.com; object-src 'none'
```

Disable unsafe inline/eval and plugins, only load scripts and stylesheets from same-origin, allow fonts to be loaded from `https://fonts.gstatic.com`, allow image loading from same-origin and `https://i.imgur.com`. Sites should aim for policies like this:

```http
Content-Security-Policy: default-src 'none'; font-src https://fonts.gstatic.com;
			 img-src 'self' https://i.imgur.com; object-src 'none'; script-src 'self'; style-src 'self'
```

On pre-existing sites that use too much inline code to fix, ensure resources are loaded only over HTTP and disable plugins. Note that this does not provide any XSS protection:

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

Don't policy yet; just report violations that would have occurred:

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/; report-to csp-endpoint;

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

- [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [CSP evaluator](https://csp-evaluator.withgoogle.com/)


{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
