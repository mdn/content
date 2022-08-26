---
title: static
slug: Web/JavaScript/Reference/Classes/static
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Language feature
  - Static
browser-compat: javascript.classes.static
---
{{jsSidebar("Classes")}}

The **`static`** keyword defines a [static method or property](/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties) for a class, or a [class static initialization block](/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks) (see the link for more information about this usage).
Neither static methods nor static properties can be called on instances of the class.
Instead, they're called on the class itself.

Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

> **Note:** In the context of classes, MDN Web Docs content uses the terms properties and [fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) interchangeably.

{{EmbedInteractiveExample("pages/js/classes-static.html", "taller")}}

## Syntax

```js
static methodName() { /* … */ }
static propertyName [= value];

// Class static initialization block
static {

}
```

## Examples

### Using static members in classes

The following example demonstrates several things:

1. How a static member (method or property) is defined on a class.
2. That a class with a static member can be sub-classed.
3. How a static member can and cannot be called.

```js
class Triple {
  static customName = 'Tripler';
  static description = 'I triple any number you provide';
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = 'I square the triple of any number you provide';
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Triple.description);            // 'I triple any number you provide'
console.log(Triple.calculate());            // 3
console.log(Triple.calculate(6));           // 18

const tp = new Triple();

console.log(SquaredTriple.calculate(3));    // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description);     // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName);      // 'Tripler'

// This throws because calculate() is a static member, not an instance member.
console.log(tp.calculate());                // 'tp.calculate is not a function'
```

### Calling static members from another static method

In order to call a static method or property within another static method of the same class, you can use the [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) keyword.

```js
class StaticMethodCall {
  static staticProperty = 'static property';
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

  static staticProperty = 'static property';
  static staticMethod() {
    return 'static method has been called.';
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`class` expression](/en-US/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
