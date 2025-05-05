---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
page-type: javascript-statement
browser-compat: javascript.statements.generator_function
---

{{jsSidebar("Statements")}}

The **`function*`** declaration creates a {{Glossary("binding")}} of a new generator function to a given name. A generator function can be exited and later re-entered, with its context (variable {{Glossary("binding", "bindings")}}) saved across re-entrances.

You can also define generator functions using the [`function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function*).

{{InteractiveExample("JavaScript Demo: function* declaration")}}

```js interactive-example
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
// Expected output: 20
```

## Syntax

```js-nolint
function* name(param0) {
  statements
}
function* name(param0, param1) {
  statements
}
function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> Generator functions do not have arrow function counterparts.

> **Note:** `function` and `*` are separate tokens, so they can be separated by [whitespace or line terminators](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#white_space).

### Parameters

- `name`
  - : The function name.
- `param` {{optional_inline}}
  - : The name of a formal parameter for the function. For the parameters' syntax, see the [Functions reference](/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : The statements comprising the body of the function.

## Description

A `function*` declaration creates a {{jsxref("GeneratorFunction")}} object. Each time a generator function is called, it returns a new {{jsxref("Generator")}} object, which conforms to the [iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol). When the iterator's `next()`
method is called, the generator function's body is executed until the first
{{jsxref("Operators/yield", "yield")}} expression, which specifies the value to be
returned from the iterator or, with {{jsxref("Operators/yield*", "yield*")}}, delegates
to another generator function. The `next()` method returns an object with a
`value` property containing the yielded value and a `done`
property which indicates whether the generator has yielded its last value, as a boolean.
Calling the `next()` method with an argument will resume the generator
function execution, replacing the `yield` expression where an execution was
paused with the argument from `next()`.

Generators in JavaScript — especially when combined with Promises — are a very
powerful tool for asynchronous programming as they mitigate — if not entirely eliminate
\-- the problems with callbacks, such as [Callback Hell](http://callbackhell.com/) and
[Inversion of Control](https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/).
However, an even simpler solution to these problems can be achieved
with {{jsxref("Statements/async_function", "async functions", "", 1)}}.

A `return` statement in a generator, when executed, will make the generator
finish (i.e., the `done` property of the object returned by it will be set to
`true`). If a value is returned, it will be set as the `value`
property of the object returned by the generator.
Much like a `return` statement, an error thrown inside the generator will
make the generator finished — unless caught within the generator's body.
When a generator is finished, subsequent `next()` calls will not execute any
of that generator's code, they will just return an object of this form:
`{value: undefined, done: true}`.

`function*` declarations behave similar to {{jsxref("Statements/function", "function")}} declarations — they are [hoisted](/en-US/docs/Glossary/Hoisting) to the top of their scope and can be called anywhere in their scope, and they can be redeclared only in certain contexts.

## Examples

### Basic example

```js
function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// …
```

### Example with yield\*

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

### Passing arguments into Generators

```js
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next(); // 0
gen.next("pretzel"); // 1 pretzel
gen.next("california"); // 2 california
gen.next("mayonnaise"); // 3 mayonnaise
```

### Return statement in a generator

```js
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

const gen = yieldAndReturn();
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

### Generator as an object property

```js
const someObj = {
  *generator() {
    yield "a";
    yield "b";
  },
};

const gen = someObj.generator();

console.log(gen.next()); // { value: 'a', done: false }
console.log(gen.next()); // { value: 'b', done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Generator as an object method

```js
class Foo {
  *generator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const f = new Foo();
const gen = f.generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Generator as a computed property

```js
class Foo {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  }
}

const SomeObj = {
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
  },
};

console.log(Array.from(new Foo())); // [ 1, 2 ]
console.log(Array.from(SomeObj)); // [ 'a', 'b' ]
```

### Generators are not constructable

```js
function* f() {}
const obj = new f(); // throws "TypeError: f is not a constructor
```

### Generator defined in an expression

```js
const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
console.log(bar.next()); // {value: 10, done: false}
```

### Generator example

```js
function* powers(n) {
  // Endless loop to generate
  for (let current = n; ; current *= n) {
    yield current;
  }
}

for (const power of powers(2)) {
  // Controlling generator
  if (power > 32) {
    break;
  }
  console.log(power);
  // 2
  // 4
  // 8
  // 16
  // 32
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Functions](/en-US/docs/Web/JavaScript/Guide/Functions) guide
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) guide
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("GeneratorFunction")}}
- [`function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Generator")}}
- [Regenerator](https://github.com/facebook/regenerator) on GitHub
- [Promises and Generators: control flow utopia](https://youtu.be/qbKWsbJ76-s) presentation by Forbes Lindesay at JSConf (2013)
- [Task.js](https://github.com/mozilla/task.js) on GitHub
- [You Don't Know JS: Async & Performance, Ch.4: Generators](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md) by Kyle Simpson
