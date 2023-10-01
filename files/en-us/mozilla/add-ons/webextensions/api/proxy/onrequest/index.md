---
title: proxy.onRequest
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onRequest
page-type: webextension-api-event
browser-compat: webextensions.api.proxy.onRequest
---

{{AddonSidebar()}}

Fired when a web request is about to be made, to give the extension an opportunity to proxy it.

This event is closely modeled on the events defined in the [`webRequest`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) API. Like those events, its `addListener()` function takes three arguments:

- the listener that is called when the event is fired.
- a [`RequestFilter`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) object controlling which requests cause the event to fire.
- an array of strings to control other aspects of the event's behavior.

The event is fired before any of the `webRequest` events for the same request.

When the event is fired, the listener is called with an object containing information about the request. The listener returns a {{WebExtAPIRef("proxy.ProxyInfo")}} object representing a proxy to use (or an array of {{WebExtAPIRef("proxy.ProxyInfo")}} objects, enabling the browser to fail over if a proxy is unreachable).

To use `proxy.onRequest`, an extension must have the "proxy" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) and the [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the URLs of the requests that it intercepts, which means that the match patterns in the `filter` argument must be a subset of the extension's host permissions.

## Syntax

```js-nolint
browser.proxy.onRequest.addListener(
  listener,             //  function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.proxy.onRequest.removeListener(listener)
browser.proxy.onRequest.hasListener(listener)
```

Events have three functions:

- `addListener(listener, filter, extraInfoSpec)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function that is called when this event occurs. The function is passed a single argument, which is a {{WebExtAPIRef("proxy.RequestDetails")}} object containing details of the request.

    The listener can return any of:

    - a {{WebExtAPIRef("proxy.ProxyInfo")}} object.
    - an array of {{WebExtAPIRef("proxy.ProxyInfo")}} objects.
    - a `Promise` that resolves to a `ProxyInfo` object.
    - a `Promise` that resolves to an array of `ProxyInfo` objects.

    If the listener returns an array, or a Promise that resolves to an array, then all `ProxyInfo` objects after the first one represent failovers: if the proxy at position N in the array is not reachable when its `ProxyInfo.failoverTimeout` expires the browser will try the proxy at position N+1.

    If there is an error specifying the {{WebExtAPIRef("proxy.ProxyInfo")}} objects, then {{WebExtAPIRef("proxy.onError")}} is called.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. A set of filters that restricts the events that are sent to the listener.
- `extraInfoSpec` {{optional_inline}}
  - : `array` of `string`. Extra options for the event. Pass `"requestHeaders"` to include the request headers in the `details` object passed to the listener.

## Browser compatibility

{{Compat}}

## Examples

This code intercepts requests to `<all_urls>`, and proxies them if they are not for a top-level frame.

```js
function shouldProxyRequest(requestInfo) {
  return requestInfo.parentFrameId !== -1;
}

function handleProxyRequest(requestInfo) {
  if (shouldProxyRequest(requestInfo)) {
    console.log(`Proxying: ${requestInfo.url}`);
    return { type: "http", host: "127.0.0.1", port: 65535 };
  }
  return { type: "direct" };
}

browser.proxy.onRequest.addListener(handleProxyRequest, {
  urls: ["<all_urls>"],
});
```

{{WebExtExamples}}
