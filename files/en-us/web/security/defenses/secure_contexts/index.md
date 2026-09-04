---
title: Secure contexts
slug: Web/Security/Defenses/Secure_Contexts
page-type: guide
sidebar: security
---

A **secure context** is an environment such as a `Window` or `Worker` which meets a defined standard of authentication and confidentiality. Many Web APIs and features are accessible only in a secure context.

The canonical definition of a secure context, along with the rationale for restricting some web platform features to secure contexts, is given in the [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) specification.

## Why should some features be restricted?

Some APIs on the web are very powerful, giving an attacker the ability to do the following and more:

- Invade a user's privacy.
- Get low-level access to a user's computer.
- Get access to data such as user credentials.

If these APIs were available to content that was not delivered over a secure connection, then a [manipulator in the middle (MITM)](/en-US/docs/Web/Security/Attacks/MITM) attacker would be able to access them.

## When is a context considered secure?

To a first approximation, a window context is secure when its document was delivered over an [HTTPS](/en-US/docs/Web/Security/Defenses/Transport_Layer_Security) connection, or it is delivered from a loopback (local) address. A worker context is secure when it was created by a secure context.

### Top-level documents

Top-level documents provide a secure context when their URL is a [potentially trustworthy URL](#potentially_trustworthy_urls).

For example:

| URL                             | Secure context |
| ------------------------------- | -------------- |
| `https://example.com`           | Secure         |
| `http://localhost`              | Secure         |
| `file:///path/to/resource.html` | Secure         |
| `https://example.com`           | Not secure     |

### Framed documents

Documents in an {{htmlelement("iframe")}} provide a secure context when they are delivered from a [potentially trustworthy origin](#potentially_trustworthy_origins), and are themselves embedded in a secure context.

The means that if a top-level document from `http://example.com` embeds an `<iframe>` whose document is `https://example.com`, then the embedded document is _not_ a secure context.

| iframe URL            | Parent document URL   | Secure context |
| --------------------- | --------------------- | -------------- |
| `https://example.com` | `https://example.com` | Secure         |
| `http://example.com`  | `https://example.com` | Not secure     |
| `https://example.com` | `http://example.com`  | Not secure     |

### Workers

#### Dedicated workers

Dedicated workers provide a secure context when they are delivered from a [potentially trustworthy origin](#potentially_trustworthy_origins), and when their owner is a secure context.

#### Shared workers

Shared workers follow the same rules as dedicated workers.

In addition:

- If a shared worker is a secure context, then only other secure contexts may attach to it.
- If a shared worker is a non-secure context, then only other non-secure contexts may attach to it.

#### Service workers

Only secure contexts are allowed to register service workers, so service workers are always secure contexts.

## Potentially trustworthy URLs

A URL is potentially trustworthy if any of the following apply:

- Its value is `about:blank` or `about:srcdoc`
- Its scheme is `data`
- Its {{glossary("origin")}} is a [potentially trustworthy origin](#potentially_trustworthy_origins).

## Potentially trustworthy origins

An origin is potentially trustworthy if has:

- A scheme of `https`, `wss`, or `file`.
- A host value of `127.0.0.0/8` or `::1/128`
- A host value of `localhost` or `localhost.`
- A host value ending with `.localhost` or `.localhost.`
- A scheme that the browser considers to be authenticated

This is essentially intended to capture:

- Origins that use a secure transport across the network
- Origins that are local
- Origins that the browser considers authenticated for some other reason (for example, those used by browser extensions).

## Feature detection

Pages can check whether they are in a secure context or not by using the {{domxref("Window.isSecureContext")}} or {{domxref("WorkerGlobalScope.isSecureContext")}} property.

```js
if (window.isSecureContext) {
  // Page is a secure context so service workers are now available
  navigator.serviceWorker.register("/offline-worker.js").then(() => {
    // …
  });
}
```

## See also

- [Platform features restricted to secure contexts](/en-US/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) — a list of the features available only in secure contexts
- {{domxref("Window.isSecureContext")}} and {{domxref("WorkerGlobalScope.isSecureContext")}}
- <https://permission.site> — A site that allows you to check what API permission checks your browser employs, over HTTP and HTTPS
