---
title: CSS.escape()
slug: Web/API/CSS/escape
page-type: web-api-static-method
tags:
  - API
  - CSS
  - CSSOM
  - Method
  - Reference
  - Static
  - escape()
browser-compat: api.CSS.escape
---
{{APIRef("CSSOM")}}

The **`CSS.escape()`** static method returns a
string containing the escaped string passed as parameter, mostly for
use as part of a CSS selector.

## Syntax

```js
escape(str)
```

### Parameters

- `str`
  - : The string to be escaped.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Basic results

```js
CSS.escape(".foo#bar")        // "\.foo\#bar"
CSS.escape("()[]{}")          // "\(\)\[\]\\{\\}"
CSS.escape('--a')             // "--a"
CSS.escape(0)                 // "\30 ", the Unicode code point of '0' is 30
CSS.escape('\0')              // "\ufffd", the Unicode REPLACEMENT CHARACTER
```

### In context uses

To escape a string for use as part of a selector, the `escape()` method can
be used:

```js
const element = document.querySelector(`#${CSS.escape(id)} > img`);
```

The `escape()` method can also be used for escaping strings, although it
escapes characters that don't strictly need to be escaped:

```js
const element = document.querySelector(`a[href="#${CSS.escape(fragment)}"]`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("CSS")}} interface where this static method resides.
- [A polyfill for the CSS.escape](https://github.com/mathiasbynens/CSS.escape/blob/master/css.escape.js)
