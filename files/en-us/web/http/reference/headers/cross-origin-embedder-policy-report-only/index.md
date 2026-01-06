---
title: Cross-Origin-Embedder-Policy-Report-Only (COEP) header
short-title: Cross-Origin-Embedder-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy-Report-Only
page-type: http-header
browser-compat: http.headers.Cross-Origin-Embedder-Policy
sidebar: http
---

The HTTP **`Cross-Origin-Embedder-Policy-Report-Only`** (COEP) {{Glossary("response header")}} configures the current document's _report-only_ policy for loading and embedding cross-origin resources that are requested in `no-cors` mode.

The header allows website administrators to report on resources that would be blocked by COEP, without preventing them from being loaded.
This allows for a softer rollout of enforcement.

> [!NOTE]
> See {{HTTPHeader("Cross-Origin-Embedder-Policy")}} and {{domxref("COEPViolationReport")}} for more complete information and examples.
>
> The headers are the same except `Cross-Origin-Embedder-Policy` blocks resources from loading is needed for a document to be [cross-origin isolated](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#cross-origin_isolation).
> In addition, [Violation reports](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#violation_reports) from `Cross-Origin-Embedder-Policy-Report-Only` have a [`disposition`](/en-US/docs/Web/API/COEPViolationReport#disposition) of `"reporting"` instead of `"enforce"`.

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
Cross-Origin-Embedder-Policy-Report-Only: <token>; <parameter>
```

### Directives

The header should only be set with just one token and a `report-to` endpoint.

Setting the header more than once or with multiple tokens is equivalent to setting `unsafe-none`.
Omitting `report-to` makes the header functionally inert.

The `<token>` value can be one of:

- `unsafe-none`
  - : Allows the document to load cross-origin resources requested in `no-cors` mode **without** giving explicit permission through the {{HTTPHeader("Cross-Origin-Resource-Policy")}} header.
    This is the default value.

- `require-corp`
  - : A document can only load resources requested in `no-cors` mode from the same origin, or resources that have explicitly set the {{HTTPHeader("Cross-Origin-Resource-Policy")}} header to a value that allows it to be embedded.

    Cross-origin resource loading will be blocked by COEP unless:
    - The resource is requested in `no-cors` mode and the response includes a {{HTTPHeader("Cross-Origin-Resource-Policy")}} header that allows it to be loaded into the document origin.
    - The resource is requested in `cors` mode, for example, in HTML using the [`crossorigin`](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) attribute, or in JavaScript by making a request with [`{mode="cors"}`](/en-US/docs/Web/API/RequestInit#cors).
      Note that requests made in `cors` mode won't be blocked by COEP or trigger COEP violations, but must still be permitted by CORS.

- `credentialless`
  - : A document can load cross-origin resources that are requested in [`no-cors` mode](/en-US/docs/Web/API/Request/mode) **without** an explicit permission via the {{HTTPHeader("Cross-Origin-Resource-Policy")}} header.
    In this case requests are sent without credentials: cookies are omitted in the request, and ignored in the response.

    The cross-origin loading behavior for other [request modes](/en-US/docs/Web/API/Request/mode#cors) is the same as for [`require-corp`](#require-corp).
    For example, a cross-origin resource requested in `cors` mode must support (and be permitted by) CORS.

The `<parameter>` is optional, and can be one of:

- `report-to <endpoint_name>` {{optional_inline}}
  - : The `<endpoint_name>` is the name of the endpoint to which policy violations will be sent.
    The mapping between the name and a particular endpoint is defined separately in the {{httpheader("Reporting-Endpoints")}} HTTP header.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{domxref("Window.crossOriginIsolated")}} and {{domxref("WorkerGlobalScope.crossOriginIsolated")}}
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ on web.dev (2020)
- [COOP and COEP explained: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
