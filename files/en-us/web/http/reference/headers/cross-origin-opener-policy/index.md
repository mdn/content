---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
page-type: http-header
browser-compat: http.headers.Cross-Origin-Opener-Policy
---

{{HTTPSidebar}}

The HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{glossary("response header")}} allows a website to control whether a new top-level document, opened using {{domxref("Window.open()")}} or by navigating to a new page, is opened in the same {{glossary("Browsing context","browsing context group")}} (BCG) or in a new browsing context group.

When opened in a new BCG, any references between the new document and its opener are severed, and the new document may be process-isolated from its opener.
This ensures that potential attackers can't open your documents with {{domxref("Window.open()")}} and then use the returned value to access its global object, and thereby prevents a set of cross-origin attacks referred to as [XS-Leaks](https://xsleaks.dev/).

It also means that any object opened by your document in a new BCG can't access it using [`window.opener`](/en-US/docs/Web/API/Window/opener).
This allows you to have more control over references to a window than [`rel=noopener`](/en-US/docs/Web/HTML/Reference/Attributes/rel/noopener), which affects outgoing navigations but not documents opened with {{domxref("Window.open()")}}.

The behavior depends on the policies of both the new document and its opener, and whether the new document is opened following a navigation or using {{domxref("Window.open()")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
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

    On navigations, documents with `unsafe-none` will always open and be opened into a new BCG — unless the other document also has `unsafe-none` (or no COOP directive value).

    Using `Window.open()`, documents with `unsafe-none` will always open documents with any other value into a new BCG.
    However documents with `unsafe-none` can be opened in the same BCG if the opener has the directive `same-origin-allow-popups`, `noopener-allow-popups`, or `unsafe-none`.
    A document with `same-origin` will always open a document with `unsafe-none` in a new BCG.

- `same-origin`

  - : The document permits loading into BCGs that use COOP and contain only same-origin documents.
    This is used to provide [cross-origin isolation](/en-US/docs/Web/API/Window/crossOriginIsolated) for a BCG.

    Documents with `same-origin` will only open and be opened in the same BCG if both documents are same-origin and have the `same-origin` directive.

- `same-origin-allow-popups`

  - : This is similar to [`same-origin`](#same-origin) directive, except that it allows the opening of documents using {{domxref("Window.open()")}} in the same BCG if they have a COOP value of `unsafe-none`.

    The directive is used to relax the `same-origin` restriction for integrations where a document needs the benefits of cross-origin isolation but also needs to open and retain a reference to trusted cross-origin documents.
    For example, when using a cross-origin service for OAuth or payments.

    A document with this directive can open a document in the same BCG using {{domxref("Window.open()")}} if it has a COOP value of `unsafe-none`.
    In this case it does not matter if the opened document is cross-site or same-site.

    Otherwise documents with `same-origin-allow-popups` will only open and be opened in the same BCG if both documents are same-origin and have the `same-origin-allow-popups` directive.

- `noopener-allow-popups`

  - : Documents with this directive are always opened into a new BCG, except when opened by navigating from a document that also has `noopener-allow-popups`.
    It is used to support cases where there is a need to process-isolate _same-origin_ documents.

    This severs the connections between the new document and its opener, isolating the browsing context for the current document regardless of the opener document's origin.
    This ensures that the opener can't run scripts in opened documents and vice versa — even if they are same-origin.

    On navigations, a document with this directive will always open other documents in a new BCG unless they are same-origin and have the directive `noopener-allow-popups`.
    Using {{domxref("Window.open()")}}, a document with this directive will open documents in a new BCG unless they have `unsafe-none`, and in this case it does not matter if they are same-site or cross-site.

## Description

Generally you should set your policies such that only same-origin and trusted cross-origin resources that need to be able to script each other should be allowed to be opened in the same browser context group.
Other resources should be cross-origin isolated in their own group.

The following sections show whether documents will be opened in the same BCG or a new BCG following a navigation or opening a window programmatically.

> [!NOTE]
> The specification uses the term "popup" to refer to any document opened using {{domxref("Window.open()")}}, whether it is a popup, tab, window, or other context.

### Navigations

When navigating between documents, the new document is opened in the same BCG if the two documents have "matching coop policies", and otherwise into a new BCG.

The policies match if either both documents have the policy `unsafe-none`, or if the policies are the same and the documents are same-origin.

The table below shows how this rule affects whether documents are opened in the same or a new BCG for the different directive values.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Opener (↓) / Opened (→)    | `unsafe-none` | `same-origin-allow-popups` | `same-origin`       | `noopener-allow-popups` |
| -------------------------- | ------------- | -------------------------- | ------------------- | ----------------------- |
| `unsafe-none`              | Same          | New                        | New                 | New                     |
| `same-origin-allow-popups` | New           | Same if same-origin        | New                 | New                     |
| `same-origin`              | New           | New                        | Same if same-origin | New                     |
| `noopener-allow-popups`    | New           | New                        | New                 | Same if same-origin     |

### Opening with Window.open()

When opening a document using `Window.open()`, the new document is opened in a new BCG according to the following rules, which are evaluated in order:

1. If the new document has COOP set to `noopener-allow-popups` => open the new document in a new BCG
2. If the new document has COOP set to `unsafe-none` and the opener document has COOP set to either `same-origin-allow-popups` or `noopener-allow-popups` => open the new document in the same BCG
3. If the new document and the opening document have [matching COOP policies](#navigations) => open the new document in the same BCG
4. Otherwise, open the new document in a new BCG

The table below shows how these rules affect whether documents are opened in the same or a new BCG for the different directive values.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Opener (↓) / Opened (→)    | `unsafe-none` | `same-origin-allow-popups` | `same-origin`       | `noopener-allow-popups` |
| -------------------------- | ------------- | -------------------------- | ------------------- | ----------------------- |
| `unsafe-none`              | Same          | New                        | New                 | New                     |
| `same-origin-allow-popups` | Same          | Same if same-origin        | New                 | New                     |
| `same-origin`              | New           | New                        | Same if same-origin | New                     |
| `noopener-allow-popups`    | Same          | New                        | New                 | New                     |

## Examples

### Features that depend on cross-origin isolation

Certain features, such as access to {{jsxref("SharedArrayBuffer")}} objects or using {{domxref("Performance.now()")}} with unthrottled timers, are only available if your document is {{domxref("Window.crossOriginIsolated","cross-origin isolated","","nocode")}}.

To use these features in a document, you will need to set the COOP header to `same-origin` and the {{HTTPHeader("Cross-Origin-Embedder-Policy")}} header to `require-corp` (or `credentialless`).
In addition the feature must not be blocked by {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}}.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

You can use the {{domxref("Window.crossOriginIsolated")}} and {{domxref("WorkerGlobalScope.crossOriginIsolated")}} properties to check if a document is cross-origin isolated, and hence whether or not the features are restricted:

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
