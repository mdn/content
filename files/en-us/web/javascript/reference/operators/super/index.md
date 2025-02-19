---
title: super
slug: Web/JavaScript/Reference/Operators/super
page-type: javascript-language-feature
browser-compat: javascript.operators.super
---

{{jsSidebar("Operators")}}

The **`super`** keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.

The `super.prop` and `super[expr]` expressions are valid in any [method definition](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) in both [classes](/en-US/docs/Web/JavaScript/Reference/Classes) and [object literals](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer). The `super(...args)` expression is valid in class constructors.

{{InteractiveExample("JavaScript Demo: Expressions - super", "taller")}}

```js interactive-example
class Foo {
  constructor(name) {
    this.name = name;
  }

  getNameSeparator() {
    return "-";
  }
}

class FooBar extends Foo {
  constructor(name, index) {
    super(name);
    this.index = index;
  }

  // Does not get called
  getNameSeparator() {
    return "/";
  }

  getFullName() {
    return this.name + super.getNameSeparator() + this.index;
  }
}

const firstFooBar = new FooBar("foo", 1);

console.log(firstFooBar.name);
// Expected output: "foo"

console.log(firstFooBar.getFullName());
// Expected output: "foo-1"
```

## Syntax

```js-nolint
super()
super(arg1)
super(arg1, arg2)
super(arg1, arg2, /* …, */ argN)

super.propertyOnParent
super[expression]
```

## Description

The `super` keyword can be used in two ways: as a "function call" (`super(...args)`), or as a "property lookup" (`super.prop` and `super[expr]`).

> **Note:** `super` is a keyword and these are special syntactic constructs. `super` is not a variable that points to the prototype object. Attempting to read `super` itself is a {{jsxref("SyntaxError")}}.
>
> ```js-nolint example-bad
> const child = {
>   myParent() {
>     console.log(super); // SyntaxError: 'super' keyword unexpected here
>   },
> };
> ```

In the [constructor](/en-US/docs/Web/JavaScript/Reference/Classes/constructor) body of a derived class (with `extends`), the `super` keyword may appear as a "function call" (`super(...args)`), which must be called before the `this` keyword is used, and before the constructor returns. It calls the parent class's constructor and binds the parent class's public fields, after which the derived class's constructor can further access and modify `this`.

The "property lookup" form can be used to access methods and properties of an object literal's or class's [[Prototype]]. Within a class's body, the reference of `super` can be either the superclass's constructor itself, or the constructor's `prototype`, depending on whether the execution context is instance creation or class initialization. See the Examples section for more details.

Note that the reference of `super` is determined by the class or object literal `super` was declared in, not the object the method is called on. Therefore, unbinding or re-binding a method doesn't change the reference of `super` in it (although they do change the reference of [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this)). You can see `super` as a variable in the class or object literal scope, which the methods create a closure over. (But also beware that it's not actually a variable, as explained above.)

When setting properties through `super`, the property is set on `this` instead.

## Examples

### Using super in classes

This code snippet is taken from the [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live demo](https://googlechrome.github.io/samples/classes-es6/index.html)). Here `super()` is called to avoid duplicating the constructor parts' that are common between `Rectangle` and `Square`.

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Moving this to the top causes a ReferenceError.
    this.name = "Square";
  }
}
```

### Super-calling static methods

You are also able to call super on [static](/en-US/docs/Web/JavaScript/Reference/Classes/static) methods.

```js
class Rectangle {
  static logNbSides() {
    return "I have 4 sides";
  }
}

class Square extends Rectangle {
  static logDescription() {
    return `${super.logNbSides()} which are all equal`;
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
```

### Accessing super in class field declaration

`super` can also be accessed during class field initialization. The reference of `super` depends on whether the current field is an instance field or a static field.

```js
class Base {
  static baseStaticField = 90;
  baseMethod() {
    return 10;
  }
}

class Extended extends Base {
  extendedField = super.baseMethod(); // 10
  static extendedStaticField = super.baseStaticField; // 90
}
```

Note that instance fields are set on the instance instead of the constructor's `prototype`, so you can't use `super` to access the instance field of a superclass.

```js example-bad
class Base {
  baseField = 10;
}

class Extended extends Base {
  extendedField = super.baseField; // undefined
}
```

Here, `extendedField` is `undefined` instead of 10, because `baseField` is defined as an own property of the `Base` instance, instead of `Base.prototype`. `super`, in this context, only looks up properties on `Base.prototype`, because that's the [[Prototype]] of `Extended.prototype`.

### Deleting super properties will throw an error

You cannot use the [`delete` operator](/en-US/docs/Web/JavaScript/Reference/Operators/delete) and `super.prop` or `super[expr]` to delete a parent class' property — it will throw a {{jsxref("ReferenceError")}}.

```js
class Base {
  foo() {}
}
class Derived extends Base {
  delete() {
    delete super.foo; // this is bad
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

### Using super.prop in object literals

Super can also be used in the [object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) notation. In this example, two objects define a method. In the second object, `super` calls the first object's method. This works with the help of {{jsxref("Object.setPrototypeOf()")}} with which we are able to set the prototype of `obj2` to `obj1`, so that `super` is able to find `method1` on `obj1`.

```js
const obj1 = {
  method1() {
    console.log("method 1");
  },
};

const obj2 = {
  method2() {
    super.method1();
  },
};

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // Logs "method 1"
```

### Methods that read super.prop do not behave differently when bound to other objects

Accessing `super.x` behaves like `Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this)`, which means the property is always sought on the object literal/class declaration's prototype, and unbinding and re-binding a method won't change the reference of `super`.

```js
class Base {
  baseGetX() {
    return 1;
  }
}
class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
}

const e = new Extended();
console.log(e.getX()); // 1
const { getX } = e;
console.log(getX()); // 1
```

The same happens in object literals.

```js
const parent1 = { prop: 1 };
const parent2 = { prop: 2 };

const child = {
  myParent() {
    console.log(super.prop);
  },
};

Object.setPrototypeOf(child, parent1);
child.myParent(); // Logs "1"

const myParent = child.myParent;
myParent(); // Still logs "1"

const anotherChild = { __proto__: parent2, myParent };
anotherChild.myParent(); // Still logs "1"
```

Only resetting the entire inheritance chain will change the reference of `super`.

```js
class Base {
  baseGetX() {
    return 1;
  }
  static staticBaseGetX() {
    return 3;
  }
}
class AnotherBase {
  baseGetX() {
    return 2;
  }
  static staticBaseGetX() {
    return 4;
  }
}
class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
  static staticGetX() {
    return super.staticBaseGetX();
  }
}

const e = new Extended();
// Reset instance inheritance
Object.setPrototypeOf(Extended.prototype, AnotherBase.prototype);
console.log(e.getX()); // Logs "2" instead of "1", because the prototype chain has changed
console.log(Extended.staticGetX()); // Still logs "3", because we haven't modified the static part yet
// Reset static inheritance
Object.setPrototypeOf(Extended, AnotherBase);
console.log(Extended.staticGetX()); // Now logs "4"
```

### Calling methods from super

When calling `super.prop` as a function, the `this` value inside the `prop` function is the current `this`, not the object that `super` points to. For example, the `super.getName()` call logs `"Extended"`, despite the code looking like it's equivalent to `Base.getName()`.

```js
class Base {
  static getName() {
    console.log(this.name);
  }
}

class Extended extends Base {
  static getName() {
    super.getName();
  }
}

Extended.getName(); // Logs "Extended"
```

This is especially important when interacting with [static private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties#private_static_fields).

### Setting super.prop sets the property on this instead

Setting properties of `super`, such as `super.x = 1`, behaves like `Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this)`. This is one of the cases where understanding `super` as simply "reference of the prototype object" falls short, because it actually sets the property on `this` instead.

```js
class A {}
class B extends A {
  setX() {
    super.x = 1;
  }
}

const b = new B();
b.setX();
console.log(b); // B { x: 1 }
console.log(Object.hasOwn(b, "x")); // true
```

`super.x = 1` will look for the property descriptor of `x` on `A.prototype` (and invoke the setters defined there), but the `this` value will be set to `this`, which is `b` in this context. You can read [`Reflect.set`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) for more details on the case when `target` and `receiver` differ.

This means that while methods that _get_ `super.prop` are usually not susceptible to changes in the `this` context, those that _set_ `super.prop` are.

```js example-bad
/* Reusing same declarations as above */

const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
```

However, `super.x = 1` still consults the property descriptor of the prototype object, which means you cannot rewrite non-writable properties, and setters will be invoked.

```js
class X {
  constructor() {
    // Create a non-writable property
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1,
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2; // Cannot overwrite the value.
  }
}

const y = new Y();
y.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
