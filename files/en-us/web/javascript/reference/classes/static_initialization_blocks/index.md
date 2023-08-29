---
title: Static initialization blocks
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
page-type: javascript-language-feature
browser-compat: javascript.classes.static_initialization_blocks
---

{{jsSidebar("Classes")}}

**Static initialization blocks** are declared within a {{jsxref("Statements/class", "class")}}. It contains statements to be evaluated during class initialization. This permits more flexible initialization logic than {{jsxref("Classes/static", "static")}} properties, such as using `try...catch` or setting multiple fields from a single value. Initialization is performed in the context of the current class declaration, with access to private state, which allows the class to share information of its private properties with other classes or functions declared in the same scope (analogous to "friend" classes in C++).

{{EmbedInteractiveExample("pages/js/classes-static-initialization.html")}}

## Syntax

```js-nolint
class ClassWithSIB {
  static {
    // …
  }
}
```

## Description

Without static initialization blocks, complex static initialization might be achieved by calling a static method after the class declaration:

```js
class MyClass {
  static init() {
    // Access to private static fields is allowed here
  }
}

MyClass.init();
```

However, this approach exposes an implementation detail (the `init()` method) to the user of the class. On the other hand, any initialization logic declared outside the class does not have access to private static fields. Static initialization blocks allow arbitrary initialization logic to be declared within the class and executed during class evaluation.

A {{jsxref("Statements/class", "class")}} can have any number of `static {}` initialization blocks in its class body.
These are [evaluated](/en-US/docs/Web/JavaScript/Reference/Classes#evaluation_order), along with any interleaved static field initializers, in the order they are declared.
Any static initialization of a super class is performed first, before that of its sub classes.

The scope of the variables declared inside the static block is local to the block. This includes `var`, `function`, `const`, and `let` declarations. `var` declarations in the block are not hoisted.

```js
var y = "Outer y";

class A {
  static field = "Inner y";
  static {
    var y = this.field;
  }
}

// var defined in static block is not hoisted
console.log(y); // 'Outer y'
```

The `this` inside a static block refers to the constructor object of the class.
`super.property` can be used to access static properties of the super class.
Note however that it is a syntax error to call {{jsxref("Operators/super", "super()")}} in a class static initialization block, or to use the {{jsxref("Functions/arguments", "arguments")}} object.

The statements are evaluated synchronously. You cannot use {{jsxref("Operators/await", "await")}} or {{jsxref("Operators/yield", "yield")}} in this block. (Think of the initialization statements as being implicitly wrapped in a function.)

The scope of the static block is nested _within_ the lexical scope of the class body, and can access [private names](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) declared within the class without causing a syntax error.

[Static field](/en-US/docs/Web/JavaScript/Reference/Classes/static) initializers and static initialization blocks are evaluated one-by-one. The initialization block can refer to field values above it, but not below it. All static methods are added beforehand and can be accessed, although calling them may not behave as expected if they refer to fields below the current block.

> **Note:** This is more important with [private static fields](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields), because accessing a non-initialized private field throws a {{jsxref("TypeError")}}, even if the private field is declared below. (If the private field is not declared, it would be an early {{jsxref("SyntaxError")}}.)

A static initialization block may not have decorators (the class itself may).

## Examples

### Multiple blocks

The code below demonstrates a class with static initialization blocks and interleaved static field initializers.
The output shows that the blocks and fields are evaluated in execution order.

```js
class MyClass {
  static field1 = console.log("static field1");
  static {
    console.log("static block1");
  }
  static field2 = console.log("static field2");
  static {
    console.log("static block2");
  }
}
// 'static field1'
// 'static block1'
// 'static field2'
// 'static block2'
```

Note that any static initialization of a super class is performed first, before that of its sub classes.

### Using this and super

The `this` inside a static block refers to the constructor object of the class.
This code shows how to access a public static field.

```js
class A {
  static field = "static field";
  static {
    console.log(this.field);
  }
}
// 'static field'
```

The [`super.property`](/en-US/docs/Web/JavaScript/Reference/Operators/super) syntax can be used inside a `static` block to reference static properties of a super class.

```js
class A {
  static field = "static field";
}

class B extends A {
  static {
    console.log(super.field);
  }
}
// 'static field'
```

### Access to private properties

This example below shows how access can be granted to a private instance field of a class from an object outside the class (example from the [v8.dev blog](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)):

```js
let getDPrivateField;

class D {
  #privateField;
  constructor(v) {
    this.#privateField = v;
  }
  static {
    getDPrivateField = (d) => d.#privateField;
  }
}

console.log(getDPrivateField(new D("private"))); // 'private'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using classes](/en-US/docs/Web/JavaScript/Guide/Using_classes)
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Classes/static", "static")}}
- {{jsxref("Statements/class", "class")}}
- [Class static initialization blocks](https://v8.dev/features/class-static-initializer-blocks) on v8.dev (2021)
- [ES2022 feature: class static initialization blocks](https://2ality.com/2021/09/class-static-block.html) by Dr. Axel Rauschmayer (2021)
