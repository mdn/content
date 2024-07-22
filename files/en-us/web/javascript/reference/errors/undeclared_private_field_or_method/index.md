---
title: "SyntaxError: reference to undeclared private field or method #x"
slug: Web/JavaScript/Reference/Errors/Undeclared_private_field_or_method
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "reference to undeclared private field or method #x" occurs when a [private name](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) is used, but this private name is not declared in the class scope.

## Message

```plain
SyntaxError: Private field '#x' must be declared in an enclosing class (V8-based)
SyntaxError: reference to undeclared private field or method #x (Firefox)
SyntaxError: Cannot reference undeclared private names: "#x" (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

Unlike normal string or symbol properties, which return `undefined` if the property does not exist, private names are very strict and can only be legally accessed if they actually exist. Accessing an undeclared private name will result in a syntax error, while accessing a private name that is declared but doesn't exist on the object will result in a [type error](/en-US/docs/Web/JavaScript/Reference/Errors/Get_set_missing_private).

## Examples

### Undeclared private field

You cannot access a private field that is not declared in the class scope.

```js example-bad
class MyClass {
  doSomething() {
    console.log(this.#x);
  }
}
```

The same error occurs if you use the {{jsxref("Operators/in", "in")}} operator to perform a check on an undeclared private field.

```js example-bad
class MyClass {
  doSomething() {
    console.log(#x in this);
  }
}
```

These code are probably mistakes because it's impossible for `#x` to exist on `this` if it's not declared in the class scope. Note that you cannot dynamically _add_ private properties to unrelated objects. You should either remove this code or declare the private field in the class scope.

```js example-good
class MyClass {
  #x = 0;
  doSomething() {
    console.log(this.#x);
  }
}
```

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- [Private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
