---
title: 'ARIA: <code>aria-current</code> attribute'
slug: Web/Accessibility/ARIA/Attributes/aria-current
tags: 

  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-current
---

An element with `aria-current` state indicates that this element represents the current item within a container or set of related elements.

## Description

When you have related elements with one styled differently from the others to indicate to the sighted user that this is the current element within its group, the `aria-current` should be used to infom the assistive technology user what has been indicated via styling. The `aria-current` attribute indicates the element on which it is set, to a value other than `false`, represents the current item within a container or set of related elements. Only mark one element in a set of elements as current with `aria-current`.

Examples include:

- In a breadcrumb list, when a link within a set of pagination links is styled to indicate the user is currently on that page, `aria-current="page"` should be set.
- In a multi step based process with a step indicator such as a multi-page survey or a multi step checkout or registration process, when the current step icon is visually different to represent the current step, that icon's container should have `aria-current="step"` for assistive technology users who may not be able to "see" the visual different.

The `aria-current` attribute accepts a limited list of [values](#Values) including `page`, `step`, `location`, `date`, `time`, `true`, and `false` being enumerated. Any non-null string value not included in the list of allowed values is treated as if `aria-current="true"` were set, rather than the default of `false`. If the attribute is not present, is an empty string, is present with no value, or is set to `aria-current="false"` it is not exposed to the user.

When something is selected rather than current, such as a [`tab`](/en-US/docs/Web/Accessibility/Roles/Tab_role) in a [`tablist`](/en-US/docs/Web/Accessibility/Roles/Tablist_role), use [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) to indicate the currently-displayed tabpanel.

> **Note:** Don't use `aria-current` as a substitute for [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) in widgets when both would have similar meanings. 

## Example

The breadcrumb for the "current page" should have `aria-current="page"` set on it. 

```html
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li>
      <a href="../../../../../">
        Web technology for developers
      </a>
    </li>
    <li>
      <a href="../../../../">
        Accessibility
      </a>
    </li>
    <li>
      <a href="../../../">
        ARIA
      </a>
    </li>
    <li>
      <a href="../../">
        ARIA States and Properties
      </a>
    </li>
    <li>
      <a href="./" aria-current="page">
        ARIA: `aria-current` attribute
      </a>
    </li>
  </ol>
</nav>
```
If the element representing the current page in the breadcrumb was not a link, the `aria-current` is optional.

## Values

- `page`	
  - : Represents the current page within a set of pages.
- `step`	
  - : Represents the current step within a process.
- `location`	
  - : Represents the current location within an environment or context such as the image that is visually highlighted as the current component of a flow chart.
- `date`	
  - : Represents the current date within a collection of dates such as the current date within a calendar.
- `time`	
  - : Represents the current time within a set of times such as the current time within a timetable.
- `true`	
  - : Represents the current item within a set.
- `false` (default)	
  - : Does not represent the current item within a set.

## ARIAMixin API 

- {{domxref("Element.ariaCurrent")}}
  - : The  [`ariaCurrent`](/en-US/docs/Web/API/Element/ariaBusy) property, part of the {{domxref("ARIAMixin")}} interface, reflects the value of the `aria-current` attribute, which indicates whether an element is being modified.

## Associated roles

Usable in all roles; except in for elements with the role of [`gridcell`](/en-US/docs/Web/Accessibility/Roles/Gridcell_role), [`option`](/en-US/docs/Web/Accessibility/Roles/Option_role), [`row`](/en-US/docs/Web/Accessibility/Roles/Row_role) and [`tab`](/en-US/docs/Web/Accessibility/Roles/Tab_role) where [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) should be used

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-current","ARIA: aria-current Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)

<section id="Quick_links">

<ol><li><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">ARIA States &amp; Properties</a>
  {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Attributes")}}</li></ol>

</section>