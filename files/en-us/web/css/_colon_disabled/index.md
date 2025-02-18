---
title: :disabled
slug: Web/CSS/:disabled
page-type: css-pseudo-class
browser-compat: css.selectors.disabled
---

{{CSSRef}}

The **`:disabled`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any disabled element. An element is disabled if it can't be activated (selected, clicked on, typed into, etc.) or accept focus. The element also has an enabled state, in which it can be activated or accept focus.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-disabled.html", "tabbed-standard")}}

## Syntax

```css
:disabled {
  /* ... */
}
```

## Examples

This example shows a basic shipping form. It uses the [JavaScript](/en-US/docs/Web/JavaScript) {{domxref("HTMLElement/change_event", "change")}} event to let the user enable/disable the billing fields.

### HTML

```html
<form action="#">
  <fieldset id="shipping">
    <legend>Shipping address</legend>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Address" />
    <input type="text" placeholder="Zip Code" />
  </fieldset>
  <br />
  <fieldset id="billing">
    <legend>Billing address</legend>
    <label for="billing-checkbox">Same as shipping address:</label>
    <input type="checkbox" id="billing-checkbox" checked />
    <br />
    <input type="text" placeholder="Name" disabled />
    <input type="text" placeholder="Address" disabled />
    <input type="text" placeholder="Zip Code" disabled />
  </fieldset>
</form>
```

### CSS

```css
input[type="text"]:disabled {
  background: #ccc;
}
```

### JavaScript

Toggle the disabled input fields when the checkbox is clicked

```js
const checkbox = document.querySelector("#billing-checkbox");
const billingItems = document.querySelectorAll('#billing input[type="text"]');

checkbox.addEventListener("change", () => {
  billingItems.forEach((item) => {
    item.disabled = !item.disabled;
  });
});
```

### Result

Check/un-check the checkbox to change the styling on the billing fields.

{{EmbedLiveSample('Examples', 300, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":enabled")}}
