---
title: Accessible name
slug: Glossary/Accessible_name
page-type: glossary-definition
---

An **accessible name** is the name of a user interface element; it is the text associated with an HTML element that provides users of assistive technology with a label for the element.

Accessible names convey the purpose or intent of the element. This helps users understand what the element is for and how they can interact with it. In general, accessible names for elements should be unique to a page. This helps users distinguish an element from other elements and helps users identify the element they want to interact with.

Depending on the element and the HTML markup, the value of the accessible name may be derived from visible (e.g., the text within {{HTMLElement("figcaption")}}) or invisible (e.g., the `aria-label` attribute set on an element) content, or a combination of both. How an element's accessible name is determined is based on the [accessible name calculation](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation), which is different for different elements.

It is best to use visible text as the accessible names. Many elements, including {{HTMLElement("a")}}, {{HTMLElement("td")}} and {{HTMLElement("button")}}, get their name from their contents. For example, given `<a href="foo.html">Bar</a>`, the accessible name is "Bar."

Other elements get their accessible name from the content of associated elements. For some parent elements, like {{HTMLElement("fieldset")}}, {{HTMLElement("table")}}, and {{HTMLElement("figure")}}, if those elements contain a descendant {{HTMLElement("fieldset")}}, {{HTMLElement("caption")}}, or {{HTMLElement("figcaption")}}, respectively, the association is automatic. For some other elements, like {{HTMLElement("textarea")}} and {{HTMLElement("input")}}, the accessible name also comes from an associated element, the {{HTMLElement("label")}} element, but that association has to explicitly set with a `for` attribute value on the `<label>` that matches the form control's `id`.

With some elements, like {{HTMLElement("img")}}, the accessible name comes from its attributes, in this case, the `alt` attribute value. Given `<img src="grape.jpg" alt="banana"/>`, the image's accessible name is "banana."

To create an association between visible content and an element or multiple text nodes and an element, the [`aria-labeledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute can be used. If there is no visible text to associate with a UI element needing an accessible name, the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute can be used. Names should not be added to elements marking up inline text, like {{HTMLElement("code")}}, {{HTMLElement("del")}}, and {{HTMLElement("mark")}}.

Many elements, such as sections of textual content, don't need an accessible name. All controls should have an accessible name. All images that convey information and aren't purely presentational do too.

Assistive technologies will provide the user with the accessibility name property, which is the accessible name along with the element's role. While many elements don't need an accessible name, some content [roles](/en-US/docs/Web/Accessibility/ARIA/Roles) can benefit from having an accessible name. For example, a [`tabpanel`](/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) is a section of content that appears after a user activates the associated element with a [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) role. This role can be set on an element with no needed name, like the {{HTMLElement("div")}} element. The `tab` is the control and must have an accessible name. The `tabpanel` is the child (content section) of the `tab`. Adding `aria-labelledby` to the `tabpanel` is a best practice.

## See also

- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Roles)
- [ARIA attribute](/en-US/docs/Web/Accessibility/ARIA/Attributes)
- [Accessibility](/en-US/docs/Web/Accessibility)
- [Learn accessibility](/en-US/docs/Learn/Accessibility)
