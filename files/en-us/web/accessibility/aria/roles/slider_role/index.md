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

The `slider` role is for range input widgets where the user selects a value from within given minimum and maximum values. 

ARIA provides developers with six different range widget roles, inlcuding progressbars, meters, and sliders. 

The [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role), similar to HTML's {{HTMLElement('progress')}} element, is a read-only range indicating the portion of completion of a task, progressing in a single direction, such as a loading progress bar that eventually reaches 100% when fully loaded.   

The [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role) role, similar to HTML's {{HTMLElement('meter')}} element, is a read-only guage indicating the amount of something within a known range, such as a computer's battery indicator or a car's gas guage. 

The `slider` role is most similar to HTML's `input` of type `range`, [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range).  Sliders allow users to select a value between between set minimum and maximum values. The user selects a value by moving a slider thumb along a horizontal or vertical slider to select a value. 

The [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) sets the minimum value. If omitted or not a number, it defaults to `0` (zero).

The [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) defines the maximum value. If it is missing or not a number, it defaults to 100.

The [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) is a required attribute. The `aria-valuenow` value must be between the minimum and maximum values, inclusive. Unless using the  [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range), the value must be updated programmatically when the user updates the value.

Unlike the read-only `meter` and `progressbar` roles, a `slider` is an input, accepting user interaction. This means focus and keyboard interaction must be implemented.  

The slider represents the range of possible values. The position of the slider thumb along the slider represents the current value. Supported interactions should include changing the value by dragging the thumb or clicking along the slider when using a mouse users and using directional keys such as arrow keys for the keyboard user.

Sliders have an implicit [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) value of `horizontal`.

If the `slider` role is applied to an HTML {{HTMLElement('input')}} element, the accessible name can come from the associated {{HTMLElement('label')}}. Otherwise use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible label is present or  [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) if a visible label is not present.

### Associated WAI-ARIA roles, states, and properties

- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (required)
  - : Set to a decimal value between `aria-valuemin` and `aria-valuemax` indicating the current value of the slider.
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive technologies often present the value of `aria-valuenow` as a number. If this would not be accurate, use `aria-valuetext` to provide the slider with a more understandable understandable.
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Set to a decimal value representing the minimum value, and less than `aria-valuemax`. If not present, the default value is 0.
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Set to a decimal value representing the maximum value, and greater than `aria-valuemin`. If not present, the default value is 100.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Defines the string value or identifies the element (or elements) that label the slider element providing an accessible name. An accessible name is required.

It is recommended to use a native [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) elements rather than the `slider` role. User agents provide a stylize widget for the range input element based on the current `value` as it relates to the minimum and maximum values. When using non-semantic elements, all features of the native semantic element need to be recreated with ARIA attributes, JavaScript and CSS.

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
| Page Up and Page Down	| Optionally increase and decrease the value by a set amount |


## Best Practices

If the slider is describing the loading progress of a particular region of a page, include the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute to reference the slider status, and set the [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) attribute to `true` on the region until it is finished loading. 

### Prefer HTML

It is recommended to use a native {{HTMLElement("input")}} of type `range`, [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range), rather than the `slider` role. 

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