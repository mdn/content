---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
page-type: http-header
browser-compat: http.headers.Cross-Origin-Opener-Policy
---

{{HTTPSidebar}}

The HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{glossary("response header")}} allows a website to control whether a new top-level document, opened using {{domxref("Window.open()")}} or by navigating to a new page, is opened in the same {{glossary("Browsing context","browsing context group")}} (BCG) or in a new browsing context group.

When opened in a new BCG, any references between the new document and its opener are removed, and the new document may be process-isolated from its opener.
This ensures that potential attackers can't open your documents with {{domxref("Window.open()")}} and then use the returned value to access its global object, and thereby prevents a set of cross-origin attacks referred to as [XS-Leaks](https://xsleaks.dev/).

It also means that any object opened by your document in a new BCG can't access your code using [`window.opener`](/en-US/docs/Web/API/Window/opener).
This allows you to have more control over references to a window than [`rel=noopener`](/en-US/docs/Web/HTML/Attributes/rel/noopener), which affects outgoing navigations but not documents opened with {{domxref("Window.open()")}}.

The opening behaviour is based on the policies of both the new document and its opener, and whether the new document is opened following a navigation or using {{domxref("Window.open()")}}.

Generally you should set your policies such that only same-origin and trusted cross-origin resources that need to be able to script each other should be allowed to be opened in the same browser context group.
Other resources should be cross-origin isolated in their own group.

> [!NOTE]
> The specification and this document use the term "popup" to refer to any document opened using {{domxref("Window.open()")}}, whether it is a popup, tab, window, or other context.

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

  - : The document permits sharing its browsing context group with any other document, and may therefore be unsafe.
    It is used to opt-out a document from using COOP for process isolation.
    This is the default value.

    A new document with this value will only be opened into the same BCG as its opener if:

    - the opener also has a COOP value of either `unsafe-none`, or it has no COOP directive.
    - the document is being opened using {{domxref("Window.open()")}} and the opener has a value of `same-origin-allow-popups` or `noopener-allow-popups`.

    Similarly, a document with this value will itself open new documents in the same BCG if they also have a COOP value of `unsafe-none` (or no COOP directive).

- `same-origin`

  - : The document permits loading into BCGs that use COOP and contain only same-origin documents.
    This is used to provide [cross-origin isolation](/en-US/docs/Web/API/Window/crossOriginIsolated) for a BCG.

    A document with this value will be opened into the same BCG as its opener unless it is cross-origin with the opener, or the opener has a COOP value of `unsafe-none`.
    A document with this value will itself open new documents in the same BCG if they are same-origin and dont have a COOP value of `unsafe-none`.

- `same-origin-allow-popups`

  - : This is the same as the [`same-origin`](#same-origin) directive, except with respect to opening documents with {{domxref("Window.open()")}}.

    A document with this directive can open a document in the same BCG using {{domxref("Window.open()")}} if it has a COOP value of `unsafe-none` or has not specified any value.
    In this case it does not matter if the opened document is cross-site or same-site, and the original document remains "cross-origin isolated".

    The directive is used to relax the `same-origin` restriction for integrations where a document needs the benefits of cross-origin isolation but also needs to open and retain a reference to trusted cross-origin documents.
    For example, when using a cross-origin service for OAuth or payments.

- `noopener-allow-popups`

  - : The document must always be loaded into a new BCG.
    This directive supports cases where is useful to process-isolate _same-origin_ documents.

    This severs the connections between the new document and its opener, isolating the browsing context for the current document regardless of the opener document's origin.
    This ensures that the opener can't run scripts in opened documents and vice versa — even if they are same-origin.

    Whether or not a document with this COOP value opens other documents in the same BCG depends on their directive values.
    For example, a navigation to a same-origin document with the value `same-origin` or `same-origin-allow-popups` will be opened in the same BCG, while cross-origin documents or documents with `noopener-allow-popups` or `unsafe-none` will be opened in a new BCG.

    Note that a document with this value has a slightly different behavior for documents that it opens using {{domxref("Window.open()")}}.
    In this case documents with a value of `unsafe-none` (or have not specified any value) are opened into the same BCG, irrespective of whether they are cross-site or same-site.

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

Consider a hypothetical origin `example.com` that has two very different applications on the same origin:

- A chat application at `/chat` that enables any user to contact any other user and send them messages.
- A password management application at `/passwords` that contains all of the user's passwords, across different services.

The administrators of the "passwords" application would very much like to ensure that it can't be directly scripted by the "chat" app, which by its nature has a larger XSS surface.
The "right way" to isolate these applications would be to host them on different origins, but in some cases that's not possible, and those two applications have to be on a single origin for historical, business, or branding reasons.

The `Cross-Origin-Opener-Policy: noopener-allow-popups` header can be used to ensure that a document can't be scripted by a document that opens it.

If `example.com/passwords` is served with `noopener-allow-popups` the `WindowProxy` returned by {{domxref("Window.open()")}} will indicate that the windows is closed ({{domxref("Window.closed")}} is `true`), so the opener can't script the passwords app:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Note that this alone is not considered a sufficient security measure.
The site would also need to do the following:

- Use Fetch Metadata to block same-origin requests to the more-sensitive app that are not navigation requests.
- Ensure their authentication cookies are all `HttpOnly`.
- Ensure root-level Service-Workers are not installed by the less-sensitive app.
- Ensure that `postMessage` or `BroadcastChannel` on the more-sensitive app don't expose any sensitive information the any other same-origin app.
- Ensure their login page is served on a separate origin, due to password manager autofill being applied based on origin.
- Understand that the browser may still allocate the more-sensitive app in the same process as the less-sensitive one, making it vulnerable to Spectre-like attacks.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
