---
title: inert
slug: Web/HTML/Global_attributes/inert
page-type: html-attribute
browser-compat: html.global_attributes.inert
---

{{HTMLSidebar("Global_attributes")}}

The **`inert`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is a Boolean attribute indicating that the browser will ignore the element. With the `inert` attribute, all of the element's flat tree descendants (such as modal {{htmlelement("dialog")}}s) that don't otherwise escape inertness are ignored. The `inert` attribute also makes the browser ignore input events sent by the user, including focus-related events and events from assistive technologies.

Specifically, `inert` does the following:

- Prevents the {{domxref("Element/click_event", "click")}} event from being fired when the user clicks on the element.
- Prevents the {{domxref("Element/focus_event", "focus")}} event from being raised by preventing the element from gaining focus.
- Hides the element and its content from assistive technologies by excluding them from the accessibility tree.

```html
<body inert>
  <!-- content -->
</body>
```

The `inert` attribute can be added to sections of content that should not be interactive. When an element is inert, it along with all of the element's descendants, including normally interactive elements such as links, buttons, and form controls are disabled because they cannot receive focus or be clicked.

The `inert` attribute can also be added to elements that should be offscreen or hidden. An inert element, along with its descendants, gets removed from the tab order and accessibility tree.

> **Note:** While `inert` is a global attribute and can be applied to any element, it is generally used for sections of content. To make individual controls "inert", consider using the [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled) attribute, along with CSS [`:disabled`](/en-US/docs/Web/CSS/:disabled) styles, instead.

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
- [Introducing inert](https://developer.chrome.com/articles/inert/)
- [The "inert" attribute is finally coming to the web](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
