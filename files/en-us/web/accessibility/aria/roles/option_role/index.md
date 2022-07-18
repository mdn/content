---
title: 'ARIA: option role'
slug: Web/Accessibility/ARIA/Roles/option_role
tags:
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - option role
spec-urls:
  - https://w3c.github.io/aria/#option
  - https://w3c.github.io/aria-practices/#Listbox
---
The `option` role is used for selectable items in a `listbox`.

## Description

The `option` role is used to identify selections a user can make in a [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role). These options are similar to the {{HTMLElement('option')}} elements in a {{HTMLElement('select')}} element, but they can contain images.

All selectable options should have [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) match their state, `true` when selected and `false` when not. If an option is not selectable, `aria-selected` can be omitted. A disabled option can have [`aria-disabled="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) and `aria-selected="false"` to communicate to the user that the option is present, albeit disabled.

The `option` role is for identifying selectable choices of a `listbox`. Options must be provided an accessible name. Generally, the accessible name for an option should come from the element's descendant content.

Authors can also explicitly provide an accessible name by specifying [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) to the element with the `option` role. If using `aria-label` or `aria-labelledby`, and the option also displays a visible text label, authors must ensure they adhere to <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">WCAG Success Criterion 2.5.3 Label in Name</a>.

It is highly recommended to use a {{HTMLElement('select')}} element or an {{HTMLElement('input')}} element with the `checkbox` or `radio` type instead, when possible. These native HTML elements provide keyboard interactivity to manage focus for all the descendants for you automatically.

### All descendants are presentational

There are some types of user interface components that, when represented in a platform accessibility API, can only contain text. Accessibility APIs do not have a way of representing semantic elements contained in a `option`. To deal with this limitation, browsers, automatically apply role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) to all descendant elements of any `option` element as it is a role that does not support semantic children.

For example, consider the following `option` element, which contains a heading.

```html
<div role="option"><h3>Title of my option</h3></div>
```

Because descendants of `option` are presentational, the following code is equivalent:

```html
<div role="option"><h3 role="presentation">Title of my option</h3></div>
```

From the assistive technology user's perspective, the heading does not exist since the previous code snippets are equivalent to the following in the [accessibility tree](/en-US/docs/Glossary/Accessibility_tree):

```html
<div role="option">Title of my option</div>
```

### Associated ARIA roles, states, and properties

#### Associated Roles

- [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role)
  - : An `option` _must_ be contained in or owned by a `listbox`

#### States and Properties

- [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Used to describe the selection state of the option. Required.

- [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
  - : Used to describe the checked state when options are used in a multiple selection fashion. Supports `true`, `false` and `mixed`. Optional.

- [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Used to describe the position in the set of options when it does not match the DOM, such as virtual scrolling where only some options are present at a time. Optional.

- [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Used in conjunction with `aria-posinset` to declare the total number of options. Optional.

- [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
  - : Used to indicate that the option is present but not editable. Optional.

- [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
  - : Used to hide the option from accessibility tools. It should only be used to hide non-visible content or visible content if it improves the experience of assistive technology, such as redundant content. Optional.

- [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
  - : Used to indicate that the value of the option is considered invalid by the application. Optional.

- [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
  - : Used to indicate that an element is being modified, such as while it is loadingOptional.

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Used to indicate which element labels the option. The content of the option should be used instead where appropriate. Optional.

- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Used to label the option. If the label is present in the DOM, `aria-labelledby` should be used instead. Optional.

(For further details and a full list of ARIA states and properties see the <a href="https://www.w3.org/TR/wai-aria-1.1/#option">ARIA `option` (role)</a> documentation.)

## Specifications

{{Specifications}}

## See also

- HTML {{HTMLElement('select')}} element
- HTML {{HTMLElement('label')}} element
- HTML {{HTMLElement('option')}} element
- [ARIA: `combobox` role](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [ARIA: `list` role](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `listbox` role](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role)

<section id="Quick_links">
  <ol>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA roles</strong></a>{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}
  </ol>
</section>
