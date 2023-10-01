---
title: "Attr: value property"
short-title: value
slug: Web/API/Attr/value
page-type: web-api-instance-property
browser-compat: api.Attr.value
---

{{APIRef("DOM")}}

The **`value`** property of the {{domxref("Attr")}} interface contains the value of the attribute.

## Value

A string representing the attribute value.

## Example

The following example displays the current value of the attribute `test`. Clicking on the button will change it to a different value, and read it again to update the displayed value.

### HTML

```html
<label test="initial value"></label>

<button>Click me to set test to <code>"a new value"</code>…</button>

<p>
  Current value of the <code>test</code> attribute:
  <output id="result">None.</output>
</p>
```

### JavaScript

```js
const element = document.querySelector("label");
const button = document.querySelector("button");
const result = document.querySelector("#result");

const attribute = element.attributes[0];
result.value = attribute.value;

button.addEventListener("click", () => {
  attribute.value = "a new value";
  result.value = attribute.value;
});
```

{{ EmbedLiveSample('Example','100%',100) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
