---
title: HTML inert global attribute
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
page-type: html-attribute
browser-compat: html.global_attributes.inert
sidebar: htmlsidebar
---

The **`inert`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) is a boolean attribute specifying that the element and all of its flat tree descendants are {{glossary("inert")}}.

Modal {{htmlelement("dialog")}}s generated with [`showModal()`](/en-US/docs/Web/API/HTMLDialogElement/showModal) escape inertness, meaning that they don't inherit inertness from their ancestors, but can only be made inert by having the `inert` attribute explicitly set on themselves.

```html
<div inert>
  <!-- content -->
</div>
```

The `inert` attribute can be added to sections of content that should not be interactive. When an element is inert, it — along with all of the element's descendants including normally interactive elements such as links, buttons, and form controls — are disabled because they cannot receive focus or be clicked.

The `inert` attribute can also be added to elements that should be offscreen or hidden. An inert element, along with its descendants, gets removed from the tab order and accessibility tree.

> [!NOTE]
> While `inert` is a global attribute and can be applied to any element, it is generally used for sections of content. To make individual controls "inert", consider using the [`disabled`](/en-US/docs/Web/HTML/Reference/Attributes/disabled) attribute, along with CSS [`:disabled`](/en-US/docs/Web/CSS/:disabled) styles, instead.

## Accessibility concerns

Use careful consideration for accessibility when applying the `inert` attribute. By default, there is no visual way to tell whether or not an element or its subtree is inert. As a web developer, it is your responsibility to clearly indicate the content parts that are active and those that are inert.

While providing visual and non-visual cues about content inertness, also remember that the visual viewport may contain only sections of content. Users may be zoomed in to a small section of content, or users may not be able to view the content at all. Inert sections not being obviously inert can lead to frustration and bad user experience.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("dialog")}} element
- {{domxref("HTMLElement.inert")}} HTML DOM property
- CSS {{cssxref("interactivity")}} property
- [Introducing inert](https://web.dev/articles/inert) on web.dev (2024)
