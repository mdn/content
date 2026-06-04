---
title: "func: Wasm type definition"
short-title: func
slug: WebAssembly/Reference/Definitions/types/func
page-type: webassembly-instruction
spec-urls: https://webassembly.github.io/spec/core/syntax/types.html#syntax-functype
sidebar: webassemblysidebar
---

The **`func`** type definition declares a function signature: a list of parameter types and a list of result types.

## Syntax

```wat
;; Declare a named function type
(type $bin_op (func (param i32) (param i32) (result i32)))

;; A function inheriting that signature
(func $add (type $bin_op) (param $a i32) (param $b i32) (result i32)
  local.get $a
  local.get $b
  i32.add)

;; A call_indirect site using the same type
(call_indirect (type $bin_op))
```

## Description

A function type maps a sequence of parameter [value types](/en-US/docs/WebAssembly/Reference/Value_types) to a sequence of result value types. Either list may be empty.

Function types appear in three places:

- **Function declarations**: Every [`func`](/en-US/docs/WebAssembly/Guides/Understanding_the_text_format) has a type. You can either inline `param` and `result` clauses, or reference a named type with `(type $name)`. When both are present, they must agree. Inlining a function type on a declaration is equivalent to writing a separate function type and referencing it.
- **Indirect calls**: [`call_indirect`](/en-US/docs/WebAssembly/Reference/Control_flow) takes a function type and dispatches through a [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table) of [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref) values. The engine checks at runtime that the indexed function's type matches the declared type and traps otherwise.
- **Imports**: Function imports declare a type that must be provided for a function.

Function types use [structural equality](https://en.wikipedia.org/wiki/Structural_type_system): two function types are identical if and only if their parameter and result type sequences match element-for-element. The identity of the type index or the module it came from does not matter. A `call_indirect` will therefore succeed against a callee whose type was declared independently in another module, as long as the parameter and result sequences are the same.

## Examples

### Sharing a function type across two functions and a dispatcher

The following module declares a single `$bin_op` type and uses it for two functions and a `call_indirect` site:

```wat
(module
  (type $bin_op (func (param i32) (param i32) (result i32)))

  (func $add (type $bin_op) (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add)

  (func $mul (type $bin_op) (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.mul)

  (table 2 funcref)
  (elem (i32.const 0) $add $mul)

  (func (export "dispatch") (param $op i32) (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    local.get $op
    call_indirect (type $bin_op)))
```

Calling `dispatch(0, 3, 4)` invokes `$add` and returns `7`; calling `dispatch(1, 3, 4)` invokes `$mul` and returns `12`. Passing an index that points to a function with a different signature traps.

## Specifications

{{Specifications}}

## See also

- [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref) value type
- [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table) definition
