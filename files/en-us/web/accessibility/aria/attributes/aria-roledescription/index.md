---
title: aria-roledescription
slug: Web/Accessibility/ARIA/Attributes/aria-roledescription
tags:
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-roledescription
  - Reference
spec-urls: https://w3c.github.io/aria/#aria-roledescription
---
The `aria-roledescription` attribute defines a human-readable, author-localized description for the role of an element.

## Description

Some assistive technologies (<abbr>AT</abbr>), such as screen readers, present the role of an element as part of the user experience. The `aria-roledescription` attribute provides a way to define a different human-readable name to be presented by AT as the role of an element.

> **Note:** Only use aria-roledescription to clarify the purpose of non-interactive container roles and to provide a more specific description to a widget.

Users depend on the presentation of known role name to understand the purpose of the element and, if it is a widget, how to interact with it. So, only use `aria-roledescription` to clarify the purpose of non-interactive container roles like `group` or `region` and to provide a more specific description to a widget.

The `aria-roledescription` property overrides how ATs localize and express the name of a role. When you override a role name the user understands, you can potentially negatively impact a users' ability to understand and interact with an element.

Avoid using the `aria-roledescription` attribute. When a use case appears special worthy of a unique roledescription, the interactions can often times be broken down into smaller pieces that have relevant roles.

When there are no semantic or ARIA widget roles that correspond to the interaction model of your widget, use `role="application"`, provide an `aria-roledescription` with a human-readable, author-localized customized role name, and use `aria-describedby` to provide user instructions.

ATs may customize and localize the names of ARIA roles. If you are using `aria-roledescription` to change how the role name is presented to the user, remember to handle localization. The value should be translated when a page is localized.

Changing how the role is presented to the user has no impact on the functionality of the element. For example, if an element has a role of [`region`](/en-US/docs/Web/Accessibility/ARIA/Roles/region_role) or [`button`](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) when AT provides functions for navigating to the next region or button, if you set the `aria-roledescription` to `continent` and `escape` respectively, the AT will still allow those functions to navigate to regions and buttons.

Again, avoid using `aria-roledescription`. In this example, `escape` has no relevant meaning to the user, but `button` with "escape" as a label does.

When using `aria-roledescription`, also ensure that the element to which it is applied has a valid ARIA [`role`](/en-US/docs/Web/Accessibility/ARIA/Roles) or has implicit role semantics and that the value itself is not empty and contains more than just whitespace characters.

The `aria-roledescription` is required when using `aria-brailleroledescription`. Note that, in general, `aria-brailleroledescription` should only be used in rare cases when a `aria-roledescription` is excessively verbose when rendered in Braille.

## Examples

The following example shows the use of `aria-roledescription` to indicate that a non-interactive container is a "slide" in a web-based presentation application.

```html
<div role="article" aria-roledescription="slide" id="slide" aria-labelledby="slideheading">
<h1 id="slideheading">Quarterly Report</h1>
<!-- remaining slide contents -->
</div>
```

In the previous examples, a screen reader user may hear "Quarterly Report, slide" rather than the less precise "Quarterly Report, article".

## Values

- `<string>`
  - : A non-empty string, an unconstrained value type,containing more than just white space.

## ARIAMixin API

- {{domxref("Element.ariaRoleDescription")}}
  - : The [`ariaRoleDescription`](/en-US/docs/Web/API/Element/ariaRoleDescription) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-roledescription` attribute.
- {{domxref("ElementInternals.ariaRoleDescription")}}
  - : The [`ariaRoleDescription`](/en-US/docs/Web/API/ElementInternals/ariaRoleDescription) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-roledescription` attribute.

## Associated roles

Supported by all roles and by all base markup elements except for `role="generic"`.

## Specifications

{{Specifications}}

## See Also

- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Roles)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
