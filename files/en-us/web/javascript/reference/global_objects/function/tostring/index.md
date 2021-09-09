---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
tags:
  - Function
  - JavaScript
  - Method
  - Prototype
browser-compat: javascript.builtins.Function.toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the
source code of the function.

{{EmbedInteractiveExample("pages/js/function-tostring.html")}}

## Syntax

```js
toString()
```

### Return value

A string representing the source code of the function.

## Description

The {{jsxref("Function")}} object overrides the {{jsxref("Object.prototype.toString",
    "toString")}} method inherited from {{jsxref("Object")}}; it does not inherit
{{jsxref("Object.prototype.toString")}}. For user-defined {{jsxref("Function")}}
objects, the `toString` method returns a string containing the source text
segment which was used to define the function.

JavaScript calls the `toString` method automatically when a
{{jsxref("Function")}} is to be represented as a text value, e.g. when a function is
concatenated with a string.

The `toString()` method will throw a {{jsxref("TypeError")}} exception
("Function.prototype.toString called on incompatible object"), if its
`this` value object is not a `Function` object.

```js example-bad
Function.prototype.toString.call('foo'); // TypeError
```

If the `toString()` method is called on built-in function objects or a
function created by `Function.prototype.bind`, `toString()`
returns a _native function string_ which looks like

```js
"function () {\n    [native code]\n}"
```

If the `toString()` method is called on a function created by the
`Function` constructor, `toString()` returns the source code of
a synthesized function declaration named "anonymous" using the provided parameters and
function body.

It's also possible to explicitly get the string representation of a function using the
`+` operator:

```js
function foo() { return 'bar' }
console.log(foo + ''); // "function foo() { return 'bar' }"
```

## Examples

### Comparing actual source code and toString results

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Function</th>
      <th scope="col">Function.prototype.toString result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><pre class="brush: js">function f(){}</pre></td>
      <td><pre class="brush: js">"function f(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">class A { a(){} }</pre></td>
      <td><pre class="brush: js">"class A { a(){} }"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">function* g(){}</pre></td>
      <td><pre class="brush: js">"function* g(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">a => a</pre></td>
      <td><pre class="brush: js">"a => a"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">({ a(){} }.a)</pre></td>
      <td><pre class="brush: js">"a(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">({ *a(){} }.a)</pre></td>
      <td><pre class="brush: js">"*a(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">({ [0](){} }[0])</pre></td>
      <td><pre class="brush: js">"[0](){}"</pre></td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
Object.getOwnPropertyDescriptor({
    get a(){}
}, "a").get</pre
        >
      </td>
      <td><pre class="brush: js">"get a(){}"</pre></td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
Object.getOwnPropertyDescriptor({
    set a(x){}
}, "a").set</pre
        >
      </td>
      <td><pre class="brush: js">"set a(x){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">Function.prototype.toString</pre></td>
      <td>
        <pre class="brush: js">"function toString() { [native code] }"</pre>
      </td>
    </tr>
    <tr>
      <td><pre class="brush: js">(function f(){}.bind(0))</pre></td>
      <td><pre class="brush: js">"function () { [native code] }"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">Function("a", "b")</pre></td>
      <td><pre class="brush: js">"function anonymous(a\n) {\nb\n}"</pre></td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
