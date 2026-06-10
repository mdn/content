---
title: publicSuffix.getDomain()
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/getDomain
page-type: webextension-api-function
browser-compat: webextensions.api.publicSuffix.getDomain
sidebar: addonsidebar
---

Returns the {{Glossary("Registrable_domain")}} (eTLD+1) of the hostname, or `null` if no registrable domain can be determined.

The registrable domain is the public suffix plus one preceding label. For example, for `"sub.example.co.uk"`, the registrable domain is `"example.co.uk"`.

By default, this method returns `null` for:

- IP addresses.
- Hostnames that are themselves a public suffix (e.g., `"com"`).
- Hostnames with no known public suffix (e.g., `"localhost"`).

The `options` parameter provides flags for changing this default behavior.

## Syntax

```js-nolint
let domain = browser.publicSuffix.getDomain(hostname)
let domain = browser.publicSuffix.getDomain(hostname, options)
```

### Parameters

- `hostname`
  - : `string`. The hostname to extract the registrable domain from.
- `options` {{optional_inline}}
  - : `object`. Options that control the returned value.
    - `encoding` {{optional_inline}}
      - : {{WebExtAPIRef("publicSuffix.DomainEncoding")}}. The encoding to use for the returned domain name. Defaults to `"punycode"`.
    - `allowIPAddress` {{optional_inline}}
      - : `boolean`. If `true` and `hostname` is an IP address, the IP address is returned as-is. Defaults to `false`.
    - `allowPlainSuffix` {{optional_inline}}
      - : `boolean`. If `true` and `hostname` is a known public suffix, the suffix is returned as-is. Defaults to `false`.
    - `allowUnknownSuffix` {{optional_inline}}
      - : `boolean`. If `true` and `hostname` has no known public suffix, the last two domain labels of the hostname are returned. Defaults to `false`.

### Return value

A `string` containing the registrable domain of `hostname`, or `null` if no registrable domain can be determined.

Throws an error if `hostname` is not a valid hostname.

## Examples

Get the registrable domain of a hostname:

```js
console.log(browser.publicSuffix.getDomain("sub.example.com")); // "example.com"
console.log(browser.publicSuffix.getDomain("sub.example.co.uk")); // "example.co.uk"
console.log(browser.publicSuffix.getDomain("user.github.io")); // "user.github.io"
console.log(browser.publicSuffix.getDomain("com")); // null (is itself a suffix)
console.log(browser.publicSuffix.getDomain("192.0.2.1")); // null (IP address)
console.log(browser.publicSuffix.getDomain("localhost")); // null (no known suffix)
```

Using `allowIPAddress` to return IP addresses as-is:

```js
console.log(
  browser.publicSuffix.getDomain("192.0.2.1", { allowIPAddress: true }),
); // "192.0.2.1"
console.log(
  browser.publicSuffix.getDomain("[2001:db8::1]", { allowIPAddress: true }),
); // "2001:db8::1"
```

Using `allowPlainSuffix` to return hostnames that are public suffixes:

```js
console.log(
  browser.publicSuffix.getDomain("co.uk", { allowPlainSuffix: true }),
); // "co.uk"
```

Using `allowUnknownSuffix` to handle private or local domains:

```js
console.log(
  browser.publicSuffix.getDomain("mydevice.local", {
    allowUnknownSuffix: true,
  }),
); // "mydevice.local"
console.log(
  browser.publicSuffix.getDomain("host.intranet", { allowUnknownSuffix: true }),
); // "host.intranet"
```

Using `encoding: "display"` for internationalized domain names:

```js
// "xn--nxasmq6b.com" is the punycode form of "βόλος.com"
console.log(
  browser.publicSuffix.getDomain("sub.xn--nxasmq6b.com", {
    encoding: "display",
  }),
); // "βόλος.com"

// Domains with confusable characters remain in punycode
// "xn--bs-red.com" has characters confusable with another script
console.log(
  browser.publicSuffix.getDomain("sub.xn--bs-red.com", {
    encoding: "display",
  }),
); // "xn--bs-red.com"
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
