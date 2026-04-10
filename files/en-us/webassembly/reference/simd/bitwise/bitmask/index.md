---
title: "bitmask: Wasm SIMD bitwise instruction"
short-title: bitmask
slug: WebAssembly/Reference/SIMD/bitwise/bitmask
page-type: webassembly-instruction
browser-compat: webassembly.simd.bitmask
sidebar: webassemblysidebar
---

The **`bitmask`** [SIMD bitwise instruction](/en-US/docs/WebAssembly/Reference/SIMD/bitwise) inspects the **most significant bit** (MSB) of each lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation. This is the sign bit if the lane is treated as signed. The instruction's output value is equal to all of those bits collected into a single `i32`, with lane 0's MSB in bit 0 of the result, lane 1's MSB in bit 1, and so on.

> [!NOTE]
> For `i8x16.bitmask`, an MSB of `1` means the lane value is greater than or equal to 128 (negative if signed), while an MSB of `0` means the value is less than 128. For wider lane types the threshold is correspondingly larger: 32768 for `i16x8`, 2147483648 for `i32x4`.

{{InteractiveExample("Wat Demo: bitmask", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 10 23 45 6 90 1 12 120 0 78 89 13 240 51 62 0
    i8x16.bitmask

    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, only lane `12` of the `i8x16` value has a value of greater than or equal to `128` (`240`, to be exact), so its MSB is `1`. All other byte's MSBs are set to `0`.

The output `i32` is therefore equal to:

`0000 0001 0000 0000 0000`

(only bit `12` is set to `1`).

The example's output value is `4096`, which is the decimal equivent of the above binary pattern.

## Syntax

```plain
value_type.bitmask
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `bitmask`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
- `bitmask`
  - : The `bitmask` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input1`
  - : The input `v128` value interpretation.
- `output`
  - : The output `i32` value.

### Binary encoding

| Instruction     | Binary format  | Example text => binary              |
| --------------- | -------------- | ----------------------------------- |
| `i8x16.bitmask` | `0xfd 100:u32` | `i8x16.bitmask` => `0xfd 0x64`      |
| `i16x8.bitmask` | `0xfd 132:u32` | `i16x8.bitmask` => `0xfd 0x84 0x01` |
| `i32x4.bitmask` | `0xfd 164:u32` | `i32x4.bitmask` => `0xfd 0xa4 0x01` |
| `i64x2.bitmask` | `0xfd 196:u32` | `i64x2.bitmask` => `0xfd 0xc4 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD bitwise instructions](/en-US/docs/WebAssembly/Reference/SIMD/bitwise)
