---
title: "ARIA: spinbutton role"
slug: Web/Accessibility/ARIA/Roles/spinbutton_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#spinbutton
---

{{AccessibilitySidebar}}

The `spinbutton` role defines a type of range that expects the user to select a value from among discrete choices.

## Description

The `spinbutton` role indicates that the element is an input widget that restricts its value to a set or range of discrete values. The role also comes with increment and decrement functionality. For example, in a widget that enables users to choose an amount to bet in a game of Texas Holdem, the `spinbutton` role can allow users to select a number between the minimum and maximum bets in increments, as allowed by the current game rules.

The spinbutton represents the range of possible values. The value of the spinbutton input represents the current value.

Spinbuttons often have three components, including a text field that displays the current value, an increment button, and a decrement button. The text field is usually the only focusable component because the increment and decrement functions are keyboard accessible via arrow keys. Typically, the text field also allows users to directly edit the value.

In addition to including the [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute to enable spinbutton focus, keyboard and pointer device support must be implemented. Directional keys such as the arrow keys must be supported for keyboard users. Changing the value when increment and decrement buttons are clicked must be supported for pointing devices. See [keyboard interactions](#keyboard_interactions) below.

> [!NOTE]
> It is recommended to use [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number) element, or other input types for dates and time that also implicitly have the `role="spinbutton"` semantic, rather than the `spinbutton` role. User agents provide stylized widget for the these input elements which provide default increment, decrement, and native range limiting functionality. When using non-semantic elements, all features of the native semantic element need to be recreated with ARIA attributes, JavaScript, and CSS.

### ARIA range widget options

ARIA provides developers with six different range [widget roles](/en-US/docs/Web/Accessibility/ARIA/Roles#2._widget_roles), including `progressbar`, `meter`, `slider`, and `spinbutton`.

The [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role) role, similar to HTML's {{HTMLElement('progress')}} element, is a read-only range. It indicates the portion of completion of a task, progressing in a single direction, such as a file upload's loading progress bar that eventually reaches 100% when fully loaded.

The [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role) role, similar to HTML's {{HTMLElement('meter')}} element, is a read-only gauge. It indicates the amount of something within a known range, such as a computer's battery indicator or a car's gas gauge.

The `slider` role, similar to HTML's `input` of type `range`, [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range), is a read-write input range. Sliders allow users to select a value between the predefined minimum and maximum values. The user selects a value by moving a slider thumb along a horizontal or vertical slider to select a value.

While all three of these ranges have the same ARIA states and properties, the `spinbutton` role is the only read-write range: it is the only one whose value changes via user interaction. As such, it must be able to receive focus. In addition, keyboard interaction, mouse clicks, and touch interaction must be supported.

> [!WARNING]
> To change the spinbutton value, touch-based assistive technologies need to respond to user gestures for increasing and decreasing the value by synthesizing key events.
> Fully test spinbutton widgets using assistive technologies on devices where touch is a primary input mechanism before using the `spinbutton` role (and all range widgets).

#### Common attributes

The [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) attribute sets the minimum value. If omitted or not a number, it defaults to `0` (zero).

The [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) attribute defines the maximum value. If it is missing or not a number, it defaults to `100`.

The [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) attribute value must be between the minimum and maximum values, both inclusive. This attribute is required for `spinbutton` and `meter`, and optional for `progressbar`.

For `spinbutton`, unless using semantic HTML elements like [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number), if the value is updated, the `aria-valuenow` value must also be updated programmatically.

The optional [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) attribute is included when the `aria-valuenow` numeric value doesn't reflect the intended value of the spinbutton. The optional minimum, maximum, and current values should be numeric. When the values these numbers represent are not numeric, the `aria-valuetext` attribute should be included with a string value defining the numeric value. For example, if using a spinbutton for t-shirt sizes, the `aria-valuetext` attribute should shift from `XX-Small` through `XX-Large` as the `aria-valuenow` increases.

The `aria-valuetext` value must be updated as the value or `aria-valuenow` is updated. ARIA attributes are supported on semantic HTML elements. While there is no equivalent HTML attribute for `<input>`, you can include `aria-valuetext` on any {{htmlelement('input')}} type. When `aria-valuetext` is an important feature for a spinbutton, consider using {{HTMLElement('select')}} with {{HTMLElement('option')}} elements instead.

An accessible name is **required**. If the `spinbutton` role is applied to an HTML {{HTMLElement('input')}} element, the accessible name can come from the associated {{HTMLElement('label')}}. Otherwise, use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible label is present or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) if a visible label is not present.

When not using the HTML {{HTMLElement('input')}} element to create your spinbutton, include the [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute to make the spinbutton focusable. The `spinbutton` role is user-interactive, and therefore, requires being able to receive focus. Focus should be placed on the spinbutton input and not on the associated buttons that increment and decrement the spinbutton value.

### Descendants limited to buttons or text

There are some types of user interface components that, when represented in a platform accessibility API, can only contain specific content. The children or owned elements of `spinbutton` are limited to a textbox and two buttons. Alternatively, the `spinbutton` role can be applied to a `text` input and sibling buttons can be used to support the increment and decrement functions.

## Associated roles, states, and properties

- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (required)

  - : Set to a decimal value between `aria-valuemin` and `aria-valuemax`, indicating the current value of the spinbutton. If not present, there is no default value.

- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

  - : Assistive technologies often present the value of `aria-valuenow` as a number. If `aria-valuenow` cannot be accurate, use `aria-valuetext` to provide the spinbutton with a more understandable value.

- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)

  - : Set to a decimal value representing the minimum value and less than `aria-valuemax`. If not present, there is no default value.

- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)

  - : Set to a decimal value representing the maximum value and greater than `aria-valuemin`. If not present, there is no default value.

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Defines the string value or identifies the element (or elements) that label the spinbutton element providing an accessible name. An accessible name is required.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Defines a string value that labels the spinbutton element. This provides an accessible name to the element when no visible label is available to provide the required accessible name via {{HTMLElement('label')}} or `aria-labelledby`.

## Examples

In the example below, a `spinbutton` role has been defined to allow users to select a day of the month.

```html
<p id="day">Enter the day of the month</p>
<button type="button" tabindex="-1" aria-label="previous day">˱</button>
<div
  role="spinbutton"
  tabindex="0"
  aria-valuenow="1"
  aria-valuetext="first"
  aria-valuemin="1"
  aria-valuemax="31"
  aria-labelledby="day">
  1
</div>
<button type="button" tabindex="-1" aria-label="next day">˲</button>
```

In this example, we included a negative `tabindex` to remove the buttons from the default tabbing order. We also added `tabindex` to a normally non-interactive {{HTMLElement('div')}} to add the `spinbutton` itself to the tabbing order. This example requires JavaScript to handle keyboard actions when the spinbutton has focus and when a mouse user clicks on the buttons.

### With semantic HTML

This could have also been written using semantic HTML, removing the need for any CSS or JavaScript and also removing the need to include and provide functionality for extraneous incrementing and decrementing buttons. The code snippet below shows the previous example without the `spinbutton` role and using semantic HTML.

```html
<label for="day">Enter the day of the month</label>
<input
  type="number"
  value="1"
  aria-valuetext="first"
  min="1"
  max="31"
  id="day" />
```

{{EmbedLiveSample("With_semantic_HTML", 50, 50)}}

In this case, the only JavaScript needed would be to update the `aria-valuetext` when the input value changes, which really is an optional feature in this case.

## Keyboard interactions

| Key(s)               | Action                                                                          |
| -------------------- | ------------------------------------------------------------------------------- |
| Right and Up arrows  | Increase the selected value by one step                                         |
| Left and Down arrows | Decrease the selected value by one step                                         |
| Page Up              | (Optional) Increase the value by a set amount greater than or equal to one step |
| Page Down            | (Optional) Decrease the value by a set amount greater than or equal to one step |
| Home                 | Set the spinbutton to the minimum value                                         |
| End                  | Set the spinbutton to the maximum value                                         |

For the optional <kbd>Page Up</kbd> and <kbd>Page Down</kbd> keys, the change in spinbutton value should preferably be by an amount larger than the step changes made by Up and Down arrow keys.

## Best practices

HTML's `<input type="number">` implicitly has the `role` of `spinbutton`. HTML's `<input type="date">` has 3 nested spin buttons, one each for month, day, and year. When using semantic HTML form elements for their intended purposes, do not use `aria-valuemax` or `aria-valuemin` attributes; use `min` and `max` instead. Otherwise, any global `aria-*` attributes and any other `aria-*` attributes are applicable to the `spinbutton` role.

### Prefer semantic HTML

It is recommended to use the native {{HTMLElement("input")}} element of type `number`, [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number), rather than the `spinbutton` role.

## Specifications

{{Specifications}}

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
  - [Date picker spin button example](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Toolbar example: font-size picker](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
