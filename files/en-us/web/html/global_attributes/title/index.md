---
title: title
slug: Web/HTML/Global_attributes/title
tags:
  - Global attributes
  - HTML
  - Reference
  - Title
browser-compat: html.global_attributes.title
---

{{HTMLSidebar("Global_attributes")}}

The **`title`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) contains text representing advisory information related to the element it belongs to.

{{EmbedInteractiveExample("pages/tabbed/attribute-title.html","tabbed-shorter")}}

Some typical uses:

- Labeling {{HTMLElement("iframe")}} elements for assistive technology
- Providing a programmatically associated label for an {{HTMLElement("input")}} element as a fallback for a real {{HTMLElement("label")}}
- Labeling controls in [data tables](/en-US/docs/Web/HTML/Element/table)

Additional semantics are attached to the `title` attributes of the {{HTMLElement("link")}}, {{HTMLElement("abbr")}}, {{HTMLElement("input")}}, and {{HTMLElement("menuitem")}} elements.

## Multiline titles

The `title` attribute may contain several lines. Each `U+000A LINE FEED` (`LF`) character represents a line break. Some caution must be taken, as this means the following renders across two lines:

### HTML

```html
<p>Newlines in <code>title</code> should be taken into account,
like <abbr title="This is a
multiline title">example</abbr>.</p>
```

### Result

{{EmbedLiveSample('Multiline_titles')}}

## Title attribute inheritance

If an element has no `title` attribute, then it inherits it from its parent node, which in turn may inherit it from its parent, and so on.

If this attribute is set to the empty string, it means its ancestors' `title`s are irrelevant and shouldn't be used in the tooltip for this element.

### HTML

```html
<div title="CoolTip">
  <p>Hovering here will show “CoolTip”.</p>
  <p title="">Hovering here will show nothing.</p>
</div>
```

### Result

{{EmbedLiveSample('Title_attribute_inheritance')}}

## Accessibility concerns

Use of the `title` attribute is highly problematic for:

- People using touch-only devices
- People navigating with keyboards
- People navigating with assistive technology such as screen readers or magnifiers
- People experiencing fine motor control impairment
- People with cognitive concerns

This is due to inconsistent browser support, compounded by the additional assistive technology parsing of the browser-rendered page. If a tooltip effect is desired, it is better to [use a more accessible technique](https://inclusive-components.design/tooltips-toggletips/) that can be accessed with the above browsing methods.

- [3.2.5.1. The title attribute | W3C HTML 5.2: 3. Semantics, structure, and APIs of HTML documents](https://www.w3.org/TR/html/dom.html#the-title-attribute)
- [Using the HTML title attribute – updated | The Paciello Group](https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [The Trials and Tribulations of the Title Attribute - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
- {{domxref("HTMLElement.title")}} that reflects this attribute.
