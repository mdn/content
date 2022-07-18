---
title: Document.domain
slug: Web/API/Document/domain
page-type: web-api-instance-property
tags:
  - API
  - Document
  - HTML DOM
  - Property
  - Reference
  - Deprecated
browser-compat: api.Document.domain
---
{{ApiRef}} {{Deprecated_Header}}

The **`domain`** property of the {{domxref("Document")}}
interface gets/sets the domain portion of the {{glossary("origin")}} of the current
document, as used by the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy).

## Value

A string.

## Examples

### Getting the domain

For code running at the URL `https://developer.mozilla.org/en-US/docs/Web`,
this example would set `currentDomain` to the string
"`developer.mozilla.org`".

```js
const currentDomain = document.domain;
```

The getter for this property returns the domain portion of the current document's
origin. In most cases, this will be the hostname portion of the document's URL. However,
there are some exceptions:

- If the page has an opaque {{glossary("origin")}}, e.g. for a page with a [data URL](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs), then it will
  return the empty string.
- If the `document.domain` [setter](#setter) has been used, then
  it will return the value that was set.

Although the getter is not dangerous in the same way that the setter is, it is likely
simpler and more useful to use the {{domxref("Location.hostname")}} property instead.
Then you can avoid `document.domain` entirely:

```js
const currentHostname = location.hostname;
```

For the URL `https://developer.mozilla.org/en-US/docs/Web`,
`currentHostname` is also the string "`developer.mozilla.org`".
Other alternatives that provide slightly different information are
{{domxref("Location.host")}}, which includes the port, and
{{domxref("origin")}}, which provides the full origin.

### Setting the domain

```js
document.domain = domainString
```

The setter for this property can be used to _change_ a page's
{{glossary("origin")}}, and thus modify how certain security checks are performed. It
can only be set to the same or a parent domain. For example, if
`https://a.example.com` and `https://b.example.com` both use

```js
document.domain = "example.com";
```

then they have both modified their origin to have the same domain, and they can now
access each other's DOM directly—despite being cross-origin, which would normally
prevent such access.

Note that setting `document.domain` to its current value is not a no-op. It
still changes the origin. For example, if one page sets

```js
document.domain = document.domain;
```

then it will be counted as cross-origin from any other normally-same-origin pages that
have not done the same thing.

#### Deprecation

The `document.domain` setter is deprecated. It undermines the security
protections provided by the [same origin policy](/en-US/docs/Web/Security/Same-origin_policy), and complicates the origin model in browsers, leading to
interoperability problems and security bugs.

Attempting to set `document.domain` is dangerous. It opens up full access to
a page's DOM from _all_ subdomains, which is likely not what is intended. It
also removes the port component from the origin, so now your page can be accessed by
other pages with the same IP address or same host component, even on a different port.

This is especially insecure on shared hosting. For example, another shared hosting
customer is able to host a site at the same IP address but on a different port, then
setting `document.domain` will remove the same-origin protection that
normally protects you from that other customer's site accessing your site's data.

Similar problems occur with shared hosting sites that give each customer a different
subdomain. If a site sets `document.domain`, any other customer on a
different subdomain can now do the same thing, and start accessing the data of the
original site.

Instead of using `document.domain` to facilitate cross-origin communication,
you should use {{domxref("Window.postMessage")}} to send an asynchronous message to the
other origin. This controlled access via message-passing is much more secure than the
blanket exposure of all data caused by `document.domain`.

#### Failures

The setter will throw a "`SecurityError`" {{domxref("DOMException")}} in
several cases:

- The {{httpheader('Feature-Policy/document-domain','document-domain')}}
  {{HTTPHeader("Feature-Policy")}} is disabled.
- The document is inside a sandboxed {{htmlelement("iframe")}}.
- The document has no {{glossary("browsing context")}}.
- The document's [effective domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) is `null`.
- The given value is neither the same as the page's current hostname, nor a parent
  domain of it.

As an example of this last failure case, trying to set `document.domain` to
`"example.org"` when on `https://example.com/` will throw.

Additionally, as part of its deprecation, it will do nothing when combined with certain
modern isolation features:

- If used on a cross-origin isolated page, i.e. one that uses the appropriate values
  for the {{httpheader("Cross-Origin-Opener-Policy")}} and
  {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP headers
- If used on an origin-isolated page, i.e. one that uses the
  {{httpheader("Origin-Isolation")}} HTTP header

Finally, setting `document.domain` does not change the origin used for
origin-checks by some Web APIs, preventing sub-domain access via this mechanism.
Affected APIs include (but are not limited to):
{{domxref("Window.localStorage")}}, {{domxref("IndexedDB_API")}}, {{domxref("BroadcastChannel")}}, {{domxref("SharedWorker")}} .

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
- {{domxref("Location.hostname")}}
- {{domxref("Location.host")}}
- {{domxref("origin")}}
