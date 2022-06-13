---
title: 'TypeError: "x" is read-only'
slug: Web/JavaScript/Reference/Errors/Read-only
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript [strict
mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception "is read-only" occurs when a global variable or object
property that was assigned to is a read-only property.

## Message

```js
TypeError: Assignment to read-only properties is not allowed in strict mode (Edge)
TypeError: "x" is read-only (Firefox)
TypeError: 0 is read-only (Firefox)
TypeError: Cannot assign to read only property 'x' of #<Object> (Chrome)
TypeError: Cannot assign to read only property '0' of [object Array] (Chrome)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

The global variable or object property that was assigned to is a read-only property.
(Technically, it is a [non-writable
data property](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Writable_attribute).)

This error happens only in [strict mode code](/en-US/docs/Web/JavaScript/Reference/Strict_mode). In
non-strict code, the assignment is silently ignored.

## Examples

### Invalid cases

Read-only properties are not super common, but they can be created using
{{jsxref("Object.defineProperty()")}} or {{jsxref("Object.freeze()")}}.

```js example-bad
'use strict';
var obj = Object.freeze({name: 'Elsa', score: 157});
obj.score = 0;  // TypeError

'use strict';
Object.defineProperty(this, 'LUNG_COUNT', {value: 2, writable: false});
LUNG_COUNT = 3;  // TypeError

'use strict';
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++;  // TypeError
```

There are also a few read-only properties built into JavaScript. Maybe you tried to
redefine a mathematical constant.

```js example-bad
'use strict';
Math.PI = 4;  // TypeError
```

Sorry, you can't do that.

The global variable `undefined` is also read-only, so you can't silence the
infamous "undefined is not a function" error by doing this:

```js example-bad
'use strict';
undefined = function() {};  // TypeError: "undefined" is read-only
```

### Valid cases

```js example-good
'use strict';
var obj = Object.freeze({name: 'Score', points: 157});
obj = {name: obj.name, points: 0};   // replacing it with a new object works

'use strict';
var LUNG_COUNT = 2;  // a `var` works, because it's not read-only
LUNG_COUNT = 3;  // ok (anatomically unlikely, though)
```

## See also

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
