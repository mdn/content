---
title: "History: state property"
short-title: state
slug: Web/API/History/state
page-type: web-api-instance-property
browser-compat: api.History.state
---

{{APIRef("History API")}}

The **`History.state`** property
returns a value representing the state at the top of the history stack. This is
a way to look at the state without having to wait for a {{domxref("Window/popstate_event", "popstate")}} event.

## Value

The state at the top of the history stack. The value is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) until the
{{domxref("History.pushState","pushState()")}} or
{{domxref("History.replaceState","replaceState()")}} method is used.

## Examples

The code below logs the value of `history.state` before using the
{{domxref("History.pushState","pushState()")}} method to push a value to the history.
The next line logs the value to the console again, showing that
`history.state` now has a value.

```js
// Should be null because we haven't modified the history stack yet
console.log("History.state before pushState: ", history.state);

// Now push something on the stack
history.pushState({ name: "Example" }, "pushState example", "page3.html");

// Now state has a value.
console.log("History.state after pushState: ", history.state);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Working with the History API](/en-US/docs/Web/API/History_API/Working_with_the_History_API)
- [`History.pushState()`](/en-US/docs/Web/API/History/pushState)
- [`History.replaceState()`](/en-US/docs/Web/API/History/replaceState)
- [`PopStateEvent.state`](/en-US/docs/Web/API/PopStateEvent/state)
