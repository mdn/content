---
title: 'ARIA: presentation role'
slug: Web/Accessibility/ARIA/Roles/presentation_role
tags:
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - document structure role
spec-urls:
  - https://w3c.github.io/aria/#presentation
  - https://w3c.github.io/aria-practices/#presentation_role
---

The `presentation` role and its synonym `none` remove an element's implicit ARIA semantics from being exposed to the accessibility tree.

The content of the element will still be available to assistive technologies; it is only the semantics of the container — and in some instance, required associated descendants — which will no longer expose their mappings to the accessibility API.

## Description

While ARIA is primarily used to express semantics, there are some situations where hiding an element's semantics from assistive technologies is helpful. This is done with the `presentation` role or its synonym role `none`, which declare that an element is being used only for presentation and therefore does not have any accessibility semantics.

Writing `<h2 role="presentation">Democracy Dies in Darkness</h2>` removes the heading semantics of the {{HTMLElement('h2')}} element, making it the equivalent of `<div>Democracy Dies in Darkness</div>`. The heading role semantics are removed, but the content itself is still available.

When an element has required descendants, such as the various {{HTMLElement('table')}}, elements and {{HTMLElement('li')}}s children of a {{HTMLElement('ul')}} or {{HTMLElement('ol')}}, the `presentation` or `none`  role on the table or list removes the default semantics of the element on which it was applied and their required descendant elements.

If `presentation` or `none` is applied to a {{HTMLElement('table')}}  element, the descendant {{HTMLElement('caption')}}, {{HTMLElement('thead')}}, {{HTMLElement('tbody')}}, {{HTMLElement('tfoot')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, and {{HTMLElement('td')}} elements inherit the role and are thus not exposed to assistive technologies. But, elements inside of the {{HTMLElement('th')}} and {{HTMLElement('td')}} elements, including nested tables, are exposed to assistive technologies.

```html
<ul role="presentation">
  <li>
    <a href="#">Link 1</a>
  </li>
  <li>
    <a href="#">Link 2</a>
  </li>
  <li>
    <a href="#">Link 3</a>
  </li>
</ul>
```

Because the `presentation` role was applied to the {{HTMLElement('ul')}} element, every child {{HTMLElement('li')}} element inherits the `presentation` role. This is because ARIA requires the `listitem` elements to have a parent `list` element. While the {{HTMLElement('li')}}  elements, in this case, are not exposed to assistive technologies, descendants of those required elements are exposed. If we had nested a list within one of those {{HTMLElement('li')}}'s, they would be visible to assistive technologies. For elements with no required children, any elements nested inside the element with `role="presentation"` or `role="none"` preserve their semantics.  In this case, the {{HTMLElement('a')}} elements contained inside of those {{HTMLElement('li')}} elements are exposed.

The {{HTMLElement('a')}} is a special case. Its role would have been exposed even if it had the `presentation` or `none` role directly applied to it. Browsers ignore `role="presentation"` and `role="none"`on focusable elements, including link and inputs, or anything with a [tabindex](/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute set. Browsers also ignore the inclusion of the role if any of the element contains any global ARIA states and properties, such as [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

> **Note:** The element with `role="presentation"` is not part of the accessibility tree and should not have an accessible name. Do **not** use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).

### Associated WAI-ARIA roles, states, and properties

None. If a global ARIA state and property is set, `presentation` or `none` will be ignored, and the implicit role of the element will be used.

## Examples

```html
<hr role="none">
```

## Specifications

{{Specifications}}

## See Also

- [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) versus [`role="presentation/none"`](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) - by Scott O'Hara

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
