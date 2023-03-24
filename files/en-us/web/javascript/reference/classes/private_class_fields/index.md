---
title: Private class features
slug: Web/JavaScript/Reference/Classes/Private_class_fields
page-type: javascript-language-feature
browser-compat: javascript.classes.private_class_fields
---

{{JsSidebar("Classes")}}

Class fields are [public](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) by default, but **private class members** can be created by using a hash `#` prefix. The privacy encapsulation of these class features is enforced by JavaScript itself.

Private members are not native to the language before this syntax existed. In prototypical inheritance, its behavior may be emulated with [`WeakMap`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#emulating_private_members) objects or [closures](/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures), but they can't compare to the `#` syntax in terms of ergonomics.

## Syntax

```js-nolint
class ClassWithPrivate {
  #privateField;
  #privateFieldWithInitializer = 42;

  #privateMethod() {
    // …
  }

  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 42;

  static #privateStaticMethod() {
    // …
  }
}
```

There are some additional syntax restrictions:

- All private identifiers declared within a class must be unique. The namespace is shared between static and instance properties. The only exception is when the two declarations define a getter-setter pair.
- The private identifier cannot be `#constructor`.

## Description

Most class features have their private counterparts:

- Private fields
- Private methods
- Private static fields
- Private static methods
- Private getters
- Private setters
- Private static getters
- Private static setters

These features are collectively called _private properties_. However, [constructors](/en-US/docs/Web/JavaScript/Reference/Classes/constructor) cannot be private in JavaScript. To prevent classes from being constructed outside of the class, you have to [use a private flag](#simulating_private_constructors).

Private properties are declared with **# names** (pronounced "hash names"), which are identifiers prefixed with `#`. The hash prefix is an inherent part of the property name — you can draw relationship with the old underscore prefix convention `_privateField` — but it's not an ordinary string property, so you can't dynamically access it with the [bracket notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation).

It is a syntax error to refer to `#` names from outside of the class. It is also a syntax error to refer to private properties that were not declared in the class body, or to attempt to remove declared properties with [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete).

```js example-bad
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
    delete this.#privateField; // Syntax error
    this.#undeclaredField = 444; // Syntax error
  }
}

const instance = new ClassWithPrivateField();
instance.#privateField === 42; // Syntax error
```

JavaScript, being a dynamic language, is able to perform this compile-time check because of the special hash identifier syntax, making it different from normal properties on the syntax level.

If you access a private property from an object that doesn't have the property, a {{jsxref("TypeError")}} is thrown, instead of returning `undefined` as normal properties do.

```js example-bad
class C {
  #x;

  static getX(obj) {
    return obj.#x;
  }
}

console.log(C.getX(new C())); // undefined
console.log(C.getX({})); // TypeError: Cannot read private member #x from an object whose class did not declare it
```

You can use the [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in) operator to check for potentially missing private fields (or private methods). This will return `true` if the private field or method exists, and `false` otherwise.

Note a corollary of private names being always pre-declared and non-deletable: if you found that an object possesses one private property of the current class (either from a `try...catch` or an `in` check), it must possess all other private properties. An object possessing the private properties of a class generally means it was constructed by that class (although [not always](#returning_overriding_object)).

Private properties are not part of the [prototypical inheritance](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) model since they can only be accessed within the current class's body and aren't inherited by subclasses. Private properties with the same name within different classes are entirely different and do not interoperate with each other. See them as external metadata attached to each instance, managed by the class.

For more information on how and when private fields are initialized, see [public class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

## Examples

### Private fields

Private fields include private instance fields and private static fields. Private fields are accessible on the class constructor from inside the class declaration itself. They are used for declaration of field names as well as for accessing a field's value.

#### Private instance fields

Like public fields, private fields are added before the constructor runs in a base class, or immediately after [`super()`](/en-US/docs/Web/JavaScript/Reference/Operators/super) is invoked in a subclass.

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}

class SubClass extends ClassWithPrivateField {
  #subPrivateField;

  constructor() {
    super();
    this.#subPrivateField = 23;
  }
}

new SubClass();
// SubClass {#subPrivateField: 23}
```

> **Note:** `#privateField` from the `ClassWithPrivateField` base class is private to `ClassWithPrivateField` and is not accessible from the derived `Subclass`.

#### Returning overriding object

A class's constructor can return a different object, which will be used as the new `this` for the derived class constructor. The derived class may then define private fields on that returned object — meaning it is possible to "stamp" private fields onto unrelated objects.

```js
class Stamper extends class {
  // A base class whose constructor returns the object it's given
  constructor(obj) {
    return obj;
  }
} {
  // This declaration will "stamp" the private field onto the object
  // returned by the base class constructor
  #stamp = 42;
  static getStamp(obj) {
    return obj.#stamp;
  }
}

const obj = {};
new Stamper(obj);
// `Stamper` calls `Base`, which returns `obj`, so `obj` is
// now the `this` value. `Stamper` then defines `#stamp` on `obj`

console.log(obj); // In some dev tools, it shows {#stamp: 42}
console.log(Stamper.getStamp(obj)); // 42
console.log(obj instanceof Stamper); // false
```

> **Warning:** This is a potentially very confusing thing to do. You are generally advised to avoid returning anything from the constructor — especially something unrelated to `this`.

#### Private static fields

Private static fields are added to the class constructor at class evaluation time. Like their public counterparts, private static fields are only accessible on the class itself or on the `this` context of static methods, but not on the `this` context of instance methods.

```js
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }

  publicInstanceMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }
}

console.log(ClassWithPrivateStaticField.publicStaticMethod()); // 42
console.log(new ClassWithPrivateStaticField().publicInstanceMethod()); // 42
```

There is a restriction on private static fields: Only the class which defines the private static field can access the field. This can lead to unexpected behavior when using [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this). In the following example, `this` refers to the `SubClass` class (not the `BaseClassWithPrivateStaticField` class) when we try to call `SubClass.basePublicStaticMethod()`, and so causes a `TypeError`.

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static basePublicStaticMethod() {
    return this.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends BaseClassWithPrivateStaticField {}

SubClass.basePublicStaticMethod(); // TypeError: Cannot read private member #PRIVATE_STATIC_FIELD from an object whose class did not declare it
```

This is the same if you call the method with `super`, because [`super` methods are not called with the super class as `this`](/en-US/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static basePublicStaticMethod() {
    // When invoked through super, `this` still refers to Subclass
    return this.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends BaseClassWithPrivateStaticField {
  static callSuperBaseMethod() {
    return super.basePublicStaticMethod();
  }
}

SubClass.callSuperBaseMethod(); // TypeError: Cannot read private member #PRIVATE_STATIC_FIELD from an object whose class did not declare it
```

You are advised to always access static private fields through the class name, not through `this`, so inheritance doesn't break the method.

### Private methods

#### Private instance methods

Private instance methods are methods available on class instances whose access is restricted in the same manner as private instance fields.

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return "hello world";
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// hello world
```

Private instance methods may be generator, async, or async generator functions. Private getters and setters are also possible, and follow the same syntax requirements as their public [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) counterparts.

```js
class ClassWithPrivateAccessor {
  #message;

  get #decoratedMessage() {
    return `🎬${this.#message}🛑`;
  }
  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = "hello world";
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor();
// 🎬hello world🛑
```

Unlike public methods, private methods are not accessible on `Class.prototype`.

```js
class C {
  #method() {}
  static getMethod(x) {
    return x.#method;
  }
}

console.log(C.getMethod(new C())); // [Function: #method]
console.log(C.getMethod(C.prototype)); // Object must be an instance of class C
```

#### Private static methods

Like their public equivalent, private static methods are called on the class itself, not instances of the class. Like private static fields, they are only accessible from inside the class declaration.

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod1() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }

  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

console.log(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
// true
console.log(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
// true
```

Private static methods may be generator, async, and async generator functions.

The same restriction previously mentioned for private static fields holds for private static methods, and similarly can lead to unexpected behavior when using `this`. In the following example, when we try to call `Derived.publicStaticMethod2()`, `this` refers to the `Derived` class (not the `Base` class) and so causes a `TypeError`.

```js
class Base {
  static #privateStaticMethod() {
    return 42;
  }
  static publicStaticMethod1() {
    return Base.#privateStaticMethod();
  }
  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1());
// 42
console.log(Derived.publicStaticMethod2());
// TypeError: Cannot read private member #privateStaticMethod
// from an object whose class did not declare it
```

### Simulating private constructors

Many other languages include the capability to mark a constructor as private, which prevents the class from being instantiated outside of the class itself — you can only use static factory methods that create instances, or not be able to create instances at all. JavaScript does not have a native way to do this, but it can be accomplished by using a private static flag.

```js
class PrivateConstructor {
  static #isInternalConstructing = false;

  constructor() {
    if (!PrivateConstructor.#isInternalConstructing) {
      throw new TypeError("PrivateConstructor is not constructable");
    }
    PrivateConstructor.#isInternalConstructing = false;
    // More initialization logic
  }

  static create() {
    PrivateConstructor.#isInternalConstructing = true;
    const instance = new PrivateConstructor();
    return instance;
  }
}

new PrivateConstructor(); // TypeError: PrivateConstructor is not constructable
PrivateConstructor.create(); // PrivateConstructor {}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using classes](/en-US/docs/Web/JavaScript/Guide/Using_Classes)
- [Public class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [Private Syntax FAQ](https://github.com/tc39/proposal-class-fields/blob/main/PRIVATE_SYNTAX_FAQ.md)
- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
- [Public and private class fields](https://v8.dev/features/class-fields) article at the v8.dev site
