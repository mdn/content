---
title: "HTMLScriptElement: type property"
short-title: type
slug: Web/API/HTMLScriptElement/type
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.type
---

{{APIRef("HTML DOM")}}

The **`type`** property of the {{domxref("HTMLScriptElement")}} interface is a string that reflects the type of the script.

It reflects the `type` attribute of the {{HTMLElement("script")}} element.

## Value

A string. The value of this property can be one of the following:

- **Attribute is not set (default), an empty string, or a JavaScript MIME type**
  - : Indicates that the script is a "classic script", containing JavaScript code.
- `module`
  - : This value causes the code to be treated as a JavaScript module.
- `importmap`
  - : This value indicates that the body of the element contains an import map.
- `speculationrules` {{experimental_inline}}
  - : This value indicates that the body of the element contains speculation rules.
- **Any other value**
  - : The embedded content is treated as a data block, and won't be processed by the browser.

For more information, please refer to the [`type`](/en-US/docs/Web/HTML/Element/script/type) attribute of the {{HTMLElement("script")}} element.

## Examples

```html
<script id="el" type="text/javascript"></script>
```

```js
const el = document.getElementById("el");
console.log(el.type); // Output: "text/javascript"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
