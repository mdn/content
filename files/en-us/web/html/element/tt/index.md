---
title: "<tt>: The Teletype Text element"
slug: Web/HTML/Element/tt
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.tt
---

{{HTMLSidebar}}{{deprecated_header}}

The **`<tt>`** [HTML](/en-US/docs/Web/HTML) element creates inline text which is presented using the {{Glossary("user agent", "user agent's")}} default monospace font face. This element was created for the purpose of rendering text as it would be displayed on a fixed-width display such as a teletype, text-only screen, or line printer.

The terms **non-proportional**, **monotype**, and **monospace** are used interchangeably and have the same general meaning: they describe a typeface whose characters are all the same number of pixels wide.

This element is obsolete, however. You should use the more semantically helpful {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}}, or {{HTMLElement("var")}} elements for inline text that needs to be presented in monospace type, or the {{HTMLElement("pre")}} tag for content that should be presented as a separate block.

> **Note:** If none of the semantic elements are appropriate for your use case (for example, if you need to show some content in a non-proportional font), you should consider using the {{ HTMLElement("span") }} element, styling it as desired using CSS. The {{cssxref("font-family")}} property is a good place to start.

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes)

## Examples

### Basic example

This example uses `<tt>` to show text entered into, and output by, a terminal application.

```html
<p>
  Enter the following at the telnet command prompt:
  <code>set localecho</code><br />

  The telnet client should display: <tt>Local Echo is on</tt>
</p>
```

#### Result

{{EmbedLiveSample("Basic_example", 650, 80)}}

### Overriding the default font

You can override the browser's default font—if the browser permits you to do so, which it isn't required to do—using CSS:

#### CSS

```css
tt {
  font-family: "Lucida Console", "Menlo", "Monaco", "Courier", monospace;
}
```

#### HTML

```html
<p>
  Enter the following at the telnet command prompt:
  <code>set localecho</code><br />

  The telnet client should display: <tt>Local Echo is on</tt>
</p>
```

#### Result

{{EmbedLiveSample("Overriding_the_default_font", 650, 80)}}

## Usage notes

The `<tt>` element is, by default, rendered using the browser's default non-proportional font. You can override this using CSS by creating a rule using the `tt` selector, as seen in the example [Overriding the default font](#overriding_the_default_font) above.

> **Note:** User-configured changes to the default monospace font setting may take precedence over your CSS.

Although this element wasn't officially deprecated in HTML 4.01, its use was discouraged in favor of the semantic elements and/or CSS. The `<tt>` element is obsolete in HTML 5.

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
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
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
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
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

- The semantic {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("kbd")}}, and {{HTMLElement("samp")}} elements
- The {{HTMLElement("pre")}} element for displaying preformatted text blocks
