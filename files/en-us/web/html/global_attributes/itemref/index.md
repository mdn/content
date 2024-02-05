---
title: itemref
slug: Web/HTML/Global_attributes/itemref
page-type: html-attribute
browser-compat: html.global_attributes.itemref
---

{{HTMLSidebar("Global_attributes")}}

Properties that are not descendants of an element with the [`itemscope`](/en-US/docs/Web/HTML/Global_attributes/itemscope) attribute can be associated with an item using the [global attribute](/en-US/docs/Web/HTML/Global_attributes) **`itemref`**.

`itemref` provides a list of element IDs (not `itemid`s) elsewhere in the document, with additional properties

The `itemref` attribute can only be specified on elements that have an `itemscope` attribute specified.

> **Note:** The `itemref` attribute is not part of the microdata data model. It is merely a syntactic construct to aid authors in adding annotations to pages where the data to be annotated does not follow a convenient tree structure. For example, it allows authors to mark up data in a table so that each column defines a separate item while keeping the properties in the cells.

## Examples

### Representing structured data for a band

This example uses microdata attributes to represent the following structured data (in [JSON-LD](https://json-ld.org/) format):

```json
{
  "@id": "amanda",
  "name": "Amanda",
  "band": {
    "@id": "b",
    "name": "Jazz Band",
    "size": 12
  }
}
```

#### HTML

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Band: <span itemprop="name">Jazz Band</span></p>
  <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

#### Result

{{EmbedLiveSample('Representing structured data for a band')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Other different global attributes](/en-US/docs/Web/HTML/Global_attributes)
- Other microdata related global attributes:

  - [`itemid`](/en-US/docs/Web/HTML/Global_attributes/itemid)
  - [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop)
  - [`itemscope`](/en-US/docs/Web/HTML/Global_attributes/itemscope)
  - [`itemtype`](/en-US/docs/Web/HTML/Global_attributes/itemtype)
