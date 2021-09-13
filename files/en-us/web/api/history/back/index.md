---
title: History.back()
slug: Web/API/History/back
tags:
  - API
  - HTML DOM
  - History
  - History API
  - Method
  - Reference
  - Web
browser-compat: api.History.back
---
{{APIRef("History API")}}

The **`History.back()`** method causes
the browser to move back one page in the session history.

It has the same
effect as calling {{domxref("History.go", "history.go(-1)")}}. If there is no previous
page, this method call does nothing.

This method is {{glossary("asynchronous")}}. Add a listener for the
{{event("popstate")}} event in order to determine when the navigation has completed.

## Syntax

```js
history.back()
```

## Examples

The following short example causes a button on the page to navigate back one entry in
the session history.

### HTML

```html
<button id="go-back">Go back!</button>
```

### JavaScript

```js
document.getElementById('go-back').addEventListener('click', () => {
  history.back();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("History")}}
- [Working with
  the History API](/en-US/docs/Web/API/History_API/Working_with_the_History_API)
