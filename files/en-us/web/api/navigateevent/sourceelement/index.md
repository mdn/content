---
title: "NavigateEvent: sourceElement property"
short-title: sourceElement
slug: Web/API/NavigateEvent/sourceElement
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigateEvent.sourceElement
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`sourceElement`** read-only property of the
{{domxref("NavigateEvent")}} interface returns an {{domxref("Element")}} object representing the initiating element, in cases where the navigation was initiated by an element.

The initiating element can be:

- An HTML {{htmlelement("a")}} element (or SVG [`<a>`](/en-US/docs/Web/SVG/Reference/Element/a) element).
- An {{htmlelement("area")}} element.
- A submit button ([`<input type="submit">`](/en-US/docs/Web/HTML/Reference/Elements/input/submit) or [`<button type="submit">`](/en-US/docs/Web/HTML/Reference/Elements/button)).
- A submitted {{htmlelement("form")}} element.

## Value

An {{domxref("Element")}} object representing the element that initiated the navigation, or `null` if the navigation was not initiated by an element.

## Examples

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.sourceElement);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
