---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/API/omnibox
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - omnibox
browser-compat: webextensions.api.omnibox
---
{{AddonSidebar}}

Enables extensions to implement customised behavior when the user types into the browser's address bar.

When the user focuses the browser's address bar and starts typing, the browser displays a drop-down list containing suggested pages, based on what they typed. This gives the user a quick way to access, for example, pages from their history or bookmarks.

The omnibox API provides the extension a way to customise the suggestions displayed in the drop-down, when the user enters a keyword defined by the extension. It works as follows:

1.  First, the extension must include an "[omnibox](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)" key in its [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file, which defines a keyword.
2.  When the user focuses the address bar and types the keyword, followed by a space, the extension will get an {{WebExtAPIRef("omnibox.onInputStarted")}} event.
3.  Optionally, the extension can call {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} to define the first suggestion that will be displayed in the address bar drop-down.
4.  As the user continues to type characters after this, the extension will get {{WebExtAPIRef("omnibox.onInputChanged")}} events. The event listener will be passed the current value the user has typed, and will be able to populate the address bar drop-down with suggestions. If the extension set a default suggestion using {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}, then this will appear first in the drop-down.
5.  If the user accepts a suggestion, the extension will get an {{WebExtAPIRef("omnibox.onInputEntered")}} event. The event listener will be passed the accepted suggestion.
6.  If the user dismisses the drop-down, the extension will get an {{WebExtAPIRef("omnibox.onInputCancelled")}} event.

## Types

- {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}
  - : Describes the recommended method to handle the selected suggestion: open in the current tab, open in a new foreground tab, or open in a new background tab.
- {{WebExtAPIRef("omnibox.SuggestResult")}}
  - : Object representing a suggestion to add to the address bar drop-down.

## Functions

- {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}
  - : Defines the first suggestion that appears in the drop-down when the user enters the keyword for your extension, followed by a space.

## Events

- {{WebExtAPIRef("omnibox.onInputStarted")}}
  - : Fired when the user focuses the address bar and types your extension's omnibox keyword, followed by a space.
- {{WebExtAPIRef("omnibox.onInputChanged")}}
  - : Fired whenever the user's input changes, after they have focused the address bar and typed your extension's omnibox keyword, followed by a space.
- {{WebExtAPIRef("omnibox.onInputEntered")}}
  - : Fired when the user accepts one of your extension's suggestions.
- {{WebExtAPIRef("omnibox.onInputCancelled")}}
  - : Fired when the user dismisses the address bar drop-down, after they have focused the address bar and typed your extension's omnibox keyword.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.omnibox`](https://developer.chrome.com/extensions/omnibox) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
