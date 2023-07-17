---
title: Live examples
slug: MDN/Writing_guidelines/Page_structures/Live_samples
page-type: mdn-writing-guide
---

{{MDNSidebar}}

MDN supports turning code blocks in articles into running samples the reader can see in action. These are called _live samples_ and allows users to see what code output looks like. It also makes documentation dynamic and instructive.

These live samples can include HTML, CSS, and JavaScript in any combination. Note that "live" samples are _not interactive_; however, they do ensure that the output for a sample matches the source of the sample exactly, because the generated samples run the code in the page directly.

## How does the live sample system work?

The live sample system groups code blocks, merges them into HTML and renders the HTML in an {{HTMLElement("iframe")}}.
A live sample consists of two parts:

- One or more code blocks grouped together
- A macro call that shows the result of the combined code blocks in an {{HTMLElement("iframe")}}

Each [code block](/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) containing code for the sample has a language identifier on it that indicates whether it's HTML, CSS, or JavaScript code; these are `html`, `css`, and `js`. The language classes must be on the corresponding blocks of code and a macro call must be present in the page to display the sample:

````md
## Examples

```html
<!-- HTML code -->
```

```css
/* CSS code */
```

\{{EmbedLiveSample("Examples")}}
````

### Grouping code blocks

Code blocks can be grouped in two ways:

1. Using the ID of a heading or a block element that contains the code blocks
2. Using a string identifier in code blocks

Code blocks that do not use an explicit identifier are grouped together using the ID of the heading or block element that contains the code blocks.
The identifier in this case is the ID of a heading or a block element (such as a {{HTMLElement("div")}}), for example:

````md
## Examples

### Styling a paragraph

In this example, we're using CSS to style paragraphs that have the `fancy` class set.

#### HTML

```html
<p>I'm not fancy.</p>

<p class="fancy">But I am!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### Result

\{{EmbedLiveSample("Styling a paragraph")}}

Only the `<p>` element with `class="fancy"` will get styled `red`.
````

- If the ID belongs to a block element, the group includes all the code blocks within the enclosing block element whose ID is used.
- If the ID belongs to a heading, the group includes all the code blocks that are after that heading and before the next heading of the same heading level. Note that code blocks under subheadings of the specified heading are all used; if this is not the effect you want, use an ID on a block element or use a string identifier instead.

To group code blocks using a string identifier, add the identifier to the code blocks as a class after the language identifier in the form `live-sample___{IDENTIFIER}`, for example, `live-sample___color-picker`.
The following example groups a CSS and a JavaScript code block together using the identifier `color-picker`:

````md
## Examples

### Styling a paragraph

In this example, we're using CSS to style paragraphs that have the `fancy` class set.

```html live-sample___paragraph-styling
<p>I'm not fancy.</p>

<p class="fancy">But I am!</p>
```

```css live-sample___paragraph-styling
p.fancy {
  color: red;
}
```

Only the `<p>` element with `class="fancy"` will get styled `red`:

\{{EmbedLiveSample("paragraph-styling")}}
````

The macro uses a special URL to fetch the sample code for a given group, for example `https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/animation/_sample_.Cylon_Eye.html`. The general structure is `https://url-of-page/_sample_.group-id.html`, where `group-id` is the ID of the heading or block where the code is located.

The resulting frame (or page) is sandboxed, secure, and technically may do anything that works on the Web. Of course, as a practical matter, the code must contribute to the point of the page that contains it; random stuff running on MDN will be removed by the editor community.

The live sample system has lots of options available, and we'll try to break things down to look at them one bit at a time.

### Live sample macros

There are two macros that you can use to display live samples:

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) embeds a live sample into a page
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) creates a link that opens the live sample in a new page

In many cases, you may be able to add the `EmbedLiveSample` or `LiveSampleLink` macro to pages with little or no additional work! As long as the sample can be identified by a heading's ID or is in a block with an ID you can use, adding the macro should do the job.

#### EmbedLiveSample macro

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug)}}
```

- sample_id
  - : Required: This can be the string identifier of the sample or the ID of the heading or enclosing block to draw the code from.
    To verify if you have the correct heading ID is to look at the URL of the section in the page's table of contents; you can also check it by viewing the source of the page.
- width
  - : The width of the {{HTMLElement("iframe")}} to create, specified in `px`. This is optional; a reasonable default width will be used if you omit this. Note that if you want to use a specific width, you _must_ also specify the height parameter.
- height
  - : The height of the {{HTMLElement("iframe")}} to create, specified in `px`. This is optional; a reasonable default height will be used if you omit this. Note that if you want to use a specific height, you _must_ also specify the width parameter. If you use only one of them, the default frame size is used.
- screenshot_URL
  - : The URL of a screenshot that shows what the live sample should look like. This is optional, but can be useful for new technologies that may not work in the user's browser, so they can see what the sample would look like if it were supported by their browser. If you include this parameter, the screenshot is shown next to the live sample, with appropriate headings.
- page_slug

  - : The slug of the page containing the sample; this is optional, and if it's not provided, the sample is pulled from the same page on which the macro is used.

    > **Warning:** This parameter is deprecated. Don't use it in new examples, and remove it from existing examples if you see it. We're actively removing usages of it, and when it is no longer used we will remove support for it.

#### LiveSampleLink macro

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- block_ID
  - : The ID of the heading or enclosing block to draw the code from. The best way to be sure you have the ID right is to look at the URL of the section in the page's table of contents; you can also check it by viewing the source of the page.
- link_text
  - : A string to use as the link text.

## Using the live sample system

The sections below describe a few common use cases for the live sample system.

### Formatting live samples

If you write a live sample in the "Examples" section, provide a descriptive H3 heading (`###`) for this live sample example. Ideally, write a short description of the example explaining the scenario and what you are hoping to demonstrate. Then add subsections with following H4 headings (`####`), in the order listed:

- HTML
- CSS
- JavaScript
- Result

Write the code blocks in the respective subsections listed above.

In the **Result** subsection, add the call to the `EmbedLiveSample` macro. Preferably, include some more prose in this subsection to describe the result.

If you're not using a particular language type (for example, if you are not using JavaScript) or if you are hiding it, then you should omit the corresponding heading.

### Hidden code

Sometimes you just want to display the static code block that is pertinent to the example rendered within a page. However you still need HTML, CSS and JavaScript to render such an example.

To achieve this you can hide any code blocks that are not relevant with the `hidden` class. If you do this, omit the `### HTML/CSS/JavaScript` headings for the hidden code blocks.

Using the example above but hiding the HTML code would look like this:

````md
## Examples

### Styling a paragraph

In this example, we're using CSS to style paragraphs that have the `fancy` class set.

```html hidden
<p>I'm not fancy.</p>

<p class="fancy">But I am!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### Result

Only the `<p>` element with `class="fancy"` will get styled `red`.

\{{EmbedLiveSample("Styling a paragraph")}}
````

### Turning snippets into live samples

One common use case is to take existing code snippets already shown on MDN and turn them into live samples.
The first step is to either add code snippets or ensure that existing ones are ready to be used as live samples, in terms of the content and in terms of their markup. The code snippets, taken together, must comprise a complete, runnable example. For example, if the existing snippet shows only CSS, you might need to add a snippet of HTML for the CSS to operate on.

Each piece of code must be in a code block, with a separate block for each language, properly marked as to which language it is. Most of the time, this has already been done, but it's always worth double-checking to be sure each piece of code is configured with the correct syntax. This is done with a language identifier on the code block of `language-type`, where _language-type_ is the type of language the block contains, e.g. `html`, `css`, or `js`.

> **Note:** You may have more than one block for each language; they are all concatenated together. This lets you have a chunk of code, followed by an explanation of how it works, then another chunk, and so forth. This makes it even easier to produce tutorials and the like that utilize live samples interspersed with explanatory text.

So make sure the code blocks for your HTML, CSS, and/or JavaScript code are each configured correctly for that language's syntax highlighting, and you're good to go.

## Live sample demo

This section is the result of using the live sample template button to create not only the main heading ("Live sample demo"), but also subheadings for our HTML, CSS, and JavaScript content. You're not limited to one block of each; in addition, they don't even need to be in any particular order. Mix and match!

You may choose to delete any of these you wish; if you don't need any script, just delete that heading and its code block. You can also delete the heading for a code block ("HTML", "CSS", or "JavaScript"), since these are not used by the live sample macro.

### Grouping code blocks by heading

#### HTML

This HTML creates a paragraph and some blocks to help us position and style a message.

```html
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

#### CSS

The CSS code styles the box as well as the text inside it.

```css
.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
```

#### JavaScript

This code is very simple. All it does is attach an event handler to the "Hello world!" text that makes an alert appear when it is clicked.

```js
const el = document.getElementById("item");
el.onclick = function () {
  alert("Owww, stop poking me!");
};
```

#### Result

Here is the result of running the code blocks above via `\{{EmbedLiveSample('grouping_code_blocks_by_heading')}}`:

{{EmbedLiveSample('grouping_code_blocks_by_heading')}}

Here is a link that results from calling these code blocks via `\{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}`:

{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}

### Grouping code blocks by identifier

This HTML creates a paragraph and some blocks to help us position and style a message.

```html live-sample___hello-world
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

The CSS code styles the box as well as the text inside it.

```css live-sample___hello-world
.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
```

This code attaches an event handler to the "Hello world!" text that makes an alert appear when it is clicked.

```js live-sample___hello-world
const el = document.getElementById("item");
el.onclick = function () {
  alert("Owww, stop poking me!");
};
```

The result of running the code blocks above via `\{{EmbedLiveSample('hello-world')}}`:

{{EmbedLiveSample("hello-world")}}

## Conventions regarding live samples

- Orders of code blocks
  - : When adding a live sample, the code blocks should be sorted so that the first one corresponds to the main language for this sample (if there is one). For example, when adding a live sample for the HTML Reference, the first block should be HTML, when adding a live sample for the CSS Reference, it should be CSS and so on.
- Naming of headings
  - : When there is no ambiguity (e.g. the sample is under a "Examples" section), headings should be straightforward with the sole name of the corresponding language: HTML, CSS, JavaScript, SVG, etc. (see above). Headings like "HTML Content" or "JavaScript Content" should not be used. However if such a short heading makes content unclear, one can use a more thoughtful title.
- Using a "Result" block
  - : After the different code blocks, please use a last "Result" block before using the `EmbedLiveSample` macro (see above). This way, the semantic of the example is made clearer for both the reader and any tools that would parse the page (e.g. screen reader, web crawler).
