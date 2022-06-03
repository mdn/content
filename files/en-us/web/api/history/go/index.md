---
title: History.go()
slug: Web/API/History/go
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - History
  - History API
  - Method
  - Reference
browser-compat: api.History.go
---
{{APIRef("History API")}}

The **`History.go()`** method loads a specific page from the
session history. You can use it to move forwards and backwards through the history
depending on the value of a parameter.

This method is {{glossary("asynchronous")}}. Add a listener for the
{{domxref("Window/popstate_event", "popstate")}} event in order to determine when the navigation has completed.

## Syntax

```js
go()
go(delta)
```

### Parameters

- `delta` {{optional_inline}}
  - : The position in the history to which you want to move, relative to the current page.
    A negative value moves backwards, a positive value moves forwards. So, for example,
    `history.go(2)` moves forward two pages and `history.go(-2)`
    moves back two pages. If no value is passed or if `delta` equals 0, it has
    the same result as calling `location.reload()`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

To move back one page (the equivalent of calling {{domxref("History.back",
  "back()")}}):

```js
history.go(-1)
```

To move forward a page, just like calling {{domxref("History.forward", "forward()")}}:

```js
history.go(1)
```

To move forward two pages:

```js
history.go(2);
```

To move backwards by two pages:

```js
history.go(-2);
```

And, finally either of the following statements will reload the current page:

```js
history.go();
history.go(0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("History")}}
- {{DOMxRef("History.back","back()")}}
- {{DOMxRef("History.forward","forward()")}}
- {{domxref("Window/popstate_event", "popstate")}} event
- [Working with the History API](/en-US/docs/Web/API/History_API/Working_with_the_History_API)
