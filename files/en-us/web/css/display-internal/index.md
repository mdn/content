---
title: <display-internal>
slug: Web/CSS/display-internal
page-type: css-type
browser-compat:
  - css.properties.display.table-row-group
  - css.properties.display.table-header-group
  - css.properties.display.table-footer-group
  - css.properties.display.table-row
  - css.properties.display.table-cell
  - css.properties.display.table-column-group
  - css.properties.display.table-column
  - css.properties.display.table-caption
  - css.properties.display.ruby-base
  - css.properties.display.ruby-text
  - css.properties.display.ruby-base-container
  - css.properties.display.ruby-text-container
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
- `ruby-base`
  - : These elements behave like {{HTMLElement("rb")}} HTML elements.
- `ruby-text`
  - : These elements behave like {{HTMLElement("rt")}} HTML elements.
- `ruby-base-container`
  - : These elements are generated as anonymous boxes.
- `ruby-text-container`
  - : These elements behave like {{HTMLElement("rtc")}} HTML elements.

## Formal syntax

{{csssyntax}}

## Examples

### CSS tables example

The following example demonstrates laying out a simple form using CSS table layout.

#### HTML

```html
<main>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="age">Age</label>
    <input type="text" id="age" name="age" />
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

label,
input {
  display: table-cell;
  margin: 5px;
}
```

#### Result

{{EmbedLiveSample('CSS_tables_example', '100%', 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
