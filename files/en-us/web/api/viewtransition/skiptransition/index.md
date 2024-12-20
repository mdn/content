---
title: "ViewTransition: skipTransition() method"
short-title: skipTransition()
slug: Web/API/ViewTransition/skipTransition
page-type: web-api-instance-method
browser-compat: api.ViewTransition.skipTransition
---

{{APIRef("View Transition API")}}

The **`skipTransition()`** method of the
{{domxref("ViewTransition")}} interface skips the animation part of the view transition, but doesn't skip running the associated view update.

## Syntax

```js-nolint
skipTransition()
```

### Parameters

None.

### Return value

`undefined`.

## Examples

### Skipping an SPA view transition

```js
// start new view transition
const transition = document.startViewTransition(() => displayNewImage());

// skip the animation and just update the DOM
transition.skipTransition();
```

### Skipping an MPA view transition

```js
// Fired on the current (outgoing) page
document.addEventListener("pageswap", (event) => {
  event.viewTransition?.skipTransition();
});

// Fired on the destination (inbound) page
document.addEventListener("pagereveal", (event) => {
  event.viewTransition?.skipTransition();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
