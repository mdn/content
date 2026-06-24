---
title: publicSuffix.getKnownSuffix()
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/getKnownSuffix
page-type: webextension-api-function
browser-compat: webextensions.api.publicSuffix.getKnownSuffix
sidebar: addonsidebar
---

Returns the known public suffix (eTLD) of the hostname according to the [Public Suffix List](https://publicsuffix.org/), or `null` if the hostname has no known public suffix.

When a hostname has multiple possible public suffixes, the longest matching entry is returned.

## Syntax

```js-nolint
let suffix = browser.publicSuffix.getKnownSuffix(hostname)
```

### Parameters

- `hostname`
  - : `string`. The hostname whose public suffix is to be returned.

### Return value

A `string` containing the public suffix of `hostname`, or `null` if no known public suffix exists for `hostname`.

Throws an error if `hostname` is not a valid hostname.

## Examples

Get the public suffix of a hostname:

<!-- prettier-ignore -->
```js
console.log(browser.publicSuffix.getKnownSuffix("example.com")); // "com"
console.log(browser.publicSuffix.getKnownSuffix("example.co.uk")); // "co.uk"
console.log(browser.publicSuffix.getKnownSuffix("user.github.io")); // "github.io"
console.log(browser.publicSuffix.getKnownSuffix("com")); // "com"
console.log(browser.publicSuffix.getKnownSuffix("localhost")); // null
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
