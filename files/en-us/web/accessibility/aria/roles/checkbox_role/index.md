---
title: "ARIA: checkbox role"
slug: Web/Accessibility/ARIA/Roles/checkbox_role
page-type: aria-role
---

The `checkbox` role is for checkable interactive controls. Elements containing `role="checkbox"` must also include the [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute to expose the checkbox's state to assistive technology.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Remember my preferences</label>
```

> **Note:** The first rule of ARIA is if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding ARIA. Instead use the native [HTML checkbox of `<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox) (with an associated {{HTMLElement('label')}}), which natively provides all the functionality required:

```html
<input type="checkbox" id="chk1-label" />
<label for="chk1-label">Remember my preferences</label>
```

## Description

The native HTML checkbox ([`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox)) form control had two states ("checked" or "not checked"), with an [`indeterminate`](/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) state settable via JavaScript. Similarly, an element with `role="checkbox"` can expose three states through the `aria-checked` attribute: `true`, `false`, or `mixed`.

Since a checkbox is an interactive control, it must be focusable and keyboard accessible. If the role is applied to a non-focusable element, use the [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute to change this. The expected keyboard shortcut for activating a checkbox is the <kbd>Space</kbd> key.

The developer is required to change the value of the `aria-checked` attribute dynamically when the checkbox is activated.

### All descendants are presentational

There are some types of user interface components that, when represented in a platform accessibility API, can only contain text. Accessibility APIs do not have a way of representing semantic elements contained in a `checkbox`. To deal with this limitation, browsers, automatically apply role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) to all descendant elements of any `checkbox` element as it is a role that does not support semantic children.

For example, consider the following `checkbox` element, which contains a heading.

```html
<div role="checkbox"><h6>Name of my checkbox</h6></div>
```

Because descendants of `checkbox` are presentational, the following code is equivalent:

```html
<div role="checkbox"><h6 role="presentation">Name of my checkbox</h6></div>
```

From the assistive technology user's perspective, the heading does not exist since the previous code snippets are equivalent to the following in the [accessibility tree](/en-US/docs/Glossary/Accessibility_tree):

```html
<div role="checkbox">Name of my checkbox</div>
```

### Associated WAI-ARIA Roles, States, and Properties

- [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

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
- `onKeyDown`

  - : Handle the case where the user presses the <kbd>Space</kbd> key to change the state of the checkbox by changing the value of the `aria-checked` attribute and the appearance of the checkbox so it appears checked or unchecked to the sighted user

## Examples

The following example creates an otherwise non-semantic checkbox element using CSS and JavaScript to handle the checked or unchecked status of the element.

### HTML

```html
<span
  role="checkbox"
  id="chkPref"
  aria-checked="false"
  onclick="changeCheckbox()"
  onKeyDown="changeCheckbox(event.keyCode)"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label
  id="chk1-label"
  onclick="changeCheckbox()"
  onKeyDown="changeCheckbox(event.keyCode)"
  >Remember my preferences</label
>
```

### CSS

```css
[role="checkbox"] {
  padding: 5px;
}

[role="checkbox"]:focus {
  border: 2px solid #0198e1;
}

[aria-checked="true"]::before {
  content: "[x]";
}

[aria-checked="false"]::before {
  content: "[ ]";
}
```

### JavaScript

```js
function changeCheckbox(keyCode) {
  const spacebarKeyCode = 32;
  const item = document.getElementById("chkPref");
  const checked = item.getAttribute("aria-checked");

  if (keyCode && keyCode !== spacebarKeyCode) {
    return;
  } else if (checked === "true") {
    item.setAttribute("aria-checked", "false");
  } else {
    item.setAttribute("aria-checked", "true");
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

People implementing checkboxes should do the following:

- Ensure that the checkbox can be reached and interacted with by both keyboard controls and clicks
- Keep the `aria-checked` attribute up to date following user interactions
- Provide styles that indicate when the checkbox has focus

> **Note:** Opinions may differ on how assistive technology should handle this technique. The information provided above is one of those opinions and may change.

## Best practices

The first rule of ARIA is: if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding an ARIA role, state or property to make it accessible. As such, it is recommended to use the native [HTML checkbox](/en-US/docs/Web/HTML/Element/input/checkbox) using form control instead of recreating a checkbox's functionality with JavaScript and ARIA.

## See also

- [`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox)
- [ARIA: `radio` role](/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [ARIA: `menuitem` role](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [ARIA: `menuitemcheckbox` role](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [ARIA: `menuitemradio` role](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [ARIA: `switch` role](/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [ARIA: `option` role](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
