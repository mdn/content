---
title: 'ARIA: toolbar role'
slug: Web/Accessibility/ARIA/roles/toolbar_role
tags: 

  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - document structure role
  - NeedsContent
---

The `toolbar` role defines the containing element as a collection of commonly used function buttons or controls represented in a compact visual form.

## Description

A toolbar is a collection of commonly used controls, such as buttons or checkboxes, grouped together in a compact visual form. The `toolbar` role can be used to communicate the presence and purpose of such a grouping to screen reader users. Grouping controls into toolbars can also help reduce the number of tab stops for keyboard users. Only use the `toolbar` role to group 3 or more controls.

The toolbar is commonly a subset of functions found in a `menubar` as a way to reduce user effort. If you have more than one toolbar in a menubar, each toolbar requires a label.

If you are creating a toolbar, you need to implement focus management and keyboard interactions within the toolbar, handling when toolbar keyboard interactions are the same as native control keyboard interactions.

If any of the otherwise interactive elements within the toolbar are temporarily disabled, consider letting them remain focusable so screen reader users can be made aware of their presence.


In horizontal toolbars, Left Arrow and Right Arrow navigate among controls. Up Arrow and Down Arrow can duplicate Left Arrow and Right Arrow, respectively, or can be reserved for operating controls, such as spin buttons that require vertical arrow keys to operate.
In vertical toolbars, Up Arrow and Down Arrow navigate among controls. Left Arrow and Right Arrow can duplicate Up Arrow and Down Arrow, respectively, or can be reserved for operating controls, such as horizontal sliders that require horizontal arrow keys to operate.

Avoid including controls whose operation requires the pair of arrow keys used for toolbar navigation. If unavoidable, include only one such control and make it the last element in the toolbar. For example, in a horizontal toolbar, a textbox could be included as the last element.

Example



### Associated WAI-ARIA roles, states, and properties

- `aria-orientation`
  - : Elements with the role toolbar have an implicit `aria-orientation` value of horizontal.

- `aria-labelledby` / `aria-label`
  - : If the toolbar has a visible label, referenc it by ID with the `aria-labelledby` attribute. Otherwise, the provide an  `aria-label`. If there is more than one toolbar in a menu, naming is required.

### Keyboard interactions

Implement focus management so the keyboard tab sequence includes one stop for the toolbar and arrow keys move focus among the controls in the toolbar.

- <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>
  - : Move focus into and out of the toolbar. When focus moves into a toolbar:

    * If focus is moving into the toolbar for the first time, focus is set on the first control that is not disabled.
    * If the toolbar has previously contained focus, focus is optionally set on the control that last had focus. Otherwise, it is set on the first control that is not disabled.

- <kbd>Home</kbd> (Optional)
  - : Moves focus to first element.

- <kbd>End</kbd> (Optional)
  - : Moves focus to last element.


#### Horizontal toolbar 

Elements with the role toolbar have an implicit `aria-orientation` value of horizontal. If the toolbar indeed has this orientation, the following keyboard interactions need to be implemented:

- <kbd>Left Arrow</kbd> (For a horizontal toolbar (the default)
  - : Moves focus to the previous control. Optionally, focus movement may wrap from the first element to the last element.

- <kbd>Right Arrow</kbd> (For a horizontal toolbar (the default) 
  - : Moves focus to the next control. Optionally, focus movement may wrap from the last element to the first element.

In toolbars with multiple rows of controls, allow the left and right arrows to wraps from row to row, leaving the option of reserving vertical arrow keys for operating controls, such as navigating among radios buttons, or incrementing/decrementing a numeric spinner.

#### Vertical toolbar

If the toolbar is vertical, ensure `aria-orientation="vertical"` is set, and the following keyboard interactions are implemented: 

- <kbd>Down Arrow</kbd> (For a horizontal toolbar (the default)
  - : Moves focus to the previous control. Optionally, focus movement may wrap from the first element to the last element.

- <kbd>Up Arrow</kbd> (For a horizontal toolbar (the default) 
  - : Moves focus to the next control. Optionally, focus movement may wrap from the last element to the first element.

### Required JavaScript features

Implement focus management so the keyboard tab sequence includes one stop for the toolbar and arrow keys move focus among the controls in the toolbar. When tabbing into the toolbar, focus returns to the control that last had focus. 

Focus movement inside the toolbar has to be managed. On load, the first element in the tabbing sequence within the toolbar has `tabindex="0"` with `tabindex="-1"` set on all other focusable elements within the toolbar. Depending on the [keyboard interaction], the element receiving focus gets set to `tabindex="0"` and the element that just lost focus gets switched back to `tabindex="-1"`. Set focus, `element.focus()`, on the element that has `tabindex="0"`. This is called "roving tabindex".  A benefit of using roving tabindex to manage focus is that the browser will scroll the newly focused element into view.

If the design calls for a specific element to be focused the next time the user moves focus into the toolbar with <kbd>Tab</kbd> or <kbd>Shift + Tab</kbd>, check if that target element has `tabindex="0"` when toolbar loses focus. 



## Examples

## Accessibility Concerns

## Best Practices

### Prefer HTML

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#toolbar","ARIA: toolbar role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#toolbar","toolbar role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |


## See Also


<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>