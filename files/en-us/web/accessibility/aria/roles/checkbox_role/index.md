---
title: 'ARIA: checkbox role'
slug: Web/Accessibility/ARIA/Roles/checkbox_role
tags:
  - ARIA
  - Accessibility
  - NeedsContent
  - Role
  - ARIA widget
  - Reference
---
The `checkbox` role is for checkable interactive controls. Elements containing `role="checkbox"` must also include the `aria-checked` attribute to expose the checkbox's state to assistive technology.

```html
<span role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="chk1-label"></span> 
<label id="chk1-label">Remember my preferences</label>
```

> **Note:** The first rule of ARIA is if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding ARIA. Instead use the native [HTML checkbox](/en-US/docs/Web/HTML/Element/input/checkbox) of [`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox) (with an associated {{HTMLElement('label')}}, which natively provides all the functionality required:

```html
<input type="checkbox" id="chk1-label">
<label for="chk1-label">Remember my preferences</label>
```

## Description

The native HTML checkbox ([`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox))  form control had two states ("checked" or "not checked"), with an [`indeterminate`](/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) state settable via JavaScript. Similarly, an element with `role="checkbox"`  can expose three states through the `aria-checked` attribute: `true`, `false`, or `mixed`.

Since a checkbox is an interactive control, it must be focusable and keyboard accessible. If the role is applied to a non-focusable element, use the [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute to change this. The expected keyboard shortcut for activating a checkbox is the <kbd>Space</kbd> key.

The developer is required to change the value of the `aria-checked` attribute dynamically when the checkbox is activated.

### Associated WAI-ARIA Roles, States, and Properties

- `aria-checked`

  - : The value of `aria-checked` defines the state of a checkbox. This attribute has one of three possible values:

    - `true`
      - : The checkbox is checked.
    - `false`
      - : The checkbox is not checked.
    - `mixed`
      - : The checkbox is partially checked, or indeterminate.

- `tabindex="0"`
  - : Used to make it focusable so the assistive technology user can tab to it and start reading right away.


### Keyboard interactions

| Key              | Function               |
| ---------------- | ---------------------- |
| <kbd>Space</kbd> | Activates the checkbox |

### Required JavaScript

#### Required event handlers

- `onclick`
  - : Handle mouse clicks on both the checkbox and the associated label that will change the state of the checkbox by changing the value of the `aria-checked` attribute and the appearance of the checkbox so it appears checked or unchecked to the sighted user
- `onKeyPress`

  - : Handle the case where the user presses the <kbd>Space</kbd> key to change the state of the checkbox by changing the value of the `aria-checked` attribute and the appearance of the checkbox so it appears checked or unchecked to the sighted user

## Examples

The following example creates an otherwise non-semantic checkbox element using CSS and JavaScript to handle the checked or unchecked status of the element.

#### HTML

```html
<span role="checkbox" id="chkPref" aria-checked="false" onclick="changeCheckbox()" onKeyPress="changeCheckbox()"
   tabindex="0" aria-labelledby="chk1-label"></span>
<label id="chk1-label" onclick="changeCheckbox()" onKeyPress="changeCheckbox()">Remember my preferences</label>
```

#### CSS

```css
[role="checkbox"] {
    padding:5px;
}

[aria-checked="true"]::before {
    content: "[x]";
}

[aria-checked="false"]::before {
    content: "[ ]";
}
```

#### JavaScript

```js
function changeCheckbox(event) {
    let item = document.getElementById('chkPref');
    switch(item.getAttribute('aria-checked')) {
        case "true":
            item.setAttribute('aria-checked', "false");
            break;
        case "false":
            item.setAttribute('aria-checked', "true");
            break;
    }
}
```

{{EmbedLiveSample("Examples", 230, 250)}}

## Accessibility concerns

When the `checkbox` role is added to an element, the user agent should do the following:

- Expose the element as having a `checkbox` role in the operating system's accessibility API.
- When the `aria-checked` value changes, send an accessible state changed event.

Assistive technology products should do the following:

- Screen readers should announce the element as a checkbox, and optionally provide instructions on how to activate it.

> **Note:** Opinions may differ on how assistive technology should handle this technique. The information provided above is one of those opinions and may change.

## Best practices

The first rule of ARIA is: if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding an ARIA role, state or property to make it accessible. As such, it is recommended to use the native [HTML checkbox](/en-US/docs/Web/HTML/Element/input/checkbox)  using form control instead of recreating a checkbox's functionality with JavaScript and ARIA.

## See also

- [`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox)
- [ARIA: `radio` role](/en-US/docs/Web/Accessibility/ARIA/Roles/Radio_Role)
- [ARIA: `menuitem` role](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitem_Role)
- [ARIA: `menuitemcheckbox` role](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitemcheckbox_Role)
- [ARIA: `menuitemradio` role](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitemradio_Role)
- [ARIA: `switch` role](/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_role)
- [ARIA: `option` role](/en-US/docs/Web/Accessibility/ARIA/Roles/Option_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
