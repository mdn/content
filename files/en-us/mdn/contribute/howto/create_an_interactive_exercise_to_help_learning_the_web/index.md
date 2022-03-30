---
title: How to create an interactive learning exercise
slug: MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web
tags:
  - Guide
  - Howto
  - Intermediate
  - Learning
  - MDN Meta
  - Tutorial
---
{{MDNSidebar}}

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

### Code from outside the page

The previous example is okay if you want to embed basic active learning content. However, if you want to deal with complex code, it can become a bit awkward to deal with that `hidden` class wrapper.

So another option is to write the code of your learning content on an MDN page and then embed it into another page. To do this we can still use the [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) macro, but we'll also have to pass it the page from where to extract your code.

Let's how that sample looks when configured as if it were being embedded from a remote origin:

Click on the following square to randomly change its color or just type a hexadecimal code color

{{EmbedLiveSample('The_example', 120, 125, '', 'MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web/distant_example')}}

This time, if you take a look at that page's source, you'll see no hidden code. If you want to see the code, just go to [the page that hosts it](/en-US/docs/MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web/distant_example).
