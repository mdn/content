---
title: URLPattern
slug: Web/API/URLPattern
page-type: web-api-interface
browser-compat: api.URLPattern
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`URLPattern`** interface of the {{domxref("URL Pattern API", "", "", "nocode")}} matches URLs or parts of URLs against a pattern. The pattern can contain capturing groups that extract parts of the matched URL.

More information about the syntax of patterns can be found on the API overview
page: {{domxref("URL Pattern API", "", "", "nocode")}}.

## Constructor

- {{domxref("URLPattern.URLPattern", "URLPattern()")}}
  - : Returns a new `URLPattern` object based on the given pattern and base URL.

## Instance properties

- {{domxref("URLPattern.hash", "hash")}} {{ReadOnlyInline}}
  - : A string containing a pattern to match the _hash_ part
    of a URL.
- {{domxref("URLPattern.hasRegExpGroups", "hasRegExpGroups")}} {{ReadOnlyInline}}
  - : A boolean indicating whether or not any of the `URLPattern` components contain [regular expression capturing groups](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).
- {{domxref("URLPattern.hostname", "hostname")}} {{ReadOnlyInline}}
  - : A string containing a pattern to match the _hostname_
    part of a URL.
- {{domxref("URLPattern.password", "password")}} {{ReadOnlyInline}}
  - : A string containing a pattern to match the _password_
    part of a URL.
- {{domxref("URLPattern.pathname", "pathname")}} {{ReadOnlyInline}}
  - : A string containing a pattern to match the _pathname_
    part of a URL.
- {{domxref("URLPattern.port", "port")}} {{ReadOnlyInline}}
  - : A string containing a pattern to match the _port_ part
    of a URL.
- {{domxref("URLPattern.protocol", "protocol")}} {{ReadOnlyInline}}
  - : A string containing a pattern to match the _protocol_
    part of a URL.
- {{domxref("URLPattern.search", "search")}} {{ReadOnlyInline}}
  - : A string containing a pattern to match the _search_ part
    of a URL.
- {{domxref("URLPattern.username","username")}} {{ReadOnlyInline}}
  - : A string containing a pattern to match the _username_
    part of a URL.

## Instance methods

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
