---
title: theme.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/theme/onUpdated
tags:
  - Add-ons
  - Event
  - Extensions
  - Theme
  - WebExtensions
browser-compat: webextensions.api.theme.onUpdated
---
{{AddonSidebar()}}

Fires when a theme supplied as a browser extension is applied or removed. Specifically:

- when a [static theme](/en-US/docs/Mozilla/Add-ons/Themes/Theme_concepts#static_themes) is installed
- when a [dynamic theme](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme) calls [`theme.update()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme/update) or [`theme.reset()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme/update)
- when a theme gets uninstalled.

Note that this event is not fired for changes to the built-in themes.

## Syntax

```js
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

- `callback`

  - : Function that will be called when this event occurs. The function will be passed the following arguments:

    - `updateInfo`

      - : `object`. An object containing two properties:

        - `theme`
          - : `object`. If the event fired because an extension-supplied theme was removed, this will be an empty object. If it fired because an extension-supplied theme was applied, then it will be a {{WebExtAPIRef("theme.Theme")}} object representing the theme that was applied.
        - `windowId`{{optional_inline}}
          - : `integer`. The ID of the window for which theme has been updated. If this property is not present, it means that the theme was updated globally.

## Browser compatibility

{{Compat}}

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
