---
title: "SyntaxError: use of super property/member accesses only valid within methods or eval code within methods"
slug: Web/JavaScript/Reference/Errors/Bad_super_prop
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "use of super property/member accesses only valid within methods or eval code within methods" occurs when the {{jsxref("Operators/super", "super.x")}} or `super[x]` syntax is used outside of a [method](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions).

## Message

```plain
SyntaxError: 'super' keyword unexpected here (V8-based)
SyntaxError: use of super property accesses only valid within methods or eval code within methods (Firefox)
SyntaxError: super is not valid in this context. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The `super.x` syntax is used to access properties on the prototype of the current object. It can be used in methods of both [object literals](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) and [classes](/en-US/docs/Web/JavaScript/Reference/Classes), [field initializers](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields), and [static initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), but not in other contexts.

## Examples

### Invalid cases

You can't use `super.x` outside of a method in an object:

```js example-bad
const obj = {
  __proto__: { x: 1 },
  x: super.x, // SyntaxError
};
```

You can't use `super.x` in a function, even if that function has the effect of being a method:

```js example-bad
function getX() {
  return super.x; // SyntaxError
}

const obj = {
  getX,
  getX2: function () {
    return super.x; // SyntaxError
  },
};

class Derived extends Base {
  getX = () => super.x;
}
```

### Valid cases

You can use `super.x` in a method:

```js example-good
class Base {
  x = 1;
}

class Derived extends Base {
  getX() {
    return super.x;
  }
}
```

You can use `super.x` in a field initializer:

```js example-good
class Derived extends Base {
  x = super.x;
}
```

You can use `super.x` in object methods too:

```js example-good
const obj = {
  __proto__: { x: 1 },
  getX() {
    return super.x;
  },
};
```

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super")}}
