---
title: 'aria-describedby'
slug: Web/Accessibility/ARIA/Attributes/aria-describedby
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-describedby
  - Reference
---

The global `aria-describedby` attribute identifies the element (or elements) that describes the element on which the attribute is set.

## Description

The `aria-describedby` attribute is used to list the `id`s of the elements that describe the object, establishing a relationship between widgets or groups and the text that describes them.

The `aria-describedby` attribute can be used to associate static text with form elements, widgets, groups of elements, panes, regions that have a heading, definitions, and more. It can be used with semantic HTML elements and with elements that have an ARIA role.

The `aria-describedby` attribute is very similar to [`aria-labelledby`](../aria-labelledby/) attribute; while the `aria-labelledby` lists the `id`s of the labels or elements that describe the essence of an object, the `aria-describedby` lists the `id`s of the descriptions, or elements providing more information that the user might need. Both `aria-labelledby` and `aria-describedby` reference other elements to calculate a text alternative, but a label should be concise, where a description is intended to provide more verbose information.

The elements linked via `aria-describedby` don't need to be visible. It is possible to reference an element even if that element is hidden. For example, a form control can have a description that is hidden by default this is revealed on request using a disclosure widget like a "more information" icon. The sited user clicks on the icon; for assistive technology users the description is referenced from that form field directly with `aria-describedby`.

The `aria-describedby` property is appropriate when the associated content contains descriptions experienced as plain text. If the content contains a large amount of content, useful semantics, or has a complex structure requiring user navigation, use [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details). `aria-details` allows assistive technology users to visit the associated structured content and provides additional navigation commands, making it easier to understand the structure, or to experience the information in smaller pieces.

> **Note:** The `aria-describedby` content should only be a text string. If there are important underlying semantics in the content, consider using [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details).

## Example

```html
<button aria-describedby="trash-desc">Move to trash</button>
...
<p id="trash-desc">Items in the trash will be permanently removed after 30 days.</p>
```

<!--## Examples

### Example 1: Application Landmark Descriptions

In the example below, the introductory paragraph describing the calendar application only appears after all the content. `aria-describedby` is used to associate the paragraph with the application container making it "visible" to those who might otherwise not be able to quickly scan the document to see the description.

```html
<div role="application" aria-labelledby="calendarDescription" aria-describedby="info">
    <h1 id="calendar">2022 Calendar</h1>
    <div role="grid">
        ...
    </div>
    <p id="calendarDescription">
        Game schedule for the Boston Red Sox 2022 Season.
    </p>
</div>
```

### Example 2: A Close Button

In the example below, a button that functions as a 'close' button on a dialog is described elsewhere in the document. While a close button is a common occurence and doesn't normally need a description, the possibility of losing data may be something you do want to warn about. The `aria-describedby` attribute is used to associate the description with the button.

```html
<button aria-label="Close" aria-describedby="warning">X</button>
...
<p id="warning">Closing this window will discard any information entered.</p>
```
-->
> **Note:** The aria-describedby attributed is not designed to reference descriptions on an external resource—since it is an `id`, it must reference an element in the same DOM document.

## Values

- ID reference list
  - : takes as its value the `id` or space separated list of ids of elements that describe the current element.

## Associated roles

Used in **ALL** roles.

## Specifications

| Specification | Status |
| ------------- | ------  |
| {{SpecName("ARIA","#aria-describedby","ARIA: aria-describedby Attribute")}}  | {{Spec2('ARIA')}} |
| {{SpecName("ARIA Authoring Practices 1.2","#describing_with_aria-describedby","describing with aria-describedby")}} | {{Spec2('ARIA Authoring Practices')}} |

## See Also

- {{HTMLElement('label')}}
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>