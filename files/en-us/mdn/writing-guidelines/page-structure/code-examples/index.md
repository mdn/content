<!-- Captured -->

This document series outlines the coding guidelines and best practices we use for writing demos, code snippets, interactive examples, etc, for use on MDN.

If you are looking for guidelines to follow when writing your code examples, you have come to the right place. The biggest advantage to adhering to these guidelines is that it will foster consistency across our samples and demos on MDN, which increases readability and comprehension overall.

> **Note:** If you want advice on the styling of code as it appears on an MDN article, rather than the code content, see our [Writing style guide](/en-US/docs/MDN/Guidelines/Writing_style_guide#code_sample_style_and_formatting).

## Article structure

This article contains general high-level best practices for writing MDN code examples. Its subarticles are as follows:

- [General guidelines for all code](/en-US/docs/MDN/Guidelines/Code_guidelines/General) — both syntactical and for styling/displaying examples
- [HTML guidelines](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML)
- [CSS guidelines](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS)
- [JavaScript guidelines](/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript)
- [Shell prompt guidelines](/en-US/docs/MDN/Guidelines/Code_guidelines/Shell)

## General best practices

This section provides quick general best practices for creating an understandable minimal code sample to demonstrate usage of a specific feature or function.

Code samples need to be:

- simple enough to be understandable, but
- complex enough to do something interesting, and preferably useful.

There is one overarching consideration that you need to keep in mind: **Readers will copy and paste the code sample into their own code, and may put it into production.**

Therefore, you need to make sure that the code example is usable and follows generally accepted best practices, and **does not** do anything that will cause an application to be insecure, grossly inefficient, bloated, or inaccessible. If the code example is not runnable or production-worthy, be sure to include a warning in a code comment and in the explanatory text — if it is a snippet and not a full example, make this clear. This also means that you should provide **all** of the information necessary to run the example including any dependencies and setup.

Code samples should be as self-contained and easy to understand as possible. The aim is not necessarily to produce efficient, clever code that impresses experts and has great functionality, but rather to produce reduced working examples that can be understood as quickly as possible.

Further general best practices are as follows:

- The sample should be short and ideally only show the feature you are immediately interested in.
- **Only** include code that is essential for the example. A large amount of non-relevant code can easily distract or confuse the audience. If you want to provide a full, more lengthy, example put it in one of our [GitHub repos](https://github.com/mdn/) (or a JSBin, Codepen, or similar) and then provide the link to the full version above or below the sample.
- Don't include unnecessary server-side code, libraries, frameworks, preprocessors, and other such dependencies — they make the code less portable, and harder to run and understand. Use vanilla code where possible.
- Don't assume knowledge of any libraries, frameworks, preprocessors, or other non-native features. For example, use class names that make sense within the example rather than classnames that make sense to BEM or Bootstrap users.
- Write your code as cleanly and understandably as possible, even if it is not the most efficient way to do it.
- Don't use bad practices for brevity (such as presentational elements like {{HTMLElement("big")}} or {{domxref("Document.write", "document.write()")}}); do it correctly.
- In the case of API demos, if you are using multiple APIs together point out what APIs are included, and what features come from where.


<!-- Converting live sample -->
MDN has a "[live sample](/en-US/docs/MDN/Structures/Live_samples)" system, where the code sample shown on a page is directly used to display the output of that same sample. However, many existing articles have code samples that do not yet use this system, and need to be converted.

Live samples, which let you see what a sample's output looks like, make documentation more dynamic and instructive. This guide covers how to take existing samples and add "live" functionality to them.

## Where does it need to be done?

Any article that has a static code example (just blocks of HTML, CSS, JavaScript) that you think would benefit from being shown running live.

## What do you need to know to do the task?

- Understanding of HTML, CSS and/or JavaScript, depending on the code sample.
- Ability to use [KumaScript](/en-US/docs/MDN/Tools/KumaScript) macros within MDN articles.

## What are the steps to do the task?

1. Find a code example that you think should be converted to be "live".
2. Convert the code sample to be "live".
3. Delete any code or image that was previously used to display the output of the sample.

For more information on creating and editing Live Samples, see [Using the live sample system](/en-US/docs/MDN/Structures/Live_samples)

<!-- interactive example -->
When learning the web, it's important to rely on active learning content. Such content is made to help with learning something pro-actively. It can be exercises, live hackable examples, tasks to perform, assessments, etc. In short, anything that can help someone to actively understand something.

There is no straightforward way to create such content. For example many third party tools exist that can help you create live hackable examples (see: [JSFiddle](https://jsfiddle.net/), [CodePen](https://codepen.io/), [Dabblet](https://dabblet.com/), etc.) that you can link from MDN articles. If you want to create more advanced comprehensible exercises, you can easily use [Thimble](https://thimble.mozilla.org) from the WebMaker project.

Currently, MDN does not have an easy tool to author such active content. However, if you are a coder you can use the current MDN features to create custom active learning content.

## MDN live samples

MDN has a very cool feature called **live samples**. It's a mechanism that turns any HTML, CSS, and JavaScript code inside an MDN page into its executed equivalent. Before using it, you should read over [Using the live sample system](/en-US/docs/MDN/Structures/Live_samples), which is our complete documentation for building them. While they're easy to create, there are quirks and tricks you'll learn along the way.

What is interesting is that it's really easy to tweak that feature to use it in order to embed any kind of tool or utility you want into an MDN page.

### Hidden code

The first way to use a code sample to create active learning content is to edit the page where you want to add your content. Use the Live Sample feature to create your content as you wish. Don't bother with the code complexity you could write; just create what you need. Once your code example is ready, surround it with a simple {{HTMLElement('div')}} element with an appropriate `id` attribute. Add the class `hidden` to any {{HTMLElement('pre')}} elements that surround this code. By doing so, your code won't be displayed but your live sample remains accessible and displayable.

Let's see a simple example:

Click on the following square to randomly change its color:

<div id="hidden_code_example"><pre class="brush: html hidden">&#x3C;div class="square">
  &#x3C;p class="color">#000000&#x3C;/p>
&#x3C;/div></pre><pre class="brush: css hidden">body {
  padding: 10px;
  margin : 0;
}

.square {
width : 80px;
height : 80px;
padding: 10px;
background-color: black;
color: white;
text-align: center;
}

.color {
width: 60px;
text-shadow: 1px 1px 1px black;
}

</pre><pre class="brush: js hidden">function setColor(color) {
  document.querySelector('.square').style.backgroundColor = '#' + color;
  document.querySelector('.color').textContent = '#' + color;
}

function getRandomColor() {
var color = Math.floor(Math.random() \* 16777215);
return color.toString(16);
}

document.addEventListener('click', function (e) {
setColor(getRandomColor());
});

</pre></div>

{{EmbedLiveSample('hidden_code_example', 120, 125)}}

If you take a look at the source code of this page, you'll see the following HTML code:

```html
<p>Click on the following square to randomly change its color or just type an hexadecimal code color</p>

<div id="hidden_code_example">

<pre class="brush: html hidden">
  <div class="square">
    <p class="color">#000000</p>
  </div>
</pre>

<pre class="brush: css hidden">
body {
  padding: 10px;
  margin : 0;
}

.square {
  width  : 80px;
  height : 80px;
  padding: 10px;
  background-color: black;
  color: white;
  text-align: center;
}

.color {
  width: 60px;
  text-transform: uppercase;
}
</pre>

<pre class="brush: js hidden">
function setColor(color) {
  document.querySelector('.square').style.backgroundColor = '#' + color;
  document.querySelector('.color').textContent = '#' + color;
}

function getRandomColor() {
  var color = Math.floor(Math.random() * 16777215);
  return color.toString(16);
}

document.addEventListener('click', function (e) {
  setColor(getRandomColor());
});
</pre>
</div>

\{{EmbedLiveSample('hidden_code_example', 120, 125)}}
```

You can see a more advanced example of such a tweak on [the Canvas API page](/en-US/docs/Web/API/Canvas_API#javascript).
