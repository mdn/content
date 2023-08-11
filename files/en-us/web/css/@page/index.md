---
title: "@page"
slug: Web/CSS/@page
page-type: css-at-rule
browser-compat: css.at-rules.page
---

{{CSSRef}}

The **`@page`** at-rule is a CSS at-rule used to modify different aspects of a printed page property. It targets and modifies the page's dimensions, page orientation, and margins. The **`@page`** at-rule can be used to target all pages in a print-out, or even specific ones using its various pseudo-classes.

## Syntax

```css
/* Targets all the pages */
@page {
  size: 8.5in 9in;
  margin-top: 4in;
}

/* Targets all even-numbered pages */
@page :left {
  margin-top: 4in;
}

/* Targets all odd-numbered pages */
@page :right {
  size: 11in;
  margin-top: 4in;
}

/* Targets all selectors with `page: wide;` set */
@page wide {
  size: a4 landscape;
}
```

### Descriptors

- [`page-orientation`](/en-US/docs/Web/CSS/@page/page-orientation)
  - : Specifies the orientation of the page. This does not affect the layout of the page; the rotation is applied after the layout in the output medium.
- [`size`](/en-US/docs/Web/CSS/@page/size)
  - : Specifies the target size and orientation of the page box's containing block. In the general case, where one page box is rendered onto one page sheet, it also indicates the size of the destination page sheet.

## Description

> **Note:** This documentation lists out features yet to be implemented across UAs, but they are stated in the official documentation. At the time of this writing, the only CSS property shown to have visible on both the at-rule and its pseudo-classes is the `margin` property.

You can't change all CSS properties with **`@page`**. You can only change the margin of the document. Attempts to change any other CSS properties will be ignored.

The `@page` at-rule can be accessed via the CSS object model interface {{domxref("CSSPageRule")}}.

> **Note:** The W3C is discussing how to handle viewport-related {{cssxref("&lt;length&gt;")}} units, `vh`, `vw`, `vmin`, and `vmax`. Meanwhile do not use them within a `@page` at-rule.

### Related properties

The `@page` at-rule, allows the user to assign a name to the rule, which is then called in a declaration using the `page` property.

- {{Cssxref("page")}}
  - : Allows a selector to use a user defined **named page**

## Formal syntax

{{csssyntax}}

Where the `<page-body>` includes:

- page-properties
- page-margin properties

and `<pseudo-selector>` represents these pseudo-classes:

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

> **Note:** The **`@page`** at-rule can only contain **page-properties** and **margin at-rules**, and the **margin at-rules** can only contain **page-margin properties**

### page-properties

| Feature               | CSS properties        |
| --------------------- | --------------------- |
| bidi properties       | direction             |
| background properties | background-color      |
|                       | background-image      |
|                       | background-repeat     |
|                       | background-attachment |
|                       | background-position   |
|                       | background            |
| border properties     | border-top-width      |
|                       | border-right-width    |
|                       | border-bottom-width   |
|                       | border-left-width     |
|                       | border-width          |
|                       | border-top-color      |
|                       | border-right-color    |
|                       | border-bottom-color   |
|                       | border-left-color     |
|                       | border-color          |
|                       | border-top-style      |
|                       | border-right-style    |
|                       | border-bottom-style   |
|                       | border-left-style     |
|                       | border-short-style    |
|                       | border-top            |
|                       | border-right          |
|                       | border-bottom         |
|                       | border-left           |
|                       | border                |
| counter properties    | counter-reset         |
|                       | counter-increment     |
| color                 | color                 |
| font properties       | font-family           |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| height properties     | height                |
|                       | min-height            |
|                       | max-height            |
| line height           | line-height           |
| margin properties     | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| outline properties    | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| padding properties    | padding-top           |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| quotes                | quotes                |
| text properties       | letter-spacing        |
|                       | text-align            |
|                       | text-decoration       |
|                       | text-indent           |
|                       | text-transform        |
|                       | white-space           |
|                       | word-spacing          |
| visibility            | visibility            |
| width properties      | width                 |
|                       | min-width             |
|                       | max-width             |

### margin at-rules

The margin at-rules are used inside of the `@page` at-rule. They each target a different section of the document printed page and make changes based on the properties or content set in the block of code:

```css
@page {
  @top-left {
    <page-margin-properties>
  }
}
```

**`@top-left`** targets the top-left of the document and applies the changes based on the page-margin-properties set.

Other margin-at rules include:

```plain
@top-left-corner {
  <page-margin-properties>
}
@top-left {
  <page-margin-properties>
}
@top-center {
  <page-margin-properties>
}
@top-right {
  <page-margin-properties>
}
@top-right-corner {
  <page-margin-properties>
}
@bottom-left-corner {
  <page-margin-properties>
}
@bottom-left {
  <page-margin-properties>
}
@bottom-center {
  <page-margin-properties>
}
@bottom-right {
  <page-margin-properties>
}
@bottom-right-corner {
  <page-margin-properties>
}
@left-top {
  <page-margin-properties>
}
@left-middle {
  <page-margin-properties>
}
@left-bottom {
  <page-margin-properties>
}
@right-top {
  <page-margin-properties>
}
@right-middle {
  <page-margin-properties>
}
@right-bottom {
  <page-margin-properties>
}
```

#### page-margin properties

The page-margin properties are the set of CSS properties can be set in any individual margin at-rule. They include:

| Feature               | CSS properties        |
| --------------------- | --------------------- |
| bidi properties       | direction             |
| background properties | background-color      |
|                       | background-image      |
|                       | background-repeat     |
|                       | background-attachment |
|                       | background-position   |
|                       | background            |
| border properties     | border-top-width      |
|                       | border-right-width    |
|                       | border-bottom-width   |
|                       | border-left-width     |
|                       | border-width          |
|                       | border-top-color      |
|                       | border-right-color    |
|                       | border-bottom-color   |
|                       | border-left-color     |
|                       | border-color          |
|                       | border-top-style      |
|                       | border-right-style    |
|                       | border-bottom-style   |
|                       | border-left-style     |
|                       | border-short-style    |
|                       | border-top            |
|                       | border-right          |
|                       | border-bottom         |
|                       | border-left           |
|                       | border                |
| counter properties    | counter-reset         |
|                       | counter-increment     |
| content               | content               |
| color                 | color                 |
| font properties       | font-family           |
|                       | font-size             |
|                       | font-style            |
|                       | font-variant          |
|                       | font-weight           |
|                       | font                  |
| height properties     | height                |
|                       | min-height            |
|                       | max-height            |
| line height           | line-height           |
| margin properties     | margin-top            |
|                       | margin-right          |
|                       | margin-bottom         |
|                       | margin-left           |
|                       | margin                |
| outline properties    | outline-width         |
|                       | outline-style         |
|                       | outline-color         |
|                       | outline               |
| padding properties    | padding-top           |
|                       | padding-right         |
|                       | padding-bottom        |
|                       | padding-left          |
|                       | padding               |
| quotes                | quotes                |
| text properties       | letter-spacing        |
|                       | text-align            |
|                       | text-decoration       |
|                       | text-indent           |
|                       | text-transform        |
|                       | white-space           |
|                       | word-spacing          |
| vertical alignment    | vertical-align        |
| visibility            | visibility            |
| width properties      | width                 |
|                       | min-width             |
|                       | max-width             |
| z-index               | z-index               |

## Named pages

Named pages enable performing per-page layout and adding [page-breaks](/en-US/docs/Web/CSS/CSS_fragmentation) in a declarative manner when printing.

Named pages can be applied using the {{Cssxref("page")}} property. This allows the user to create different page configurations for use in print layouts.

An example of this can be found on the [`page`](/en-US/docs/Web/CSS/page#examples) examples.

## Examples

### Using the size property to change the page orientation

This example shows how to split the `<section>`s into individual pages in `landscape` format with each page having a 20% margin when printed.

#### HTML

```html
<button>Print Webpage</button>
<article>
  <section>
    <h2>Header</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
  <section>
    <h2>Header</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
  <section>
    <h2>Header</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
  <section>
    <h2>Header</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
  <section>
    <h2>Header</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
</article>
```

#### CSS

```css
@page {
  size: landscape;
  margin: 20%;
}

body {
  font-family: "Helvetica";
  background-color: rgb(110 110 119);
}

article {
  width: 100%;
}

section {
  display: grid;
  background-color: white;
  border-radius: 0.6rem;
  margin-block-end: 1.5rem;
  justify-items: center;
  padding: 1rem;
  width: 50%;
  page-break-after: always;
  break-after: page;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

section {
  page-break-after: always;
  break-after: page;
}

@media print {
  button {
    display: none;
  }
}
```

#### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  window.print();
});
```

#### Result

Clicking the print button will launch a print dialog with the html sections split into individual pages.
{{ EmbedLiveSample('Using the size property to change the page orientation', '100%', 520) }}

### @page pseudo-class examples

Please refer to the various [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) of `@page` for examples.

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The `@page` [`size`](/en-US/docs/Web/CSS/@page/size) descriptor
- The {{Cssxref("page")}} property
- See the [\[META\] CSS Paged Media Module Level 3](https://bugzilla.mozilla.org/show_bug.cgi?id=286443) ticket in Bugzilla for tracking progress on the subject (page-based counters, etc.)
