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
spec-urls: https://w3c.github.io/aria/#slider
---
The `slider` role defines an input where the user selects a value from within a given range.

## Description

The `slider` role is for range input widgets where the user selects a value from within given minimum and maximum values.

### The `slider` role compared other range options

ARIA provides developers with six different range [widget roles](/en-US/docs/Web/Accessibility/ARIA/Roles#2._widget_roles), including progressbars, meters, and sliders.

The [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role) role, similar to HTML's {{HTMLElement('progress')}} element, is a read-only range indicating the portion of completion of a task, progressing in a single direction, such as a file upload's loading progress bar that eventually reaches 100% when fully loaded.

The [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role) role, similar to HTML's {{HTMLElement('meter')}} element, is a read-only gauge indicating the amount of something within a known range, such as a computer's battery indicator or a car's gas gauge.

The `slider` role, similar to HTML's `input` of type `range`, [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range), is a read-write input range. Sliders allow users to select a value between set minimum and maximum values. The user selects a value by moving a slider thumb along a horizontal or vertical slider to select a value.

While all three of these ranges have the same ARIA states and properties, the `slider` role is the only read-write range: it is the only one whose value changes via user interaction. As such, it must be able to receive focus. In addition, keyboard interaction, mouse clicks, and touch interaction must be supported.

> **Warning:** To change the slider value, touch-based assistive technologies need to respond to user gestures for increasing and decreasing the value by synthesizing key events.
> Fully test slider widgets using assistive technologies on devices where touch is a primary input mechanism before using the `slider` role (and all range widgets).

#### Common attributes

The [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) attribute sets the minimum value. If omitted or not a number, it defaults to `0` (zero).

The [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) attribute defines the maximum value. If it is missing or not a number, it defaults to 100.

The [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) attribute value must be between the minimum and maximum values, inclusive. This attribute is required for `slider` and `meter`, and optional for `progressbar`.

For `slider`, unless using the [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) element, the `aria-valuenow` value must be updated programmatically when the user updates the value.

The optional [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) attribute is included when the `aria-valuenow` numeric value doesn't reflect the intended value of the slider.  As the minimum, maximum, and current values are all numeric, when the values those numbers represent are not numeric, the `aria-valuetext` attribute should be included with a string value defining the numeric value. For example, if using a slider for t-shirt sizes, the `aria-valuetext` attribute should shift from xx-small thru to XX-large as the `aria-valuenow` increases.

The `aria-valuetext` value must be updated as the `value` or `aria-valuenow` is updated. While there is no equivalent HTML attribute for `<input type="range">`, you can include `aria-valuetext` on any {{htmlelement('input')}} type. ARIA attributes are supported on semantic HTML elements.

When `aria-valuetext` is an important feature for a slider, consider using {{HTMLElement('select')}} with {{HTMLElement('option')}} elements instead. While not visually a range, every option's value is more accessible to all users, not just users of assistive technology.

An accessible name is **required**. If the range's role is applied to an HTML {{HTMLElement('input')}} element (or `<meter>` or `<progress>` element), the accessible name can come from the associated {{HTMLElement('label')}}. Otherwise use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible label is present or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) if a visible label is not present.

When not using the HTML {{HTMLElement('input')}} element to create your slider, include the {{htmlattrxref('tabindex')}} attribute to make the slider focusable. Of the three range types, only `slider` is user-interactive, and so is the only one that requires being able to receive focus. Focus should be placed on the slider thumb.

Sliders have an implicit [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) value of `horizontal`. This attribute is not supported with `meter` or `progressbar`.

### User interactions

Unlike the read-only `meter` and `progressbar` roles, a `slider` is an input, accepting user interaction. In addition to including the {{htmlattrxref('tabindex')}} attribute to enable slider focus, keyboard and pointer device support must be implemented.

The slider represents the range of possible values. The position of the slider thumb along the slider represents the current value. User actions that must be supported include changing the value by dragging the thumb or clicking the slider for pointing devices and using directional keys such as arrow keys for the keyboard users. See [keyboard interactions](#keyboard_interactions) below.

> **Note:** It is recommended to use native [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) elements rather than the `slider` role. User agents provide a stylized widget for the range input element, based on the current `value` as it relates to the minimum and maximum values. When using non-semantic elements, all features of the native semantic element need to be recreated with ARIA attributes, JavaScript and CSS.

### Range with multiple thumbs

A multi-thumb slider is a slider with two or more thumbs that each set a value in a group of related values. For example, in a product search, a two-thumb slider could be used to enable users to set the minimum and maximum price limits for the search.

In many two-thumb sliders, the thumbs are not allowed to pass one another, such as when the slider sets the minimum and maximum values for a range. For example, in a price-range selector, the maximum value of the thumb that sets the lower end of the range is limited by the current value of the thumb that sets the upper end of the range. The minimum value of the upper-end thumb is also limited by the current value of the lower-end thumb.

It is not a requirement that the thumbs in multi-thumb sliders be dependent on the other thumb values, but intuitive user experience is a requirement, so it is recommended to avoid this anti-pattern.

### All descendants are presentational

There are some types of user interface components that, when represented in a platform accessibility API, can only contain text. Accessibility APIs do not have a way of representing semantic elements contained in a `slider`. To deal with this limitation, browsers, automatically apply role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) to all descendant elements of any `slider` element as it is a role that does not support semantic children.

For example, consider the following `slider` element, which contains a heading.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Because descendants of `slider` are presentational, the following code is equivalent:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

From the assistive technology user's perspective, the heading does not exist since the previous code snippets are equivalent to the following in the [accessibility tree](/en-US/docs/Glossary/Accessibility_tree):

```html
<div role="slider">Temperature in Celsius</div>
```

## Associated roles, states, and properties

- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (required)
  - : Set to a decimal value between `aria-valuemin` and `aria-valuemax`, indicating the current value of the slider.
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive technologies often present the value of `aria-valuenow` as a number. If this would not be accurate, use `aria-valuetext` to provide the slider with a more understandable value.
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Set to a decimal value representing the minimum value, and less than `aria-valuemax`. If not present, the default value is 0.
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Set to a decimal value representing the maximum value, and greater than `aria-valuemin`. If not present, the default value is 100.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Defines the string value or identifies the element (or elements) that label the slider element providing an accessible name. An accessible name is required.
- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. With a slider, the implicit value is `horizontal` but can be set to `vertical`. As it has an implicit value, the slider orientation is never ambiguous.

## Examples

In the example below, we create a vertical thermometer with which the user can set the room temperature:

```html
<div>
  <div id="temperatureLabel">
    Temperature
  </div>
  <div id="temperatureValue">20°C</div>
  <div id="temperatureSlider">
    <div id="temperatureSliderThumb"
       role="slider" aria-labelledby="temperatureLabel"
       aria-orientation="vertical"
       tabindex="0"
       aria-valuemin="15.0" aria-valuemax="25.0"
       aria-valuenow="20.0" aria-valuetext="20 degrees Celsius"
       style="top: calc((25 - 20)*2rem - 0.5rem)">
    </div>
  </div>
</div>
```

The position of the thumb is the maximum value minus the current value times the height of one degree, minus half the height of the thumb to center it. The rest of the styles are static.

```css
[id="temperatureSlider"] {
  position: relative;
  height: 20rem;
  width: 1rem;
  outline: 1px solid;
  margin: 3rem;
}

[id="temperatureSliderThumb"] {
  position: absolute;
  height: 1rem;
  width: 2rem;
  background-color: currentcolor;
  left: -0.5rem;
}
```

For this example to work, we have to write a script to handle all keyboard and pointer events, including event listeners for `pointermove`, `pointerup`, `focus`, `blur`, and `keydown`, and provide styles for the default state and when the thumb and slider receive focus. The position of the thumb, the `aria-valuenow` and `aria-valuetext` values, and the inner text of the element with the {{HTMLattrxref('id')}} "temperatureValue" need to be updated every time <kbd>ArrowLeft</kbd>, <kbd>ArrowDown</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd>, and, optionally, <kbd>PageDown</kbd> and <kbd>PageUp</kbd> keys are released and when the user drags the thumb or otherwise clicks on the temperature slider.

Using semantic HTML, this could have been written as:

```html
<label for="temperature">
    Temperature
</label>
<output id="temperatureValue">20°C</output>
<input type="range" id="temperatureSlider"
  min="15" max="25" step="0.1"
  value="20" aria-valuetext="20 degrees celsius"
  style="transform: rotate(-90deg);" />
```

By using {{HTMLElement('input')}}, we get an already-styled range-input widget with keyboard focus, focus styling, keyboard interactions, and `value` updated on user interaction for free. We still need to use JavaScript to change the `aria-valuetext` and the value of the {{HTMLElement('output')}} element.

There are a few ways to make a range input vertical. In this example, we used [CSS transforms](/en-US/docs/Web/CSS/transform).

## Keyboard interactions

| Key(s) | Action |
| ---- | ---- |
| Right and Up arrows | Increase the selected value by one step |
| Left and Down arrows | Decrease the selected value by one step|
| Page Up | (Optional) increase the value by a set amount greater than one step |
| Page Down | (Optional) decrease the value by a set amount greater than one step |
| Home | Set the slider to the minimum value. |
| End | Set the slider to the maximum value. |

For the optional <kbd>Page Up</kbd> and <kbd>Page Down</kbd> keys, the change in slider value should be by an amount larger than the step changes made by up and down arrows.

## Best practices

If the slider is describing the loading progress of a particular region of a page, include the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute to reference the slider status, and set the [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) attribute to `true` on the region until it is finished loading.

HTML's `<input type="range">` implicitly has the `role` of `slider`. Do not use `aria-valuemax` or `aria-valuemin` attributes on `<input type="range">` elements; use `min` and `max` instead. Otherwise, any global `aria-*` attributes and any other `aria-*` attributes applicable to the slider role.

### Prefer HTML

It is recommended to use a native {{HTMLElement("input")}} of type `range`, [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range), rather than the `slider` role.

## Specifications

{{Specifications}}

## See also

- [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range),
- HTML {{HTMLElement('progress')}} element
- HTML {{HTMLElement('meter')}} element
- Other range widgets include:
  - [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) (if focusable)
  - [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- Working examples:
  - [Horizontal Multi-Thumb Slider](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/multithumb-slider.html)
  - [Horizontal Slider](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/slider-1.html)
  - [Slider with `aria-orientation` and `aria-valuetext`](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/slider-2.html)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
