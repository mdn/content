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

## Authentication

When a server asks for [authentication](/en-US/docs/Web/HTTP/Guides/Authentication) and the browser is about to ask for credentials, it sends the [`network.authRequired`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired) event.
The browser doesn't send it when it already has credentials for the realm, for example credentials provided earlier, and sends them with the request.

To answer the server from the client, add an intercept for the `authRequired` phase with [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept).
The request then waits until you send one of the following commands:

- [`network.continueWithAuth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueWithAuth), to provide credentials, to go on without them so that the page receives the server's response, or to let the browser handle the challenge itself
- [`network.continueResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueResponse), to provide credentials or change the response
- [`network.provideResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/provideResponse), to replace the response

If the server rejects the credentials and asks again, you receive another `network.authRequired` event with the same request ID.

## Commands

- [`network.continueWithAuth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueWithAuth)
- [`network.setCacheBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setCacheBehavior)
- [`network.setExtraHeaders`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders)

## Events

- [`network.authRequired`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired)
- [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent)
- [`network.fetchError`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError)
- [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted)
- [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
