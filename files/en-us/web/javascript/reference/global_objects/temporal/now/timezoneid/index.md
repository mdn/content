---
title: Temporal.Now.timeZoneId()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/timeZoneId
page-type: javascript-static-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Now.timeZoneId
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.Now.timeZoneId()`** static method returns a [time zone identifier](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) representing the system's current time zone. Most systems will return a primary time zone identifier such as `"America/New_York"`, though offset time zone identifier such as `"-04:00"` is possible too. The time zone identifier returned is the default time zone used by the other `Temporal.Now` methods.

## Syntax

```js-nolint
Temporal.Now.timeZoneId()
```

### Parameters

None.

### Return value

A valid [time zone identifier](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) representing the system's current time zone. The returned time zone identifier is never a non-primary time zone identifier (alias). For example, it would always return `"Asia/Kolkata"` (new name) instead of `"Asia/Calcutta"` (old name). For more information, see [time zones and offsets](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

If the implementation does not support time zones, the method always returns `"UTC"`.

## Examples

### Getting the system's current time zone

```js
console.log(Temporal.Now.timeZoneId()); // e.g.: "America/New_York"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Now")}}
