---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Math.E
---

{{JSRef}}

The **`Math.E`** static data property represents Euler's number, the base of natural logarithms, e, which is approximately 2.718.

{{InteractiveExample("JavaScript Demo: Math.E")}}

```js interactive-example
function compoundOneYear(interestRate, currentVal) {
  return currentVal * Math.E ** interestRate;
}

console.log(Math.E);
// Expected output: 2.718281828459045

console.log((1 + 1 / 1000000) ** 1000000);
// Expected output: 2.718280469 (approximately)

console.log(compoundOneYear(0.05, 100));
// Expected output: 105.12710963760242
```

## Value

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙴</mi><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{Math.E} = e \approx 2.718</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Description

Because `E` is a static property of `Math`, you always use it as `Math.E`, rather than as a property of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.E

The following function returns e:

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
