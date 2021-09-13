---
title: DOMTokenList.toggle()
slug: Web/API/DOMTokenList/toggle
tags:
  - API
  - DOM
  - DOMTokenList
  - Method
  - Reference
  - toggle
browser-compat: api.DOMTokenList.toggle
---
{{APIRef("DOM")}}

The **`toggle()`** method of the {{domxref("DOMTokenList")}}
interface removes a given `token` from the list and returns
`false`. If `token` doesn't exist it's added and the function returns
`true`.

## Syntax

```js
tokenList.toggle(token [, force]);
```

### Parameters

- `token`
  - : A {{domxref("DOMString")}} representing the token you want to toggle.
- `force` {{optional_inline}}
  - : If included, turns the toggle into a one way-only operation. If set to
    `false`, then `token` will
    _only_ be removed, but not added. If set to `true`, then
    `token` will _only_ be added, but not removed.

### Return value

`true` or `false`, indicating whether `token` is in the
list after the call.

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We then replace a token in the list, and write the
list into the `<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b">classList is 'a b'</span>
```

Now the JavaScript:

```js
let span = document.querySelector("span");
let classes = span.classList;

span.addEventListener('click', function() {
  let result = classes.toggle("c");

  if (result) {
    span.textContent = `'c' added; classList is now "${classes}".`;
  } else {
    span.textContent = `'c' removed; classList is now "${classes}".`;
  }
})
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
