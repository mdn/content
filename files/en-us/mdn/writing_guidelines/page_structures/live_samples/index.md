---
title: Live examples
slug: MDN/Writing_guidelines/Page_structures/Live_samples
page-type: mdn-writing-guide
---

{{MDNSidebar}}

MDN supports displaying code blocks within the articles as _live samples_, enabling readers to see both the code and its output as it would look on a web page. This feature allows readers to understand exactly what the executed code would produce, making the documentation dynamic and instructive.
It also allows authors to be absolutely sure that the code blocks in documentation have the expected output, and work appropriately when used with different browsers.

The live sample system can process code blocks written in HTML, CSS, and JavaScript, regardless of the order in which they are written in the page. This ensures that the output corresponds to the combined source code because the system runs the code directly within the page.

Unlike [Interactive examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples#what_types_of_code_example_are_available), live samples don't provide inbuilt support for capturing console logging or resetting examples that are changed by user input.
The [Examples](#examples) section shows how you can implement these, and other, useful features.

## How does the live sample system work?

The live sample system groups code blocks, merges them into HTML and renders the HTML in an {{HTMLElement("iframe")}}.
A live sample consists of two parts:

- One or more code blocks grouped together
- A macro call that shows the result of the combined code blocks in an {{HTMLElement("iframe")}}

Each [code block](/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) containing code for the output has a language identifier — `html`, `css`, or `js` — that specifies whether it's HTML, CSS, or JavaScript code. The language identifiers must be on the corresponding blocks of code, and a macro call (`EmbedLiveSample`) must be present in the page to display the output:

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

The live sample system allows grouping of code blocks in different ways to effectively display the output. The next section describes these methods.

### Grouping code blocks

Code blocks can be grouped in two ways:

1. Using the ID of a heading or a block element that contains the code blocks as the identifier
2. Specifying a string identifier along with code blocks

Code blocks that do not explicitly specify an identifier are, by default, grouped together using the ID of the heading or block element that contains the code blocks. The identifier in this case is the ID of a heading or a block element (such as a {{HTMLElement("div")}}). This is shown in the example below, where `html` and `css` codes within the block "Styling a paragraph" are used to generate the output for the `EmbedLiveSample` macro call.

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

To group code blocks using an identifier, add a string in the format `live-sample___{IDENTIFIER}` to the code block's info string. The identifier must be unique to the code blocks you want to group. For example, `live-sample___color-picker` uses `color-picker` as the identifier for the live sample system, and all code blocks with `live-sample___color-picker` in their info string are combined in the live sample.
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

The macro uses a special URL that includes the ID to fetch the output for a given group of code blocks. You should never hardcode this URL in content — if you need to link to the example, use the [`LiveSampleLink`](#livesamplelink_macro) macro.

The resulting frame (or page) is sandboxed, secure, and technically may do anything that works on the web. Of course, as a practical matter, the code should be relevant to the page's content; any unrelated material is subject to removal by MDN's editor community.

The live sample system has lots of options available, and we'll try to break things down to look at them one bit at a time.

### Live sample macros

There are two macros that you can use to display live samples:

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) embeds a live sample into a page
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) creates a link that opens the live sample in a new page

In many cases, you may be able to add the `EmbedLiveSample` or `LiveSampleLink` macro to pages with little or no additional work! As long as the sample can be identified by a heading's ID or is in a block with an ID you can use, adding the macro should do the job.

#### EmbedLiveSample macro

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow)}}
```

- sample_id
  - : Required: This can be the string identifier of the sample or the ID of the heading or enclosing block to draw the code from.
    To verify if you have the correct heading ID, look at the URL of the section in the page's table of contents; you can also check it by viewing the source of the page.
- width {{deprecated_inline}}
  - : The `width` attribute for the {{HTMLElement("iframe")}}, specified in `px`. Deprecated since it no longer has any effect: live examples always span the full width of the content area.
- height
  - : The `height` attribute of the {{HTMLElement("iframe")}}, specified in `px`. Must be at least `60`. This is optional; a reasonable default height will be used if you omit this.
- screenshot_URL {{deprecated_inline}}
  - : The URL of a screenshot that shows what the live sample should look like. Deprecated; only add live samples if there is reasonable browser support.
- page_slug {{deprecated_inline}}
  - : The slug of the page containing the sample; this is optional, and if it's not provided, the sample is pulled from the same page on which the macro is used. Deprecated; only include live samples if the code is on the same page.
- class_name {{deprecated_inline}}
  - : The class name to apply to the {{HTMLElement("iframe")}}. Deprecated; there's no reason to use another class name.
- allow
  - : The `allow` attribute for the {{HTMLElement("iframe")}}. This is optional; by default no allowed features are present.

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

If you're not using a particular language type (for example, if you are not using JavaScript) or if you are hiding the code block, then you should omit the corresponding heading.

### Hiding code

Sometimes you just want to display the static code block pertinent to the example rendered within a page. However, you still need the HTML, CSS, and JavaScript code blocks to render such an example.

To achieve this, you can hide any code blocks that are not relevant by adding the `hidden` info string to the language identifier. If you do this, omit the `### HTML/CSS/JavaScript` headings for the hidden code blocks.

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

One common use case is to take existing code snippets already shown on MDN and turning them into live samples.
The first step is to either add code snippets or ensure that existing ones are ready to be used as live samples, in terms of the content and in terms of their markup. The code snippets, taken together, must comprise a complete, runnable example. For example, if the existing snippet shows only CSS, you might need to add a snippet of HTML for the CSS to operate on.

Each piece of code must be in a code block, with a separate block for each language, properly marked as to which language it is. Most of the time, this has already been done, but it's always worth double-checking to be sure each piece of code is configured with the correct syntax. This is done with a language identifier on the code block of `language-type`, where _language-type_ is the type of language the block contains, e.g. `html`, `css`, or `js`.

> **Note:** You may have more than one block for each language; they are all concatenated together. This lets you have a chunk of code, followed by an explanation of how it works, then another chunk, and so forth. This makes it even easier to produce tutorials and the like that utilize live samples interspersed with explanatory text.

So make sure the code blocks for your HTML, CSS, and/or JavaScript code are each configured correctly for that language's syntax highlighting, and you're good to go.

## Examples

This section contains examples showing how the live sample system may be used, including the different ways of grouping the code blocks that comprise an example, and how to display logging output in your samples.

Note that the headings for code blocks ("HTML", "CSS", or "JavaScript") are used by convention in most MDN examples, but are not actually required by the live sample macro.

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

In the JavaScript example, we attach an event handler to the "Hello world!" text that toggles it when it is clicked.

```js
const el = document.getElementById("item");
let toggleClick = false;
el.onclick = function () {
  this.textContent = toggleClick
    ? "Hello world! Welcome to MDN"
    : "Owww, stop poking me!";
  toggleClick = !toggleClick;
};
```

#### Result

Here is the result of running the code blocks above via `\{{EmbedLiveSample('grouping_code_blocks_by_heading')}}`:

{{EmbedLiveSample('grouping_code_blocks_by_heading')}}

Here is a link that results from calling these code blocks via `\{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}`:

{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}

### Grouping code blocks by identifier

This HTML creates a paragraph and some blocks to help us position and style a message. The `live-sample___hello-world` string has been added to the `html` language identifier for this code block.

```html live-sample___hello-world
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

The CSS code styles the box as well as the text inside it. The `live-sample___hello-world` string has been added to the `css` language identifier for this code block.

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

This JavaScript code attaches an event handler to the "Hello world!" text that toggles it when it is clicked. The `live-sample___hello-world` string has been added to the `js` language identifier for this code block as well.

```js live-sample___hello-world
const el = document.getElementById("item");
let toggleClick = false;
el.onclick = function () {
  this.textContent = toggleClick
    ? "Hello world! Welcome to MDN"
    : "Owww, stop poking me!";
  toggleClick = !toggleClick;
};
```

We get this output by running the code blocks above using the string identifier `hello-world` in the `\{{EmbedLiveSample('hello-world')}}` macro call:

{{EmbedLiveSample("hello-world")}}

### Displaying `<iframe>` of a certain size

Use the `height` parameter to specify the size of the `<iframe>` element that contains the live sample output.

```html
<p>Just some simple text here.</p>
```

Result of `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Result of `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Allowing features

The `allow` parameter can be used to specify the features that are allowed in the `<iframe>` element that contains the live sample output. The available values come from the [permission policy syntax for frames](/en-US/docs/Web/HTTP/Permissions_Policy#embedded_frame_syntax).

```html
<div id="fullscreen-content">
  <button id="toggle-btn">Toggle fullscreen</button>
</div>
```

```js
const toggleBtn = document.getElementById("toggle-btn");
const fullscreenContent = document.getElementById("fullscreen-content");

toggleBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    fullscreenContent.requestFullscreen();
  }
});
```

Result of `\{{EmbedLiveSample("allowing_features", "", "60", "", "", "", "fullscreen")}}`:

{{EmbedLiveSample("allowing_features", "", "60", "", "", "", "fullscreen")}}

Result of `\{{EmbedLiveSample("allowing_features", "", "60")}}`:

{{EmbedLiveSample("allowing_features", "", "60")}}

### Displaying a single entry log

This example shows how to implement a simple single-entry log in your live sample, where the previous value is replaced whenever a new log entry is added.

For clarity this example separates the logging code and the code that uses it, and displays the logging code first.
Generally when implementing your own samples you should place logging elements below other UI elements.

> **Note:** Displaying log output as part of the sample provides a much better user experience than using `console.log()`.

#### HTML

Create a {{HTMLElement("pre")}} element with an `id` of `"log"` for displaying the log output.

```html
<pre id="log"></pre>
```

#### JavaScript

Next define the logging function `log()`.
This takes the text to be logged as an argument, and uses it to replace the existing log.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Note that the content of the log element is set using the `innerText` property, which is safer than using `innerHTML` because the logged text is not parsed to HTML (which might potentially inject malicious code).

#### CSS

The CSS sets the height of the logging element.

```css
#log {
  height: 20px;
}
```

#### Logging test code

This example is designed to show "how to log", so "what is logged" isn't all that important.
This is therefore trivially implemented as a button that the user can press to increment a value.

```html
<button id="increment" type="button">Press me many times</button>
```

```js
const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`The button has been pressed ${incrementValue} time(s)`);
});
```

#### Result

Press the button to add new log content.

{{EmbedLiveSample("Displaying a single entry log", "100%", "80px")}}

### Displaying a log that appends items

This example shows how to implement a simple "logging console" in your live sample.
The console appends a new line to the end of the output each time a log is added, scrolling the new item into view.

For clarity this example separates the logging code and the code that uses it, and displays the logging code first.
Generally when implementing your own samples you should place logging elements below other UI elements.

> **Note:** Displaying log output as part of the sample is a much better user experience than using `console.log()`.

> **Note:** See [`DataTransfer.effectAllowed`](/en-US/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed) for a more complete example.

#### HTML

Create a {{HTMLElement("pre")}} element with an `id` of `"log"` for displaying the log output.

```html
<pre id="log"></pre>
```

#### JavaScript

Next define the logging function `log()`.
This takes the text to be logged as an argument, and appends it to the content in the log element as a new line.
The function also sets the element `scrollTop` to the `scrollHeight` of the element, which forces the new line of log text to scroll into view.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

As with the previous example we set the content using the `innerText` property as this is less susceptible to malicious code than using `innerHTML`.

#### CSS

The CSS adds scrollbars if the element content overflows, sets the height of the logging element, and adds a border.
Note that the JavaScript above ensures that if it does overflow, addition of new log text will scroll the text into view.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Logging test code

This example is designed to show "how to log", so "what is logged" isn't all that important.
This is therefore trivially implemented as a button that the user can press to increment a value.

```html
<button id="increment" type="button">Press me many times</button>
```

```js
const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`The button has been pressed ${incrementValue} time(s)`);
});
```

#### Result

Press the button to add new log content.

{{EmbedLiveSample("Displaying a log that appends items", "100%", "180px")}}

### Displaying a reset button

A reset button can be helpful for examples that cannot be restored to their initial state without resetting the page.
For example, [the `Highlight.priority` "setting priority" example](/en-US/docs/Web/API/Highlight/priority#result_2) needs a reset button, because once you've set either priority the initial state is unavailable.

This example shows how to add a reset button to the [Displaying a log that appends items](#displaying_a_log_that_appends_items) example above.
Note that the JavaScript and CSS for the logging code are the same as in the previous example, so that code is hidden.

#### HTML

The HTML for the example now includes a reset button.

```html
<button id="increment" type="button">Press me many times</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

#### JavaScript

The code for the button adds a `click` event handler function that simply reloads the frame containing the current example.

```js
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`The button has been pressed ${incrementValue} time(s)`);
});
```

#### Result

Click the "Press me many times" button a number of times.
Reset the example by pressing the "Reset" button.

{{EmbedLiveSample("Displaying a reset button", "100%", "180px")}}

## Conventions regarding live samples

- Orders of code blocks
  - : When adding a live sample, the code blocks should be sorted so that the first one corresponds to the main language for this sample (if there is one). For example, when adding a live sample for the HTML Reference, the first block should be HTML, when adding a live sample for the CSS Reference, it should be CSS and so on.
- Naming of headings
  - : When there is no ambiguity (e.g. the sample is under a "Examples" section), headings should be straightforward with the sole name of the corresponding language: HTML, CSS, JavaScript, SVG, etc. (see above). Headings like "HTML Content" or "JavaScript Content" should not be used. However if such a short heading makes content unclear, one can use a more thoughtful title.
- Using a "Result" block
  - : After the different code blocks, please use a last "Result" block before using the `EmbedLiveSample` macro (see above). This way, the semantic of the example is made clearer for both the reader and any tools that would parse the page (e.g. screen reader, web crawler).
