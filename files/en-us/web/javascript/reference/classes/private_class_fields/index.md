---
title: Private class features
slug: Web/JavaScript/Reference/Classes/Private_class_fields
tags:
  - Classes
  - Private
  - JavaScript
  - Language feature
browser-compat: javascript.classes.private_class_fields
---
{{JsSidebar("Classes")}}

Class fields are {{ jsxref('Classes/Public_class_fields','public') }} by default, but private class members can be created
by using a hash `#` prefix. The privacy encapsulation of these class features is
enforced by JavaScript itself.

Private members are not native to the language before this syntax existed. In prototypical inheritance, its behavior may be emulated with [`WeakMap`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#emulating_private_members) objects or [closures](/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures), but they can't compare to the `#` syntax in terms of ergonomics.

## Syntax

```js
class ClassWithPrivateField {
  #privateField;
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world';
  }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;
}

class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 'hello world';
  }
}
```

## Examples

### Private fields

Private fields include private instance fields and private static fields.

#### Private instance fields

Private instance fields are declared with **# names** (pronounced
"_hash names_"), which are identifiers prefixed with `#`. The
`#` is a part of the name itself. Private fields are accessible on
the class constructor from inside the class
declaration itself. They are used for declaration of field names as well
as for accessing a field's value.

It is a syntax error to refer to `#` names from out of scope.
It is also a syntax error to refer to private fields
that were not declared before they were called, or to attempt to remove
declared fields with `delete`.

```js example-bad
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
    delete this.#privateField;   // Syntax error
    this.#undeclaredField = 444; // Syntax error
  }
}

const instance = new ClassWithPrivateField()
instance.#privateField === 42;   // Syntax error
```

> **Note:** Use the [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in) operator to check for potentially missing private fields (or private methods). This will return `true` if the private field or method exists, and `false` otherwise.

Like public fields, private fields are added at construction time in a base class, or at the point where `super()` is invoked in a subclass.

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

There is a restriction on private static fields: Only the class which
defines the private static field can access the field. This can lead to unexpected behavior when using **`this`**.
In the following example, `this` refers to the `SubClass` class (not
the `BaseClassWithPrivateStaticField` class) when we try to call
`SubClass.basePublicStaticMethod()`, and so causes a `TypeError`.

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42;
    return this.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends BaseClassWithPrivateStaticField { };

let error = null;

try {
  SubClass.basePublicStaticMethod();
} catch (e) {
  error = e;
}

console.log(error instanceof TypeError);
// true
console.log(error);
// TypeError: Cannot write private member #PRIVATE_STATIC_FIELD
// to an object whose class did not declare it
```

### Private methods

#### Private instance methods

Private instance methods are methods available on class instances whose access is
restricted in the same manner as private instance fields.

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world';
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// hello world
```

Private instance methods may be generator, async, or async generator functions. Private
getters and setters are also possible, although _not_ in generator, async, or
async generator forms.

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
    this.#decoratedMessage = 'hello world';
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor();
// 🎬hello world🛑
```

#### Private static methods

Like their public equivalent, private static methods are called on the class itself,
not instances of the class. Like private static fields, they are only accessible from
inside the class declaration.

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

The same restriction previously mentioned for private static fields holds
for private static methods, and similarly can lead to unexpected behavior when using
**`this`**.
In the following example, when we try to call `Derived.publicStaticMethod2()`,
`this` refers to the `Derived` class (not
the `Base` class) and so causes a `TypeError`.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Working with private class features](/en-US/docs/Web/JavaScript/Guide/Working_With_Private_Class_Features)
- [Public class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
- [Public and private class fields](https://v8.dev/features/class-fields)
  article at the v8.dev site
