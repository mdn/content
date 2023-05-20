---
title: URLPattern
slug: Web/API/URLPattern
page-type: web-api-interface
status:
  - experimental
browser-compat: api.URLPattern
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}}

The **`URLPattern`** interface matches URLs or parts of URLs against a pattern.
The pattern can contain capturing groups that extract parts of the matched URL.

More information about the syntax of patterns can be found on the API overview
page: [URL Pattern API](/en-US/docs/Web/API/URL_Pattern_API)

{{AvailableInWorkers}}

## Constructor

- {{domxref("URLPattern.URLPattern", "URLPattern()")}} {{Experimental_Inline}}
  - : Returns a new `URLPattern` object based on the given pattern and base URL.

## Instance properties

- {{domxref("URLPattern.hash", "hash")}} {{Experimental_Inline}}
  - : A string containing a pattern to match the _hash_ part
    of a URL.
- {{domxref("URLPattern.hostname", "hostname")}} {{Experimental_Inline}}
  - : A string containing a pattern to match the _hostname_
    part of a URL.
- {{domxref("URLPattern.password", "password")}} {{Experimental_Inline}}
  - : A string containing a pattern to match the _password_
    part of a URL.
- {{domxref("URLPattern.pathname", "pathname")}} {{Experimental_Inline}}
  - : A string containing a pattern to match the _pathname_
    part of a URL.
- {{domxref("URLPattern.port", "port")}} {{Experimental_Inline}}
  - : A string containing a pattern to match the _port_ part
    of a URL.
- {{domxref("URLPattern.protocol", "protocol")}} {{Experimental_Inline}}
  - : A string containing a pattern to match the _protocol_
    part of a URL.
- {{domxref("URLPattern.search", "search")}} {{Experimental_Inline}}
  - : A string containing a pattern to match the _search_ part
    of a URL.
- {{domxref("URLPattern.username","username")}} {{Experimental_Inline}}
  - : A string containing a pattern to match the _username_
    part of a URL.

## Instance methods

- {{domxref("URLPattern.exec", "exec()")}} {{Experimental_Inline}}
  - : Returns an object with the matched parts of the URL or `null` if the URL
    does not match.
- {{domxref("URLPattern.test", "test()")}} {{Experimental_Inline}}
  - : Returns `true` if the URL matches the given pattern, `false` otherwise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLPattern` is available
  [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
- The pattern syntax used by URLPattern is similar to the syntax used by
  [path-to-regexp](https://github.com/pillarjs/path-to-regexp)
