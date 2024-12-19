---
title: The web standards model
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
page-type: tutorial-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

> [!NOTE]
> The content in this article is currently incomplete, sorry about that! We are working hard to improve the MDN Learn Web Development section, and we will have places marked as incomplete ("TODO") finished soon.

This article provides some useful background on the web and web standards — how they came about, what web standard technologies are, and how they work together.

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
          <li>How standards bodies operate — for example the <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a>, and <a href="https://www.khronos.org/">Khronos Group</a>; the process of standards creation.</li>
          <li>The lifecycle of web standards features.</li>
          <li>The key principles web standards are built on.</li>
          <li>The main web standards technologies, and how they work together.</li>
          <li>Web best practices.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Brief history of the web

We'll keep this very brief, as there are many (more) detailed accounts of the web's history out there, which we'll link to later on (also try searching for "history of the web" in your favorite search engine and see what you get, if you are interested in more detail.)

In the late 1960s, the US military developed a communication network called [ARPANET](/en-US/docs/Glossary/Arpanet). This can be considered a forerunner of the Web, as it worked on [packet switching](https://en.wikipedia.org/wiki/Packet_switching), and featured the first implementation of the [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) protocol suite. These two technologies form the basis of the infrastructure that the internet is built on.

In 1980, Tim Berners-Lee (often referred to as TimBL) wrote a notebook program called ENQUIRE, which featured the concept of links between different nodes. Sound familiar?

Fast forward to 1989, and TimBL wrote [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) and HyperText at CERN; these two publications together provided the background for how the web would work. They received a fair amount of interest, enough to convince TimBL's bosses to allow him to go ahead and create a global hypertext system.

By late 1990, TimBL had created all the things needed to run the first version of the web — [HTTP](/en-US/docs/Web/HTTP), [HTML](/en-US/docs/Web/HTML), the first web browser, which was called [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb), an HTTP server, and some web pages to look at.

In the next few years that followed, the web exploded, with multiple browsers being released, thousands of web servers being set up, and millions of web pages being created. OK, that's a very simple summary of what happened, but we did promise you a brief summary.

One last significant data point to share is that in 1994, TimBL founded the [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), an organization that brings together representatives from many different technology companies to work together on the creation of web technology specifications. After that other technologies followed such as [CSS](/en-US/docs/Web/CSS) and [JavaScript](/en-US/docs/Web/JavaScript), and the web started to look more like the web we know today.

## Web standards

**Web standards** are the technologies we use to build websites. These standards exist as long technical documents called specifications, which detail exactly how the technology should work. These documents are not very useful for learning how to use the technologies they describe (this is why we have sites like MDN Web Docs), but instead are intended to be used by software engineers to implement these technologies (usually in web browsers).

For example, the [HTML Living Standard](https://html.spec.whatwg.org/multipage/) describes exactly how HTML (all the HTML elements, and their associated APIs, and other surrounding technologies) should be implemented.

Web standards are created by standards bodies — institutions that invite groups of people from different technology companies to come together and agree on how the technologies should work in the best way to fulfill all of their use cases. The W3C is the best known web standards body, but there are others such as the [WHATWG](https://whatwg.org/) (who maintain the living standards for the HTML language), [ECMA](https://ecma-international.org/) (who publish the standard for ECMAScript, which JavaScript is based on), [Khronos](https://www.khronos.org/) (who publish technologies for 3D graphics, such as WebGL), and others.

### Web standards key principles

The basic principles of the web:

- Open to contribute and use.
- Not patent-encumbered or controlled by a single private entity.
- Accessible and interoperable.
- They don't break the web.

This basis means that the web is a unique and exciting industry to get involved in.

### "Open" standards

One of the key aspects of web standards, which TimBL and the W3C agreed on from the start, is that the web (and web technologies) should be free to both contribute and use, and not encumbered by patents/licensing. Therefore anyone can write the code to build a website for free, and anyone can contribute to the standards creation process, where the specs are written.

Because web technologies are created openly, in collaboration between many different companies, it means that no one company gets to control them, which is a really good thing. You wouldn't want a single company suddenly deciding to put the entire web behind a paywall, or releasing a new version of HTML that everyone has to buy to continue making websites, or worse still, just deciding they aren't interested any more and just turning it off.

This allows the web to remain a freely-available public resource.

### Don't break the web

Another phrase you'll hear around open web standards is "don't break the web" — the idea is that any new web technology that is introduced should be backwards compatible with what went before it (i.e. old websites will still continue to work), and forwards compatible (future technologies in turn will be compatible with what we currently have). As you go through the learning material presented here, you'll start to learn how this is made possible with some very clever design and implementation work.

## Standards bodies

[W3C](https://www.w3.org/), [WHATWG](https://whatwg.org/), [TC39](https://tc39.es/), and [Khronos Group](https://www.khronos.org/)

The full W3C standards process is deep and academic. For now, you should understand how different individuals and companies get involved in the standards process.

<!-- TODO? @chrisdavidmills -->

## The web standards lifecycle

The different maturity stages are designed to weed out issues (e.g. interoperability issues, patent issues).

<!-- TODO? @chrisdavidmills -->

## Overview of modern web technologies

There are a number of technologies to learn if you want to be a front-end web developer. In this section we will describe them briefly.

### HTML, CSS, and JavaScript

[HTML](/en-US/docs/Web/HTML), [CSS](/en-US/docs/Web/CSS), and [JavaScript](/en-US/docs/Web/JavaScript) are the main three technologies you'll use to build a website.

- HTML is for structure and semantics (meaning).
- CSS is for styling and layout.
- JavaScript is for controlling dynamic behavior.

#### HTML

HyperText Markup Language, or **HTML**, is a markup language consisting of different elements you can wrap (mark up) content in to give it meaning (semantics) and structure. Simple HTML looks like this:

```html
<h1>This is a top-level heading</h1>

<p>This is a paragraph of text.</p>

<img src="cat.jpg" alt="A picture of my cat" />
```

If we adopted a house-building analogy, HTML would be like the foundations and walls of the house, which give it structure and hold it together.

#### CSS

Cascading Style Sheets (**CSS**) is a rule-based language used to apply styles to your HTML — for example, setting text and background colors, adding borders, animating things, or laying out a page in a certain way. As a simple example, the following code would turn our HTML paragraph red:

```css
p {
  color: red;
}
```

In the house analogy, CSS is like the paint, wallpaper, carpets and paintings you'd use to make the house look nice.

#### JavaScript

**JavaScript** is the programming language we use to add interactivity to websites, from dynamic style switching, to fetching updates from the server, right through to complex 3D graphics. The following simple JavaScript will store a reference to our paragraph in memory and change the text inside it:

```js
let pElem = document.querySelector("p");
pElem.textContent = "We changed the text!";
```

In the house analogy, JavaScript is like the cooker, TV, Microwave, or hairdryer — the things that give your house useful functionality.

#### Separating the layers

Separating the technology layers is a good idea, for:

- Code management and comprehension.
- Teamwork/separation of roles.
- Performance.

In reality, the separation is not always clear. It is an ideal to aim for where possible rather than an absolute.

- A prime example is the case of using JavaScript to dynamically update CSS styling on-the-fly in response to app state changes, user choices, etc.
- Often this is done by modifying the Element.style.x properties, which results in inline CSS being injected into HTML. A better strategy is to add/change classes on elements to avoid inline CSS.
- Much more severe is the case of JavaScript frameworks that use various HTML-in-JavaScript or CSS-in-JavaScript custom syntax, which results in a lot of mixing of syntax types.

### Tools

Once you've learned the "raw" technologies that can be used to build web pages (such as HTML, CSS, and JavaScript), you'll soon start to come across various tools that can be used to make your work easier or more efficient. Examples include:

- The [developer tools](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) inside modern browsers that can be used to debug your code.
- [Testing tools](/en-US/docs/Learn_web_development/Extensions/Testing) that can be used to run tests to show whether your code is behaving as you intended it to.
- Libraries and frameworks built on top of JavaScript that allow you to build certain types of website much more quickly and effectively.
- So-called "Linters", which take a set of rules, look at your code, and highlight places where you haven't followed the rules properly.
- Minifiers, which remove all the whitespace from your code files to make it so that they are smaller and therefore download from the server more quickly.

### Server-side languages and frameworks

HTML, CSS, and JavaScript are front-end (or client-side) languages, which means they are run by the browser to produce a website front-end that your users can use.

There are another class of languages called back-end (or server-side) languages, meaning that they are run on the server before the result is then sent to the browser to be displayed. A typical use for a server-side language is to get some data out of a database and generate some HTML to contain the data, before then sending the HTML over to the browser to display it to the user.

Example server-side frameworks include ASP.NET (in C#), Django (in Python), Laravel (in PHP), and Next.js (in JavaScript).

## Web best practices

We have briefly talked about the technologies that you'll use to build websites. Now let's discuss the best practices you should employ to make sure you are using those technologies in the best way that you can.

When doing web development, the main cause of uncertainty comes from the fact that you don't know what combination of technology each user will use to view your website:

- User 1 might be looking at it on an iPhone, with a small, narrow screen.
- User 2 might be looking at it on a Windows laptop with a widescreen monitor attached to it.
- User 3 might be blind, and using a screen reader to read the web page out to them.
- User 4 might be using a really old desktop machine that can't run modern browsers.

Because you don't know exactly what your users will use, you need to design defensively — make your website as flexible as possible, so that all of the above users can make use of it, even if they might not all get the same experience. In short, we are trying to make the web work for all, as much as possible.

You'll come across the below concepts at some point in your studies.

- **Progressive enhancement** is the practice of creating a minimal experience that provides the essential functionality to all users, and layering on a better experience and other enhancments in browsers that can support them. Progressive enhancement is often seen as unimportant, because browsers tend to support new features more consistently these days, and people tend to have faster internet connections. However, you should think about examples relevant to the modern day — cutting down on decoration to make a mobile experience smoother and save on data, or providing a simpler, lower-bandwidth experience for users in developing countries who might still pay for home internet by the megabyte.
- **Cross-browser compatibility** is the practice of trying to make sure your webpage works across as many devices as possible. This includes using technologies that all the browsers support, delivering better experiences to browsers that can handle them (progressive enhancement), and/or writing code so that it falls back to a simpler but still usable experience in older browsers (graceful degradation). It also involves a lot of testing to see if anything fails in certain browsers, and then more work to fix those failures.
- **Responsive web design** is the practice of making your functionality and layouts flexible so they can automatically adapt to different browsers. An obvious example is a website that is laid out one way in a widescreen browser on the desktop, but displays as a more compact, single-column layout on mobile phone browsers. Try adjusting the width of your browser window now, and see what happens.
- **Performance** means getting websites to load as quickly as possible, but also making them intuitive and easy to use so that users don't get frustrated and go somewhere else.
- **Accessibility** means making your websites usable by as many different kinds of people as possible (related concepts are diversity and inclusion, and inclusive design). This includes people with visual impairments, hearing impairments, cognitive disabilities, or physical disabilities. It also goes beyond people with disabilities — how about young or old people, people from different cultures, people using mobile devices, or people with unreliable or slow network connections?
- **Internationalization** means making websites usable by people from different cultures, who speak different languages to your own. There are technical considerations here (such as altering your layout so that it still works OK for right-to-left, or even vertical languages), and human ones (such as using simple, non-slang language so that people who have your language as their second or third language are more likely to understand your text).
- **Privacy & Security**. These two concepts are related but different. Privacy refers to allowing people to go about their business privately and not spying on them or collecting more of their data than you absolutely need to. Security refers to constructing your website in a secure way so that malicious users cannot steal information contained on it from you or your users.

## See also

- [History of the World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
- [How does the internet work?](/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
