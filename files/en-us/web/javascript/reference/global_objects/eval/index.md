---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
tags:
  - Evaluating JavaScript
  - JavaScript
  - Method
  - Reference
  - Warning
  - eval
browser-compat: javascript.builtins.eval
---
{{jsSidebar("Objects")}}

> **Warning:** Executing JavaScript from a string is an enormous security
> risk. It is far too easy for a bad actor to run arbitrary code when you use
> `eval()`. See [Never use eval()!](#never_use_eval!), below.

The **`eval()`** function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.

{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}

## Syntax

```js
eval(string)
```

### Parameters

- `string`
  - : A string representing a JavaScript expression, statement, or sequence of statements. The expression can include variables and properties of existing objects. It will be parsed as a script, so [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) declarations (which can only exist in modules) are not allowed.

### Return value

The completion value of evaluating the given code. If the completion value is empty,
{{jsxref("undefined")}} is returned.

## Description

`eval()` is a function property of the global object.

The argument of the `eval()` function is a string. It will evaluate the source string as a script body, which means both statements and expressions are allowed. It returns the completion value of the code. For expressions, it's the value the expression evaluates to. Many statements and declarations have completion values as well, but the result may be surprising (for example, the completion value of an assignment is the assigned value, but the completion value of [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) is undefined), so it's recommended to not rely on statements' completion values.

There are two modes of `eval()` calls: _direct_ eval and _indirect_ eval. Direct eval only has one form: `eval( )` (the invoked function's name is `eval` and its value is the global `eval` function). Everything else, including invoking it via an aliased variable, via a member access or other expression, or through the optional chaining [`?.`](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) operator, is indirect.

```js
// Indirect call using the comma operator to return eval
(0, eval)('x + y');

// Indirect call through optional chaining
eval?.('x + y');

// Indirect call using a variable to store and return eval
const geval = eval;
geval('x + y');

// Indirect call through member access
const obj = { eval };
obj.eval('x + y');
```

Indirect eval can be seen as if the code is evaluated within a separate `<script>` tag. This means:

- Indirect eval works in the global scope rather than the local scope, and the code being evaluated doesn't have access to local variables within the scope where it's being called.

    ```js
    function test() {
      const x = 2, y = 4;
      // Direct call, uses local scope
      console.log(eval('x + y')); // Result is 6
      console.log(eval?.('x + y')); // Uses global scope, throws because x is undefined
    }
    ```

- Indirect `eval` would not inherit the strictness of the surrounding context, and would only be in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) if the source string itself has a `"use strict"` directive.

    ```js
    function strictContext() {
      "use strict";
      eval?.(`with(Math) console.log(PI);`);
    }
    function strictContextStrictEval() {
      "use strict";
      eval?.(`"use strict"; with(Math) console.log(PI);`);
    }
    strictContext(); // logs 3.141592653589793
    strictContextStrictEval(); // throws a SyntaxError because the source string is in strict mode
    ```

    On the other hand, direct eval inherits the strictness of the invoking context.

    ```js
    function nonStrictContext() {
      eval(`with(Math) console.log(PI);`);
    }
    function strictContext() {
      "use strict";
      eval(`with(Math) console.log(PI);`);
    }
    nonStrictContext(); // logs 3.141592653589793
    strictContext(); // throws a SyntaxError because it's in strict mode
    ```

- `var`-declared variables and [function declarations](/en-US/docs/Web/JavaScript/Reference/Statements/function) would go into the surrounding scope if the source string is not interpreted in strict mode — for indirect eval, they become global variables. If it's a direct eval in a strict mode context, or if the `eval` source string itself is in strict mode, then `var` and function declarations do not "leak" into the surrounding scope.

    ```js
    // Neither context nor source string is strict,
    // so var creates a variable in the surrounding scope
    eval("var a = 1;");
    console.log(a); // 1
    // Context is not strict, but eval source is strict,
    // so b is scoped to the evaluated script
    eval("'use strict'; var b = 1;");
    console.log(b); // ReferenceError: b is not defined

    function strictContext() {
      "use strict";
      // Context is strict, but this is indirect and the source
      // string is not strict, so c is still global
      eval?.("var c = 1;");
      // Direct eval in a strict context, so d is scoped
      eval("var d = 1;");
    }
    strictContext();
    console.log(c); // 1
    console.log(d); // ReferenceError: d is not defined
    ```

    [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) declarations within the evaluated string are always scoped to that script.

- Direct eval may have access to additional contextual expressions. For example, in a function's body, one can use [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target):

    ```js
    function Ctor() {
      eval("console.log(new.target)");
    }
    new Ctor(); // [Function: Ctor]
    ```

In strict mode, declaring a variable named `eval` or re-assigning `eval` is a {{jsxref("SyntaxError")}}.

```js example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

If the argument of `eval()` is not a string, `eval()` returns the
argument unchanged. In the following example, the `String` constructor is
specified and `eval()` returns a `String` object rather than
evaluating the string.

```js
eval(new String('2 + 2')); // returns a String object containing "2 + 2"
eval('2 + 2');             // returns 4
```

You can work around this limitation in a generic fashion by using
`toString()`.

```js
const expression = new String('2 + 2');
eval(expression.toString());            // returns 4
```

## Never use eval()!

`eval()` is a dangerous function, which executes the code it's passed with
the privileges of the caller. If you run `eval()` with a string that could be
affected by a malicious party, you may end up running malicious code on the user's
machine with the permissions of your webpage / extension. More importantly, a
third-party code can see the scope in which `eval()` was invoked (if it's a direct eval), which can
lead to possible attacks in ways to which the similar
{{jsxref("Global_Objects/Function", "Function")}} is not susceptible.

`eval()` is also slower than the alternatives, since it has to invoke the
JavaScript interpreter, while many other constructs are optimized by modern JS engines.

Additionally, modern JavaScript interpreters convert JavaScript to machine code. This
means that any concept of variable naming gets obliterated. Thus, any use of
`eval()` will force the browser to do long expensive variable name lookups to
figure out where the variable exists in the machine code and set its value.
Additionally, new things can be introduced to that variable through `eval()`
such as changing the type of that variable, forcing the browser to re-evaluate all of
the generated machine code to compensate.

Fortunately, there's a very good alternative to `eval()`: using
the [`Function`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) constructor. Bad code with `eval()`:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse(
  "{a:(4-1), b:function(){}, c:new Date()}"
))
```

Better code without `eval()`:

```js
function looseJsonParse(obj) {
  return Function(`"use strict";return (${obj})`)();
}
console.log(looseJsonParse(
  "{a:(4-1), b:function(){}, c:new Date()}"
))
```

The two code snippets above may seem to work the same way, but they do not;
the `eval()` one is a great deal slower. Notice
`c: new Date()` in the evaluated string. In the function without the
`eval()`, the object is being evaluated in the global scope, so it is safe
for the browser to assume that `Date` refers to `window.Date()`
instead of a local variable called `Date`. However, in the code using
`eval()`, the browser cannot assume this. For example, in the following code,
`Date` in the evaluated string doesn't refer to `window.Date()`.

```js
function Date(n) {
  return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][n%7 || 0];
}
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse(
  "{a:(4-1), b:function(){}, c:new Date()}"
))
```

Thus, in the `eval()` version of the code, the browser is forced to make the
expensive lookup call to check to see if there are any local variables called
`Date()`. This is incredibly inefficient compared to `Function()`.

In a related circumstance, if you actually want your `Date()`
function to be called from the code inside `Function()`, should
you just take the easy way out and use `eval()`? No! Never. Instead,
try the approach below.

```js
function Date(n) {
  return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][n%7 || 0];
}
function runCodeWithDateFunction(obj) {
  return Function(`"use strict";return (${obj})`)()(
    Date
  );
}
console.log(runCodeWithDateFunction(
  "function(Date){ return Date(5) }"
))
```

The code above may seem inefficiently slow because of the triple nested function, but
let's analyze the benefits of the efficient method above:

- It allows the code in the string passed to `runCodeWithDateFunction()` to
  be minified.
- Function call overhead is minimal, making the far smaller code size well worth the
  benefit
- `Function()` more easily allows your code to benefit from the possible performance improvements provided by `"use strict";`
- The code does not use `eval()`, making it orders of magnitude faster than
  otherwise.

Lastly, let's examine minification. With using `Function()` as shown above,
you can minify the code string passed to `runCodeWithDateFunction()` far more
efficiently because the function arguments names can be minified too as seen in the
minified code below.

```js
console.log(Function('"use strict";return(function(a){return a(5)})')()(function(a){
return"Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" ")[a%7||0]}));
```

There are also additional safer (and faster!) alternatives to `eval()` or
`Function()` for common use-cases.

The difference between `eval()` and `Function()` is that the source string passed to `Function()` is parsed as function body, not as a script. There are a few nuances — for example, you can use `return` statements in a function body but not in a script. In case you intend to parse the content as a script, using indirect eval and forcing strict mode can be another secure alternative.

```js
function looseJsonParse(obj) {
  return eval?.(`'use strict';(${obj})`);
}
console.log(looseJsonParse(
  "{a:(4-1), b:function(){}, c:new Date()}"
))
```

This way, the code being evaluated does not have access to the local scope and cannot define global variables.

### Accessing member properties

You should not use `eval()` to convert property names into properties.
Consider the following example where the property of the object to be accessed is not
known until the code is executed. This can be done with `eval()`:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName();  // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

However, `eval()` is not necessary here. In fact, its use here is
discouraged. Instead, use the
[property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors),
which are much faster and safer:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName();  // returns "a" or "b"
const result = obj[propName];  //  obj[ "a" ] is the same as obj.a
```

You can even use this method to access descendant properties. Using `eval()`
this would look like:

```js
const obj = {a: {b: {c: 0}}};
const propPath = getPropPath();  // returns e.g. "a.b.c"

const result = eval(`obj.${propPath}`);
```

Avoiding `eval()` here could be done by splitting the property path and
looping through the different properties:

```js
function getDescendantProp(obj, desc) {
  const arr = desc.split('.');
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

const obj = {a: {b: {c: 0}}};
const propPath = getPropPath();  // returns e.g. "a.b.c"
const result = getDescendantProp(obj, propPath);
```

Setting a property that way works similarly:

```js
function setDescendantProp(obj, desc, value) {
  const arr = desc.split('.');
  while (arr.length > 1) {
    obj = obj[arr.shift()];
  }
  return obj[arr[0]] = value;
}

const obj = {a: {b: {c: 0}}};
const propPath = getPropPath();  // returns e.g. "a.b.c"
const result = setDescendantProp(obj, propPath, 1);  // obj.a.b.c will now be 1
```

### Use functions instead of evaluating snippets of code

JavaScript has [first-class functions](https://en.wikipedia.org/wiki/First-class_function),
which means you can pass functions as arguments to other APIs, store them in variables
and objects' properties, and so on. Many DOM APIs are designed with this in mind, so you
can (and should) write:

```js
// instead of setTimeout(" … ", 1000) use:
setTimeout(function() { /* … */ }, 1000);

// instead of elt.setAttribute("onclick", "…") use:
elt.addEventListener('click', function() { /* … */ } , false);
```

[Closures](/en-US/docs/Web/JavaScript/Closures) are also helpful as a way to
create parameterized functions without concatenating strings.

### Parsing JSON (converting strings to JavaScript objects)

If the string you're calling `eval()` on contains data (for example, an
array: `"[1, 2, 3]"`), as opposed to code, you should consider switching to
{{Glossary("JSON")}}, which allows the string to use a subset of JavaScript syntax to
represent data.

Note that since JSON syntax is limited compared to JavaScript syntax, many valid
JavaScript literals will not parse as JSON. For example, trailing commas are not allowed
in JSON, and property names (keys) in object literals must be enclosed in quotes. Be
sure to use a JSON serializer to generate strings that will be later parsed as JSON.

### Pass data instead of code

For example, an extension designed to scrape contents of web-pages could have the
scraping rules defined in [XPath](/en-US/docs/Web/XPath) instead of JavaScript
code.

## Examples

### Using eval()

In the following code, both of the statements containing `eval()` return 42.
The first evaluates the string `"x + y + 1"`; the second evaluates the string
`"42"`.

```js
const x = 2;
const y = 39;
const z = '42';
eval('x + y + 1'); // returns 42
eval(z);           // returns 42
```

### eval() returns the completion value of statements

`eval()` returns the completion value of statements. For `if`, it would be the last expression or statement evaluated.

```js
const str = 'if (a) { 1 + 1 } else { 1 + 2 }';
let a = true;
let b = eval(str);  // returns 2

console.log(`b is: ${b}`);

a = false;
b = eval(str);  // returns 3

console.log(`b is: ${b}`);
```

The following example uses `eval()` to evaluate the string `str`.
This string consists of JavaScript statements that assigns `z` a value of 42
if `x` is five, and assigns 0 to `z` otherwise. When the second
statement is executed, `eval()` will cause these statements to be performed,
and it will also evaluate the set of statements and return the value that is assigned to
`z`, because the completion value of an assignment is the assigned value.

```js
const x = 5;
const str = "if (x === 5) {console.log('z is 42'); z = 42;} else z = 0;";

console.log('z is ', eval(str));
```

If you assign multiple values then the last value is returned.

```js
let x = 5;
const str = "if (x === 5) {console.log('z is 42'); z = 42; x = 420; } else z = 0;";

console.log('x is ', eval(str)); // z is 42  x is 420
```

### eval() as a string defining function requires "(" and ")" as prefix and suffix

```js
// This is a function declaration
const fctStr1 = 'function a() {}'
// This is a function expression
const fctStr2 = '(function b() {})'
const fct1 = eval(fctStr1)  // return undefined, but `a` is available as a global function now
const fct2 = eval(fctStr2)  // return the function `b`
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [WebExtensions: Using eval in content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
