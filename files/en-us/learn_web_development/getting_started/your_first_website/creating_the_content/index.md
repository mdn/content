---
title: "HTML: Creating the content"
short-title: Creating the content
slug: Learn_web_development/Getting_started/Your_first_website/Creating_the_content
page-type: tutorial-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

HTML (**H**yper**T**ext **M**arkup **L**anguage) is the code that is used to structure a web page and its content. This article provides a basic understanding of HTML and its functionality, and shows you how to create the basic content for your first website.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic familiarity with your computer operating system, the basic software you will use to build a website, and file systems.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>The purpose and function of HTML.</li>
          <li>The basic parts of HTML syntax — opening and closing tags, elements, attributes, head, body.</li>
          <li>Common HTML elements including paragraphs, headings, images, lists, and links.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## So what is HTML?

HTML is a _markup language_ consisting of a series of **{{Glossary("element", "elements")}}** used to wrap (or enclose) text content to define its structure and cause it to behave in a certain way.

Let's look at an example — the following content will all be shown on the same line when displayed on a web page, as it is not structured in any way:

```plain
Instructions for life:
Eat
Sleep
Repeat
```

If we wrap this content with the following HTML elements, we can turn that single line into a paragraph ({{htmlelement("p")}}) and three bullet points ({{htmlelement("li")}}):

```html live-sample___basic-html
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

This HTML will render as follows in a web browser:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

As well as structuring text, HTML has many other uses — making text or images link to other web pages, embedding images or videos, creating data tables, and so on.

## Creating your first HTML document

Let's see how individual elements are combined to form an HTML page. In this section, you'll create a basic HTML file and take a look at what it's made up of.

1. Inside your `web-projects` folder, create another new folder called `first-website`.
2. Inside `first-website`, create a new file called `index.html`, and insert the following code into the file exactly as shown:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="" alt="My test image" />
  </body>
</html>
```

Here, we have the following:

- `<!doctype html>`: The [doctype](/en-US/docs/Glossary/Doctype) is a required preamble. In the mists of time, when HTML was young (around 1991/92), doctypes were meant to act as links to a set of rules that the HTML page had to follow to be considered good HTML, which could mean automatic error checking and other useful things. However, these days, they don't do much and are basically just needed to make sure your document behaves correctly. That's all you need to know for now.
- `<html></html>`: The {{htmlelement("html")}} element wraps all the content on the entire page and is sometimes known as the **root element**. It also includes the `lang` [attribute](/en-US/docs/Glossary/Attribute), which sets the primary language of the document.
- `<head></head>`: The {{htmlelement("head")}} element acts as a container for all the stuff you want to include on the HTML page that _isn't_ the content you are showing to your page's viewers. This includes things like {{Glossary("keyword", "keywords")}} and a page description that you want to appear in search results, {{glossary("CSS")}} to style the content, character set declarations, and more.
- `<meta charset="utf-8">`: This element sets the character set your document should use to [UTF-8](/en-US/docs/Glossary/UTF-8), which includes most characters from the vast majority of written languages. Essentially, it can now handle any textual content you might put on it. There is no reason not to set this, and it can help avoid some problems later on.
- `<meta name="viewport" content="width=device-width">`: This [viewport element](/en-US/docs/Web/API/CSSOM_view_API/Viewport_concepts#mobile_viewports) ensures the page renders at the width of the browser viewport, preventing mobile browsers from rendering pages wider than the viewport and then shrinking them down.
- `<title></title>`: The {{htmlelement("title")}} element sets the title of your page, which is the title that appears in the browser tab the page is loaded in. It is also used to describe the page when you bookmark/favorite it.
- `<body></body>`: The {{htmlelement("body")}} element contains _all_ the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks, or whatever else. At the moment it only contains a single `<img>` element, but we'll add more content later on.

> [!NOTE]
> Most HTML elements consist of an **opening tag** (for example, `<body>`), followed by the element's content, followed by a **closing tag** (for example, `</body>`). Some HTML elements also have **attributes**, which contain extra settings or information about the element — see for example `charset`, `name`, and `src` in the our code sample.

## Embedding images

Let's turn our attention to the {{htmlelement("img")}} element:

```html
<img src="" alt="My test image" />
```

This embeds an image into our page in the position it appears. It does this via the `src` (source) attribute, which contains the path to the image file we want to embed.

We have also included an `alt` (alternative) attribute. In the [`alt` attribute](/en-US/docs/Web/HTML/Reference/Elements/img#authoring_meaningful_alternate_descriptions), you specify descriptive text for users who cannot see the image, possibly because of the following reasons:

1. They are visually impaired. Users with significant visual impairments often use tools called screen readers to read out the alt text to them.
2. Something has gone wrong, causing the image not to display. If the `src` attribute does not contain a valid path to an image, the alt text will be displayed instead:

   ![The words: my test image](alt-text-example.png)

The alt text you write should provide the reader with enough information to have a good idea of what the image conveys. In this example, our current text of "My test image" is not good because it doesn't convey descriptive information about the image. A much better alternative for our Firefox logo would be "The Firefox logo: a flaming fox surrounding the Earth."

> [!NOTE]
> Elements such as `<img>` have no content or closing tag, and are therefore called **empty** (or **{{glossary("void element", "void")}}**) elements. They are sometimes written with a **trailing slash** at the end of their single tag (`<img />`), but this is optional.

Let's get your image displaying now.

1. Inside the `first-website` folder, create a new folder called `images`, and put the image you chose in the previous example inside this folder.
2. Inside the `<img>` tag's `src` attribute value, enter the path to your image. It is inside a folder called `images`, which is inside the same directory as your `index.html` file, therefore the path will be `images/` plus the name of your image. For example, if your image was called `firefox-icon.png`, your `src` attribute would look like this: `src="images/firefox-icon.png"`.
3. Replace the `alt` attribute value — `My test image` — with some text that better describes your image.
4. Open your `index.html` file inside a web browser. You should see your image displayed. If not, check your `<img>` element against our code; make sure it is not missing any of the syntax, such as the quote marks. Make sure the image filename is correct.

If the image is really large and therefore doesn't fit on the screen, don't worry about it. We'll fix this issue in the next article.

> [!NOTE]
> Find out more about using an `alt` attribute for images in various situations in our [accessible multimedia tutorial](/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia) and [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/).

## Marking up text

This section will cover some essential HTML elements you'll use for marking up text.

> [!NOTE]
> Scrimba's [The basics of semantic HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn) <sup>[_MDN learning partner_](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> is an interactive lesson providing a useful description of HTML, with particular emphasis on why the _semantic_ aspect of it is important.

### Headings

Heading elements allow you to specify that certain parts of your content are headings — or subheadings. In the same way that a book has the main title, chapter titles, and subtitles, an HTML document can too. HTML contains 6 heading levels, {{htmlelement("Heading_Elements", "&lt;h1&gt;–&lt;h6&gt;")}}, although you'll commonly only use 3 to 4 at most:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> Anything in HTML between `<!--` and `-->` is an **HTML comment**. The browser ignores comments as it renders the code. In other words, they are not visible on the page — just in the code. HTML comments are a way for you to add notes about your code or logic, which might be useful to others working on the same code, or you, if you came back to it after 6 months and can't remember what you did.

Add your page title to the HTML page just above your {{htmlelement("img")}} element, wrapped inside `<h1> ... </h1>` tags. Save the file and view it in a browser to see the effect.

### Paragraphs

Paragraph {{htmlelement("p")}} elements are for containing paragraphs of text; you'll use these frequently when marking up regular text content:

```html
<p>This is a single paragraph</p>
```

Add your sample text from the previous article into one or a few paragraphs, placed directly below your {{htmlelement("img")}} element. Save it and look at your page in a browser.

### Lists

A lot of the web's content is lists and HTML has special elements for these. Marking up lists always consists of at least 2 elements. The most common list types are ordered and unordered lists:

1. **Unordered lists** are for lists where the order of the items doesn't matter, such as a shopping list. These are wrapped in a {{htmlelement("ul")}} element.
2. **Ordered lists** are for lists where the order of the items does matter, such as a list of cooking instructions in a recipe. These are wrapped in an {{htmlelement("ol")}} element.

Each item inside the lists is put inside an {{htmlelement("li")}} (list item) element.

For example, if we wanted to turn part of the following paragraph fragment into a list:

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

We could modify the markup to this:

```html
<p>At Mozilla, we're a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together…</p>
```

Try adding an ordered or unordered list to your example page, and view the result in a browser.

## Creating links

Links are very important — they are what makes the web a web! To add a link, we need to use an {{htmlelement("a")}} element, "a" being short for "anchor". To make text within your paragraph into a link, follow these steps:

1. Choose some text. We chose the text "Mozilla Manifesto".
2. Wrap the text in an {{htmlelement("a")}} element, as shown below:

   ```html
   <a>Mozilla Manifesto</a>
   ```

3. Give the {{htmlelement("a")}} element an `href` attribute, as shown below:

   ```html
   <a href="">Mozilla Manifesto</a>
   ```

4. Fill in the value of this attribute with the web address that you want the link to point to:

   ```html
   <a href="https://www.mozilla.org/en-US/about/manifesto/">
     Mozilla Manifesto
   </a>
   ```

You might get unexpected results if you omit the `https://` or `http://` part, called the _protocol_, at the beginning of the web address. After making a link, click it to make sure it is sending you where you wanted it to.

> [!NOTE]
> `href` might appear like a rather obscure choice for an attribute name at first. It stands for _**h**ypertext **ref**erence_.

Add a link to your page now, if you haven't already done so.

## Conclusion

If you have followed all the instructions in this article, you should end up with a page that looks like the one below (you can also [view it here](https://mdn.github.io/beginner-html-site/)):

![A web page screenshot showing a Firefox logo, a heading saying Mozilla is cool, and two paragraphs of filler text](finished-test-page-small.png)

If you get stuck, you can always compare your work with our [finished example code](https://github.com/mdn/beginner-html-site/blob/main/index.html) on GitHub.

Here, we have only really scratched the surface of HTML. You'll learn a lot more in our [Structuring content with HTML](/en-US/docs/Learn_web_development/Core/Structuring_content) Core module later on in the course.

## See also

- [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN learning partner_](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimba's](https://scrimba.com?via=mdn) _Learn HTML and CSS_ course teaches you HTML and CSS through building and deploying five awesome projects, with fun interactive lessons and challenges taught by knowledgeable teachers.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like", "Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
