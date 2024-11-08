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

The content of the `<details>` provides the {{glossary("accessible description")}} for the `<summary>`.

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

> [!WARNING]
> Because the `<summary>` element has a default role of [button](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) (which strips all roles from child elements), this example will not work for users of assistive technologies such as screen readers. The `<h4>` will have its role removed and thus will not be treated as a heading for these users.

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

### Styling disclosure widgets

The `<summary>` element's marker, the disclosure triangle, can be customized with CSS. The marker can be targeted using the {{cssxref("::marker")}} pseudo-element and element supports the {{cssxref("list-style")}} shorthand property and its longhand component properties, such as {{cssxref("list-style-type")}}. This enables changing the triangle to an image (usually with {{cssxref("list-style-image")}}) or a string (inlcuding emojis). In this example, we replace the content of one disclosure widget and remove the icon from another by setting `list-style: none`, anding a custom disclosure icon via generated content.

#### CSS

In the first disclosure widget, we style the `::marker`, changing the {{cssxref("content")}} based on the `<details>` element's `[open]` attribute. For the second widget, we remove the marker with `list-style` properties, then add styled generated content with the {{cssxref("::after")}} pseudo-element. We also include styles for `::-webkit-details-marker` to target Safari. The selector for the browser-specific pseudo element is included in an {{cssxref(":is()")}} pseudo class doesn't invalidate the selector list.

```css
details {
  font-size: 1rem;
  font-family: "Open Sans", Calibri, sans-serif;
  border: solid;
  padding: 2px 6px;
  margin-bottom: 1em;
}

details:first-of-type summary::marker,
:is(::-webkit-details-marker) {
  content: "+ ";
  font-family: monospace;
  color: red;
  font-weight: bold;
}

details[open]:first-of-type summary::marker {
  content: "- ";
}

details:last-of-type summary {
  list-style: none;
  &::after {
    content: "+";
    color: white;
    background-color: darkgreen;
    border-radius: 1em;
    font-weight: bold;
    padding: 0 5px;
    margin-inline-start: 5px;
  }
  [open] &::after {
    content: "-";
  }
}
details:last-of-type summary::-webkit-details-marker {
  display: none;
}
```

The CSS included [attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors), the {{cssxref(":first-of-type")}} and {{cssxref(":last-of-type")}} pseudo-classes, the {{cssxref(":is()")}} pseudo-class qwhich takes a [forgiving selector list](/en-US/docs/Web/CSS/Selector_list#forgiving_selector_list), and CSS [nesting](/en-US/docs/Web/CSS/Nesting_selector).

#### HTML

```html
<details>
  <summary>Famous quote</summary>
  <p>
    <q>Nothing is impossible. The word itself says <q>I'm possible</q>.</q>
    —Audrey Hepburn
  </p>
</details>

<details>
  <summary>Famous quote</summary>
  <p>
    <q>Your passion is waiting for your courage to catch up.</q> —Isabelle
    Lafleche
  </p>
</details>
```

#### Result

{{EmbedLiveSample("Styling disclosure widgets", 650, 150)}}

## Technical summary

<table class="properties">
  <tbody>
     <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        none
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >, optionally intermixed with
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
      <td> <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">No corresponding role</a></td>
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
