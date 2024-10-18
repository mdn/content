---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
page-type: http-header
browser-compat: http.headers.Cross-Origin-Opener-Policy
---

{{HTTPSidebar}}

The HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response header")}} allows you to ensure a top-level document does not share a {{glossary("Browsing context","browsing context group")}} with cross-origin documents.

COOP will process-isolate your document and potential attackers can't access your global object if they were to open it in a popup, preventing a set of cross-origin attacks dubbed [XS-Leaks](https://github.com/xsleaks/xsleaks).

If a cross-origin document with COOP is opened in a new window, the opening document will not have a reference to it, and the [`window.opener`](/en-US/docs/Web/API/Window/opener) property of the new window will be `null`.
This allows you to have more control over references to a window than [`rel=noopener`](/en-US/docs/Web/HTML/Attributes/rel/noopener), which only affects outgoing navigations.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Opener-Policy: unsafe-none
Cross-Origin-Opener-Policy: same-origin-allow-popups
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Opener-Policy: noopener-allow-popups
```

### Directives

- `unsafe-none`
  - : This is the default value. Allows the document to be added to its opener's browsing context group unless the opener itself has a COOP of `same-origin` or `same-origin-allow-popups`.
- `same-origin-allow-popups`
  - : Retains references to newly opened windows or tabs that either don't set COOP or that opt out of isolation by setting a COOP of `unsafe-none`.
- `same-origin`
  - : Isolates the browsing context exclusively to same-origin documents. Cross-origin documents are not loaded in the same browsing context.
- `noopener-allow-popups`
  - : Severs the connections between the new document and its opener, isolating the browsing context for the current document regardless of the opener document's origin.
    This ensures that the opener can't run scripts in opened documents and vice versa — even if they are same-origin.

## Examples

### Certain features depend on cross-origin isolation

Certain features like {{jsxref("SharedArrayBuffer")}} objects or {{domxref("Performance.now()")}} with unthrottled timers are only available if your document has a COOP header with the value `same-origin` set.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

See also the {{HTTPHeader("Cross-Origin-Embedder-Policy")}} header which you'll need to set to `require-corp` or `credentialless` as well.

To check if cross-origin isolation has been successful, you can test against the {{domxref("Window.crossOriginIsolated")}} property or the {{domxref("WorkerGlobalScope.crossOriginIsolated")}} property available to window and worker contexts:

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

### Severing the opener relationship

The `Cross-Origin-Opener-Policy: noopener-allow-popups` header can be used to ensure that the document that opened a document with these headers cannot directly script it.

To understand where this can be useful, let's examine a hypothetical example.com origin that has two very different applications.
One is https://example.com/chat that enables any user to contact any other user and send them messages.
Another is https://example.com/passwords that contains all of the user's passwords, across different services.

Common security advice to further isolate these applications would be to host them on different origins.
But in some cases that's not possible, and those two applications have to be on a single origin for historical/business/branding reasons.

At the same time, the administrators of the "passwords" application would very much like to ensure that it can't be directly scripted by the "chat" app, which by its nature has a larger XSS surface.

`Cross-Origin-Opener-Policy: noopener-allow-popups` helps them do that.

At the same time, by itself it is not a sufficient security measure.
They would also need to do the following:

- Use Fetch Metadata to block same-origin requests to the more-sensitive app that are not navigation requests.
- Ensure their authentication cookies are all `HttpOnly`.
- Ensure root-level Service-Workers are not installed by the less-sensitive app.
- Ensure that `postMessage` or `BroadcastMessage` on the more-sensitive app don't expose any sensitive information the any other same-origin app.
- Ensure their login page is served on a separate origin, due to password manager autofill being applied based on origin.
- Understand that the browser may still allocate the more-sensitive app in the same process as the less-sensitive one, making it vulnerable to Spectre-like attacks.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
