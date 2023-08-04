---
title: <menuitem>
slug: Web/HTML/Element/menuitem
page-type: html-element
status:
  - deprecated
  - non-standard
---

{{HTMLSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

The **`<menuitem>`** [HTML](/en-US/docs/Web/HTML) element represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button.

A command can either be defined explicitly, with a textual label and optional icon to describe its appearance, or alternatively as an _indirect command_ whose behavior is defined by a separate element. Commands can also optionally include a checkbox or be grouped to share radio buttons. (Menu items for indirect commands gain checkboxes or radio buttons when defined against elements `<input type="checkbox">` and `<input type="radio">`.)

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes); in particular `title` can be used to describe the command, or provide usage hints.

- `checked` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Boolean attribute which indicates whether the command is selected. May only be used when the `type` attribute is `checkbox` or `radio`.
- `command` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Specifies the ID of a separate element, indicating a command to be invoked indirectly. May not be used within a menu item that also includes the attributes `checked`, `disabled`, `icon`, `label`, `radiogroup` or `type`.
- `default` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : This Boolean attribute indicates use of the same command as the menu's subject element (such as a `button` or `input`).
- `disabled` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Boolean attribute which indicates that the command is not available in the current state. Note that `disabled` is distinct from `hidden`; the `disabled` attribute is appropriate in any context where a change in circumstances might render the command relevant.
- `icon` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Image URL, used to provide a picture to represent the command.
- `label`
  - : The name of the command as shown to the user. Required when a `command` attribute is not present.
- `radiogroup` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : This attribute specifies the name of a group of commands to be toggled as radio buttons when selected. May only be used where the `type` attribute is `radio`.
- `type` {{Deprecated_Inline}} {{Non-standard_Inline}}

  - : This attribute indicates the kind of command, and can be one of three values.

    - `command`: A regular command with an associated action. This is the missing value default.
    - `checkbox`: Represents a command that can be toggled between two different states.
    - `radio`: Represent one selection from a group of commands that can be toggled as radio buttons.

## Examples

### HTML

```html
<!-- A <div> element with a context menu -->
<div contextmenu="popup-menu">Right-click to see the adjusted context menu</div>

<menu type="context" id="popup-menu">
  <menuitem type="checkbox" checked>Checkbox</menuitem>
  <hr />
  <menuitem
    type="command"
    label="This command does nothing"
    icon="favicon-192x192.png">
    Commands don't render their contents.
  </menuitem>
  <menuitem
    type="command"
    label="This command has javascript"
    onclick="alert('command clicked')">
    Commands don't render their contents.
  </menuitem>
  <hr />
  <menuitem type="radio" radiogroup="group1">Radio Button 1</menuitem>
  <menuitem type="radio" radiogroup="group1">Radio Button 2</menuitem>
</menu>
```

### CSS

```css
div {
  width: 300px;
  height: 80px;
  background-color: lightgreen;
}
```

### Result

{{EmbedLiveSample("Example", '100%', 80)}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Must have a start tag and must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        The {{HTMLElement("menu")}} element, where that element is in
        the <em>popup menu</em> state. (If specified, the
        <code>type</code> attribute of the {{HTMLElement("menu")}}
        element must be <code>popup</code>; if missing, the parent element of
        the {{HTMLElement("menu")}} must itself be a
        {{HTMLElement("menu")}} in the <em>popup menu</em> state.)
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{DOMxRef("HTMLMenuItemElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

Not part of any current specifications.

## Browser compatibility

No longer supported in any browser. Firefox, the only browser that supported this element, removed support in 85.

## See also

- [HTML context menus in Firefox (Screencast and Code)](https://hacks.mozilla.org/2011/11/html5-context-menus-in-firefox-screencast-and-code/)
