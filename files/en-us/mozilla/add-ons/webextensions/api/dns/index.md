---
title: dns
slug: Mozilla/Add-ons/WebExtensions/API/dns
page-type: webextension-api
browser-compat: webextensions.api.dns
---

{{AddonSidebar}}

Enables an extension to resolve domain names.

To use this API, an extension must request the "dns" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

> **Note:** DNS will fail with NS_ERROR_UNKNOWN_PROXY_HOST if proxying DNS over socks is enabled.

## Functions

- {{WebExtAPIRef("dns.resolve()")}}
  - : Resolves the given hostname to a DNS record.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}
