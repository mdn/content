---
title: publicSuffix.isKnownSuffix()
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/isKnownSuffix
page-type: webextension-api-function
browser-compat: webextensions.api.publicSuffix.isKnownSuffix
sidebar: addonsidebar
---

Returns `true` if the hostname is a known public suffix (eTLD) in the [Public Suffix List](https://publicsuffix.org/).

## Syntax

```js-nolint
let result = browser.publicSuffix.isKnownSuffix(hostname)
```

### Parameters

- `hostname`
  - : `string`. The hostname to check.

### Return value

`true` if `hostname` is a known public suffix, `false` otherwise.

Throws an error if `hostname` is not a valid hostname.

## Examples

Check whether a string is a known public suffix:

```js
browser.publicSuffix.isKnownSuffix("com"); // true
browser.publicSuffix.isKnownSuffix("co.uk"); // true
browser.publicSuffix.isKnownSuffix("github.io"); // true
browser.publicSuffix.isKnownSuffix("example.com"); // false
browser.publicSuffix.isKnownSuffix("localhost"); // false
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
