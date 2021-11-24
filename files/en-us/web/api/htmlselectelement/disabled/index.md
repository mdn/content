---
title: HTMLSelectElement.disabled
slug: Web/API/HTMLSelectElement/disabled
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - Property
browser-compat: api.HTMLSelectElement.disabled
---
{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.disabled`** is a boolean value that reflects the
[`disabled`](/en-US/docs/Web/HTML/Element/select#attr-disabled)
HTML attribute, which indicates whether the control is disabled. If it is disabled, it
does not accept clicks. A disabled element is unusable and un-clickable.

## Syntax

```js
aSelectElement.disabled = aBool;
```

## Example

### HTML

```html
<label>
  Allow drinks?
  <input id="allow-drinks" type="checkbox"/>
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
var allowDrinksCheckbox = document.getElementById("allow-drinks");
var drinkSelect = document.getElementById("drink-select");

allowDrinksCheckbox.addEventListener("change", function(event) {
  if (event.target.checked) {
    drinkSelect.disabled = false;
  } else {
    drinkSelect.disabled = true;
  }
}, false);
```

### Result

{{EmbedLiveSample('Example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
