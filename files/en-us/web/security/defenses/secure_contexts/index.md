---
title: Secure contexts
slug: Web/Security/Defenses/Secure_Contexts
page-type: guide
spec-urls: https://w3c.github.io/webappsec-secure-contexts/
sidebar: security
---

A **secure context** is a `Window` or `Worker` for which certain minimum standards of authentication and confidentiality are met. Many Web APIs and features are accessible only in a secure context. The primary goal of secure contexts is to prevent [MITM attackers](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) from accessing powerful APIs that could further compromise the victim of an attack.

## Why should some features be restricted?

Some APIs on the web are very powerful, giving an attacker the ability to do the following and more:

- Invade a user's privacy.
- Get low-level access to a user's computer.
- Get access to data such as user credentials.

## When is a context considered secure?

A context is considered secure when it meets certain minimum standards of authentication and confidentiality defined in the [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) specification. A particular document is considered to be in a secure context when it is the [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document) of a [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) (basically, a containing window or tab) that is a secure context.

For example, even for a document delivered over TLS within an {{HTMLElement("iframe")}}, its context is **not** considered secure if it has an ancestor that was not also delivered over TLS.

However, it's important to note that if a non-secure context causes a new window to be created (with or without specifying [noopener](/en-US/docs/Web/API/Window/open)), then the fact that the opener was insecure has no effect on whether the new window is considered secure. That's because the determination of whether a particular document is in a secure context is based only on considering it within the top-level browsing context with which it is associated — and not whether a non-secure context happened to be used to create it.

Resources that are not local, to be considered secure, must meet the following criteria:

- They must be served over `https://` URLs.
- The security properties of the network channel used to deliver the resource must not be considered deprecated.

## Potentially trustworthy origins

A **potentially trustworthy origin** is one that the browser can generally trust to deliver data security, and will therefore (under some circumstances) grant it access to features that are otherwise restricted to secure contexts.

Locally-delivered resources such as those with `http://127.0.0.1`, `http://localhost`, and `http://*.localhost` URLs (for example, `http://dev.whatever.localhost/`) are not delivered using HTTPS, but they can be considered to have been delivered securely because they are on the same device as the browser. They are therefore potentially trustworthy. This is convenient for developers testing applications locally.

The same is generally true for `file://` URLs.

Secure [WebSocket](/en-US/docs/Web/API/WebSockets_API) (`"wss://"`) URLs are also considered potentially trustworthy.

Vendor-specific URL schemes like `app://` or `chrome-extension://` are not considered potentially trustworthy by all browsers, but they may well be by the browsers whose vendors they originate from.

> [!NOTE]
> Firefox 84 and later support `http://localhost` and `http://*.localhost` URLs as trustworthy origins (earlier versions did not, because `localhost` was not guaranteed to map to a local/loopback address).

### Potentially trustworthy URLs

A **potentially trustworthy URL** is one that is from a [potentially trustworthy origin](#potentially_trustworthy_origins), or:

- whose URL is `about:blank`, `about:srcdoc`, which inherit trustworthiness from their creator's origin
- whose scheme is a `blob:` URL, which inherits trustworthiness from its creator's origin
- who's scheme is `data:`, where content is inline rather than network-delivered

While potentially trustworthy origins are used to make trust decisions about access to features generally allowed only to secure contexts, potentially trustworthy URLs are used to determine whether a request is allowed to include potentially private data.
For example, [Fetch Metadata request headers](/en-US/docs/Glossary/Fetch_metadata_request_header) are only sent in requests to a potentially trustworthy URL.
This means servers on non-secure `http://` URLs may not receive these headers.

## Feature detection

Pages can use feature detection to check whether they are in a secure context or not by using the {{domxref("Window.isSecureContext")}} or {{domxref("WorkerGlobalScope.isSecureContext")}} boolean, which is exposed on the global scope.

```js
if (window.isSecureContext) {
  // Page is a secure context so service workers are now available
  navigator.serviceWorker.register("/offline-worker.js").then(() => {
    // …
  });
}
```

## Specifications

{{Specifications}}

## See also

- [Platform features restricted to secure contexts](/en-US/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) — a list of the features available only in secure contexts
- {{domxref("Window.isSecureContext")}} and {{domxref("WorkerGlobalScope.isSecureContext")}}
- <https://permission.site> — A site that allows you to check what API permission checks your browser employs, over HTTP and HTTPS
- [Strict-Transport-Security](/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP header
