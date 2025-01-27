---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
page-type: http-header
browser-compat: http.headers.Cross-Origin-Embedder-Policy
---

{{HTTPSidebar}}

The HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response header")}} configures embedding cross-origin resources into the document.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden response header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Embedder-Policy: unsafe-none | require-corp | credentialless
```

### Directives

- `unsafe-none`
  - : Allows the document to load cross-origin resources without giving explicit permission through the CORS protocol or the {{HTTPHeader("Cross-Origin-Resource-Policy")}} header.
    This is the default value.
- `require-corp`

  - : A document can only load resources from the same origin, or resources explicitly marked as loadable from another origin.

    Cross-origin resource loading will be blocked by COEP unless:

    - The resource is requested in `no-cors` mode and the response includes a {{HTTPHeader("Cross-Origin-Resource-Policy")}} header that allows it to be loaded into the document origin.
    - The resource is requested in `cors` mode (the HTML [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute is set) and the resource supports CORS.

- `credentialless`

  - : A document can load cross-origin resources that are requested in [`no-cors` mode](/en-US/docs/Web/API/Request/mode) **without** an explicit permission via the {{HTTPHeader("Cross-Origin-Resource-Policy")}} header.
    In this case requests are sent without credentials: cookies are omitted in the request, and ignored in the response.

    The cross-origin loading behaviour for other [request modes](/en-US/docs/Web/API/Request/mode#cors) is the same as for [`require-corp`](#require-corp).
    For example, a cross-origin resource requested in `cors` mode must support (and be permitted by) CORS.

## Examples

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

If you enable COEP using `require-corp` and want to embed a cross origin resource that supports [CORS](/en-US/docs/Web/HTTP/CORS), you will need to explicitly specify the HTML [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute so that it is requested in `cors` mode.

For example, you would use this approach to fetch an image from a third-party site that supports CORS:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

If CORS is not supported for some images, a COEP value of `credentialless` can be used as an alternative to load the image without any explicit opt-in from the cross-origin server, at the cost of requesting it without cookies.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
