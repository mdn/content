---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
tags:
  - Global attributes
  - HTML
  - Reference
browser-compat: html.global_attributes.tabindex
---
{{HTMLSidebar("Global_attributes")}}

The **`tabindex`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) indicates that its element can be focused, and where it participates in sequential keyboard navigation (usually with the <kbd>Tab</kbd> key, hence the name).

{{EmbedInteractiveExample("pages/tabbed/attribute-tabindex.html","tabbed-standard")}}

It accepts an integer as a value, with different results depending on the integer's value:

- A _negative value_ (usually `tabindex="-1"`) means that the element is not reachable via sequential keyboard navigation, but could be focused with JavaScript or visually by clicking with the mouse. It's mostly useful to create accessible widgets with JavaScript.

  > **Note:** A negative value is useful when you have off-screen content that appears on a specific event. The user won't be able to focus any element with a negative `tabindex` using the keyboard, but a script can do so by calling the `focus()` [method](/en-US/docs/Web/API/HTMLElement/focus).

- `tabindex="0"` means that the element should be focusable in sequential keyboard navigation, after any positive tabindex values and its order is defined by the document's source order.
- A _positive value_ means the element should be focusable in sequential keyboard navigation, with its order defined by the value of the number. That is, `tabindex="4"` is focused before `tabindex="5"` and `tabindex="0"`, but after `tabindex="3"`. If multiple elements share the same positive `tabindex` value, their order relative to each other follows their position in the document source. The maximum value for `tabindex` is 32767. If not specified, it takes the default value 0.

  > **Warning:** Avoid using `tabindex` values greater than 0. Doing so makes it difficult for people who rely on assistive technology to navigate and operate page content. Instead, write the document with the elements in a logical sequence.

If you set the `tabindex` attribute on a {{htmlelement("div")}}, then its child content cannot be scrolled with the arrow keys unless you set `tabindex` on the content, too. [Check out this fiddle to understand the scrolling effects of `tabindex`](https://jsfiddle.net/jainakshay/0b2q4Lgv/).

## Accessibility concerns

Avoid using the `tabindex` attribute in conjunction with non-[interactive content](/en-US/docs/Web/Guide/HTML/Content_categories#interactive_content) to make something intended to be interactive focusable by keyboard input. An example of this would be using a {{HTMLElement("div")}} element to describe a button, instead of the {{HTMLElement("button")}} element.

Interactive components authored using non-interactive elements are not listed in the [accessibility tree](/en-US/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). This prevents assistive technology from being able to navigate to and manipulate those components. The content should be semantically described using interactive elements ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, etc.) instead. These elements have built-in roles and states that communicate status to the accessibility that would otherwise have to be managed by [ARIA](/en-US/docs/Web/Accessibility/ARIA).

- [Using the tabindex attribute | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.tabIndex")}} that reflects this attribute
- Accessibility problems with tabindex: see [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) by Adrian Roselli
