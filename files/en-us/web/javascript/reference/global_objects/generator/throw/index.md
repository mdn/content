---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
tags:
  - ECMAScript 2015
  - Generator
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Generator.throw
---
{{JSRef}}

The **`throw()`** method resumes the execution of a generator by throwing an
error into it and returns an object with two properties `done` and `value`.

## Syntax

```js
throw(exception)
```

### Parameters

- `exception`
  - : The exception to throw. For debugging purposes, it is useful to make it an
    `instanceof` {{jsxref("Error")}}.

### Return value

An {{jsxref("Global_Objects/Object", "Object")}} with two
properties:

<dl><dt><code>done</code> (boolean)</dt><dd><ul><li>Has the value <code>true</code> if the iterator is past the end of the iterated
sequence. In this case <code>value</code> optionally specifies the <em>return
value</em> of the iterator.</li><li>Has the value <code>false</code> if the iterator was able to produce the next
value in the sequence. This is equivalent of not specifying the <code>done</code>
property altogether.</li></ul></dd><dt><code>value</code></dt><dd>Any JavaScript value returned by the iterator. Can be omitted when <code>done</code>
is <code>true</code>.</dd></dl>

## Examples

### Using throw()

The following example shows a simple generator and an error that is thrown using
the `throw` method. An error can be caught by a
{{jsxref("Statements/try...catch", "try...catch")}} block as
usual.

```js
function* gen() {
  while(true) {
    try {
       yield 42;
    } catch(e) {
      console.log('Error caught!');
    }
  }
}

const g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error('Something went wrong'));
// "Error caught!"
// { value: 42, done: false }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function*")}}
