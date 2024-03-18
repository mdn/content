---
title: "TypeError: X.prototype.y called on incompatible type"
slug: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "called on incompatible target (or object)" occurs when a
function (on a given object), is called with a `this` not corresponding to
the type expected by the function.

## Message

```plain
TypeError: Method Set.prototype.add called on incompatible receiver undefined (V8-based)
TypeError: Bind must be called on a function (V8-based)
TypeError: Function.prototype.toString called on incompatible object (Firefox)
TypeError: Function.prototype.bind called on incompatible target (Firefox)
TypeError: Type error (Safari)
TypeError: undefined is not an object (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

When this error is thrown, a function (on a given object), is called with a
`this` not corresponding to the type expected by the function.

This issue can arise when using the {{jsxref("Function.prototype.call()")}} or
{{jsxref("Function.prototype.apply()")}} methods, and providing a `this`
argument which does not have the expected type.

This issue can also happen when providing a function that is stored as a property of an
object as an argument to another function. In this case, the object that stores the
function won't be the `this` target of that function when it is called by the
other function. To work-around this issue, you will either need to provide a lambda
which is making the call, or use the {{jsxref("Function.prototype.bind()")}} function to
force the `this` argument to the expected object.

## Examples

### Invalid cases

```js example-bad
const mySet = new Set();
["bar", "baz"].forEach(mySet.add);
// mySet.add is a function, but "mySet" is not captured as this.

const myFun = function () {
  console.log(this);
};
["bar", "baz"].forEach(myFun.bind);
// myFun.bind is a function, but "myFun" is not captured as this.
```

### Valid cases

```js example-good
const mySet = new Set();
["bar", "baz"].forEach(mySet.add.bind(mySet));
// This works due to binding "mySet" as this.

const myFun = function () {
  console.log(this);
};
["bar", "baz"].forEach((x) => myFun.bind(x));
// This works using the "bind" function. It creates a lambda forwarding the argument.
```

## See also

- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.bind()")}}
