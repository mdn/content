---
title: History.forward()
slug: Web/API/History/forward
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - History
  - History API
  - Method
  - Reference
browser-compat: api.History.forward
---
{{APIRef("History API")}}

The **`History.forward()`** method causes the browser to move
forward one page in the session history. It has the same effect as calling
{{domxref("History.go", "history.go(1)")}}.

This method is {{glossary("asynchronous")}}. Add a listener for the
{{domxref("Window/popstate_event", "popstate")}} event in order to determine when the navigation has completed.

## Syntax

```js
forward()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following examples create a button that moves forward one step in the session
history.

### HTML

```html
<button id='go-forward'>Go Forward!</button>
```

### JavaScript

```js
document.getElementById('go-forward').addEventListener('click', (e) => {
  window.history.forward();
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("History")}}
- [Working with the History API](/en-US/docs/Web/API/History_API/Working_with_the_History_API)
