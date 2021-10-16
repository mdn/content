---
title: ARIA page template
slug: MDN/Structures/Page_types/ARIA_Page_Template
tags:
  - CSS
  - Property
  - Reference
  - Template
---
{{MDNSidebar}}

## Page includes

### Title and slug

An ARIA role page should have a _title_ and _slug_ of *ARIA:Name*Of*TheRole*. For example, the [button role](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) has a _title_ and _slug_ of _ARIA/NameOfTheRole_role_ and the [aria-labelledby ](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)attribute has a title of _ARIA-labelledby Attribute._

### Top macros

A number of macro calls appear at the top of the content section. You should update or delete them according to the advice below:

- \\{{deprecated_header}}—generates a **Deprecated** banner that indicates the technology is [deprecated](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete). If it isn't, then you can remove the macro call.
- \\{{ariaref}}—generates a suitable ARIA sidebar, depending on what tags are included on the page.

### Tags

In ARIA role or attribute subpages, you need to include the following tags (see the _Tags_ section at the bottom of the editor UI): **ARIA**, **Reference**, **ARIA Role** or **ARIA Attribute**, _the name of the Role or Attribute_ (e.g. **ARIA button** or **aria-labelledby**), **ARIA widget,** **Experimental** (if the role or attribute is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)), and **Deprecated** (if it is [deprecated](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete)).

### Specifications

Update the fragment link within the following specifications to the correct section:

- ARIA: https\://www\.w3.org/TR/wai-aria-1.1/
- ARIA Authoring Practices: https\://www\.w3.org/TR/wai-aria-practices-1.1/

Additional resources:

- Accessibility Object Model: https\://wicg.github.io/aom/spec/
- ARIA in HTML: https\://w3c.github.io/html-aria/

## Page template

The summary paragraph—start by naming the role or attribute and saying what it does. This should ideally be 1 or 2 short sentences. This content appears as a tool tip on links to this page, so craft it well.

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

> **Note:** Include a note about semantic alternatives to using this role or attribute. The first rule of ARIA use is that you can use a native feature with the semantics and behavior you require already built in, instead of re-purposing an element and **adding** an ARIA role, state, or property to make it accessible, then do so. Then post full details in best practices section below.

## Examples

Fill in a simple example that shows a typical usage of the property, then perhaps some more complex examples. For more information, see our guide on how to add [code examples](/en-US/docs/MDN/Structures/Code_examples).

```html
my code block
```

And/or include a list of links to useful code samples that live elsewhere:

- x
- y
- z

## Accessibility concerns

Optionally, warn of any potential accessibility concerns that exist with using this property, and how to work around them. Remove this section if there are none to list.

## Best practices

Optionally, list any best practices that exist for this role. Remove the section if none exist.

### Added benefits

- Associated role
  - : If that role is a required parent, child or sibling, and what it does.

Any additional benefits this feature has for non-typical screen reader users, like Google or mobile speech recognition.

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#direct-document-fragment-link","NameOfRoleOrAttribute")}}                         | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices","#direct-document-fragment-link","NameOfRoleOrAttribute")}} | {{Spec2('ARIA Authoring Practices')}} |

## Precedence order

What are the related properties, and in what order will this attribute or property be read (which property will take precedence over this one, and which property will be overwritten.

## Screen reader support

## See also

- Include list of
- other links related to
- this role or attribute that might
- be useful
