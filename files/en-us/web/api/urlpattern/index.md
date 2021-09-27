---
title: URLPattern
slug: Web/API/URLPattern
tags:
  - API
  - Interface
  - Reference
  - URLPattern
  - URL Pattern API
  - Web
  - Polyfill
  - Experimental
browser-compat: api.URLPattern
---

{{APIRef("URL Pattern API")}}

The **`URLPattern`** interface matches URLs or parts of URLs against a pattern.
The pattern can contain capturing groups that extract parts of the matched URL.

More information about the syntax of patterns can be found on the API overview
page: [URL Pattern API](/en-US/docs/Web/API/URL_Pattern_API)

{{AvailableInWorkers}}

## Constructor

- {{domxref("URLPattern.URLPattern", "URLPattern()")}}
  - : Returns a new `URLPattern` object based on the given pattern and base URL.

## Properties

- {{domxref("URLPattern.hash", "hash")}}
  - : A {{domxref("USVString")}} containing a pattern to match the _hash_ part
    of a URL.
- {{domxref("URLPattern.hostname", "hostname")}}
  - : A {{domxref("USVString")}} containing a pattern to match the _hostname_
    part of a URL.
- {{domxref("URLPattern.password", "password")}}
  - : A {{domxref("USVString")}} containing a pattern to match the _password_
    part of a URL.
- {{domxref("URLPattern.pathname", "pathname")}}
  - : A {{domxref("USVString")}} containing a pattern to match the _pathname_
    part of a URL.
- {{domxref("URLPattern.port", "port")}}
  - : A {{domxref("USVString")}} containing a pattern to match the _port_ part
    of a URL.
- {{domxref("URLPattern.protocol", "protocol")}}
  - : A {{domxref("USVString")}} containing a pattern to match the _protocol_
    part of a URL.
- {{domxref("URLPattern.search", "search")}}
  - : A {{domxref("USVString")}} containing a pattern to match the _search_ part
    of a URL.
- {{domxref("URLPattern.username","username")}}
  - : A {{domxref("USVString")}} containing a pattern to match the _username_
    part of a URL.

## Methods

- {{domxref("URLPattern.exec", "exec()")}}
  - : Returns an object with the matched parts of the URL or `null` if the URL
    does not match.
- {{domxref("URLPattern.test", "test()")}}
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
