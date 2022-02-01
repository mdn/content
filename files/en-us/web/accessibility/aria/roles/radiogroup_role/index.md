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

When using HTML's native radio button, [`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio),  the radio group is defined by giving each of radio buttons in the group the same name. Once a radio group is established, selecting any radio button in that group automatically deselects any currently-selected radio button in the same group.

Similarly, when using non-semantic elements as radio buttons, you must ensure your users can only select one radio button from a group at a time. When one item in the group is checked, having their [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute set to `true`, the previously checked item becomes unchecked, with its `aria-checked` attribute becoming `false`. 

Some radiogroup implementations initialize the set with all buttons in the unchecked state. Once a radio in a radiogroup is checked, it is generally not possible to return to an all-unchecked state.

The `aria-checked` attribute is set on the associated `radio` roles, not on the `radiogroup` itself.

The radiogroup must have an accessible name either by a visible label referenced by [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) or has a label specified with [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label). If elements providing additional information about the radio group, those elements are referenced by the radiogroup element with the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) property.

### Associated WAI-ARIA roles, states, and properties

- [`radio`](/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role)
  - : 
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
  - : 
- [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
  - : 
- [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
  - : 
- [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required)
  - : 

### Keyboard interactions

| Key(s) | Action |
| --------------------------   | --------------------------|
| <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd> |  Move focus into and out of the radiogroup. When focus moves into a radio group, if a radio button is checked, focus is set on the checked button. If none of the radio buttons are checked, focus is set on the first radio button in the group. |
|<kbd>Space</kbd>  | Checks the focused radio button if it is not already checked. |
|<kbd>Right Arrow</kbd> and <kbd>Down Arrow</kbd> | Move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button. |
|<kbd>Left Arrow</kbd> and <kbd>Up Arrow</kbd> | move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button.|

### Required JavaScript and CSS features

Use the  `[aria-checked="true"]` attribute selector to style the checked state of checked radio buttons.  Use CSS `:hover` and `:focus` pseudo-classes for styling visual keyboard focus and hover.The focus and hover effect should encompass both the radio button and label to make it easier to perceive which option is being chosen and to indicate that clicking either the label or button will activate the radio button. Make sure to also change the cursor to a pointer when hovering over the radio button to help people identify the labels and radios as interactive elements.

## Examples

```html
<div role="radiogroup" aria-labelledby="question">
  <div id="question" >
    Which is the best color?</div>
  <div id="radioGroup">
    <span id="colorOption_0" tabindex="0"
      role="radio" aria-checked="false" aria-labelledby="purple"></span>
    <span id="purple">Purple</span>

    <span id="colorOption_1" tabindex="-1"
      role="radio" aria-checked="false"  aria-labelledby="aubergine"></span>
    <span id="aubergine">Aubergine</span>

    <span id="colorOption_2" tabindex="-1"
      role="radio" aria-checked="false" aria-labelledby="magenta"></span>
    <span id="magenta">Magenta</span>

    <span id="colorOption_3" tabindex="-1"
      role="radio" aria-checked="false" aria-labelledby="all"></span>
    <span id="all">All of the above</span>
  </div>
</div>
```

## Accessibility Concerns

## Best Practices

### Prefer HTML

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#radiogroup","ARIA: radiogroup role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices","#aria_lh_radiogroup","radiogroup role")}} | {{Spec2('ARIA Authoring Practices')}} |

## See Also
