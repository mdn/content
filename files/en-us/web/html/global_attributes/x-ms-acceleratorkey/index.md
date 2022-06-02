---
title: x-ms-acceleratorkey
slug: Web/HTML/Global_attributes/x-ms-acceleratorkey
tags:
  - Attribute
  - HTML
  - HTML:Microsoft Extensions
  - Non-standard
  - Reference
  - x-ms-acceleratorkey
---
{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}

The **`x-ms-acceleratorkey`** attribute accessibly declares that an [accelerator key](https://docs.microsoft.com/en-us/windows/apps/design/input/keyboard-accelerators) has been assigned to an element: the element is activated via JavaScript when the key(s) are pressed on a keyboard.

{{Non-standard_Inline}} This proprietary property is specific to Internet Explorer and Microsoft Edge.

`x-ms-acceleratorkey` exposes a notification in the accessibility tree, for screen readers and other assistive technologies, that an accelerator key exists for that element. This attribute does **not** provide the accelerator key behavior. You must provide JavaScript event handlers, like `onkeypress`, `onkeydown`, or `onkeyup`, to listen for your declared accelerator keys and activate the element accordingly.

To provide a keyboard shortcut for an element that _does not_ need JavaScript, use [the `accesskey` attribute](/en-US/docs/Web/HTML/Global_attributes/accesskey).

## Syntax

```html
<button x-ms-acceleratorkey="[explanation of key combination]">…</button>
```

## Value

The accelerator key combination. For example:

- `"Ctrl+B"` for a combination of the

  <kbd>Ctrl</kbd>

  and

  <kbd>B</kbd>

  keys.

- `"J"` for just the

  <kbd>J</kbd>

  key.

- `"Ctrl+; then K"` for a shortcut similar to [FogBugz's old keyboard mode](https://support.fogbugz.com/hc/en-us/articles/360011254414-FogBugz-Keyboard-Shortcuts#:~:text=For%20Your%20Server%20or%20non-Ocelot%20Keyboard%20Shortcuts). This approach is more complicated, but does not override existing keyboard shortcuts provided by the user's browser or operating system.

## See also

- [The global `accesskey` attribute](/en-US/docs/Web/HTML/Global_attributes/accesskey)
- [The `-ms-accelerator` CSS property](/en-US/docs/Web/CSS/-ms-accelerator)
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
