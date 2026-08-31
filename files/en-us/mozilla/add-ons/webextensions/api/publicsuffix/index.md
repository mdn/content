---
title: publicSuffix
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix
page-type: webextension-api
browser-compat: webextensions.api.publicSuffix
sidebar: addonsidebar
---

Use the `publicSuffix` API to work with domain names and public suffixes (effective top-level domains, or eTLDs) from the [Public Suffix List](https://publicsuffix.org/). Because the browser's built-in Public Suffix List is always up to date, extensions don't need to bundle a copy.

Common use cases include:

- Identifying the {{Glossary("Registrable_domain","registrable domain")}} (eTLD+1) of a hostname to group related domains or detect third-party requests.
- Checking whether a hostname is itself a public suffix.
- Extracting the public suffix portion of a hostname.

To use this API, you must have the `"publicSuffix"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Types

- {{WebExtAPIRef("publicSuffix.DomainEncoding")}}
  - : Specifies the encoding format for domain names returned by {{WebExtAPIRef("publicSuffix.getDomain()")}}.

## Functions

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}
  - : Returns `true` if the hostname is a known public suffix.
- {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}}
  - : Returns the known public suffix of a hostname, or `null` if none exists.
- {{WebExtAPIRef("publicSuffix.getDomain()")}}
  - : Returns the registrable domain (eTLD+1) of a hostname.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
