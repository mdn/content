---
title: Class static initialization blocks
slug: Web/JavaScript/Reference/Classes/Class_static_initialization_blocks
tags:
  - Classes
  - ECMAScript 2022
  - JavaScript
  - Language feature
  - Static
  - Reference
  - Initialization
browser-compat: javascript.classes.class_static_initialization_blocks
---
{{jsSidebar("Classes")}}

**Class static initialization blocks** are a special feature of a {{jsxref("Statements/class", "class")}} that enable more flexible initialization of {{jsxref("Classes/static", "static")}} properties than can be achieved using per-field initialization.

Static blocks allow statements to be evaluated during initialization, which allows initializations that (for example) include `try...catch` or set multiple fields from a single value.

Initialization is performed in the context of the current class declaration, with privileged access to private state.
This means that static blocks can also be used to share information between classes with instance private fields and other classes or functions declared in the same scope (analogous to "friend" classes in C++).

{{EmbedInteractiveExample("pages/js/classes-static-initialization.html")}}

## Syntax

```js
static { ... }
```


## Description

A {{jsxref("Statements/class", "class")}} can have any number of `static {}` initialization blocks in its class body.
These are evaluated, along with any interleaved static field initializers, in the order they are declared.
Any static initialization of a super class is performed first, before that of its sub classes.

The scope of the variables declared inside the static block is local to the block.
Since `var`, `function`, `const` or  `let` declared in a `static {}` initialization block are local to the block, any `var` declarations in the block are not hoisted.

```js
var y = 'Outer y';

class A {
  static field = 'Inner y';
  static {
    var y = this.field;
  }
}

// var defined in static block is not hoisted
console.log(y);
// > 'Outer y'
```

The `this` inside a static block refers to the constructor object of the class.
`super.<property>` can be used to access properties of a super class.
Note however that it is a syntax error to call {{jsxref("Operators/super", "super()")}} in a class static initialization block, or to attempt to access arguments of the class constructor function.

The scope of the static block is nested _within_ the lexical scope of the class body, and can access the private instance variables of the class.

A static initialization block may not have decorators (the class itself may).


## Examples

### Multiple blocks

The code below demonstrates a class with static initialization blocks and interleaved static field initializers.
The output shows that the blocks and fields are evaluated in execution order. 

```js
class MyClass {
  static field1 = console.log('field1 called');
  static {
    console.log('Class static block #1 called');
  }
  static field2 = console.log('field2 called');
  static {
    console.log('Class static block #2 called');
  }
}

/*
> "field1 called"
> "Class static block #1 called"
> "field2 called"
> "Class static block #2 called"
*/
```

Note that any static initialization of a super class is performed first, before that of its sub classes.


### Using `this` and `super.property`

The `this` inside a static block refers to the constructor object of the class.
This code shows how to access a public static field.

```js
class A {
  static field = 'A static field';
  static {
    var y = this.field;
  }
}
```

The [`super.property`](/en-US/docs/Web/JavaScript/Reference/Operators/super) can be used inside a `static` block to reference properties of a super class.
This includes static properties, as shown below:

```js
class A {
  static fieldA = 'A.fieldA';
}
class B extends A {
  static {
    let x = super.fieldA;
    // 'A.fieldA'
  }
}
```

### Access to private fields

This example below shows how access can be granted to the private object of a class from an object outside the class (example from the [v8.dev blog](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)):


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

getDPrivateField(new D('private'));
// > private
```

### Workarounds

Prior to ES13 more complex static initialization might be achieved by using a static method that is called after the other properties to perform static initialization, or having a method that is external to the class that performs initialization tasks.

In both cases the approach is less elegant, and does not grant access to private methods in the class.


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Class static initialization blocks](https://v8.dev/features/class-static-initializer-blocks) (v8.dev blog)
- [ES2022 feature: class static initialization blocks](https://2ality.com/2021/09/class-static-block.html) (2ality.com blog)
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super()")}}
- [Object.prototype.constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
