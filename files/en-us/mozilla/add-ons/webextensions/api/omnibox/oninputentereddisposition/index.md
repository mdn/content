---
title: omnibox.OnInputEnteredDisposition
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/OnInputEnteredDisposition
tags:
  - API
  - Add-ons
  - Extensions
  - OnInputEnteredDisposition
  - Reference
  - Type
  - WebExtensions
  - omnibox
browser-compat: webextensions.api.omnibox.OnInputEnteredDisposition
---
{{AddonSidebar()}}

The **`omnibox.OnInputEnteredDisposition`** type describes how the extension should handle a user selection from the suggestions in the address bar's drop-down list.

It's passed into the {{WebExtAPIRef("omnibox.onInputEntered")}} event listener, along with the selection itself.

## Type

Values of this type are strings. They may take any one of the following values:

- "currentTab"
  - : Open the selection in the current tab.
- "newForegroundTab"
  - : Open the selection in a new tab, and bring this new tab into the foreground.
- "newBackgroundTab"
  - : Open the selection in a new background tab, keeping the current tab in the foreground.

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/omnibox/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
