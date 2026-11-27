---
title: Cross-Origin-Opener-Policy-Report-Only (COOP) header
short-title: Cross-Origin-Opener-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy-Report-Only
page-type: http-header
browser-compat: http.headers.Cross-Origin-Opener-Policy-Report-Only
sidebar: http
---

The HTTP **`Cross-Origin-Opener-Policy-Report-Only`** (COOP) {{Glossary("response header")}} configures a document's _report-only_ {{HTTPHeader("Cross-Origin-Opener-Policy")}}, allowing website administrators to monitor potential browsing context group isolation effects without enforcing them.

Unlike the {{HTTPHeader("Cross-Origin-Opener-Policy")}} header, **`Cross-Origin-Opener-Policy-Report-Only`** does not actually sever opener relationships or move the document into a new {{glossary("Browsing context","browsing context group")}} (BCG).
Instead, it evaluates whether enforcing the policy would require a BCG switch (using a virtual BCG) and sends violation reports via the [Reporting API](/en-US/docs/Web/API/Reporting_API).
This lets you deploy and verify COOP rules safely before enforcing them.

Reports are sent to server endpoints defined in a {{HTTPHeader("Reporting-Endpoints")}} HTTP response header and selected using the `report-to` parameter.
Omitting the `report-to` parameter leaves the header without any observable reporting effect, and the header is ignored in non-secure contexts or when it contains an invalid value.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Opener-Policy-Report-Only: <directive>
Cross-Origin-Opener-Policy-Report-Only: <directive>; report-to="<endpoint_name>"
```

### Directives

The header value is a structured field token (the `<directive>`) with an optional `report-to` string parameter.
If the header cannot be parsed as a token or specifies an unrecognized directive value, it is ignored and defaults to `unsafe-none`.

- `unsafe-none`
  - : Permits the document to share its browsing context group with other documents using `unsafe-none`.
    This is the default value.
- `same-origin`
  - : Reports cases where a document or popup would be isolated into a new BCG because it is not {{Glossary("Same-origin policy", "same-origin")}} with a matching `same-origin` opener policy.

    When evaluating `same-origin` in report-only mode, user agents consider both {{HTTPHeader("Cross-Origin-Embedder-Policy")}} and {{HTTPHeader("Cross-Origin-Embedder-Policy-Report-Only")}} for cross-origin isolation eligibility, so COOP and COEP report-only policies can be rolled out in either order.
- `same-origin-allow-popups`
  - : Similar to `same-origin`, except popups opened using {{domxref("Window.open()")}} that have a policy of `unsafe-none` can remain in the same BCG without triggering a mismatch report.

The optional `<parameter>` is:

- `report-to="<endpoint_name>"` {{optional_inline}}
  - : A quoted string identifying the name of a reporting endpoint defined in the {{HTTPHeader("Reporting-Endpoints")}} header to which `"coop"` violation reports are sent.

> [!NOTE]
> The `noopener-allow-popups` directive of {{HTTPHeader("Cross-Origin-Opener-Policy")}} is not supported by `Cross-Origin-Opener-Policy-Report-Only`.

## Examples

### Reporting potential opener policy violations

This example configures a document to report when navigations or cross-window property accesses would violate a `same-origin` policy, without breaking existing popups or opener references.

```http
Reporting-Endpoints: coop-endpoint="https://example.com/coop-reports"
Cross-Origin-Opener-Policy-Report-Only: same-origin; report-to="coop-endpoint"
```

When a cross-origin navigation occurs within a multi-window browsing context group and would have required a BCG switch under `same-origin`, the user agent sends a JSON report (`Content-Type: application/reports+json`) to `coop-endpoint`:

```json
[
  {
    "age": 120,
    "body": {
      "disposition": "reporting",
      "effectivePolicy": "same-origin",
      "previousResponseURL": null,
      "referrer": "https://other.example/",
      "type": "navigation-to-response"
    },
    "type": "coop",
    "url": "https://example.com/dashboard",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36"
  }
]
```

Notice that `body.disposition` is `"reporting"` (rather than `"enforce"`), and `body.previousResponseURL` is `null` when the previous document is cross-origin to avoid leaking URL details across origins.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy-Report-Only")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
- {{domxref("Window.crossOriginIsolated")}}
