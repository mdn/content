---
title: HTMLFormElement.method
slug: Web/API/HTMLFormElement/method
tags:
  - API
  - HTML DOM
  - HTMLFormElement
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLFormElement.method
---
{{APIRef("HTML DOM")}}

The **`HTMLFormElement.method`** property represents the
{{Glossary("HTTP")}} method used to submit the {{HtmlElement("form")}}.

Unless explicitly specified, the default method is 'get'.

## Syntax

```js
var string = form.method;
form.method = string;
```

## Example

```js
document.forms['myform'].method = 'post';

const formElement = document.createElement("form"); // Create a form
document.body.appendChild(formElement);
console.log(formElement.method); // 'get'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
