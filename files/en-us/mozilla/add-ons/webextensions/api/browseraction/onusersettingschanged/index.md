---
title: browserAction.onUserSettingsChanged
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/onUserSettingsChanged
page-type: webextension-api-event
browser-compat: webextensions.api.browserAction.onUserSettingsChanged
sidebar: addonsidebar
---

Fired when a change occurs in the user-specified settings that affect an extension's browser action.

## Syntax

```js-nolint
browser.browserAction.onUserSettingsChanged.addListener(listener)
browser.browserAction.onUserSettingsChanged.removeListener(listener)
browser.browserAction.onUserSettingsChanged.hasListener(listener)
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
    - `change`
      - : 'object'. Details of the changed user-specified settings. 
        - `isOnToolbar`
          - : `boolean`. Whether the extension's browser action icon is visible on the top-level toolbar of the browser windows (i.e., whether the extension has been 'pinned' by the user).


{{WebExtExamples}}

## Browser compatibility

{{Compat}}
