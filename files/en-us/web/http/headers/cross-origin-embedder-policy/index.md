---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Response Header
  - header
browser-compat: http.headers.Cross-Origin-Embedder-Policy
---
{{HTTPSidebar}}

The HTTP **`Cross-Origin-Embedder-Policy`** (COEP) response header prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using [CORP](</en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)>) or [CORS](/en-US/docs/Web/HTTP/CORS)).

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
Cross-Origin-Embedder-Policy: unsafe-none | require-corp
```

### Directives

- `unsafe-none`
  - : This is the default value. Allows the document to fetch cross-origin resources without giving explicit permission through the CORS protocol or the {{HTTPHeader("Cross-Origin-Resource-Policy")}} header.
- `require-corp`
  - : A document can only load resources from the same origin, or resources explicitly marked as loadable from another origin.
    If a cross origin resource supports CORS, the [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute or the {{HTTPHeader("Cross-Origin-Resource-Policy")}} header must be used to load it without being blocked by COEP.

## Examples

### Certain features depend on cross-origin isolation

You can only access certain features like {{jsxref("SharedArrayBuffer")}} objects or {{domxref("Performance.now()")}} with unthrottled timers, if your document has a COEP header with the value `require-corp` value set.

```http
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

See also the {{HTTPHeader("Cross-Origin-Opener-Policy")}} header which you'll need to set as well.

To check if cross origin isolation has been successful, you can test against the [`crossOriginIsolated`](/en-US/docs/Web/API/crossOriginIsolated) property available to window and worker contexts:

```js
if (crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}
```

### Avoiding COEP blockage with CORS

If you enable COEP using `require-corp` and have a cross origin resource that needs to be loaded, it needs to support [CORS](/en-US/docs/Web/HTTP/CORS) and you need to explicitly mark the resource as loadable from another origin to avoid blockage from COEP. For example, you can use the [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute for this image from a third-party site:

```html
<img src="https://thirdparty.com/img.png" crossorigin>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Cross-Origin-Opener-Policy")}}
