---
title: autofocus
slug: Web/HTML/Global_attributes/autofocus
page-type: html-attribute
browser-compat: html.global_attributes.autofocus
---

{{HTMLSidebar("Global_attributes")}}

The **`autofocus`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is a Boolean attribute indicating that an element should be focused on page load, or when the {{HTMLElement("dialog")}} that it is part of is displayed.

```html
<input name="q" autofocus />
```

No more than one element in the document or dialog may have the autofocus attribute. If applied to multiple elements the first one will receive focus.

> [!NOTE]
> The `autofocus` attribute applies to all elements, not just form controls. For example, it might be used on a [contenteditable](/en-US/docs/Web/HTML/Global_attributes/contenteditable) area.

## Accessibility concerns

Automatically focusing a form control can confuse visually-impaired people using screen-reading technology and people with cognitive impairments. When `autofocus` is assigned, screen-readers "teleport" their user to the form control without warning them beforehand.

Use careful consideration for accessibility when applying the `autofocus` attribute. Automatically focusing on a control can cause the page to scroll on load. The focus can also cause dynamic keyboards to display on some touch devices. While a screen reader will announce the label of the form control receiving focus, the screen reader will not announce anything before the label, and the sighted user on a small device will equally miss the context created by the preceding content.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
