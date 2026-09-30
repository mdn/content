---
title: "ARIA: document role"
short-title: document
slug: Web/Accessibility/ARIA/Reference/Roles/document_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#document
sidebar: accessibilitysidebar
---

The `document` role is for focusable content within complex composite [widgets](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) or [applications](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) for which assistive technologies can switch reading context back to a reading mode.

## Description

The `document` role is for the top container containing content that assistive technology users may want to browse in a reading mode. Only useful on focusable sections within complex composite [widgets](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) or [applications](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role), the `document` role informs assistive technologies to the reading context back to a reading mode: The `document` role tells assistive technologies with reading or browse modes to use the document mode to read the content contained within this element.

```html
<div role="application">
  …
  <div id="InfoText" role="document" tabindex="0">
    <p>Some informational text goes here.</p>
  </div>
  …
  <button>Close</button>
</div>
```

This example shows an [application](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) with some controls and a section with some informational text that the assistive technology user can go into reading mode when tabbed to.

The `document` role is not needed inside a [dialog](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role). A dialog is a window, not a widget or application, so assistive technologies that have a reading mode already use it for the dialog's content.

By default, web pages are treated as documents; assistive technologies (AT) enter browse or read mode when entering a new web page. This mode can be altered through various roles, including the widget and application roles. The `document` role brings the AT back into browse or read mode.

Generally placed within an application role or other interactive widget role, the `document` role is used to indicate a section of a complex composite widget that an assistive technology user should read using its browse or virtual reading mode, if available.

Because ATs with reading mode default to that mode for all elements except for those with a widget or application role set, document role is only useful for focusable elements within a widget or application that should be read as static rich text. Adding `role="document"` and `tabindex="0"` to the element containing the text within a widget enables the screen reader user to press the Tab key to place focus on the document element and read the text with the screen reader's reading cursor.

Assistive technologies should switch context back to document mode, possibly intercepting from controls rewired for the parent's dynamic context, re-enabling the standard input events, such as Up or Down arrow keyboard events, to control the reading cursor.

In contrast to the [`article`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) role, the `document` role does not have any relation to other elements with a document role, it merely has a relationship to the containing composite widget. An article can have associated articles.

### Keyboard interactions

The element needs to be focusable so that assistive technologies can switch to reading mode when it receives focus. The HTML [`tabindex="0"`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) attribute makes it focusable and adds it to the tab order, so the user can tab to it and read the content right away.

### Required JavaScript features

None.

## Examples

An example is Gmail and the single conversation view. GMail is a web application. When in GMail, most user agent interactions are usurped by the application. However, when the Keyboard focus is set on the starting heading on a single conversation that contains the subject of the conversation, the screen reader user can use the reading mode commands to read through the messages, expand or collapse them, and manipulate them. Once focus returns to the message list either by activating the Back button or pressing an associated keystroke, direct application interaction mode is invoked again, and the user can move to a different conversation in the list with the <kbd>arrow</kbd> keys.

## Best practices

Always make sure an element with the `document` role is focusable. Setting `tabindex="0"` is the most common way to do this, but it also adds the element to the tab order, which might not match how users navigate the rest of the widget. If the containing widget manages focus with arrow keys, for example with a [roving `tabindex`](/en-US/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets#technique_1_roving_tabindex), make sure users can discover how to reach the document content and how to return to the widget afterward.

### Added benefits

The document role is an easy way to indirectly control assistive technology behavior by unambiguously stating that this is content the user should read with standard screen reader commands.

## Specifications

{{Specifications}}

## See also

- [ARIA: `widget` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role)
- [ARIA: `application` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
