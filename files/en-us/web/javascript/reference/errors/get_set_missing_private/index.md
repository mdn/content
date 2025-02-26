---
title: "TypeError: can't access/set private field or method: object is not the right class"
slug: Web/JavaScript/Reference/Errors/Get_set_missing_private
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "can't access private field or method: object is not the right class" or "can't set private field: object is not the right class" occurs when a private field or method is get or set on an object that does not have this [private property](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) defined.

## Message

```plain
TypeError: Cannot read private member #x from an object whose class did not declare it (V8-based)
TypeError: Cannot write private member #x to an object whose class did not declare it (V8-based)
TypeError: can't access private field or method: object is not the right class (Firefox)
TypeError: can't set private field: object is not the right class (Firefox)
TypeError: Cannot access invalid private field (evaluating 'this.#x') (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

You are trying to get or set a private field or method on an object, but that object does not contain this private property. Private instance properties can only be accessed on instances of the class (including its subclasses) that declares them; private static properties can only be accessed on the class itself that declares them, and not on subclasses.

This error occurs when the private name exists in the class scope but the object it's accessed on is invalid, If the private name does not exist, you will get a [syntax error](/en-US/docs/Web/JavaScript/Reference/Errors/Undeclared_private_field_or_method) instead.

## Examples

### Mismatched static/instance fields

You may have declared the field as a static field, but are trying to access it on an instance, or vice versa.

```js example-bad
class MyClass {
  static #x = 0;
  doSomething() {
    console.log(this.#x);
  }
}

const obj = new MyClass();
obj.doSomething();
// TypeError: can't access private field: object is not the right class
```

To fix this, either change the field to be an instance field, or access the field on the class itself, or declare another field on the instance. Note that the private namespace is shared between static and instance properties, so you cannot have a static and instance private property with the same name.

```js example-good
class MyClass {
  #x = 0;
  doSomething() {
    console.log(this.#x);
  }
}

class MyClass2 {
  static #x = 0;
  doSomething() {
    console.log(MyClass2.#x);
  }
}
```

### Wrong object used

Perhaps you have a method that access `this.#x`, but it is called with another `this` value.

```js example-bad
class JSONReplacer {
  #count = 0;
  func(key, value) {
    if (typeof value === "object") {
      this.#count++;
    }
    return value;
  }
}

JSON.stringify({ a: 1, b: { c: 2 } }, new JSONReplacer().func);
// TypeError: can't access private field: object is not the right class
```

This is because {{jsxref("JSON.stringify()")}} calls the replacer function with the object containing `value` as `this`, so the private field is not accessible. To fix this, you can bind the method to the object, or use an arrow function, to ensure that `replacer.func` is called with the correct `this` value.

```js example-good
const replacer = new JSONReplacer();
JSON.stringify({ a: 1, b: { c: 2 } }, replacer.func.bind(replacer));
JSON.stringify({ a: 1, b: { c: 2 } }, (...args) => replacer.func(...args));
```

Most of the time, if you accidentally unbound a method, the method would be called with `undefined` as `this`, which would result in a different error (TypeError: can't convert undefined to object). This error only occurs when the method is called with a different object as `this`, either by using {{jsxref("Function/call", "call()")}} or {{jsxref("Function/apply", "apply()")}}, or by passing the method as a callback to a function that calls it with a different `this` value.

If you don't know for sure that the object will contain the private property, as in the following code:

```js
class MyClass {
  #x = 0;
  static doSomething(obj) {
    console.log(obj.#x); // Throws if obj is not an instance of MyClass
  }
}
```

You can use the {{jsxref("Operators/in", "in")}} operator to perform a _branded check_ first.

```js
class MyClass {
  #x = 0;
  static doSomething(obj) {
    if (!(#x in obj)) {
      return;
    }
    console.log(obj.#x);
  }
}
```

### Accessing static properties on subclasses

If you have a [private static property](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties#private_static_fields), you can only access it on the class that declares it, not on subclasses.

```js example-bad
class MyClass {
  static #x = 0;
  doSomething() {
    console.log(this.#x);
  }
}

class MySubClass extends MyClass {}

MySubClass.doSomething();
// TypeError: can't access private field: object is not the right class
```

To fix this, never access private static properties through `this`. Instead, always explicitly specify the class's name.

```js example-good
class MyClass {
  static #x = 0;
  doSomething() {
    console.log(MyClass.#x);
  }
}
```

### Accessing same-name private properties on another class

Unlike normal string or symbol properties, private names are not shared between classes. If you have a private property with the same name in two classes, they are still not the same property, and you cannot access one class's private property from another class.

```js example-bad
class MyClass {
  #x = 0;
}

class MyOtherClass {
  #x = 1;
  doSomething(o) {
    console.log(o.#x);
  }
}

const obj = new MyClass();
new MyOtherClass().doSomething(obj);
// TypeError: can't access private field: object is not the right class
```

### Adding private properties to unrelated objects

You cannot dynamically _add_ private properties to unrelated objects.

```js example-bad
class MyClass {
  #x = 0;
  static stamp(obj) {
    obj.#x = 1;
  }
}

MyClass.stamp({});
// TypeError: can't set private field: object is not the right class
```

If you really want to do this, consider the [return override](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) trick. However, in general, you would probably want to use a {{jsxref("WeakMap")}} instead.

```js example-good
class MyClass {
  static #objToX = new WeakMap();
  static stamp(obj) {
    MyClass.#objToX.set(obj, 1);
  }
}

MyClass.stamp({});
```

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- [Private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
