---
title: Attr.value
slug: Web/API/Attr/value
tags:
  - Property
  - Reference
browser-compat: api.Attr.value
---
{{APIRef("DOM")}}

The **`value`** property of the {{domxref("Attr")}} interface contains the value of the attribute.

### Value

A string representing the attribute value.

## Example

The following example displays the current value of the attribute `test`. Clicking on the button will change it to a different value, and read it again to update the displayed value.

### HTML Content

```html
<label test="initial value"></label>

<button>Click me to set test to <code>"a new value"</code>…</button>
<br><br>
Current value of the <code>test</code> attribute: <output id="result"><i>None.</i></output>
```

### JavaScript Content

```js
const elements = document.getElementsByTagName("label");
const buttons = document.getElementsByTagName("button");
const result  = document.querySelector("#result");

const attribute = elements[0].attributes[0];
result.value = attribute.value;

buttons[0].addEventListener('click',function(e) {
    attribute.value = "a new value";
    result.value = attribute.value;
  }
);
```

{{ EmbedLiveSample('Example','100%',100) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
