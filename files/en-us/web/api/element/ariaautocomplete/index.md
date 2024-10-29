---
title: "Element: ariaAutoComplete property"
short-title: ariaAutoComplete
slug: Web/API/Element/ariaAutoComplete
page-type: web-api-instance-property
browser-compat: api.Element.ariaAutoComplete
---

{{APIRef("DOM")}}

The **`ariaAutoComplete`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) attribute, which indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions would be presented if they were made.

## Value

A string with one of the following values:

- `"inline"`
  - : When a user is providing input, text suggesting one way to complete the provided input may be dynamically inserted after the caret.
- `"list"`
  - : When a user is providing input, an element containing a collection of values that could complete the provided input may be displayed.
- `"both"`
  - : When a user is providing input, an element containing a collection of values that could complete the provided input may be displayed. If displayed, one value in the collection is automatically selected, and the text needed to complete the automatically selected value appears after the caret in the input.
- `"none"`
  - : When a user is providing input, there is no display of an automatic suggestion that attempts to predict how the user intends to complete the input.

## Examples

In this example, the `aria-autocomplete` attribute on the element with an ID of `animal` is set to `"inline"`. Using `ariaAutoComplete` we update the value to `"list"`, which is the expected value for a combobox that invokes a `listbox` popup.

```html
<div class="animals-combobox">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="inline"
    aria-controls="animals-listbox"
    aria-expanded="false"
    aria-haspopup="listbox" />
  <ul id="animals-listbox" role="listbox" aria-label="Animals">
    <li id="animal-cat" role="option">Cat</li>
    <li id="animal-dog" role="option">Dog</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaAutoComplete); // inline
el.ariaAutoComplete = "list";
console.log(el.ariaAutoComplete); // list
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
