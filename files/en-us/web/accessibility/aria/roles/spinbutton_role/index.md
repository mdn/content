---
title: 'ARIA: spinbutton role'
slug: Web/Accessibility/ARIA/Roles/spinbutton_role
tags:
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - range role
  - spinbutton role
  - spinbutton
---

The `spinbutton` role defines an type of range that expects the user to select from among discrete choices.

## Description

The `spinbutton` role is for range input widgets where the user selects a value from within given minimum and maximum values.

### The `spinbutton` role compared other range options

ARIA provides developers with six different range [widget roles](/en-US/docs/Web/Accessibility/ARIA/Roles#2._widget_roles), including progressbars, meters, sliders and spinbuttons.

The [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role) role, similar to HTML's {{HTMLElement('progress')}} element, is a read-only range indicating the portion of completion of a task, progressing in a single direction, such as a file upload's loading progress bar that eventually reaches 100% when fully loaded.

The [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role) role, similar to HTML's {{HTMLElement('meter')}} element, is a read-only gauge indicating the amount of something within a known range, such as a computer's battery indicator or a car's gas gauge.

The `slider` role, similar to HTML's `input` of type `range`, [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range), is a read-write input range. Sliders allow users to select a value between set minimum and maximum values. The user selects a value by moving a `slider thumb along a horizontal or vertical slider to select a value.

While all three of these ranges have the same ARIA states and properties, the `spinbutton` role is the only read-write range: it is the only one whose value changes via user interaction. As such, it must be able to receive focus. In addition, keyboard interaction, mouse clicks, and touch interaction must be supported.

> **Warning** To change the spinbutton value, touch-based assistive technologies need to respond to user gestures for increasing and decreasing the value by synthesizing key events. Fully test spinbutton widgets using assistive technologies on devices where touch is a primary input mechanism before using the `spinbutton` role (and all range widgets).

#### Common attributes

The [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) attribute sets the minimum value. If omitted or not a number, it defaults to `0` (zero).

The [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) attribute defines the maximum value. If it is missing or not a number, it defaults to 100.

The [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) attribute value must be between the minimum and maximum values, inclusive. This attribute is required for `spinbutton` and `meter`, and optional for `progressbar`.

For `spinbutton`, unless using sempantic HTML elements like [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number) element, if the value is updated, the `aria-valuenow` value must also be updated programmatically.

The optional [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) attribute is included when the `aria-valuenow` numeric value doesn't reflect the intended value of the spinbutton.  As the optional minimum, maximum, and current values are all numeric, when the values those numbers represent are not numeric, the `aria-valuetext` attribute should be included with a string value defining the numeric value. For example, if using a spinbutton for t-shirt sizes, the `aria-valuetext` attribute should shift from xx-small thru to XX-large as the `aria-valuenow` increases.

The `aria-valuetext` value must be updated as the `value` or `aria-valuenow` is updated. While there is no equivalent HTML attribute for `<input type="range">`, you can include `aria-valuetext` on any {{htmlelement('input')}} type. ARIA attributes are supported on semantic HTML elements.

When `aria-valuetext` is an important feature for a spinbutton, consider using {{HTMLElement('select')}} with {{HTMLElement('option')}} elements instead. While not visually a range, every option's value is more accessible to all users, not just users of assistive technology.

An accessible name is **required**. If the range's role is applied to an HTML {{HTMLElement('input')}} element (or `<meter>` or `<progress>` element), the accessible name can come from the associated {{HTMLElement('label')}}. Otherwise use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible label is present or  [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) if a visible label is not present.

When not using the HTML {{HTMLElement('input')}} element to create your spinbutton, include the {{htmlattrxref('tabindex')}} attribute to make the spinbutton focusable. Of the three range types, only `spinbutton` is user-interactive, and so is the only one that requires being able to receive focus. Focus should be placed on the spinbutton thumb.

spinbuttons have an implicit [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) value of `horizontal`. This attribute is not supported with `meter` or `progressbar`.

### User interactions

Unlike the read-only `meter` and `progressbar` roles, a `spinbutton` is an input, accepting user interaction. In addition to including the {{htmlattrxref('tabindex')}} attribute to enable spinbutton focus, keyboard and pointer device support must be implemented.

The spinbutton represents the range of possible values. The position of the spinbutton thumb along the spinbutton represents the current value. User actions that must be supported include changing the value by dragging the thumb or clicking the spinbutton for pointing devices and using directional keys such as arrow keys for the keyboard users. See [keyboard interactions](#Keyboard_interactions) below.

> **Note:** It is recommended to use native [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) elements rather than the `spinbutton` role. User agents provide a stylized widget for the range input element, based on the current `value` as it relates to the minimum and maximum values. When using non-semantic elements, all features of the native semantic element need to be recreated with ARIA attributes, JavaScript and CSS.

### Descendants limited to buttons or text

There are some types of user interface components that, when represented in a platform accessibility API, can only contain specific content. The children of or owned elements of `spinbutton` are limited to a  textbox and/or two buttons. Alternatively, authors MAY apply the spinbutton role to a text input and create sibling buttons to support the increment and decrement functions. 

## Associated roles, states, and properties

- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (required)
  - : Set to a decimal value between `aria-valuemin` and `aria-valuemax`, indicating the current value of the spinbutton. If not present, there is no default value.
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive technologies often present the value of `aria-valuenow` as a number. If this would not be accurate, use `aria-valuetext` to provide the spinbutton with a more understandable value.
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Set to a decimal value representing the minimum value, and less than `aria-valuemax`. If not present, there is no default value.
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Set to a decimal value representing the maximum value, and greater than `aria-valuemin`. If not present, there is no default value.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Defines the string value or identifies the element (or elements) that label the spinbutton element providing an accessible name. An accessible name is required.

## Examples

In the example below, 

```html

```



## Keyboard interactions

| Key(s) | Action |
| ---- | ---- |
| Right and Up arrows | Increase the selected value by one step |
| Left and Down arrows | Decrease the selected value by one step|
| Page Up | (Optional) increase the value by a set amount greater than one step |
| Page Up and Page Down | (Optional) decrease the value by a set amount greater than one step |
| Home | Set the spinbutton to the minimum value. |
| End | Set the spinbutton to the maximum value. |

For the optional <kbd>Page Up</kbd> and <kbd>Page Down</kbd> keys, the change in spinbutton value should be by an amount larger than the step changes made by up and down arrows.

## Best practices

HTML's `<input type="number">` implicitly has the `role` of `spinbutton`. Do not use `aria-valuemax` or `aria-valuemin` attributes on `<input type="number">` or other number and date input elements; use `min` and `max` instead. Otherwise, any global aria-* attributes and any other aria-* attributes are applicable to the spinbutton role.

### Prefer HTML

It is recommended to use a native {{HTMLElement("input")}} of type `number`, [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number), rather than the `spinbutton` role.

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#spinbutton","ARIA: spinbutton role")}}                                             | {{Spec2('ARIA')}}                         |

## See also

- [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number),
- HTML {{HTMLElement('progress')}} element
- HTML {{HTMLElement('meter')}} element
- Other range widgets include:
  - [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) (if focusable)
  - [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)
- Working examples:
  

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
