---
title: <display-internal>
slug: Web/CSS/display-internal
tags:
  - CSS
  - CSS Data Type
  - CSS Display
  - Data Type
  - Reference
  - display-internal
---
{{CSSRef}}

Some layout models such as `table` and `ruby` have a complex internal structure, with several different roles that their children and descendants can fill. This page defines those "internal" display values, which only have meaning within that particular layout mode.

## Syntax

Valid `<display-internal>` values:

- `table-row-group`
  - : These elements behave like {{HTMLElement("tbody")}} HTML elements.
- `table-header-group`
  - : These elements behave like {{HTMLElement("thead")}} HTML elements.
- `table-footer-group`
  - : These elements behave like {{HTMLElement("tfoot")}} HTML elements.
- `table-row`
  - : These elements behave like {{HTMLElement("tr")}} HTML elements.
- `table-cell`
  - : These elements behave like {{HTMLElement("td")}} HTML elements.
- `table-column-group`
  - : These elements behave like {{HTMLElement("colgroup")}} HTML elements.
- `table-column`
  - : These elements behave like {{HTMLElement("col")}} HTML elements.
- `table-caption`
  - : These elements behave like {{HTMLElement("caption")}} HTML elements.
- `ruby-base` {{Experimental_Inline}}
  - : These elements behave like {{HTMLElement("rb")}} HTML elements.
- `ruby-text` {{Experimental_Inline}}
  - : These elements behave like {{HTMLElement("rt")}} HTML elements.
- `ruby-base-container` {{Experimental_Inline}}
  - : These elements behave like {{HTMLElement("rbc")}} HTML elements generated as anonymous boxes.
- `ruby-text-container` {{Experimental_Inline}}
  - : These elements behave like {{HTMLElement("rtc")}} HTML elements.

## Examples

### CSS tables example

The following example demonstrates laying out a simple form using CSS table layout.

#### HTML

```html
<main>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name">
  </div>
  <div>
    <label for="age">Age</label>
    <input type="text" id="age" name="age">
  </div>
</main>
```

#### CSS

```css
main {
  display: table;
}

div {
  display: table-row;
}

label, input {
  display: table-cell;
  margin: 5px;
}
```

#### Result

{{EmbedLiveSample('CSS_tables_example', '100%', 100)}}

## Specifications

| Specification                                                                                            | Status                           |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('CSS3 Display', '#typedef-display-internal', 'display-internal')}} | {{Spec2('CSS3 Display')}} |

## Browser compatibility

### Support of table values

`table`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row`, and `table-row-group`

{{Compat("css.properties.display.table_values", 10)}}

### Support of ruby values

`ruby`, `ruby-base`, `ruby-base-container`, `ruby-text`, and `ruby-text-container`

{{Compat("css.properties.display.ruby_values", 10)}}

## See also

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
