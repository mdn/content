---
title: '<template>: The Content Template element'
slug: Web/HTML/Element/template
tags:
  - Element
  - HTML
  - HTML Web Components
  - HTML:Flow content
  - HTML:Metadata content
  - HTML:Phrasing content
  - HTML:Script-supporting element
  - Reference
  - Template
  - Web
  - Web Components
browser-compat: html.elements.template
---

{{HTMLRef}}

The **`<template>`** [HTML](/en-US/docs/Web/HTML) element is a mechanism for holding {{Glossary("HTML")}} that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.

Think of a template as a content fragment that is being stored for subsequent use in the document. While the parser does process the contents of the **`<template>`** element while loading the page, it does so only to ensure that those contents are valid; the element's contents are not rendered, however.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#metadata_content"
          >Metadata content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >,
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#script-supporting_elements"
          >script-supporting element</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>No restrictions</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#metadata_content"
          >metadata content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >, or
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#script-supporting_elements"
          >script-supporting elements</a
        >. Also allowed as a child of a {{HTMLElement("colgroup")}}
        element that does <em>not</em> have a
        {{htmlattrxref("span", "colgroup")}} attribute.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTemplateElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

However, the {{domxref("HTMLTemplateElement")}} has a {{domxref("HTMLTemplateElement.content", "content")}} property, which is a read-only {{domxref("DocumentFragment")}} containing the DOM subtree which the template represents. Note that directly using the value of the {{domxref("HTMLTemplateElement.content", "content")}} could lead to unexpected behavior, see [Avoiding DocumentFragment pitfall](#avoiding_documentfragment_pitfall) section below.

## Examples

First we start with the HTML portion of the example.

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- existing data could optionally be included here -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

First, we have a table into which we will later insert content using JavaScript code. Then comes the template, which describes the structure of an HTML fragment representing a single table row.

Now that the table has been created and the template defined, we use JavaScript to insert rows into the table, with each row being constructed using the template as its basis.

```js
// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ('content' in document.createElement('template')) {
    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    const tbody = document.querySelector("tbody");
    const template = document.querySelector('#productrow');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    let td = clone.querySelectorAll("td");
    td[0].textContent = "1235646565";
    td[1].textContent = "Stuff";

    tbody.appendChild(clone);

    // Clone the new row and insert it into the table
    const clone2 = template.content.cloneNode(true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans 2";

    tbody.appendChild(clone2);

} else {
  // Find another way to add the rows to the table because
  // the HTML template element is not supported.
}
```

The result is the original HTML table, with two new rows appended to it via JavaScript:

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("Examples", 500, 120)}}

## Avoiding DocumentFragment pitfall

A {{domxref("DocumentFragment")}} is not a valid target for various events, as such it is often preferable to clone or refer to the elements within it.

Consider the following HTML and JavaScript:

### HTML

```html
<div id="container"></div>

<template id="template">
  <div>Click me</div>
</template>
```

### JavaScript

```js
const container = document.getElementById("container");
const template = document.getElementById("template");

function clickHandler(event) {
  event.target.append(" — Clicked this div");
}

const firstClone = template.content.cloneNode(true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = template.content.firstElementChild.cloneNode(true);
secondClone.addEventListener("click", clickHandler);
container.appendChild(secondClone);
```

### Result

`firstClone` is a DocumentFragment instance, so while it gets appended inside the container as expected, clicking on it does not trigger the click event. `secondClone` is an [HTMLDivElement](/en-US/docs/Web/API/HTMLDivElement) instance, clicking on it works as one would expect.

{{EmbedLiveSample('Avoiding_DocumentFragment_pitfall')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Web components: {{HTMLElement("slot")}} (and historical: {{HTMLElement("shadow")}})
- [Using templates and slots](/en-US/docs/Web/Web_Components/Using_templates_and_slots)
