---
title: "ViewTransition: transitionRoot property"
short-title: transitionRoot
slug: Web/API/ViewTransition/transitionRoot
page-type: web-api-instance-property
browser-compat: api.ViewTransition.transitionRoot
---

{{APIRef("View Transition API")}}

The **`transitionRoot`** read-only property of the
{{domxref("ViewTransition")}} interface is a reference to the root {{domxref("Element")}} of the [view transition](/en-US/docs/Web/API/View_Transition_API/Using) scope.

## Value

An {{domxref("Element")}}.

- For document-scoped view transitions, `transitionRoot` will be a reference to the {{domxref("Document.documentElement")}} property, which for standard web documents is a reference to the {{htmlelement("html")}} element.
- For [element-scoped view transitions](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped), `transitionRoot` will be a reference to the `Element` that {{domxref("Element.startViewTransition()", "startViewTransition()")}} was called on to create the view transition.

## Examples

### Basic usage

```js
const myElement = document.querySelector(".my-element");

// ...

function handleVT() {
  const vt = myElement.startViewTransition(() => {
    updateDOMSomehow();
  });

  // ...

  // Returns reference to myElement
  vt.transitionRoot;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ViewTransitionTypeSet")}}
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using)
- [Using view transition types](/en-US/docs/Web/API/View_Transition_API/Using_types)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
