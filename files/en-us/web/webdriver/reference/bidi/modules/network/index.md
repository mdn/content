---
title: "`network` module"
short-title: network
slug: Web/WebDriver/Reference/BiDi/Modules/network
page-type: listing-page
browser-compat: webdriver.bidi.network
sidebar: webdriver
---

The **`network`** module contains commands and events for monitoring and controlling the browser's network requests and responses.

## Requests

In WebDriver BiDi, each network request the browser makes has a request ID.
This includes requests for a page or its subresources, such as stylesheets and scripts, as well as requests made by a script using {{domxref("Window/fetch", "fetch()")}}.
Every event in the `network` module that relates to the request includes this ID in the `request` field of its `request` object.
You can use this ID to match events that belong to the same request.

A request that loads a document into a [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) as part of a navigation has a navigation ID.
This includes the request for a navigation started with [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate).
This ID matches the navigation ID of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events) events for the same navigation, such as [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted).
Requests for the document's subresources have a `navigation` value of `null`.

## Request lifecycle

To receive the events, subscribe to them with [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe).
As a request goes ahead, the browser sends the following events in order:

1. [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) fires before the browser sends the request over the network or before it handles the request using its cache.
2. [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) fires when the browser has received the response headers.
3. [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) fires when the browser has received the whole response body.

If the server asks for authentication, the browser also sends [`network.authRequired`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired) after `network.responseStarted`.
If the request fails at any point, for example because the host can't be reached or because the page aborts the request while the body is arriving, the browser sends [`network.fetchError`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError).
This is the last event in the request's lifecycle.

When the server responds with a redirect, the browser sends `network.responseStarted` and `network.responseCompleted` for the redirect response, and then `network.beforeRequestSent` for the new URL.
All the events for the original URL and the new URL have the same request ID, and the `redirectCount` field increases by one with each redirect.

## Intercepts

A client can block requests or responses with intercepts, which can be added to the session using the [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept) command.
When a request matches an intercept, the browser blocks the request or response at a phase that the intercept covers, provided the client is subscribed to the corresponding event (such as `network.beforeRequestSent` or `network.responseStarted`).
The event for that phase has `isBlocked` set to `true` and includes the matching intercept IDs in its payload.
The browser then waits until the client lets the request continue, for example with the [`network.continueRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest) command.

## Changing responses

Two commands change what the page receives for a blocked request:

- [`network.continueResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueResponse) changes the status, headers, or cookies of the response that the server sent and keeps its body.
  It works for a request blocked in the `responseStarted` or `authRequired` phase.
- [`network.provideResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/provideResponse) provides a response of your own for a request blocked in any phase.
  In the `beforeRequestSent` phase, the browser doesn't send the request, and the page receives the response that you specify.
  In the later phases, the status, headers, cookies, and body that you specify replace those of the server's response.

## Commands

- [`network.continueResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueResponse)
- [`network.provideResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/provideResponse)
- [`network.setCacheBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setCacheBehavior)
- [`network.setExtraHeaders`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders)

## Events

- [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent)
- [`network.fetchError`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError)
- [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted)
- [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
