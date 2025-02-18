---
title: runtime.onUserScriptConnect
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUserScriptConnect
page-type: webextension-api-event
browser-compat: webextensions.api.runtime.onUserScriptConnect
---

{{AddonSidebar}}

Fired when a connection is made with a user script from one of the extension's [`USER_SCRIPT` worlds](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld).

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

## Examples

This user script:

- Connects to the background script and stores `Port` in a variable `myPort`.
- Listens for messages on `myPort` and logs them.
- Sends messages to the background script using `myPort` when the user clicks the document.

```js
// user-script.js

let myPort = browser.runtime.connect({ name: "port-from-us" });
myPort.postMessage({ greeting: "hello from user script" });

myPort.onMessage.addListener((m) => {
  console.log("In the user script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", () => {
  myPort.postMessage({ greeting: "they clicked the page!" });
});
```

The corresponding background script:

- Listens for connection attempts from the user script, and when it receives a connection attempt:

  - Stores the port in a variable named `portFromUS`.
  - Sends the content script a message using the port.
  - Starts listening to messages received on the port and logs them.

- Sends messages to the content script using `portFromUS` when the user clicks the extension's browser action.

```js
// background-script.js

let portFromCS;

function connected(p) {
  portFromUS = p;
  portFromUS.postMessage({ greeting: "hi there user script!" });
  portFromUS.onMessage.addListener((m) => {
    console.log("In background script, received message from user script");
    console.log(m.greeting);
  });
}

browser.runtime.onUserScriptConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  portFromUS.postMessage({ greeting: "they clicked the button!" });
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
