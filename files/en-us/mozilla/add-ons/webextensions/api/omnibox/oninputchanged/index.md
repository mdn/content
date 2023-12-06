---
title: omnibox.onInputChanged
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputChanged
page-type: webextension-api-event
browser-compat: webextensions.api.omnibox.onInputChanged
---

{{AddonSidebar()}}

Fired whenever the user changes their input, after they have started interacting with your extension by entering its keyword in the address bar and then pressing the space key.

This is the event you'll use to populate the address bar's drop-down list with suggestions. The event listener is passed:

- the current user input (not including the keyword itself or the space after it)
- a function which the listener can call with an array of {{WebExtAPIRef("omnibox.SuggestResult")}} objects, one for each suggestion. Only the first six suggestions will be displayed.

## Syntax

```js-nolint
browser.omnibox.onInputChanged.addListener(listener)
browser.omnibox.onInputChanged.removeListener(listener)
browser.omnibox.onInputChanged.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

The listener function is passed two parameters: a string `text`, and the function `suggest`.

### Parameters

- `text`
  - : `String`. The current user input in the address bar, not including the extension's keyword itself or the space after the keyword. Use this to decide which suggestions to display in the drop-down list.
- `suggest`
  - : `Function`. A function that the event listener can call to supply suggestions for the address bar's drop-down list. The function expects to receive an array of {{WebExtAPIRef("omnibox.SuggestResult")}} objects, one for each suggestion. Only the first six suggestions will be displayed.

## Browser compatibility

{{Compat}}

## Examples

This example interprets the user's input as a CSS property name and populates the drop-down list with one {{WebExtAPIRef("omnibox.SuggestResult")}} object for each CSS property matching the input. The `description` property of `SuggestResult` is the full name of the property, and the `content` is the MDN page for that property.

The example also listens to {{WebExtAPIRef("omnibox.onInputEntered")}}, and opens the MDN page corresponding to the selection, according to the {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}} argument.

```js
browser.omnibox.setDefaultSuggestion({
  description: "Type the name of a CSS property",
});

/*
Very short list of a few CSS properties.
*/
const props = [
  "animation",
  "background",
  "border",
  "box-shadow",
  "color",
  "display",
  "flex",
  "flex",
  "float",
  "font",
  "grid",
  "margin",
  "opacity",
  "overflow",
  "padding",
  "position",
  "transform",
  "transition",
];

const baseURL = "https://developer.mozilla.org/en-US/docs/Web/CSS/";

/*
Return an array of SuggestResult objects,
one for each CSS property that matches the user's input.
*/
function getMatchingProperties(input) {
  const result = [];
  for (const prop of props) {
    if (prop.startsWith(input)) {
      console.log(prop);
      const suggestion = {
        content: `${baseURL}${prop}`,
        description: prop,
      };
      result.push(suggestion);
    } else if (result.length !== 0) {
      return result;
    }
  }
  return result;
}

browser.omnibox.onInputChanged.addListener((input, suggest) => {
  suggest(getMatchingProperties(input));
});

browser.omnibox.onInputEntered.addListener((url, disposition) => {
  switch (disposition) {
    case "currentTab":
      browser.tabs.update({ url });
      break;
    case "newForegroundTab":
      browser.tabs.create({ url });
      break;
    case "newBackgroundTab":
      browser.tabs.create({ url, active: false });
      break;
  }
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/omnibox/) API.
