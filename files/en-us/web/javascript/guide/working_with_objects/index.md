---
title: Working with objects
slug: Web/JavaScript/Guide/Working_with_Objects
tags:
  - Beginner
  - Comparing object
  - Document
  - Guide
  - JavaScript
  - Object
  - l10n:priority
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Using_Classes")}}

JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or _key_) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects. This chapter describes how to use objects, properties, functions, and methods, and how to create your own objects.

## Objects overview

Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

## Objects and properties

A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. The properties of an object define the characteristics of the object. You access the properties of an object with a simple dot-notation:

```js
objectName.propertyName
```

Like all JavaScript variables, both the object name (which could be a normal variable) and property name are case sensitive. You can define a property by assigning it a value. For example, let's create an object named `myCar` and give it properties named `make`, `model`, and `year` as follows:

```js
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
```

The above example could also be written using an **[object initializer](#object_initializers)**, which is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`):

```js
const myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};
```

Unassigned properties of an object are {{jsxref("undefined")}} (and not [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)).

```js
myCar.color; // undefined
```

Properties of JavaScript objects can also be accessed or set using a bracket notation (for more details see [property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)). Objects are sometimes called _associative arrays_, since each property is associated with a string value that can be used to access it. So, for example, you could access the properties of the `myCar` object as follows:

```js
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;
```

An object property name can be any valid JavaScript string, or anything that can be _converted_ to a string, including an empty string. However, any property name that is not a valid JavaScript identifier cannot use dot notation. For example, a property name that has a space or a hyphen, that starts with a number, or that is held inside a variable can only be accessed using the square bracket notation. This notation is also very useful when property names are to be dynamically determined, i.e. not determinable until runtime. Examples are as follows:

```js
// four variables are created and assigned in a single go,
// separated by commas
const myObj = {},
      str = 'myString',
      rand = Math.random(),
      anotherObj = {};

// Now, creating additional properties.
myObj.type              = 'Dot syntax for a key named type';
myObj['date created']   = 'This key has a space';
myObj[str]              = 'This key is in variable str';
myObj[rand]             = 'A random number is the key here';
myObj[anotherObj]       = 'This key is object anotherObj';
myObj['']               = 'This key is an empty string';

console.log(myObj);
console.log(myObj.myString);

/*
[Log] Object
    : "This key is an empty string"
    0.8916485437228595: "A random number is the key here"
    [object Object]: "This key is object anotherObj"
    date created: "This key has a space"
    myString: "This key is in variable str"
    type: "Dot syntax for a key named type"
*/
// notice that in the log, the order of the properties listed is not the same as the order they were created.

// [Log] This key is in variable str
```

JavaScript object property names (keys) can only be strings or Symbols — all keys in the square bracket notation are converted to strings unless they are Symbols. For example, in the above code, when the key `anotherObj` is added to the `myObj`, JavaScript will call the {{jsxref("Object.toString", "toString()")}} method of `anotherObj`, and use the resulting string as the new key.

You can also access properties with a string value stored in a variable. The variable must be passed in bracket notation. In the example above, the variable `str` held `"myString"` and it is `"myString"` that is the property name. Therefore, `myObj.str` will return as undefined.

```js
str = 'myString';
myObj[str] = 'This key is in variable str';

console.log(myObj.str); //[Log] undefined

console.log(myObj[str]); //[Log] This key is in variable str
console.log(myObj.myString); //[Log] This key is in variable str
```

This allows accessing any property as determined at runtime:

```js
let propertyName = 'make';
myCar[propertyName] = 'Ford';

// access different properties by changing the contents of the variable
propertyName = 'model';
myCar[propertyName] = 'Mustang';

console.log(myCar);

// [Log] {make: 'Ford', model: 'Mustang'}
```

You can use the bracket notation with [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) to iterate over all the enumerable properties of an object. To illustrate how this works, the following function displays the properties of the object when you pass the object and the object's name as arguments to the function:

```js
function showProps(obj, objName) {
  let result = '';
  for (const i in obj) {
    // obj.hasOwn is used to exclude properties from the object's prototype chain and only show "own properties"
    if (Object.hasOwn(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}
```

The term "own property" refers to the properties of the object, but excluding those of the prototype chain. So, the function call `showProps(myCar, 'myCar')` would print the following:

```
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

## Enumerate the properties of an object

There are three native ways to list/traverse object properties:

- [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops. This method traverses all of the enumerable string properties of an object as well as its prototype chain.
- {{jsxref("Object.keys", "Object.keys(myObj)")}}. This method returns an array with only the enumerable own string property names ("keys") in the object `myObj`, but not those in the prototype chain.
- {{jsxref("Object.getOwnPropertyNames", "Object.getOwnPropertyNames(myObj)")}}. This method returns an array containing all the own string property names in the object `myObj`, regardless of if they are enumerable or not.

There is no native way to list "hidden" properties (properties in the prototype chain which are not accessible through the object, because another property has the same name earlier in the prototype chain). However, this can be achieved with the following function:

```js
function listAllProperties(myObj) {
  let objectToInspect = myObj;
  let result = [];

  while(objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  }

  return result;
}
```

## Creating new objects

JavaScript has a number of predefined objects. In addition, you can create your own objects. You can create an object using an [object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer). Alternatively, you can first create a constructor function and then instantiate an object invoking that function in conjunction with the `new` operator.

### Using object initializers

Using object initializers is sometimes referred to as creating objects with literal notation. "Object initializer" is consistent with the terminology used by C++.

The syntax for an object using an object initializer is:

```js
const obj = {
  property1: value1,   // property name may be an identifier
  2: value2,   // or a number
  'property n': value3    // or a string
};
```

where `obj` is the name of the new object, each property name before colons is an identifier (either a name, a number, or a string literal), and each `valueN` is an expression whose value is assigned to the property name. The `obj` and assignment are optional; if you do not need to refer to this object elsewhere, you do not need to assign it to a variable. (Note that you may need to wrap the object literal in parentheses if the object appears where a statement is expected, so as not to have the literal be confused with a block statement.)

Object initializers are expressions, and each object initializer results in a new object being created whenever the statement in which it appears is executed. Identical object initializers create distinct objects that will not compare to each other as equal. Objects are created as if a call to `new Object()` were made; that is, objects made from object literal expressions are instances of `Object`.

The following statement creates an object and assigns it to the variable `x` if and only if the expression `cond` is true:

```js
let x;
if (cond) {
  x = {greeting: 'hi there'};
}
```

The following example creates `myHonda` with three properties. Note that the `engine` property is also an object with its own properties.

```js
const myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};
```

You can also use object initializers to create arrays. See [array literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals).

### Using a constructor function

Alternatively, you can create an object with these two steps:

1. Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
2. Create an instance of the object with `new`.

To define an object type, create a function for the object type that specifies its name, properties, and methods. For example, suppose you want to create an object type for cars. You want this type of object to be called `Car`, and you want it to have properties for make, model, and year. To do this, you would write the following function:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Notice the use of `this` to assign values to the object's properties based on the values passed to the function.

Now you can create an object called `myCar` as follows:

```js
const myCar = new Car('Eagle', 'Talon TSi', 1993);
```

This statement creates `myCar` and assigns it the specified values for its properties. Then the value of `myCar.make` is the string "Eagle", `myCar.model` is the string 'Talon TSi', `myCar.year` is the integer 1993, and so on. The order of arguments and parameters should be the same.

You can create any number of `Car` objects by calls to `new`. For example,

```js
const kenscar = new Car('Nissan', '300ZX', 1992);
const vpgscar = new Car('Mazda', 'Miata', 1990);
```

An object can have a property that is itself another object. For example, suppose you define an object called `Person` as follows:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

and then instantiate two new `Person` objects as follows:

```js
const rand = new Person('Rand McKinnon', 33, 'M');
const ken = new Person('Ken Jones', 39, 'M');
```

Then, you can rewrite the definition of `Car` to include an `owner` property that takes a `Person` object, as follows:

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

Notice that instead of passing a literal string or integer value when creating the new objects, the above statements pass the objects `rand` and `ken` as the arguments for the owners. Then if you want to find out the name of the owner of `car2`, you can access the following property:

```js
car2.owner.name
```

Note that you can always add a property to a previously defined object. For example, the statement

```js
car1.color = 'black';
```

adds a property `color` to `car1`, and assigns it a value of `'black'`. However, this does not affect any other objects. To add the new property to all objects of the same type, you have to add the property to the definition of the `Car` object type.

### Using the `Object.create` method

Objects can also be created using the {{jsxref("Object.create()")}} method. This method can be very useful, because it allows you to choose the prototype object for the object you want to create, without having to define a constructor function.

```js
// Animal properties and method encapsulation
const Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Output: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output: Fishes
```

## Inheritance

All objects in JavaScript inherit from at least one other object. The object being inherited from is known as the prototype, and the inherited properties can be found in the `prototype` object of the constructor. See [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) for more information.

## Indexing object properties

You can refer to a property of an object either by its property name or by its ordinal index. If you initially define a property by its name, you must always refer to it by its name, and if you initially define a property by an index, you must always refer to it by its index.

This restriction applies when you create an object and its properties with a constructor function (as we did previously with the `Car` object type) and when you define individual properties explicitly (for example, `myCar.color = 'red'`). If you initially define an object property with an index, such as `myCar[5] = '25 mpg'`, you subsequently refer to the property only as `myCar[5]`.

The exception to this rule is array-like objects reflected from HTML, such as the `document.forms` array-like object. You can always refer to objects in these array-like objects by either their ordinal number (based on where they appear in the document) or their name (if defined). For example, if the second `<form>` tag in a document has a `name="myForm"` attribute, you can refer to the form as `document.forms[1]` or `document.forms['myForm']` or `document.forms.myForm`.

## Defining properties for an object type

You can add a property to a previously defined object type by using the `prototype` property. This defines a property that is shared by all objects of the specified type, rather than by just one instance of the object. The following code adds a `color` property to all objects of type `Car`, and then assigns a value to the `color` property of the object `car1`.

```js
Car.prototype.color = null;
car1.color = 'black';
```

See the [Inheritance_and_the_prototype_chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) for more information.

## Defining methods

A _method_ is a function associated with an object, or, put differently, a method is a property of an object that is a function. Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object. See also [method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) for more details. An example is:

```js
objectName.methodName = functionName;

const myObj = {
  myMethod: function(params) {
    // do something
  },

  // this works too!
  myOtherMethod(params) {
    // do something else
  }
};
```

where `objectName` is an existing object, `methodName` is the name you are assigning to the method, and `functionName` is the name of the function.

You can then call the method in the context of the object as follows:

```js
object.methodName(params);
```

You can define methods for an object type by including a method definition in the object constructor function. You could define a function that would format and display the properties of the previously-defined `Car` objects; for example,

```js
function displayCar() {
  const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  prettyPrint(result);
}
```

where `prettyPrint` is a function to display a horizontal rule and a string. Notice the use of `this` to refer to the object to which the method belongs.

You can make this function a method of `Car` by adding the statement

```js
this.displayCar = displayCar;
```

to the object definition. So, the full definition of `Car` would now look like

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.displayCar = displayCar;
}
```

Then you can call the `displayCar` method for each of the objects as follows:

```js
car1.displayCar();
car2.displayCar();
```

## Using `this` for object references

JavaScript has a special keyword, [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this), that you can use within a method to refer to the current object. For example, suppose you have 2 objects, `Manager` and `Intern`. Each object have their own `name`, `age` and `job`. In the function `sayHi()`, notice there is `this.name`. When added to the 2 objects they can be called and prints the `'Hello, My name is'` then adds the `name` value from that specific object. As shown below.

```js
const Manager = {
  name: "John",
  age: 27,
  job: "Software Engineer"
}
const Intern = {
  name: "Ben",
  age: 21,
  job: "Software Engineer Intern"
}

function sayHi() {
  console.log(`Hello, my name is ${this.name}`)
}

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is John'
Intern.sayHi(); // Hello, my name is Ben'
```

The `this` refers to the object that it is in. You can create a new function called `howOldAmI()` which logs a sentence saying how old the person is.

```js
function howOldAmI() {
  console.log(`I am ${this.age} years old.`);
}
Manager.howOldAmI = howOldAmI;
Manager.howOldAmI(); // I am 27 years old.
```

## Defining getters and setters

A [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) is a method that gets the value of a specific property. A [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) is a method that sets the value of a specific property. You can define getters and setters on any predefined core object or user-defined object that supports the addition of new properties.

Getters and setters can be either

- defined using [object initializers](#object_initializers), or
- added later to any object at any time using a getter or setter adding method.

When defining getters and setters using [object initializers](#object_initializers) all you need to do is to prefix a getter method with `get` and a setter method with `set`. Of course, the getter method must not expect a parameter, while the setter method expects exactly one parameter (the new value to set). For instance:

```js
const myObj = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(myObj.a); // 7
console.log(myObj.b); // 8 <-- At this point the get b() method is initiated.
myObj.c = 50;         //   <-- At this point the set c(x) method is initiated
console.log(myObj.a); // 25
```

The `myObj` object's properties are:

- `myObj.a` — a number
- `myObj.b` — a getter that returns `myObj.a` plus 1
- `myObj.c` — a setter that sets the value of `myObj.a` to half of the value `myObj.c` is being set to

Please note that function names of getters and setters defined in an object literal using "\[gs]et _property_()" are not the names of the getters themselves, even though the `[gs]et propertyName(){ }` syntax may mislead you to think otherwise.

Getters and setters can also be added to an object at any time after creation using the {{jsxref("Object.defineProperties()")}} method. This method's first parameter is the object on which you want to define the getter or setter. The second parameter is an object whose property names are the getter or setter names, and whose property values are objects for defining the getter or setter functions. Here's an example that defines the same getter and setter used in the previous example:

```js
const myObj = { a: 0 };

Object.defineProperties(myObj, {
  b: { get() { return this.a + 1; } },
  c: { set(x) { this.a = x / 2; } },
});

myObj.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(myObj.b); // Runs the getter, which yields a + 1 or 6
```

Which of the two forms to choose depends on your programming style and task at hand. If you already go for the object initializer when defining a prototype you will probably most of the time choose the first form. This form is more compact and natural. However, if you need to add getters and setters later — because you did not write the prototype or particular object — then the second form is the only possible form. The second form probably best represents the dynamic nature of JavaScript — but it can make the code hard to read and understand.

## Deleting properties

You can remove a non-inherited property by using the [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator. The following code shows how to remove a property.

```js
// Creates a new object, myobj, with two properties, a and b.
const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log ('a' in myobj); // output: "false"
```

## Comparing objects

In JavaScript, objects are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.

```js
// Two variables, two distinct objects with the same properties
const fruit = {name: 'apple'};
const fruitbear = {name: 'apple'};

fruit == fruitbear; // return false
fruit === fruitbear; // return false
```

```js
// Two variables, a single object
const fruit = {name: 'apple'};
const fruitbear = fruit;  // Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit == fruitbear; // return true
fruit === fruitbear; // return true

fruit.name = 'grape';
console.log(fruitbear); // output: { name: "grape" }, instead of { name: "apple" }
```

For more information about comparison operators, see [equality operators](/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators).

## See also

- To dive deeper, read about [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).
- To learn about classes (an alternative way to create objects), read the [JavaScript classes](/en-US/docs/Web/JavaScript/Reference/Classes) reference.

{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Using_Classes")}}
