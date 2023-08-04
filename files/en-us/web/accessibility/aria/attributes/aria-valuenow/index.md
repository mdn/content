---
title: aria-valuenow
slug: Web/Accessibility/ARIA/Attributes/aria-valuenow
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-valuenow
---

The `aria-valuenow` attribute defines the current value for a `range` widget.

## Description

The `aria-valuenow` attribute defines the current value for range widgets. It is similar to the `value` attribute of {{HTMLElement('progress')}}, {{HTMLElement('meter')}}, and {{HTMLElement('input')}} of type [`range`](/en-US/docs/Web/HTML/Element/input/range), [`number`](/en-US/docs/Web/HTML/Element/input/number) and all the date-time types.

When creating a range type role, including [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role), [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role), [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role), and [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role) on a non-semantic element, the `aria-valuenow` enables defining a current numeric value between the minimum and maximum values. The minimum and maximum values are defined with [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) and [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax).

> **Warning:** The [`range`](/en-US/docs/Web/Accessibility/ARIA/Roles/range_role) role itself should **NOT** be used as it is an ["abstract"](/en-US/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles). The `aria-valuenow` attribute is used on all of the range roles subtypes.

```html
<p id="birthyearLabel">What year were you born?</p>
<div
  role="spinbutton"
  tabindex="-1"
  aria-valuenow="1984"
  aria-valuemin="1900"
  aria-valuemax="2021"
  aria-labelledby="birthyearLabel">
  <span class="value"> 1984 </span>
  <span role="button">
    <span aria-hidden="true">+</span>
    Increment year by 1
  </span>
  <span role="button">
    <span aria-hidden="true">-</span>
    Decrement year by 1
  </span>
</div>
```

Use semantic HTML elements when you can:

```html
<label for="birthyear">What year were you born?</label>
<input type="number" id="birthyear" value="1984" min="1900" max="2021" />
```

If there is no known value, like when a progress bar is in an indeterminate state, don't set an `aria-valuenow` attribute.

When there is no `aria-valuenow` set, no information is implied about a current value.

When used with sliders and spinbuttons, assistive technologies announce the actual value to users.

When used with progressbar and scrollbar, assistive technologies announce the value to users as a percent. When `aria-valuemin` and `aria-valuemax` are both defined, the percent value is calculated as a position on the range. Otherwise, the actual value is announced as a percent.

When the value to be announced, either the actual value or the value as a percent, may not be clear to users, the [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) attribute should be used to provide a user-friendly representation of the value. When set, the valuetext string is announced instead of the valuenow numeric value. For example, if a slider represents the days of the week, so the day of the week's `aria-valuenow` is a number, the `aria-valuetext` property should be set to a string that makes the slider value understandable, such as "Monday".

## Examples

```html
<p id="temperatureLabel">Oven Temperature</p>
<div
  role="meter"
  id="temperature"
  aria-valuenow="205"
  aria-valuemin="70"
  aria-valuemax="250"
  aria-labelledby="temperatureLabel">
  <div class="meter-color" aria-hidden="true"></div>
</div>
```

The first rule of ARIA use is "if you can use a native feature with the semantics and behavior you require already built in, instead of repurposing an element and **adding** an ARIA role, state or property to make it accessible, then do so."

```html
<label for="temperature">
  Oven Temperature
</p>
<input type="range" id="temperature"
  value="205" min="70" max="250" step="5"/>
</meter>
```

If we employ native HTML semantics with {{HTMLElement('input')}} we get styles and semantics for free.

## Values

- `<number>`
  - : A decimal number, between the minimum and maximum values.

## ARIAMixin API

- {{domxref("Element.ariaValueNow")}}
  - : The [`ariaValueNow`](/en-US/docs/Web/API/Element/ariaValueNow) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-valuenow` attribute.
- {{domxref("ElementInternals.ariaValueNow")}}
  - : The [`ariaValueNow`](/en-US/docs/Web/API/ElementInternals/ariaValueNow) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-valuenow` attribute.

## Associated roles

Used in roles:

- [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

Inherited into roles:

- [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

## Specifications

{{Specifications}}

## See Also

- [`range` role](/en-US/docs/Web/Accessibility/ARIA/Roles/range_role)
- [`<input type="range>` element `value` attribute](/en-US/docs/Web/HTML/Element/input/range#value)
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin).

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
