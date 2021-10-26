---
title: 'ARIA: aria-describedby attribute'
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

The `aria-describedby` attribute is used to list the IDs of the elements that describe the object, establishing a relationship between widgets or groups and the text that describes them. 

The `aria-describedby` attribute is very similar to [`aria-labelledby`](../aria-labelledby/) attribute; while the `aria-labelledby` lists the ids of the labels or elements that describe the essence of an object, while the `aria-describedby` lists the ids of the descriptions, or elements providing more information that the user might need. Both `aria-labelledby` and `aria-describedby` reference other elements to calculate a text alternative, but a label should be concise, where a description is intended to provide more verbose information.

The `aria-describedby` attribute can be used to associate static text with form elements, widgets, groups of elements, panes, regions that have a heading, definitions, and more. It can be used with semantic HTML elements and with elements that have an ARIA role.

The elements linked via `aria-describedby` don't need to be visible.It is possible to reference an element even if that element is hidden. For example, a form control can have a description that is hidden by default, but can be revealed on request using a disclosure widget like a more information icon. The description could also be referenced from the form field directly with `aria-describedby`.

## Examples

Example 1: Application Landmark Descriptions

In the example below, an introductory paragraph describes a calendar application. `aria-describedby` is used to associate the paragraph with the application container.

```html
<div role="application" aria-labelledby="calendarDescription" aria-describedby="info">
    <h1 id="calendar">Calendar</h1>
    <p id="calendarDescription">
        This calendar shows the game schedule for the Boston Red Sox.
    </p>
    <div role="grid">
        ...
    </div>
</div>
```

Example 2: A Close Button

In the example below, a button that functions as a 'close' button on a dialog is described elsewhere in the document. The `aria-describedby` attribute is used to associate the description with the button.

```html
<button aria-label="Close" aria-describedby="closeDescription"
    onclick="myDialog.close()">X</button>
...
<p id="closeDescription">Closing this window will discard any information entered and
return you back to the main page</p>
```

> **Note:** The aria-describedby attributed is not designed to reference descriptions on an external resource—since it is an ID, it must reference an element in the same DOM document.

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