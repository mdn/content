---
title: runtime.onUserScriptMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUserScriptMessage
page-type: webextension-api-event
browser-compat: webextensions.api.runtime.onUserScriptMessage
---

{{AddonSidebar}}

Use this event to listen for messages sent from one of the extension's [`USER_SCRIPT` worlds](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld).

In Firefox, this event requires the [`userScripts` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions). In Chrome, the event is always present, including in extensions that don't declare the `userScripts` permission.

A user script can only send messages using {{WebExtAPIRef('runtime.sendMessage')}} from a `USER_SCRIPT` world that is configured by {{WebExtAPIRef('userScripts.configureWorld()')}} with `messaging` set to `true`.

Along with the message, the listener is passed:

- a `sender` object with details about the message sender.
- a `sendResponse` function the listener can use to send a response back to the sender.

## Syntax

```js-nolint
browser.runtime.onUserScriptMessage.addListener(listener)
browser.runtime.onUserScriptMessage.removeListener(listener)
browser.runtime.onUserScriptMessage.hasListener(listener)
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

- `listener`

  - : The function called when this event occurs. The function is passed these arguments:

    - `message`
      - : `object`. The message. This is a JSON-ifiable object.
    - `sender`
      - : A {{WebExtAPIRef('runtime.MessageSender')}} object representing the sender of the message.
    - `sendResponse`

      - : A function to call, at most once, to send a response to the message. The function takes one argument, which is any JSON-ifiable object. This argument is passed back to the message sender.

        If you have more than one `onUserScriptMessage` listener in the same document, then only one can send a response.

        To send a response synchronously, call `sendResponse` before the listener function returns. To send a response asynchronously, do one of these:

        - keep a reference to the `sendResponse` argument and return `true` from the listener function. You can then call `sendResponse` after the listener function has returned.
        - return a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) from the listener function and resolve the promise when the response is ready.

## Examples

In this example, a user script in a `USER_SCRIPT` world with the ID `myScriptWorld` sends a message to the extension that registered it:

```js
// The user script
// Send a message to the extension that registered the user script
browser.runtime.sendMessage("my message");
```

```js
// The extension that registered the user script

function handleMessage(message, sender) {
  // check that the message originated from "myScriptWorld" world
  if (sender.userScriptWorldId === "myScriptWorld") {
    // process message
    console.log(message);
  }
}

browser.runtime.onUserScriptMessage.addListener(handleMessage);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
