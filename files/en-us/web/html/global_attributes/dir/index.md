---
title: dir
slug: Web/HTML/Global_attributes/dir
page-type: html-attribute
browser-compat: html.global_attributes.dir
---

{{HTMLSidebar("Global_attributes")}}

The **`dir`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an [enumerated](/en-US/docs/Glossary/Enumerated) attribute that indicates the directionality of the element's text.

{{EmbedInteractiveExample("pages/tabbed/attribute-dir.html","tabbed-standard")}}

It can have the following values:

- `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English);
- `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic);
- `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then applies that directionality to the whole element.

> [!NOTE]
> The `auto` value should be used for data with an unknown directionality, like data coming from user input or external data.

If unspecified, the value is [inherited](#inheritance) from the parent element.

This attribute can be overridden by the CSS properties {{ cssxref("direction") }} and {{ cssxref("unicode-bidi") }}, if a CSS page is active and the element supports these properties.

As the directionality of the text is semantically related to its content and not to its presentation, it is recommended that web developers use this attribute instead of the related CSS properties when possible. That way, the text will display correctly even on a browser that doesn't support CSS or has the CSS deactivated.

## Inheritance

If an element has no `dir` attribute, it will inherit the `dir` value set on its [parent node](/en-US/docs/Glossary/Node/DOM), which in turn may inherit it from its parent, and so on.

## Usage notes

An image can have its `dir` property set to `"rtl"` in which case the HTML attributes `title` and `alt` will be formatted and defined as `"rtl"`.

When a table has its `dir` set to `"rtl"`, the column order is arranged from right to left.

This attribute is mandatory for the {{ HTMLElement("bdo") }} element where it has a different semantic meaning.

This attribute is _not_ inherited by the {{ HTMLElement("bdi") }} element. If not set, its value is `auto`.

Browsers might allow users to change the directionality of {{ HTMLElement("input") }} and {{ HTMLElement("textarea") }}s in order to assist with authoring content. Chrome and Safari provide a directionality option in the contextual menu of input fields. Firefox uses <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> but does NOT update the `dir` attribute value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
- {{domxref("HTMLElement.dir")}} that reflects this attribute.
