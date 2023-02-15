---
title: "@page"
slug: Web/CSS/@page
page-type: css-at-rule
tags:
  - "@page"
  - At-rule
  - CSS
  - Layout
  - Reference
  - Web
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
```

### Descriptors

- [`size`](/en-US/docs/Web/CSS/@page/size)
  - : Specifies the target size and orientation of the page box's containing block. In the general case, where one page box is rendered onto one page sheet, it also indicates the size of the destination page sheet.

## Description

> **Note:** This documentation lists out features yet to be implemented across UAs, but they are stated in the official documentation. At the time of this writing, the only CSS property shown to have visible on both the at-rule and its pseudo-classes is the `margin` property.

You can't change all CSS properties with **`@page`**. You can only change the margin of the document. Attempts to change any other CSS properties will be ignored.

The `@page` at-rule can be accessed via the CSS object model interface {{domxref("CSSPageRule")}}.

> **Note:** The W3C is discussing how to handle viewport-related {{cssxref("&lt;length&gt;")}} units, `vh`, `vw`, `vmin`, and `vmax`. Meanwhile do not use them within a `@page` at-rule.

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

```
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

It is possibly to create named pages that can then be applied using the `page` property. This allows the user to create different page print layouts, that can be applied to different sections of a document.

## Examples

### Using the size property to change the page orientation

This example show how you can split the `section`s into individual pages in `landscape` format and each page has a 20% margin when printed.

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

### Named page example

#### HTML

There are two parts to this HTML:

- The print controls
- The content to be printed

The print controls allow the user to select how the `section`s in the `article` will be printed.

```html
<!-- print options -->
<fieldset id="printStyle">
  <legend>How would you like to print</legend>
  <label for="single"><input type="radio" id="single" name="type" value="single" checked />No Pages</label>
  <label for="double"><input type="radio" id="grouped" name="type" value="grouped" />Pages with Grouped Chapters</label>
  <label for="double"><input type="radio" id="paged" name="type" value="paged" />Chapters Paged</label>
  <button id="print">Print</button>
</fieldset>
<!-- Content to be printed -->
<article id="print-area" data-print="single">
  <section id="toc">
    <h2>Table of contents</h2>
    <ul>
      <li>Foreword</li>
      <li>Introduction</li>
      <li>Chapter One - named pages</li>
      <li>Chapter Two - page orientation</li>
      <li>Chapter Three - page margins</li>
      <li>Conclusion</li>
    </ul>
  </section>
  <section id="foreward">
    <h2>Foreward</h2>
    <p>This book is all about how the CSS <code>@page</code> at-rule can help with printing HTML books.</p>
  </section>
  <section id="introduction">
    <h2>Introduction</h2>
    <p>This book is a concept to show how an <em>HTML</em> document can easily be printed out in pages.</p>
  </section>
  <section id="chapter1" class="chapter">
    <h2>Named pages</h2>
    <p>Lorem ipsum</p>
  </section>
  <section id="chapter2" class="chapter">
    <h2>Page Orientation</h2>
    <p>Lorem ipsum</p>
  </section>
  <section id="chapter3" class="chapter">
    <h2>Page Margins</h2>
    <p>There are 16 page margins that can be set:</p>
    <ul>
      <li>@top-left-corner</li>
      <li>@top-left</li>
      <li>@top-middle</li>
      <li>@top-right</li>
      <li>@top-right-corner</li>
      <li>@left-top</li>
      <li>@left-middle</li>
      <li>@left-bottom</li>
      <li>@right-top</li>
      <li>@right-middle</li>
      <li>@right-bottom</li>
      <li>@bottom-left-corner</li>
      <li>@bottom-left</li>
      <li>@bottom-middle</li>
      <li>@bottom-right</li>
      <li>@bottom-right-corner</li>
    </ul>
    <p>They can be used to show what appears in these parts of the margin</p>
  </section>
  <section id="conclusion">
    <h2>Conclusion</h2>
    <p>Now go ahead and write books.</p>
  </section>
</article>
```

#### CSS

```css hidden
fieldset {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: fit-content;
}
```

The first part of the CSS sets up the **named** pages, these include the size and orientaion and also some content to go in the `@top-middle` margin of the printed pages.

```css
@page toc {
  size: a4 portrait;
  @top-middle {
    content: "Table of contents";
  }
}

@page foreward {
  size: a4 portrait;
  @top-middle {
    content: "Foreward";
  }
}

@page introduction {
  size: a4 portrait;
  @top-middle {
    content: "Introduction";
  }
}

@page conclusion {
  size: a4 portrait;
  @top-middle {
    content: "Conclusion";
  }
}

@page chapter {
  size: a4 landscape;
  @top-middle {
    content: "Chapter";
  }
}
```

The next part of the CSS specifies which CSS selectors will use which named pages when printing. As the sections with `class="chapter"` are concurrent they appear as one page, in order to split them up they are split using `break-after: page;` which splits each chapter into another page.

```css
@media print {
  fieldset {
    display: none;
  }
  section {
    font-size: 2rem;
    font-family: Roboto;
  }
  .chapter {
    border: tomato 2px solid;
  }
  [data-print="grouped"] > #toc, [data-print="paged"] > #toc {
    page: toc;
    font-family: Courier;
  }
  [data-print="grouped"] >  #foreward, [data-print="paged"] > #foreward {
    page: foreward;
    font-family: Courier;
  }
  [data-print="grouped"] >  #introduction, [data-print="paged"] > #introduction {
    page: introduction;
    font-family: Courier;
  }
  [data-print="grouped"] >  #conclusion, [data-print="paged"] > #conclusion {
    page: conclusion;
    font-family: Courier;
  }
  [data-print="grouped"] > .chapter, [data-print="paged"] > .chapter {
    page: chapter;
  }
  [data-print="paged"] > .chapter {
    border: none;
    break-after: page;
  }
  .chapter > ul {
    columns: 2;
  }
}
```

#### JavaScript

```js
const printArea = document.querySelector("#print-area");
const printButton = document.querySelector("#print");
const printOption = document.querySelector("#printStyle");
printOption.addEventListener("change", (event) => {
  if (event.target.value === "single"){
    printArea.dataset.print = "single"
  } else if (event.target.value === "grouped"){
    printArea.dataset.print = "grouped"
  } else {
    printArea.dataset.print = "paged"
  }
})
printButton.addEventListener("click", () => {
  window.print();
})
```

#### Result

Selecting a different print style radio input will change the output of the print dialog.

{{ EmbedLiveSample('Named page example', '100%', 520) }}

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

- See the [\[META\] CSS Paged Media Module Level 3](https://bugzilla.mozilla.org/show_bug.cgi?id=286443) ticket in Bugzilla for tracking progress on the subject (page-based counters, etc.)
