---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Language feature
  - Reference
browser-compat: javascript.operators.new_target
---
{{JSSidebar("Operators")}}

The **`new.target`** pseudo-property lets you detect whether a
function or constructor was called using the [new](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. In
constructors and functions invoked using the [new](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator,
`new.target` returns a reference to the constructor or function. In normal
function calls, `new.target` is {{jsxref("undefined")}}.

{{EmbedInteractiveExample("pages/js/expressions-newtarget.html")}}

## Syntax

```js
new.target
```

## Description

The `new.target` syntax consists of the keyword `new`, a dot, and
the identifier `target`. Normally, the left-hand side of the dot is the
object on which property access is performed, but here, `new` is not an
object.

The `new.target` pseudo-property is available in all functions.

In class constructors, it refers to the constructed class.

In ordinary functions, it refers to the function itself, assuming it was invoked via
the [new](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator;
otherwise `new.target` is {{jsxref("undefined")}}.

In [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
`new.target` is inherited from the surrounding scope.

## Examples

### new\.target in function calls

In normal function calls (as opposed to constructor function calls),
`new.target` is {{jsxref("undefined")}}. This lets you detect whether a
function was called with [new](/en-US/docs/Web/JavaScript/Reference/Operators/new) as a constructor.

```js
function Foo() {
  if (!new.target) { throw 'Foo() must be called with new' }
  console.log('Foo instantiated with new')
}

new Foo()  // logs "Foo instantiated with new"
Foo()      // throws "Foo() must be called with new"
```

### new\.target in constructors

In class constructors, `new.target` refers to the constructor that was
directly invoked by `new`. This is also the case if the constructor is in a
parent class and was delegated from a child constructor.

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

const a = new A(); // logs "A"
const b = new B(); // logs "B"

class C {
  constructor() {
    console.log(new.target);
  }
}
class D extends C {
  constructor() {
    super();
  }
}

const c = new C(); // logs class C{constructor(){console.log(new.target);}}
const d = new D(); // logs class D extends C{constructor(){super();}}
```

Thus from the above example of class `C` and `D`,
it seems that `new.target` points to the class definition of class which is
initialized. For example, when `d` was initialized using
`new D()`, the class definition of `D` was printed; and similarly,
in case of `c`, the class `C` was printed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this)
