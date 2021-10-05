---
title: 'ARIA: meter role'
slug: Web/Accessibility/ARIA/Roles/meter_role
tags:
  - ARIA
  - Accessibility
  - Meter
  - Web Development
---
The [`meter`](https://www.w3.org/TR/wai-aria-practices-1.2/#meter) role is used to identify an element being used as a meter.

## Description

A meter is a graphical display of a numeric value within a defined range. For example, showing battery percentage. A meter is not appropriate for values that do not have a meaningful maximum limit. Meters should not be used to indicate progress (for example loading), this should be communicated with the `progress` element.

Each element with `role="meter"` must also have one of the following:

- An [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) attribute.
- An [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) attribute pointing to an element with text that describes the meter.

### Associated ARIA roles, states, and properties

- `aria-valuenow`
  - : Set to a decimal value between `aria-valuemin` and `aria-valuemax` indicating the current value of the meter.
- `aria-valuetext`
  - : Assistive technologies often present the value of `aria-valuenow` as a percentage. If this would not be accurate use this property to make the meter value understandable.
- `aria-valuemin`
  - : Set to to a decimal value representing the minimum value, and less than `aria-valuemax`.
- `aria-valuemax`
  - : Set to to a decimal value representing the maximum value, and greater than `aria-valuemin`.

## Examples

#### An example of a meter

```html
<div role="meter"
  aria-valuenow="90"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-labelledby="cpu_usage_label">
  <svg width="100"
    height="100"
    class="fill"
    aria-hidden="true"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="0"
       y="0"
       width="100%"
       height="100%"
       fill="currentColor"></rect>
  </svg>
</div>
```

#### Working Examples:

- [The above meter example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/meter/meter.html).

## Specifications

| Specification                                            | Status                       |
| -------------------------------------------------------- | ---------------------------- |
| {{SpecName("ARIA 1.2","#meter","meter")}} | {{Spec2('ARIA 1.2')}} |

<section id="Quick_links"><ol><li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA roles</strong></a>{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}</li></ol></section>
