---
title: aria-autocomplete
slug: Web/Accessibility/ARIA/Attributes/aria-autocomplete
page-type: aria-attribute
spec-urls:
  - https://w3c.github.io/aria/#aria-autocomplete,
  - https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-both/
---

{{AccessibilitySidebar}}

The `aria-autocomplete` attribute indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role), or [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role) and specifies how predictions will be presented if they are made.

## Description

Autocompletion is user interface feature wherein inline suggestions are made as a user types in an input. Suggested text for completing the value of the field dynamically appears in the field after the input cursor, and the suggested value becomes the value if the user performs an action, such as tabbing, that causes focus to leave the field.

The `aria-autocomplete` property describes the type of autocompletion interaction model a textbox, searchbox, or combobox will use when dynamically helping users complete text input. It distinguishes between two models: the **inline** model (`aria-autocomplete="inline"`), which presents a single predicted value and the **list** model (`aria-autocomplete="list"`), which presents a collection of possible values in a separate element that pops up next to or below the text input, similar to a {{HTMLElement('datalist')}}. A third value, `aria-autocomplete="both"` is for when the interface will present a list while also including a predicted value. The default is `none`, meaning the textbox, searchbox, or combobox will not provide an auto complete value.

The `aria-autocomplete` property only describes the type of predictive behavior for an input element for assistive technologies; it doesn't provide the functionality. The actual autocompletion should be provided using HTML attributes or JavaScript.

If the suggested autocomplete value provides suggested values that aren't dependent on the input provided by the user, consider omitting autocomplete for everyone. For example, a searchbox input displaying unfiltered recent search terms may be helpful to a marketing team on an e-commerce site, but likely isn't helpful for the screen reader user. When it is best to not specify a value for `aria-autocomplete` or to set the value to the `none` default, likely your non-assistive technology users also don't need the experience.

When implementing autocomplete functionality, ensure the suggested portion of the value is presented as selected text to enable distinguishing between a user's input and the suggestion. Make sure that when the suggested value is not the desired value, users can easily delete the suggestion or replace it by continuing to type.

When implementing a list of values, DOM focus should remain on the text input while the suggestion list is displayed.

- include [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) with the value of the id of the suggested list of values.
- include [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) matching the role of the element that contains the collection of suggested values.
- manage focus, if required, including using [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) if the collection container supports.
- use the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) state on the element with role [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role) to communicate that the list is displayed.

If an autocomplete list value is automatically accepted when the field loses focus, the list must be contained in a role that supports `aria-activedescendant`, with the value of `aria-activedescendant` on the input field dynamically adjusted to refer to the element containing the selected suggestion.

## Values

- `none` (default)
  - : When a user is providing input, no automatic suggestion is displayed.
- `inline`
  - : `aria-autocomplete="inline"` text suggesting one way to complete the provided input may be dynamically inserted after the caret.
- `list`
  - : `aria-autocomplete="list"` When a user is providing input, an element containing a collection of values that could complete the provided input may be displayed.
- `both`
  - : `aria-autocomplete="both"` an input to offer both models at the same time. When a user is providing input, an element containing a collection of values that could complete the provided input may be displayed. If displayed, one value in the collection is automatically selected, and the text needed to complete the automatically selected value appears after the caret in the input.

## Associated roles

Used in roles:

- [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role) role
- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role) role
- inherits from [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role) role

## Specifications

{{Specifications}}

## See also

- [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role) role
- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role) role
- [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role) role
- {{HTMLElement('datalist')}} element and the [`<input> list` attribute](/en-US/docs/Web/HTML/Element/input#list)
- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) attribute
- [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) attribute
- [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) attribute
- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) attribute
- [Editable Combobox With Both List and Inline Autocomplete Example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/combobox/combobox-autocomplete-both.html)
- [Event.ariaAutoComplete](/en-US/docs/Web/API/Element/ariaAutoComplete)
