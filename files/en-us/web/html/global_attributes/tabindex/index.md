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

- A _negative value_ (the exact negative value doesn't actually matter, usually `tabindex="-1"`) means that the element is not reachable via sequential keyboard navigation, but could be focused with JavaScript (by calling the [`focus()`](/en-US/docs/Web/API/HTMLElement/focus) method) or visually by clicking with the mouse.

  > **Note:** `tabindex="-1"` may be useful for elements that should not be navigated to directly using the <kbd>Tab</kbd> key, but need to have keyboard focus set to them. Examples include a modal dialog window that should be focused when it is opened, or a form submission error message that should be immediately focused when an errant form is submitted.

- `tabindex="0"` means that the element should be focusable in sequential keyboard navigation, after any positive tabindex values and its order is defined by the document's source order. The element could be focused with JavaScript (by calling the [`focus()`](/en-US/docs/Web/API/HTMLElement/focus) method) or visually by clicking with the mouse.
- A _positive value_ means the element should be focusable in sequential keyboard navigation, with its order defined by the value of the number. That is, `tabindex="4"` is focused before `tabindex="5"` and `tabindex="0"`, but after `tabindex="3"`. If multiple elements share the same positive `tabindex` value, their order relative to each other follows their position in the document source. The maximum value for `tabindex` is 32767.
- If the `tabindex` value is omitted the user agent will decide whether the element is focusable.

  > **Warning:** It is recommended that developers use only 0 and -1 as `tabindex` values. Avoid using `tabindex` values greater than 0 and css-properties that can change the order of focusable html-elements ([Ordering flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)). Doing so makes it difficult for people who rely on using keyboard for navigation or assistive technology to navigate and operate page content. Instead, write the document with the elements in a logical sequence.

Some focusable html-elements are determined (by [user agent](/en-US/docs/Glossary/User_agent) under hood) to have `tabindex` default value equals 0. These elements are an {{HTMLElement("a")}} and {{HTMLElement("area")}} with `href` attribute, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, or SVG {{SVGElement("a")}} element, or is a {{HTMLElement("summary")}} element that is a summary for its parent {{HTMLElement("details")}}. Developers shouldn't add the `tabindex` attribute to these elements only if they are going to change the default behavior.

## Accessibility concerns

Avoid using the `tabindex` attribute in conjunction with non-[interactive content](/en-US/docs/Web/HTML/Content_categories#interactive_content) to make something intended to be interactive focusable by keyboard input. An example of this would be using a {{HTMLElement("div")}} element to describe a button, instead of the {{HTMLElement("button")}} element.

Interactive components authored using non-interactive elements are not listed in the [accessibility tree](/en-US/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). This prevents assistive technology from being able to navigate to and manipulate those components. The content should be semantically described using interactive elements ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, etc.) instead. These elements have built-in roles and states that communicate status to the accessibility that would otherwise have to be managed by [ARIA](/en-US/docs/Web/Accessibility/ARIA).

- [Using the tabindex attribute | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.tabIndex")}} that reflects this attribute
- Accessibility problems with `tabindex`: see [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) by Adrian Roselli
