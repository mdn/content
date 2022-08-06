---
title: 'TypeError: can''t assign to property "x" on "y": not an object'
slug: Web/JavaScript/Reference/Errors/Cant_assign_to_property
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript strict mode exception "can't assign to property" occurs when attempting
to create a property on [primitive](/en-US/docs/Glossary/Primitive) value
such as a [symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol), a [string](/en-US/docs/Glossary/String), a [number](/en-US/docs/Glossary/Number) or a [boolean](/en-US/docs/Glossary/Boolean). [Primitive](/en-US/docs/Glossary/Primitive) values cannot hold any [property](/en-US/docs/Glossary/property/JavaScript).

## Message

```
TypeError: Cannot create property 'x' on number '1' (V8-based)
TypeError: can't assign to property "x" on 1: not an object (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Error type

{{jsxref("TypeError")}}.

## What went wrong?

In {{jsxref("Strict_mode")}}, a {{jsxref("TypeError")}} is raised when attempting to
create a property on [primitive](/en-US/docs/Glossary/Primitive) value such
as a [symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol), a [string](/en-US/docs/Glossary/String), a [number](/en-US/docs/Glossary/Number) or a [boolean](/en-US/docs/Glossary/Boolean). [Primitive](/en-US/docs/Glossary/Primitive) values cannot hold any [property](/en-US/docs/Glossary/property/JavaScript).

The problem might be that an unexpected value is flowing at an unexpected place, or
that an object variant of a {{jsxref("String")}} or a {{jsxref("Number")}} is expected.

## Examples

### Invalid cases

```js example-bad
'use strict';

const foo = "my string";
// The following line does nothing if not in strict mode.
foo.bar = {}; // TypeError: can't assign to property "bar" on "my string": not an object
```

### Fixing the issue

Either fix the code to prevent the [primitive](/en-US/docs/Glossary/Primitive) from being used in such places, or fix the issue by creating the object equivalent {{jsxref("Object")}}.

```js example-good
'use strict';

const foo = new String("my string");
foo.bar = {};
```

## See also

- {{jsxref("Strict_mode")}}
- [primitive](/en-US/docs/Glossary/Primitive)
