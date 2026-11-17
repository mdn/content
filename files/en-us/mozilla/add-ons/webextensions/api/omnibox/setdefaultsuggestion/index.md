---
title: omnibox.setDefaultSuggestion()
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/setDefaultSuggestion
page-type: webextension-api-function
browser-compat: webextensions.api.omnibox.setDefaultSuggestion
sidebar: addonsidebar
---

Set the default suggestion to appear in the address bar drop-down list when the user starts interacting with your extension.

After the user enters your keyword and starts interacting with your extension, the default suggestion appears first in the drop-down list. Unlike the suggestions you supply in {{WebExtAPIRef("omnibox.onInputChanged")}}, this item can't be selected. Use it to guide the user on what to type and what they can expect to see.

## Syntax

```js-nolint
let settingDefaultSuggestion = browser.omnibox.setDefaultSuggestion(
  suggestion            // object
)
```

### Parameters

- `suggestion`
  - : `object`. An object containing a string property `description`, which displays as the first item in the drop-down when the user starts interacting with your extension.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with no arguments when the default suggestion is set.

## Examples

```js
browser.omnibox.setDefaultSuggestion({
  description: "Type the name of a CSS property",
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [chrome.omnibox](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.
