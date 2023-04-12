---
title: "ARIA: progressbar role"
slug: Web/Accessibility/ARIA/Roles/progressbar_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#progressbar
---

The `progressbar` role defines an element that displays the progress status for tasks that take a long time.

## Description

The `progressbar` range widget indicates that a request has been received and the application is making progress toward completing the requested action.

Authors **may** set aria-valuemin and aria-valuemax to indicate the minimum and maximum progress indicator values. Otherwise, their implicit values follow the same rules as HTML's [`<input type="range"`>](/en-US/docs/Web/HTML/Element/input/range):

- If [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) is missing or not a number, it defaults to `0` (zero).
- If [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) is missing or not a number, it defaults to `100`.
- The `aria-valuemin` and `aria-valuemax` properties only need to be set for the `progressbar` role when the progress bar's minimum is not `0` or the maximum value is not `100`.
- The read-only [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) should be provided and updated unless the value is `indeterminate`, in which case don't include the attribute. If set, make sure the `aria-valuenow` value is between the minimum and maximum values.

If the `progressbar` role is applied to an HTML {{HTMLElement('progress')}} element, the accessible name can come from the associated {{HTMLElement('label')}}. Otherwise use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible label is present or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) if a visible label is not present.

### All descendants are presentational

There are some types of user interface components that, when represented in a platform accessibility API, can only contain text. Accessibility APIs do not have a way of representing semantic elements contained in a `progressbar`. To deal with this limitation, browsers, automatically apply role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) to all descendant elements of any `progressbar` element as it is a role that does not support semantic children.

For example, consider the following `progressbar` element, which contains a heading.

```html
<div role="progressbar"><h3>Title of my progressbar</h3></div>
```

Because descendants of `progressbar` are presentational, the following code is equivalent:

```html
<div role="progressbar">
  <h3 role="presentation">Title of my progressbar</h3>
</div>
```

From the assistive technology user's perspective, the heading does not exist since the previous code snippets are equivalent to the following in the [accessibility tree](/en-US/docs/Glossary/Accessibility_tree):

```html
<div role="progressbar">Title of my progressbar</div>
```

### Associated WAI-ARIA roles, states, and properties

- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
  - : Only present and required if the value is not indeterminate. Set to a decimal value between `0`, or `aria-valuemin` if present, and `aria-valuemax` indicating the current value of the progress bar.
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive technologies often present the value of `aria-valuenow` as a percentage. If this would not be accurate use this property to make the progress bar value understandable.
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Set to a decimal value representing the minimum value, and less than `aria-valuemax`. If not present, the default value is `0`.
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Set to a decimal value representing the maximum value, and greater than `aria-valuemin`. If not present, the default value is `100`.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Defines the string value or identifies the element (or elements) that label the progressbar element providing an accessible name. An accessible name is required.

It is recommended to use a native {{HTMLElement("progress")}} or [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) elements rather than the `progressbar` role. User agents provide a stylize widget for the {{HTMLElement("progress")}} element based on the current `value` as it relates to the `0`, the minimum value, and the `max` value. When using non-semantic elements, all features of the native semantic element need to be recreated with ARIA attributes, JavaScript and CSS.

## Examples

In the example below, the progress bar uses the default values of 0 and 100 for `aria-valuemin` and `aria-valuemax`:

```html
<div>
  <span id="loadinglabel">Loading:</span>
  <span role="progressbar" aria-labelledby="loadinglabel" aria-valuenow="23">
    <svg width="100" height="10">
      <rect height="10" width="100" stroke="black" fill="black" />
      <rect height="10" width="23" fill="white" />
    </svg>
  </span>
</div>
```

Using semantic HTML, this could be written as:

```html
<label for="loadinglabel">Loading:</label>
<progress id="loadinglabel" max="100" value="23"></progress>
```

## Best Practices

If the progress bar is describing the loading progress of a particular region of a page, include the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute to reference the progress bar's status, and set the [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) attribute to `true` on the region until it is finished loading.

### Prefer HTML

It is recommended to use a native {{HTMLElement("progress")}} or [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) elements rather than the `progressbar` role.

## Specifications

{{Specifications}}

## See Also

- HTML {{HTMLElement('progress')}} element
- Other range widgets include:
  - [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) (if focusable)
  - [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)
  - [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
