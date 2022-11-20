---
title: inert
slug: Web/HTML/Global_attributes/inert
tags:
  - Inert
  - Global attributes
  - HTML
  - Reference
browser-compat: html.global_attributes.inert
---

{{HTMLSidebar("Global_attributes")}}

The **`inert`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is a Boolean attribute indicating that an element and all its flat tree descendants which don't otherwise escape inertness (such as modal {{htmlelement('dialog')}}s) should be inert.
The `inert` attribute can be used to trap user focus and improve accessibility and usability.

```html
<body inert>
  <!-- content -->
</body>
```

The `inert` attribute can be added to sections of content that should not be interactive. When an element is inert, it along with all of the elements descendants, including normally interactive elements like links, buttons, and form controls are disabled, unable to receive focus or be clicked.

The `inert` attribute can also be added to elements that are offscreen or otherwise hidden as it removes the element on which it is applied, and its descendants, from the tab order and accessibility tree.

> **Note:** While `inert` is a global attribute, applicable to any and all elements, it is generally used for sections of content. To make individual controls "inert", consider using the [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled) attribute, along with CSS [`:disabled`](/en-US/docs/Web/CSS/:disabled) styles, instead.

## Accessibility considerations

Use careful consideration for accessibility when applying the `inert` attribute. By default, there is no visual indicator that an element or its subtrees are inert. It is up to the developer to provide clear visual clues as to which content parts are active and which are inert.

In providing visual and non-visual cues to intertness, remember the visual viewport may contain only sections of content, users may be zoomed in to a small section of content, or users may not be able to view the content at all. Inert sections not being obviously inert can lead to frustration and bad user experience.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
