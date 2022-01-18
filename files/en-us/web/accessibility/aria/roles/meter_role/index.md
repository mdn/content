---
title: 'ARIA: meter role'
slug: Web/Accessibility/ARIA/Roles/meter_role
tags:
  - ARIA
  - Accessibility
  - Meter
  - Web Development
---
The `meter` role is used to identify an element being used as a meter.

> **Note:** Where possible, it is recommended that you use a native {{HTMLElement("meter")}} element rather than the `meter` role, as native elements are more widely supported by user agents and assistive technology. 

## Description

A meter is a graphical display of a numeric value within a defined range. For example, showing battery percentage. A meter is not appropriate for values that do not have a meaningful maximum limit. Meters should not be used to indicate progress (for example loading), this should be communicated with the {{HTMLElement('progress')}} element.

Each element with `role="meter"` must also have one of the following:

- An [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute.
- An [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute pointing to an element with text that describes the meter.

### Associated ARIA roles, states, and properties

- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) 
  - : Set to a decimal value between `aria-valuemin` and `aria-valuemax` indicating the current value of the meter.
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) 
  - : Assistive technologies often present the value of `aria-valuenow` as a percentage. If this would not be accurate use this property to make the meter value understandable.
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) 
  - : Set to a decimal value representing the minimum value, and less than `aria-valuemax`.
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) 
  - : Set to a decimal value representing the maximum value, and greater than `aria-valuemin`.

It is recommended to use a native {{HTMLElement("meter")}} element rather than the `meter` role. User agents provide a stylize widget for the {{HTMLElement("meter")}} element based on the current `value` as it relates to the `min` and `max` values. When using non-semantic elements, all features of the native semantic element need to be recreated with ARIA attributes, JavaScript and CSS.

## Examples

An example of a meter using `role="meter"`:

```html
<div role="meter"
  aria-valuenow="90"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-labelledby="cpu_usage_label">
  <svg xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true" style="width: 90%">
    <rect x="0"
       y="0"
       width="100%"
       height="100%"
       fill="currentColor"></rect>
  </svg>
</div>
```

In the above scenario, when the `aria-valuenow` value updates, the width of the SVG also needs to be updated as can be seen in [the W3C working meter example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/meter/meter.html).

## Specifications

| Specification                                            | Status                       |
| -------------------------------------------------------- | ---------------------------- |
| {{SpecName("ARIA 1.2","#meter","meter")}} | {{Spec2('ARIA 1.2')}} |

## See also 

- {{HTMLElement('meter')}}
- {{HTMLElement('progress')}}

<section id="Quick_links"><ol><li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA roles</strong></a>{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}</li></ol></section>
