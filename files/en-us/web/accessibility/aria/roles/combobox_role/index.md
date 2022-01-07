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
  - NeedsContent
---

{{draft}}

The `combobox` role is for input that controls another element, such as a listbox or grid, that can dynamically pop up to help the user set the value of the input.

## Description

A combobox is an input that controls another element, such as a listbox or grid, that can dynamically pop up to help the user set the value of the input. The popup can be a [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role), or [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role).



### Associated WAI-ARIA roles, states, and properties

- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)

  - : Include with a value of `true` or `false` depending on whether the combobox is open (true) or closed (false).

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

