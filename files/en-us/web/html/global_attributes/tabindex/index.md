---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
page-type: html-attribute
browser-compat: html.global_attributes.tabindex
---

{{HTMLSidebar("Global_attributes")}}

The **`tabindex`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the <kbd>Tab</kbd> key, hence the name) and determine their relative ordering for sequential focus navigation.

{{EmbedInteractiveExample("pages/tabbed/attribute-tabindex.html","tabbed-standard")}}

It accepts an integer as a value, with different results depending on the integer's value:

> **Note:** If an HTML element renders and has `tabindex` attribute with any valid integer value, the element can be focused with JavaScript (by calling the [`focus()`](/en-US/docs/Web/API/HTMLElement/focus) method) or visually by clicking with the mouse. The particular `tabindex` value controls whether the element is `tabbable` (i.e. reachable via sequential keyboard navigation, usually with the <kbd>Tab</kbd> key).

- A _negative value_ (the exact negative value doesn't actually matter, usually `tabindex="-1"`) means that the element is not reachable via sequential keyboard navigation.

  > **Note:** `tabindex="-1"` may be useful for elements that should not be navigated to directly using the <kbd>Tab</kbd> key, but need to have keyboard focus set to them. Examples include an off-screen modal window that should be focused when it comes into view, or a form submission error message that should be immediately focused when an errant form is submitted.

- `tabindex="0"` means that the element should be focusable in sequential keyboard navigation, after any positive `tabindex` values. The focus navigation order of these elements is defined by their order in the document source.
- A _positive value_ means the element should be focusable in sequential keyboard navigation, with its order defined by the value of the number. That is, `tabindex="4"` is focused before `tabindex="5"` and `tabindex="0"`, but after `tabindex="3"`. If multiple elements share the same positive `tabindex` value, their order relative to each other follows their position in the document source. The maximum value for `tabindex` is 32767.
- If the `tabindex` attribute is included with no value set, whether the element is focusable is determined by the user agent.

  > **Warning:** You are recommended to only use `0` and `-1` as `tabindex` values. Avoid using `tabindex` values greater than `0` and CSS properties that can change the order of focusable HTML elements ([Ordering flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)). Doing so makes it difficult for people who rely on using keyboard for navigation or assistive technology to navigate and operate page content. Instead, write the document with the elements in a logical sequence.

Some focusable HTML elements have a default `tabindex` value of `0` set under the hood by the [user agent](/en-US/docs/Glossary/User_agent). These elements are an {{HTMLElement("a")}} or {{HTMLElement("area")}} with `href` attribute, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, and SVG {{SVGElement("a")}} element, or a {{HTMLElement("summary")}} element that provides summary for a {{HTMLElement("details")}} element. Developers shouldn't add the `tabindex` attribute to these elements unless it changes the default behavior (for example, including a negative value will remove the element from the focus navigation order).

> **Warning:** The tabindex attribute must not be used on the {{HTMLElement("dialog")}} element.

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
