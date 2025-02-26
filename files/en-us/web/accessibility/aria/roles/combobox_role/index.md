---
title: "ARIA: combobox role"
slug: Web/Accessibility/ARIA/Roles/combobox_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#combobox,
  - https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
---

{{AccessibilitySidebar}}

The `combobox` role identifies an element as an `input` that controls another element, such as a `listbox` or `grid`, that can dynamically pop up to help the user set the value of that `input`.

## Description

A `combobox` is a composite widget that combines a named input field with a popup providing possible values for that input field. The purpose of this widget is to improve user experience by helping the user select a value without having to type in the complete value and, optionally depending whether supported values are limited, preventing the user from entering invalid or otherwise unsupported values.

The `combobox` role is set on input that controls another element, such as a listbox or grid, that can dynamically pop up to help the user set the value of the input.

The `combobox` input field can either be a single-line text field that supports editing and typing, similar to a HTML {{HTMLElement('input')}} with a {{HTMLElement('datalist')}}, or an element that only displays the current value of the combobox.

A WAI-ARIA combobox only has one attribute that is required that authors specify: [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded). However, it also has several other attributes which will be necessary to specify, depending on the combobox's implementation. These include [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup), [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls), [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant), and [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete).

Typically, the initial state of a combobox is collapsed, with `aria-expanded="false"` set. In the collapsed state, only the combobox element and, optionally a sibling button to invoke the popup, are visible. The [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded), with the value set to `false`, is required when collapsed, because it indicates to assistive technologies that the widget is expandable.

The combobox is in the expanded state when both the combobox element showing its current value and its associated popup element are visible. When expanded, `aria-expanded="true"` must be set.

The popup element associated with a `combobox` can be either a [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role), [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role), or [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) element.

Comboboxes have an implicit [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) value of `listbox`, so including this attribute is optional if the popup is a `listbox`. If the combobox popup element is a `tree`, `grid`, or `dialog` (anything other than a `listbox`), the `aria-haspopup` attribute is required. The value of `aria-haspopup` must be either the `tree`, `grid`, `dialog`, or `listbox` role. Note that for this property, `true` means `menu`, so make sure that the value corresponds to the role of the popup, not a Boolean value.

When a combobox's popup is displayed, ensure the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) attribute on the combobox element is set to the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of the popup `listbox`, `tree`, `grid`, or `dialog` element. This is how the relationship between the element with the `combobox` role and the popup it controls is indicated. (Note: In older ARIA specs, this was `aria-owns` rather than `aria-controls`, so you may see `aria-owns` in older combobox implementations. The `aria-owns` in the code should be updated to `aria-controls`!)

If the combobox UI includes a visible control, such as an icon, that allows the visibility of the popup to be controlled via pointer and touch events, that control should be a {{HTMLElement('button')}}, {{HTMLElement('input')}} of type `button`, or a [`button`](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) role element with a [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex) of `-1`. Doing so will allow the button to be focusable but not included in keyboard tab sequence. It must not be a descendant of the element with role `combobox`.

To be keyboard accessible, keyboard support for moving focus between the `combobox` input field element and elements contained in the popup `listbox`, `tree`, `grid`, or `dialog`, must be programmed in. One common convention is that <kbd>Down Arrow</kbd> moves focus from the input to the first focusable descendant of the popup element.

The [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) property can be used to identify the currently active element of the combobox popup, for instance an `option` within a popup `listbox`, for implementations where DOM focus remains on the combobox. If DOM focus does not remain on the combobox when its popup is invoked, but rather DOM focus moves into the popup, such as a dialog, then `aria-activedescendant` may not be necessary.

If the combobox element is an {{HTMLElement('input')}} element, the value of the combobox is the input's value. Otherwise, the value of the combobox comes from its descendant elements.

If the `combobox` supports text input and provides autocompletion behavior, set [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) on the combobox element to the value that corresponds to the provided behavior: `inline`, `list`, or `both`. The `aria-autocomplete` attribute indicates that inputting text will trigger display of one or more predictions of the user's intended value for the combobox and specifies how the predictions will be presented when made.

Every `combobox` must have an accessible name. If using an {{HTMLElement('input')}} element, the accessible name should come from the associated {{HTMLElement('label')}}. If not, if an appropriate label is visible in the content, provide the name via [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). In other words, if there is an element in the user interface that serves as a label for the `combobox` input field, include `aria-labelledby` as an attribute on the element with the role of `combobox`, and set the value of the attribute to the `id` of the labelling element or elements. If no visible label is present, use [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) instead. Not both.

### Associated WAI-ARIA roles, states, and properties

- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Required. Identifies whether the combobox is open (`true`) or closed (`false`).
- [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Implied. If omitted, defaults to `listbox`. Also supports `tree`, `grid`, or `dialog`. Identifies the combobox has having a popout, and indicates the type.

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

## Examples

```html
<label for="jokes">Pick what type of jokes you like</label>
<div class="combo-wrap">
  <input
    type="text"
    id="jokes"
    role="combobox"
    aria-controls="joketypes"
    aria-autocomplete="list"
    aria-expanded="false"
    data-active-option="item1"
    aria-activedescendant="" />
  <span aria-hidden="true" data-trigger="multiselect"></span>
  <ul id="joketypes" role="listbox" aria-label="Jokes">
    <li class="active" role="option" id="item1">Puns</li>
    <li class="option" role="option" id="item2">Riddles</li>
    <li class="option" role="option" id="item3">Observations</li>
    <li class="option" role="option" id="item4">Knock-knock</li>
    <li class="option" role="option" id="item5">One liners</li>
  </ul>
</div>
```

## Specifications

{{Specifications}}

## See also

- HTML {{HTMLElement('label')}} element
- HTML {{HTMLElement('select')}} element
- HTML {{HTMLElement('option')}} element
- HTML {{HTMLElement('input')}} element
- [ARIA: `listbox` role](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [ARIA: `option` role](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role)
- [ARIA: `list` role](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `listitem` role](/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [ARIA Best Practices – Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [ARIA Role Model – Combobox](https://www.w3.org/TR/wai-aria-1.2/#combobox)
- [Accessible combobox module](https://dequelabs.github.io/combobo/demo/) examples by Deque
