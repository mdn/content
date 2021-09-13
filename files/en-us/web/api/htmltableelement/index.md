---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLTableElement
---
{{APIRef("HTML DOM")}}

The **`HTMLTableElement`** interface provides special properties and methods (beyond the regular {{DOMxRef("HTMLElement")}} object interface it also has available to it by inheritance) for manipulating the layout and presentation of tables in an HTML document.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTableElement.caption")}}
  - : Is a {{DOMxRef("HTMLTableCaptionElement")}} representing the first {{HTMLElement("caption")}} that is a child of the element, or `null` if none is found. When set, if the object doesn't represent a `<caption>`, a {{DOMxRef("DOMException")}} with the `HierarchyRequestError` name is thrown. If a correct object is given, it is inserted in the tree as the first child of this element and the first `<caption>` that is a child of this element is removed from the tree, if any.
- {{DOMxRef("HTMLTableElement.tHead")}}
  - : Is a {{DOMxRef("HTMLTableSectionElement")}} representing the first {{HTMLElement("thead")}} that is a child of the element, or `null` if none is found. When set, if the object doesn't represent a `<thead>`, a {{DOMxRef("DOMException")}} with the `HierarchyRequestError` name is thrown. If a correct object is given, it is inserted in the tree immediately before the first element that is neither a {{HTMLElement("caption")}}, nor a {{HTMLElement("colgroup")}}, or as the last child if there is no such element, and the first `<thead>` that is a child of this element is removed from the tree, if any.
- {{DOMxRef("HTMLTableElement.tFoot")}}
  - : Is a {{DOMxRef("HTMLTableSectionElement")}} representing the first {{HTMLElement("tfoot")}} that is a child of the element, or `null` if none is found. When set, if the object doesn't represent a `<tfoot>`, a {{DOMxRef("DOMException")}} with the `HierarchyRequestError` name is thrown. If a correct object is given, it is inserted in the tree immediately before the first element that is neither a {{HTMLElement("caption")}}, a {{HTMLElement("colgroup")}}, nor a {{HTMLElement("thead")}}, or as the last child if there is no such element, and the first `<tfoot>` that is a child of this element is removed from the tree, if any.
- {{DOMxRef("HTMLTableElement.rows")}}{{ReadOnlyInline}}
  - : Returns a live {{DOMxRef("HTMLCollection")}} containing all the rows of the element, that is all {{HTMLElement("tr")}} that are a child of the element, or a child of one of its {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} and {{HTMLElement("tfoot")}} children. The rows members of a `<thead>` appear first, in tree order, and those members of a `<tbody>` last, also in tree order. The `HTMLCollection` is live and is automatically updated when the `HTMLTableElement` changes.
- {{DOMxRef("HTMLTableElement.tBodies")}}{{ReadOnlyInline}}
  - : Returns a live {{DOMxRef("HTMLCollection")}} containing all the {{HTMLElement("tbody")}} of the element. The `HTMLCollection` is live and is automatically updated when the `HTMLTableElement` changes.

### Obsolete Properties

> **Warning:** The following properties are obsolete.  You should avoid using them.

- {{DOMxRef("HTMLTableElement.align")}} {{deprecated_inline}}
  - : Is a {{DOMxRef("DOMString")}} containing an enumerated value reflecting the {{HTMLAttrxRef("align", "table")}} attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, and `"center"`.
- {{DOMxRef("HTMLTableElement.bgColor")}} {{deprecated_inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the background color of the cells. It reflects the obsolete {{HTMLAttrxRef("bgColor", "table")}} attribute.
- {{DOMxRef("HTMLTableElement.border")}} {{deprecated_inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the width in pixels of the border of the table. It reflects the obsolete {{HTMLAttrxRef("border", "table")}} attribute.
- {{DOMxRef("HTMLTableElement.cellPadding")}} {{deprecated_inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the width in pixels of the horizontal and vertical sapce between cell content and cell borders. It reflects the obsolete {{HTMLAttrxRef("cellpadding", "table")}} attribute.
- {{DOMxRef("HTMLTableElement.cellSpacing")}} {{deprecated_inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the width in pixels of the horizontal and vertical separation between cells. It reflects the obsolete {{HTMLAttrxRef("cellspacing", "table")}} attribute.
- {{DOMxRef("HTMLTableElement.frame")}} {{deprecated_inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the type of the external borders of the table. It reflects the obsolete {{HTMLAttrxRef("frame", "table")}} attribute and can take one of the following values: `"void"`, `"above"`, `"below"`, `"hsides"`, `"vsides"`, `"lhs"`, `"rhs"`, `"box"`, or `"border"`.
- {{DOMxRef("HTMLTableElement.rules")}} {{deprecated_inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the type of the internal borders of the table. It reflects the obsolete {{HTMLAttrxRef("rules", "table")}} attribute and can take one of the following values: `"none"`, `"groups"`, `"rows"`, `"cols"`, or `"all"`.
- {{DOMxRef("HTMLTableElement.summary")}} {{deprecated_inline}}
  - : Is a {{DOMxRef("DOMString")}} containing a description of the purpose or the structure of the table. It reflects the obsolete {{HTMLAttrxRef("summary", "table")}} attribute.
- {{DOMxRef("HTMLTableElement.width")}} {{deprecated_inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the length in pixels or in percentage of the desired width fo the entire table. It reflects the obsolete {{HTMLAttrxRef("width", "table")}} attribute.

## Methods

_Inherits methods from its parent, {{DOMxRef("HTMLElement")}}_.

- {{DOMxRef("HTMLTableElement.createTHead()")}}
  - : Returns an {{DOMxRef("HTMLTableSectionElement")}} representing the first {{HTMLElement("thead")}} that is a child of the element. If none is found, a new one is created and inserted in the tree immediately before the first element that is neither a {{HTMLElement("caption")}}, nor a {{HTMLElement("colgroup")}}, or as the last child if there is no such element.
- {{DOMxRef("HTMLTableElement.deleteTHead()")}}
  - : Removes the first {{HTMLElement("thead")}} that is a child of the element.
- {{DOMxRef("HTMLTableElement.createTFoot()")}}
  - : Returns an {{DOMxRef("HTMLTableSectionElement")}} representing the first {{HTMLElement("tfoot")}} that is a child of the element. If none is found, a new one is created and inserted in the tree as the last child.
- {{DOMxRef("HTMLTableElement.deleteTFoot()")}}
  - : Removes the first {{HTMLElement("tfoot")}} that is a child of the element.
- {{DOMxRef("HTMLTableElement.createTBody()")}}
  - : Returns a {{DOMxRef("HTMLTableSectionElement")}} representing a new {{HTMLElement("tbody")}} that is a child of the element. It is inserted in the tree after the last element that is a {{HTMLElement("tbody")}}, or as the last child if there is no such element.
- {{DOMxRef("HTMLTableElement.createCaption()")}}
  - : Returns an {{DOMxRef("HTMLElement")}} representing the first {{HTMLElement("caption")}} that is a child of the element. If none is found, a new one is created and inserted in the tree as the first child of the {{HTMLElement("table")}} element.
- {{DOMxRef("HTMLTableElement.deleteCaption()")}}
  - : Removes the first {{HTMLElement("caption")}} that is a child of the element.
- {{DOMxRef("HTMLTableElement.insertRow()")}}
  - : Returns an {{DOMxRef("HTMLTableRowElement")}} representing a new row of the table. It inserts it in the rows collection immediately before the {{HTMLElement("tr")}} element at the given `index` position. If necessary a {{HTMLElement("tbody")}} is created. If the `index` is `-1`, the new row is appended to the collection. If the `index` is smaller than `-1` or greater than the number of rows in the collection, a {{DOMxRef("DOMException")}} with the value `IndexSizeError` is raised.
- {{DOMxRef("HTMLTableElement.deleteRow()")}}
  - : Removes the row corresponding to the `index` given in parameter. If the `index` value is `-1` the last row is removed; if it smaller than `-1` or greater than the amount of rows in the collection, a {{DOMxRef("DOMException")}} with the value `IndexSizeError` is raised.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("table")}}.
