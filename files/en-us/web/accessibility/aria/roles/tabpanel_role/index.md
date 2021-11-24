---
title: 'ARIA: tabpanel role'
slug: Web/Accessibility/ARIA/Roles/tabpanel_role
tags:
  - ARIA
  - ARIA Role
  - ARIA Tab
  - ARIA Tabpanel
  - ARIA widget
  - Reference
  - Needscontent
---
{{draft}}

The ARIA tabpanel role indicates

```html
TBD
```

## Description

An element with the `tabpanel` role

### Associated Roles and Attributes


### Keyboard interaction

| Key               | Action |
| ----------------- | ------ |
| <kbd>Tab</kbd>    |        |
| <kbd>→</kbd>      |        |
| <kbd>←</kbd>      |        |
| <kbd>Delete</kbd> |        |

### Required JavaScript features 

> **Note:** Include note about semantic alternatives to using this role or attribute. The first rule of ARIA use is you can use a native feature with the semantics and behavior you require already built in, instead of re-purposing an element and **adding** an ARIA role, state or property to make it accessible, then do so. Then post full details in best practices section below.

## Examples

Fill in a simple example that nicely shows a typical usage of the property, then perhaps some more complex examples (see our guide on how to add [code examples](/en-US/docs/MDN/Structures/Code_examples) for more information).

```html
<div role="tablist">
<div role="tab" aria-selected="true" aria-controls="tabpanel-id"
id="tab-id" tabindex="0">Tab label</div>
```

### Added benefits

Any additional benefits this feature has for non-typical screen reader users, like Google or mobile speech recognition.

## Specifications

| Specification                                                                        | Status                                           |
| ------------------------------------------------------------------------------------ | ------------------------------------------------ |
| {{SpecName("ARIA","#tabpanel","tabpanel")}}                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#tabpanel","tabpanel")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## Precedence order

What are the related properties, and in what order will this attribute or property be read, which property will take precedence over this one, and which property will be overwritten.


<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
