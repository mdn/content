---
title: Hoisting
slug: Glossary/Hoisting
page-type: glossary-definition
---

{{GlossarySidebar}}

JavaScript **Hoisting** refers to the process whereby the interpreter appears to move the _declaration_ of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

_Hoisting_ is not a term normatively defined in the ECMAScript specification. The spec does define a group of declarations as [_HoistableDeclaration_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-HoistableDeclaration), but this only includes [`function`](/en-US/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/en-US/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function), and [`async function*`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*) declarations. Hoisting is often considered a feature of [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting:

1. Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
2. Being able to reference a variable in its scope before the line it is declared, without throwing a {{jsxref("ReferenceError")}}, but the value is always [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined). ("Declaration hoisting")
3. The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
4. The side effects of a declaration are produced before evaluating the rest of the code that contains it.

The four function declarations above are hoisted with type 1 behavior; `var` declaration is hoisted with type 2 behavior; [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let), [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const), and [`class`](/en-US/docs/Web/JavaScript/Reference/Statements/class) declarations (also collectively called _lexical declarations_) are hoisted with type 3 behavior; [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) declarations are hoisted with type 1 and type 4 behavior.

Some prefer to see `let`, `const`, and `class` as non-hoisting, because the [temporal dead zone](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) strictly forbids any use of the variable before its declaration. This dissent is fine, since hoisting is not a universally-agreed term. However, the temporal dead zone can cause other observable changes in its scope, which suggests there's some form of hoisting:

```js
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

If the `const x = 2` declaration is not hoisted at all (as in, it only comes into effect when it's executed), then the `console.log(x)` statement should be able to read the `x` value from the upper scope. However, because the `const` declaration still "taints" the entire scope it's defined in, the `console.log(x)` statement reads the `x` from the `const x = 2` declaration instead, which is not yet initialized, and throws a {{jsxref("ReferenceError")}}. Still, it may be more useful to characterize lexical declarations as non-hoisting, because from a utilitarian perspective, the hoisting of these declarations doesn't bring any meaningful features.

Note that the following is not a form of hoisting:

```js
{
  var x = 1;
}
console.log(x); // 1
```

There's no "access before declaration" here; it's simply because `var` declarations are not scoped to blocks.

For more information on hoisting, see:

- `var`/`let`/`const` hoisting — [Grammar and types guide](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting)
- `function` hoisting — [Functions guide](/en-US/docs/Web/JavaScript/Guide/Functions#function_hoisting)
- `class` hoisting — [Classes guide](/en-US/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting)
- `import` hoisting — [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules#import_declarations_are_hoisted)

## See also

- [`var` statement](/en-US/docs/Web/JavaScript/Reference/Statements/var) — MDN
- [`let` statement](/en-US/docs/Web/JavaScript/Reference/Statements/let) — MDN
- [`const` statement](/en-US/docs/Web/JavaScript/Reference/Statements/const) — MDN
- [`function` statement](/en-US/docs/Web/JavaScript/Reference/Statements/function) — MDN
