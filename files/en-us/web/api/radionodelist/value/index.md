---
title: "RadioNodeList: value property"
short-title: value
slug: Web/API/RadioNodeList/value
page-type: web-api-instance-property
browser-compat: api.RadioNodeList.value
---

{{ APIRef("HTML DOM") }}

If the underlying element collection contains radio buttons, the
**`RadioNodeList.value`** property represents the checked radio
button. On retrieving the `value` property, the `value` of the
currently `checked` radio button is returned as a string. If the collection
does not contain any radio buttons or none of the radio buttons in the collection is in
`checked` state, the empty string is returned. On setting the
`value` property, the first radio button input element whose
`value` property is equal to the new value will be set to
`checked`.

## Syntax

```js-nolint
value = radioNodeList.value
radioNodeList.value = string
```

## Example

### HTML

```html
<form>
  <label><input type="radio" name="color" value="blue" />Blue</label>
  <label><input type="radio" name="color" value="red" />Red</label>
</form>
```

### JavaScript

```js
// Get the form
const form = document.forms[0];

// Get the form's radio buttons
const radios = form.elements["color"];

// Choose the "red" option
radios.value = "red";
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}
  elements.
