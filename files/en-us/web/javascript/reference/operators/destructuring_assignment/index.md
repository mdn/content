---
title: Destructuring assignment
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
tags:
  - Destructuring
  - Destructuring_assignment
  - ECMAScript 2015
  - ES6
  - JavaScript
  - Language feature
  - Nested object and array destructuring
  - Operator
browser-compat: javascript.operators.destructuring
---
{{jsSidebar("Operators")}}

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

{{EmbedInteractiveExample("pages/js/expressions-destructuringassignment.html", "taller")}}

## Syntax

```js
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;

const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
const { a, b, ...rest } = obj;
const { a: a1, b: b1, ...rest } = obj;
const { [key]: a } = obj;

let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;

({ a, b } = obj); // brackets are required
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);
```

## Description

The object and array literal expressions provide an easy way to create _ad hoc_ packages of data.

```js
const x = [1, 2, 3, 4, 5];
```

The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Similarly, you can destructure objects on the left-hand side of the assignment.

```js
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
```

This capability is similar to features present in languages such as Perl and Python.

### Binding and assignment

For both object and array destructuring, there are two kinds of destructuring patterns: _binding pattern_ and _assignment pattern_, with slightly different syntaxes.

In binding patterns, the pattern starts with a declaration keyword (`var`, `let`, or `const`). Then, each individual property must either be bound to a variable or further destructured.

```js
const obj = { a: 1, b: { c: 2 } };
const { a, b: { c: d } } = obj;
// Two variables are bound: `a` and `d`
```

All variables share the same declaration, so if you want some variables to be re-assignable but others to be read-only, you may have to destructure twice — once with `let`, once with `const`.

```js
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let { b: { c: d } } = obj; // d is re-assignable
```

In assignment patterns, the pattern does not start with a keyword. Each destructured property is assigned to a target of assignment — which may either be declared beforehand with `var` or `let`, or is a property of another object — in general, anything that can appear on the left-hand side of an assignment expression.

```js
const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`
```

> **Note:** The parentheses `( ... )` around the assignment statement are required when using object literal destructuring assignment without a declaration.
>
> `{ a, b } = { a: 1, b: 2 }` is not valid stand-alone syntax, as the `{a, b}` on the left-hand side is considered a block and not an object literal. However, `({ a, b } = { a: 1, b: 2 })` is valid, as is `const { a, b } = { a: 1, b: 2 }`.
>
> If your coding style does not include trailing semicolons, the `( ... )` expression needs to be preceded by a semicolon, or it may be used to execute a function on the previous line.

Note that the equivalent _binding pattern_ of the code above is not valid syntax:

```js example-bad
const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;

// This is equivalent to:
//   const numbers[0] = obj.a;
//   const numbers[1] = obj.b;
// Which definitely is not valid.
```

### Default value

Each destructured property can have a _default value_. The default value is used when the property is not present, or has value `undefined`. It is not used if the property has value `null`.

```js
const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null }; // c is null
```

The default value can be any expression. It will only be evaluated when necessary.

```js
const { b = console.log("hey") } = { b: 2 };
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.
```

### Rest property

You can end a destructuring pattern with a rest property `...rest`. This pattern will store all remaining properties of the object or array into a new object or array.

```js
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]
```

The rest property must be the last in the pattern, and must not have a trailing comma.

```js example-bad
const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element
```

### Destructuring patterns with other syntaxes

In many syntaxes where the language binds a variable for you, you can use a destructuring pattern as well. These include:

- The looping variable of [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) and [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops;
- [Function](/en-US/docs/Web/JavaScript/Reference/Functions) parameters;
- The [`catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) binding variable.

For features specific to array or object destructuring, please refer to the individual examples below.

## Examples

### Array destructuring

#### Basic variable assignment

```js
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### Destructuring with more elements than the source

In an array destructuring from an array of length _N_ specified on the right-hand side of the assignment, if the number of variables specified on the left-hand side of the assignment is greater than _N_, only the first _N_ variables are assigned values. The values of the remaining variables will be undefined.

```js
const foo = ['one', 'two'];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue);  //undefined
```

#### Swapping variables

Two variables values can be swapped in one destructuring expression.

Without destructuring assignment, swapping two values requires a temporary variable (or, in some low-level languages, the [XOR-swap trick](https://en.wikipedia.org/wiki/XOR_swap_algorithm)).

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]
```

#### Parsing an array returned from a function

It's always been possible to return an array from a function. Destructuring can make working with an array return value more concise.

In this example, `f()` returns the values `[1, 2]` as its output, which can be parsed in a single line with destructuring.

```js
function f() {
  return [1, 2];
}

const [a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

#### Ignoring some returned values

You can ignore return values that you're not interested in:

```js
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1
```

You can also ignore all returned values:

```js
[,,] = f();
```

#### Using a binding pattern as the rest property

The rest property of array destructuring assignment can be another array or object binding pattern. This allows you to simultaneously unpack the properties and indices of arrays.

```js
const [a, b, ...{ pop, push }] = [1, 2];
console.log(a, b); // 1 2
console.log(pop, push); // [Function pop] [Function push]
```

```js
const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4
```

These binding patterns can even be nested, as long as each rest property is the last in the list.

```js
const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6
```

On the other hand, object destructuring can only have an identifier as the rest property.

```js example-bad
const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: `...` must be followed by an identifier in declaration contexts

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: `...` must be followed by an assignable reference in assignment contexts
```

#### Unpacking values from a regular expression match

When the regular expression [`exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) method finds a match, it returns an array containing first the entire matched portion of the string and then the portions of the string that matched each parenthesized group in the regular expression. Destructuring assignment allows you to unpack the parts out of this array easily, ignoring the full match if it is not needed.

```js
function parseProtocol(url) {
  const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));
// "https"
```

#### Using array destructuring on any iterable

Array destructuring calls the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) of the right-hand side. Therefore, any iterable, not necessarily arrays, can be destructured.

```js
const [a, b] = new Map([[1, 2], [3, 4]]);
console.log(a, b); // [1, 2] [3, 4]
```

Non-iterables cannot be destructured as arrays.

```js example-bad
const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable
```

Iterables are only iterated until all bindings are assigned.

```js
const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      yield v;
    }
  }
}
const [a, b] = obj; // Only logs 0 and 1
```

The rest binding is eagerly evaluated and creates a new array, instead of using the old iterable.

```js
const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      yield v;
    }
  }
}
const [a, b, ...rest] = obj; // Logs 0 1 2 3
console.log(rest); // Logs an array [2, 3]
```

### Object destructuring

#### Basic assignment

```js
const user = {
  id: 42,
  isVerified: true,
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true
```

#### Assigning to new variable names

A property can be unpacked from an object and assigned to a variable with a different name than the object property.

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

Here, for example, `const { p: foo } = o` takes from the object `o` the property named `p` and assigns it to a local variable named `foo`.

#### Assigning to new variable names and providing default values

A property can be both

- Unpacked from an object and assigned to a variable with a different name.
- Assigned a default value in case the unpacked value is `undefined`.

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### Unpacking properties from objects passed as a function parameter

Objects passed into function parameters can also be unpacked into variables, which may then be accessed within the function body.
As for object assignment, the destructuring syntax allows for the new variable to have the same name or a different name than the original property, and to assign default values for the case when the original object does not define the property.

Consider this object, which contains information about a user.

```js
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe',
  },
};
```

Here we show how to unpack a property of the passed object into a variable with the same name.
The parameter value `{ id }` indicates that the `id` property of the object passed to the function should be unpacked into a variable with the same name, which can then be used within the function.

```js
function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42
```

You can define the name of the unpacked variable.
Here we unpack the property named `displayName`, and rename it to `dname` for use within the function body.

```js
function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // `jdoe`
```

Nested objects can also be unpacked.
The example below shows the property `fullname.firstName` being unpacked into a variable called `name`.

```js
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user));  // "jdoe is John"
```

#### Setting a function parameter's default value

Default values can be specified using `=`, and will be used as variable values if a specified property does not exist in the passed object.

Below we show a function where the default size is `'big'`, default co-ordinates are `x: 0, y: 0` and default radius is 25.

```js
function drawChart({ size = 'big', coords = { x: 0, y: 0 }, radius = 25 } = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});
```

In the function signature for `drawChart` above, the destructured left-hand side has a default value of an empty object `= {}`.

You could have also written the function without that default. However, if you leave out that default value, the function will look for at least one argument to be supplied when invoked, whereas in its current form, you can call `drawChart()` without supplying any parameters. Otherwise, you need to at least supply an empty object literal.

For more information, see [Default parameters > Destructured parameter with default value assignment](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters#destructured_parameter_with_default_value_assignment).

#### Nested object and array destructuring

```js
const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localizationTags: [],
      lastEdit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung',
    },
  ],
  url: '/en-US/docs/Tools/Scratchpad',
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
```

#### For of iteration and destructuring

```js
const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith',
    },
    age: 35,
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones',
    },
    age: 25,
  }
];

for (const { name: n, family: { father: f } } of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

#### Computed object property names and destructuring

Computed property names, like on [object literals](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), can be used with destructuring.

```js
const key = 'z';
const { [key]: foo } = { z: 'bar' };

console.log(foo); // "bar"
```

#### Invalid JavaScript identifier as a property name

Destructuring can be used with property names that are not valid JavaScript {{glossary("Identifier", "identifiers")}} by providing an alternative identifier that is valid.

```js
const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // true
```

#### Combined Array and Object Destructuring

Array and Object destructuring can be combined. Say you want the third element in the array `props` below, and then you want the `name` property in the object, you can do the following:

```js
const props = [
  { id: 1, name: 'Fizz'},
  { id: 2, name: 'Buzz'},
  { id: 3, name: 'FizzBuzz'}
];

const [,, { name }] = props;

console.log(name); // "FizzBuzz"
```

#### The prototype chain is looked up when the object is deconstructed

When deconstructing an object, if a property is not accessed in itself, it will continue to look up along the prototype chain.

```js
const obj = {
  self: '123',
  __proto__: {
    prot: '456',
  },
};
const { self, prot } = obj;
// self "123"
// prot "456" (Access to the prototype chain)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators](/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)
- ["ES6 in Depth: Destructuring" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
