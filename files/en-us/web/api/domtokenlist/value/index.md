---
title: DOMTokenList.value
slug: Web/API/DOMTokenList/value
tags:
  - API
  - DOM
  - DOMTokenList
  - Property
  - Reference
  - value
browser-compat: api.DOMTokenList.value
---
{{APIRef("DOM")}}

The **`value`** property of the {{domxref("DOMTokenList")}}
interface is a stringifier that returns the value of the list as a
{{domxref("DOMString")}}, or clears and sets the list to the given value.

## Syntax

```js
tokenList.value;
```

### Value

A {{domxref("DOMString")}}

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
let span = document.querySelector("span");
let classes = span.classList;
span.textContent = classes.value;
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
