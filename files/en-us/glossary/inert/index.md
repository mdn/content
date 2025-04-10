---
title: Inert
slug: Glossary/Inert
page-type: glossary-definition
---

{{GlossarySidebar}}

**Inert** is a state of HTML elements and their flat tree descendants whereby they cannot be interacted with.

Specifically, inert elements:

- Do not have {{domxref("Element/click_event", "click")}} events fired when clicked on.
- Cannot be focused, that is, {{domxref("Element/focus_event", "focus")}} events cannot be fired on them.
- Are not searchable via browser find-in-page features (none of their content is found/matched).
- Disallow users from selecting text contained within their content — akin to using the CSS property {{cssxref("user-select")}} to disable text selection.
- Cannot have otherwise-editable content edited. This includes, for example, the contents of textual {{htmlelement("input")}} fields, and text elements with [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) set on them.
- Are hidden from assistive technologies by excluding them from the accessibility tree.

The following features can be used to set an element and its descendants to an inert state:

- The CSS {{cssxref("interactivity")}} property.
- The HTML [`inert`](/en-US/docs/Web/HTML/Reference/Global_attributes/inert) attribute.
- The {{domxref("HTMLElement.inert")}} DOM property.

## See also

- [Introducing inert](https://web.dev/articles/inert) on web.dev (2024)
