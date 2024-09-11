---
title: omnibox.setDefaultSuggestion()
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/setDefaultSuggestion
page-type: webextension-api-function
browser-compat: webextensions.api.omnibox.setDefaultSuggestion
---

{{AddonSidebar}}

Set the default suggestion to appear in the address bar drop-down list when the user starts interacting with your extension.

Once the user has entered your keyword and started interacting with your extension, the default suggestion will always appear first in the drop-down list. Unlike the suggestions you supply in {{WebExtAPIRef("omnibox.onInputChanged")}}, this item can't be selected. Use it to provide the user with some guidance about what to type and what they can expect to see when they do.

## Syntax

```js-nolint
browser.omnibox.setDefaultSuggestion(
  suggestion            // object
)
```

### Parameters

- `suggestion`
  - : `object`. An object containing a single string property `description`, which will be displayed as the first item in the drop-down when the user starts interacting with your extension.

### Return value

None.

## Browser compatibility

{{Compat}}

## Examples

```js
browser.omnibox.setDefaultSuggestion({
  description: "Type the name of a CSS property",
});
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [chrome.omnibox](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.
