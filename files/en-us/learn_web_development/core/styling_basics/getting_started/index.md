---
title: Getting started with CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

In this article, we will take a simple HTML document and apply CSS to it, learning some practical details of the language along the way. We will also review the CSS syntax features you've not looked at yet.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <a href="/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Basic software installed</a>, basic knowledge of
        <a href="/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">working with files</a>, and HTML basics (study
        <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">Introduction to HTML</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>Applying CSS to an HTML document.</li>
          <li>Practical experience of writing basic CSS.</li>
          <li>Working knowledge of fundamental selector types and combinators.</li>
          <li>The concept of state as it applies to CSS.</li>
          <li>Familiarity with other CSS syntax features such as at-rules, functions, shorthand properties, and whitespace.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Starting with some HTML

Our starting point is an HTML document. You can copy the code from below if you want to work on your own computer. Save the code below as `index.html` in a folder on your machine.

```html live-sample___unstyled
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Getting started with CSS</title>
  </head>

  <body>
    <h1>I am a level one heading</h1>

    <p>
      This is a paragraph of text. In the text is a
      <span>span element</span> and also a
      <a href="https://example.com">link</a>.
    </p>

    <p>
      This is the second paragraph. It contains an <em>emphasized</em> element.
    </p>

    <ul>
      <li>Item <span>one</span></li>
      <li>Item two</li>
      <li>Item <em>three</em></li>
    </ul>
  </body>
</html>
```

This renders like so:

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> If you are reading this on a device or an environment where you can't easily create files, then don't worry — click the "Play" button in the live sample above to open it in the MDN Playground. There, you can edit the CSS & HTML code as instructed further down and see the combined results live.

## Adding CSS to our document

The very first thing we need to do is to tell the HTML document that we have some CSS rules we want it to use. There are three different ways to apply CSS to an HTML document that you'll commonly come across — external stylesheets, internal stylesheets, and inline styles. Let's look at these now.

### External stylesheets

An external stylesheet contains CSS in a separate file with a `.css` extension. This is the most common and useful method of bringing CSS to a document. You can link a single CSS file to multiple web pages, styling all of them with the same CSS stylesheet.

Create a file in the same folder as your HTML document and save it as `styles.css`.

To link `styles.css` to `index.html`, add the following line somewhere inside the {{htmlelement("head")}} of the HTML document:

```html
<link rel="stylesheet" href="styles.css" />
```

This {{htmlelement("link")}} element tells the browser that we have a stylesheet, using the `rel` attribute, and the location of that stylesheet as the value of the `href` attribute. You can test that the CSS works by adding a rule to `styles.css`. Using your code editor, add the following to your CSS file (or add it to the "CSS" box in the MDN Playground):

```css
h1 {
  color: red;
}
```

Save your HTML and CSS files and reload the page in a web browser. The level one heading at the top of the document should now be red. If that happens, congratulations — you have successfully applied some CSS to an HTML document. If that doesn't happen, carefully check that you've typed everything correctly.

#### Locating stylesheets in different places

In the example above, the CSS file is in the same folder as the HTML document, but you could place it somewhere else and adjust the path (in the same way as [HTML images](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Here are three examples:

```html
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Internal stylesheets

Internal stylesheets are contained within {{htmlelement("style")}} elements, which go inside the HTML {{htmlelement("head")}}. Let's create one now.

In your HTML document, add the following snippet somewhere between the `<head>` and `</head>` tags:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Save and refresh, and you should see all your paragraphs turn purple.

In some circumstances, internal stylesheets can be useful. For example, perhaps you're working with a content management system where you are blocked from modifying external CSS files.

However, for sites with more than one page, internal stylesheets are less efficient than external stylesheets. To apply uniform CSS styling to multiple pages using internal stylesheets, you must repeat the internal stylesheet across every web page. The efficiency penalty carries over to site maintenance too. With CSS in internal stylesheets, there is the risk that even one simple styling change may require edits to multiple web pages.

Before you move on, remove the `<style>` element and its contents from your example HTML.

### Inline styles

Inline styles are CSS declarations that affect a single HTML element, contained within a `style` attribute. Let's try implementing one now.

Add a `style` attribute to the {{htmlelement("span")}} element in your HTML, so that it looks like the following:

```html
<span style="color: purple; font-weight: bold">span element</span>
```

Save and refresh, and you should see just the text inside the `<span>` turn purple and bold. Try adding some more declarations inside your `style` attribute (separated by semi-colons), or some additional `style` attributes to other elements.

Once you are done experimenting, remove all your `style` attributes.

**Avoid using CSS in this way if possible.** It is a bad practice. First, it is the least efficient implementation of CSS for maintenance. One styling change might require multiple edits within a single web page. Second, inline CSS also mixes (CSS) presentational code with HTML and content, making everything more difficult to read and understand. Separating code and content makes maintenance easier for all who work on the website.

You might have to resort to using inline styles if your working environment is very restrictive. For example, perhaps your CMS only allows you to edit the HTML body. You may also see a lot of inline styles in HTML email to achieve compatibility with as many email clients as possible. It is also fairly common to set inline styles when dynamically applying style using JavaScript.

## Using common selectors

In this section we will take a brief tour through some of the more common types of selector you will encounter.

### Selecting HTML elements

By making our heading red, we have already demonstrated that we can target and style an HTML element. We do this by targeting an **element selector** (also known as a **type selector**) — this is a selector that directly matches an HTML element name. To target all paragraphs in the document, you would use the selector `p`. To turn all paragraphs green, you would use:

```css
p {
  color: green;
}
```

You can target multiple selectors at the same time by separating the selectors with a comma. If you wanted all paragraphs and all list items to be green, your rule would look like this:

```css
p,
li {
  color: green;
}
```

Try this out in the example below (click "Play") or in your local copy:

```html hidden live-sample___started-types
<h1>I am a level one heading</h1>

<p>
  This is a paragraph of text. In the text is a <span>span element</span> and
  also a <a href="http://example.com">link</a>.
</p>

<p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item <em>three</em></li>
</ul>
```

```css live-sample___started-types
h1 {
  color: red;
}

p,
li {
}
```

{{EmbedLiveSample("started-types", "", "240px")}}

### Adding a class

So far, we have styled elements based on their HTML element names. This works as long as you want all of the elements of that type in your document to look the same. To select a subset of the elements without changing the others, you can add a `class` to your HTML element and target that class in your CSS.

1. In your HTML document, add a [class attribute](/en-US/docs/Web/HTML/Global_attributes/class) to the second list item. Your list will now look like this:

   ```html
   <ul>
     <li>Item one</li>
     <li class="special">Item two</li>
     <li>Item <em>three</em></li>
   </ul>
   ```

2. In your CSS, you can target the class of `special` by creating a selector that starts with a period. Add the following to your CSS file:

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

3. Save and refresh to see what the result is.

You can now apply the class of `special` to others elements on your page that you want to have the same look as this list item. Add a class of `special` to the `<span>` inside the paragraph, then reload your page: It should also now be orange and bold.

### Styling things based on their location in a document

There are times when you will want something to look different based on where it is in the document. There are a number of selectors that can help you here, but for now we will look at just a couple. In our document, there are two `<em>` elements — one inside a paragraph and the other inside a list item. To select only an `<em>` that is nested inside an `<li>` element, you can use a selector called the **descendant combinator**, which takes the form of a space between two other selectors.

Add the following rule to your stylesheet:

```css
li em {
  color: rebeccapurple;
}
```

This selector will select any `<em>` element that is a descendant of an `<li>`. So in your example document, you should find that the `<em>` in the third list item is now purple, but the one inside the paragraph is unchanged.

Something else you might like to try is styling a paragraph when it comes directly after a heading at the same hierarchy level in the HTML. To do so, place a `+` (an **next-sibling combinator**) between the selectors.

Try adding this rule to your stylesheet as well:

```css
h1 + p {
  font-size: 200%;
}
```

The live example below includes the two rules above. Try adding a rule to make a span red if it is inside a paragraph. You will know if you have it right because the span in the first paragraph will be red, but the one in the first list item will not change color.

```html hidden live-sample___started-combinators
<h1>I am a level one heading</h1>

<p>
  This is a paragraph of text. In the text is a <span>span element</span> and
  also a <a href="http://example.com">link</a>.
</p>

<p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

<ul>
  <li>Item <span>one</span></li>
  <li>Item two</li>
  <li>Item <em>three</em></li>
</ul>
```

```css live-sample___started-combinators
li em {
  color: rebeccapurple;
}

h1 + p {
  font-size: 200%;
}
```

{{EmbedLiveSample("started-combinators", "", "340px")}}

> [!NOTE]
> As you can see, CSS gives us several ways to target elements, and we've only scratched the surface so far! We will be taking a proper look at all of these selectors and many more later on in the course.

### Styling things based on state

The final type of styling we shall take a look at in this tutorial is the ability to style things based on their state. A straightforward example of this is when styling links. When we style a link, we need to target the [`<a>`](/en-US/docs/Web/HTML/Element/a) (anchor) element. This has different states depending on whether it is unvisited, visited, being hovered over, focused via the keyboard, or in the process of being clicked (activated). You can use CSS to target these different states — the CSS below styles unvisited links pink and visited links green.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

You can change the way the link looks when the user hovers over it, for example by removing the underline, which is achieved by the next rule:

```css
a:hover {
  text-decoration: none;
}
```

In the example below, you can play with different values for the various states of a link. We have added the rules above to it, and now realize that the pink color is quite light and hard to read — why not change that to a better color? Can you make the links bold?

```html hidden live-sample___started-states
<h1>I am a level one heading</h1>

<p>
  This is a paragraph of text. In the text is a <span>span element</span> and
  also a <a href="http://example.com">link</a>.
</p>

<p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item <em>three</em></li>
</ul>
```

```css live-sample___started-states
a:link {
  color: pink;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}
```

{{EmbedLiveSample("started-states", "", "240px")}}

We have removed the underline on our link on hover. You could remove the underline from all states of a link. It is worth remembering however that in a real site, you want to ensure that visitors know that a link is a link. Leaving the underline in place can be an important clue for people to realize that some text inside a paragraph can be clicked on — this is the behavior they are used to. As with everything in CSS, there is the potential to make the document less accessible with your changes — we will aim to highlight potential pitfalls in appropriate places.

> [!NOTE]
> You will often see mention of [accessibility](/en-US/docs/Learn_web_development/Core/Accessibility) in these lessons and across MDN. When we talk about accessibility we are referring to the requirement for our webpages to be understandable and usable by everyone, whether they are using a computer with a mouse or trackpad, a phone with a touchscreen, navigating only using the keyboard, or via a screen reader, which reads out the content of the document.

### Combining selectors and combinators

It is worth noting that you can combine multiple selectors and combinators together. For example:

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}
```

You can combine multiple types together, too. Try adding the following into your code:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

This will style any element with a class of `special`, which is inside a `<p>`, which comes just after an `<h1>`. Phew! This should target the `<span class="special">span element</span>` element in your code.

Don't worry if this seems complicated at the moment — you'll soon start to get the hang of it as you write more CSS.

## Other CSS syntax features

Now we've played with a few CSS features, we'll give you a high-level tour of some of the other CSS syntax features you'll encounter during the course. If you want to look up more details on any of these, you can try typing the feature name into the search field at the top of this page, or browse the MDN [CSS reference](/en-US/docs/Web/CSS/Reference).

To experiment with the code snippets in each case, you could add the provided HTML and CSS to the local example or MDN Playground instance you worked on above.

### Functions

While most values are relatively simple keywords or numeric values, there are some values that take the form of a function.

#### The calc() function

An example would be the `calc()` function, which can do simple math within CSS:

```html
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
```

```css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

This renders as:

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

A function consists of the function name, and parentheses to enclose the values for the function. In the case of the `calc()` example above, the values define the width of this box to be 90% of the containing block width, minus 30 pixels.

#### Transform functions

Another example would be the various values for the {{cssxref("transform")}} property, such as `rotate()`.

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
```

The output from the above code looks like this:

{{EmbedLiveSample('Transform_functions', '100%', 200)}}

Look up different values of properties listed below. Try writing CSS rules that apply styling to different HTML elements using the following functions:

- {{cssxref("transform")}}
- {{cssxref("background-image")}}, in particular gradient values
- {{cssxref("color")}}, in particular rgb and hsl values

### @rules

CSS [@rules](/en-US/docs/Web/CSS/CSS_syntax/At-rule) (pronounced "at-rules") provide instructions for how CSS should behave. One common @rule that you are likely to encounter is `@media`, which is used to create [media queries](/en-US/docs/Web/CSS/CSS_media_queries). Media queries use conditional logic for applying CSS styling.

In the example below, the stylesheet defines a default pink background for the `<body>` element. However, a media query follows that sets a blue background on the `<body>` element if the browser viewport is wider than 30em.

```css
body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

You will encounter other `@rules` throughout the course.

### Shorthand properties

Some properties like {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, and {{cssxref("margin")}} are called **shorthand properties**. This is because shorthand properties set several values in a single line.

For example, this one line of code:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

is equivalent to these four lines of code:

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

This one line:

```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

is equivalent to these five lines:

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

Later in the course, you will encounter many other examples of shorthand properties. For now, try using the declarations above (or others you might know about) in your own code to become more familiar with how they work.

### CSS Comments

As with any coding work, it is best practice to write comments in your CSS. This helps you to remember how the code works as you come back later to make fixes or enhancement. It also helps others understand the code.

CSS comments begin with `/*` and end with `*/`. In the example below, comments mark the start of distinct sections of code. This helps to navigate the codebase as it gets larger. With this kind of commenting in place, searching for comments in your code editor becomes a way to efficiently find a section of code.

```css
/* Handle basic element styling */
/* ---------------------------- */
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* Increase the global font size on larger screens or windows
     for better readability */
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

/* Handle specific elements nested in the DOM */
div p,
#id:first-line {
  background-color: red;
  border-radius: 3px;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

"Commenting out" code is also useful for temporarily disabling sections of code for testing. In the example below, the rules for `.special` are disabled by "commenting out" the code.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Try adding comments in your CSS.

### White space in CSS

White space means actual spaces, tabs and new lines. Just as browsers ignore extra white space in HTML, browsers ignore extra white space inside CSS. The benefit of white space is that it makes it easier for you to read the code.

In the example below, each declaration (and rule start/end) has its own line. This is arguably a good way to write CSS. It makes it easier to maintain and understand CSS.

```css
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}
```

The next example shows the same CSS in a more compressed format, with all extra white space removed. Although the two examples work the same, the one below is more difficult to read.

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Bear in mind that removing some white space can cause errors. Property names never contain whitespace, while property values that expect white space between multiple values will be invalid if that space is removed. For example, these declarations are valid CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

But these declarations are invalid:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Do you see the spacing errors? First, `0auto` is not recognized as a valid value for the `margin` property. The entry `0auto` is meant to be two separate values: `0` and `auto`. Second, the browser does not recognize `padding-` as a valid property. The correct property name (`padding-left`) has a space inserted in it.

You should always make sure to separate distinct values from one another by at least one space. Keep property names and property values together as single unbroken strings.

To find out how spacing can break CSS, try playing with spacing inside your test CSS.

## Summary

In this article, we have taken a look at a number of ways in which you can style a document using CSS. We will be developing this knowledge as we move through the rest of the lessons. However, you now already know enough to style text and apply CSS based on different ways of targeting elements in the document.

Next up, we'll give you a challenge to test your newfound knowledge.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
