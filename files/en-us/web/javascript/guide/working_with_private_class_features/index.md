---
title: Working with private class features
slug: Web/JavaScript/Guide/Working_With_Private_Class_Features
tags:
  - Document
  - Guide
  - JavaScript
browser-compat: javascript.classes
---
{{jsSidebar("JavaScript Guide")}}

It's common to want to make fields or methods private, but JavaScript has lacked such a feature since its inception. Conventions have arisen — such as prefixing fields and methods that should be treated as private with an underscore, like `_hidden` — but these are merely conventions. The underscored features are still fully public.

Private class features deliver truly private fields and methods, with that privacy enforced by the language instead of convention. This confers benefits such as avoiding naming collisions between class features and the rest of the code base, and allowing classes to expose a very small interface to the rest of the code.

## Private fields

To understand how private fields work, let's first consider a class that has only public fields, but uses the constructor to encapsulate data—a somewhat common technique, even if it is a bit of a hack. The following class creates a basic count that accepts a starting number, allows that number to be increased or decreased, and can be reset to the original starting value or any other value.

```js example-bad
class PublicCounter {
  constructor(start = 0) {
    let _count = start;
    let _init = start;
    this.increase = (x = 1) => _count += x;
    this.decrease = (x = 1) => _count -= x;
    this.reset = (x = _init) => _count = x;
    this.getCount = () => _count;
  }
  get current() {
    return this.getCount();
  }
}
```

The idea here is that once a new counter of this type is spawned, its starting value and its current value are not available to code outside the counter. The only way to modify the value of `_count` is through the defined methods, such as `increase()` and `reset()`. Similarly, `_init` can't be modified, because there are no methods inside the class to do so, and outside code is unable to reach it.

Here's the same idea, only this time, we'll use private fields.

```js
class PrivateCounter {
  #count;
  #init;
  constructor(start = 0) {
    this.#init = start;
    this.reset(start);
  }
  increase(x = 1) { this.#count += x; }
  decrease(x = 1) { this.#count -= x; }
  reset(x = this.#init) { this.#count = x; }
  get current() {
    return this.#count;
  }
}

const total = new PrivateCounter(7);
console.log(total.current);  // expected output: 7
total.increase();            // #count now = 8
total.increase(5);           // #count now = 13
console.log(total.current);  // expected output: 13
total.reset();               // #count now = 7
```

The "hash mark" (`#`) is what marks a field as being private. It also prevents private fields and property names from ever being in conflict: private names **must** start with `#`, whereas property names can **never** start that way.

Having declared the private fields, they act as we saw in the public example. The only way to change the `#count` value is via the publicly available methods like `decrease()`, and because (in this example) there are no defined ways to alter it, the `#init` value is immutable. It's set when a new `PrivateCounter` is constructed, and can never be changed thereafter.

You **cannot** read a private value directly from code outside the class object. Consider:

```js example-bad
const score = new PrivateCounter(); // #count and #init are now both 0
console.log(score.#count);
  // output:
  // "Uncaught SyntaxError: Private field '#count' must be declared in an enclosing class"
```

If you wish to read private data from outside a class, you must first invent a method or other function to return it. We had already done that with the `current()` getter that returns the current value of `#count`, but `#init` is locked away. Unless we add something like a `getInit()` method to the class, we can't even see the initial value from outside the class, let alone alter it, and the compiler will throw errors if we try.

What are the other restrictions around private fields? For one, you can't refer to a private field you didn't previously define. You might be used to inventing new fields on the fly in JavaScript, but that just won't fly with private fields.

```js example-bad
class BadIdea {
  constructor(arg) {
    this.#init = arg;  // syntax error occurs here
    #startState = arg; // syntax error would also occur here
  }                    // because private fields weren't defined
}                      // before being referenced
```

You can't define the same name twice in a single class, and you can't delete private fields.

```js example-bad
class BadIdeas {
  #firstName;
  #firstName; // syntax error occurs here
  #lastName;
  constructor() {
    delete this.#lastName; // also a syntax error
  }
}
```

There is another limitation: you can't declare private fields or methods via [object literals](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#using_object_initializers). You might be used to something like this:

```js
const planet = {
  name: 'Terra',
  radiusKm: 6371,
  radiusMiles: 3959,
};
```

If you try to include a private class feature when doing this, an error will be thrown.

```js example-bad
const planet = {
  name: 'Terra',
  radiusKm: 6371,
  radiusMiles: 3959,
  #secret: 'central inner core',
};
// result:
// "Uncaught SyntaxError: Unexpected identifier"
```

On the other hand, you _can_ have static private fields, for things you want to be both private and set in stone at construction.

```js
class colorMixer {
  static #red   = "rgba(1,0,0,1)";
  static #green = "rgba(0,1,0,1)";
  static #blue  = "rgba(0,0,1,1)";
  #mixedColor;
  constructor() {
    // …
  }
}
```

## Private methods

Just like private fields, private methods are marked with a leading `#` and cannot be accessed from outside their class. They're useful when you have something complex that the class needs to do internally, but it's something that no other part of the code should be allowed to call.

For example, imagine creating [HTML custom elements](/en-US/docs/Web/Web_Components/Using_custom_elements) that should do something somewhat complicated when clicked/tapped/otherwise activated. Furthermore, the somewhat complicated things that happen when the element is clicked should be restricted to this class, because no other part of the JavaScript will (or should) ever access it. Therefore, something like:

```js
class CustomClick extends HTMLElement {
  #handleClicked() {
    // do complicated stuff in here
  }
  constructor() {
    super();
    this.#handleClicked();
  }
  connectedCallback() {
    this.addEventListener('click', this.#handleClicked)
  }
}

customElements.define('chci-interactive', CustomClick);
```

This can also be done for getters and setters, which is useful in any situation where you want to only get or set things from within the same class. As with fields and methods, prefix the name of the getter/setter with `#`.

```js
class Counter extends HTMLElement {
  #xValue = 0;
  get #x() { return this.#xValue; }
  set #x(value) {
    this.#xValue = value;
    window.requestAnimationFrame(this.#render.bind(this));
  }
  #clicked() {
    this.#x++;
  }
  constructor() {
    super();
    this.onclick = this.#clicked.bind(this);
  }
  connectedCallback() { this.#render(); }
  #render() {
    this.textContent = this.#x.toString();
  }
}

customElements.define('num-counter', Counter);
```

In this case, pretty much every field and method is private to the class. Thus, it presents an interface to the rest of the code that's essentially just like a built-in HTML element. No other part of the JavaScript has the power to affect any of its internals.

## Checking if a private field/method exists

JavaScript code will `throw` if you attempt to access a private method or field that does not exist (this differs from a normal/public method, which will return `undefined`). If you need to write code to test whether a private feature has been defined you might use `try`/`catch`, but it is more compact to use the [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in) operator. This returns `true` or `false` depending on whether or not the property is defined.

The code below demonstrates the approach using the example of a class for adding `Scalar` values. The class uses the `in` operator to check that added objects have the `#total` private class field, and throws an informative exception message if a different type of object is passed.

```js
class Scalar {
  #total = 0;
  constructor(value) {
    this.#total = value || this.#total;
  }

  add(s) {
    // check the passed object defines #total
    if (!(#total in s)) {
      throw new TypeError("Expected an instance of Scalar");
    }
    this.#total += s.#total;
  }
}

const scalar1 = new Scalar(1);
scalar1.add(scalar1)
scalar1.add({}) // throws informative exception
```

## See also

- [Private class features](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [Private Syntax FAQ](https://github.com/tc39/proposal-class-fields/blob/main/PRIVATE_SYNTAX_FAQ.md)
- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)

## Browser compatibility

{{Compat}}
