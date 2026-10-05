---
title: "HTMLTableElement: createCaption() method"
short-title: createCaption()
slug: Web/API/HTMLTableElement/createCaption
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.createCaption
---

{{APIRef("HTML DOM")}}

The **`createCaption()`** method of the {{domxref("HTMLTableElement")}} interface creates a {{HTMLElement("caption")}} element, inserts it as the first child of the given {{HTMLElement("table")}}, and returns it. If the table already has a `<caption>` element child, this method returns the first such child without creating one.

When creation is needed, this method creates and inserts the element directly, without requiring separate calls to methods such as {{domxref("Document.createElement()")}} and {{domxref("Node.insertBefore()")}}.

## Syntax

```js-nolint
createCaption()
```

### Parameters

None.

### Return value

An {{domxref("HTMLTableCaptionElement")}}.

## Examples

This example uses JavaScript to add a caption to a table that initially lacks one.

### HTML

```html
<table>
  <tbody>
    <tr>
      <td>Cell 1.1</td>
      <td>Cell 1.2</td>
      <td>Cell 1.3</td>
    </tr>
    <tr>
      <td>Cell 2.1</td>
      <td>Cell 2.2</td>
      <td>Cell 2.3</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
const table = document.querySelector("table");
const caption = table.createCaption();
caption.textContent = "This caption was created by JavaScript!";
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.createTBody()")}}
- {{domxref("HTMLTableElement.createTFoot()")}}
- {{domxref("HTMLTableElement.createTHead()")}}
- {{domxref("HTMLTableElement.deleteCaption()")}}
