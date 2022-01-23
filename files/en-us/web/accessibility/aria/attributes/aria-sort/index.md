---
title: 'aria-sort'
slug: Web/Accessibility/ARIA/Attributes/aria-sort
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-sort
  - Reference
---

The `aria-sort` attribute indicates if items in a table or grid are sorted in ascending or descending order.

## Description

If a grid or table provides sort functionality, the `aria-sort` attribute should be set to either `ascending` or `descending` (or `other`) on the header cell element for the sorted column or row. 

The `aria-sort` attribute is only set on the currently sorted column or row.  Set `aria-sort="ascending"` to indicate the data cells in the column or row are sorted in ascending order. If the sort order is reversed, toggle the value to `aria-sort="descending"`. When a different column or row becomes sorted, the single `aria-sort` attribute is moved to the header cell for the newly sorted column or row with the appropriate value for the sort order.

The `aria-sort` attribute should only be added to a single table or grid header at a time. The attribute is set to inform assistive technology users which column or row is sorted. It doesn't have any impact on the actual sort order.

## Examples

This table loads with the last name column sorted in ascending order.

```html
<table>
  <caption>
    Steering Committee Members
  </caption>
  <thead>
    <tr>
      <th>
        <button>
          First Name
        </button>
      </th>
      <th aria-sort="ascending">
        <button>
          Last Name
        </button>
      </th>
      <th>
        <button>
          Company
        </button>
      </th>
      <th>
        Email
      </th>
    </tr>
  </thead>
  ... <!-- the <tbody> -->
</table>
```

If the user clicks on the last name button, [`aria-pressed="true"`](/en-us/web/accessibility/aria/attributes/aria-pressed) would be added to the {{HTMLElement('button')}} element and the `aria-sort` value would be toggled to `"descending"` with JavaScript. If the user clicks on a different header button, the `aria-sort` button would be removed `aria-sort` from the last name header to be placed on the clicked button's {{HTMLElement('th')}} parent.

We provided instructions in the caption for assistive technology who may not see the down arrows that we would add with CSS targeting the  `th[aria-sort="ascending"]` and `th[aria-sort="descending"]` seletors.

## Values

- `ascending`
  - : Items are sorted in ascending order by this column.
- `descending`	
  - : Items are sorted in descending order by this column.
- `none` (default)
  - : There is no defined sort applied to the column.
- `other`	
  - : A sorting algorithm other than ascending or descending has been applied.

## ARIAMixin API 

- {{domxref("Element.ariaSort")}}
  - : The  [`ariaSort`](/en-US/docs/Web/API/Element/ariaSort) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-sort` attribute.
- {{domxref("ElementInternals.ariaSort")}}
  - : The  [`ariaSort`](/en-US/docs/Web/API/ElementInternals/ariaSort) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-sort` attribute.

## Associated roles

Used in roles: 

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-sort","ARIA: aria-sort Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [Sortable table example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/table/sortable-table.html) -W3C
- [`aria-pressed`](en-US/docs/Web/Accessibility/aria/Attributes/aria-pressed)
- The {{HTMLElement('th')}} element

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
