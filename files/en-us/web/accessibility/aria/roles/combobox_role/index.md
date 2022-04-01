---
title: 'ARIA: combobox role'
slug: Web/Accessibility/ARIA/Roles/combobox_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - composite widget role
  - combobox
---

The `combobox` identifies an element as an `input` that controls another element, such as a `listbox` or `grid`, that can dynamically pop up to help the user set the value of the `input`.

## Description

A `combobox` is a composite widget that combines a named input field with a popup providing possible values for that input field. The purpose of a this widget is to improve user experience by helping the user select a value without having to type in the complete value and, optionally depending whether supported values are limited, preventing the user from entering invalid or otherwise unsupported values. 

The combobox `input` can either be a single-line text field that supports editing and typing, similar to a HTML {{HTMLElement('input')}} with a {{HTMLElement('datalist')}}, or an element that only displays the current value of the combobox. 

Typically, the initial state of a combobox is collapsed, with `aria-expanded="false"` set. In the collapsed state, only the combobox element and a separate, optional, popup control button are visible. The [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded), with the value set to `false`, is required when collapsed, because it indicates to assistive technologies that the widget is expandable.

The combobox is said to be expanded when both the combobox element showing its current value and its associated popup element are visible. When expanded, `aria-expanded="true"` must be set.

The popup element associated with a combobox can be either a [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role), [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), or [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) element, with `listbox` being the default type. Comboboxes actually have an implicit [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) value of `listbox`. If the combobox popup element is a `tree`, `grid`, or `dialog` (anything other than a `listbox`), the `aria-haspopup` attribute is required. The value of `aria-haspopup` must be either the `tree`, `grid`, `dialog`, or `listbox` role. Note that for this property, `true` means `menu`, so make sure that the value corresponds to the role of the popup, not a Boolean value. 

When the popup is displayed, the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) attribute on the combobox element is set to the {{HTMLattrXRef('id')}} of the `listbox`, `tree`, `grid`, or `dialog` popup element of the combobox.


If the UI includes an visible control, such as an icon, that allows the visibility of the popup to be controlled via pointer and touch events, that control should be a {{HTMLElement('button')}}, {{HTMLElement('input')}} of type `button`, or a [`button`](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) role element with a {{HTMLattrXRef('tabindex')}} of `-1`. The button should be focusable but not included in keyboard tab sequence. It should also not be a descendant of the element with role `combobox`. 

To be keyboard accessible, the must be keyboard support for moving focus between the combobox element and elements contained in the popup must be programmed in.  One common convention is that <kbd>Down Arrow</kbd> moves focus from the input to the first focusable descendant of the popup element. 

If the popup element supports `aria-activedescendant`, in lieu of moving focus, such keyboard mechanisms can control the value of `aria-activedescendant` on the combobox element. When a descendant of the popup element is active, authors MAY set `aria-activedescendant` on the combobox to a value that refers to the active element within the popup while focus remains on the combobox element.

User agents MUST expose the value of elements with role combobox to assistive technologies. The value of a combobox is represented by one of the following:

If the combobox element is an {{HTMLElement('input')}} element, the value of the combobox is the input's value. Otherwise, the value of the combobox comes from its descendant elements.

A combobox is an input that controls another element, such as a listbox or grid, that can dynamically pop up to help the user set the value of the input. The popup can be a [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role), or [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role).

A combobox is a type of composite user interface widgets, and is often a container that manages other, contained widgets.

combobox

A combobox only has one required attribute: [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded). Generally, it also has several other attributes including `aria-autocomplete`, `aria-haspopup`, `aria-controls` and `aria-activedescendant`.

If the `combobox` supports text input and provides autocompletion behavior, set `aria-autocomplete` on the combobox element to the value that corresponds to the provided behavior: `inline`, `list`, or `both`. The `aria-autocomplete` attribute indicates that inputting text will trigger display of one or more predictions of the user's intended value for the combobox and specifies how the predictions will be presented when made.

[`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) is used to identify the currently active element when DOM focus is on a combobox.

Every `combobox` must have an accessible name.

### Associated WAI-ARIA roles, states, and properties

- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Required. Identifies whether the combobox is open (`true`) or closed (`false`).

### Keyboard interactions

- <kbd>Down Arrow</kbd>

  - : Moves focus to the next option, or to the first option if none was selected.

- <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> (Optional)

  - : If the popup is available but not displayed, displays the popup without moving focus.

- <kbd>Up Arrow</kbd>

  - : Moves focus to the previous option. Moving focus to the first option if focus was originally on the last option.

- <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> (Optional)

  - : If the popup has focus, returns focus to the combobox, otherwise it closes the popup.

- <kbd>Enter</kbd>

  - : If the combobox is editable and an autocomplete suggestion is selected in the popup, accepts the suggestion either by placing the input cursor at the end of the accepted value in the combobox or by performing a default action on the value. For example, in a messaging application, the default action may be to add the accepted value to a list of message recipients and then clear the combobox so the user can add another recipient.

### Required JavaScript features

## Examples

```html
<label for="jokes">Pick what type of jokes you like</label>
<div class="combo-wrap">
  <input type="text" id="jokes" role="combobox" aria-owns="joketypes" aria-autocomplete="list" aria-expanded="false" data-active-option="item1" aria-activedescendant="item1">
  <span aria-hidden="true" data-trigger="multiselect"></span>
  <ul id="joketypes" role="listbox">
    <li class="active" role="option" id="item1">Puns</li>
    <li class="option" role="option" id="item2">Riddles</li>
    <li class="option" role="option" id="item3">Observations</li>
    <li class="option" role="option" id="item4">Knock-knock</li>
    <li class="option" role="option" id="item5">One liners</li>
  </ul>
</div>
```

## Accessibility Concerns

## Best Practices

### Prefer HTML

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#combobox","ARIA: combobox role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#aria_lh_combobox_role","combobox role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## See also

- HTML {{HTMLElement('label')}} element
- HTML {{HTMLElement('select')}} element
- HTML {{HTMLElement('option')}} element
- HTML {{HTMLElement('input')}} element
- [ARIA: `listbox` role](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [ARIA: `option` role](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role)
- [ARIA: `list` role](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `listitem` role](/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [ARIA Best Practices – Combobox](https://www.w3.org/TR/wai-aria-practices/#Combobox)
- [ARIA Role Model – Combobox](https://www.w3.org/TR/wai-aria-1.1/#combobox)
- [Accessible combobox module](https://dequelabs.github.io/combobo/demo/) examples by Deque

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
