---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
page-type: http-header
browser-compat: http.headers.Cross-Origin-Embedder-Policy
---

{{HTTPSidebar}}

The HTTP **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response header")}} configures the current document's policy for loading and embedding cross-origin resources.

The policy for whether a particular resource is embeddable cross-site may be defined for that resource using the {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP) header for a `no-cors` fetch, or using [CORS](/en-US/docs/Web/HTTP/CORS).
If neither of these policies are set, then by default, resources can be loaded or embedded into a document as though they had a CORP value of `cross-site`.

The **`Cross-Origin-Embedder-Policy`** allows you to require that CORP or CORS headers be set in order to load cross-site resources into the current document.
You can also set the policy to keep the default behaviour, or to allow the resources to be loaded, but strip any credentials that might otherwise be sent.
The policy applies to loaded resources, and resources in {{htmlelement("iframe")}}s and nested frames.

> [!NOTE]
> The `Cross-Origin-Embedder-Policy` doesn't override or affect the embedding behaviour for a resource for which CORP or CORS has been set.
> If CORP restricts a resource to being embedded only `same-origin`, it won't be loaded cross-origin into a resource irrespective of the COEP value.

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
  - : Allows the document to load cross-origin resources **without** giving explicit permission through the CORS protocol or the {{HTTPHeader("Cross-Origin-Resource-Policy")}} header.
    This is the default value.
- `require-corp`

  - : A document can only load resources from the same origin, or resources explicitly marked as loadable from another origin.

    Cross-origin resource loading will be blocked by COEP unless:

    - The resource is requested in `no-cors` mode and the response includes a {{HTTPHeader("Cross-Origin-Resource-Policy")}} header that allows it to be loaded into the document origin.
    - The resource is requested in `cors` mode and the resource supports and is permitted by CORS.
      This can be done, for example, in HTML using the [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute, or in JavaScript by making a request with [`{mode="cors"}`](/en-US/docs/Web/API/RequestInit#cors).

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

If you enable COEP using `require-corp` and want to embed a cross origin resource that supports [CORS](/en-US/docs/Web/HTTP/CORS), you will need to explicitly specify that it is requested in `cors` mode.

For example, to fetch an image declared in HTML from a third-party site that supports CORS, you can use the [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute so that it is requested in `cors` mode:

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

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{domxref("Window.crossOriginIsolated")}} and {{domxref("WorkerGlobalScope.crossOriginIsolated")}}
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) in _Why you need "cross-origin isolated" for powerful features_ on web.dev (2020)
- [COOP and COEP explained: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
