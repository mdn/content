---
title: "SyntaxError: private fields can't be deleted"
slug: Web/JavaScript/Reference/Errors/Cant_delete_private_fields
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "SyntaxError: private fields can't be deleted" occurs when [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) is called on a [private property](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) of a class or an object.

## Message

```plain
SyntaxError: Private fields can not be deleted (V8-based)
SyntaxError: private fields can't be deleted (Firefox)
SyntaxError: Cannot delete private field X (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

There's code trying to `delete` a private property (field or method) of an object or a class. This is forbidden by Javascript, private properties cannot be added or removed on the fly.

## Examples

```js example-bad
class MyClass {
  #myPrivateField;
  deleteIt() {
    delete this.#myPrivateField; // SyntaxError: private fields can't be deleted
  }
}
```

```js example-bad
class MyClass {
  static #myPrivateMethod() {

  }
  #deleteIt() {
    delete this.#myPrivateMethod; // SyntaxError: private fields can't be deleted
  }
}
```

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
