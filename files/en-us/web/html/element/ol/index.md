---
title: "<ol>: The Ordered List element"
slug: Web/HTML/Element/ol
page-type: html-element
browser-compat: html.elements.ol
---

{{HTMLSidebar}}

The **`<ol>`** [HTML](/en-US/docs/Web/HTML) element represents an ordered list of items — typically rendered as a numbered list.

{{EmbedInteractiveExample("pages/tabbed/ol.html", "tabbed-shorter")}}

## Attributes

This element also accepts the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `reversed`
  - : This Boolean attribute specifies that the list's items are in reverse order. Items will be numbered from high to low.
- `start`
  - : An integer to start counting from for the list items. Always an Arabic numeral (1, 2, 3, etc.), even when the numbering `type` is letters or Roman numerals. For example, to start numbering elements from the letter "d" or the Roman numeral "iv," use `start="4"`.
- `type`

  - : Sets the numbering type:

    - `a` for lowercase letters
    - `A` for uppercase letters
    - `i` for lowercase Roman numerals
    - `I` for uppercase Roman numerals
    - `1` for numbers (default)

    The specified type is used for the entire list unless a different [`type`](/en-US/docs/Web/HTML/Element/li#type) attribute is used on an enclosed {{HTMLElement("li")}} element.

    > [!NOTE]
    > Unless the type of the list number matters (like legal or technical documents where items are referenced by their number/letter), use the CSS {{CSSxRef("list-style-type")}} property instead.

## Usage notes

Typically, ordered list items display with a preceding [marker](/en-US/docs/Web/CSS/::marker), such as a number or letter.

The `<ol>` and {{HTMLElement("ul")}} (or the synonym {{HTMLElement("menu")}}) elements may nest as deeply as desired, alternating between `<ol>`, `<ul>` (or `<menu>`) as needed.

The `<ol>` and {{HTMLElement("ul")}} elements both represent a list of items. The difference is with the `<ol>` element, the order is meaningful. For example:

- Steps in a recipe
- Turn-by-turn directions
- The list of ingredients in decreasing proportion on nutrition information labels

To determine which list to use, try changing the order of the list items; if the meaning changes, use the `<ol>` element — otherwise you can use {{HTMLElement("ul")}} otherwise, or {{HTMLElement("menu")}} if your list is a menu.

## Examples

### Basic example

```html
<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

#### Result

{{EmbedLiveSample("Basic_example", 400, 100)}}

### Using Roman Numeral type

```html
<ol type="i">
  <li>Introduction</li>
  <li>List of Grievances</li>
  <li>Conclusion</li>
</ol>
```

#### Result

{{EmbedLiveSample("Using_Roman_Numeral_type", 400, 100)}}

### Using the start attribute

```html
<p>Finishing places of contestants not in the winners' circle:</p>

<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin' Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
```

#### Result

{{EmbedLiveSample("Using_the_start_attribute", 400, 100)}}

### Nesting lists

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- closing </li> tag is not here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
  </li>
  <!-- Here's the closing </li> tag -->
  <li>third item</li>
</ol>
```

#### Result

{{EmbedLiveSample("Nesting_lists", 400, 150)}}

### Unordered list inside ordered list

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- closing </li> tag is not here! -->
    <ul>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ul>
  </li>
  <!-- Here's the closing </li> tag -->
  <li>third item</li>
</ol>
```

#### Result

{{EmbedLiveSample("Unordered_list_inside_ordered_list", 400, 150)}}

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
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >, and if the <code>&#x3C;ol></code> element's children include at least
        one {{HTMLElement("li")}} element,
        <a href="/en-US/docs/Web/HTML/Content_categories#palpable_content"
          >palpable content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Zero or more {{ HTMLElement("li") }},
        {{HTMLElement("script")}} and
        {{HTMLElement("template")}} elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/list_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/directory_role"><code>directory</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role"><code>menubar</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/toolbar_role"><code>toolbar</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{DOMxRef("HTMLOListElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other list-related HTML Elements: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- CSS properties that may be specially useful to style the `<ol>` element:

  - the {{CSSxRef("list-style")}} property, to choose the way the ordinal displays
  - [CSS counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), to handle complex nested lists
  - the {{CSSxRef("line-height")}} property, to simulate the deprecated `compact` attribute
  - the {{CSSxRef("margin")}} property, to control the list indentation
