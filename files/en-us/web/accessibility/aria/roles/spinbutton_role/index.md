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

A `spinbutton` is an input widget, with increment and decrement functionality, that restricts its value to a set or range of discrete values. For example, in a widget that enables users to choose an amount to bet, or an ante, in a game of Texas Holdem, a spinbutton could allow users to select a number between the minimum and maximum bets in increments allowed by the current game rules.

The `spinbutton` represents the range of possible values. The value of the `spinbutton` input represents the current value. 

Spinbuttons often have three components, including a text field that displays the current value, an increment button, and a decrement button. The text field is usually the only focusable component because the increment and decrement functions are keyboard accessible via arrow keys. Typically, the text field also allows users to directly edit the value.

In addition to including the {{htmlattrxref('tabindex')}} attribute to enable spinbutton focus, keyboard and pointer device support must be implemented. User actions that must be supported include changing the value by clicking the increment and decrement buttons for pointing devices and using directional keys such as arrow keys for the keyboard users. See [keyboard interactions](#Keyboard_interactions) below.

> **Note:** It is recommended to use a native [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number) (or the date and time input types for dates and time) element rather than the `spinbutton` role. User agents provide a stylized widget for the number, date, and time input elements which include buttons to increment and decrement the values, limiting the range of values if minimum and maximum values are set, and incrementing by specific values if the `step` attribute is included. All of these implicitly have `role="spinbutton"` semantics. When using non-semantic elements, all features of the native semantic element need to be recreated with ARIA attributes, JavaScript and CSS.

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

When `aria-valuetext` is an important feature for a spinbutton, consider using {{HTMLElement('select')}} with {{HTMLElement('option')}} elements instead. The `<select>` doesn't provide for a  every option's value is more accessible to all users, not just users of assistive technology.

An accessible name is **required**. If the spinbuttons's role is applied to an HTML {{HTMLElement('input')}} element, the accessible name can come from the associated {{HTMLElement('label')}}. Otherwise use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible label is present or  [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) if a visible label is not present.

When not using the HTML {{HTMLElement('input')}} element to create your spinbutton, include the {{htmlattrxref('tabindex')}} attribute to make the spinbutton focusable. `spinbutton` is user-interactive and therefore requires being able to receive focus. Focus should be placed on the spinbutton input, and not on the associated buttons that increment and decrement the `spinbutton` value.

### Descendants limited to buttons or text

There are some types of user interface components that, when represented in a platform accessibility API, can only contain specific content. The children or owned elements of `spinbutton` are limited to a  textbox and two buttons. Alternatively, the spinbutton role can be applied to a text input and sibling buttons can be used to support the increment and decrement functions. 

## Associated roles, states, and properties

- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (required)
  - : Set to a decimal value between `aria-valuemin` and `aria-valuemax`, indicating the current value of the spinbutton. If not present, there is no default value.
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive technologies often present the value of `aria-valuenow` as a number. If this would not be accurate, use `aria-valuetext` to provide the spinbutton with a more understandable value.
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Set to a decimal value representing the minimum value, and less than `aria-valuemax`. If not present, there is no default value.
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Set to a decimal value representing the maximum value, and greater than `aria-valuemin`. If not present, there is no default value.
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Defines the string value or identifies the element (or elements) that label the spinbutton element providing an accessible name. An accessible name is required.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) 
 - : Defines a string value that label the spinbutton element providing an accessible name when no visible label is available to provide the required accessible name.

## Examples

In the example below, we have a spinbutton from which you can select the day of the month:

```html
<p id="day">Enter the day of the month</p>
<button type="button"
        tabindex="-1"
        aria-label="previous day">˱</button>
<div role="spinbutton"
     tabindex="0"
     aria-valuenow="1"
     aria-valuetext="first"
     aria-valuemin="1"
     aria-valuemax="31"
     aria-labelledby="day">1</div>
<button type="button"
        tabindex="-1"
        aria-label="next day">˲</button>
```

In this example, we included a negative `tabindex` to remove the buttons from the default tabbing order while adding `tabindex` to a normally non-interactive {{HTMLElement('div')}} to add the `spinbutton` to the tabbing order. This example requires JavaScript to handle keyboard actions when the spinbutton has focus and when a mouse user clicks on the buttons.

This could have also been written using semantic HTML, removing the need for any CSS or JavaScript, and also removing the need to include and provide functionality for extraneous incrementing and decrementing buttons:

```html
<label for="day">Enter the day of the month</label>
<input type="number"
  value="1"
  aria-valuetext="first"
  min="1"
  max="31"
  id="day">
```
<label for="day">Enter the day of the month</label>
<input type="number"
  value="1"
  aria-valuetext="first"
  min="1"
  max="31"
  id="day">

In this case, the only JavaScript needed would be to update the `aria-valuetext` when the input value changes, which really is an optional feature in this case.

## Keyboard interactions

| Key(s) | Action |
| ---- | ---- |
| Right and Up arrows | Increase the selected value by one step |
| Left and Down arrows | Decrease the selected value by one step|
| Page Up | (Optional) increase the value by a set amount greater than or equal to one step |
| Page Up and Page Down | (Optional) decrease the value by a set amount greater than or equal to one step |
| Home | Set the spinbutton to the minimum value. |
| End | Set the spinbutton to the maximum value. |

For the optional <kbd>Page Up</kbd> and <kbd>Page Down</kbd> keys, the change in spinbutton value should preferably be by an amount larger than the step changes made by up and down arrows.

## Best practices

HTML's `<input type="number">` implicitly has the `role` of `spinbutton`. HTML's `<input type="date">` has 3 nested spin buttons; one each for month, day, and year. When using semantic HTML form elements for their intended purposes, do not use `aria-valuemax` or `aria-valuemin` attributes; use `min` and `max` instead. Otherwise, any global aria-* attributes and any other aria-* attributes are applicable to the spinbutton role.

### Prefer HTML

It is recommended to use a native {{HTMLElement("input")}} of type `number`, [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number), rather than the `spinbutton` role.

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#spinbutton","ARIA: spinbutton role")}}                                             | {{Spec2('ARIA')}}                         |

## See also

- [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number)
- [`<input type="date">`](/en-US/docs/Web/HTML/Element/input/date)
- [`<input type="time">`](/en-US/docs/Web/HTML/Element/input/time)
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
