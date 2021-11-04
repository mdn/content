---
title: 'ARIA: switch role'
slug: Web/Accessibility/ARIA/Roles/switch_role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
  - On/Off
  - Reference
  - Switch
  - a11y
  - toggle
---
The ARIA **`switch`** role is functionally identical to the [checkbox](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role) role, except that instead of representing "checked" and "unchecked" states, which are fairly generic in meaning, the `switch` role represents the states "on" and "off."

This example creates a widget and assigns the ARIA `switch` role to it.

    <button type="button" role="switch" aria-checked="true"
        id="speakerPower" class="switch">
        <span aria-hidden="true">off</span>
        <span aria-hidden="true">on</span>
    </button>
    <label for="speakerPower" class="switch">Speaker power</label>

## Description

The ARIA **`switch`** role is identical to the [checkbox](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role) role, except instead of being "checked" or "unchecked", it is either "on" or "off."  Like the [checkbox](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role) role, the [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute is required. The two possible values are `true` and `false`. Unlike a `<checkbox>` or `role="checkbox"`, there is no `indeterminate` or `mixed` state. The `switch` role does not support the value `mixed` for the `aria-checked` attribute; assigning a value of `mixed` to a `switch` instead sets the value to `false`.

Assistive technologies may choose to represent `switch` widgets with a specialized presentation to reflect the notion of an on/off switch.

Since a switch is an interactive control, it must be focusable and keyboard accessible. If the role is applied to a non-focusable element, use the `tabindex` attribute to change this. The expected keyboard shortcut for toggling the value of a switch is the <kbd>Space</kbd> key. The developer is required to change the value of the `aria-checked` attribute dynamically when the switch is toggled.

### Associated ARIA roles, states, and properties

- [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute
  - : The `aria-checked` attribute is **required** when using the `switch` role, as it represents the current state of the widget that the `switch` role is applied to. A value of `true` represents the "on" state; `false` represents the "off" state; a value of `mixed` is not supported by the switch role, and is treated as `false`. The default value is `false`.
- [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) attribute
  - : The `aria-readonly` attribute is supported by the `switch` role. It indicates whether the widget's state is editable by the user. A value of `false` means that the user _can_ change the widget's state; a value of `true` means that the user _cannot_ change the widget's state. The default value is `false`.

### Required JavaScript features

- Handler for click events
  - : When the user clicks on the switch widget, a [click event ](/en-US/docs/Web/API/Element/click_event)is fired, which must be handled in order to change the state of the widget.
- Changing the `aria-checked` attribute
  - : When a click event is fired on the switch widget, the handler must change the value of the `aria-checked` attribute from `true` to `false`, or vice versa.

## Possible effects on user agents and assistive technology

When the `switch` role is added to an element, the {{Glossary("user agent")}} handles it like this:

- The element is exposed to the system's accessibility infrastructure as having the `switch` role.
- When the `aria-checked` attribute's value changes, an accessible event is fired using the system's accessibility API if one is available and it supports the `switch` role.
- All elements that are descendants of an element with the `switch` role applied to it are automatically assigned role `presentation`. This prevents elements that are used to construct the switch from being interacted with individually by assistive technologies. Text in these elements remains visible to the user agent and may be read or otherwise delivered to the user, unless it's expressly hidden using {{cssxref("display", "display: none")}} or `aria-hidden="true"`.

The assistive technology, if it supports the `switch` role, responds by doing the following:

- Screen readers should announce the element as a switch, optionally providing instructions as to how to activate the switch.

> **Note:** There are varying opinions on how assistive technologies should handle this role; the above is a suggested practice and may differ from other sources.

## Examples

The following examples should help you understand how to apply and use the `switch` role.

### Adding the switch role in ARIA

This simple example just creates a widget and assigns the ARIA `switch` role to it. The button is styled with an appearance reminiscent of an on/off power switch.

#### HTML

The HTML is fairly simple here. The switch is implemented as a {{HTMLElement("button")}} element which is initially checked courtesy of its `aria-checked` attribute being set to `"true"`. The switch has two child elements containing the "off" and "on" labels and is followed by a {{HTMLElement("label")}} identifying the switch.

```html
<button role="switch" aria-checked="true"
      id="speakerPower" class="switch">
  <span>off</span>
  <span>on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label>
```

#### JavaScript

This JavaScript code defines and applies a function to handle click events on switch widgets. The function changes the `aria-checked` attribute from `true` to `false`, or vice versa.

```js
document.querySelectorAll(".switch").forEach(function(theSwitch) {
  theSwitch.addEventListener("click", handleClickEvent, false);
});

function handleClickEvent(evt) {
  let el = evt.target;

  if (el.getAttribute("aria-checked") == "true") {
      el.setAttribute("aria-checked", "false");
  } else {
      el.setAttribute("aria-checked", "true");
  }
}
```

#### CSS

The purpose of the CSS is to establish a look and feel for the switch that's reminiscent of the power switch paradigm.

```css
button.switch {
  margin: 0;
  padding: 0;
  width: 70px;
  height: 26px;
  border: 2px solid black;
  display: inline-block;
  margin-right: 0.25em;
  line-height: 20px;
  vertical-align: middle;
  text-align: center;
  font: 12px "Open Sans", "Arial", serif;
}

button.switch span {
  padding: 0 4px;
  pointer-events: none;
}

[role="switch"][aria-checked="false"] :first-child,
[role="switch"][aria-checked="true"] :last-child {
  background: #262;
  color: #eef;
}

[role="switch"][aria-checked="false"] :last-child,
[role="switch"][aria-checked="true"] :first-child {
  color: #bbd;
}

label.switch {
  font: 16px "Open Sans", "Arial", sans-serif;
  line-height: 20px;
  user-select: none;
  vertical-align: middle;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}
```

The most interesting part is probably the use of attribute selectors and the {{cssxref(":first-child")}} and {{cssxref(":last-child")}} pseudo-classes to do all the heavy lifting of changing the appearance of the switch based on whether it's on or off.

#### Result

The result looks like this:

{{EmbedLiveSample("Adding_the_switch_role_in_ARIA", 600, 40)}}

## Specifications

| Specification                                                        | Status                           | Comment                                                                 |
| -------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------- |
| {{SpecName('ARIA', '#switch')}}                             | {{Spec2('ARIA')}}         | Defines ARIA in general along with all roles, properties, and so forth. |
| {{SpecName('ARIA in HTML', '#index-aria-switch')}} | {{Spec2('ARIA in HTML')}} | Describes how ARIA's features integrate into HTML.                      |

## See also

- [ARIA: checkbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`<input type="checkbox">`](en-US/docs/Web/HTML/Element/input/checkbox)
- [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
