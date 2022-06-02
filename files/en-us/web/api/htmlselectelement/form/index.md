---
title: HTMLSelectElement.form
slug: Web/API/HTMLSelectElement/form
page-type: web-api-instance-property
tags:
  - API
  - HTMLSelectElement
  - Property
  - Read-only
  - Reference
browser-compat: api.HTMLSelectElement.form
---
{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.form`** read-only property returns a
{{domxref("HTMLFormElement")}} representing the form that this element is associated
with. If the element is not associated with of a {{HTMLElement("form")}} element, then
it returns `null`.

## Value

A {{domxref("HTMLFormElement")}}.

## Examples

```html
<form id="pet-form">
  <label for="pet-select">Choose a pet</label>
  <select name="pets" id="pet-select">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="parrot">Parrot</option>
  </select>

  <button type="submit">Submit</button>
</form>

<label for="lunch-select">Choose your lunch</label>
<select name="lunch" id="lunch-select">
    <option value="salad">Salad</option>
    <option value="sandwich">Sandwich</option>
</select>

<script>
  const petSelect = document.getElementById("pet-select");
  const petForm = petSelect.form; // <form id="pet-form">

  const lunchSelect = document.getElementById("lunch-select");
  const lunchForm = lunchSelect.form; // null
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
