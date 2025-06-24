---
title: i18n.getPreferredSystemLanguages()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getPreferredSystemLanguages
page-type: webextension-api-function
browser-compat: webextensions.api.i18n.getPreferredSystemLanguages
---

{{AddonSidebar}}

Returns the preferred locales of the operating system. This is different from the locales set in the browser; to get those, use {{WebExtAPIRef('i18n.getAcceptLanguages')}}.

## Syntax

```js-nolint
let preferredSystemLanguages = await browser.i18n.getPreferredSystemLanguages()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with an array of {{WebExtAPIRef("i18n.LanguageCode")}} strings.

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
