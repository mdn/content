---
title: "<ul>: The Unordered List element"
slug: Web/HTML/Element/ul
page-type: html-element
browser-compat: html.elements.ul
---

{{HTMLSidebar}}

The **`<ul>`** [HTML](/en-US/docs/Web/HTML) element represents an unordered list of items, typically rendered as a bulleted list.

{{EmbedInteractiveExample("pages/tabbed/ul.html", "tabbed-standard")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `compact` {{Deprecated_inline}} {{Non-standard_Inline}}

  - : This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the {{glossary("user agent")}}, and it doesn't work in all browsers.

    > **Warning:** Do not use this attribute, as it has been deprecated: use [CSS](/en-US/docs/Web/CSS) instead. To give a similar effect as the `compact` attribute, the CSS property {{cssxref("line-height")}} can be used with a value of `80%`.

- `type` {{Deprecated_inline}} {{Non-standard_Inline}}

  - : This attribute sets the bullet style for the list. The values defined under HTML3.2 and the transitional version of HTML 4.0/4.01 are:

    - `circle`
    - `disc`
    - `square`

    A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: `triangle`.

    If not present and if no [CSS](/en-US/docs/Web/CSS) {{ cssxref("list-style-type") }} property applies to the element, the user agent selects a bullet type depending on the nesting level of the list.

    > **Warning:** Do not use this attribute, as it has been deprecated; use the [CSS](/en-US/docs/Web/CSS) {{ cssxref("list-style-type") }} property instead.

## Usage notes

- The `<ul>` element is for grouping a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle, or a square. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the {{ cssxref("list-style-type") }} property.
- The `<ul>` and {{HTMLElement("ol")}} elements may be nested as deeply as desired. Moreover, the nested lists may alternate between `<ol>` and `<ul>` without restriction.
- The {{ HTMLElement("ol") }} and `<ul>` elements both represent a list of items. They differ in that, with the {{ HTMLElement("ol") }} element, the order is meaningful. To determine which one to use, try changing the order of the list items; if the meaning is changed, the {{ HTMLElement("ol") }} element should be used, otherwise you can use `<ul>`.

## Examples

### Simple example

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

#### Result

{{EmbedLiveSample("Simple_example", 400, 120)}}

### Nesting a list

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ul>
      <li>second item first subitem</li>
      <li>
        second item second subitem
        <!-- Same for the second nested unordered list! -->
        <ul>
          <li>second item second subitem first sub-subitem</li>
          <li>second item second subitem second sub-subitem</li>
          <li>second item second subitem third sub-subitem</li>
        </ul>
      </li>
      <!-- Closing </li> tag for the li that
                  contains the third unordered list -->
      <li>second item third subitem</li>
    </ul>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>
```

#### Result

{{EmbedLiveSample("Nesting_a_list", 400, 340)}}

### Ordered list inside unordered list

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>
```

#### Result

{{EmbedLiveSample("Ordered_list_inside_unordered_list", 400, 190)}}

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
        >, and if the <code>&#x3C;ul></code> element's children include at least
        one {{HTMLElement("li")}} element,
        <a href="/en-US/docs/Web/HTML/Content_categories#palpable_content"
          >palpable content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Zero or more {{HTMLElement("li")}},
        {{HTMLElement("script")}} and
        {{HTMLElement("template")}} elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
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
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/List_role"
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
      <th scope="row">DOM Interface</th>
      <td>{{domxref("HTMLUListElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other list-related HTML Elements: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- CSS properties that may be specially useful to style the `<ul>` element:

  - the {{CSSxRef("list-style")}} property, to choose the way the ordinal displays.
  - [CSS counters](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters), to handle complex nested lists.
  - the {{CSSxRef("line-height")}} property, to simulate the deprecated [`compact`](#compact) attribute.
  - the {{CSSxRef("margin")}} property, to control the list indentation.
