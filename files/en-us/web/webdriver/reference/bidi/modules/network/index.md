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

An intercept makes the browser block requests at a chosen point, so that the client can inspect them, change them, or fail them before the browser goes on.
Add one with [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept), which returns an intercept ID, and remove it with [`network.removeIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeIntercept).

An intercept matches requests by the phases it covers, and optionally by URL patterns and by the [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) the requests come from.
It blocks a request only if the session is [subscribed](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to the event for the phase, for the context the request comes from.
When it does, that event has `isBlocked` set to `true` and lists the matching intercepts in its `intercepts` field, and the browser waits until the client sends one of the commands for that phase:

| Phase               | When the request is blocked                     | Event                                                                                                     | Commands that resume or end the request                                                                                                                                                                                                                                                                     |
| ------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `beforeRequestSent` | Before the browser sends the request            | [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) | [`network.continueRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest), [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest), [`network.provideResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/provideResponse) |
| `responseStarted`   | After the browser receives the response headers | [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted)     | [`network.continueResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueResponse), [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest), `network.provideResponse`                                                                           |
| `authRequired`      | When the server asks for authentication         | [`network.authRequired`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired)           | `network.continueResponse`, [`network.continueWithAuth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueWithAuth), `network.provideResponse`                                                                                                                                              |

A command for another phase returns an `invalid argument` error, and the request stays blocked.
A request can be blocked again in a later phase, by the same intercept or by another one.

Intercepts belong to the session that adds them.
Removing an intercept doesn't release the requests it has already blocked, but when the session ends, the browser resumes every request the session blocked.

## Commands

- [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept)
- [`network.continueRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest)
- [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest)
- [`network.removeIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeIntercept)
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
