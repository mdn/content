---
title: HTML inert global attribute
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
page-type: html-attribute
browser-compat: html.global_attributes.inert
sidebar: htmlsidebar
---

The **`inert`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) is a Boolean attribute indicating that the element and all of its flat tree descendants become _inert_. The `inert` attribute can be added to sections of content that should not be interactive. When an element is inert, it along with all of the element's descendants, including normally interactive elements such as links, buttons, and form controls are disabled because they cannot receive focus or be clicked. The `inert` attribute can also be added to elements that should be offscreen or hidden. An inert element, along with its descendants, gets removed from the tab order and accessibility tree.

Modal {{htmlelement("dialog")}}s generated with [`showModal()`](/en-US/docs/Web/API/HTMLDialogElement/showModal) escape inertness, meaning that they don't inherit inertness from their ancestors, but can be made inert by having the `inert` attribute explicitly set on themselves. No other element can escape inertness.

> [!NOTE]
> While `inert` is a global attribute and can be applied to any element, it is generally used for sections of content. To make individual controls "inert", consider using the [`disabled`](/en-US/docs/Web/HTML/Reference/Attributes/disabled) attribute, along with CSS {{cssxref(":disabled")}} styles, instead.

Inert HTML elements and their flat tree descendants:

- Do not have {{domxref("Element/click_event", "click")}} events fired when clicked on.
- Cannot be focused and {{domxref("Element/focus_event", "focus")}} events cannot be fired on them.
- Are not searchable via browser find-in-page features (none of their content is found/matched).
- Disallow users from selecting text contained within their content — akin to using the CSS property {{cssxref("user-select")}} to disable text selection.
- Cannot have otherwise-editable content edited. This includes, for example, the contents of textual {{htmlelement("input")}} fields, and text elements with [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) set on them.
- Are hidden from assistive technologies as they are excluded from the accessibility tree.

The following other features can be used to set an element and its descendants to an inert state:

- The CSS {{cssxref("interactivity")}} property.
- The {{domxref("HTMLElement.inert")}} DOM property.

## Accessibility concerns

Use careful consideration for accessibility when applying the `inert` attribute. By default, there is no visual way to tell whether or not an element or its subtree is inert. As a web developer, it is your responsibility to clearly indicate the content parts that are active and those that are inert.

While providing visual and non-visual cues about content inertness, also remember that the visual viewport may contain only sections of content. Users may be zoomed in to a small section of content, or users may not be able to view the content at all. Inert sections not being obviously inert can lead to frustration and bad user experience.

## Examples

In this example, the second {{htmlelement("div")}} and all of its descendants are made inert via the `inert` attribute:

```html
<div>
  <label for="button1">Button 1</label>
  <button id="button1">I am not inert</button>
</div>
<div inert>
  <label for="button2">Button 2</label>
  <button id="button2">I am inert</button>
</div>
```

{{ EmbedLiveSample('Examples', 560, 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("dialog")}} element
- {{domxref("HTMLElement.inert")}} DOM property
- CSS {{cssxref("interactivity")}} property
