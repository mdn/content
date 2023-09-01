---
title: aria-hidden
slug: Web/Accessibility/ARIA/Attributes/aria-hidden
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-hidden
---

The `aria-hidden` state indicates whether the element is exposed to an accessibility API.

## Description

The `aria-hidden` attribute can be used to hide non-interactive content from the accessibility API.

Adding `aria-hidden="true"` to an element removes that element and all of its children from the accessibility tree. This can improve the experience for assistive technology users by hiding:

- Purely decorative content, such as icons or images
- Duplicated content, such as repeated text
- Offscreen or collapsed content, such as menus

The presence of the `aria-hidden` attribute hides content from assistive technology but doesn't visually hide anything.

`aria-hidden="true"` should not be used on elements that can receive focus. Additionally, since this attribute is inherited by an element's children, it should not be added onto the parent or ancestor of a focusable element.

> **Warning:** Do not use `aria-hidden="true"` on focusable elements.

An element's hidden status is based on whether it is rendered. Rendering is usually controlled by CSS. For example, an element whose `display` property is set to `none` via CSS is not rendered. An element is considered hidden if it, or any of its ancestors are not rendered or have their `aria-hidden` attribute value set to true. Note that an element and its children that has `aria-hidden="true"` declared on it will still be visible, unless also hidden by CSS.

Use caution when using `aria-hidden` to hide visibly rendered content from assistive technologies. You should not be hiding visible content unless doing so improves the experience for users of assistive technologies by removing redundant or extraneous content. Only when identical or equivalent meaning and functionality is exposed to assistive technologies can removing visible content from the accessibility API be considered.

> **Note:** Consider all disabilities when hiding visibly rendered content from assistive technologies. Not all users of assistive technology are visually impaired. If visible content doesn't match text content in the accessibility API, the user experience will be negatively impacted for sighted users.

On the surface, the `aria-hidden="true"` and the `role="presentation"` and its synonym `role="none"` seem similar, but the intent behind each is different.

- `aria-hidden="true"` will remove the entire element from the accessibility API.
- `role="presentation"` and `role="none"` will remove the semantic meaning of an element while still exposing it and its content to assistive technology.

`aria-hidden="true"` should not be added when:

- The HTML [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden) attribute is present
- The element or the element's ancestor is hidden with [`display: none`](/en-US/docs/Web/CSS/display)
- The element or the element's ancestor is hidden with [`visibility: hidden`](/en-US/docs/Web/CSS/visibility)

In all three scenarios, the attribute is unnecessary to add because the element has already been removed from the accessibility tree. Visually hiding elements with `display` or `visibility` hides content from the screen and from assistive technologies.

Using `aria-hidden="false"` will not re-expose the element to assistive technology if any of its parents specify `aria-hidden="true"`.

## Example

Adding `aria-hidden="true"` to the icon hides the icon character from being included in the accessible name.

```html
<button>
  <span class="fa fa-tweet" aria-hidden="true"></span>
  <span class="label"> Tweet </span>
</button>
```

We have a button with [a Font Awesome icon](https://fontawesome.com/). We hide the icon from assistive technologies with `aria-hidden="true"`, as exposing the icon to assistive technologies could lead to redundancy or, if the icon doesn't have the same content as the visible text, confusion.

## Values

- `false`
  - : The element is exposed to the accessibility API as if it was rendered.
- `true`
  - : The element is hidden from the accessibility API.
- `undefined` (default)
  - : The element's hidden state is determined by the user agent based on whether it is rendered.

## ARIAMixin API

- {{domxref("Element.ariaHidden")}}
  - : The [`ariaHidden`](/en-US/docs/Web/API/Element/ariaHidden) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-hidden` attribute, which Indicates whether the element is exposed to an accessibility API.
- {{domxref("ElementInternals.ariaHidden")}}
  - : The [`ariaHidden`](/en-US/docs/Web/API/ElementInternals/ariaHidden) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-hidden` attribute

## Associated roles

Used in **ALL** roles

## Specifications

{{Specifications}}

## See Also

- [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-modal`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
- HTML [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden) attribute
- CSS {{CSSXref('display')}} property
- CSS {{CSSXref('visibility')}} property

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
