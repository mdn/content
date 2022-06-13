---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
tags:
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.source
---
{{JSRef}}

The **`source`** property returns a {{jsxref("String")}} containing the source text of the regexp object, and it doesn't contain the two forward slashes on both sides and any flags.

{{EmbedInteractiveExample("pages/js/regexp-prototype-source.html")}}{{js_property_attributes(0, 0, 1)}}

## Examples

### Using source

```js
var regex = /fooBar/ig;

console.log(regex.source); // "fooBar", doesn't contain /.../ and "ig".
```

### Empty regular expressions and escaping

Starting with ECMAScript 5, the `source` property no longer returns an empty string for empty regular expressions. Instead, the string `(?:)` is returned. In addition, line terminators (such as "\n") are escaped now.

```js
new RegExp().source; // "(?:)"

new RegExp('\n').source === '\n';  // true, prior to ES5
new RegExp('\n').source === '\\n'; // true, starting with ES5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.prototype.flags")}}
