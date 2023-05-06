---
title: CSS numeric factory functions
slug: Web/API/CSS/factory_functions_static
page-type: web-api-static-method
browser-compat: api.CSS
---

{{APIRef("CSSOM")}}

The **CSS numeric factory
functions**, such as `CSS.em()` and
`CSS.turn()` are methods that return [CSSUnitValues](/en-US/docs/Web/API/CSSUnitValue) with the value being
the numeric argument and the unit being the name of the method used. These
functions create new numeric values less verbosely than using the
{{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}} constructor.

## Syntax

```js-nolint
CSS.number(number)
CSS.percent(number)

// <length>
CSS.em(number)
CSS.ex(number)
CSS.ch(number)
CSS.ic(number)
CSS.rem(number)
CSS.lh(number)
CSS.rlh(number)
CSS.vw(number)
CSS.vh(number)
CSS.vi(number)
CSS.vb(number)
CSS.vmin(number)
CSS.vmax(number)
CSS.cm(number)
CSS.mm(number)
CSS.Q(number)
CSS.in(number)
CSS.pt(number)
CSS.pc(number)
CSS.px(number)

// <angle>
CSS.deg(number)
CSS.grad(number)
CSS.rad(number)
CSS.turn(number)

// <time>
CSS.s(number)
CSS.ms(number)

// <frequency>
CSS.Hz(number)
CSS.kHz(number)

// <resolution>
CSS.dpi(number)
CSS.dpcm(number)
CSS.dppx(number)

// <flex>
CSS.fr(number)
```

## Examples

We use the `CSS.vmax()` numeric factory function to create a
{{domxref('CSSUnitValue')}}:

```js
const height = CSS.vmax(50);

console.log(height); // CSSUnitValue {value: 50, unit: "vmax"}
console.log(height.value); // 50
console.log(height.unit); // vmax
```

In this example, we set the margin on our element using the `CSS.px()`
factory function:

```js
myElement.attributeStyleMap.set("margin", CSS.px(40));
const currentMargin = myElement.attributeStyleMap.get("margin");
console.log(currentMargin.value, currentMargin.unit); // 40, 'px'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}}
