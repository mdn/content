---
title: "q15mulr_sat_s: Wasm SIMD arithmetic instruction"
short-title: q15mulr_sat_s
slug: WebAssembly/Reference/SIMD/arithmetic/q15mulr_sat_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.q15mulr_sat_s
sidebar: webassemblysidebar
---

The **`q15mulr_sat_s`** [SIMD arithmetic instruction](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic) performs a lane-wise [saturating](https://en.wikipedia.org/wiki/Saturation_arithmetic) rounding multiplication in Q15 format on two signed [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i16x8` value interpretations — clamping the output to the range allowed by the value type (a single `i16x8` value interpretation).

{{InteractiveExample("Wat Demo: q15mulr_sat_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 16384 32767 8192 -32768 16384 16384 0 -16384
    v128.const i16x8 16384 16384 16384  32767 -16384 16384 99  16384

    i16x8.q15mulr_sat_s
    i16x8.extract_lane_s 7
    call $log
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

The `q15mulr_sat_s` instruction performs a fixed-point multiplication on 8 pairs of Q15-encoded 16-bit signed integers, simultaneously, with rounding and saturation. Such operations are common in audio processing and machine learning, for example FIR/IIR audio filters and neural network inference.

Q15 is a fixed-point number format where a signed 16-bit integer represents a real number in the range −1.0 to 1.0. The value `32767` (`0x7FFF`) is equivalent to `1.0`, and `−32768` (`0x8000`) is equivalent to `−1.0`. Multiplying two Q15 numbers produces a Q30 result stored as a 32-bit integer. To get back to Q15 (16-bit), you shift right by 15.

Specifically, for each of the corresponding lanes of the two `16x8` input values, the `q15mulr_sat_s` instruction:

1. Multiplies the two values together.
2. Rounds the product by adding `0x4000` (`2¹⁴`, or `16384`) to it, which rounds to the nearest integer rather than truncating.
3. Shifts the result right by 15, converting Q30 back to Q15.
4. If needed, saturates the result to clamp it to the range −32768 to 32767 and avoid wrapping. This keeps the result inside the allowable range for the Q15 format.

let's look at how we arrive at the result of our example `-8192`, which is the value stored in lane 7 of the output value.

1. Lane 7 of the two input values contain `-16384` and `16384`.
2. Multiplying these values together gives the product `-268435456`.
3. Adding the rounding value (`16384`) gives the result `-268419072`.
4. Shifting the result right by 15 gives the final result `-8192`.

## Syntax

```plain
i16x8.q15mulr_sat_s
```

- `i16x8.q15mulr_sat_s`
  - : The `i16x8.q15mulr_sat_s` instruction.

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input value.
- `input2`
  - : The second input value.
- `output`
  - : The output value.

### Binary encoding

| Instruction           | Binary format  | Example text => binary                    |
| --------------------- | -------------- | ----------------------------------------- |
| `i16x8.q15mulr_sat_s` | `0xfd 130:u32` | `i16x8.q15mulr_sat_s` => `0xfd 0x82 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD arithmetic instructions](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic)
