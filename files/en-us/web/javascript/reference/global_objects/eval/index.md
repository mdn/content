---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
page-type: javascript-function
browser-compat: javascript.builtins.eval
sidebar: jssidebar
---

> [!WARNING]
> The argument passed to this method is dynamically evaluated and executed as JavaScript.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by always passing {{domxref("TrustedScript")}} objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> See [Security considerations](#security_considerations) for more information.

The **`eval()`** function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.

{{InteractiveExample("JavaScript Demo: eval()")}}

```js interactive-example
console.log(eval("2 + 2"));
// Expected output: 4

console.log(eval(new String("2 + 2")));
// Expected output: 2 + 2

console.log(eval("2 + 2") === eval("4"));
// Expected output: true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// Expected output: false
```

## Syntax

```js-nolint
eval(script)
```

### Parameters

- `script`
  - : A {{domxref("TrustedScript")}} instance or string representing a JavaScript expression, statement, or sequence of statements.
    The expression can include variables and properties of existing objects. It will be parsed as a script, so [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) declarations (which can only exist in modules) are not allowed.

### Return value

The completion value of evaluating the given code. If the completion value is empty, {{jsxref("undefined")}} is returned.
If `script` is not a {{domxref("TrustedScript")}} or string primitive, `eval()` returns the argument unchanged.

### Exceptions

- {{jsxref("SyntaxError")}}
  - : The `script` parameter cannot be parsed as a script.
- {{jsxref("TypeError")}}
  - : `script` is a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.

The method also throws any exception that occurs during evaluation of the code.

## Description

`eval()` is a function property of the global object.

The argument of the `eval()` function is a string. It will evaluate the source string as a script body, which means both statements and expressions are allowed. It returns the completion value of the code. For expressions, it's the value the expression evaluates to. Many statements and declarations have completion values as well, but the result may be surprising (for example, the completion value of an assignment is the assigned value, but the completion value of [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) is undefined), so it's recommended to not rely on statements' completion values.

In strict mode, declaring a variable named `eval` or re-assigning `eval` is a {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

If the argument of `eval()` is not a {{domxref("TrustedScript")}} or string, `eval()` returns the argument unchanged.
In the following example, passing a `String` object instead of a primitive causes `eval()` to return the `String` object rather than evaluating the string.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

To work around the issue in a generic fashion, you can [coerce the argument to a string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) yourself before passing it to `eval()`.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direct and indirect eval

There are two modes of `eval()` calls: _direct_ eval and _indirect_ eval. Direct eval, as the name implies, refers to _directly_ calling the global `eval` function with `eval(...)`. Everything else, including invoking it via an aliased variable, via a member access or other expression, or through the optional chaining [`?.`](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) operator, is indirect.

```js
// Direct call
eval("x + y");

// Indirect call using the comma operator to return eval
(0, eval)("x + y");

// Indirect call through optional chaining
eval?.("x + y");

// Indirect call using a variable to store and return eval
const myEval = eval;
myEval("x + y");

// Indirect call through member access
const obj = { eval };
obj.eval("x + y");
```

Indirect eval can be seen as if the code is evaluated within a separate `<script>` tag. This means:

- Indirect eval works in the global scope rather than the local scope, and the code being evaluated doesn't have access to local variables within the scope where it's being called.

  ```js
  function test() {
    const x = 2;
    const y = 4;
    // Direct call, uses local scope
    console.log(eval("x + y")); // Result is 6
    // Indirect call, uses global scope
    console.log(eval?.("x + y")); // Throws because x is not defined in global scope
  }
  ```

- Indirect `eval` does not inherit the strictness of the surrounding context, and is only in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) if the source string itself has a `"use strict"` directive.

  ```js
  function nonStrictContext() {
    eval?.(`with (Math) console.log(PI);`);
  }
  function strictContext() {
    "use strict";
    eval?.(`with (Math) console.log(PI);`);
  }
  function strictContextStrictEval() {
    "use strict";
    eval?.(`"use strict"; with (Math) console.log(PI);`);
  }
  nonStrictContext(); // Logs 3.141592653589793
  strictContext(); // Logs 3.141592653589793
  strictContextStrictEval(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  ```

  On the other hand, direct eval inherits the strictness of the invoking context.

  ```js
  function nonStrictContext() {
    eval(`with (Math) console.log(PI);`);
  }
  function strictContext() {
    "use strict";
    eval(`with (Math) console.log(PI);`);
  }
  function strictContextStrictEval() {
    "use strict";
    eval(`"use strict"; with (Math) console.log(PI);`);
  }
  nonStrictContext(); // Logs 3.141592653589793
  strictContext(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  strictContextStrictEval(); // Uncaught SyntaxError: Strict mode code may not include a with statement
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

### Never use direct eval()!

Using direct `eval()` suffers from multiple problems:

- `eval()` executes the code it's passed with the privileges of the caller.
  If you run `eval()` with a string that could be affected by a malicious party, you may end up running malicious code on the user's machine with the permissions of your webpage / extension.
  More importantly, allowing third-party code to access the scope in which `eval()` was invoked (if it's a direct eval) can lead to possible attacks that reads or changes local variables.
  See [Security considerations](#security_considerations) for approaches that mitigate these risks.
- `eval()` is slower than the alternatives, since it has to invoke the JavaScript interpreter, while many other constructs are optimized by modern JS engines.
- Modern JavaScript interpreters convert JavaScript to machine code. This means that any concept of variable naming gets obliterated. Thus, any use of `eval()` will force the browser to do long expensive variable name lookups to figure out where the variable exists in the machine code and set its value. Additionally, new things can be introduced to that variable through `eval()`, such as changing the type of that variable, forcing the browser to re-evaluate all of the generated machine code to compensate.
- Minifiers give up on any minification if the scope is transitively depended on by `eval()`, because otherwise `eval()` cannot read the correct variable at runtime.

There are many cases where the use of `eval()` or related methods can be optimized or avoided altogether.

#### Using indirect eval()

Consider this code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Simply using indirect eval and forcing strict mode can make the code much better:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

The two code snippets above may seem to work the same way, but they do not; the first one using direct eval suffers from multiple problems.

- It is a great deal slower, due to more scope inspections. Notice `c: new Map()` in the evaluated string. In the indirect eval version, the object is being evaluated in the global scope, so it is safe for the interpreter to assume that `Map` refers to the global `Map()` constructor instead of a local variable called `Map`. However, in the code using direct eval, the interpreter cannot assume this. For example, in the following code, `Map` in the evaluated string doesn't refer to `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Thus, in the `eval()` version of the code, the browser is forced to make the expensive lookup call to check to see if there are any local variables called `Map()`.

- If not using strict mode, `var` declarations within the `eval()` source becomes variables in the surrounding scope. This leads to hard-to-debug issues if the string is acquired from external input, especially if there's an existing variable with the same name.
- Direct eval can read and mutate bindings in the surrounding scope, which may lead to external input corrupting local data.
- When using direct `eval`, especially when the eval source cannot be proven to be in strict mode, the engine — and build tools — have to disable all optimizations related to inlining, because the `eval()` source can depend on any variable name in its surrounding scope.

However, using indirect `eval()` does not allow passing extra bindings other than existing global variables for the evaluated source to read. If you need to specify additional variables that the evaluated source should have access to, consider using the `Function()` constructor.

#### Using the Function() constructor

The [`Function()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) constructor is very similar to the indirect eval example above: it also evaluates the JavaScript source passed to it in the global scope without reading or mutating any local bindings, and therefore allows engines to do more optimizations than direct `eval()`.

The difference between `eval()` and `Function()` is that the source string passed to `Function()` is parsed as a function body, not as a script. There are a few nuances — for example, you can use `return` statements at the top level of a function body, but not in a script.

The `Function()` constructor is useful if you wish to create local bindings within your eval source, by passing the variables as parameter bindings.

```js
function add(a, b) {
  return a + b;
}
function runCodeWithAddFunction(obj) {
  return Function("add", `"use strict";return (${obj});`)(add);
}
console.log(runCodeWithAddFunction("add(5, 7)")); // 12
```

Both `eval()` and `Function()` implicitly evaluate arbitrary code, and are forbidden in strict [CSP](/en-US/docs/Web/HTTP/Guides/CSP) settings. There are also additional safer (and faster!) alternatives to `eval()` or `Function()` for common use-cases.

#### Using bracket accessors

You should not use `eval()` to access properties dynamically. Consider the following example where the property of the object to be accessed is not known until the code is executed. This can be done with `eval()`:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

However, `eval()` is not necessary here — in fact, it's more error-prone, because if `propName` is not a valid identifier, it leads to a syntax error. Moreover, if `getPropName` is not a function you control, this may lead to execution of arbitrary code. Instead, use the [property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors), which are much faster and safer:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

You can even use this method to access descendant properties. Using `eval()`, this would look like:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Avoiding `eval()` here could be done by splitting the property path and looping through the different properties:

```js
function getDescendantProp(obj, desc) {
  const arr = desc.split(".");
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"
const result = getDescendantProp(obj, propPath); // 0
```

Setting a property that way works similarly:

```js
function setDescendantProp(obj, desc, value) {
  const arr = desc.split(".");
  while (arr.length > 1) {
    obj = obj[arr.shift()];
  }
  return (obj[arr[0]] = value);
}

const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"
const result = setDescendantProp(obj, propPath, 1); // obj.a.b.c is now 1
```

However, beware that using bracket accessors with unconstrained input is not safe either — it may lead to [object injection attacks](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md).

#### Using callbacks

JavaScript has [first-class functions](/en-US/docs/Glossary/First-class_Function), which means you can pass functions as arguments to other APIs, store them in variables and objects' properties, and so on. Many DOM APIs are designed with this in mind, so you can (and should) write:

```js
// Instead of setTimeout("…", 1000) use:
setTimeout(() => {
  // …
}, 1000);

// Instead of elt.setAttribute("onclick", "…") use:
elt.addEventListener("click", () => {
  // …
});
```

[Closures](/en-US/docs/Web/JavaScript/Guide/Closures) are also helpful as a way to create parameterized functions without concatenating strings.

#### Using JSON

If the string you're calling `eval()` on contains data (for example, an array: `"[1, 2, 3]"`), as opposed to code, you should consider switching to {{Glossary("JSON")}}, which allows the string to use a subset of JavaScript syntax to represent data.

Note that since JSON syntax is limited compared to JavaScript syntax, many valid JavaScript literals will not parse as JSON. For example, trailing commas are not allowed in JSON, and property names (keys) in object literals must be enclosed in quotes. Be sure to use a JSON serializer to generate strings that will be later parsed as JSON.

Passing carefully constrained data instead of arbitrary code is a good idea in general. For example, an extension designed to scrape contents of web-pages could have the scraping rules defined in [XPath](/en-US/docs/Web/XML/XPath) instead of JavaScript code.

### Security considerations

The method can be used to execute arbitrary input with the privileges of the caller.
If the input is a potentially unsafe string provided by a user, this is a possible vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.

For example, the following code shows how `eval()` might execute `untrustedCode` provided by a user:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = eval(untrustedCode);
```

Websites with a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) that specifies [`script-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) or [`default-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) will prevent such code running by default.
If you must allow the scripts to run via `eval()` you can mitigate the risks by always assigning a {{domxref("TrustedScript")}} instance instead of a string, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function.

To allow `eval()` to run, you will additionally need to specify the [`trusted-types-eval` keyword](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in your CSP `script-src` directive.

The [`unsafe-eval`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) keyword also allows `eval()`, but is much less safe then `trusted-types-eval` because it would allow execution even on browsers that do not support trusted types.

For example, the required CSP for your site might look like this:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

The behavior of the transformation function implemented in your trusted types policy will depend on the specific use case that requires a user provided script.
If possible you should lock the allowed scripts to exactly the code that you trust to run.
If that is not possible, you might allow or block the use of certain functions within the provided input.

## Examples

Note that the first example shows how to use the method with trusted types.
The other examples omit this step for brevity.

### Using TrustedScript

To mitigate the risk of XSS, we should always assign `TrustedScript` instances to the `script` parameter.
We also need to do this if we're enforcing trusted types for other reasons and we want to allow some script sources that have been permitted (by `CSP: script-src`).

Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next we create a {{domxref("TrustedTypePolicy")}} that defines a {{domxref("TrustedTypePolicy/createScript", "createScript()")}} method for transforming input strings into {{domxref("TrustedScript")}} instances.

For the purpose of this example we'll assume that we have a function `transformedScript()` that defines our tranformation/filtering logic.

```js
const policy = trustedTypes.createPolicy("script-policy", {
  createScript(input) {
    const transformed = transformedScript(input); // Our filter method
    return transformed;
  },
});
```

Then we use the `policy` object to create a `TrustedScript` object from a potentially unsafe input string:

```js
// The potentially malicious string
const untrustedScript = "alert('Potentially evil code!');";

// Create a TrustedScriptURL instance using the policy
const trustedScript = policy.createScript(untrustedScript);
```

The `TrustedScript` object can now be passed to `eval()`:

```js
eval(trustedScriptURL);
```

### Using eval()

In the following code, both of the statements containing `eval()` return 42.
The first evaluates the string `"x + y + 1"`; the second evaluates the string
`"42"`.

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### eval() returns the completion value of statements

`eval()` returns the completion value of statements. For `if`, it would be the last expression or statement evaluated.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

The following example uses `eval()` to evaluate the string `str`. This string consists of JavaScript statements that assign `z` a value of 42 if `x` is five, and assign 0 to `z` otherwise. When the second statement is executed, `eval()` will cause these statements to be performed, and it will also evaluate the set of statements and return the value that is assigned to `z`, because the completion value of an assignment is the assigned value.

```js
const x = 5;
const str = `if (x === 5) {
  console.log("z is 42");
  z = 42;
} else {
  z = 0;
}`;

console.log("z is ", eval(str)); // z is 42  z is 42
```

If you assign multiple values then the last value is returned.

```js
let x = 5;
const str = `if (x === 5) {
  console.log("z is 42");
  z = 42;
  x = 420;
} else {
  z = 0;
}`;

console.log("x is", eval(str)); // z is 42  x is 420
```

### eval() as a string defining function requires "(" and ")" as prefix and suffix

```js
// This is a function declaration
const fctStr1 = "function a() {}";
// This is a function expression
const fctStr2 = "(function b() {})";
const fct1 = eval(fctStr1); // return undefined, but `a` is available as a global function now
const fct2 = eval(fctStr2); // return the function `b`
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Using eval in content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
