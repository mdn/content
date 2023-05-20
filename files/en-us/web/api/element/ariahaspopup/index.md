---
title: "Element: ariaHasPopup property"
short-title: ariaHasPopup
slug: Web/API/Element/ariaHasPopup
page-type: web-api-instance-property
browser-compat: api.Element.ariaHasPopup
---

{{DefaultAPISidebar("DOM")}}

The **`ariaHasPopup`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) attribute, which indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

## Value

A string with one of the following values:

- `"false"`
  - : The element does not have a popup.
- `"true"`
  - : The element has a popup that is a menu.
- `"menu"`
  - : The element has a popup that is a menu.
- `"listbox"`
  - : The element has a popup that is a listbox.
- `"tree"`
  - : The element has a popup that is a tree.
- `"grid"`
  - : The element has a popup that is a grid.
- `"dialog"`
  - : The element has a popup that is a dialog.

> **Warning:** Be aware that support for the different `aria-haspopup` values can vary depending on the element to which the attribute is specified. Ensure that when using `aria-haspopup`, it is done in accordance to the ARIA specification, and that it behaves as expected when testing with necessary browsers and assistive technologies.

## Examples

In this example, the `aria-haspopup` attribute on the element with an ID of `animal` is set to "`true`". Using `ariaHasPopup`, we update the value to "`listbox`", which is the expected value for a combobox that invokes a `listbox` popup.

```html
<div class="animals-combobox">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="list"
    aria-controls="animals-listbox"
    aria-activedescendant=""
    aria-expanded="false"
    aria-haspopup="true" />
  <ul id="animals-listbox" role="listbox" aria-label="Animals">
    <li id="animal-cat" role="option">Cat</li>
    <li id="animal-dog" role="option">Dog</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaHasPopup); // true
el.ariaHasPopup = "listbox";
console.log(el.ariaHasPopup); // listbox
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
