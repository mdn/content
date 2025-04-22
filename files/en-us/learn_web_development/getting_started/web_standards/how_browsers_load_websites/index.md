---
title: How browsers load websites
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
page-type: tutorial-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

In the previous article, we looked at an [overview of the technologies](/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) that websites are built from. In this article we walk through the process by which those technologies are rendered — when a browser has received the code files and other assets that make up a web page (as covered in [How the web works](/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)), how are they put together to create the finished experience that the user interacts with?

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic familiarity with your computer operating system, web browsers, and web technologies.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>The different kinds of assets that are returned in an HTTP response.</li>
          <li>How the different files are assembled by the browser to render a web page that is then displayed to the user.</li>
          <li>Why the browser is sometimes seen as a hostile programming environment, but also an awesome programming environment.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## What files are returned in HTTP responses?

To summarize the [overview of web technologies](/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies) we looked at in the last article, HTTP responses (to requests for a web page) will generally contain some of the following file types:

- HTML files, which specify the web page content and its structure.
- CSS files, which specify styling and layout information.
- JavaScript files, which specify the behavior of interactive parts of the web page.
- Media assets such as images, videos, audio files, [PDFs](/en-US/docs/Glossary/PDF), and [SVGs](/en-US/docs/Glossary/SVG), which are embedded in web pages or otherwise displayed by the browser.
- Other kinds of file that the browser can't handle natively and therefore hands off to a relevant app on the device to render, for example Word or Pages documents, PowerPoint slide decks, and Open Office files.

## Web page rendering

When the user navigates to a new web page (by clicking a link, or entering a web address in the browser address bar), several HTTP requests are sent, and several files are sent back in HTTP responses. The files received in these responses are processed by the browser and put together into a web page that the user can interact with. This process of assembling the pieces into a web page is called **rendering**.

The following sections provide a high-level explanation of how a browser renders a web page. Keep in mind that this is a simplified description, and that different browsers will handle the process in different ways. However, this will still give you an idea of how things work.

## Handling HTML

To start with, the HTML file that contains the web page content and defines its structure is received by the browser, and parsed. The browser converts it into a tree-like structure called a **DOM tree** (**Document Object Model**). The DOM represents the HTML document structure in the computer's memory. Take this basic HTML snippet as an example:

```html
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

Each element, attribute, and piece of text in the HTML becomes a **DOM node** in the tree structure. The nodes are defined by their relationship to other DOM nodes. Some elements are parents of child nodes, and child nodes have siblings. The browser will parse this HTML and create the following DOM tree from it:

```plain
P
├─ "Let's use:"
├─ SPAN
|  └─ "HTML"
├─ SPAN
|  └─ "CSS"
└─ SPAN
    └─ "JavaScript"
```

In this DOM tree, the node corresponding to our `<p>` element is a parent. Its children include a text node and the three nodes corresponding to our `<span>` elements. The `SPAN` nodes are also parents, with text nodes as their children. When the browser renders this DOM tree, it will look like so:

{{EmbedLiveSample('Handling the HTML', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

Certain HTML elements, when parsed, will trigger more HTTP requests:

- {{htmlelement("link")}} elements referencing external [CSS](/en-US/docs/Learn_web_development/Core/Styling_basics) stylesheets.
- {{htmlelement("script")}} elements referencing external [JavaScript](/en-US/docs/Learn_web_development/Core/Scripting) files.
- Elements such as {{htmlelement("img")}}, {{htmlelement("video")}}, and {{htmlelement("audio")}}, which reference media files you want to embed in the web page.

## Parsing CSS and rendering the page

Next, let's look at how the CSS is handled.

1. The browser parses the CSS found on the page (either included in the HTML file, or fetched from external stylesheets), and sorts the different CSS styling rules into different "buckets" based on which HTML elements (represented in the DOM as items called **nodes**) they will be applied to. The browser then attaches styles to different elements as required (this intermediate step is called a render tree).
2. The render tree is laid out in the structure it should appear in after the rules have been applied. This includes any images and other media files that are to be embedded in the page.
3. The visual display of the page is shown on the screen (this stage is called painting).

The following diagram offers a visualization of the process we've talked about so far:

![Rendering process overview](rendering.svg)

Going back to our example, let's say the following CSS is found in the HTML file:

```html hidden
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

The only rule available in the CSS has a `span` selector, so the browser is able to sort the CSS very quickly! It applies that rule to each one of the three SPAN nodes in the DOM tree, giving them a black border and a lime green background, then paints the final visual representation to the screen.

The updated output is as follows:

{{EmbedLiveSample('Parsing the CSS, and rendering the page', '100%', 90)}}

## Handling JavaScript

Any JavaScript found on the page (either included in the HTML file, or fetched from external script files) is parsed, interpreted, compiled, and executed. This happens at some point before the final page rendering is completed — after all, some JavaScript may affect the rendering, for example by adding nodes to the DOM or modifying existing ones.

Returning to our example, let's say the following JavaScript is found in the HTML file:

```html hidden
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

```css hidden
span {
  border: 1px solid black;
  background-color: lime;
}
```

```js
const spans = document.querySelectorAll("span");
spans.forEach((span) => {
  const reversedText = span.textContent.split("").reverse().join("");
  span.textContent = reversedText;
});
```

You don't need to understand exactly how this JavaScript works, but at a high level, it finds every SPAN node in the DOM and reverses the order of the characters in their child text nodes.

The final output is as follows:

{{EmbedLiveSample('Handling the JavaScript', '100%', 90)}}

## What other rendering steps are there?

Several other things happen during page rendering, but we won't discuss them all here. One notable additional occurrence worth mentioning is that an accessibility tree is built, based on the DOM, for assistive technologies (for example screen readers) to hook into, which enables people who are not able to see the rendered content to interact with it.

You will learn more about this later on, in our [Accessibility](/en-US/docs/Learn_web_development/Core/Accessibility) module.

## The browser: a hostile _and_ an awesome programming environment

Front-end web development can sometimes be frustrating, and some people consider the browser to be a hostile programming environment. This is because, unlike other programming environments, it is much harder to make guarantees about the environment your code will run on. You cannot know ahead of time all the different combinations of operating system, browser, language, location, network connection, CPU, GPU, memory, battery life, etc., that your users will have, therefore you cannot guarantee a perfect user experience for all of them.

Modern browsers tend to implement web standards pretty consistently, but there is still a lot of uncertainty to navigate. As a web developer, you will need to embrace that uncertainty, programming defensively and being conservative with the features you use. This relies on adhering to the [best practices](/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#web_best_practices) outlined in the previous article.

On the upside, the web is also an awesome programming environment, for many reasons.

- For a start, it is designed with universal access in mind. The web's basic state is accessible and linkable. Some of these basics are harder to achieve in other environments.
- App delivery across the web is simple and powerful. You don't need to take your users through a complicated installation process: you just point them to a web address and off they go.
- App updates are usually straightforward. In many cases, visitors can see new versions of an application when they reload their browser tab. You don't need to worry about getting visitors to regularly download and install software updates.
- The web community is vibrant and helpful. As we discuss later on in our [Research and learning](/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning) article, there are lots of places you can go to ask for help, and great resources available to learn from.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
