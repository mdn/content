---
title: aria-label
slug: Web/Accessibility/ARIA/Attributes/aria-label
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-label
---

{{AccessibilitySidebar}}

The `aria-label` attribute defines a string value that can be used to name an element, as long as the element's role does not [prohibit naming](#associated_roles).

## Description

Sometimes, the default {{Glossary("accessible_name", "accessible name")}} of an element is missing or the accessible name does not accurately describe the contents of the element and there is no content visible in the DOM that can be associated with the object to give it meaning. A common example of such an element is a button containing an SVG icon without any text.

In cases where an element that is not part of the [prohibited list](#associated_roles), has no accessible name or an accessible name is not accurate and there is no content visible in the DOM that can be referenced via the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute, the `aria-label` attribute can be used to define a string that labels the interactive element on which it is set. This provides the element an accessible name.

The code below shows an example of how to use the `aria-label` attribute to provide an accessible name for a `<button>` element. The button in this example contains an SVG graphic and lacks textual content, making the `aria-label` essential for screen reader users to understand its function, which in this case is "Close".

```html
<button aria-label="Close" onclick="myDialog.close()">
  <svg
    aria-hidden="true"
    focusable="false"
    width="17"
    height="17"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
      fill="#000" />
  </svg>
</button>
```

> **Note:** `aria-label` is intended for naming elements where the implicit or explicit role does not prohibit naming. It is strongly recommended to prioritize the use of `aria-labelledby` over `aria-label` if a visible label exists for the element to reference and receive its name from.

Most content has an accessible name generated from its immediate wrapping element's text content. Accessible names can also be created by certain attributes or associated elements.

By default, a button's accessible name is the content between the opening and closing {{HTMLElement('button')}} tags, an image's accessible name is the content of its [`alt`](/en-US/docs/Web/HTML/Element/img#alt) attribute, and a form input's accessible name is the content of the associated {{HTMLElement('label')}} element.

If none of these options are available or if the default accessible name is not appropriate, use the `aria-label` attribute to define the accessible name of an element.

> [!NOTE]
> While `aria-label` can be used on any element that can have an accessible name, in practice however, it is supported only on interactive elements, [widgets](/en-US/docs/Web/Accessibility/ARIA/Roles#2._widget_roles), [landmarks](/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), images, and iframes.

When using `aria-label`, you also need to consider [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby):

- `aria-label` can be used in cases where text that could label the element is _not_ visible. If there is visible text that labels an element, use `aria-labelledby` instead.
- The purpose of `aria-label` is the same as `aria-labelledby`. Both provide an accessible name for an element. If there is no visible name for the element you can reference, use `aria-label` to provide the user with a recognizable accessible name. If label text is available in the DOM and it's possible to reference it for an acceptable user experience, prefer to use `aria-labelledby`. Don't use both on the same element because `aria-labelledby` will take precedence over `aria-label` if both are applied.

Keep the following additional guidelines in mind when using `aria-label`:

- The `aria-label` attribute can be used with regular, semantic HTML elements; it is not limited to elements that have an [ARIA `role`](/en-US/docs/Web/Accessibility/ARIA/Roles) assigned.
- Don't "overuse" `aria-label`. Remember that it's primarily for assistive technologies. To provide additional instructions or to clarify the UI, use visible text with `aria-describedby` or [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description), not `aria-label`. Instructions should be accessible to all users, not just to those with screen readers (or preferably, make your UI more intuitive).

  > [!NOTE]
  > Since `aria-label` content isn't displayed outside assistive technologies, consider making important information visible for all users.

- Not all elements can be given an accessible name. Neither `aria-label` nor `aria-labelledby` should be used with inline structural roles such as with `code`, `term`, and `emphasis`, and roles not mapped to the accessibility API, including `none`. The `aria-label` attribute is intended for elements including links, videos, form controls, and those with [landmark roles](/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) or [widget roles](/en-US/docs/Web/Accessibility/ARIA/Roles#2._widget_roles); `aria-label` provides an accessible name when no visible label exists in the DOM.
- If you assign a `title` to an {{HTMLElement('iframe')}}, define an `alt` attribute for an {{HTMLElement('img')}}, or add {{HTMLElement('label')}} for an {{HTMLElement('input')}}, `aria-label` is not necessary. However, if an `aria-label` attribute is present, it will take precedence over the iframe's `title`, the image's `alt`, or the input's `<label>` text as the accessible name for that element.

## Values

- `<string>`
  - : A string of text that will be the accessible name for the object.

## Associated interfaces

- {{domxref("Element.ariaLabel")}}
  - : The [`ariaLabel`](/en-US/docs/Web/API/Element/ariaLabel) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-label` attribute.
- {{domxref("ElementInternals.ariaLabel")}}
  - : The [`ariaLabel`](/en-US/docs/Web/API/ElementInternals/ariaLabel) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-label` attribute.

## Associated roles

Used in almost all roles **except** roles that cannot be provided an accessible name by the author.

The `aria-label` attribute is **NOT** supported in:

- [`code`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`caption`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`definition`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`deletion`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`emphasis`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`generic`](/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role)
- [`insertion`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`mark`](/en-US/docs/Web/Accessibility/ARIA/Roles/mark_role)
- [`paragraph`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [`none`](/en-US/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`strong`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`subscript`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`superscript`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`suggestion`](/en-US/docs/Web/Accessibility/ARIA/Roles/suggestion_role)
- [`term`](/en-US/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`time`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)

## Specifications

{{Specifications}}

## See also

- {{HTMLElement('label')}} element
- [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Using HTML landmark roles to improve accessibility](/en-US/blog/aria-accessibility-html-landmark-roles/) on MDN blog (2023)
