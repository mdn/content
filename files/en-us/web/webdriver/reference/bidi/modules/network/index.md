---
title: "`network` module"
short-title: network
slug: Web/WebDriver/Reference/BiDi/Modules/network
page-type: listing-page
browser-compat: webdriver.bidi.network
sidebar: webdriver
---

The **`network`** module contains commands and events related to network requests.

## Data collectors

`network` events describe requests and responses, but they don't include their bodies.
To retrieve bodies, add a data collector with [`network.addDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addDataCollector), which makes the browser keep the bodies of requests, responses, or both.
The collector collects bodies of requests from all [contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), or only from the specified [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) or [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts).
A collector for top-level contexts also collects bodies from their child contexts, such as iframes.
It doesn't collect a body larger than the maximum size that you specify.

The collector doesn't collect the bodies of requests that completed before it was added.
It might not collect the bodies of requests already in progress, so add the collector before the requests start.

To retrieve a body, send [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData) with the request ID from a `network` event, such as [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted), and whether you want the request or the response body.

A collected body stays available until every collector that collected it releases it, unless the browser discards it to make room (see below).
A collector releases a body in any of the following cases:

- You send [`network.disownData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/disownData), or `network.getData` with the collector's ID and `disown` set to `true`.
- You remove the collector with [`network.removeDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeDataCollector).
- The session that added the collector ends, for example with [`session.end`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/end). Collectors belong to the session that adds them.

Once no collector keeps a body, the browser deletes it, and `network.getData` returns a `no such network data` error for it.

The browser also limits the total size of the bodies it keeps for all sessions together.
The limit depends on the browser.
When a new body doesn't fit, the browser discards bodies collected earlier until there's room, and `network.getData` returns an `unavailable network data` error for them.

## Commands

- [`network.addDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addDataCollector)
- [`network.disownData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/disownData)
- [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData)
- [`network.removeDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeDataCollector)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
