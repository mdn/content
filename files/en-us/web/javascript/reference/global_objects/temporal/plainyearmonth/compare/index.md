---
title: Temporal.PlainYearMonth.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/compare
page-type: javascript-static-method
browser-compat: javascript.builtins.Temporal.PlainYearMonth.compare
---

{{JSRef}}

The **`Temporal.PlainYearMonth.compare()`** static method returns a number (-1, 0, 1) indicating whether the first year-month comes before, is the same as, or comes after the second year-month. Equivalent to comparing the year, month, and day fields of the underlying ISO 8601 dates.

> [!NOTE]
> The day field, although unexposed, is still used for comparison and may be set by the [constructor's](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/PlainYearMonth) `referenceDay` argument. Therefore it's recommended to not provide this argument to avoid two equivalent year-months being considered different.

## Syntax

```js-nolint
Temporal.PlainYearMonth.compare(yearMonth1, yearMonth2)
```

### Parameters

- `yearMonth1`
  - : TODO
- `yearMonth2`
  - : TODO

### Return value

TODO

### Exceptions

TODO

## Description

TODO

## Examples

TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
