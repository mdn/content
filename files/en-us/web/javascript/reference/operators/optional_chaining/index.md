---
title: Optional chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
page-type: javascript-operator
browser-compat: javascript.operators.optional_chaining
---

{{JSSidebar("Operators")}}

The **optional chaining (`?.`)** operator accesses an object's property or calls a function. If the object accessed or function called using this operator is {{jsxref("undefined")}} or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), the expression short circuits and evaluates to {{jsxref("undefined")}} instead of throwing an error.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html", "taller")}}

## Syntax

```js-nolint
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)
```

## Description

The `?.` operator is like the `.` chaining operator, except that instead of causing an error if a reference is [nullish](/en-US/docs/Glossary/Nullish) ([`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or {{JSxRef("undefined")}}), the expression short-circuits with a return value of `undefined`. When used with function calls, it returns `undefined` if the given function does not exist.

This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.

For example, consider an object `obj` which has a nested structure. Without
optional chaining, looking up a deeply-nested subproperty requires validating the
references in between, such as:

```js
const nestedProp = obj.first && obj.first.second;
```

The value of `obj.first` is confirmed to be non-`null` (and
non-`undefined`) before accessing the value of
`obj.first.second`. This prevents the error that would occur if you accessed
`obj.first.second` directly without testing `obj.first`.

This is an idiomatic pattern in JavaScript, but it gets verbose when the chain is long, and it's not safe. For example, if `obj.first` is a {{glossary("Falsy")}} value that's not `null` or `undefined`, such as `0`, it would still short-circuit and make `nestedProp` become `0`, which may not be desirable.

With the optional chaining operator (`?.`), however, you don't have to
explicitly test and short-circuit based on the state of `obj.first` before
trying to access `obj.first.second`:

```js
const nestedProp = obj.first?.second;
```

By using the `?.` operator instead of just `.`, JavaScript knows
to implicitly check to be sure `obj.first` is not `null` or
`undefined` before attempting to access `obj.first.second`. If
`obj.first` is `null` or `undefined`, the expression
automatically short-circuits, returning `undefined`.

This is equivalent to the following, except that the temporary variable is in fact not
created:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

Optional chaining cannot be used on a non-declared root object, but can be used with a root object with value `undefined`.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Optional chaining with function calls

You can use optional chaining when attempting to call a method which may not exist.
This can be helpful, for example, when using an API in which a method might be
unavailable, either due to the age of the implementation or because of a feature which
isn't available on the user's device.

Using optional chaining with function calls causes the expression to automatically
return `undefined` instead of throwing an exception if the method isn't
found:

```js
const result = someInterface.customMethod?.();
```

However, if there is a property with such a name which is not a function, using `?.` will still raise a {{JSxRef("TypeError")}} exception "someInterface.customMethod is not a function".

> **Note:** If `someInterface` itself is `null` or
> `undefined`, a {{JSxRef("TypeError")}} exception will still be
> raised ("someInterface is null"). If you expect that
> `someInterface` itself may be `null` or `undefined`,
> you have to use `?.` at this position as
> well: `someInterface?.customMethod?.()`.

`eval?.()` is the shortest way to enter [_indirect eval_](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) mode.

### Optional chaining with expressions

You can also use the optional chaining operator with [bracket notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation), which allows passing an expression as the property name:

```js
const nestedProp = obj?.["prop" + "Name"];
```

This is particularly useful for arrays, since array indices must be accessed with brackets.

```js
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw
```

### Optional chaining not valid on the left-hand side of an assignment

It is invalid to try to assign to the result of an optional chaining expression:

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

### Short-circuiting

When using optional chaining with expressions, if the left operand is `null` or `undefined`, the expression will not be evaluated. For instance:

```js
const potentiallyNullObj = null;
let x = 0;
const prop = potentiallyNullObj?.[x++];

console.log(x); // 0 as x was not incremented
```

Subsequent property accesses will not be evaluated either.

```js
const potentiallyNullObj = null;
const prop = potentiallyNullObj?.a.b;
// This does not throw, because evaluation has already stopped at
// the first optional chain
```

This is equivalent to:

```js
const potentiallyNullObj = null;
const prop =
  potentiallyNullObj === null || potentiallyNullObj === undefined
    ? undefined
    : potentiallyNullObj.a.b;
```

However, this short-circuiting behavior only happens along one continuous "chain" of property accesses. If you [group](/en-US/docs/Web/JavaScript/Reference/Operators/Grouping) one part of the chain, then subsequent property accesses will still be evaluated.

```js
const potentiallyNullObj = null;
const prop = (potentiallyNullObj?.a).b;
// TypeError: Cannot read properties of undefined (reading 'b')
```

This is equivalent to:

```js
const potentiallyNullObj = null;
const temp = potentiallyNullObj?.a;
const prop = temp.b;
```

Except the `temp` variable isn't created.

## Examples

### Basic example

This example looks for the value of the `name` property for the member
`bar` in a map when there is no such member. The result is therefore
`undefined`.

```js
const myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

const nameBar = myMap.get("bar")?.name;
```

### Dealing with optional callbacks or event handlers

If you use callbacks or fetch methods from an object with
[a destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring), you may have non-existent values that you cannot call as
functions unless you have tested their existence. Using `?.`, you can avoid this extra test:

```js
// Code written without optional chaining
function doSomething(onContent, onError) {
  try {
    // Do something with the data
  } catch (err) {
    // Testing if onError really exists
    if (onError) {
      onError(err.message);
    }
  }
}
```

```js
// Using optional chaining with function calls
function doSomething(onContent, onError) {
  try {
    // Do something with the data
  } catch (err) {
    onError?.(err.message); // No exception if onError is undefined
  }
}
```

### Stacking the optional chaining operator

With nested structures, it is possible to use optional chaining multiple times:

```js
const customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // Detailed address is unknown
  },
};
const customerCity = customer.details?.address?.city;

// This also works with optional chaining function call
const customerName = customer.name?.getName?.(); // Method does not exist, customerName is undefined
```

### Combining with the nullish coalescing operator

The [nullish coalescing operator](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) may be used after optional chaining in order to build a default value when none was found:

```js
function printCustomerCity(customer) {
  const customerCity = customer?.city ?? "Unknown city";
  console.log(customerCity);
}

printCustomerCity({
  name: "Nathan",
  city: "Paris",
}); // "Paris"
printCustomerCity({
  name: "Carl",
  details: { age: 82 },
}); // "Unknown city"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Nullish coalescing operator (`??`)](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
