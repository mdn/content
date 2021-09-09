---
title: Object.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Object/toSource
tags:
  - JavaScript
  - Method
  - Non-standard
  - Object
  - Deprecated
  - Prototype
browser-compat: javascript.builtins.Object.toSource
---
{{JSRef}} {{deprecated_header}}

The **`toSource()`** method returns a string representing the
source code of the object.

## Syntax

```js
toSource()
```

### Return value

A string representing the source code of the object.

## Description

The `toSource()` method returns the following values:

- For the built-in {{jsxref("Object")}} object, `toSource()` returns the
  following string indicating that the source code is not available:

  ```js
    function Object() {
        [native code]
    }
    ```

- For instances of {{jsxref("Object")}}, `toSource()` returns a string
  representing the source code.

You can call `toSource()` while debugging to examine the contents of an
object.

### Overriding the toSource() method

It is safe for objects to override the `toSource()` method. For example:

```js
function Person(name) {
  this.name = name;
}

Person.prototype.toSource = function Person_toSource() {
  return 'new Person(' + uneval(this.name) + ')';
};

console.log(new Person('Joe').toSource()); // ---> new Person("Joe")
```

### Built-in toSource() methods

Each core JavaScript type has its own `toSource()` method. These objects
are:

- {{jsxref("Array.prototype.toSource()")}} — {{jsxref("Array")}} object.
- {{jsxref("Boolean.prototype.toSource()")}} — {{jsxref("Boolean")}} object.
- {{jsxref("Date.prototype.toSource()")}} — {{jsxref("Date")}} object.
- {{jsxref("Function.prototype.toSource()")}} — {{jsxref("Function")}} object.
- {{jsxref("Number.prototype.toSource()")}} — {{jsxref("Number")}} object.
- {{jsxref("RegExp.prototype.toSource()")}} — {{jsxref("RegExp")}} object.
- {{jsxref("String.prototype.toSource()")}} — {{jsxref("String")}} object.
- {{jsxref("Symbol.prototype.toSource()")}} — {{jsxref("Symbol")}} object.
- `Math.toSource()` — Returns the String "Math".

### Limitations on cyclical objects

In the case of objects that contain references to themselves, e.g. a cyclically linked
list or a tree that can be traversed both ways, `toSource()` will not
recreate the self-reference, as of Firefox 24. For example:

```js
var obj1 = {};
var obj2 = { a: obj1 };
obj1.b = obj2;

console.log('Cyclical: ' + (obj1.b.a == obj1));

var objSource = obj1.toSource(); // returns "({b:{a:{}}})"

obj1 = eval(objSource);

console.log('Cyclical: ' + (obj1.b.a == obj1));
```

If a cyclical structure is employed and `toSource()` is needed, the object
must provide an override to `toSource()`, either using a reference to a
constructor or providing an anonymous function.

## Examples

### Using toSource()

The following code defines the `Dog` object type and creates
`theDog`, an object of type `Dog`:

```js
function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');
```

Calling the `toSource()` method of `theDog` displays the
JavaScript source that defines the object:

```js
theDog.toSource();
// returns ({name:"Gabby", breed:"Lab", color:"chocolate", sex:"female"})
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
