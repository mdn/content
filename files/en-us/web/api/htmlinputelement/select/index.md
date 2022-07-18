---
title: HTMLInputElement.select()
slug: Web/API/HTMLInputElement/select
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - Method
  - NeedsCompatTable
  - Reference
browser-compat: api.HTMLInputElement.select
---
{{ APIRef("HTML DOM") }}

The **`HTMLInputElement.select()`** method selects all the text
in a {{HTMLElement("textarea")}} element or in an {{HTMLElement("input")}} element
that includes a text field.

## Syntax

```js
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
<input type="text" id="text-box" size="20" value="Hello world!">
<button onclick="selectText()">Select text</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById('text-box');
  input.focus();
  input.select();
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Notes

Calling `element.select()` will not necessarily focus the input, so it is
often used with {{domxref("HTMLElement.focus")}}.

In browsers where it is not supported, it is possible to replace it with a call to [HTMLInputElement.setSelectionRange()](/en-US/docs/Web/API/HTMLInputElement/setSelectionRange) with
parameters 0 and the input's value length:

```html
<input onClick="this.select();" value="Sample Text" />
<!-- equivalent to -->
<input onClick="this.setSelectionRange(0, this.value.length);" value="Sample Text" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ HTMLElement("input") }}
- {{ HTMLElement("textarea") }}
- {{ domxref("HTMLInputElement") }}
- {{ domxref("HTMLInputElement.setSelectionRange") }}
