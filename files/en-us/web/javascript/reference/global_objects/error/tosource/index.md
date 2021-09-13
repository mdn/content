---
title: Error.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Error/toSource
tags:
  - JavaScript
  - Method
  - Non-standard
  - Prototype
browser-compat: javascript.builtins.Error.toSource
---
{{JSRef}} {{non-standard_header}}

The **`toSource()`** method returns code that could eval to the
same error.

## Syntax

```js
toSource()
```

### Return value

A string containing the source code of the error.

## Examples

### Using toSource

Calling the `toSource` method of an {{jsxref("Error")}} instance (including
_[NativeErrors](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types)_)
will return a string containing the source code of the error. This string can be
evaluated to create an (approximately) equal object. Naturally, the string containing
the source follows the structure of the {{jsxref("Error")}} constructor. For example:

```js
(newname(message ,fileName,lineNumber))
```

where these attributes correspond to the respective properties of the error instance.

> **Note:** Be aware that the properties used by the `toSource`
> method in the creation of this string are mutable and may not accurately reflect the
> function used to create an error instance or the filename or line number where the
> actual error occurred.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.fileName")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.name")}}
- {{jsxref("Object.prototype.toSource()")}}
