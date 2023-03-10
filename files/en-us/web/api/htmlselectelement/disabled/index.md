---
title: HTMLSelectElement.disabled
slug: Web/API/HTMLSelectElement/disabled
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.disabled
---

{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.disabled`** property is a boolean value that reflects the
[`disabled`](/en-US/docs/Web/HTML/Element/select#disabled)
HTML attribute, which indicates whether the control is disabled. If it is disabled, it
does not accept clicks. A disabled element is unusable and un-clickable.

## Value

A boolean value.

## Examples

### HTML

```html
<label>
  Allow drinks?
  <input id="allow-drinks" type="checkbox" />
</label>

<label for="drink-select">Drink selection:</label>
<select id="drink-select" disabled>
  <option value="1">Water</option>
  <option value="2">Beer</option>
  <option value="3">Pepsi</option>
  <option value="4">Whisky</option>
</select>
```

### JavaScript

```js
const allowDrinksCheckbox = document.getElementById("allow-drinks");
const drinkSelect = document.getElementById("drink-select");

allowDrinksCheckbox.addEventListener(
  "change",
  (event) => {
    drinkSelect.disabled = !event.target.checked;
  },
  false
);
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
