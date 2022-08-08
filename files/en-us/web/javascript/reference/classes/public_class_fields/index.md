---
title: Public class fields
slug: Web/JavaScript/Reference/Classes/Public_class_fields
tags:
  - Classes
  - JavaScript
  - Language feature
browser-compat: javascript.classes.public_class_fields
---
{{JsSidebar("Classes")}}

Both static and instance public fields are writable, enumerable, and configurable
properties. As such, unlike their private counterparts, they participate in prototype
inheritance.

## Syntax

```js
class ClassWithInstanceField {
  instanceField = 'instance field';
}

class ClassWithStaticField {
  static staticField = 'static field';
}

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world';
  }
}
```

## Examples

### Public static fields

Public static fields are useful when you want a field to exist only once per class, not
on every class instance you create. This is useful for caches, fixed-configuration, or
any other data you don't need to be replicated across instances.

Public static fields are declared using the `static` keyword. They are added
to the class constructor at the time of class evaluation using
{{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}. They are
accessed again from the class constructor.

```js
class ClassWithStaticField {
  static staticField = 'static field';
}

console.log(ClassWithStaticField.staticField);
// expected output: "static field"
```

Fields without initializers are initialized to `undefined`.

```js
class ClassWithStaticField {
  static staticField;
}

console.assert(Object.hasOwn(ClassWithStaticField, 'staticField'));
console.log(ClassWithStaticField.staticField);
// expected output: "undefined"
```

Public static fields are not reinitialized on subclasses, but can be accessed via the
prototype chain.

```js
class ClassWithStaticField {
  static baseStaticField = 'base field';
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = 'sub class field';
}

console.log(SubClassWithStaticField.subStaticField);
// expected output: "sub class field"

console.log(SubClassWithStaticField.baseStaticField);
// expected output: "base field"
```

When initializing fields, `this` refers to the class constructor. You can
also reference it by name, and use `super` to get the superclass constructor
(if one exists).

```js
class ClassWithStaticField {
  static baseStaticField = 'base static field';
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() { return 'base static method output'; }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField);
// expected output: "base static field"

console.log(SubClassWithStaticField.subStaticField);
// expected output: "base static method output"
```

### Public instance fields

Public instance fields exist on every created instance of a class. By declaring a
public field, you can ensure the field is always present, and the class definition is
more self-documenting.

Public instance fields are added with {{jsxref("Global_Objects/Object/defineProperty",
  "Object.defineProperty()")}} either at construction time in the base class (before the
constructor body runs), or just after `super()` returns in a subclass.

```js
class ClassWithInstanceField {
  instanceField = 'instance field';
}

const instance = new ClassWithInstanceField();
console.log(instance.instanceField);
// expected output: "instance field"
```

Fields without initializers are initialized to `undefined`.

```js
class ClassWithInstanceField {
  instanceField;
}

const instance = new ClassWithInstanceField();
console.assert(Object.hasOwn(instance, 'instanceField'));
console.log(instance.instanceField);
// expected output: "undefined"
```

Like properties, field names may be computed.

```js
const PREFIX = 'prefix';

class ClassWithComputedFieldName {
  [`${PREFIX}Field`] = 'prefixed field';
}

const instance = new ClassWithComputedFieldName();
console.log(instance.prefixField);
// expected output: "prefixed field"
```

When initializing fields `this` refers to the class instance under
construction. Just as in public instance methods, if you're in a subclass you can access
the superclass prototype using `super`.

```js
class ClassWithInstanceField {
  baseInstanceField = 'base field';
  anotherBaseInstanceField = this.baseInstanceField;
  baseInstanceMethod() { return 'base method output'; }
}

class SubClassWithInstanceField extends ClassWithInstanceField {
  subInstanceField = super.baseInstanceMethod();
}

const base = new ClassWithInstanceField();
const sub = new SubClassWithInstanceField();

console.log(base.anotherBaseInstanceField);
// expected output: "base field"

console.log(sub.subInstanceField);
// expected output: "base method output"
```

Because instance fields of a class are added before the respective constructor runs, you can access the fields' values within the constructor.

```js
class ClassWithInstanceField {
  instanceField = 'instance field';

  constructor() {
    console.log(this.instanceField);
    this.instanceField = 'new value';
  }
}

const instance = new ClassWithInstanceField(); // Logs "instance field"
console.log(instance.instanceField); // "new value"
```

However, because instance fields of a derived class are defined after `super()` returns, the base class's constructor does not have access to the derived class's fields.

```js
class Base {
  constructor() {
    console.log('Base constructor:', this.field);
  }
}

class Derived extends Base {
  field = 1;
  constructor() {
    super();
    console.log('Derived constructor:', this.field);
  }
}

const instance = new Derived();
// Base constructor: undefined
// Derived constructor: 1
```

Because class fields are added using the `[[Define]]` semantic (which is essentially {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}), field declarations in derived classes do not invoke setters in the base class. This behavior differs from using `this.field = …` in the constructor.

```js
class Base {
  set field(val) {
    console.log(val);
  }
}

class DerivedWithField extends Base {
  field = 1;
}

const instance = new DerivedWithField(); // No log

class DerivedWithConstructor extends Base {
  constructor() {
    super();
    this.field = 1;
  }
}

const instance2 = new DerivedWithConstructor(); // Logs 1
```

> **Note:** Before the class fields specification was finalized with the `[[Define]]` semantic, most transpilers, including [Babel](https://babeljs.io/) and [tsc](https://www.typescriptlang.org/), transformed class fields to the `DerivedWithConstructor` form, which has caused subtle bugs after class fields were standardized.

### Public methods

#### Public static methods

The **`static`** keyword defines a static method for a class.
Static methods aren't called on instances of the class. Instead, they're called on the
class itself. These are often utility functions, such as functions to create or clone
objects.

```js
class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."
```

The static methods are added to the class constructor with
{{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} at class
evaluation time. These methods are writable, non-enumerable, and configurable.

#### Public instance methods

As the name implies, public instance methods are methods available on class instances.

```js
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world';
  }
}

const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod());
// expected output: "hello world"
```

Public instance methods are added to the class prototype at the time of class
evaluation using {{jsxref("Global_Objects/Object/defineProperty",
  "Object.defineProperty()")}}. They are writable, non-enumerable, and configurable.

You may make use of generator, async, and async generator functions.

```js
class ClassWithFancyMethods {
  *generatorMethod() { }
  async asyncMethod() { }
  async *asyncGeneratorMethod() { }
}
```

Inside instance methods, `this` refers to the instance itself. In
subclasses, `super` lets you access the superclass prototype, allowing you to
call methods from the superclass.

```js
class BaseClass {
  msg = 'hello world';
  basePublicMethod() {
    return this.msg;
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod();
  }
}

const instance = new SubClass();
console.log(instance.subPublicMethod());
// expected output: "hello world"
```

Getters and setters are special methods that bind to a class property and are called
when that property is accessed or set. Use the [get](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [set](/en-US/docs/Web/JavaScript/Reference/Functions/set) syntax to declare a
public instance getter or setter.

```js
class ClassWithGetSet {
  #msg = 'hello world';
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
 }
}

const instance = new ClassWithGetSet();
console.log(instance.msg);
// expected output: "hello world"

instance.msg = 'cake';
console.log(instance.msg);
// expected output: "hello cake"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
- [Public and private class fields](https://v8.dev/features/class-fields)
  article at the v8.dev site
