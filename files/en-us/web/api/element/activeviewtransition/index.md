---
title: "Element: activeViewTransition property"
short-title: activeViewTransition
slug: Web/API/Element/activeViewTransition
page-type: web-api-instance-property
browser-compat: api.Element.activeViewTransition
---

{{APIRef("View Transition API")}}

The **`activeViewTransition`** read-only property of the {{domxref("Element")}} interface returns a {{domxref("ViewTransition")}} instance representing the [view transition](/en-US/docs/Web/API/View_Transition_API) currently active on an element. It provides a consistent way to access an active [element-scoped view transition](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped) without needing to save a reference to it for later.

An element-scoped {{domxref("ViewTransition")}} can also be accessed via the return value of {{domxref("Element.startViewTransition()")}}.

## Value

A {{domxref("ViewTransition")}} or `null` if the element has no active view transition.

## Examples

### Basic usage

This snippet shows how to use `activeViewTransition` to retrieve a reference to an ongoing view transition.

```js
const myElement = document.querySelector(".my-element");

// ...

function handleVT() {
  const vt = myElement.startViewTransition(() => {
    updateDOMSomehow();
  });
}

// Returns a reference to vt if the transition is still ongoing
myElement.activeViewTransition;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.startViewTransition()")}}
- {{domxref("Document.activeViewTransition")}}
- [Using element-scoped view transitions](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped)
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- {{domxref("ViewTransition")}}
