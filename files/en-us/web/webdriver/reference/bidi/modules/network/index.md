---
title: network module
short-title: network
slug: Web/WebDriver/Reference/BiDi/Modules/network
page-type: listing-page
browser-compat: webdriver.bidi.network
sidebar: webdriver
---

The **`network`** module contains commands and events for monitoring and changing the network requests that the browser sends.

## Requests

Each request the browser makes, such as for a page, for a stylesheet or a script on the page, or for a script's {{domxref("Window/fetch", "fetch()")}} call, has a request ID.
Every `network` event about the request contains this ID in its `request.request` field, so you can match the events that belong to one request.

To receive the events, subscribe to them with [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe).
As a request goes ahead, the browser sends the following events in order:

1. [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent), before the browser sends the request.
2. [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted), when the browser has received the response headers.
3. [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted), when the browser has received the whole response body.

If the server asks for authentication, the browser also sends `network.authRequired` after `network.responseStarted`.
If the request fails at any point, for example because the host can't be reached or because the page aborts the request while the body is arriving, the browser sends [`network.fetchError`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError), and it is the last event for the request.

When the server responds with a redirect, the browser sends `network.responseStarted` and `network.responseCompleted` for the redirect response, and then `network.beforeRequestSent` for the new URL.
All the events for the original URL and the new URL have the same request ID, and the `redirectCount` field increases by one with each redirect.

A request that loads a document into a [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), such as a navigation started with [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), has a `navigation` ID.
It matches the `navigation` ID of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events) events for the same navigation, such as [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted).
Requests for the document's subresources have a `navigation` value of `null`.

A client can block requests with intercepts, which it adds with the `network.addIntercept` command.
When a request matches an intercept, the event for the phase that the intercept covers, such as `network.beforeRequestSent` or `network.responseStarted`, has `isBlocked` set to `true` and lists the matching intercepts in its `intercepts` field.
The browser then waits until the client lets the request continue, for example with the `network.continueRequest` command.

## Events

- [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent)
- [`network.fetchError`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError)
- [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted)
- [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
