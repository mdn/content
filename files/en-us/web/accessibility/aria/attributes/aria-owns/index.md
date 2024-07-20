---
title: aria-owns
slug: Web/Accessibility/ARIA/Attributes/aria-owns
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-owns
---

{{AccessibilitySidebar}}

The `aria-owns` attribute identifies an element (or elements) in order to define a visual, functional, or contextual relationship between a parent and its child elements when the DOM hierarchy cannot be used to represent the relationship.

## Description

Every element is the parent, sibling, or child of another element. The document object, made up of HTML elements and text nodes, is the basis of the DOM tree. The Accessibility Object Model (<abbr>AOM</abbr>) relies on a well-built DOM to enable assistive technologies to relay meaningful information about a document's contents to users.

There are circumstances where the layout that appears on screen may differ from the underlying DOM structure due to the ability of JavaScript to alter content and CSS to alter layout. When this is the case, the `aria-owns` attribute can be used to recreate a meaningful relationship for assistive technology that consumes the DOM.

When elements appear to be related visually but are not associated in the DOM, the `aria-owns` attribute enables creating the relationship that appears on screen in the accessibility layer for use by assistive technology. The **only** reason to include `aria-owns` is to expose a parent/child contextual relationship to assistive technology when the DOM's construction can't provide that relationship.

An "owning element" is any DOM ancestor of an element. If an element visually, functionally, or contextually appears to "own" (be an ancestor of) an element, but isn't actually an ancestor of the element in the DOM, include the `aria-owns` to create that relationship. Add the attribute to the owning element with reference to the non-child owned element (or elements) to tell assistive technology that an element should be treated as a child.

Referencing the ID of one or more elements allows any element to "own" any other element with an `aria-owns` declaration. The value of the `aria-owns` attribute is a space-separated ID reference list that references the IDs of one or more elements in the document.

> **Note:** An "owned" element is any DOM descendant of the element, any element specified as a child via `aria-owns`, or any DOM descendant of the owned child. The `aria-owns`-owned element should be an element that belongs to a separate parent tree in the DOM but should be treated as a child of the current element.

Do not use `aria-owns` as a replacement for the DOM hierarchy. If the relationship is represented in the DOM, do not use `aria-owns`.

A child element is owned by its DOM parent by default: in this case, `aria-owns` should not be used. Avoid using the `aria-owns` attribute to rearrange existing child elements into a different order.

When using `aria-owns`, make sure you [manage focus order](https://css-tricks.com/focus-management-and-inert/). Ensure the visual focus order matches this assistive technology reading order.

An example of when to use `aria-owns` includes pop-up sub-menus that visually appear positioned near a parent menu, but cannot be nested in the DOM within the parent menu because it would affect the visual presentation. In this case, use `aria-owns` to present the sub-menu as a child of the parent menu to a screen reader.

> **Note:** The `aria-owns` attribute should only be used when the parent/child relationship cannot be determined from the DOM.

If an element has both `aria-owns` and DOM children, the order of the child elements:

1. The actual DOM children first,
2. Then the elements referenced in `aria-owns`.

This order can be changed by including the ID references to the actual DOM children in the `aria-owns` value.

The {{CSSXRef('order')}} property, part of flex or grid layouts, can be used to change the order of flex and grid items making them appear in a different order from their order in the source document, creating a divergence of the logical order of elements. While it may be tempting to order the accessibility layer to match order changes created with the CSS {{CSSXref('order')}} property, avoiding both the `order` property and the `aria-owns` attribute is the best option.

Make sure your owned elements have only one owner. Do not specify the `id` of an element in more than one other element's `aria-owns` attribute. An element can have only one owner.

> **Warning:** While [`aria-owns` is now supported](https://a11ysupport.io/tech/aria/aria-owns_attribute) in all modern browsers, `aria-owns` may not be exposed to users of MacOS and iOS using VoiceOver prior to iOS 17.3 and macOS 14.3.

## Values

- `id` list
  - : Space separated list of one or more ID values referencing the elements being owned by the current element

## Associated roles

Used in **ALL** roles.

## Specifications

{{Specifications}}

## See also

- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-owns` browser support](https://a11ysupport.io/tech/aria/aria-owns_attribute)
