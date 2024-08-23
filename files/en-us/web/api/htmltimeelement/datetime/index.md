---
title: "HTMLTimeElement: dateTime property"
short-title: dateTime
slug: Web/API/HTMLTimeElement/dateTime
page-type: web-api-instance-property
browser-compat: api.HTMLTimeElement.dateTime
---

{{ APIRef("HTML DOM") }}

The
**`HTMLTimeElement.dateTime`**
property is a string that reflects the [`datetime`](/en-US/docs/Web/HTML/Element/time#datetime) HTML attribute, containing a machine-readable form of the element's date and
time value.

## Value

A string. For valid string formats, see the [`datetime` valid values](/en-US/docs/Web/HTML/Element/time#valid_datetime_values).

## Examples

```js
// Assumes there is <time id="t"> element in the HTML

const t = document.getElementById("t");
t.dateTime = "6w 5h 34m 5s";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLTimeElement")}} interface it belongs to.
