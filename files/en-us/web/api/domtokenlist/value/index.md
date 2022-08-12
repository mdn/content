---
title: DOMTokenList.value
slug: Web/API/DOMTokenList/value
page-type: web-api-instance-property
tags:
  - Property
  - Reference
browser-compat: api.DOMTokenList.value
---
{{APIRef("DOM")}}

The **`value`** property of the {{domxref("DOMTokenList")}}
interface is a {{Glossary("stringifier")}} that returns the value of the list serialized as a
string, or clears and sets the list to the given value.

## Value

A string representing the serialized content of the list.
Each item is separated by a space.

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}, then write the value of the list to the
`<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
span.textContent = classes.value;
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
