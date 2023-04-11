---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
page-type: http-header
browser-compat: http.headers.Cross-Origin-Opener-Policy
---

{{HTTPSidebar}}

The HTTP **`Cross-Origin-Opener-Policy`** (COOP) response header allows you to ensure a top-level document does not share a browsing context group with cross-origin documents.

COOP will process-isolate your document and potential attackers can't access your global object if they were to open it in a popup, preventing a set of cross-origin attacks dubbed [XS-Leaks](https://github.com/xsleaks/xsleaks).

If a cross-origin document with COOP is opened in a new window, the opening document will not have a reference to it, and the [`window.opener`](/en-US/docs/Web/API/Window/opener) property of the new window will be `null`. This allows you to have more control over references to a window than [`rel=noopener`](/en-US/docs/Web/HTML/Attributes/rel/noopener), which only affects outgoing navigations.

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
Cross-Origin-Opener-Policy: unsafe-none
Cross-Origin-Opener-Policy: same-origin-allow-popups
Cross-Origin-Opener-Policy: same-origin
```

### Directives

- `unsafe-none`
  - : This is the default value. Allows the document to be added to its opener's browsing context group unless the opener itself has a COOP of `same-origin` or `same-origin-allow-popups`.
- `same-origin-allow-popups`
  - : Retains references to newly opened windows or tabs that either don't set COOP or that opt out of isolation by setting a COOP of `unsafe-none`.
- `same-origin`
  - : Isolates the browsing context exclusively to same-origin documents. Cross-origin documents are not loaded in the same browsing context.

## Examples

### Certain features depend on cross-origin isolation

Certain features like {{jsxref("SharedArrayBuffer")}} objects or {{domxref("Performance.now()")}} with unthrottled timers are only available if your document has a COOP header with the value `same-origin` set.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

See also the {{HTTPHeader("Cross-Origin-Embedder-Policy")}} header which you'll need to set to `require-corp` or `credentialless` as well.

To check if cross-origin isolation has been successful, you can test against the [`crossOriginIsolated`](/en-US/docs/Web/API/crossOriginIsolated) property available to window and worker contexts:

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Cross-Origin-Embedder-Policy")}}
