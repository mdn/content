---
title: new operator
slug: Web/JavaScript/Reference/Operators/new
tags:
  - JavaScript
  - Language feature
  - Left-hand-side expressions
  - Operator
  - Reference
browser-compat: javascript.operators.new
---
{{jsSidebar("Operators")}}

The **`new` operator** lets developers
create an instance of a user-defined object type or of one of the built-in object
types that has a constructor function.

{{EmbedInteractiveExample("pages/js/expressions-newoperator.html")}}

## Syntax

```js
new constructor[([arguments])]
```

### Parameters

- `constructor`
  - : A class or function that specifies the type of the object instance.
- `arguments`
  - : A list of values that the `constructor` will be called with. `new Foo` is equivalent to `new Foo()`, i.e. if no argument list is specified, `Foo` is called without arguments.

## Description

When a function is called with the **`new`** keyword, the function will be used as a constructor. `new` will do the following things:

1. Creates a blank, plain JavaScript object. For convenience, let's call it `newInstance`.
2. Points `newInstance`'s [[Prototype]] to the constructor function's `prototype` property.

    > **Note:** Properties/objects added to the constructor function's `prototype` property are therefore accessible to all instances created from the constructor function.

3. Executes the constructor function with the given arguments, binding `newInstance` as the [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) context (i.e. all references to `this` in the constructor function now refer to `newInstance`).
4. If the constructor function returns a [non-primitive](/en-US/docs/Web/JavaScript/Data_structures#primitive_values), this return value becomes the result of the whole `new` expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, `newInstance` is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)

[Classes](/en-US/docs/Web/JavaScript/Reference/Classes) can only be instantiated with the `new` operator — attempting to call a class without `new` will throw a `TypeError`.

Creating an object with a user-defined constructor function requires two steps:

1. Define the object type by writing a function that specifies its name and properties.
    For example, a constructor function to create an object `Foo` might look like this:

    ```js
    function Foo(bar1, bar2) {
      this.bar1 = bar1;
      this.bar2 = bar2;
    }
    ```

2. Create an instance of the object with `new`.

    ```js
    const myFoo = new Foo('Bar 1', 2021);
    ```

> **Note:** An object can have a property that is itself another object. See the examples below.

You can always add a property to a previously defined object instance. For example, the statement `car1.color = "black"` adds a property `color` to `car1`, and assigns it a value of `"black"`.

However, this does not affect any other objects. To add the new property to all objects of the same type, you must add the property to the constructor's `prototype` property. This defines a property that is shared by all objects created with that function, rather than by just one instance of the object type. The following code adds a `color` property with value `"original color"` to all objects of type `Car`, and then overwrites that value with the string `"black"` only in the instance object `car1`. For more information, see [prototype](/en-US/docs/Learn/JavaScript/Objects/Object_prototypes).

```js
function Car() {}
const car1 = new Car();
const car2 = new Car();

console.log(car1.color);    // undefined

Car.prototype.color = 'original color';
console.log(car1.color);    // 'original color'

car1.color = 'black';
console.log(car1.color);    // 'black'

console.log(Object.getPrototypeOf(car1).color); // 'original color'
console.log(Object.getPrototypeOf(car2).color); // 'original color'
console.log(car1.color);   // 'black'
console.log(car2.color);   // 'original color'
```

> **Note:** While the constructor function can be invoked like any regular function (i.e. without the `new` operator),
> in this case a new object is not created and the value of `this` is also different.

A function can know whether it is invoked with `new` by checking [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target). `new.target` is only `undefined` when the function is invoked without `new`. For example, you can have a function that behaves differently when it's called versus when it's constructed:

```js
function Car(color) {
  if (!new.target) {
    // Called as function.
    return `${color} car`;
  }
  // Called with new.
  this.color = color;
}

const a = Car("red"); // a is "red car"
const b = new Car("red"); // b is `Car { color: "red" }`
```

Prior to ES6, which introduced [classes](/en-US/docs/Web/JavaScript/Reference/Classes), most JavaScript built-ins are both callable and constructible, although many of them exhibit different behaviors. To name a few:

- [`Array()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array), [`Error()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error), and [`Function()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) behave the same when called as a function or a constructor.
- [`Boolean()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean), [`Number()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number), and [`String()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String) coerce their argument to the respective primitive type when called, and return wrapper objects when constructed.
- [`Date()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) returns a string representing the current date when called, equivalent to `new Date().toString()`.

After ES6, the language is stricter about which are constructors and which are functions. For example:

- [`Symbol()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) and [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) can only be called without `new`. Attempting to construct them will throw a `TypeError`.
- [`Proxy`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) and [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) can only be constructed with `new`. Attempting to call them will throw a `TypeError`.

## Examples

### Object type and object instance

Suppose you want to create an object type for cars. You want this type of object to be
called `Car`, and you want it to have properties for make, model, and year.
To do this, you would write the following function:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Now you can create an object called `myCar` as follows:

```js
const myCar = new Car('Eagle', 'Talon TSi', 1993);
```

This statement creates `myCar` and assigns it the specified values for its
properties. Then the value of `myCar.make` is the string "Eagle",
`myCar.year` is the integer 1993, and so on.

You can create any number of `car` objects by calls to `new`. For
example:

```js
const kensCar = new Car('Nissan', '300ZX', 1992);
```

### Object property that is itself another object

Suppose you define an object called `Person` as follows:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

And then instantiate two new `Person` objects as follows:

```js
const rand = new Person('Rand McNally', 33, 'M');
const ken = new Person('Ken Jones', 39, 'M');
```

Then you can rewrite the definition of `Car` to include an
`owner` property that takes a `Person` object, as follows:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

To instantiate the new objects, you then use the following:

```js
const car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
const car2 = new Car('Nissan', '300ZX', 1992, ken);
```

Instead of passing a literal string or integer value when creating the new objects, the
above statements pass the objects `rand` and `ken` as the
parameters for the owners. To find out the name of the owner of `car2`, you
can access the following property:

```js
car2.owner.name
```

### Using `new` with classes

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p = new Person("Caroline");
p.greet(); // Hello, my name is Caroline
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Function")}}
- {{jsxref("Reflect.construct()")}}
- {{jsxref("Object")}}
