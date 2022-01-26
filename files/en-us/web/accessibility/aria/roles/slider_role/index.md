---
title: 'ARIA: slider role'
slug: Web/Accessibility/ARIA/Roles/slider_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - widget role
  - widget
  - slider role
---

The `slider` role defines an input where the user selects a value from within a given range.

## Description

The `slider` role is for when an input widget where the user selects a value from within a given range. 

ARIA provides developers with six different range widget roles. 

The [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role), similar to HTML's {{HTMLElement('progress')}} element, is a read-only range indicating the portion of completion of a task, progressing in a single direction, such as a loading progress bar that eventually reaches 100% when fully loaded.   

The [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role) role, similar to HTML's {{HTMLElement('meter')}} element, is a read-only guage indicating the amount of something within a known range, such as a computer's battery indicator or a car's gas guage. 

The `slider` role is most similar to HTML's `input` of type `range`, [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range). The slider allows users to select a value between between a minimum and maximum value. The user selects a value by moving a slider thumb to along a horizontal or vertical slider to select a value. 

Unlike the read-only `meter` and `progressbar` roles, a `slider` is an input, accepting user interaction. This means focus and keyboard interaction must be implemented.  

The slider represents the range of possible values. The position of the slider thumb along the slider represents the current value. It is typically possible to add to or subtract from the current value by using directional keys such as arrow keys.

Authors MAY set the aria-valuemin and aria-valuemax attributes. Otherwise, their implicit values follow the same rules as <input[type="range"]> in [HTML]:

- If [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) is missing or not a number, it defaults to `0` (zero).
- If [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) is missing or not a number, it defaults to 100.
- The [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) is required. Make sure the `aria-valuenow` value is between the minimum and maximum values, inclusive.
- Sliders have an implicit [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) value of `horizontal`.


----

Authors MAY set aria-valuemin and aria-valuemax to indicate the minimum and maximum progress indicator values. Otherwise, their implicit values follow the same rules as HTML's [`<input type="range"`>]():



If the `slider` role is applied to an HTML {{HTMLElement('progress')}} element, the accessible name can come from the associated {{HTMLElement('label')}}. Otherwise use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible label is present or  [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) if a visible label is not present.

### Associated WAI-ARIA roles, states, and properties

- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
  - : Only present and required if the value is not indeterminate. Set to a decimal value between 0, or `aria-valuemin` if present, and `aria-valuemax` indicating the current value of the slider.
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive technologies often present the value of `aria-valuenow` as a percentage. If this would not be accurate use this property to make the slider value understandable.
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Set to a decimal value representing the minimum value, and less than `aria-valuemax`. If not present, the default value is 0.
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Set to a decimal value representing the maximum value, and greater than `aria-valuemin`. If not present, the default value is 100.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Defines the string value or identifies the element (or elements) that label the slider element providing an accessible name. An accessible name is required.

It is recommended to use a native {{HTMLElement("progress")}} or [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) elements rather than the `slider` role. User agents provide a stylize widget for the {{HTMLElement("progress")}} element based on the current `value` as it relates to the `0`, the minimum value, and the `max` value. When using non-semantic elements, all features of the native semantic element need to be recreated with ARIA attributes, JavaScript and CSS.

## Examples

In the example below, :



Using semantic HTML, this could be written as:

```html
```

## Keyboard interactions

| Key(s)	| Action |
| ======  | ====== |
| Right and Up arrows	| Increase the selected value |
| Left and Down arrows	| Decrease the selected value |
| Page Up and Page Down	| Optionally increase and decrease the value by a set amount (e.g. by 10 on a range from 0 to 100) |


## Best Practices

If the slider is describing the loading progress of a particular region of a page, include the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute to reference the slider status, and set the [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) attribute to `true` on the region until it is finished loading. 

### Prefer HTML

It is recommended to use a native {{HTMLElement("progress")}} or [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) elements rather than the `slider` role. 

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#slider","ARIA: slider role")}}                                             | {{Spec2('ARIA')}}                         |

## See Also

- HTML {{HTMLElement('progress')}} element
- Other range widgets include:
  - [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) (if focusable)
  - [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>