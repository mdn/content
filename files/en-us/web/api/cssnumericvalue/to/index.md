---
title: "CSSNumericValue: to() method"
short-title: to()
slug: Web/API/CSSNumericValue/to
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.to
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`to()`** method of the {{domxref("CSSNumericValue")}} interface converts the `CSSNumericValue` to a {{domxref("CSSUnitValue")}} in the specified unit.

## Syntax

```js-nolint
to(unit)
```

### Parameters

- `unit`
  - : A string naming the unit to convert to, such as `"px"`, `"deg"`, or `"s"`.
    Use `"number"` for a plain number, and `"percent"` for a percentage.

### Return value

A new {{domxref('CSSUnitValue')}} whose unit is `unit`.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if `unit` isn't a valid CSS unit.
- {{jsxref("TypeError")}}
  - : Thrown if:
    - The `CSSNumericValue` is a calculation whose terms can't be combined into a single value.
      For example, `calc(1px + 1em)` can't be combined, because the size of an `em` depends on the font size.
      A length multiplied by a length, such as `calc(1px * 2px)`, can't be combined either, because it can't be written in a single unit.
    - The value can't be converted to `unit`.
      For example, you can't convert `px` to `s`, or `px` to `em`.

## Description

The method can only convert between units that have a fixed relationship to each other.
These are:

- Absolute lengths: `px`, `cm`, `mm`, `Q`, `in`, `pt`, and `pc`
- Angles: `deg`, `rad`, `grad`, and `turn`
- Times: `s` and `ms`
- Frequencies: `Hz` and `kHz`
- Resolutions: `dpi`, `dpcm`, and `dppx`

Relative units such as `em`, `vw`, and `%` can't be converted to any other unit, because their size depends on the page, such as the font size or the size of the element's container.

If the `CSSNumericValue` is a calculation, the method first combines its terms.
This works if every term can be converted to a single unit: for example, `calc(100px + 1in)` can be converted to `196px`, and `max(1px, 1in)` to `96px`.
It fails if the terms can't be combined, such as `1px` and `1em`, or if combining them gives units multiplied together, such as a length multiplied by a length.

## Examples

### Converting a value to another unit

```js
console.log(CSS.in(1).to("px").toString()); // "96px"
console.log(CSS.turn(1).to("deg").toString()); // "360deg"
console.log(CSS.ms(500).to("s").toString()); // "0.5s"
```

### Converting a calculation

When all the terms of a calculation can be converted to the same unit, `to()` combines them into a single value:

```js
const sum = CSS.px(100).add(CSS.in(1));
console.log(sum.toString()); // "calc(100px + 1in)"
console.log(sum.to("px").toString()); // "196px"
```

### Values that can't be converted

Converting a sum that includes a relative length, or converting a length to a time, throws a `TypeError`:

```js
try {
  CSS.px(1).add(CSS.em(1)).to("px");
} catch (e) {
  console.log(e instanceof TypeError); // true
}

try {
  CSS.px(10).to("s");
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericValue.toSum()")}}
- {{domxref("CSSUnitValue")}}
- [CSS values and units](/en-US/docs/Web/CSS/Guides/Values_and_units)
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
