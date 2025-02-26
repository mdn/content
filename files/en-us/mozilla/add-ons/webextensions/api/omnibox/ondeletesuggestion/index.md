---
title: omnibox.onDeleteSuggestion
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onDeleteSuggestion
page-type: webextension-api-event
browser-compat: webextensions.api.omnibox.onDeleteSuggestion
---

{{AddonSidebar}}

Fired whenever the user deletes a suggestion.
A suggestion can be deleted when the property `deletable` of a {{WebExtAPIRef("omnibox.SuggestResult","SuggestResult")}} is set to true.

## Syntax

```js-nolint
browser.omnibox.onDeleteSuggestion.addListener(listener)
browser.omnibox.onDeleteSuggestion.removeListener(listener)
browser.omnibox.onDeleteSuggestion.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `text`
  - : `string`. The description of the deleted suggestion.

## Examples

This example prints the deleted suggestion to the console:

```js
function logDeletedSuggestion(text) {
  console.log(`The user deleted: ${text}`);
}

browser.omnibox.onDeleteSuggestion.addListener(logDeletedSuggestion);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.
