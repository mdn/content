---
title: runtime.onMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
page-type: webextension-api-event
browser-compat: webextensions.api.runtime.onMessage
---

{{AddonSidebar}}

Use this event to listen for messages from another part of your extension.

Some example use cases are:

- **in a [content script](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts)** to listen for messages from a [background script.](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)
- **in a background script** to listen for messages from a content script.
- **in an [options page](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#options_pages) or [popup](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface#popups) script** to listen for messages from a background script.
- **in a background script** to listen for messages from an options page or popup script.

To send a message that is received by the `onMessage()` listener, use {{WebExtAPIRef("runtime.sendMessage()")}} or (to send a message to a content script) {{WebExtAPIRef("tabs.sendMessage()")}}.

> [!NOTE]
> Avoid creating multiple `onMessage()` listeners for the same type of message because the order in which multiple listeners fire is not guaranteed.
>
> If you want to guarantee the delivery of a message to a specific endpoint, use the [connection-based approach to exchange messages](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

Along with the message itself, the listener is passed:

- a `sender` object with details about the message sender.
- a `sendResponse()` function that can be used to send a response back to the sender.

You can send a synchronous response to the message by calling the `sendResponse()` function inside your listener. See the [sending a synchronous response example](#sending_a_synchronous_response).

To send an asynchronous response, there are two options:

- return `true` from the event listener. This keeps the `sendResponse()` function valid after the listener returns, so you can call it later. See the [sending an asynchronous response using `sendResponse` example](#sending_an_asynchronous_response_using_sendresponse).
  > [!WARNING]
  > Do not prepend `async` to the function. Prepending `async` changes the meaning to [sending an asynchronous response using a promise](#sending_an_asynchronous_response_using_a_promise), which is effectively the same as `sendResponse(true)`.
- return a `Promise` from the event listener, and resolve when you have the response (or reject it in case of an error). [See the [sending an asynchronous response using a promise example](#sending_an_asynchronous_response_using_a_promise).

> [!NOTE]
> You can also use a [connection-based approach to exchange messages](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

## Syntax

```js-nolint
browser.runtime.onMessage.addListener(listener)
browser.runtime.onMessage.removeListener(listener)
browser.runtime.onMessage.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Checks whether at least one listener is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed these arguments:

    - `message`
      - : `object`. The message. This is a serializable object (see [Data cloning algorithm](/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
    - `sender`
      - : A {{WebExtAPIRef('runtime.MessageSender')}} object representing the sender of the message.
    - `sendResponse`

      - : A function to call, at most once, to send a response to the `message`. The function takes one argument: any serializable object (see [Data cloning algorithm](/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)). This argument is passed back to the message sender.

        If you have more than one `onMessage()` listener in the same document, then only one can send a response.

        To send a response synchronously, call `sendResponse()` before the listener function returns.

        To send a response asynchronously, use one of these options:

        - Return a {{jsxref("Promise")}} from the listener function and resolve the promise when the response is ready. This is the preferred approach.
        - Keep a reference to the `sendResponse()` argument and return `true` from the listener function. You then call `sendResponse()` after the listener function returns.

          > [!NOTE]
          > Promise as a return value is not supported in Chrome until [Chrome bug 1185241](https://crbug.com/1185241) is resolved. As an alternative, [return true and use sendResponse](#sending_an_asynchronous_response_using_sendresponse).

    The `listener` function can return either a Boolean or a {{jsxref("Promise")}}.

    > [!NOTE]
    > If you pass an async function to `addListener()`, the listener returns a Promise for every message it receives, preventing other listeners from responding:
    >
    > ```js example-bad
    > // don't do this
    > browser.runtime.onMessage.addListener(async (data, sender) => {
    >   if (data.type === "handle_me") {
    >     return "done";
    >   }
    > });
    > ```
    >
    > Suppose you only want the listener to respond to messages of a specific type. In that case, you must define the listener as a non-async function and return a Promise only for the messages the listener is meant to respond to — and otherwise return false or undefined:
    >
    > ```js example-good
    > browser.runtime.onMessage.addListener((data, sender) => {
    >   if (data.type === "handle_me") {
    >     return Promise.resolve("done");
    >   }
    >   return false;
    > });
    > ```

## Examples

### Simple example

This content script listens for click events on the web page. If the click is on a link, it messages the background page with the target URL:

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName !== "A") {
    return;
  }
  browser.runtime.sendMessage({ url: e.target.href });
}
```

The background script listens for these messages and displays a notification using the [`notifications`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API:

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.extension.getURL("link.png"),
    title: "You clicked a link!",
    message: message.url,
  });
}
```

### Sending a synchronous response

This content script sends a message to the background script when the user clicks on the page. It also logs any response sent by the background script:

```js
// content-script.js

function handleResponse(message) {
  console.log(`background script sent a response: ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function sendMessage(e) {
  const sending = browser.runtime.sendMessage({
    content: "message from the content script",
  });
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", sendMessage);
```

Here is a version of the corresponding background script that sends a response synchronously from inside the listener:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`content script sent a message: ${request.content}`);
  sendResponse({ response: "response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

And here is another version that uses {{jsxref("Promise.resolve()")}}:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`content script sent a message: ${request.content}`);
  return Promise.resolve({ response: "response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

### Sending an asynchronous response using sendResponse

Here is an alternative version of the background script from the previous example. It sends a response asynchronously after the listener returns. Note `return true;` in the listener: this tells the browser that you intend to use the `sendResponse` argument after the listener returns.

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`content script sent a message: ${request.content}`);
  setTimeout(() => {
    sendResponse({ response: "async response from background script" });
  }, 1000);
  return true;
}

browser.runtime.onMessage.addListener(handleMessage);
```

> [!WARNING]
> Do not prepend `async` to the function. Prepending `async` changes the meaning to [sending an asynchronous response using a promise](#sending_an_asynchronous_response_using_a_promise), which is effectively the same as `sendResponse(true)`.

### Sending an asynchronous response using a Promise

> [!NOTE]
> Promise as a return value is not supported in Chrome until [Chrome bug 1185241](https://crbug.com/1185241) is resolved. As an alternative, [return true and use `sendResponse`](#sending_an_asynchronous_response_using_sendresponse).

This content script gets the first `<a>` link on the page and sends a message asking if the link's location is bookmarked. It expects to get a Boolean response (`true` if the location is bookmarked, `false` otherwise):

```js
// content-script.js

const firstLink = document.querySelector("a");

function handleResponse(isBookmarked) {
  if (isBookmarked) {
    firstLink.classList.add("bookmarked");
  }
}

browser.runtime
  .sendMessage({
    url: firstLink.href,
  })
  .then(handleResponse);
```

Here is the background script. It uses `{{WebExtAPIRef("bookmarks.search()")}}` to see if the link is bookmarked, which returns a {{jsxref("Promise")}}:

```js
// background-script.js

function isBookmarked(message, sender, response) {
  return browser.bookmarks
    .search({
      url: message.url,
    })
    .then((results) => results.length > 0);
}

browser.runtime.onMessage.addListener(isBookmarked);
```

If the asynchronous handler doesn't return a Promise, you can explicitly construct a promise. This rather contrived example sends a response after a 1-second delay, using {{domxref("Window.setTimeout", "setTimeout()")}}:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ response: "async response from background script" });
    }, 1000);
  });
}

browser.runtime.onMessage.addListener(handleMessage);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onMessage) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
