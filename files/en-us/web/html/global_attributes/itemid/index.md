---
title: itemid
slug: Web/HTML/Global_attributes/itemid
tags:
  - Attribute
  - Global attribute
  - HTML
  - HTML Microdata
  - Microdata
  - Reference
  - itemid
browser-compat: html.global_attributes.itemid
---

{{HTMLSidebar("Global_attributes")}}

The **`itemid`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) provides microdata in the form of a unique, global identifier of an item.

An `itemid` attribute can only be specified for an element that has both [`itemscope`](/en-US/docs/Web/HTML/Global_attributes/itemscope) and [`itemtype`](/en-US/docs/Web/HTML/Global_attributes/itemtype) attributes. Also, `itemid` can only be specified on elements that possess an `itemscope` attribute whose corresponding `itemtype` refers to or defines a vocabulary that supports global identifiers.

The exact meaning of an `itemtype`'s global identifier is provided by the definition of that identifier within the specified vocabulary. The vocabulary defines whether several items with the same global identifier can coexist and, if so, how items with the same identifier are handled.

> **Note:** The {{glossary("WHATWG")}} definition specifies that an `itemid` must be a {{glossary("URL")}}. However, the following example correctly illustrates that a {{glossary("URN")}} may also be used. This inconsistency may reflect the incomplete nature of the Microdata specification.

## Examples

### Representing structured data for a book

This example uses microdata attributes to represent the following structured data:

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemtype: itemid</td>
      <td colspan="2">https://schema.org/Book: urn:isbn:0-374-22848-5</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>title</td>
      <td>Owls of the Eastern Ice</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>author</td>
      <td>Jonathan C Slaght</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished</td>
      <td>2020-08-04</td>
    </tr>
  </tbody>
</table>

#### HTML

```html
<dl itemscope
  itemtype="https://schema.org/Book"
  itemid="urn:isbn:0-374-22848-5<">
 <dt>Title
   <dd
    itemprop="title">Owls of the Eastern Ice
 <dt>Author
   <dd
     itemprop="author">Jonathan C Slaght
 <dt>Publication date
 <dd><time
   itemprop="datePublished"
   datetime="2020-08-04">August 4 2020</time>
</dl>
```

#### Result

{{EmbedLiveSample('Representing structured data for a book')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
- Other microdata related global attributes:

  - [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop)
  - [`itemref`](/en-US/docs/Web/HTML/Global_attributes/itemref)
  - [`itemscope`](/en-US/docs/Web/HTML/Global_attributes/itemscope)
  - [`itemtype`](/en-US/docs/Web/HTML/Global_attributes/itemtype)
