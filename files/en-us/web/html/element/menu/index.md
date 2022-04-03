---
title: '<menu>: The Menu element'
slug: Web/HTML/Element/menu
tags:
  - Element
  - Experimental
  - HTML
  - HTML grouping content
  - Reference
  - Web
browser-compat: html.elements.menu
---

{{HTMLRef}}{{SeeCompatTable}}

The **`<menu>`** [HTML](/en-US/docs/Web/HTML) element is a semantic alternative to {{HTMLElement("ul")}}. It represents an unordered list of items (represented by {{HTMLElement("li")}} elements), each of which represents a link or other command that the user can activate.

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

The `<menu>` and {{HTMLElement("ul")}} elements both represent an unordered list of items. The key difference is that {{HTMLElement("ul")}} primarily contains items for display, while `<menu>` is intended for interactive items.

> **Note:** In previous versions of the HTML specification, the `<menu>` element had an additional use case as a context menu. This functionality is now considered obsolete and has been removed from the specification.

## Examples

### Toolbar

In this example, a `<menu>` is used to create a toolbar for an editing application.

#### HTML

```html
<menu>
  <li><button onclick="copy()">Copy</button></li>
  <li><button onclick="cut()">Cut</button></li>
  <li><button onclick="paste()">Paste</button></li>
</menu>
```

#### CSS

```css
menu {
  display: flex;
  list-style: none;
  padding: 0;
  width: 400px;
}

li {
  flex-grow: 1;
}

button {
  width: 100%;
}
```

#### Result

{{EmbedLiveSample("Toolbar", "100%", 100)}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <p>
          <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
            >Flow content</a
          >. If the element's children include at least one
          {{HTMLElement("li")}} element:
          <a
            href="/en-US/docs/Web/Guide/HTML/Content_categories#palpable_content"
            >Palpable content</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <p>
          Zero or more occurrences of {{HTMLElement("li")}},
          {{HTMLElement("script")}}, and
          {{HTMLElement("template")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{No_Tag_Omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
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
        {{ARIARole("directory")}}, {{ARIARole("group")}},
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role"
            >listbox</a
          ></code
        >, {{ARIARole("menu")}}, {{ARIARole("menubar")}},
        {{ARIARole("none")}}, {{ARIARole("presentation")}},
        {{ARIARole("radiogroup")}}, {{ARIARole("tablist")}},
        {{ARIARole("toolbar")}} or {{ARIARole("tree")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{DOMxRef("HTMLMenuElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other list-related HTML Elements: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, and {{HTMLElement("li")}}.
