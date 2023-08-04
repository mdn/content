---
title: browserSettings.tlsVersionRestrictionConfig
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/tlsVersionRestrictionConfig
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.tlsVersionRestrictionConfig
---

{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object used to read the highest and lowest versions of TLS supported by the browser.

The object has these properties:

- `minimum`
  - : The lowest TLS version supported by the browser. Valid values are `TLSv1`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3`, and `unknown`.
- `maximum`
  - : The highest TLS version supported by the browser. Valid values are `TLSv1`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3`, and `unknown`.

This is a read-only setting.

## Browser compatibility

{{Compat}}

## Examples

Get the highest TLS version supported by the browser:

```js
browser.browserSettings.tlsVersionRestrictionConfig.maximum
  .get({})
  .then((result) => {
    console.log(`Highest TLS version supported: ${result}`);
  });
```

{{WebExtExamples}}
