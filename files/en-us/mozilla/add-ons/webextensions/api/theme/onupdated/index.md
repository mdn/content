---
title: theme.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/theme/onUpdated
page-type: webextension-api-event
browser-compat: webextensions.api.theme.onUpdated
---

{{AddonSidebar}}

Fires when a theme supplied as a browser extension is applied or removed. Specifically:

- when a [static theme](https://extensionworkshop.com/documentation/themes/static-themes/) is installed
- when a [dynamic theme](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme) calls [`theme.update()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme/update) or [`theme.reset()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme/reset)
- when a theme gets uninstalled.

This event is not fired for changes to the built-in themes.

## Syntax

```js-nolint
browser.theme.onUpdated.addListener(listener)
browser.theme.onUpdated.removeListener(listener)
browser.theme.onUpdated.hasListener(listener)
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

- `listener`

  - : The function called when this event occurs. The function is passed these arguments:

    - `updateInfo`

      - : `object`. An object containing two properties:

        - `theme`
          - : `object`. If the event fired because an extension-supplied theme was removed, this is an empty object. If it fired because an extension-supplied theme was applied, then it is a {{WebExtAPIRef("theme.Theme")}} object representing the theme that was applied.
        - `windowId` {{optional_inline}}
          - : `integer`. The ID of the window in which the theme was updated. If this property is not present, the theme was updated in all windows.

## Examples

```js
function handleUpdated(updateInfo) {
  if (updateInfo.theme.colors) {
    console.log(`Theme was applied: ${updateInfo.theme}`);
  } else {
    console.log(`Theme was removed`);
  }
}

browser.theme.onUpdated.addListener(handleUpdated);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
