---
title: "Element: activeViewTransition property"
short-title: activeViewTransition
slug: Web/API/Element/activeViewTransition
page-type: web-api-instance-property
browser-compat: api.Element.activeViewTransition
---

{{APIRef("DOM")}}

The **`activeViewTransition`** read-only property of the {{domxref("Element")}} interface returns a {{domxref("ViewTransition")}} instance representing the [view transition](/en-US/docs/Web/API/View_Transition_API) currently active on an element. It provides a consistent way to access an active element-scoped view transition without having to worry about saving a reference for easy access later on.

An element-scoped {{domxref("ViewTransition")}} can also be accessed via the return value of {{domxref("Element.startViewTransition()")}}.

## Value

A {{domxref("ViewTransition")}} or `null` if the element has no active view transition.

## Examples

```js
const myElement = document.querySelector(".my-element");

// ...

function handleVT() {
  const vt = myElement.startViewTransition(() => {
    updateDOMSomehow();
  });
}

// Returns reference to vt, above, provided transition is still ongoing
myElement.activeViewTransition;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.startViewTransition()")}}
- [Using element-scoped view transitions](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped)
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- {{domxref("ViewTransition")}}
