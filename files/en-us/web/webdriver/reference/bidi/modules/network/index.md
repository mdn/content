---
title: "`network` module"
short-title: network
slug: Web/WebDriver/Reference/BiDi/Modules/network
page-type: listing-page
browser-compat: webdriver.bidi.network
sidebar: webdriver
---

The **`network`** module contains commands and events related to network requests.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
