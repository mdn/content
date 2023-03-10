---
title: omnibox.SuggestResult
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/SuggestResult
page-type: webextension-api-type
browser-compat: webextensions.api.omnibox.SuggestResult
---

{{AddonSidebar()}}

The **`omnibox.SuggestResult`** type defines a suggestion that the extension can add to the address bar's drop-down list.

The extension's {{WebExtAPIRef("omnibox.onInputChanged")}} event listener is passed a callback. To populate the address bar's drop-down list in response to the user's input, the extension can pass an array of `omnibox.SuggestResult` objects into this callback.

## Type

Values of this type are objects. They have the following properties:

- `content`
  - : This is the value that will appear in the address bar itself when the user highlights this suggestion in the drop-down list. This is also the string sent to the {{WebExtAPIRef("omnibox.onInputEntered")}} event listener if the user selects this suggestion. If the string is the same as what the user has already typed, this entry will not appear in the drop-down list.
- `deletable`
  - : Whether the suggest result can be deleted by the user.
- `description`
  - : This is the string that's displayed in the address bar's drop-down list.

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/omnibox/) API.
