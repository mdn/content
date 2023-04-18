---
title: "ViewTransition: skipTransition() method"
short-title: skipTransition()
slug: Web/API/ViewTransition/skipTransition
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ViewTransition.skipTransition
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

The **`skipTransition()`** method of the
{{domxref("ViewTransition")}} interface skips the animation part of the view transition, but doesn't skip running the {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} callback that updates the DOM.

## Syntax

```js-nolint
skipTransition()
```

### Parameters

None.

### Return value

`undefined`.

## Examples

```js
// start new view transition
const transition = document.startViewTransition(() => displayNewImage());

// skip the animation and just update the DOM
transition.skipTransition();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
