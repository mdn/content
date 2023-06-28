---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/API/omnibox
page-type: webextension-api
browser-compat: webextensions.api.omnibox
---

{{AddonSidebar}}

Enables extensions to implement customized behavior when the user types into the browser's address bar.

When the user focuses the browser's address bar and starts typing, the browser displays a drop-down list containing suggested pages based on what they typed. This gives the user a quick way to access, for example, pages from their history or bookmarks.

The omnibox API provides the extension a way to customize the suggestions displayed in the drop-down, when the user enters a keyword defined by the extension. It works as follows:

1. First, the extension must include an "[omnibox](/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)" key in its [manifest.json](/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file, which defines a keyword.
2. When the user focuses the address bar and types the keyword followed by a space, the extension gets an {{WebExtAPIRef("omnibox.onInputStarted")}} event.
3. Optionally, the extension can call {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} to define the first suggestion displayed in the address bar drop-down.
4. As the user continues to type characters, the extension gets {{WebExtAPIRef("omnibox.onInputChanged")}} events. The event listener is passed the value the user has typed and can populate the address bar drop-down with suggestions. If the extension sets a default suggestion using {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}, this suggestion is displayed first in the drop-down.
5. If the user accepts a suggestion, the extension gets an {{WebExtAPIRef("omnibox.onInputEntered")}} event. The event listener is passed the accepted suggestion.
6. If the user deletes a suggestion, the extension gets an {{WebExtAPIRef("omnibox.onDeleteSuggestion")}} event.
7. If the user dismisses the drop-down, the extension gets an {{WebExtAPIRef("omnibox.onInputCancelled")}} event.

## Types

- {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}
  - : Describes the recommended method to handle the selected suggestion: open in the current tab, open in a new foreground tab, or open in a new background tab.
- {{WebExtAPIRef("omnibox.SuggestResult")}}
  - : An object representing a suggestion to add to the address bar drop-down.

## Functions

- {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}
  - : Defines the first suggestion displayed in the drop-down when the user enters your extension's keyword followed by a space.

## Events

- {{WebExtAPIRef("omnibox.onDeleteSuggestion")}}
  - : Fired whenever the user deletes a suggestion.
- {{WebExtAPIRef("omnibox.onInputStarted")}}
  - : Fired when the user focuses the address bar and types your extension's omnibox keyword, followed by a space.
- {{WebExtAPIRef("omnibox.onInputChanged")}}
  - : Fired whenever the user's input changes after they have focused the address bar and typed your extension's keyword followed by a space.
- {{WebExtAPIRef("omnibox.onInputEntered")}}
  - : Fired when the user accepts one of your extension's suggestions.
- {{WebExtAPIRef("omnibox.onInputCancelled")}}
  - : Fired when the user dismisses the address bar drop-down after they have focused the address bar and typed your extension's keyword followed by a space.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/omnibox/) API.
