---
title: publicSuffix.DomainEncoding
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/DomainEncoding
page-type: webextension-api-type
browser-compat: webextensions.api.publicSuffix.DomainEncoding
sidebar: addonsidebar
---

The encoding format for domain names returned by {{WebExtAPIRef("publicSuffix.getDomain()")}}.

## Type

Values of this type are strings. Possible values are:

- `"punycode"`
  - : Returns the domain in [Punycode](https://en.wikipedia.org/wiki/Punycode) (ASCII-compatible encoding, ACE). This value is the default.
- `"display"`
  - : Returns the domain in Unicode form, suitable for display to users. If the Unicode representation contains characters that could be confused with characters from another script (confusable characters), the domain is returned in Punycode instead to prevent [homograph attacks](https://en.wikipedia.org/wiki/IDN_homograph_attack).

## Browser compatibility

{{Compat}}
