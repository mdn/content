---
title: "CSSPerspective: CSSPerspective() constructor"
short-title: CSSPerspective()
slug: Web/API/CSSPerspective/CSSPerspective
page-type: web-api-constructor
browser-compat: api.CSSPerspective.CSSPerspective
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSPerspective()`** constructor creates a new {{domxref("CSSPerspective")}} object, which represents the value of a {{cssxref("transform-function/perspective", "perspective()")}} function applied to the CSS {{cssxref("transform")}} property.

## Syntax

```js-nolint
new CSSPerspective(length)
```

### Parameters

- `length`
  - : A {{domxref("CSSNumericValue")}} or keyword, representing the distance between the viewer and the z=0 plane.
    This must be a {{cssxref("length")}} value, or the keyword `none` as a string or a {{domxref("CSSKeywordValue")}}, which applies no perspective.

### Return value

A new {{domxref("CSSPerspective")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : The value passed for `length` isn't a {{cssxref("length")}} value or the keyword `none`.

## Examples

### Creating perspectives from lengths

This example creates `CSSPerspective` objects from a length in `em` units, a negative length, and a positive length smaller than `1px`, then logs their string forms.

```js
const perspective = new CSSPerspective(CSS.em(20));

console.log(perspective.toString()); // "perspective(20em)"

const negative = new CSSPerspective(CSS.px(-10));

console.log(negative.toString()); // "perspective(calc(-10px))"

const tiny = new CSSPerspective(CSS.px(0.5));

console.log(tiny.toString()); // "perspective(0.5px)"
```

The constructor accepts a negative length, but the string form wraps it in `calc()`, because a `perspective()` function with a plain negative length isn't valid CSS.
The `0.5px` length keeps its value, although it's treated as `1px` when the perspective is applied to an element.

### Creating perspectives with the `none` keyword

This example creates two `CSSPerspective` objects with the keyword `none`, one from a string and one from a {{domxref("CSSKeywordValue")}}, then logs their string forms.

```js
const fromString = new CSSPerspective("none");
const fromKeyword = new CSSPerspective(new CSSKeywordValue("none"));

console.log(fromString.toString()); // "perspective(none)"
console.log(fromKeyword.toString()); // "perspective(none)"
```

Both objects represent `perspective(none)`, which applies no perspective.

### Passing values the constructor rejects

This example passes a value that isn't a length, and a keyword other than `none`.

```js
try {
  new CSSPerspective(CSS.percent(50));
} catch (e) {
  console.log(e.name); // "TypeError"
}

try {
  new CSSPerspective("auto");
} catch (e) {
  console.log(e.name); // "TypeError"
}
```

The first call throws because a percentage isn't a length.
The second call throws because `none` is the only keyword the constructor accepts.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
