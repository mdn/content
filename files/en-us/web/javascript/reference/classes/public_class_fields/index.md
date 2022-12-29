---
title: Public class fields
slug: Web/JavaScript/Reference/Classes/Public_class_fields
page-type: javascript-language-feature
tags:
  - Classes
  - JavaScript
  - Language feature
browser-compat: javascript.classes.public_class_fields
---

{{JsSidebar("Classes")}}

Both static and instance public fields are writable, enumerable, and configurable properties. As such, unlike their private counterparts, they participate in prototype inheritance.

## Syntax

```js-nolint
class ClassWithField {
  instanceField;
  instanceFieldWithInitializer = "instance field";
  static staticField;
  static staticFieldWithInitializer = "static field";
}
```

## Description

This page introduces public instance fields in detail.

- For public static fields, see [`static`](/en-US/docs/Web/JavaScript/Reference/Classes/static).
- For private fields, see [private class features](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields).
- For public methods, see [methods definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions).
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

> **Note:** Before the class fields specification was finalized with the `[[DefineOwnProperty]]` semantic, most transpilers, including [Babel](https://babeljs.io/) and [tsc](https://www.typescriptlang.org/), transformed class fields to the `DerivedWithConstructor` form, which has caused subtle bugs after class fields were standardized.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
- [Public and private class fields](https://v8.dev/features/class-fields) article at the v8.dev site
