---
title: "HTMLScriptElement: text property"
short-title: text
slug: Web/API/HTMLScriptElement/text
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.text
---

{{APIRef("HTML DOM")}}

The **`text`** property of the {{domxref("HTMLScriptElement")}} interface is a string that reflects the text content inside the {{HTMLElement("script")}} element. It acts the same way as the {{domxref("Node.textContent")}} property.

It reflects the `text` attribute of the {{HTMLElement("script")}} element.

## Value

A string.

## Examples

```html
<script id="el" type="text/javascript">
  const num = 10;
  console.log(num);
</script>
```

```js
const el = document.getElementById("el");
console.log(el.text); // Output: "\n  const num = 10;\n  console.log(num);\n"
console.log(el.textContent); // Output: "\n  const num = 10;\n  console.log(num);\n"

el.text = "console.log(10);";
console.log(el.text); // Output: "console.log(10);"
console.log(el.textContent); // Output: "console.log(10);"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
