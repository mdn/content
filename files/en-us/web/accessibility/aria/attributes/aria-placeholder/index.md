---
title: aria-placeholder
slug: Web/Accessibility/ARIA/Attributes/aria-placeholder
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-placeholder
---

{{AccessibilitySidebar}}

The `aria-placeholder` attribute defines a short hint (a word or short phrase) intended to help the user with data entry when a form control has no value. The hint can be a sample value or a brief description of the expected format.

## Description

A placeholder is text that appears in the form control when it has no value set. The HTML [`placeholder`](/en-US/docs/Web/HTML/Element/input#placeholder) attribute enables providing a sample value or a brief description of the expected format for several HTML {{HTMLElement('input')}} types and {{HTMLElement('textarea')}}.

If you are creating a `textbox` using any other element, `placeholder` is not supported. That is where `aria-placeholder` comes into play. The `aria-placeholder` attribute can be used to defines a short hint to help the user understand what type of data is expected when a non-semantic form control has no value.

```html
<span id="date-of-birth">Birthday</span>
<div
  contenteditable
  role="textbox"
  aria-labelledby="date-of-birth"
  aria-placeholder="MM-DD-YYYY">
  MM-DD-YYYY
</div>
```

The placeholder hint should be shown to the user whenever the control's value is empty, including when a value is deleted.

> [!NOTE]
> ARIA is only modify the accessibility tree for an element and therefore how assistive technology presents the content to your users. ARIA doesn't change anything about an elements function or behavior. When not using semantic HTML elements for their intended purpose and default functionality, you must use JavaScript to manage behavior.

The `aria-placeholder` is used in addition to, not instead of, a label. They have different purposes and different functionality. A label explains what kind of information is expected. Placeholder text provides a hint about the expected value.

> [!WARNING]
> Using a placeholder instead of a visible label harms accessibility and usability for many users including older users and users with cognitive, mobility, fine motor skill and vision impairments. Labels are better: they are always visible and they provide for a larger hit region to focus on the control. Placeholders have several drawbacks: they disappear when the control has any value including just white space, they can confuse users into thinking the value is pre-filled, and the default color has insufficient contrast.

> [!NOTE]
> Placeholders should only be used to show an example of the type of data that should be entered into a form; they don't replace a proper label.

## Values

- `<string>`
  - : The word or short phrase to display in a control when the control has no value.

## Associated interfaces

- {{domxref("Element.ariaPlaceholder")}}
  - : The [`ariaPlaceholder`](/en-US/docs/Web/API/Element/ariaPlaceholder) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-placeholder` attribute.
- {{domxref("ElementInternals.ariaPlaceholder")}}
  - : The [`ariaPlaceholder`](/en-US/docs/Web/API/ElementInternals/ariaPlaceholder) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-placeholder` attribute.

## Associated roles

Used in roles:

- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)

Inherited into roles:

- [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role)

## Specifications

{{Specifications}}

## See also

- [HTML `placeholder` attribute](/en-US/docs/Web/HTML/Element/input#placeholder)
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
