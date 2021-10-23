---
title: Same-origin policy
slug: Web/Security/Same-origin_policy
tags:
  - CORS
  - Host
  - JavaScript
  - Same-origin policy
  - Security
  - URL
  - origin
  - secure
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

The **same-origin policy** is a critical security mechanism that restricts how a document or script loaded by one {{Glossary("origin")}} can interact with a resource from another origin.

It helps isolate potentially malicious documents, reducing possible attack vectors. For example, it prevents a malicious website on the Internet from running JS in a browser to read data from a third-party webmail service (which the user is signed into) or a company intranet (which is protected from direct access by the attacker by not having a public IP address) and relaying that data to the attacker.

## Definition of an origin

Two URLs have the _same origin_ if the {{Glossary("protocol")}}, {{Glossary("port")}} (if specified), and {{Glossary("host")}} are the same for both. You may see this referenced as the "scheme/host/port tuple", or just "tuple". (A "tuple" is a set of items that together comprise a whole — a generic form for double/triple/quadruple/quintuple/etc.)

The following table gives examples of origin comparisons with the URL `http://store.company.com/dir/page.html`:

| URL                                               | Outcome     | Reason                                           |
| ------------------------------------------------- | ----------- | ------------------------------------------------ |
| `http://store.company.com/dir2/other.html`        | Same origin | Only the path differs                            |
| `http://store.company.com/dir/inner/another.html` | Same origin | Only the path differs                            |
| `https://store.company.com/page.html`             | Failure     | Different protocol                               |
| `http://store.company.com:81/dir/page.html`       | Failure     | Different port (`http://` is port 80 by default) |
| `http://news.company.com/dir/page.html`           | Failure     | Different host                                   |

### Inherited origins

Scripts executed from pages with an `about:blank` or `javascript:` URL inherit the origin of the document containing that URL, since these types of URLs do not contain information about an origin server.

For example, `about:blank` is often used as a URL of new, empty popup windows into which the parent script writes content (e.g. via the {{domxref("Window.open()")}} mechanism). If this popup also contains JavaScript, that script would inherit the same origin as the script that created it.

`data:` URLs get a new, empty, security context.

### Exceptions in Internet Explorer

Internet Explorer has two major exceptions to the same-origin policy:

- Trust Zones
  - : If both domains are in the _highly trusted zone_ (e.g. corporate intranet domains), then the same-origin limitations are not applied.
- Port
  - : IE doesn't include port into same-origin checks. Therefore, `https://company.com:81/index.html` and `https://company.com/index.html` are considered the same origin and no restrictions are applied.

These exceptions are nonstandard and unsupported in any other browser.

## Changing origin

> **Warning:** The approach described here (using the {{domxref("document.domain")}} setter) is deprecated because it undermines the security protections provided by the same origin policy, and complicates the origin model in browsers, leading to interoperability problems and security bugs.

A page may change its own origin, with some limitations. A script can set the value of {{domxref("document.domain")}} to its current domain or a superdomain of its current domain. If set to a superdomain of the current domain, the shorter superdomain is used for same-origin checks.

For example, assume a script from the document at `http://store.company.com/dir/other.html` executes the following:

```js
document.domain = "company.com";
```

Afterward, the page can pass the same-origin check with `http://company.com/dir/page.html` (assuming `http://company.com/dir/page.html` sets its `document.domain` to "`company.com`" to indicate that it wishes to allow that - see {{domxref("document.domain")}} for more). However, `company.com` could **not** set `document.domain` to `othercompany.com`, since that is not a superdomain of `company.com`.

The port number is checked separately by the browser. Any call to `document.domain`, including `document.domain = document.domain`, causes the port number to be overwritten with `null`. Therefore, one **cannot** make `company.com:8080` talk to `company.com` by only setting `document.domain = "company.com"` in the first. It has to be set in both so their port numbers are both `null`.

The mechanism has some limitations. For example, it will throw a "`SecurityError`" [`DOMException`](/en-US/docs/Web/API/DOMException) if the [`document-domain`](/en-US/docs/Web/HTTP/Headers/Feature-Policy/document-domain "The HTTP Feature-Policy header document-domain directive controls whether the current document is allowed to set document.domain. When this policy is enabled, attempting to set document.domain will fail and cause a SecurityError DOMException to be be thrown.") [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy "The HTTP Feature-Policy header provides a mechanism to allow and deny the use of browser features in its own frame, and in content within any <iframe> elements in the document.") is enabled or the document is in a sandboxed  [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe "The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."), and changing the origin in this way does not affect the origin checks used by many Web APIs (e.g. [`localStorage`](/en-US/docs/Web/API/Window/localStorage), [`indexedDB`](/en-US/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/en-US/docs/Web/API/BroadcastChannel), [`SharedWorker`](/en-US/docs/Web/API/SharedWorker)). A more exhaustive list of failure cases can be found in [Document.domain > Failures](/en-US/docs/Web/API/Document/domain#failures).

> **Note:** When using `document.domain` to allow a subdomain to access its parent, you need to set `document.domain` to the _same value_ in both the parent domain and the subdomain. This is necessary even if doing so is setting the parent domain back to its original value. Failure to do this may result in permission errors.

## Cross-origin network access

The same-origin policy controls interactions between two different origins, such as when you use {{domxref("XMLHttpRequest")}} or an {{htmlelement("img")}} element. These interactions are typically placed into three categories:

- Cross-origin _writes_ are typically allowed. Examples are links, redirects, and form submissions. Some HTTP requests require [preflight](/en-US/docs/Web/HTTP/CORS#preflighted_requests).
- Cross-origin _embedding_ is typically allowed. (Examples are listed below.)
- Cross-origin _reads_ are typically disallowed, but read access is often leaked by embedding. For example, you can read the dimensions of an embedded image, the actions of an embedded script, or the [availability of an embedded resource](https://bugzilla.mozilla.org/show_bug.cgi?id=629094).

Here are some examples of resources which may be embedded cross-origin:

- JavaScript with `<script src="…"></script>`. Error details for syntax errors are only available for same-origin scripts.
- CSS applied with `<link rel="stylesheet" href="…">`. Due to the [relaxed syntax rules](https://scarybeastsecurity.blogspot.com/2009/12/generic-cross-browser-cross-domain.html) of CSS, cross-origin CSS requires a correct `Content-Type` header. Restrictions vary by browser: [Internet Explorer](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622939(v=vs.85)?redirectedfrom=MSDN>), [Firefox](https://www.mozilla.org/en-US/security/advisories/mfsa2010-46/), [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=9877) , [Safari](https://support.apple.com/kb/HT4070) (scroll down to CVE-2010-0051) and [Opera](https://security.opera.com/cross-domain-data-theft-with-css-load-opera-security-advisories/).
- Images displayed by {{htmlelement("img")}}.
- Media played by {{htmlelement("video")}} and {{htmlelement("audio")}}.
- External resources embedded with {{htmlelement("object")}} and {{htmlelement("embed")}}.
- Fonts applied with {{cssxref("@font-face")}}. Some browsers allow cross-origin fonts, others require same-origin.
- Anything embedded by {{htmlelement("iframe")}}. Sites can use the {{HTTPHeader("X-Frame-Options")}} header to prevent cross-origin framing.

### How to allow cross-origin access

Use [CORS](/en-US/docs/Web/HTTP/CORS) to allow cross-origin access. CORS is a part of {{Glossary("HTTP")}} that lets servers specify any other hosts from which a browser should permit loading of content.

### How to block cross-origin access

- To prevent cross-origin writes, check an unguessable token in the request — known as a [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf) token. You must prevent cross-origin reads of pages that require this token.
- To prevent cross-origin reads of a resource, ensure that it is not embeddable. It is often necessary to prevent embedding because embedding a resource always leaks some information about it.
- To prevent cross-origin embeds, ensure that your resource cannot be interpreted as one of the embeddable formats listed above. Browsers may not respect the `Content-Type` header. For example, if you point a `<script>` tag at an HTML document, the browser will try to parse the HTML as JavaScript. When your resource is not an entry point to your site, you can also use a CSRF token to prevent embedding.

## Cross-origin script API access

JavaScript APIs like {{domxref("HTMLIFrameElement.contentWindow", "iframe.contentWindow")}}, {{domxref("window.parent")}}, {{domxref("window.open")}}, and {{domxref("window.opener")}} allow documents to directly reference each other. When two documents do not have the same origin, these references provide very limited access to {{domxref("Window")}} and {{domxref("Location")}} objects, as described in the next two sections.

To communicate between documents from different origins, use {{domxref("window.postMessage")}}.

Specification: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

The following cross-origin access to these `Window` properties is allowed:

| Methods                                      |
| -------------------------------------------- |
| {{domxref("window.blur")}}         |
| {{domxref("window.close")}}         |
| {{domxref("window.focus")}}         |
| {{domxref("window.postMessage")}} |

| Attributes                               |             |
| ---------------------------------------- | ----------- |
| {{domxref("window.closed")}}     | Read only.  |
| {{domxref("window.frames")}}     | Read only.  |
| {{domxref("window.length")}}     | Read only.  |
| {{domxref("window.location")}} | Read/Write. |
| {{domxref("window.opener")}}     | Read only.  |
| {{domxref("window.parent")}}     | Read only.  |
| {{domxref("window.self")}}     | Read only.  |
| {{domxref("window.top")}}         | Read only.  |
| {{domxref("window.window")}}     | Read only.  |

Some browsers allow access to more properties than the above.

### Location

The following cross-origin access to `Location` properties is allowed:

| Methods                                  |
| ---------------------------------------- |
| {{domxref("location.replace")}} |

| Attributes                           |             |
| ------------------------------------ | ----------- |
| {{domxref("URLUtils.href")}} | Write-only. |

Some browsers allow access to more properties than the above.

## Cross-origin data storage access

Access to data stored in the browser such as [Web Storage](/en-US/docs/Web/API/Web_Storage_API) and [IndexedDB](/en-US/docs/Web/API/IndexedDB_API) are separated by origin. Each origin gets its own separate storage, and JavaScript in one origin cannot read from or write to the storage belonging to another origin.

{{glossary("Cookie", "Cookies")}} use a separate definition of origins. A page can set a cookie for its own domain or any parent domain, as long as the parent domain is not a public suffix. Firefox and Chrome use the [Public Suffix List](https://publicsuffix.org/) to determine if a domain is a public suffix. Internet Explorer uses its own internal method to determine if a domain is a public suffix. The browser will make a cookie available to the given domain including any sub-domains, no matter which protocol (HTTP/HTTPS) or port is used. When you set a cookie, you can limit its availability using the `Domain`, `Path`, `Secure`, and `HttpOnly` flags. When you read a cookie, you cannot see from where it was set. Even if you use only secure https connections, any cookie you see may have been set using an insecure connection.

## See also

- [Same Origin Policy at W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-origin policy at web.dev](https://web.dev/secure/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
