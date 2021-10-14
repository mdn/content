---
title: Guide to classes and styles used in MDN content
slug: MDN/Guidelines/CSS_style_guide
tags:
  - Classes
  - Guide
  - Guidelines
  - MDN
  - MDN Meta
  - Styles
---
{{MDNSidebar}}

> **Warning:** We're currently in the process of converting all MDN content from HTML into Markdown. Currently you can write pages in HTML or in Markdown, but we don't want to mix formats within a section.
>
> At the moment the CSS, JavaScript, and Web API documentation is in Markdown. So if you're writing content in that part of the site, this page is _not_ applicable, and you should instead follow the guidelines in the [Markdown in MDN](/en-US/docs/MDN/Contribute/Markdown_in_MDN) guide.

MDN has many built-in global styles available for use when styling and laying out articles, and this article is a guide to the available classes and when to use them.

Please keep in that these styles have been developed to cover the most common situations that arise while styling article content, and that whenever possible, you should try to use the available classes; diverging too much from the standard content look-and-feel isn't good for consistency and readability. If you feel that your page absolutely requires some kind of special custom styling, you should [talk to us](/en-US/docs/MDN/Contribute/Getting_started#step_4_ask_for_help) about it.

## Styling code blocks

### Code syntax highlighting

To create a code example block on MDN, you wrap it in a `<pre>` element:

```plain
<pre>p {
  color: red;
  /* This is my code example */
}</pre>
```

This gives you the following output:

```plain
p {
  color: red;
  /* This is my code example */
}
```

If you want to use syntax highlighting on your code example, you need to include a `class` attribute containing a value of `brush: highlight-type`, where `highlight-type` can be one of:

- `bash`
- `cpp` (for C/C++)
- `css`
- `html`
- `java`
- `js` (for JavaScript)
- `json`
- `php`
- `python`
- `sql`
- `svg`
- `xml`
- `wasm` (for WebAssembly text format)

For example, to provide CSS highlighting, you'd do this:

```plain
<pre class="brush: css">p {
  color: red;
  /* This is my code example */
}</pre>
```

Which gives you the following output:

```css
p {
  color: red;
  /* This is my code example */
}
```

If no appropriate language is available, just use no brush value, or `brush: plain`, to get code without syntax highlighting.

### .example-bad and .example-good

Good and bad examples can be highlighted using the `.example-good` and `.example-bad` classes. These are used on `<pre>` blocks denoting sample code snippets.

#### Good code example

```html example-good
<label for="test">Form label:</label>
<input type="text" id="test">
```

#### Bad code example

```html example-bad
<input type="text">
```

**You should use headings with these classes, as shown below** — CSS is unable to add localized language to the page identifying whether they're good or bad so this is important for people who rely on screen readers, and people with different cultural backgrounds (green and red are not universally good and bad.)

#### Example syntax

```html
<h5 id="Good_code_example">Good code example</h5>

<pre class="brush: html example-good">
  &lt;label for="test"&gt;Form label:&lt;/label&gt;
  &lt;input type="text" id="test"&gt;
</pre>

<h5 id="Bad_code_example">Bad code example</h5>

<pre class="brush: html example-bad">
  &lt;input type="text"&gt;
</pre>
```

### .hidden

Allows you to hide `<pre>` blocks in the final rendered view. This is used to provide HTML, CSS, and JavaScript to the script that creates the live code samples while only displaying the relevant language to the reader.

#### Example syntax

```html
<h4 id="Hidden_Code_Sample">Hidden code Sample</h4>

<div class="hidden">
<h5 id="HTML">HTML</h5>

<pre class="brush: html;">
&lt;button id="test"&gt; Click me &lt;/button&gt;

<h5 id="CSS">CSS</h5>

<pre class="brush: css;">
button {
    background-color: #a00;
    color:#fff;
    font-size: 20px;
}
</pre>
</div>

<h5 id="JavaScript_Content">JavaScript Content</h5>

<pre class="brush: js;">
document.getElementById("test").addEventListener("click", works);
function works() {
    window.alert("you clicked it!");
}
</pre>

<p>\{{EmbedLiveSample("Hidden_Code_Sample")}}</p>
```

<div id="Hidden_code"><h4>Hidden code sample</h4><pre class="brush: html hidden">&#x3C;button id="test">Click Me&#x3C;/button>
</pre><pre class="brush: css hidden">button{
    background-color: #a00;
    color:#fff;
    font-size: 20px;
}
</pre><pre class="brush: js hidden">document.getElementById("test").addEventListener("click", works);
function works(){
    window.alert("you clicked it!");
}
</pre></div>

{{EmbedLiveSample("Hidden_code", "100%", 150)}}

## .note

Turns a section of content into a note box, which is normally a useful note that tangentially relates to the current subject but doesn't directly fit into the flow of information.

> **Note:** This is how we usually present a note in an MDN article.

### Example syntax

```html
<div class="note">
  <p><strong>Note:</strong> This is how we usually present a note in an MDN article.</p>
</div>
```

## .warning

Turns a section of content into a warning box, which normally communicates a vital fact that the reader needs to be really careful about (e.g., they need to do something, or avoid something to avoid serious issues.)

> **Warning:** Here be dragons!

### Example syntax

```html
<div class="warning">
  <p><strong>Warning:</strong> Here be dragons!</p>
</div>
```
