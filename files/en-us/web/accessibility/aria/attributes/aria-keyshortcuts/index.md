---
title: 'aria-keyshortcuts'
slug: Web/Accessibility/ARIA/Attributes/aria-keyshortcuts
tags:
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-keyshortcuts
spec-urls:
  - https://w3c.github.io/aria/#aria-keyshortcuts
  - https://w3c.github.io/aria-practices/#kbd_shortcuts
---

The global `aria-keyshortcuts` attribute indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

## Description

A keyboard shortcut is a series of one or several keys that tells software to perform a pre-programmed action. Keyboard shortcuts enable keyboard users to invoke commands using the keyboard that would otherwise require accessing a menu or using touch or a mouse. The `aria-keyshortcuts` property defines the keyboard keys that have been implemented to activate or give focus to the element on which the attribute is set.

The `aria-keyshortcuts` attribute exposes the existence of the shortcut to assistive technologies so the presence of the shortcut can be communicated to its users. Like all ARIA attributes, it has no effect on the functionality of the page; the keyboard behavior must be added via JavaScript event handlers.

Keyboard shortcuts applied to disabled elements should also be disabled. For example, when disabling an element for mouse users, remember to disable it for keyboard shortcut users.

Ensure all keyboard shortcuts are both visible to sighted users and made available to assistive technology. If your application is complex enough to need keyboard shortcuts, also known as "hot keys", include a guided tour of your application, an accessibility page documenting shortcuts and other accessibility features, a shortcut cheat sheet page or dialog pop up, or other method of making the availability of keyboard short cuts known.  In addition, show the shortcut in menus and tooltips.

### Property value rules

The value of the `aria-keyshortcuts` attribute is a space-separated list of key combinations that can be pressed to activate a command or textbox widget. Each key combination includes zero, one or more modifier keys followed by exactly one non-modifier key to be pressed at the same time joined with a plus sign ("+"). The attribute value is case-insensitive.

Examples of valid keyboard shortcuts include:

```plain
aria-keyshortcuts="A"
aria-keyshortcuts="Shift+Space"
aria-keyshortcuts="Control+Alt+."
aria-keyshortcuts="Control+Shift+&#39;"
aria-keyshortcuts="alt+shift+p control+f"
aria-keyshortcuts="Meta+C Meta+Shift+C"
```

Modifier keys are keys that don't have any impact when used on their own. They are written as "Alt", "Control", "Shift", "Meta" (Command key on Mac), or "AltGraph" (Option key on Mac).

Non-modifier keys are keys that have impact when used alone, be that printing a character, moving focus, or otherwise creating a keyboard event when used. Non-modifiers that print a single character include characters like `P`, `z` and `.`.

Since the plus sign is used in writing key combinations, it is written as `plus` if used as the non-modifier. Other written-out non-modifiers include white space characters `Space`, `Tab`, and `Enter`, and all characters that result in actions, like `ArrowUp`, `PageUp`, and `Escape`.

If you want to use a character that might cause problems, like a double quote character within double quotes, escape the character: `Control+&#39;`.

Modifier keys must be listed first in each key combination. Possible key combinations include `Control+P` or `Shift+Space` and `Q`. If the full shortcut requires all three of these combinations in order, it would be written as `aria-keyshortcuts="Control+P Shift+Space Q"`.  When a key combination includes more than one modifier key, the order of the modifiers doesn't matter, but they all must come first, before the non-modifier.

These two attribute declarations are equivalent.

```plain example-good
aria-keyshortcuts="Shift+Control+V"
aria-keyshortcuts="control+shift+v"
```

Note that text case doesn't matter. But order of non-modifier does.

These two attribute declarations are invalid because the non-modifier must be last.

```plain example-bad
aria-keyshortcuts="V+Shift+Control"
aria-keyshortcuts="V+Control+Shift"
```

The key combination listed must be the keys the user needs to press, not the outcome of the combined key strokes. For example, on a USA keyboard, if you need the `@` symbol, the key combination is written as `"Shift+2"`, not `"@"` nor `"Shift+@"`.

### Best practices

In trying to improve the accessibility of your sites and applications, there are so best practices to follow to ensure your "enhancements" don't negatively impact user experience. Remember, no ARIA is better than bad ARIA.

#### Don't override browser, assistive technology, or operating system shortcuts

When implementing keyboard shortcuts, make sure you don't create shortcuts that are already being used by the browser, assistive technology, or operating system, unless they are used for the same thing. For example, `"Control+P"` is used by most user-agents to initiate print functionality. Generally a web application should not create a "Control+P" shortcut as it will usurp browser functionality. There are exceptions. Web applications where printing is common, like email applications or Google Docs, usurping the browser's `"Control+P"` printing functionality for an application specific print flow would be expected.

Unless you're creating an HTML version of a productivity application, you should likely avoid implementing keyboard shortcut.  While overriding an operating system or browser keyboard shortcut can be annoying for non-assistive technology users, if you override a screen reader's keyboard functionality you can completely shut down access for the assistive technology user. If you must create keyboard shortcuts, avoid single letter keyboard shortcuts and common screen reader keyboard shortcuts.

#### Consider language and keyboard differences

Take into account the diversity of available keyboards and the various keyboard language preferences. Modifier keys are often used to create language specific common punctuation symbols and number characters. For example, numbers, when the keyboard language preference is set to French (France), use the Shift key.

#### **Don't** use HTML instead

The `aria-keyshortcuts` attribute is very similar to the [problematic](https://webaim.org/techniques/keyboard/accesskey#spec) HTML {{htmlattrxref('accesskey')}}, which generates a keyboard shortcut for the current element. When an `accesskey` is defined for an element, the browser defines the modifiers and does all the work of handling the shortcut with no scripting required. Every browser and operating system combination has their own modifier keys for the non-modifier set in the `accesskey` attribute. What may work for one combination of operating system, assistive technology, and browser may not work with other combinations. With `aria-keyshortcuts`, the modifier keys are included in the attribute value list of key combinations and the functionality has to be scripted in.

```html
<p>If you need to relax, press the
<strong><u>S</u></strong>tress reliever!</p>
<button accesskey="s">Stress reliever</button>
```

In this example, we ensured the presence of the shortcut was known to sited users a well by highlighting the non-modifier character.

While the goal of the `accesskey` attribute matches the intention of `aria-keyshortcuts` and to do so natively, `accesskey` is rife with issues. Because of these issues, it is generally advised not to use accesskeys for most general-purpose websites and web apps.

In addition to poor browser support, the same concerns arise for `accesskey` as exist for `aria-keyshortcuts`:

- An accesskey value can conflict with a system or browser keyboard shortcut, or assistive technology functionality.
- Certain key values may not be present on certain keyboards, especially when internationalization is a concern. So adapting to specific languages could cause further problems.
- Values that rely on numbers may be confusing to individuals experiencing cognitive concerns, where the number doesn't have a logical association with the functionality it triggers.
- Informing the user that shortcuts are present, so that they are aware of the functionality. If the system lacks a method of notifying the user about this feature, the user might accidentally activate a shortcut.

## Values

- `<string>`
  - : The space-separated list of key combinations that, when pressed, perform the action.

## Example

In this example, the `aria-keyshortcuts` attribute on the element is set to "Alt+Shift+A".

```html
<a href="#content" aria-keyshortcuts="Alt+Shift+A">Skip to content</a>
```

## ARIAMixin API

- {{domxref("Element.ariaKeyShortcuts")}}
  - : The [`ariaKeyShortcuts`](/en-US/docs/Web/API/Element/ariaKeyShortcuts) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-keyshortcuts` attribute.
- {{domxref("ElementInternals.ariaKeyShortcuts")}}
  - : The [`ariaKeyShortcuts`](/en-US/docs/Web/API/ElementInternals/ariaKeyShortcuts) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-keyshortcuts` attribute.

## Associated roles

Used in **ALL** roles.

## Specifications

{{Specifications}}

## See Also

- [`aria-keyshortcuts` best practices](https://www.w3.org/TR/wai-aria-practices-1.2/#kbd_shortcuts)
- HTML {{htmlattrxref('accesskey')}} attribute
- [Issues with `accesskey`](https://webaim.org/techniques/keyboard/accesskey#spec)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
