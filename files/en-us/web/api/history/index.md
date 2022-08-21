---
title: History
slug: Web/API/History
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - History API
  - Interface
  - Web
browser-compat: api.History
---
{{ APIRef("History API") }}

The **`History`** interface allows manipulation of the browser _session history_, that is the pages visited in the tab or frame that the current page is loaded in.

## Properties

_The `History` interface doesn't inherit any property._

- {{domxref("History.length","length")}} {{ReadOnlyInline}}
  - : Returns an `Integer` representing the number of elements in the session history, including the currently loaded page. For example, for a page loaded in a new tab this property returns `1`.
- {{domxref("History.scrollRestoration","scrollRestoration")}}
  - : Allows web applications to explicitly set default scroll restoration behavior on history navigation. This property can be either `auto` or `manual`.
- {{domxref("History.state","state")}} {{ReadOnlyInline}}
  - : Returns an `any` value representing the state at the top of the history stack. This is a way to look at the state without having to wait for a {{domxref("Window/popstate_event", "popstate")}} event.

## Methods

_The `History`_ _interface doesn't inherit any methods._

- {{domxref("History.back","back()")}}

  - : This asynchronous method goes to the previous page in session history, the same action as when the user clicks the browser's <kbd>Back</kbd> button. Equivalent to `history.go(-1)`.

    Calling this method to go back beyond the first page in the session history has no effect and doesn't raise an exception.

- {{domxref("History.forward","forward()")}}

  - : This asynchronous method goes to the next page in session history, the same action as when the user clicks the browser's <kbd>Forward</kbd> button; this is equivalent to `history.go(1)`.

    Calling this method to go forward beyond the most recent page in the session history has no effect and doesn't raise an exception.

- {{domxref("History.go","go()")}}
  - : Asynchronously loads a page from the session history, identified by its relative location to the current page, for example `-1` for the previous page or `1` for the next page. If you specify an out-of-bounds value (for instance, specifying `-1` when there are no previously-visited pages in the session history), this method silently has no effect. Calling `go()` without parameters or a value of `0` reloads the current page. Internet Explorer lets you specify a string, instead of an integer, to go to a specific URL in the history list.
- {{domxref("History.pushState","pushState()")}}
  - : Pushes the given data onto the session history stack with the specified title (and, if provided, URL). The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized.  Note that all browsers but Safari currently ignore the _title_ parameter. For more information, see [Working with the History API](/en-US/docs/Web/API/History_API/Working_with_the_History_API).
- {{domxref("History.replaceState","replaceState()")}}
  - : Updates the most recent entry on the history stack to have the specified data, title, and, if provided, URL. The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized.  Note that all browsers but Safari currently ignore the _title_ parameter. For more information, see [Working with the History API](/en-US/docs/Web/API/History_API/Working_with_the_History_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Window.history")}} property returning the history of the current session.
