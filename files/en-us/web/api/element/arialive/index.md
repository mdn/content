---
title: "Element: ariaLive property"
short-title: ariaLive
slug: Web/API/Element/ariaLive
page-type: web-api-instance-property
browser-compat: api.Element.ariaLive
---

{{APIRef("DOM")}}

The **`ariaLive`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) attribute, which indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the [live region](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions).

## Value

A string with one of the following values:

- `"assertive"`
  - : Indicates that updates to the region have the highest priority and should be presented to the user immediately.
- `"off"`
  - : Indicates that updates to the region should not be presented to the user unless the user is currently focused on that region.
- `"polite"`
  - : Indicates that updates to the region should be presented at the next graceful opportunity, such as at the end of speaking the current sentence or when the user pauses typing.

## Examples

In this example the [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) attribute on the element with an ID of `planetInfo` is set to `"polite"`. We then update the value to `"assertive"`.

```html
<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">No planet selected</h2>
  <p id="planetDescription">Select a planet to view its description</p>
</div>
```

```js
let el = document.getElementById("planetInfo");
console.log(el.ariaLive); // "polite"
el.ariaLive = "assertive";
console.log(el.ariaLive); // "assertive"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
