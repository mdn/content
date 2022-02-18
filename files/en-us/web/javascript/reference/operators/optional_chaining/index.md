---
title: Optional chaining (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
tags:
  - Chaining
  - JavaScript
  - Language feature
  - Operator
  - Optional chaining
  - Reference
browser-compat: javascript.operators.optional_chaining
---
{{JSSidebar("Operators")}}

The **optional chaining** operator (**`?.`**)
enables you to read the value of a property located deep within a chain of connected objects
without having to check that each reference in the chain is valid.

The `?.` operator is like the
`.` chaining operator, except that instead of causing an error if a
reference is [nullish](/en-US/docs/Glossary/Nullish) ({{JSxRef("null")}} or
{{JSxRef("undefined")}}), the expression short-circuits with a return value of
`undefined`. When used with function calls, it returns
`undefined` if the given function does not exist.

This results in shorter and simpler expressions when accessing chained properties when
the possibility exists that a reference may be missing. It can also be helpful while
exploring the content of an object when there's no known guarantee as to which
properties are required.

Optional chaining cannot be used on a non-declared root object, but can be used with an undefined root object.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html",
  "taller")}}

## Syntax

```js
obj.val?.prop
obj.val?.[expr]
obj.arr?.[index]
obj.func?.(args)
```

## Description

The optional chaining operator provides a way to simplify accessing values through
connected objects when it's possible that a reference or function may be
`undefined` or `null`.

For example, consider an object `obj` which has a nested structure. Without
optional chaining, looking up a deeply-nested subproperty requires validating the
references in between, such as:

```js
let nestedProp = obj.first && obj.first.second;
```

The value of `obj.first` is confirmed to be non-`null` (and
non-`undefined`) before then accessing the value of
`obj.first.second`. This prevents the error that would occur if you accessed
`obj.first.second` directly without testing `obj.first`.

With the optional chaining operator (`?.`), however, you don't have to
explicitly test and short-circuit based on the state of `obj.first` before
trying to access `obj.first.second`:

```js
let nestedProp = obj.first?.second;
```

By using the `?.` operator instead of just `.`, JavaScript knows
to implicitly check to be sure `obj.first` is not `null` or
`undefined` before attempting to access `obj.first.second`. If
`obj.first` is `null` or `undefined`, the expression
automatically short-circuits, returning `undefined`.

This is equivalent to the following, except that the temporary variable is in fact not
created:

```js
let temp = obj.first;
let nestedProp = ((temp === null || temp === undefined) ? undefined : temp.second);
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
let result = someInterface.customMethod?.();
```

> **Note:** If there is a property with such a name and which is not a
> function, using `?.` will still raise a {{JSxRef("TypeError")}} exception
> (`someInterface.customMethod is not a function`).

> **Note:** If `someInterface` itself is `null` or
> `undefined`, a {{JSxRef("TypeError")}} exception will still be
> raised (`someInterface is null`). If you expect that
> `someInterface` itself may be `null` or `undefined`,
> you have to use `?.` at this position as
> well: `someInterface?.customMethod?.()`

#### Dealing with optional callbacks or event handlers

If you use callbacks or fetch methods from an object with
[a destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring), you may have non-existent values that you cannot call as
functions unless you have tested their existence. Using `?.`, you can avoid this extra test:

```js
// Written as of ES2019
function doSomething(onContent, onError) {
  try {
    // ... do something with the data
  }
  catch (err) {
    if (onError) { // Testing if onError really exists
      onError(err.message);
    }
  }
}
```

```js
// Using optional chaining with function calls
function doSomething(onContent, onError) {
  try {
   // ... do something with the data
  }
  catch (err) {
    onError?.(err.message); // no exception if onError is undefined
  }
}
```

### Optional chaining with expressions

You can also use the optional chaining operator when accessing properties with an expression using
[the bracket notation of the property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation):

```js
let nestedProp = obj?.['prop' + 'Name'];
```

### Optional chaining not valid on the left-hand side of an assignment

```js
let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

### Array item access with optional chaining

```js
let arrayItem = arr?.[42];
```

## Examples

### Basic example

This example looks for the value of the `name` property for the member
`bar` in a map when there is no such member. The result is therefore
`undefined`.

```js
let myMap = new Map();
myMap.set("foo", {name: "baz", desc: "inga"});

let nameBar = myMap.get("bar")?.name;
```

### Short-circuiting evaluation

When using optional chaining with expressions, if the left operand is `null`
or `undefined`, the expression will not be evaluated. For instance:

```js
let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];

console.log(x); // 0 as x was not incremented
```

### Stacking the optional chaining operator

With nested structures, it is possible to use optional chaining multiple times:

```js
let customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls" // detailed address is unknown
  }
};
let customerCity = customer.details?.address?.city;

// … this also works with optional chaining function call
let customerName = customer.name?.getName?.(); // method does not exist, customerName is undefined
```

### Combining with the nullish coalescing operator

The {{JSxRef("Operators/Nullish_Coalescing_Operator", "nullish coalescing operator",
  '', 1)}} may be used after optional chaining in order to build a default value when none
was found:

```js
let customer = {
  name: "Carl",
  details: { age: 82 }
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{JSxRef("Operators/Nullish_Coalescing_Operator", "Nullish Coalescing Operator",
    '', 1)}}
