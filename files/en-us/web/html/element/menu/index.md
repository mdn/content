---
title: '<menu>: The Menu element'
slug: Web/HTML/Element/menu
tags:
  - Element
  - Experimental
  - HTML
  - HTML interactive elements
  - Navigation
  - Reference
  - Site Navigation
  - UI
  - UX
  - User Interface
  - User experience
  - Web
  - menu
  - menus
browser-compat: html.elements.menu
---

{{HTMLRef}}{{SeeCompatTable}}

The **`<menu>`** [HTML](/en-US/docs/Web/HTML) element is a semantic alternative to {{HTMLElement("ul")}}. It represents an unordered list of items (represented by {{HTMLElement("li")}} elements), each of these represent a link or other command that the user can activate.

> **Note:** In previous version of the HTML specification, the `<menu>` element had an additional use case as a context menu. This functionality is now considered obsolete, and has been removed from the specification. Firefox was the only browser to implement this functionality which included the {{HTMLAttrDef("label")}} {{Deprecated_inline}} and `context` {{Deprecated_inline}} attributes.

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

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

The {{HTMLElement("menu")}} and {{HTMLElement("ul")}} elements both represent an unordered list of items. The key difference is that {{HTMLElement("ul")}} primarily contains items for display, whilst {{HTMLElement("menu")}} is intended for interactive items, to act on.

## Examples

### Toolbar

In this example, a `<menu>` is used to create a toolbar in an editing application.

> **Warning:** Toolbar menus haven't been implemented in any known browsers yet.

#### HTML

```html
<menu>
  <li><button onclick="copy()">Copy</button></li>
  <li><button onclick="cut()">Cut</button></li>
  <li><button onclick="paste()">Paste</button></li>
</menu>
```

#### Result

{{EmbedLiveSample("Toolbar", "100%", 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other list-related HTML Elements: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("hr")}}, and the obsolete {{HTMLElement("dir")}}.
- The [`contextmenu`](/en-US/docs/Web/HTML/Global_attributes#attr-contextmenu) [global attribute](/en-US/docs/Web/HTML/Global_attributes) can be used on an element to refer to the `id` of a `menu` with {{HTMLAttrxRef("type", "menu", 'type="context"')}}.
