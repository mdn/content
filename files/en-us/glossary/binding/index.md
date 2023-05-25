---
title: Binding
slug: Glossary/Binding
page-type: glossary-definition
---

In programming, a **binding** is an association of an {{glossary("identifier")}} with a value. Not all bindings are {{glossary("variable", "variables")}} — for example, function {{glossary("parameter", "parameters")}} and the binding created by the {{jsxref("Statements/try...catch", "catch (e)")}} block are not "variables" in the strict sense. In addition, some bindings are implicitly created by the language — for example, {{jsxref("Operators/this", "this")}} and [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target) in JavaScript.

A binding is {{glossary("mutable")}} if it can be re-assigned, and {{glossary("immutable")}} otherwise; this does _not_ mean that the value it holds is immutable.

A binding is often associated with a {{glossary("scope")}}. Some languages allow re-creating bindings (also called redeclaring) within the same scope, while others don't; in JavaScript, whether bindings can be redeclared depends on the construct used to create the binding.

## See also

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/class", "class")}}
