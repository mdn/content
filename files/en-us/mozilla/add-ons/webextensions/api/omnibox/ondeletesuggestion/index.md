---
title: omnibox.onDeleteSuggestion
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onDeleteSuggestion
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Reference
  - WebExtensions
  - omnibox
  - onDeleteSuggestion
browser-compat: webextensions.api.omnibox.onDeleteSuggestion
---

{{AddonSidebar()}}

Fired whenever the user deletes a suggestion, either with the Shift+Delete shortcut, or by pressing a button next to the suggestion.

The event listener is passed:

- The value of the `description` property of the {{WebExtAPIRef("omnibox.SuggestResult")}} object that the user deleted.

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

The listener function will be passed one parameter: a string `text`.

### Parameters

- `text`
  - : `String`. This is the value of the `description` property of the {{WebExtAPIRef("omnibox.SuggestResult")}} object that the user deleted.

## Browser compatibility

{{Compat}}

## Examples

This example interprets the user's input as a CSS named color and populates the drop-down list with one {{WebExtAPIRef("omnibox.SuggestResult")}} object for each named color that contains the input. The `description` property of `SuggestResult` is the name of the color, and the `content` is the hex code.

The example listens to {{WebExtAPIRef("omnibox.onDeleteSuggestion")}}, and locates the deleted item in the global `suggestions` array, then removes it to prevent appearances in future searches.

The example also listens to {{WebExtAPIRef("omnibox.onInputEntered")}}, and copies the hex code corresponding to the selection to the clipboard.

The example requires the `clipboardWrite` permission.

```js
"use strict";

// CSS Level 1 values
const suggestions = [
  { content: "#000000", description: "black", deletable: true },
  { content: "#c0c0c0", description: "silver", deletable: true },
  { content: "#808080", description: "gray", deletable: true },
  { content: "#ffffff", description: "white", deletable: true },
  { content: "#800000", description: "maroon", deletable: true },
  { content: "#ff0000", description: "red", deletable: true },
  { content: "#800080", description: "purple", deletable: true },
  { content: "#ff00ff", description: "fuchsia", deletable: true },
  { content: "#008000", description: "green", deletable: true },
  { content: "#00ff00", description: "lime", deletable: true },
  { content: "#808000", description: "olive", deletable: true },
  { content: "#ffff00", description: "yellow", deletable: true },
  { content: "#000080", description: "navy", deletable: true },
  { content: "#0000ff", description: "blue", deletable: true },
  { content: "#008080", description: "teal", deletable: true },
  { content: "#00ffff", description: "aqua", deletable: true },
];

// Return an array of SuggestResult objects,
// for each CSS color that contains the user's input.
function searchSuggestions(text) {
  const matches = suggestions.filter((suggestion) =>
    suggestion.description.includes(text)
  );
  return matches;
}

browser.omnibox.onInputChanged.addListener((input, suggest) => {
  const results = searchSuggestions(input);
  suggest(results);
});

// When the user selects a color, copy its hex code to the clipboard.
browser.omnibox.onInputEntered.addListener((description) => {
  navigator.clipboard.writeText(description);
});

// locate the suggested item in the global 'suggestions' array
// then remove it to prevent it from appearing in future searches.
browser.omnibox.onDeleteSuggestion.addListener((text) => {
  const suggestedItem = suggestions.find(
    (suggestion) => suggestion.description === text
  );
  const index = suggestions.indexOf(suggestedItem);

  suggestions.splice(index, 1);
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/omnibox/) API.
