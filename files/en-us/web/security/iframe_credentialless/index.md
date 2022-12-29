---
title: IFrame credentialless
slug: Web/Security/IFrame_credentialless
tags:
  - Experimental
  - Non-standard
spec-urls: https://wicg.github.io/anonymous-iframe/
browser-compat: html.elements.iframe.credentialless
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}{{SeeCompatTable}}{{Non-standard_header}}

**Iframe credentialless** provides a mechanism for developers to load third-party resources in {{htmlelement("iframe")}}s using a new, ephemeral context that does not have access to the parent context's shared storage and credentials. In return, the {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) embedding rules can be lifted, so documents with COEP set can embed third-party documents that do not.

## The problem

Various web API features can only be used on sites that opt in to cross-origin isolation — examples include {{jsxref("SharedArrayBuffer")}} and {{domxref("DOMHighResTimeStamp", "high-resolution timers", "", "nocode")}}. This is because of the risk of such features being exploited in [Spectre attacks](https://spectreattack.com/spectre.pdf), where a victim's confidential information can be leaked via a side channel and captured by an attacker.

To opt in to cross-origin isolation, a resource must be served with a {{httpheader("Cross-Origin-Opener-Policy")}} with a value of `same-origin` (protects your origin from attackers) and {{httpheader("Cross-Origin-Embedder-Policy")}} with a value of `require-corp` (protects victims from your origin). The latter prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using {{httpheader("Cross-Origin-Resource-Policy")}} or [Cross-Origin Resource Sharing](/en-US/docs/Web/HTTP/CORS).

The key issue limiting the adoption of cross-origin isolation is the fact that `Cross-Origin-Embedder-Policy` is applied recursively — any third-party content loaded into `<iframe>`s in a document with a `Cross-Origin-Embedder-Policy` set must also deploy `Cross-Origin-Embedder-Policy` for the embedding to succeed. This is a problem for developers embedding third-party content in their apps (such as ad-network content) as they generally have no control over it — their only choice up to now has been to wait for the third-party content providers to implement `Cross-Origin-Embedder-Policy`.

This problem can be solved by IFrame credentialless.

## The solution — Iframe credentialless

An `<iframe>` is made credentialless by applying the {{htmlattrxref("credentialless", "iframe")}} attribute to it, or setting the equivalent DOM property — {{domxref("HTMLIFrameElement.credentialless")}} — to `true`.

```html
<iframe src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
        title="Spectre vulnerability Wikipedia page"
        width="960"
        height="600"
        credentialless>
```

Or:

```html
<iframe width="960"
        height="600">
</iframe>
```

```js
const iframeElem = document.querySelector('iframe');

iframeElem.credentialless = true;
iframeElem.title = 'Spectre vulnerability Wikipedia page';
iframeElem.src = 'https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)';
```

> **Note:** The {{domxref("window.credentialless")}} property can be queried by a document embedded in an `<iframe>` to test whether it is being run in a credentialless context. A value of `true` means the embedding `<iframe>` is credentialless.

This results in the content inside the `<iframe>` being loaded in a new, ephemeral context — this context does not have access to the parent context's shared storage and credentials, e.g. [cookies](/en-US/docs/Web/HTTP/Cookies). The credentialless storage is partitioned out separately by giving it a storage key modified by a nonce ("number used once") value, set once per top-level document. So a cookie set in one credentialless `<iframe>` will be accessible from other credentialless `<iframe>`s embedded in the same parent document, but none of them will have access to anything set in the top-level document.

The nonce is shared for every credentialless iframe that is a descendant of the same top-level document, but it is different for each distinct document the user navigates to, and no longer accessible once the user has navigated somewhere else. Credentialless IFrames do not share storage across different pages, or across cross-document navigations. Returning to the cookie mentioned above, reloading the document will load the credentialless `<iframe>`s in a different context, so none of the previously-set cookies will be available.

In addition:

- Pop-ups opened by credentialless iframes are opened with [`rel="noopener"`](/en-US/docs/Web/HTML/Link_types/noopener) set. This prevents OAuth pop-up flows from being used in credentialless iframes.
- Browser autofill or password manager functionality is unavailable in credentialless `<iframes>`.

The result of this is that documents loaded into credentialless `<iframes>` are effectively vanilla or "public" versions, not customized with any user's sensitive information. Since there is no sensitive information available to leak from these documents, they are of no use to would-be attackers, and so the Cross-Origin Embedder Policy requirement is dropped for those IFrames.

## Recursive credentialless inside child IFrames

If `credentialless` is set on an `<iframe>` that has child `<iframes>` embedded in the document loaded inside it, those child `<iframe>`s inherit the credentialless setting.

## Live demo

Use the [https://anonymous-iframe.glitch.me/](https://anonymous-iframe.glitch.me/) demo to see IFrame credentialless in action.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Cross-Origin-Opener-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
- {{httpheader("Cross-Origin-Resource-Policy")}}
- [Cross-Origin Resource Sharing](/en-US/docs/Web/HTTP/CORS)
- The `<iframe`> {{htmlattrxref("credentialless", "iframe")}} attribute
- {{domxref("HTMLIFrameElement.credentialless")}}
