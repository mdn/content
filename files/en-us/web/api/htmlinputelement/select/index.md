---
title: "HTMLInputElement: select() method"
short-title: select()
slug: Web/API/HTMLInputElement/select
page-type: web-api-instance-method
browser-compat: api.HTMLInputElement.select
---

{{ APIRef("HTML DOM") }}

The **`HTMLInputElement.select()`** method selects all the text
in a {{HTMLElement("textarea")}} element or in an {{HTMLElement("input")}} element
that includes a text field.

## Syntax

```js-nolint
select()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Click the button in this example to select all the text in the
`<input>` element.

### HTML

```html
<input type="text" id="text-box" size="20" value="Hello world!" />
<button>Select text</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.select();
}

document.querySelector("button").addEventListener("click", selectText);
```

### Result

{{EmbedLiveSample("Examples")}}

## Notes

Calling `element.select()` will not necessarily focus the input, so it is
often used with {{domxref("HTMLElement.focus")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ HTMLElement("input") }}
- {{ HTMLElement("textarea") }}
- {{ domxref("HTMLInputElement") }}
- {{ domxref("HTMLInputElement.setSelectionRange") }}
