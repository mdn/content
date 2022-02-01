---
title: 'aria: radiogroup role'
slug: web/accessibility/aria/roles/radiogroup_role
tags: 
  - accessibility
  - aria
  - roles
  - radiogroup
---

The `radiogroup` role is a group of radio buttons.

## Description

Radio groups are collections of radio buttons describing a set of related options. A `radiogroup` is a type of [`select`](/en-US/docs/Web/Accessibility/ARIA/Roles/select_role) list that can only have a single entry, or [`radio`](/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role), checked at any one time. 

It is recommended to create radio groups by using same-named HTML radio buttons, but if you must use ARIA roles and attributes instead of semantic HTML form controls, custom buttons can and should act like native HTML radio buttons. 

When using HTML's native radio button, [`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio),  the radio group is defined by giving each of radio buttons in the group the same `name`. Once a radio group is established, selecting any radio button in that group automatically deselects any currently-selected radio button in the same group.

Similarly, when using non-semantic elements as radio buttons, you must ensure your users can only select one radio button from the group at a time. When one item in the group is checked, having their [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute set to `true`, the previously checked item becomes unchecked, with its `aria-checked` attribute becoming `false`. The `aria-checked` attribute is set on the associated `radio` roles, not on the `radiogroup` itself.

Some radiogroup implementations initialize the set with all buttons in the unchecked state. Once a radio in a radiogroup is checked, it is generally not possible to return to an all-unchecked state.

The radiogroup must have an accessible name either by a visible label referenced by [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) or has a label specified with [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label). If elements provide additional information about the radio group, those elements are referenced by the `radiogroup` with the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) property.

### Associated WAI-ARIA roles, states, and properties

- [`radio`](/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role)
  - : One of a group of checkable buttons, in a `radiogroup`, where no more than one of the buttons can be checked at a time.
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) / [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : The radiogroup must have an accessible name either by a visible label referenced by `aria-labelledby` or has a label specified with `aria-label`.
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 
  - : Reference to element providing additional information about the radio group
- [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required)
  - : Indicates that one `radio` within the group must have `aria-checked="true"` set before the form may be submitted.
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
  - : Identifies the element that provides an error message for the radiogroup, if there is an error. That message should be hidden while not relevant. 

### Keyboard interactions

For radio buttons in a radio group that is NOT in a toolbar, the following keyboard interactions must be supported:

| Key(s) | Action |
| --------------------------   | --------------------------|
| <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd> |  Move focus into and out of the radiogroup. When focus moves into a radio group, if a radio button is checked, focus is set on the checked button. If none of the radio buttons are checked, focus is set on the first radio button in the group. |
|<kbd>Space</kbd>  | Checks the focused radio button if it is not already checked. |
|<kbd>Right Arrow</kbd> and <kbd>Down Arrow</kbd> | Move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button. |
|<kbd>Left Arrow</kbd> and <kbd>Up Arrow</kbd> | move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button.|

Arrow keys are used to navigate among elements of a toolbar. When a radio group is nested inside a toolbar, users need to be able to navigate among all toolbar elements, including the radio buttons, without changing which radio button is checked. So, when navigating through a radio group in a toolbar with arrow keys, the button that is checked does not change. Rather, when inside a toolbar, the <kbd>Space</kbd> and <kbd>Enter</kbd> keys check the focused radio button if it is not already checked, and <kbd>Tab</kbd> moves focus into and out of the tool bar.

### Required JavaScript and CSS features

Use the  `[aria-checked="true"]` attribute selector to style the checked state of checked radio buttons.  Use CSS `:hover` and `:focus` pseudo-classes for styling visual keyboard focus and hover.The focus and hover effect should encompass both the radio button and label to make it easier to perceive which option is being chosen and to indicate that clicking either the label or button will activate the radio button. Make sure to also change the cursor to a pointer when hovering over the radio button to help people identify the labels and radios as interactive elements.

## Examples

The basic set up for a `radiogroup` using non-semantic ARIA roles instead of semantic HTML is as follows:

```html
<div role="radiogroup" aria-labelledby="question">
  <div id="question">
    Which is the best color?</div>
  <ul id="radioGroup">
    <li>
      <span id="colorOption_0" tabindex="0"
        role="radio" aria-checked="false" aria-labelledby="purple"></span>
      <span id="purple">Purple</span>
    </li>
    <li>
      <span id="colorOption_1" tabindex="-1"
        role="radio" aria-checked="false"  aria-labelledby="aubergine"></span>
      <span id="aubergine">Aubergine</span>
    </li>
    <li>
      <span id="colorOption_2" tabindex="-1"
        role="radio" aria-checked="false" aria-labelledby="magenta"></span>
      <span id="magenta">Magenta</span>
    </li>
    <li>
      <span id="colorOption_3" tabindex="-1"
        role="radio" aria-checked="false" aria-labelledby="all"></span>
      <span id="all">All of the above</span>
    </li>
  </ul>
</div>
```

This could have been written using semantic HTML, which requires no CSS or JavaScript:

```html
<fieldset>
  <legend>Which is the best color?</legend>
  <ul>
    <li>
      <input name="colorOption" type="radio" id="purple">
      <label for="purple">Purple</label>
    </li>
    <li>
      <input name="colorOption" type="radio" id="aubergine">
      <label for="aubergine">Aubergine</label>
    </li>
    <li>
      <input name="colorOption" type="radio" id="magenta">
      <label for="magenta">Magenta</label>
    </li>
    <li>
      <input name="colorOption" type="radio" id="all">
      <label for="all">All of the above</label>
    </li>
  </ul>
</fieldset>
```

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#radiogroup","ARIA: radiogroup role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices","#aria_lh_radiogroup","radiogroup role")}} | {{Spec2('ARIA Authoring Practices')}} |

## See Also

- HTML {{HTMLElement('fieldset')}} element
- HTML {{HTMLElement('input/radio', '&lt;input type="radio">')}} radio button element
- [ARIA `radio` role](/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
- [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required)