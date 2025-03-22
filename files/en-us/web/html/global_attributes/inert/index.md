---
title: inert
slug: Web/HTML/Global_attributes/inert
page-type: html-attribute
browser-compat: html.global_attributes.inert
---

{{HTMLSidebar("Global_attributes")}}

The **`inert`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is a Boolean attribute indicating that the element and all of its flat tree descendants become _inert_. Modal {{htmlelement("dialog")}}s generated with [`showModal()`](/en-US/docs/Web/API/HTMLDialogElement/showModal) escape inertness, meaning that they don't inherit inertness from their ancestors, but can only be made inert by having the `inert` attribute explicitly set on themselves.

Specifically, `inert` does the following:

- Prevents the {{domxref("Element/click_event", "click")}} event from being fired when the user clicks on the element.
- Prevents the {{domxref("Element/focus_event", "focus")}} event from being raised by preventing the element from gaining focus.
- Prevents any contents of the element from being found/matched during any use of the browser's find-in-page feature.
- Prevents users from selecting text within the element — akin to using the CSS property {{cssxref("user-select")}} to disable text selection.
- Prevents users from editing any contents of the element that are otherwise editable.
- Hides the element and its content from assistive technologies by excluding them from the accessibility tree.

```html
<div inert>
  <!-- content -->
</div>
```

The `inert` attribute can be added to sections of content that should not be interactive. When an element is inert, it along with all of the element's descendants, including normally interactive elements such as links, buttons, and form controls are disabled because they cannot receive focus or be clicked.

The `inert` attribute can also be added to elements that should be offscreen or hidden. An inert element, along with its descendants, gets removed from the tab order and accessibility tree.

> [!NOTE]
> While `inert` is a global attribute and can be applied to any element, it is generally used for sections of content. To make individual controls "inert", consider using the [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled) attribute, along with CSS [`:disabled`](/en-US/docs/Web/CSS/:disabled) styles, instead.

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
- [Introducing inert](https://web.dev/articles/inert)
- [The "inert" attribute is finally coming to the web](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
