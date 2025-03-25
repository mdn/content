---
title: runtime.onUserScriptConnect
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUserScriptConnect
page-type: webextension-api-event
browser-compat: webextensions.api.runtime.onUserScriptConnect
---

{{AddonSidebar}}

Fired when a connection is made with a user script from one of the extension's [`USER_SCRIPT` worlds](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld).

In Firefox, this event requires the [`userScripts` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions). In Chrome, the event is always present, including in extensions that don't declare the `userScripts` permission.

A user script can only connect and then sent messages from a `USER_SCRIPT` world that is configured by {{WebExtAPIRef('userScripts.configureWorld()')}} with `messaging` set to `true`.

## Syntax

```js-nolint
browser.runtime.onUserScriptConnect.addListener(listener)
browser.runtime.onUserScriptConnect.removeListener(listener)
browser.runtime.onUserScriptConnect.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Checks whether a `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `function`

  - : The function called when this event occurs. The function is passed this argument:

    - `port`
      - : {{WebExtAPIRef('runtime.Port')}}. An object connecting the current script to the other context.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
