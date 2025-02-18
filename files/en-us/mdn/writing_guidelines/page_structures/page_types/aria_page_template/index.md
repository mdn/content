---
title: ARIA page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

## Page front matter

### Title and slug

An ARIA role page should have a `title` and `slug` of `ARIA: Name Of The Role`. For example, the [button role](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) has a `title` and `slug` of `ARIA/NameOfTheRole_role` and the [aria-labelledby](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute has a `title` of `aria-labelledby`.

### Top macros

A number of macro calls appear at the top of the content section. You should update or delete them according to the advice below:

- \\{{ariaref}}—generates a suitable ARIA sidebar, depending on what tags are included on the page.

### Statuses

Do not add or edit status keys manually.
To include the (appropriate) feature status key — [**experimental**](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**deprecated**](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated), or **non-standard** — see the section ["How to add or update feature statuses"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

### Specifications

In the value of the `spec-urls` front matter metadata key, update the URLs to point to the fragment IDs for the correct sections from the following specifications:

- [ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

Additional resources:

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)

## Page template

The summary paragraph—start by naming the role or attribute and saying what it does. This should ideally be one or two short sentences. This content appears as a tool tip on links to this page, so craft it well.

```html
<!-- Insert code block showing common use cases -->
```

(Optional) Include a short description of the preceding example.

## Description

Include a complete description of the attribute or role.

### Associated ARIA roles, states, and properties

- Name of associated roles
  - : Explanation of requirement, link to features pages.
- Name of associated attribute(s)
  - : Explanation of requirement, link to attribute's pages, along with link to JS required to change the value, if appropriate.

### Keyboard interactions

### Required JavaScript features

- Required event handlers
  - : Explanation of each
- Changing attribute values
  - : explanation of each

> [!NOTE]
> Include a note about semantic alternatives to using this role or attribute. The first rule of ARIA use is that you can use a native feature with the semantics and behavior you require already built in, instead of re-purposing an element and **adding** an ARIA role, state, or property to make it accessible, then do so. Then post full details in best practices section below.

## Examples

Note that we use the plural "Examples" even if the page only contains one example.

### A descriptive heading

Each example must have an H3 heading (`###`) naming the example. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise. For a longer description, use the paragraph after the heading.

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

> [!NOTE]
> Sometimes you will want to link to examples given on another page.
>
> **Scenario 1:** If you have some examples on this page and some more examples on another page:
>
> Include an H3 heading (`###`) for each example on this page and then a final H3 heading (`###`) with the text "More examples", under which you can link to the examples on other pages. For example:
>
> ```md
> ## Examples
>
> ### Using the fetch API
>
> Example of Fetch
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Scenario 2:** If you _only_ have examples on another page and none on this page:
>
> Don't add any H3 headings; just add the links directly under the H2 heading "Examples". For example:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org/).
> ```

## Accessibility concerns

Optionally, warn of any potential accessibility concerns that exist with using this property, and how to work around them. Remove this section if there are none to list.

## Best practices

Optionally, list any best practices that exist for this role. Remove the section if none exist.

### Added benefits

- Associated role
  - : If that role is a required parent, child or sibling, and what it does.

Any additional benefits this feature has for non-typical screen reader users, like Google or mobile speech recognition.

## Specifications

`\{{Specifications}}`

_Remember to remove the backticks and backslash to use this macro._

## Precedence order

What are the related properties, and in what order will this attribute or property be read (which property will take precedence over this one, and which property will be overwritten.)

## Screen reader support

## See also

Include links to reference pages and guides related to the current role or attribute. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
