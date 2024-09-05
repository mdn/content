---
title: Content Security Policy (CSP)
slug: Web/HTTP/CSP
page-type: guide
browser-compat: http.headers.Content-Security-Policy
---

{{HTTPSidebar}}

**Content Security Policy** ({{Glossary("CSP")}}) is an added layer of security that helps to detect and mitigate certain types of attacks,
including Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) and data injection attacks.
These attacks are used for everything from data theft, to site defacement, to malware distribution.

CSP is designed to be fully backward compatible (except CSP version 2 where there are some explicitly-mentioned inconsistencies in backward compatibility; more details [here](https://www.w3.org/TR/CSP2/) section 1.1).
Browsers that don't support it still work with servers that implement it, and vice versa. Browsers that don't support CSP ignore it, functioning as usual; they will only apply the protections of the standard [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) without the further restrictions that the CSP would add.

To enable CSP, you need to configure your web server to return the {{HTTPHeader("Content-Security-Policy")}} HTTP header.
(Sometimes you may see mentions of the `X-Content-Security-Policy` header, but that's an older version and you don't need to specify it anymore.)

Alternatively, the {{HTMLElement("meta")}} element can be used to configure a policy, for example:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https://*; child-src 'none';" />
```

> [!NOTE]
> Some features, such as sending CSP violation reports, are only available when using the HTTP headers.

## Threats

### Mitigating cross-site scripting

A primary goal of CSP is to mitigate and report XSS attacks. XSS attacks exploit the browser's trust in the content received from the server.
Malicious scripts are executed by the victim's browser because the browser trusts the source of the content, even when it's not coming from where it seems to be coming from.

CSP makes it possible for server administrators to reduce or eliminate the vectors by which XSS can occur by specifying the domains that the browser should consider to be valid sources of executable scripts.
A CSP compatible browser will then only execute scripts loaded in source files received from those allowed domains, ignoring all other scripts (including inline scripts and event-handling HTML attributes).

As an ultimate form of protection, sites that want to never allow scripts to be
executed can opt to globally disallow script execution.

### Mitigating packet sniffing attacks

In addition to restricting the domains from which content can be loaded, the server can specify which protocols are allowed to be used;
for example (and ideally, from a security standpoint), a server can specify that all content must be loaded using HTTPS.
A complete data transmission security strategy includes not only enforcing HTTPS for data transfer, but also marking all [cookies with the `secure` attribute](/en-US/docs/Web/HTTP/Cookies) and providing automatic redirects from HTTP pages to their HTTPS counterparts.
Sites may also use the {{HTTPHeader("Strict-Transport-Security")}} HTTP header to ensure that browsers connect to them only over an encrypted channel.

## Using CSP

Configuring Content Security Policy involves adding the {{HTTPHeader("Content-Security-Policy")}} HTTP header to a web page and giving it values to control what resources the user agent is allowed to load for that page.
For example, a page that uploads and displays images could allow images from anywhere, but restrict a form action to a specific endpoint.
A properly designed Content Security Policy helps protect a page against a cross-site scripting attack.
This article explains how to construct such headers properly, and provides examples.

### Specifying your policy

You can use the {{HTTPHeader("Content-Security-Policy")}} HTTP header to specify your policy, like this:

```http
Content-Security-Policy: policy
```

The policy is a string containing the policy directives describing your Content Security Policy.

### Writing a policy

A policy is described using a series of policy directives, each of which describes the policy for a certain resource type or policy area.
Your policy should include a {{CSP("default-src")}} policy directive, which is a fallback for other resource types when they don't have policies of their own (for a complete list, see the description of the {{CSP("default-src")}} directive).
A policy needs to include a {{CSP("default-src")}} or {{CSP("script-src")}} directive to prevent inline scripts from running, as well as blocking the use of `eval()`.
A policy needs to include a {{CSP("default-src")}} or {{CSP("style-src")}} directive to restrict inline styles from being applied from a {{HTMLElement("style")}} element or a `style` attribute.
There are specific directives for a wide variety of types of items, so that each type can have its own policy, including fonts, frames, images, audio and video media, scripts, and workers.

For a complete list of policy directives, see the reference page for the [Content-Security-Policy header](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

## Examples: Common use cases

This section provides examples of some common security policy scenarios.

### Example 1

A website administrator wants all content to come from the site's own origin (this excludes subdomains.)

```http
Content-Security-Policy: default-src 'self'
```

### Example 2

A website administrator wants to allow content from a trusted domain and all its subdomains (it doesn't have to be the same domain that the CSP is set on.)

```http
Content-Security-Policy: default-src 'self' example.com *.example.com
```

### Example 3

A website administrator wants to allow users of a web application to include images from any origin in their own content,
but to restrict audio or video media to trusted providers, and all scripts only to a specific server that hosts trusted code.

```http
Content-Security-Policy: default-src 'self'; img-src *; media-src example.org example.net; script-src userscripts.example.com
```

Here, by default, content is only permitted from the document's origin, with the following exceptions:

- Images may load from anywhere (note the "\*" wildcard).
- Media is only allowed from example.org and example.net (and not from subdomains of those sites).
- Executable script is only allowed from userscripts.example.com.

### Example 4

A website administrator for an online banking site wants to ensure that all its content is loaded using TLS, in order to prevent attackers from eavesdropping on requests.

```http
Content-Security-Policy: default-src https://onlinebanking.example.com
```

The server permits access only to documents being loaded specifically over HTTPS through the single origin onlinebanking.example.com.

### Example 5

A website administrator of a web mail site wants to allow HTML in email, as well as images loaded from anywhere, but JavaScript or other potentially dangerous content can only come from the same origin as the mail server.

```http
Content-Security-Policy: default-src 'self' *.example.com; img-src *
```

Note that this example doesn't specify a {{CSP("script-src")}}, so the {{CSP("default-src")}} directive will be used for JavaScript sources as a fallback.

## Testing your policy

To ease deployment, CSP can be deployed in report-only mode.
The policy is not enforced, but any violations are reported to a provided URI.
Additionally, a report-only header can be used to test a future revision to a policy without actually deploying it.

You can use the {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP header to specify your policy, like this:

```http
Content-Security-Policy-Report-Only: policy
```

If both a {{HTTPHeader("Content-Security-Policy-Report-Only")}} header and a {{HTTPHeader("Content-Security-Policy")}} header are present in the same response, both policies are honored.
The policy specified in `Content-Security-Policy` headers is enforced while the `Content-Security-Policy-Report-Only` policy generates reports but is not enforced.

## Violation reporting

The recommended method for reporting CSP violations is to use the [Reporting API](/en-US/docs/Web/API/Reporting_API), declaring endpoints in {{HTTPHeader("Reporting-Endpoints")}} and specifying one of them as the CSP reporting target using the `Content-Security-Policy` header's {{CSP("report-to")}} directive.

> [!WARNING]
> You can also use the CSP {{CSP("report-uri")}} directive to specify a target URL for CSP violation reports.
> This sends a slightly different JSON report format via a `POST` operation with a {{HTTPHeader("Content-Type")}} of `application/csp-report`.
> This approach is deprecated, but you should declare both until {{CSP("report-to")}} is supported in all browsers.
> For more information about the approach see the {{CSP("report-uri")}} topic.

A server can inform clients where to send reports using the {{HTTPHeader("Reporting-Endpoints")}} HTTP response header.
This header defines one or more endpoint URLs as a comma-separated list.
For example, to define a reporting endpoint named `csp-endpoint` which accepts reports at `https://example.com/csp-reports`, the server's response header could look like this:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

If you want to have multiple endpoints that handle different types of reports, you would specify them like this:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

You can then use the `Content-Security-Policy` header's {{CSP("report-to")}} directive to specify that a particular defined endpoint should be used for reporting.
For example, to send CSP violation reports to `https://example.com/csp-reports` for the `default-src`, you might send response headers that look like the following:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

When a CSP violation occurs, the browser sends the report as a JSON object to the specified endpoint via an HTTP `POST` operation, with a {{HTTPHeader("Content-Type")}} of `application/reports+json`.
The report is a serialized form of the {{domxref("Report")}} object containing a `type` property with a value of `"csp-violation"`, and a `body` that is the serialized form of a {{domxref("CSPViolationReportBody")}} object.

A typical object might look like this:

```json
{
  "age": 53531,
  "body": {
    "blockedURL": "inline",
    "columnNumber": 39,
    "disposition": "enforce",
    "documentURL": "https://example.com/csp-report",
    "effectiveDirective": "script-src-elem",
    "lineNumber": 121,
    "originalPolicy": "default-src 'self'; report-to csp-endpoint-name",
    "referrer": "https://www.google.com/",
    "sample": "console.log(\"lo\")",
    "sourceFile": "https://example.com/csp-report",
    "statusCode": 200
  },
  "type": "csp-violation",
  "url": "https://example.com/csp-report",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

You need to set up a server to receive reports with the given JSON format and content type.
The server handling these requests can then store or process the incoming reports in a way that best suits your needs.

## Browser compatibility

{{Compat}}

### Compatibility notes

A specific incompatibility exists in some versions of the Safari web browser, whereby if a Content Security Policy header is set, but not a Same Origin header,
the browser will block self-hosted content and off-site content, and incorrectly report that this is due to the Content Security Policy not allowing the content.

## See also

- {{HTTPHeader("Content-Security-Policy")}} HTTP Header
- {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP Header
- [Content Security in WebExtensions](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [CSP in Web Workers](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#csp_in_workers)
- [Privacy, permissions, and information security](/en-US/docs/Web/Privacy)
- [CSP Evaluator](https://github.com/google/csp-evaluator) - Evaluate your Content Security Policy
