---
title: "ValidityState: rangeUnderflow property"
short-title: rangeUnderflow
slug: Web/API/ValidityState/rangeUnderflow
page-type: web-api-instance-property
browser-compat: api.ValidityState.rangeUnderflow
---

{{APIRef("HTML DOM")}}

The read-only **`rangeUnderflow`** property of a **[`ValidityState`](/en-US/docs/Web/API/ValidityState)** object indicates if the value of an {{HTMLElement("input")}}, after having been edited by the user, does not conform to the constraints set by the element's [`min`](/en-US/docs/Web/HTML/Attributes/min) attribute.

If the field is numeric in nature, including the {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} and {{HTMLElement("input/range", "range")}} types and a `min` value is set, if the value doesn't conform to the constraints set by the [`min`](/en-US/docs/Web/HTML/Attributes/step) value, the `rangeUnderflow` property will be true.

Given the following:

```html
<input type="number" min="20" max="40" step="2" />
```

if `value < 20`, `rangeUnderflow` will be true. When `true`, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ValidityState.rangeOverflow")}}
- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn/Forms/Form_validation)
- [`step` attribute](/en-US/docs/Web/HTML/Attributes/step)
- [`max` attribute](/en-US/docs/Web/HTML/Attributes/max)
