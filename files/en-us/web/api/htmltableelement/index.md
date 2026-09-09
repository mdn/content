---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
page-type: web-api-interface
browser-compat: api.HTMLTableElement
---

{{APIRef("HTML DOM")}}

The **`HTMLTableElement`** interface provides special properties and methods (beyond the regular {{DOMxRef("HTMLElement")}} object interface it also has available to it by inheritance) for manipulating the layout and presentation of tables in an HTML document.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTableElement.caption")}}
  - : An {{domxref("HTMLTableCaptionElement")}} representing the first {{HTMLElement("caption")}} element child of the given {{HTMLElement("table")}}, or `null` if no such element exists. This property can be assigned, which causes the existing first `<caption>` element child, if any, to be removed, and the given value, if it is not `null`, to be inserted as the first child. If the assigned value is not an {{domxref("HTMLTableCaptionElement")}} or `null`, a {{jsxref("TypeError")}} is thrown.
- {{DOMxRef("HTMLTableElement.tHead")}}
  - : An {{domxref("HTMLTableSectionElement")}} representing the first {{HTMLElement("thead")}} element child of the given {{HTMLElement("table")}}, or `null` if no such element exists. This property can be assigned, which causes the existing first `<thead>` element child, if any, to be removed, and the given value, if it is not `null`, to be inserted immediately before the first element child that's neither a {{HTMLElement("caption")}} nor a {{HTMLElement("colgroup")}}, or as the last child if there is no such element. If the assigned value is not an {{domxref("HTMLTableSectionElement")}} or `null`, a {{jsxref("TypeError")}} is thrown; otherwise, if it is not a {{HTMLElement("thead")}} element or `null`, a `HierarchyRequestError` {{domxref("DOMException")}} is thrown.
- {{DOMxRef("HTMLTableElement.tFoot")}}
  - : An {{domxref("HTMLTableSectionElement")}} representing the first {{HTMLElement("tfoot")}} element child of the given {{HTMLElement("table")}}, or `null` if no such element exists. This property can be assigned, which causes the existing first `<tfoot>` element child, if any, to be removed, and the given value, if it is not `null`, to be inserted as the last child. If the assigned value is not an {{domxref("HTMLTableSectionElement")}} or `null`, a {{jsxref("TypeError")}} is thrown; otherwise, if it is not a {{HTMLElement("tfoot")}} element or `null`, a `HierarchyRequestError` {{domxref("DOMException")}} is thrown.
- {{DOMxRef("HTMLTableElement.rows")}} {{ReadOnlyInline}}
  - : Returns a live {{domxref("HTMLCollection")}} of all {{HTMLElement("tr")}} elements that are a child of the given {{HTMLElement("table")}} element, or a child of one of the table's {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, and {{HTMLElement("tfoot")}} children. The members of the `<thead>` appear first, followed by members of the `<tbody>` and the table itself, and members of the `<tfoot>` come last, sorted by tree order within each group. The returned object is automatically updated when the `HTMLTableElement` changes.
- {{DOMxRef("HTMLTableElement.tBodies")}} {{ReadOnlyInline}}
  - : Returns a live {{domxref("HTMLCollection")}} of all {{HTMLElement("tbody")}} element children of the given {{HTMLElement("table")}}. The returned object is automatically updated when the `HTMLTableElement` changes.

### Obsolete Properties

> [!WARNING]
> The following properties are obsolete. You should avoid using them.

- {{DOMxRef("HTMLTableElement.align")}} {{deprecated_inline}}
  - : A string containing an enumerated value reflecting the [`align`](/en-US/docs/Web/HTML/Reference/Elements/table#align) attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, and `"center"`.
- {{DOMxRef("HTMLTableElement.bgColor")}} {{deprecated_inline}}
  - : A string containing the background color of the cells. It reflects the obsolete [`bgColor`](/en-US/docs/Web/HTML/Reference/Elements/table#bgcolor) attribute.
- {{DOMxRef("HTMLTableElement.border")}} {{deprecated_inline}}
  - : A string containing the width in pixels of the border of the table. It reflects the obsolete [`border`](/en-US/docs/Web/HTML/Reference/Elements/table#border) attribute.
- {{DOMxRef("HTMLTableElement.cellPadding")}} {{deprecated_inline}}
  - : A string containing the width in pixels of the horizontal and vertical space between cell content and cell borders. It reflects the obsolete [`cellpadding`](/en-US/docs/Web/HTML/Reference/Elements/table#cellpadding) attribute.
- {{DOMxRef("HTMLTableElement.cellSpacing")}} {{deprecated_inline}}
  - : A string containing the width in pixels of the horizontal and vertical separation between cells. It reflects the obsolete [`cellspacing`](/en-US/docs/Web/HTML/Reference/Elements/table#cellspacing) attribute.
- {{DOMxRef("HTMLTableElement.frame")}} {{deprecated_inline}}
  - : A string containing the type of the external borders of the table. It reflects the obsolete [`frame`](/en-US/docs/Web/HTML/Reference/Elements/table#frame) attribute and can take one of the following values: `"void"`, `"above"`, `"below"`, `"hsides"`, `"vsides"`, `"lhs"`, `"rhs"`, `"box"`, or `"border"`.
- {{DOMxRef("HTMLTableElement.rules")}} {{deprecated_inline}}
  - : A string containing the type of the internal borders of the table. It reflects the obsolete [`rules`](/en-US/docs/Web/HTML/Reference/Elements/table#rules) attribute and can take one of the following values: `"none"`, `"groups"`, `"rows"`, `"cols"`, or `"all"`.
- {{DOMxRef("HTMLTableElement.summary")}} {{deprecated_inline}}
  - : A string containing a description of the purpose or the structure of the table. It reflects the obsolete [`summary`](/en-US/docs/Web/HTML/Reference/Elements/table#summary) attribute.
- {{DOMxRef("HTMLTableElement.width")}} {{deprecated_inline}}
  - : A string containing the length in pixels or in percentage of the desired width of the entire table. It reflects the obsolete [`width`](/en-US/docs/Web/HTML/Reference/Elements/table#width) attribute.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("HTMLElement")}}_.

- {{DOMxRef("HTMLTableElement.createTHead()")}}
  - : Creates a {{HTMLElement("thead")}} element, inserts it before the first element child of the given {{HTMLElement("table")}} that's neither a {{HTMLElement("caption")}} nor a {{HTMLElement("colgroup")}}, or as the last child if no such insertion location is found, and returns it. If the table already has a `<thead>` element child, this method returns the first such child without creating one.
- {{DOMxRef("HTMLTableElement.deleteTHead()")}}
  - : Removes the first {{HTMLElement("thead")}} element child from a given {{HTMLElement("table")}}, if any.
- {{DOMxRef("HTMLTableElement.createTFoot()")}}
  - : Creates a {{HTMLElement("tfoot")}} element, inserts it as the last child of the given {{HTMLElement("table")}}, and returns it. If the table already has a `<tfoot>` element child, this method returns the first such child without creating one.
- {{DOMxRef("HTMLTableElement.deleteTFoot()")}}
  - : Removes the first {{HTMLElement("tfoot")}} element child from a given {{HTMLElement("table")}}, if any.
- {{DOMxRef("HTMLTableElement.createTBody()")}}
  - : Creates a {{HTMLElement("tbody")}} element, inserts it immediately after the last `<tbody>` element child of the given {{HTMLElement("table")}}, or as the last child if there is no such element, and returns it.
- {{DOMxRef("HTMLTableElement.createCaption()")}}
  - : Creates a {{HTMLElement("caption")}} element, inserts it as the first child of the given {{HTMLElement("table")}}, and returns it. If the table already has a `<caption>` element child, this method returns the first such child without creating one.
- {{DOMxRef("HTMLTableElement.deleteCaption()")}}
  - : Removes the first {{HTMLElement("caption")}} element child from a given {{HTMLElement("table")}}, if any.
- {{DOMxRef("HTMLTableElement.insertRow()")}}
  - : Creates a {{HTMLElement("tr")}} element, inserts it at the specified position in the {{domxref("HTMLTableElement.rows", "rows")}} collection, and returns it. If the `rows` collection is empty and the table also has no {{HTMLElement("tbody")}} elements, a `<tbody>` element is first created and inserted.
- {{DOMxRef("HTMLTableElement.deleteRow()")}}
  - : Removes a specific row ({{HTMLElement("tr")}}) from a given {{HTMLElement("table")}}. If `index` is `-1`, the last row is removed.

## Examples

### Using the DOM Table Interface

The `HTMLTableElement` interface provides some convenience methods for creating and manipulating tables. Two frequently used methods are {{domxref("HTMLTableElement.insertRow")}} and {{domxref("HTMLTableRowElement.insertCell")}}.

To add a row and some cells to an existing table:

```html
<table id="table0">
  <tbody>
    <tr>
      <td>Row 0 Cell 0</td>
      <td>Row 0 Cell 1</td>
    </tr>
  </tbody>
</table>
```

```js
const table = document.getElementById("table0");
const row = table.insertRow(-1);

for (let i = 0; i < 2; i++) {
  const cell = row.insertCell(-1);
  const text = `Row ${row.rowIndex} Cell ${i}`;
  cell.appendChild(document.createTextNode(text));
}
```

{{EmbedLiveSample("using_the_dom_table_interface", "", "300")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("table")}}.
