---
title: Cross-Origin-Embedder-Policy (COEP) header
short-title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
page-type: http-header
browser-compat: http.headers.Cross-Origin-Embedder-Policy
sidebar: http
---

The HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response header")}} configures the current document's policy for loading and embedding cross-origin resources that are requested in `no-cors` mode.

Note that the embedding policy for requests made in `cors` mode are controlled by [CORS](/en-US/docs/Web/HTTP/Guides/CORS).

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
Cross-Origin-Embedder-Policy: <token>; <parameter>
```

### Directives

The header should only be set with just one token and an optional `report-to` endpoint.
Setting the header more than once or with multiple tokens is equivalent to setting `unsafe-none`.

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

## Description

The **`Cross-Origin-Embedder-Policy`** (COEP) response header configures the current document's policy for loading and embedding cross-origin resources requested in `no-cors` mode.

The policy for whether a particular resource is embeddable cross-site may be defined for that resource using the {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP) header in a response to a `no-cors` fetch, or using [CORS](/en-US/docs/Web/HTTP/Guides/CORS).
If neither of these policies are set, then by default, resources can be loaded or embedded into a document as though they had a CORP value of `cross-origin` (meaning that they _can_ be loaded cross origin).

The **`Cross-Origin-Embedder-Policy`** allows you to require that CORP headers be set, in responses to `no-cors` requests, in order to load cross-site resources into the current document.
You can also set the policy to keep the default behavior, or to allow the resources to be loaded, but strip any credentials that might otherwise be sent.
The policy applies to loaded resources, and resources in {{htmlelement("iframe")}}s and nested frames.

> [!NOTE]
> The `Cross-Origin-Embedder-Policy` doesn't override or affect the embedding behavior for a resource for which CORP or CORS has been set.
> If CORP restricts a resource to being embedded only `same-origin`, it won't be loaded cross-origin into a resource irrespective of the COEP value.

### Cross-origin isolation

COEP and CORS together ensure that the browser process only contains resources that have consented to be shared or contain no private data.
This is one of the conditions needed for a document to be [cross-origin isolated](/en-US/docs/Web/API/Window/crossOriginIsolated).

### Violation reports

Violations of a COEP may be sent as JSON objects in `POST` requests to a remote server, or observed in the violating page as using the [Reporting API](/en-US/docs/Web/API/Reporting_API).

To observe violations using the [Reporting API](/en-US/docs/Web/API/Reporting_API) you create a {{domxref("ReportingObserver")}} to observe {{domxref("COEPViolationReport")}} instances that have the `type` of `"coep"`.
The format of the `COEPViolationReport` report is shown below:

```js
[
  {
    type: "coep",
    url: "https://url-of-document-that-generated-report",
    body: {
      type: "navigation",
      blockedURL: "https://url-of-resource-that-was-blocked",
      destination: "image",
      disposition: "enforce",
    },
  },
];
```

To send violation reports to a remote server, you specify an endpoint name in the COEP header's [`report-to`](#report-to_endpoint_name) parameter, and provide a mapping from this name to a server address in the {{HTTPHeader("Reporting-Endpoints")}} header.
The format of the JSON report object a serialized version of `COEPViolationReport` that additionally includes `age` and `user_agent` properties:

```json
[
  {
    "age": 967132,
    "body": {
      "blockedURL": "https://url-of-resource-that-was-blocked",
      "destination": "image",
      "disposition": "enforce",
      "type": "corp"
    },
    "type": "coep",
    "url": "https://url-of-document-that-generated-report",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36"
  }
]
```

For more information and examples see {{domxref("COEPViolationReport")}} and [Reporting API](/en-US/docs/Web/API/Reporting_API).

## Examples

### Blocking and reporting when resources don't set CORP headers

This example shows a document that blocks loading of resources requested in [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode that don't set an appropriate CORP header.

The document is an HTML file hosted on the origin `https://example.com`, and includes in its body an {{htmlelement("img")}} element that sets as its source the (cross-origin) resource `some-image.png`.
Since the element does not have the [`cross-origin` attribute](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin), it will be requested in `no-cors` mode:

```html
<img src="https://another-example.com/some-image.png" />
```

The response header for the document sets the `Cross-Origin-Embedder-Policy` and {{httpheader("Reporting-Endpoints")}} headers as shown below.
Since the `require-corp` directive is set, all cross-origin resources requested in `no-cors` mode must be served with the CORP header.
The `report-to` parameter specifies the name `"coep-endpoint"` as the name of the endpoint where reports should be sent, and `Reporting-Endpoints` specifies how that name maps to a particular URL.

```http
Reporting-Endpoints: coep-endpoint="https://some-example.com/coep"
Cross-Origin-Embedder-Policy: require-corp; report-to="coep-endpoint"
```

In order for the `some-image.png` to be loaded without triggering a violation it would need to set a {{HTTPHeader("Cross-Origin-Resource-Policy")}} or `cross-origin`.
If we omit the header or don't include it as `cross-origin` a violation will occur.

The report sent in the report POST request will be similar to the JSON object shown below:

```json
[
  {
    "age": 717139,
    "body": {
      "blockedURL": "https://another-example.com/some-image.png",
      "destination": "image",
      "disposition": "enforce",
      "type": "corp"
    },
    "type": "coep",
    "url": "https://example.com",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36"
  }
]
```

The `type` of the report is `coep`, the `url` is the document in which the violation occurred.
The `body` of the report provides the URL of the blocked resource (`blockedURL`), its destination (`image`), the type of violation (`corp`), and that the report was for an enforced violation (`disposition`).

### Features that depend on cross-origin isolation

Certain features, such as access to {{jsxref("SharedArrayBuffer")}} objects or using {{domxref("Performance.now()")}} with unthrottled timers, are only available if your document is {{domxref("Window.crossOriginIsolated","cross-origin isolated","","nocode")}}.

To use these features in a document, you will need to set the COEP header with a value of `require-corp` or `credentialless`, and the {{HTTPHeader("Cross-Origin-Opener-Policy")}} header to `same-origin`.
In addition the feature must not be blocked by {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}}.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

You can use the {{domxref("Window.crossOriginIsolated")}} and {{domxref("WorkerGlobalScope.crossOriginIsolated")}} properties to check if the features are restricted in window and worker contexts, respectively:

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

### Avoiding COEP blockage with CORS

If you enable COEP using `require-corp` and want to embed a cross origin resource that supports [CORS](/en-US/docs/Web/HTTP/Guides/CORS), you will need to explicitly specify that it is requested in `cors` mode.

For example, to fetch an image declared in HTML from a third-party site that supports CORS, you can use the [`crossorigin`](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) attribute so that it is requested in `cors` mode:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

You can similarly use the [`HTMLScriptElement.crossOrigin`](/en-US/docs/Web/API/HTMLScriptElement/crossOrigin) attribute or fetch with `{ mode: 'cors' }` to request a file in CORS mode using JavaScript.

If CORS is not supported for some images, a COEP value of `credentialless` can be used as an alternative to load the image without any explicit opt-in from the cross-origin server, at the cost of requesting it without cookies.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cross-Origin-Embedder-Policy-Report-Only")}}
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{domxref("Window.crossOriginIsolated")}} and {{domxref("WorkerGlobalScope.crossOriginIsolated")}}
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ on web.dev (2020)
- [COOP and COEP explained: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
