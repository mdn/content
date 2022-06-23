---
title: omnibox.SuggestResult
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/SuggestResult
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - SuggestResult
  - Type
  - WebExtensions
  - omnibox
browser-compat: webextensions.api.omnibox.SuggestResult
---
{{AddonSidebar()}}

The **`omnibox.SuggestResult`** type defines a single suggestion that the extension can add to the address bar's drop-down list.

The extension's {{WebExtAPIRef("omnibox.onInputChanged")}} event listener is passed a callback. To populate the address bar's drop-down list in response to the user's input, the extension can pass an array of `omnibox.SuggestResult` objects into this callback.

## Type

Values of this type are objects. They have the following properties:

- `content`
  - : This is the value that will appear in the address bar itself when the user highlights this suggestion in the drop-down list. This is also the string sent to the {{WebExtAPIRef("omnibox.onInputEntered")}} event listener if the user selects this suggestion. If the string is the same as what the user has already typed, this entry will not appear in the drop-down list.
- `description`
  - : This is the string that's displayed in the address bar's drop-down list.

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/omnibox/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
