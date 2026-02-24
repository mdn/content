---
title: column-height
slug: Web/CSS/Reference/Properties/column-height
page-type: css-property
status:
  - experimental
browser-compat: css.properties.column-height
sidebar: cssref
---

{{SeeCompatTable}}

The **`column-height`** [CSS](/en-US/docs/Web/CSS) property specifies the height of the columns in a [CSS multi-column layout](/en-US/docs/Web/CSS/Guides/Multicol_layout).

The {{cssxref("columns")}} shorthand property can be used to set the `column-height`, {{cssxref("column-count")}}, and {{cssxref("column-width")}} property values in a single declaration.

## Syntax

```css
/* <length> value */
column-height: 300px;
column-height: 25em;
column-height: 70vh;

/* Global values */
column-height: inherit;
column-height: initial;
column-height: revert;
column-height: revert-layer;
column-height: unset;
```

### Values

- `auto`
  - : The initial value. If the content container has a set height, the content columns will grow to that height, overflowing to the side if the content doesn't fit inside the container. If the content container does not have a set height, the content will be equally distributed between the columns generated inside the container.
- {{cssxref("&lt;length>")}}
  - : The height of the columns. Must be non-negative.

## Description

When setting content to display in multiple columns via [CSS multi-column layout](/en-US/docs/Web/CSS/Guides/Multicol_layout) (using the {{cssxref("column-count")}} or {{cssxref("column-width")}} property), one issue is that it can be hard to constrain the column height for readability when it exceeds the size of the viewport:

- If you set a fixed height on the content container, excess columns will overflow to the side, and readers will have to scroll in the inline direction to read all the content.
- If you don't set a fixed height on the content container, the columns of content will be very long and require readers to scroll down to the end of a column and then back up to the top of the next column.

The `column-height` property, along with {{cssxref("column-wrap")}}, solves this problem by allowing you to set a specific height for your columns and having them wrap onto a new row of columns when the container edge is reached. The default value of `column-wrap` is `auto`, which resolves to `wrap` when `column-height` is set to a `<length>` value; `wrap` allows the fixed-height columns to wrap onto multiple rows. When `column-height` is equal to `auto`, `column-wrap: auto` resolves to `nowrap`, allowing the columns to overflow horizontally if a fixed container height is set.

As a result of this default behavior, generally you don't need to explicitly set `column-wrap` to get the effect you want.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `column-height` usage

This example shows how to create a multi-column layout with multiple rows of columns, where each row fits inside the viewport for comfortable reading. It also uses [CSS scroll snap](/en-US/docs/Web/CSS/Guides/Scroll_snap) to make it so that each scrolling action snaps the top of a new row of columns to the top of the viewport.

#### HTML

The markup for this example contains multiple paragraphs of content, taken from MDN landing pages. We won't show the HTML source here for brevity.

```html hidden live-sample___basic-column-height live-sample___column-playground
<h1>HTML, CSS, and JavaScript summaries</h1>
<p>
  <strong>HTML</strong> (HyperText Markup Language) is the most basic building
  block of the Web. It defines the meaning and structure of web content. Other
  technologies besides HTML are generally used to describe a web page's
  appearance (CSS) or behavior (JavaScript).
</p>
<p>
  "Hypertext" refers to links that connect web pages to one another, either
  within a single website or between websites. Links are a fundamental aspect of
  the Web. By uploading content to the Internet and linking it to pages created
  by other people, you become an active participant in the World Wide Web.
</p>
<p>
  HTML uses "markup" to annotate text, images, and other content for display in
  a Web browser. HTML markup includes special "elements" such as
  <a href="/en-US/docs/Web/HTML/Reference/Elements/head"
    ><code>&lt;head&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/title"
    ><code>&lt;title&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/body"
    ><code>&lt;body&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/header"
    ><code>&lt;header&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/footer"
    ><code>&lt;footer&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/article"
    ><code>&lt;article&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/section"
    ><code>&lt;section&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/p"><code>&lt;p&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/div"
    ><code>&lt;div&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/span"
    ><code>&lt;span&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/img"
    ><code>&lt;img&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/aside"
    ><code>&lt;aside&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/audio"
    ><code>&lt;audio&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/canvas"
    ><code>&lt;canvas&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/datalist"
    ><code>&lt;datalist&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/details"
    ><code>&lt;details&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/embed"
    ><code>&lt;embed&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/nav"
    ><code>&lt;nav&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/search"
    ><code>&lt;search&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/output"
    ><code>&lt;output&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/progress"
    ><code>&lt;progress&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/video"
    ><code>&lt;video&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/ul"
    ><code>&lt;ul&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/ol"
    ><code>&lt;ol&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/li"
    ><code>&lt;li&gt;</code></a
  >
  and many others.
</p>
<p>
  An HTML element is set off from other text in a document by "tags", which
  consist of the element name surrounded by <code>&lt;</code> and
  <code>&gt;</code>. The name of an element inside a tag is case-insensitive.
  That is, it can be written in uppercase, lowercase, or a mixture. For example,
  the <code>&lt;title&gt;</code> tag can be written as
  <code>&lt;Title&gt;</code>, <code>&lt;TITLE&gt;</code>, or in any other way.
  However, the convention and recommended practice is to write tags in
  lowercase.
</p>

<hr />

<p>
  <strong>Cascading Style Sheets</strong> (<strong>CSS</strong>) is a
  <a href="/en-US/docs/Web/API/StyleSheet">stylesheet</a> language used to
  describe the presentation of a document written in
  <a href="/en-US/docs/Web/HTML">HTML</a> or
  <a href="/en-US/docs/Web/XML/Guides/XML_introduction">XML</a> (including XML
  dialects such as <a href="/en-US/docs/Web/SVG">SVG</a>,
  <a href="/en-US/docs/Web/MathML">MathML</a> or
  <a href="/en-US/docs/Glossary/XHTML">XHTML</a>). CSS describes how elements
  should be rendered on screen, on paper, in speech, or on other media.
</p>
<p>
  CSS is among the core languages of the <strong>open web</strong> and is
  standardized across web browsers according to
  <a href="https://www.w3.org/Style/CSS/#specs" class="external" target="_blank"
    >W3C specifications</a
  >. Previously, the development of various parts of CSS specification was done
  synchronously, which allowed the versioning of the latest recommendations. You
  might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3
  or a CSS4; rather, everything is now just "CSS" with individual CSS modules
  having version numbers.
</p>
<p>
  After CSS 2.1, the scope of the specification increased significantly and the
  progress on different CSS modules started to differ so much, that it became
  more effective to
  <a
    href="https://www.w3.org/Style/CSS/current-work"
    class="external"
    target="_blank"
    >develop and release recommendations separately per module</a
  >. Instead of versioning the CSS specification, W3C now periodically takes a
  snapshot of
  <a href="https://www.w3.org/TR/css/" class="external" target="_blank"
    >the latest stable state of the CSS specification</a
  >
  and individual modules progress. CSS modules now have version numbers, or
  levels, such as
  <a
    href="https://drafts.csswg.org/css-color-5/"
    class="external"
    target="_blank"
    >CSS Color Module Level 5</a
  >.
</p>

<hr />

<p>
  <strong>JavaScript</strong> (<strong>JS</strong>) is a lightweight interpreted
  (or
  <a href="/en-US/docs/Glossary/Just_In_Time_Compilation"
    >just-in-time compiled</a
  >) programming language with
  <a href="/en-US/docs/Glossary/First-class_Function">first-class functions</a>.
  While it is most well-known as the scripting language for Web pages,
  <a
    href="https://en.wikipedia.org/wiki/JavaScript#Other_usage"
    class="external"
    target="_blank"
    >many non-browser environments</a
  >
  also use it, such as <a href="/en-US/docs/Glossary/Node.js">Node.js</a>,
  <a href="https://couchdb.apache.org/" class="external" target="_blank"
    >Apache CouchDB</a
  >
  and
  <a
    href="https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/"
    class="external"
    target="_blank"
    >Adobe Acrobat</a
  >. JavaScript is a
  <a href="/en-US/docs/Glossary/Prototype-based_programming">prototype-based</a
  >, <a href="/en-US/docs/Glossary/Garbage_collection">garbage-collected</a>,
  <a href="/en-US/docs/Glossary/Dynamic_typing">dynamic</a> language, supporting
  multiple paradigms such as imperative, functional, and object-oriented.
</p>
<p>
  JavaScript's dynamic capabilities include runtime object construction,
  variable parameter lists, function variables, dynamic script creation (via
  <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval"
    ><code>eval</code></a
  >), object introspection (via
  <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
    ><code>for...in</code></a
  >
  and
  <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods"
    ><code>Object</code> utilities</a
  >), and source-code recovery (JavaScript functions store their source text and
  can be retrieved through
  <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString"
    ><code>toString()</code></a
  >).
</p>
<p>
  This section is dedicated to the JavaScript language itself, and not the parts
  that are specific to Web pages or other host environments. For information
  about <a href="/en-US/docs/Glossary/API">APIs</a> that are specific to Web
  pages, please see <a href="/en-US/docs/Web/API">Web APIs</a> and
  <a href="/en-US/docs/Glossary/DOM">DOM</a>.
</p>
<p>
  The standards for JavaScript are the
  <a href="https://tc39.es/ecma262/" class="external" target="_blank"
    >ECMAScript Language Specification</a
  >
  (ECMA-262) and the
  <a href="https://tc39.es/ecma402/" class="external" target="_blank"
    >ECMAScript Internationalization API specification</a
  >
  (ECMA-402). As soon as one browser implements a feature, we try to document
  it. This means that cases where some
  <a href="https://github.com/tc39/proposals" class="external" target="_blank"
    >proposals for new ECMAScript features</a
  >
  have already been implemented in browsers, documentation and examples in MDN
  articles may use some of those new features. Most of the time, this happens
  between the
  <a href="https://tc39.es/process-document/" class="external" target="_blank"
    >stages</a
  >
  3 and 4, and is usually before the spec is officially published.
</p>
<p>
  Do not confuse JavaScript with the
  <a
    href="https://en.wikipedia.org/wiki/Java_(programming_language)"
    class="external"
    target="_blank"
    >Java programming language</a
  >
  — <strong>JavaScript is <em>not</em> "Interpreted Java"</strong>. Both "Java"
  and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S.
  and other countries. However, the two programming languages have very
  different syntax, semantics, and use.
</p>
<p>
  JavaScript documentation of core language features (pure
  <a
    href="/en-US/docs/Web/JavaScript/Reference/JavaScript_technologies_overview"
    >ECMAScript</a
  >, for the most part) includes the following:
</p>
```

#### CSS

We start by giving the {{htmlelement("body")}} element a {{cssxref("column-width")}} of `200px` to set a preferred width for our columns, and a {{cssxref("column-rule")}} of `2px solid red`. We then set a {{cssxref("gap")}} of `3em 2em`, resulting in a `3em` gap between rows, and a `2em` gap between columns with a red rule in the center of each. Finally, we set a `column-height` of `95vh` to make our columns nearly as tall as the viewport.

We also set {{cssxref("column-wrap")}} to `wrap`. This is the value `column-wrap` resolves to if `column-height` is given a specific `<length>` value, so it is not necessary to set this explicitly; however, we wanted to remind you of this fact.

```css hidden live-sample___basic-column-height live-sample___column-playground
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

p {
  line-height: 1.5;
}

@supports not (column-height: 15em) {
  body::before {
    content: "Your browser does not support the 'column-height' property.";
    background-color: wheat;
    position: fixed;
    inset: 40% 0;
    height: fit-content;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```css live-sample___basic-column-height
body {
  column-width: 200px;
  column-rule: 2px solid red;
  gap: 3em 2em;
  column-height: 95vh;

  column-wrap: wrap;
}
```

Next, we set the [`<h1>`](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) element's {{cssxref("column-span")}} property to `all`, to make the heading span across all the columns, and set the {{cssxref("margin-top")}} property of the first {{htmlelement("p")}} to `0` so that it lines up with the top of the columns.

```css live-sample___basic-column-height live-sample___column-playground
h1 {
  column-span: all;
}

p:first-of-type {
  margin-top: 0;
}
```

Finally, we add scroll snapping by setting {{cssxref("scroll-snap-type")}} to `y mandatory` on the {{htmlelement("html")}} element, and {{cssxref("scroll-snap-align")}} to `start` on the {{cssxref("::column")}} pseudo-elements that represent each generated column. This causes the content to snap to the top of a new column each time it is scrolled.

```css live-sample___basic-column-height
html {
  scroll-snap-type: y mandatory;
}

::column {
  scroll-snap-align: start;
}
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("basic-column-height", "100%", "400")}}

Try scrolling the content. Note how each new row of columns fills the viewport, and how the content snaps neatly to the top of a new row with each scroll.

### `column-height` and `column-count` playground

This example builds upon the previous one by including two range sliders that allow you to adjust the multiple-column layout's column count and column height.

#### HTML

Our markup is the same as the previous example, except that we provide a form containing two [`<input="range">`](/en-US/docs/Web/HTML/Reference/Elements/input/range) elements to allow you to change the `column-count` and `column-height` values. This functionality is powered by some basic JavaScript.

We won't show the markup, or the JavaScript, for brevity.

```html hidden live-sample___column-playground
<form>
  <div>
    <label for="columns">No. of columns: </label>
    <input type="range" min="3" max="6" value="3" id="columns" />
    <output id="columns-output">3</output>
  </div>
  <div>
    <label for="column-height">Column height: </label>
    <input type="range" min="10" max="30" value="20" id="column-height" />
    <output id="column-height-output">20em</output>
  </div>
</form>
```

#### CSS

The CSS is nearly identical to the previous example, except that we specify the number of columns with {{cssxref("column-count")}} rather than `column-width`, we don't set the `column-height` to the same height as the viewport, and we don't set the scroll snapping behavior.

In the `body` rule, we set an initial `column-count` of `3` to divide our content into three columns, and set an initial `column-height` of `20em`. We also set the same `column-rule` and `gap` values as the previous example.

```css live-sample___column-playground
body {
  column-count: 3;
  column-height: 20em;

  column-rule: 2px solid red;
  gap: 3em 2em;
}
```

```css hidden live-sample___column-playground
form {
  border: 1px solid black;
  background-color: white;
  padding: 10px;
  position: fixed;
  bottom: 1px;
  right: 1px;
}
```

```js hidden live-sample___column-playground
const columnsRange = document.getElementById("columns");
const columnsOutput = document.getElementById("columns-output");
const columnHeightRange = document.getElementById("column-height");
const columnHeightOutput = document.getElementById("column-height-output");

columnsRange.addEventListener("input", () => {
  document.body.style.columnCount = columnsRange.value;
  columnsOutput.textContent = columnsRange.value;
});

columnHeightRange.addEventListener("input", () => {
  document.body.style.columnHeight = `${columnHeightRange.value}em`;
  columnHeightOutput.textContent = `${columnHeightRange.value}em`;
});
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("column-playground", "100%", "400")}}

Try adjusting the number of columns and the column height to see the effect in the live rendering.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("column-count")}}
- {{cssxref("column-width")}}
- {{cssxref("columns")}} shorthand
- {{Cssxref("column-wrap")}}
- [CSS multi-column layout](/en-US/docs/Web/CSS/Guides/Multicol_layout) module
