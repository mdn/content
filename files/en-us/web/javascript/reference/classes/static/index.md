---
title: static
slug: Web/JavaScript/Reference/Classes/static
page-type: javascript-language-feature
browser-compat: javascript.classes.static
---

{{jsSidebar("Classes")}}

The **`static`** keyword defines a [static method or field](/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_fields) for a class, or a [static initialization block](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) (see the link for more information about this usage). Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

> **Note:** In the context of classes, MDN Web Docs content uses the terms properties and [fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) interchangeably.

{{EmbedInteractiveExample("pages/js/classes-static.html", "taller")}}

## Syntax

```js-nolint
class ClassWithStatic {
  static staticField;
  static staticFieldWithInitializer = value;
  static staticMethod() {
    // …
  }
}
```

There are some additional syntax restrictions:

- The name of a static property (field or method) cannot be `prototype`.
- The name of a class field (static or instance) cannot be `constructor`.

## Description

This page introduces public static properties of classes, which include static methods, static accessors, and static fields.

- For private static features, see [private class features](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields).
- For instance features, see [methods definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions), [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get), [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set), and [public class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

Public static features are declared using the `static` keyword. They are added to the class constructor at the time of [class evaluation](/en-US/docs/Web/JavaScript/Reference/Classes#evaluation_order) using the [`[[DefineOwnProperty]]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) semantic (which is essentially {{jsxref("Object.defineProperty()")}}). They are accessed again from the class constructor.

Static methods are often utility functions, such as functions to create or clone instances. Public static fields are useful when you want a field to exist only once per class, not on every class instance you create. This is useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

Static field names can be [computed](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names). The `this` value in the computed expression is the `this` surrounding the class definition, and referring to the class's name is a {{jsxref("ReferenceError")}} because the class is not initialized yet. {{jsxref("Operators/await", "await")}} and {{jsxref("Operators/yield", "yield")}} work as expected in this expression.

Static fields can have an initializer. Static fields without initializers are initialized to `undefined`. Public static fields are not reinitialized on subclasses, but can be accessed via the prototype chain.

```js
class ClassWithStaticField {
  static staticField;
  static staticFieldWithInitializer = "static field";
}

class SubclassWithStaticField extends ClassWithStaticField {
  static subStaticField = "subclass field";
}

console.log(Object.hasOwn(ClassWithStaticField, "staticField")); // true
console.log(ClassWithStaticField.staticField); // undefined
console.log(ClassWithStaticField.staticFieldWithInitializer); // "static field"
console.log(SubclassWithStaticField.staticFieldWithInitializer); // "static field"
console.log(SubclassWithStaticField.subStaticField); // "subclass field"
```

In the field initializer, [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) refers to the current class (which you can also access through its name), and [`super`](/en-US/docs/Web/JavaScript/Reference/Operators/super) refers to the base class constructor.

```js
class ClassWithStaticField {
  static baseStaticField = "base static field";
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() {
    return "base static method output";
  }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField); // "base static field"
console.log(SubClassWithStaticField.subStaticField); // "base static method output"
```

The expression is evaluated synchronously. You cannot use {{jsxref("Operators/await", "await")}} or {{jsxref("Operators/yield", "yield")}} in the initializer expression. (Think of the initializer expression as being implicitly wrapped in a function.)

Static field initializers and [static initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) are evaluated one-by-one. Field initializers can refer to field values above it, but not below it. All static methods are added beforehand and can be accessed, although calling them may not behave as expected if they refer to fields below the one being initialized.

> **Note:** This is more important with [private static fields](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields), because accessing a non-initialized private field throws a {{jsxref("TypeError")}}, even if the private field is declared below. (If the private field is not declared, it would be an early {{jsxref("SyntaxError")}}.)

## Examples

### Using static members in classes

The following example demonstrates several things:

1. How a static member (method or property) is defined on a class.
2. That a class with a static member can be sub-classed.
3. How a static member can and cannot be called.

```js
class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = "I square the triple of any number you provide";
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

const tp = new Triple();

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // 'Tripler'

// This throws because calculate() is a static member, not an instance member.
console.log(tp.calculate()); // 'tp.calculate is not a function'
```

### Calling static members from another static method

In order to call a static method or property within another static method of the same class, you can use the [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) keyword.

```js
class StaticMethodCall {
  static staticProperty = "static property";
  static staticMethod() {
    return `Static method and ${this.staticProperty} has been called`;
  }
  static anotherStaticMethod() {
    return `${this.staticMethod()} from another static method`;
  }
}
StaticMethodCall.staticMethod();
// 'Static method and static property has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method and static property has been called from another static method'
```

### Calling static members from a class constructor and other methods

Static members are not directly accessible using the {{JSxRef("Operators/this", "this")}} keyword from
non-static methods. You need to call them using the class name:
`CLASSNAME.STATIC_METHOD_NAME()` /
`CLASSNAME.STATIC_PROPERTY_NAME` or by calling the method as a property of
the `constructor`: `this.constructor.STATIC_METHOD_NAME()` /
`this.constructor.STATIC_PROPERTY_NAME`

```js
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty); // 'static property'
    console.log(this.constructor.staticProperty); // 'static property'
    console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
    console.log(this.constructor.staticMethod()); // 'static method has been called.'
  }

  static staticProperty = "static property";
  static staticMethod() {
    return "static method has been called.";
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using classes](/en-US/docs/Web/JavaScript/Guide/Using_classes)
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- [Static initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- {{jsxref("Statements/class", "class")}}
