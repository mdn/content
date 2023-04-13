---
title: "<summary>: The Disclosure Summary element"
slug: Web/HTML/Element/summary
page-type: html-element
browser-compat: html.elements.summary
---

{{HTMLSidebar}}

The **`<summary>`** [HTML](/en-US/docs/Web/HTML) element specifies a summary, caption, or legend for a {{HTMLElement("details")}} element's disclosure box. Clicking the `<summary>` element toggles the state of the parent `<details>` element open and closed.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

The `<summary>` element's contents can be any heading content, plain text, or HTML that can be used within a paragraph.

A `<summary>` element may _only_ be used as the first child of a `<details>` element. When the user clicks on the summary, the parent `<details>` element is toggled open or closed, and then a {{domxref("HTMLDetailsElement/toggle_event", "toggle")}} event is sent to the `<details>` element, which can be used to let you know when this state change occurs.

### Default label text

If a `<details>` element's first child is not a `<summary>` element, the {{Glossary("user agent")}} will use a default string (typically "Details") as the label for the disclosure box.

### Default style

Per the HTML specification, the default style for `<summary>` elements includes `display: list-item`. This makes it possible to change or remove the icon displayed as the disclosure widget next to the label from the default, which is typically a triangle.

You can also change the style to `display: block` to remove the disclosure triangle.

See the [Browser compatibility](#browser_compatibility) section for details, as not all browsers support full functionality of this element yet.

For Webkit-based browsers, such as Safari, it is possible to control the icon display through the non-standard CSS pseudo-element `::-webkit-details-marker`. To remove the disclosure triangle, use `summary::-webkit-details-marker { display: none }`.

## Examples

Below are some examples showing `<summary>` in use. You can find more examples in the documentation for the {{HTMLElement("details")}} element.

### Basic example

A simple example showing the use of `<summary>` in a {{HTMLElement("details")}} element:

```html
<details open>
  <summary>Overview</summary>
  <ol>
    <li>Cash on hand: $500.00</li>
    <li>Current invoice: $75.30</li>
    <li>Due date: 5/6/19</li>
  </ol>
</details>
```

#### Result

{{EmbedLiveSample("Basic_example", 650, 120)}}

### Summaries as headings

You can use heading elements in `<summary>`, like this:

```html
<details open>
  <summary><h4>Overview</h4></summary>
  <ol>
    <li>Cash on hand: $500.00</li>
    <li>Current invoice: $75.30</li>
    <li>Due date: 5/6/19</li>
  </ol>
</details>
```

#### Result

{{EmbedLiveSample("Summaries_as_headings", 650, 120)}}

This currently has some spacing issues that could be addressed using CSS.

> **Warning:** Because the `<summary>` element has a default role of [button](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) (which strips all roles from child elements), this example will not work for users of assistive technologies such as screen readers. The `<h4>` will have its role removed and thus will not be treated as a heading for these users.

### HTML in summaries

This example adds some semantics to the `<summary>` element to indicate the label as important:

```html
<details open>
  <summary><strong>Overview</strong></summary>
  <ol>
    <li>Cash on hand: $500.00</li>
    <li>Current invoice: $75.30</li>
    <li>Due date: 5/6/19</li>
  </ol>
</details>
```

#### Result

{{EmbedLiveSample("HTML_in_summaries", 650, 120)}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >
        or one element of
        <a href="/en-US/docs/Web/HTML/Content_categories#heading_content"
          >Heading content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None; both the start tag and the end tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>The {{HTMLElement("details")}} element.</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role"
            >button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("details")}}
