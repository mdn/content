---
title: Public class fields
slug: Web/JavaScript/Reference/Classes/Public_class_fields
page-type: javascript-language-feature
browser-compat: javascript.classes.public_class_fields
---

{{jsSidebar("Classes")}}

**Public fields** are writable, enumerable, and configurable properties defined on each class instance or class constructor.

## Syntax

```js-nolint
class ClassWithField {
  instanceField;
  instanceFieldWithInitializer = "instance field";
  static staticField;
  static staticFieldWithInitializer = "static field";
}
```

There are some additional syntax restrictions:

- The name of a static property (field or method) cannot be `prototype`.
- The name of a class field (static or instance) cannot be `constructor`.

## Description

This page introduces public instance fields in detail.

- For public static fields, see [`static`](/en-US/docs/Web/JavaScript/Reference/Classes/static).
- For private fields, see [private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties).
- For public methods, see [method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions).
- For public accessors, see [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set).

Public instance fields exist on every created instance of a class. By declaring a public field, you can ensure the field is always present, and the class definition is more self-documenting.

Public instance fields are added to the instance either at construction time in the base class (before the constructor body runs), or just after `super()` returns in a subclass. Fields without initializers are initialized to `undefined`. Like properties, field names may be computed.

```js
const PREFIX = "prefix";

class ClassWithField {
  field;
  fieldWithInitializer = "instance field";
  [`${PREFIX}Field`] = "prefixed field";
}

const instance = new ClassWithField();
console.log(Object.hasOwn(instance, "field")); // true
console.log(instance.field); // undefined
console.log(instance.fieldWithInitializer); // "instance field"
console.log(instance.prefixField); // "prefixed field"
```

Computed field names are only evaluated once, at [class definition time](/en-US/docs/Web/JavaScript/Reference/Classes#evaluation_order). This means that each class always has a fixed set of field names, and two instances cannot have different field names via computed names. The `this` value in the computed expression is the `this` surrounding the class definition, and referring to the class's name is a {{jsxref("ReferenceError")}} because the class is not initialized yet. {{jsxref("Operators/await", "await")}} and {{jsxref("Operators/yield", "yield")}} work as expected in this expression.

```js
class C {
  [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// Both instances have the same field name
```

In the field initializer, [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) refers to the class instance under construction, and [`super`](/en-US/docs/Web/JavaScript/Reference/Operators/super) refers to the `prototype` property of the base class, which contains the base class's instance methods, but not its instance fields.

```js
class Base {
  baseField = "base field";
  anotherBaseField = this.baseField;
  baseMethod() {
    return "base method output";
  }
}

class Derived extends Base {
  subField = super.baseMethod();
}

const base = new Base();
const sub = new Derived();

console.log(base.anotherBaseField); // "base field"

console.log(sub.subField); // "base method output"
```

The field initializer expression is evaluated each time a new instance is created. (Because the `this` value is different for each instance, the initializer expression can access instance-specific properties.)

```js
class C {
  obj = {};
}

const instance1 = new C();
const instance2 = new C();
console.log(instance1.obj === instance2.obj); // false
```

The expression is evaluated synchronously. You cannot use {{jsxref("Operators/await", "await")}} or {{jsxref("Operators/yield", "yield")}} in the initializer expression. (Think of the initializer expression as being implicitly wrapped in a function.)

Because instance fields of a class are added before the respective constructor runs, you can access the fields' values within the constructor. However, because instance fields of a derived class are defined after `super()` returns, the base class's constructor does not have access to the derived class's fields.

```js
class Base {
  constructor() {
    console.log("Base constructor:", this.field);
  }
}

class Derived extends Base {
  field = 1;
  constructor() {
    super();
    console.log("Derived constructor:", this.field);
    this.field = 2;
  }
}

const instance = new Derived();
// Base constructor: undefined
// Derived constructor: 1
console.log(instance.field); // 2
```

Fields are added one-by-one. Field initializers can refer to field values above it, but not below it. All instance and static methods are added beforehand and can be accessed, although calling them may not behave as expected if they refer to fields below the one being initialized.

```js
class C {
  a = 1;
  b = this.c;
  c = this.a + 1;
  d = this.c + 1;
}

const instance = new C();
console.log(instance.d); // 3
console.log(instance.b); // undefined
```

> [!NOTE]
> This is more important with [private fields](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties), because accessing a non-initialized private field throws a {{jsxref("TypeError")}}, even if the private field is declared below. (If the private field is not declared, it would be an early {{jsxref("SyntaxError")}}.)

Because class fields are added using the [`[[DefineOwnProperty]]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) semantic (which is essentially {{jsxref("Object.defineProperty()")}}), field declarations in derived classes do not invoke setters in the base class. This behavior differs from using `this.field = …` in the constructor.

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

> [!NOTE]
> Before the class fields specification was finalized with the `[[DefineOwnProperty]]` semantic, most transpilers, including [Babel](https://babeljs.io/) and [tsc](https://www.typescriptlang.org/), transformed class fields to the `DerivedWithConstructor` form, which has caused subtle bugs after class fields were standardized.

## Examples

### Using class fields

Class fields cannot depend on arguments of the constructor, so field initializers usually evaluate to the same value for each instance (unless the same expression can evaluate to different values each time, such as {{jsxref("Math.random()")}} or object initializers).

```js example-bad
class Person {
  name = nameArg; // nameArg is out of scope of the constructor
  constructor(nameArg) {}
}
```

```js example-good
class Person {
  // All instances of Person will have the same name
  name = "Dragomir";
}
```

However, even declaring an empty class field is beneficial, because it indicates the existence of the field, which allows type checkers as well as human readers to statically analyze the shape of the class.

```js
class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

The code above seems repetitive, but consider the case where `this` is dynamically mutated: the explicit field declaration makes it clear which fields will definitely be present on the instance.

```js
class Person {
  name;
  age;
  constructor(properties) {
    Object.assign(this, properties);
  }
}
```

Because initializers are evaluated after the base class has executed, you can access properties created by the base class constructor.

```js
class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Professor extends Person {
  name = `Professor ${this.name}`;
}

console.log(new Professor("Radev", 54).name); // "Professor Radev"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using classes](/en-US/docs/Web/JavaScript/Guide/Using_classes) guide
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- [Private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
- {{jsxref("Statements/class", "class")}}
- [The semantics of all JS class elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) by Shu-yu Guo (2018)
- [Public and private class fields](https://v8.dev/features/class-fields) on v8.dev (2018)
