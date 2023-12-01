---
title: "CSS: supports() static method"
short-title: supports()
slug: Web/API/CSS/supports_static
page-type: web-api-static-method
browser-compat: api.CSS.supports_static
---

{{APIRef("CSSOM")}}

The **`CSS.supports()`** static method returns a boolean value
indicating if the browser supports a given CSS feature, or not.

## Syntax

```js-nolint
CSS.supports(propertyName, value)
CSS.supports(supportCondition)
```

### Parameters

There are two distinct sets of parameters. The first one allows to test the support of
a pair _property-value_:

- `propertyName`
  - : A string containing the name of the CSS property to check.
- `value`
  - : A string containing the value of the CSS property to check.

The second syntax takes one parameter matching the condition of
{{cssxref("@supports")}}:

- `supportCondition`
  - : A string containing the condition to check.

### Return value

`true` if the browser supports the rule, otherwise `false`.

## Examples

```js
result = CSS.supports("text-decoration-style", "blink");
result = CSS.supports("display: flex");
result = CSS.supports("(--foo: red)");

result = CSS.supports(
  "(transform-style: preserve) or (-moz-transform-style: preserve) or (-webkit-transform-style: preserve)",
);

// result is true or false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref("@supports")}} at-rule that allows for the same functionality but in a
  declarative way.
- The {{domxref("CSSSupportsRule")}} CSSOM class allowing to manipulate
  {{cssxref("@supports")}} at-rules.
