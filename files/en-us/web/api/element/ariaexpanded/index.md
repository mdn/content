---
title: "Element: ariaExpanded property"
short-title: ariaExpanded
slug: Web/API/Element/ariaExpanded
page-type: web-api-instance-property
browser-compat: api.Element.ariaExpanded
---

{{DefaultAPISidebar("DOM")}}

The **`ariaExpanded`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) attribute, which indicates whether a grouping element owned or controlled by this element is expanded or collapsed.

## Value

A string with one of the following values:

- `"true"`
  - : The grouping element this element owns or controls is expanded.
- `"false"`
  - : The grouping element this element owns or controls is collapsed.
- `"undefined"`
  - : The element does not own or control a grouping element that is expandable.

## Examples

In this example the `aria-expanded` attribute on the element with an ID of `animal` is set to "false". Using `ariaExpanded` we update the value to "true".

```html
<div class="animals-combobox">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="list"
    aria-expanded="false"
    aria-haspopup="true" />
  <button id="animals-button" tabindex="-1" aria-label="Open">▽</button>
  <ul id="animals-listbox" role="listbox" aria-label="Animals">
    <li id="animal-cat" role="option">Cat</li>
    <li id="animal-dog" role="option">Dog</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaExpanded); // false
el.ariaExpanded = "true";
console.log(el.ariaExpanded); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
