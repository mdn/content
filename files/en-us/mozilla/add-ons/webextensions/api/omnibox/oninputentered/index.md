---
title: omnibox.onInputEntered
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputEntered
page-type: webextension-api-event
browser-compat: webextensions.api.omnibox.onInputEntered
---

{{AddonSidebar()}}

Fired when the user has selected one of the suggestions your extension has added to the address bar's drop-down list.

Use this event to handle the user's selection, generally by opening the corresponding page. The event listener is passed:

- the user's selection
- a {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}: use this to determine whether to open the new page in the current tab, in a new foreground tab, or in a new background tab.

## Syntax

```js-nolint
browser.omnibox.onInputEntered.addListener(listener)
browser.omnibox.onInputEntered.removeListener(listener)
browser.omnibox.onInputEntered.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

The listener function will be passed two parameters: a string `text`, and an {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}.

### Parameters

- `text`
  - : `String`. This is the value of the `content` property of the {{WebExtAPIRef("omnibox.SuggestResult")}} object that the user selected.
- `disposition`
  - : {{WebExtAPIRef("omnibox.OnInputEnteredDisposition", "OnInputEnteredDisposition")}}. A {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}} enumeration, indicating whether the extension should open the page in the current tab, in a new foreground tab, or in a new background tab.

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
