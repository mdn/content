---
title: How to write in markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
tags:
  - meta
  - writing-guide
---

{{MDNSidebar}}

This page describes how we use Markdown to write documentation on MDN Web Docs. We have chosen GitHub-Flavored Markdown (GFM) as a baseline, and added some extensions to support some of the things we need to do on MDN that aren't readily supported in GFM.

## Baseline: GitHub-Flavored Markdown

The baseline for MDN Markdown is GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. This means that for anything not otherwise specified in this page, you can refer to the GFM specification. GFM in turn is a superset of CommonMark ([https://spec.commonmark.org/](https://spec.commonmark.org/)).

## Links

The GFM specification defines two basic types of links:

- [inline links](https://github.github.com/gfm/#inline-link), in which the destination is given immediately after the link text
- [reference links](https://github.github.com/gfm/#reference-link), in which the destination is defined elsewhere in the document.

On MDN we allow only inline links.

This is the correct way to write GFM links on MDN:

```md example-good
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

This is an incorrect way to write links on MDN:

```md example-bad
[Macarons][macaron] are delicious but tricky to make.

[macaron]: https://en.wikipedia.org/wiki/Macaron
```

## Example code blocks

In GFM and CommonMark, authors can use "code fences" to demarcate `<pre>` blocks. The opening code fence may be followed by some text that is called the "info string". From the spec:

> The first word of the info string is typically used to specify the language of the code sample, and rendered in the class attribute of the code tag.

It's permissible for the info string to contain multiple words, like:

````plain
```fee fi fo fum
// some example code
```
````

In MDN, writers will use code fences for example code blocks. They must specify the language of the code sample using the first word of the info string, and this will be used to provide syntax highlighting for the block. The following words are supported:

- Programming Languages
  - JavaScript
    - `js` - JavaScript
    - `ts` - TypeScript
    - `jsx` - React JSX
    - `tsx` - React TSX
  - C-like
    - `c` - C
    - `cpp` - C++
    - `cs` - C#
    - `java` - Java
    - `clike` - C-like (for any C-like language not defined)
  - Other
    - `python` - Python
    - `php` - PHP
    - `rust` - Rust
    - `glsl` - GLSL (OpenGL Shaders)
    - `wasm` - WebAssembly
- Styling
  - `css` - CSS
  - `scss` - Sass (SCSS)
  - `less` - Less
- Markup
  - `html` - HTML
  - `svg` - SVG
  - `xml` - XML
  - `mathml` - MathML
  - `md` - Markdown
- Command Prompts
  - `sh` - Bash/Shell
  - `batch` - Batch (Windows Shell)
  - `ps` - PowerShell
- Configuration/Data Files
  - `json` - JSON
  - `ini` - INI
  - `yaml` - YAML
  - `toml` - TOML
  - `sql` - SQL Database
  - `diff` - Diff file
  - `ignore` - Gitignore file
- Other
  - `http` - HTTP headers
  - `pug` - [Pug templates](https://pugjs.org/api/getting-started.html) (which may be used by [Express](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer))
  - `regex` - Regex
  - `uri` - URIs and URLs

For example:

````plain
```js
const greeting = "I will get JavaScript syntax highlighting";
```
````

If the highlighting that you wish to use is not listed above you should markup the code block as `plain`.
Additional languages may be requested by following the [this process](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366).

Writers will be able to supply any one of the following additional words, which must come after the language word:

- `example-good`: style this example as a good example (one to follow)
- `example-bad`: style this example as a bad example (one to avoid)
- `hidden`: don't render this code block in the page. This is for use in live samples.

For example:

````plain
```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```
````

These will be rendered as:

```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```

### Discussion reference

This issue was resolved in <https://github.com/mdn/content/issues/3512>.

## Notes, warnings, and callouts

Sometimes writers want to call special attention to some piece of content. To do this, they will use a GFM blockquote with a special first paragraph. There are three types of these: notes, warnings, and callouts.

- To add a note, create a GFM blockquote whose first paragraph starts with `**Note:**`.
- To add a warning, create a GFM blockquote whose first paragraph starts with `**Warning:**`.
- To add a callout, create a GFM blockquote whose first paragraph starts with `**Callout:**`.

Notes and warnings will render the **Note:** or **Warning:** text in the output, while callouts will not. This makes callouts a good choice when an author wants to provide a custom title.

Processing of the markup works on the AST it produces, not on the exact characters provided. This means that providing `<strong>Note:</strong>` will also generate a note. However, the Markdown syntax is required as a matter of style.

Multiple lines are produced by an empty block quote line in the same way as normal paragraphs. Further, multiple lines without a space are also treated like normal markdown lines, and concatenated.

The blockquote can contain code blocks or other block elements.

Because the text "Note:" or "Warning:" also appears in the rendered output, it has to be sensitive to translations. In practice this means that every locale supported by MDN must supply its own translation of these strings, and the platform must recognize them as indicating that the construct needs special treatment.

#### Examples

##### Note

```plain
> **Note:** This is how you write a note.
>
> It can have multiple lines.
```

This will produce the following HTML:

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can have multiple lines.</p>
</div>
```

This HTML will be rendered as a highlighted box, like:

> **Note:** This is how you write a note.
>
> It can have multiple lines.

##### Warnings

```plain
> **Warning:** This is how you write a warning.
>
> It can have multiple paragraphs.
```

This will produce the following HTML:

```html
<div class="notecard warning">
  <p><strong>Warning:</strong> This is how you write a warning.</p>
  <p>It can have multiple paragraphs.</p>
</div>
```

This HTML will be rendered as a highlighted box, like:

> **Warning:** This is how you write a warning.
>
> It can have multiple paragraphs.

##### Callouts

```plain
> **Callout:** **This is how you write a callout.**
>
> It can have multiple paragraphs.
```

This will produce the following HTML:

```html
<div class="callout">
  <p><strong>This is how you write a callout.</strong></p>
  <p>It can have multiple paragraphs.</p>
</div>
```

This HTML will be rendered as a highlighted box, like:

> **Callout:**
>
> **This is how you write a callout.**
>
> It can have multiple paragraphs.

##### Translated warning

For example, if we want to use "Warnung" for "Warning" in German, then in German pages we would write:

```plain
> **Warnung:** So schreibt man eine Warnung.
```

And this will produce:

```html
<div class="notecard warning">
  <p><strong>Warnung:</strong> So schreibt man eine Warnung.</p>
</div>
```

##### Note containing a code block

This example contains a code block.

````plain
> **Note:** This is how you write a note.
>
> It can contain code blocks.
>
> ```js
> const s = "I'm in a code block";
> ```
> Like that.
````

This will produce the following HTML:

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can contain code blocks.</p>
  <pre class="brush: js">const s = "I'm in a code block";</pre>
  <p>Like that.</p>
</div>
```

This HTML will be rendered as with a code block, like:

> **Note:** This is how you write a note.
>
> It can contain code blocks.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> Like that.

### Discussion reference

This issue was resolved in <https://github.com/mdn/content/issues/3483>.

## Definition lists

To create definition lists in MDN authors write a modified form of a GFM unordered list ({{HTMLElement("ul")}}). In this form:

- The GFM `<ul>` contains any number of top-level GFM `<li>` elements.
- Each of these top-level GFM `<li>` elements must contain, as its final element, one GFM `<ul>` element.
- This final nested `<ul>` must contain a single GFM `<li>` element, whose text content must start with ": " (a colon followed by a space). This element may contain block elements, including paragraphs, code blocks, embedded lists, and notes.

Each of these top-level GFM `<li>` elements will be transformed into a
`<dt>`/`<dd>` pair, as follows:

- The top-level GFM `<li>` element will be parsed as a GFM `<li>` element
  and its internal contents will comprise the contents of the `<dt>`, except for the final nested `<ul>`, which will not be included in the `<dt>`.
- The `<li>` element in the final nested `<ul>` will be parsed as a GFM `<li>` element and its internal contents will comprise the contents of the `<dd>`, except for the leading ": ", which will be discarded.

For example, this is a `<dl>`:

````plain
- term1
    - : My description of term1

- `term2`
    - : My description of term2

      It can have multiple paragraphs, and code blocks too:

      ```js
      const thing = 1;
      ```
````

In GFM/CommonMark, this would produce the following HTML:

```html
<ul>
  <li>
    <p>term1</p>
    <ul>
      <li>: My description of term1</li>
    </ul>
  </li>
  <li>
    <p><code>term2</code></p>
    <ul>
      <li>
        <p>: My description of term2</p>
        <p>It can have multiple paragraphs, and code blocks too:</p>
        <pre>
          <code class="brush: js">const thing = 1;</code>
        </pre>
      </li>
    </ul>
  </li>
</ul>
```

On MDN, this would produce the following HTML:

```html
<dl>
  <dt>
    <p>term1</p>
  </dt>
  <dd>My description of term1</dd>
  <dt>
    <p><code>term2</code></p>
  </dt>
  <dd>
    <p>My description of term2</p>
    <p>It can have multiple paragraphs, and code blocks too:</p>
    <pre>
       <code class="brush: js">const thing = 1;</code>
    </pre>
  </dd>
</dl>
```

Definition lists written using this syntax must consist of pairs of `<dt>`/`<dd>` elements. Using this syntax, it's not possible to write a list with more than one consecutive `<dt>` element or more than one consecutive `<dd>` element: the parser will treat this as an error. We expect almost all definition lists on MDN will work with this limitation, and for those that do not, authors can fall back to raw HTML.

As a workaround for cases where an author needs to associate multiple `<dt>` items with a single `<dd>`, consider providing them as a single `<dt>` that holds multiple terms, separated by commas, like this:

```plain
- `param1`, `param2`, `param3`
    - : My description of params 1, 2, and 3
```

The rationale for the syntax described here is that it works well enough with tools that expect CommonMark (for example, Prettier or GitHub previews) while being reasonably easy to write and to parse.

### Discussion reference

This issue was resolved in <https://github.com/mdn/content/issues/4367>.

## Tables

In GFM (but not CommonMark) there is a syntax for tables: <https://github.github.com/gfm/#tables-extension->. We will make use of this but:

- The GFM syntax only supports a subset of the features available in HTML. If you need to use table features that are not supported in GFM, use HTML for the table.
- If the GFM representation of the table would be more than 150 characters wide, use HTML for the table.
- We support a special kind of table called a "properties table", which has its own CSS class and is therefore always HTML.

So the general principle here is: authors should use the GFM Markdown syntax when they can, and fall back to raw HTML when they have to or when HTML is more readable. See "When to use HTML tables" below.

### GFM table syntax style

In GFM table syntax, authors can omit leading and trailing pipes for rows. MDN authors must include these pipes, for the sake of readability.

That is, MDN authors must use this style:

```plain
| Heading 1 | Heading 2 | Heading 3 |
|-----------|-----------|-----------|
| cell 1    | cell 2    | cell 3    |
| cell 4    | cell 5    | cell 6    |
```

and not this style:

```plain
Heading 1 | Heading 2 | Heading 3
 --- | --- | ---
cell 1    | cell 2    | cell 3
cell 4    | cell 5    | cell 6
```

### When to use HTML tables

There are three main circumstances in which authors should use HTML tables rather than GFM syntax: when the table uses features that are not supported in GFM, when the GFM table would be too wide to be readable, and when the writer wants a special type of table called a "properties table".

#### Table features that are not supported in GFM

The main limitations of GFM table syntax are:

- GFM tables must have a header row.
- GFM tables may not have a header column.
- GFM won't parse GFM block elements in table cells. For example, you can't have a list in a table cell.
- GFM doesn't support any table elements beyond `<table>`, `<tr>`, and `<th>`, and `<td>`.
- GFM doesn't support any table element attributes like `colspan`, `rowspan`, or `scope`.

If an author needs to use any of the unsupported features, they should write the table in HTML.

Note that we don't recommend the general use of `<caption>` elements on tables, since that would also rule out the GFM syntax.

#### GFM table maximum width

Even when a table could be written in GFM it is sometimes better to use HTML, because GFM uses an "ASCII art" approach to tables that is not readable when table rows get long. For example, consider this table:

```html
  <table>
    <tr>
      <th>A heading 1</th>
      <th>A heading 2</th>
      <th>A heading 3</th>
      <th>A heading 4</th>
      <th>A heading 5</th>
      <th>A heading 6</th>
    </tr>
    <tr>
      <td>Something shortish</td>
      <td>Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format.</td>
      <td>Something shortish</td>
      <td>Another cell with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format.</td>
      <td>Something shortish</td>
      <td>Something shortish</td>
    </tr>
</table>
```

In GFM this will look like:

```plain
  | A heading 1        | A heading 2                                                                                                                                         | A heading 3        | A heading 4                                                                                                                                                              | A heading 5        | A heading 6        |
  | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------ |
  | Something shortish | Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Another cell with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Something shortish |
```

In a case like this it would be better to use HTML.

This leads us to the following guideline: _if the Markdown representation of the table would be more than 150 characters wide, use HTML for the table_.

#### Properties tables

Properties tables are a specific type of table used for displaying structured property-value content across a set of pages of a particular type. These tables have two columns: the first column is the header column and lists the properties, and the second column lists their values for this particular item. For example, here's the properties table for the {{domxref("PannerNode")}} interface:

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

These pages can't be represented in GFM anyway, because they have a header column. Writers should therefore use HTML. To get the special styling, writers should apply the `"properties"` class to the table:

```html
<table class="properties">
```

### Discussion reference

This issue was resolved in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342>, and <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Superscript and subscript

Writers will be able to use the HTML {{HTMLElement("sup")}} and {{HTMLElement("sub")}} elements if necessary, but should use alternatives if possible. In particular:

- For exponentiation, use the caret: `2^53`.
- For ordinal expressions like 1

  <sup>st</sup>

  , prefer words like "first".

- For footnotes, don't mark up the footnote references with, e.g., `<sup>[1]</sup>`; it's unnecessary.

### Discussion reference

This issue was resolved in <https://github.com/mdn/content/issues/4578>.

## Page summary

The _page summary_ is the first "content" paragraph in a page—the first text that appears after the page front matter and any [sidebar or page banner macros](#kumascript).

This summary is used for search engine optimization (SEO) and also automatically included alongside page listings by some macros.
The first paragraph should therefore be both succinct and informative.

### Discussion reference

This issue was resolved in <https://github.com/mdn/content/issues/3923>.

## KumaScript

Writers will be able to include KumaScript macro calls in prose content:

```plain
The **`margin`** [CSS](/en-US/docs/Web/CSS) property
sets the margin area on all four sides of an element. It is a shorthand for
\{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}},
and \{{cssxref("margin-left")}}.

\{{EmbedInteractiveExample("pages/css/margin.html")}}

The top and bottom margins have no effect on replaced inline elements, such as
\{{HTMLElement("span")}} or \{{HTMLElement("code")}}.
```
