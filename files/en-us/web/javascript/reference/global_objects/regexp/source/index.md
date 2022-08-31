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

The **`source`** accessor property is a string containing the source text of the regex object, without the two forward slashes on both sides or any flags.

{{EmbedInteractiveExample("pages/js/regexp-prototype-source.html")}}

## Examples

### Using source

```js
const regex = /fooBar/ig;

console.log(regex.source); // "fooBar", doesn't contain /.../ and "ig".
```

### Empty regular expressions and escaping

For empty regular expressions, the string `(?:)` is returned. In addition, line terminators (such as "\n") are escaped.

```js
new RegExp().source; // "(?:)"

new RegExp('\n').source === '\\n'; // true, starting with ES5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.prototype.flags")}}
