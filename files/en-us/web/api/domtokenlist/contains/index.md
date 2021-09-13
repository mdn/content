---
title: DOMTokenList.contains()
slug: Web/API/DOMTokenList/contains
tags:
  - API
  - Contains
  - DOM
  - DOMTokenList
  - Method
  - Reference
browser-compat: api.DOMTokenList.contains
---
{{APIRef("DOM")}}

The **`contains()`** method of the {{domxref("DOMTokenList")}}
interface returns a boolean value — `true` if the underlying list
contains the given `token`, otherwise `false`.

## Syntax

```js
tokenList.contains(token);
```

### Parameters

- `token`
  - : A {{domxref("DOMString")}} representing the token you want to check for the
    existence of in the list.

### Return value

A boolean value, which is `true` if the calling list contains
`token`, otherwise `false`.

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We then test for the existence of `"c"` in
the list, and write the result into the `<span>`'s
{{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
let span = document.querySelector("span");
let classes = span.classList;
let result = classes.contains("c");
if (result) {
  span.textContent = "The classList contains 'c'";
} else {
   span.textContent = "The classList does not contain 'c'";
}
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
