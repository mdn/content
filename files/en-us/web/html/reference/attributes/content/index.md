---
title: "HTML attribute: content"
short-title: content
slug: Web/HTML/Reference/Attributes/content
page-type: html-attribute
browser-compat: html.elements.meta.content
sidebar: htmlsidebar
---

The **`content`** attribute specifies the value of a metadata name defined by the `<meta>` [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute.
It takes a string as its value, and the expected syntax varies depending on the `name` value used.

## Value

The types of values that a `content` attribute accepts depends on the `name` value.
For details on specific formats and types, see the [`<meta>` `name` attribute](/en-US/docs/Web/HTML/Reference/Elements/meta/name) page.

## Examples

### Setting a document meta description

The following `<meta>` tag uses `name=description` to set a "meta description" for a document.
The `content` attribute provides the value for the metadata:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `<meta>` [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute
