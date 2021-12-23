---
title: '<li>: The List Item element'
slug: Web/HTML/Element/li
tags:
  - Element
  - HTML
  - HTML grouping content
  - Reference
browser-compat: html.elements.li
---

{{HTMLRef}}

The **`<li>`** [HTML](/en-US/docs/Web/HTML) element is used to represent an item in a list. It must be contained in a parent element: an ordered list ({{HTMLElement("ol")}}), an unordered list ({{HTMLElement("ul")}}), or a menu ({{HTMLElement("menu")}}). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.

{{EmbedInteractiveExample("pages/tabbed/li.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The end tag can be omitted if the list item is immediately followed by
        another {{HTMLElement("li")}} element, or if there is no more
        content in its parent element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        An {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, or
        {{HTMLElement("menu")}} element. Though not a conforming usage,
        the obsolete {{HTMLElement("dir")}} can also be a parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Listitem_role"
            >listitem</a
          ></code
        >
        when child of an
        <code><a href="/en-US/docs/Web/HTML/Element/ol">ol</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Element/ul">ul</a></code> or
        <code><a href="/en-US/docs/Web/HTML/Element/menu">menu</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        {{ARIARole("menuitem")}},
        {{ARIARole("menuitemcheckbox")}},
        {{ARIARole("menuitemradio")}}, {{ARIARole("option")}},
        {{ARIARole("none")}}, {{ARIARole("presentation")}},
        {{ARIARole("radio")}}, {{ARIARole("separator")}},
        {{ARIARole("tab")}}, {{ARIARole("treeitem")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLLIElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("value")}}
  - : This integer attribute indicates the current ordinal value of the list item as defined by the {{HTMLElement("ol")}} element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The **value** attribute has no meaning for unordered lists ({{HTMLElement("ul")}}) or for menus ({{HTMLElement("menu")}}).
- {{htmlattrdef("type")}} {{Deprecated_inline}}

  - : This character attribute indicates the numbering type:

    - `a`: lowercase letters
    - `A`: uppercase letters
    - `i`: lowercase Roman numerals
    - `I`: uppercase Roman numerals
    - `1`: numbers

    This type overrides the one used by its parent {{HTMLElement("ol")}} element, if any.

    > **Note:** This attribute has been deprecated; use the CSS {{cssxref("list-style-type")}} property instead.

## Examples

For more detailed examples, see the {{htmlelement("ol")}} and {{htmlelement("ul")}} pages.

### Ordered list

```html
<ol>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
</ol>
```

{{EmbedLiveSample("Ordered_list")}}

### Ordered list with a custom value

```html
<ol type="I">
    <li value="3">third item</li>
    <li>fourth item</li>
    <li>fifth item</li>
</ol>
```

{{EmbedLiveSample("Ordered_list_with_a_custom_value")}}

### Unordered list

```html
<ul>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
</ul>
```

{{EmbedLiveSample("Unordered_list")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other list-related HTML Elements: {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}}, and the obsolete {{HTMLElement("dir")}};
- CSS properties that may be specially useful to style the `<li>` element:

  - the {{cssxref("list-style")}} property, to choose the way the ordinal is displayed,
  - [CSS counters](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters), to handle complex nested lists,
  - the {{cssxref("margin")}} property, to control the indent of the list item.
