---
title: i18n.getSystemUILanguage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getSystemUILanguage
page-type: webextension-api-function
browser-compat: webextensions.api.i18n.getSystemUILanguage
sidebar: addonsidebar
---

Returns the current UI locale of the operating system. This is different from {{WebExtAPIRef('i18n.getUILanguage')}}, which returns the UI locale of the web browser.

## Syntax

```js-nolint
let systemUILanguage = await browser.i18n.getSystemUILanguage()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with an {{WebExtAPIRef("i18n.LanguageCode")}}.

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
