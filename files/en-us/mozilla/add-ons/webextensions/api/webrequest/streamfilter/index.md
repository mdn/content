---
title: webRequest.StreamFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter
page-type: webextension-api-type
browser-compat: webextensions.api.webRequest.StreamFilter
---

{{AddonSidebar}}

A `StreamFilter` is an object you use to monitor and modify HTTP responses.

To create a `StreamFilter`, call {{WebExtAPIRef("webRequest.filterResponseData()")}}, passing the ID of the web request you want to filter.

You can think of the stream filter as sitting between the networking stack and the browser's rendering engine. The filter is passed HTTP response data as it's received from the network. It can examine and modify the data before passing it along to the rendering engine, where it is parsed and rendered. The filter has full control over the response body, and the default behavior without any listeners or write calls is to have a stream without content that never closes.

The filter generates four different events:

- {{WebEXTAPIRef("webRequest.StreamFilter.onstart", "onstart")}} when the filter is about to start receiving response data.
- {{WebEXTAPIRef("webRequest.StreamFilter.ondata", "ondata")}} when some response data has been received by the filter and is available to be examined or modified.
- {{WebEXTAPIRef("webRequest.StreamFilter.onstop", "onstop")}} when the filter has finished receiving response data.
- {{WebEXTAPIRef("webRequest.StreamFilter.onerror", "onerror")}} if an error has occurred in initializing and operating the filter.

You can listen to each event by assigning a listener function to its attribute:

```js
filter.onstart = (event) => {
  console.log("started");
};
```

Note that the request is blocked during the execution of any event listeners.

The filter provides a {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}} function. At any time from the `onstart` event onwards you can use this function to write data to the output stream.

If you assign listeners to any of the filter's events, all the response data passed to the rendering engine is supplied through calls you make to `write()`. So, if you add a listener and don't call `write()` the rendered page is blank.

Once you have finished interacting with the response, call either of the following:

- {{WebEXTAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}: This disconnects the filter from the request, so the rest of the response is processed normally.
- {{WebEXTAPIRef("webRequest.StreamFilter.close()", "close()")}}: This closes the request, so no additional response data will be processed.

The filter also provides functions to {{WebEXTAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}} and {{WebEXTAPIRef("webRequest.StreamFilter.resume()", "resume()")}} the request.

## Methods

- {{WebExtAPIRef("webRequest.StreamFilter.close()")}}
  - : Closes the request.
- {{WebExtAPIRef("webRequest.StreamFilter.disconnect()")}}
  - : Disconnects the filter from the request.
- {{WebExtAPIRef("webRequest.StreamFilter.resume()")}}
  - : Resumes processing of the request.
- {{WebExtAPIRef("webRequest.StreamFilter.suspend()")}}
  - : Suspends processing of the request.
- {{WebExtAPIRef("webRequest.StreamFilter.write()")}}
  - : Writes some data to the output stream.

## Properties

- {{WebExtAPIRef("webRequest.StreamFilter.ondata")}}
  - : Event handler which is called when incoming data is available.
- {{WebExtAPIRef("webRequest.StreamFilter.onerror")}}
  - : Event handler which is called when an error has occurred.
- {{WebExtAPIRef("webRequest.StreamFilter.onstart")}}
  - : Event handler which is called when the stream is about to start receiving data.
- {{WebExtAPIRef("webRequest.StreamFilter.onstop")}}
  - : Event handler which is called when the stream has no more data to deliver and has closed.
- {{WebExtAPIRef("webRequest.StreamFilter.error")}}
  - : When {{WebExtAPIRef("webRequest.StreamFilter.onerror")}} is called, this will describe the error.
- {{WebExtAPIRef("webRequest.StreamFilter.status")}}
  - : Describes the current status of the stream.

## Browser compatibility

{{Compat}}

## Examples

This code listens for `onstart`, `ondata`, and `onstop`. It logs those events, and the response data as an {{jsxref("ArrayBuffer")}} itself:

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    console.log("started");
  };

  filter.ondata = (event) => {
    console.log(event.data);
    filter.write(event.data);
  };

  filter.onstop = (event) => {
    console.log("finished");
    filter.disconnect();
  };

  // return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
