---
title: "History: forward() method"
short-title: forward()
slug: Web/API/History/forward
page-type: web-api-instance-method
browser-compat: api.History.forward
---

{{APIRef("History API")}}

The **`forward()`** method of the {{domxref("History")}} interface causes the browser to move
forward one page in the session history. It has the same effect as calling
{{domxref("History.go", "history.go(1)")}}.

This method is {{glossary("asynchronous")}}. Add a listener for the {{domxref("Window/popstate_event", "popstate")}} event in order to determine when the navigation has completed.

## Syntax

```js-nolint
forward()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the associated document is not fully active. Browsers also throttle navigations and may throw this error, generate a warning, or ignore the call if it's called too frequently.

## Examples

The following examples create a button that moves forward one step in the session
history.

### HTML

```html
<button id="go-forward">Go Forward!</button>
```

### JavaScript

```js
document.getElementById("go-forward").addEventListener("click", (e) => {
  history.forward();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("History")}}
- {{domxref("Window/popstate_event", "popstate")}}
- [Working with the History API](/en-US/docs/Web/API/History_API/Working_with_the_History_API)
