---
title: "TypeError: can't delete non-configurable array element"
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "can't delete non-configurable array element" occurs when it
was attempted to [shorten the length](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array)
of an array, but one of the array's elements is [non-configurable](/en-US/docs/Web/JavaScript/Data_structures#properties).

## Message

```plain
TypeError: Cannot delete property '1' of [object Array] (V8-based)
TypeError: can't delete non-configurable array element (Firefox)
TypeError: Unable to delete property. (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

It was attempted to [shorten the length](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array)
of an array, but one of the array's elements is [non-configurable](/en-US/docs/Web/JavaScript/Data_structures#properties).
When shortening an array, the elements beyond the new array length will be deleted,
which failed in this situation.

The `configurable` attribute controls whether the property can be deleted
from the object and whether its attributes (other than `writable`) can be
changed.

Usually, properties in an object created by an [array initializer](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) are configurable. However, for example, when using {{jsxref("Object.defineProperty()")}}, the property isn't configurable by default.

## Examples

### Non-configurable properties created by Object.defineProperty

The {{jsxref("Object.defineProperty()")}} creates non-configurable properties by
default if you haven't specified them as configurable.

```js example-bad
"use strict";
const arr = [];
Object.defineProperty(arr, 0, { value: 0 });
Object.defineProperty(arr, 1, { value: "1" });

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

You will need to set the elements as configurable, if you intend to shorten the array.

```js example-good
"use strict";
const arr = [];
Object.defineProperty(arr, 0, { value: 0, configurable: true });
Object.defineProperty(arr, 1, { value: "1", configurable: true });

arr.length = 1;
```

### Sealed Arrays

The {{jsxref("Object.seal()")}} function marks all existing elements as
non-configurable.

```js example-bad
"use strict";
const arr = [1, 2, 3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

You either need to remove the {{jsxref("Object.seal()")}} call, or make a copy of it.
In case of a copy, shortening the copy of the array does not modify the original array
length.

```js example-good
"use strict";
const arr = [1, 2, 3];
Object.seal(arr);

// Copy the initial array to shorten the copy
const copy = Array.from(arr);
copy.length = 1;
// arr.length === 3
```

## See also

- [\[\[Configurable\]\]](/en-US/docs/Web/JavaScript/Data_structures#properties)
- {{jsxref("Array/length", "length")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.seal()")}}
