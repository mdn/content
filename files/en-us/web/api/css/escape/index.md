---
title: CSS.escape()
slug: Web/API/CSS/escape
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
{{APIRef("CSSOM")}}{{SeeCompatTable}}

The **`CSS.escape()`** static method returns a
{{DOMxRef("CSSOMString")}} containing the escaped string passed as parameter, mostly for
use as part of a CSS selector.

## Syntax

```js
escapedStr = CSS.escape(str);
```

### Parameters

- _str_
  - : The {{DOMxRef("CSSOMString")}} to be escaped.

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
var element = document.querySelector('#' + CSS.escape(id) + ' > img');
```

The `escape()` method can also be used for escaping strings, although it
escapes characters that don't strictly need to be escaped:

```js
var element = document.querySelector('a[href="#' + CSS.escape(fragment) + '"]');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("CSS")}} interface where this static method resides.
- [A
  polyfill for the CSS.escape](https://github.com/mathiasbynens/CSS.escape/blob/master/css.escape.js)
