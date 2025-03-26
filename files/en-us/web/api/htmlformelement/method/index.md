---
title: "HTMLFormElement: method property"
short-title: method
slug: Web/API/HTMLFormElement/method
page-type: web-api-instance-property
browser-compat: api.HTMLFormElement.method
---

{{APIRef("HTML DOM")}}

The **`HTMLFormElement.method`** property represents the
{{Glossary("HTTP")}} method used to submit the {{HtmlElement("form")}}.

Unless explicitly specified, the default method is 'get'.

## Value

A string.

## Examples

```js
document.forms["my-form"].method = "post";

const formElement = document.createElement("form"); // Create a form
document.body.appendChild(formElement);
console.log(formElement.method); // 'get'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
