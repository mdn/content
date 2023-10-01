---
title: "ValidityState: stepMismatch property"
short-title: stepMismatch
slug: Web/API/ValidityState/stepMismatch
page-type: web-api-instance-property
browser-compat: api.ValidityState.stepMismatch
---

{{APIRef("HTML DOM")}}

The read-only **`stepMismatch`** property of a **[`ValidityState`](/en-US/docs/Web/API/ValidityState)** object indicates if the value of an {{HTMLElement("input")}}, after having been edited by the user, does not conform to the constraints set by the element's `step` attribute.

If the field is numeric in nature, including the {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} and {{HTMLElement("input/range", "range")}} types and the step value is not `any`, if the value don't doesn't conform to the constraints set by the [`step`](/en-US/docs/Web/HTML/Attributes/step) and [`min`](/en-US/docs/Web/HTML/Attributes/min) values, then `stepMismatch` will be true. If the remainder of the form control's value less the [`min`](/en-US/docs/Web/HTML/Attributes/min) value, divided by the [`step`](/en-US/docs/Web/HTML/Attributes/step) value (which defaults to 1 if omitted) is not zero, there is a mismatch.

Given the following:

```html
<input type="number" min="20" max="40" step="2" />
```

if `(value - min) % 2 !== 0`, `stepMismatch` will be true.

If true, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn/Forms/Form_validation)
- [`step` attribute](/en-US/docs/Web/HTML/Attributes/step)
