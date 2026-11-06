---
title: "`network` module"
short-title: network
slug: Web/WebDriver/Reference/BiDi/Modules/network
page-type: listing-page
browser-compat: webdriver.bidi.network
sidebar: webdriver
---

The **`network`** module contains commands and events related to network requests.

## Intercepts

An intercept makes the browser block requests at a chosen point, so that the client can inspect them, change them, or fail them before the browser goes on.
Add one with [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept), which returns an intercept ID, and remove it with [`network.removeIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeIntercept).

An intercept matches requests by the phases it covers, and optionally by URL patterns and by the [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) the requests come from.
It blocks a request only if the session is [subscribed](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to the event for the phase in the request's context.
When it does, that event has `isBlocked` set to `true` and lists the matching intercepts in its `intercepts` field.
The browser then waits until the client sends one of the commands for that phase:

| Phase               | When the request is blocked                     | Event                                                                                                     | Commands that resume or end the request                                                                                                                                                                                                                                                                     |
| ------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `beforeRequestSent` | Before the browser sends the request            | [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) | [`network.continueRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest), [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest), [`network.provideResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/provideResponse) |
| `responseStarted`   | After the browser receives the response headers | [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted)     | [`network.continueResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueResponse), [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest), `network.provideResponse`                                                                           |
| `authRequired`      | When the server asks for authentication         | [`network.authRequired`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired)           | `network.continueResponse`, [`network.continueWithAuth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueWithAuth), `network.provideResponse`                                                                                                                                              |

A command for another phase returns an `invalid argument` error, and the request stays blocked.
A request can be blocked again in a later phase, by the same intercept or by another one.

Intercepts belong to the session that adds them.
Removing an intercept doesn't release the requests it has already blocked.
When the session ends, the browser resumes every request the session blocked.

## Commands

- [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept)
- [`network.continueRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest)
- [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest)
- [`network.removeIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeIntercept)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
