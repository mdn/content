---
title: proxy.onError
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onError
page-type: webextension-api-event
browser-compat: webextensions.api.proxy.onError
---

{{AddonSidebar}}

Fired when there is an error evaluating the PAC file or the `onRequest` listener.

The error can be triggered by throwing or returning an invalid value in the proxy.onRequest event handler.

## Syntax

```js-nolint
browser.proxy.onError.addListener(listener)
browser.proxy.onError.removeListener(listener)
browser.proxy.onError.hasListener(listener)
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

  - : The function called when this event occurs. The function is passed this argument:

    - `newState`
      - : `Object`. An [Error](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object representing the error.

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
