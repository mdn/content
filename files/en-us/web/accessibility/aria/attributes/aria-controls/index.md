---
title: aria-controls
slug: Web/Accessibility/ARIA/Attributes/aria-controls
tags:
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-controls
spec-urls: https://w3c.github.io/aria/#aria-controls
---
The global `aria-controls` property identifies the element (or elements) whose contents or presence are controlled by the element on which this attribute is set.

## Description

When an interactive or input control, be it a checkbox, radio button, tab panel, icon, toggles, or other, has an impact on another element in a document or application, the `aria-controls` attribute should be included to indicate which element or elements the user interface widget controls. The `aria-controls` attribute identifies the element (or elements) whose contents or presence are controlled by the element on which the attribute is set, regardless of what type of interaction initiates the impacted behavior.

A [combobox](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role) element has `aria-controls` set to a value that refers to the element that serves as the popup. The `aria-controls` only needs to be set when the popup is visible, but it is valid and easier to program to reference an element that is not visible.

Other examples of controls include:

- An accordion header button toggling the visibility of the accordion panel's content: the accordion header button would have `aria-controls` set to the ID of the element containing the accordion panel content.
- A link with an icon that shows and hides a menu: the link would have `aria-controls` set to the ID of the element containing the menu.
- A group of tabs that each display a different tabpanels: each element with [`role="tab"`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) has the property `aria-controls` referring to its associated [`tabpanel`](/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role).

## Example

In this tabs example, each tab controls one tabpanel:

```html
<div class="tab-interface">
  <div role="tablist" aria-label="Sample Tabs">
    <span role="tab" aria-selected="true" aria-controls="panel-1"
      id="tab-1" tabindex="0">
          First Tab
        </span>
    <span role="tab" aria-selected="false" aria-controls="panel-2"
      id="tab-2" tabindex="-1">
          Second Tab
        </span>
    <span role="tab" aria-selected="false" aria-controls="panel-3"
      id="tab-3" tabindex="-1">
          Third Tab
        </span>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Content for the first panel</p>
  </div>
  <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
    <p>Content for the second panel</p>
  </div>
  <div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
    <p>Content for the third panel</p>
  </div>
</div>
```

> **Note:** ARIA only modifies the accessibility tree for an element and how assistive technology presents the content to users. ARIA doesn't change anything about an elements function or behavior.

## Values

- `id` list
  - : Space separated list of one or more ID values referencing the elements being controlled by the current element

## ARIAMixin API

- {{domxref("Element.ariaBusy")}}
  - : The [`ariaControls`](/en-US/docs/Web/API/Element/ariaBusy) property, part of the {{domxref("ARIAMixin")}} interface, reflects the value of the `aria-controls` attribute, which indicates whether an element is being modified.

## Associated roles

Used in **ALL** roles.

## Specifications

{{Specifications}}

## See Also

- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
