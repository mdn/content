---
title: The web and web standards
slug: Learn/Getting_started_with_the_web/The_web_and_web_standards
page-type: guide
---

{{learnsidebar}}

This article provides some useful background on the Web — how it came about, what web standard technologies are, how they work together, why "web developer" is a great career to choose, and what kinds of best practices you'll learn about through the course.

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

Web standards are created by standards bodies — institutions that invite groups of people from different technology companies to come together and agree on how the technologies should work in the best way to fulfill all of their use cases. The W3C is the best known web standards body, but there are others such as the [WHATWG](https://whatwg.org/) (who maintain the living standards for the HTML language), [ECMA](https://www.ecma-international.org/) (who publish the standard for ECMAScript, which JavaScript is based on), [Khronos](https://www.khronos.org/) (who publish technologies for 3D graphics, such as WebGL), and others.

### "Open" standards

One of the key aspects of web standards, which TimBL and the W3C agreed on from the start, is that the web (and web technologies) should be free to both contribute and use, and not encumbered by patents/licensing. Therefore anyone can write the code to build a website for free, and anyone can contribute to the standards creation process, where the specs are written.

Because web technologies are created openly, in collaboration between many different companies, it means that no one company gets to control them, which is a really good thing. You wouldn't want a single company suddenly deciding to put the entire web behind a paywall, or releasing a new version of HTML that everyone has to buy to continue making websites, or worse still, just deciding they aren't interested any more and just turning it off.

This allows the web to remain a freely-available public resource.

### Don't break the web

Another phrase you'll hear around open web standards is "don't break the web" — the idea is that any new web technology that is introduced should be backwards compatible with what went before it (i.e. old websites will still continue to work), and forwards compatible (future technologies in turn will be compatible with what we currently have). As you go through the learning material presented here, you'll start to learn how this is made possible with some very clever design and implementation work.

## Being a web developer is good

The web industry is a very attractive market to enter if you are looking for a job. Recent published figures say that there are currently around 19 million web developers in the world, and that figure is set more than double in the next decade. And at the same time, there is a skill shortage in the industry — so what better time to learn web development?

It isn't all fun and games however — building websites is a more complicated proposition than it used to be, and you'll have to put some time in to studying all the different technologies you need to use, all the techniques and best practices you need to know, and all the typical patterns you'll be called upon to implement. It'll take you a few months to really start to get into it, and then you'll need to keep learning so that your knowledge stays up-to-date with all the new tools and features that appear on the web platform, and keep practicing and refining your craft.

_The only constant is change._

Does this sound hard? Don't worry — we aim to give you everything you need to know to get started, and things will get easier. Once you embrace the constant change and uncertainty of the web, you'll start to enjoy yourself. As a part of the web community, you'll have an entire web of contacts and useful material to help you, and you'll start to enjoy the creative possibilities it brings.

You're a digital creative now. Enjoy the experience, and the potential for earning a living.

## Overview of modern web technologies

There are a number of technologies to learn if you want to be a front-end web developer. In this section we will describe them briefly. For a more detailed explanation of how some of them work together, read our article [How the web works](/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works).

### Browsers

You are probably reading these words inside a web browser in this very moment (unless you've printed it out, or are using assistive technology, such as a screen reader to read it out to you). Web browsers are the software programs people use to consume the web, and include [Firefox](https://www.mozilla.org/en-US/firefox/), [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Safari](https://www.apple.com/safari/), and [Edge](https://www.microsoft.com/en-us/edge).

### HTTP

Hypertext Transfer Protocol, or [HTTP](/en-US/docs/Web/HTTP/Basics_of_HTTP), is a messaging protocol that allows web browsers to communicate with web servers (where websites are stored). A typical conversation goes something like

```plain
"Hello web server. Can you give me the files I need to render bbc.co.uk"?

"Sure thing web browser — here you go"

[Downloads files and renders web page]
```

The actual syntax for HTTP messages (called requests and responses) is not that human-readable, but this gives you the basic idea.

### HTML, CSS, and JavaScript

[HTML](/en-US/docs/Web/HTML), [CSS](/en-US/docs/Web/CSS), and [JavaScript](/en-US/docs/Web/JavaScript) are the main three technologies you'll use to build a website:

- HyperText Markup Language, or **HTML**, is a markup language consisting of different elements you can wrap (mark up) content in to give it meaning (semantics) and structure. Simple HTML looks like this:

  ```html
  <h1>This is a top-level heading</h1>

  <p>This is a paragraph of text.</p>

  <img src="cat.jpg" alt="A picture of my cat" />
  ```

  If we adopted a house-building analogy, HTML would be like the foundations and walls of the house, which give it structure and hold it together.

- Cascading Style Sheets (**CSS**) is a rule-based language used to apply styles to your HTML — for example, setting text and background colors, adding borders, animating things, or laying out a page in a certain way. As a simple example, the following code would turn our HTML paragraph red:

  ```css
  p {
    color: red;
  }
  ```

  In the house analogy, CSS is like the paint, wallpaper, carpets and paintings you'd use to make the house look nice.

- **JavaScript** is the programming language we use to add interactivity to websites, from dynamic style switching, to fetching updates from the server, right through to complex 3D graphics. The following simple JavaScript will store a reference to our paragraph in memory and change the text inside it:

  ```js
  let pElem = document.querySelector("p");
  pElem.textContent = "We changed the text!";
  ```

  In the house analogy, JavaScript is like the cooker, TV, Microwave, or hairdryer — the things that give your house useful functionality

### Tools

Once you've learned the "raw" technologies that can be used to build web pages (such as HTML, CSS, and JavaScript), you'll soon start to come across various tools that can be used to make your work easier or more efficient. Examples include:

- The [developer tools](/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) inside modern browsers that can be used to debug your code.
- [Testing tools](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing) that can be used to run tests to show whether your code is behaving as you intended it to.
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

- **Cross-browser compatibility** is the practice of trying to make sure your webpage works across as many devices as possible. This includes using technologies that all the browsers support, delivering better experiences to browsers that can handle them (progressive enhancement), and/or writing code so that it falls back to a simpler but still usable experience in older browsers (graceful degradation). It also involves a lot of testing to see if anything fails in certain browsers, and then more work to fix those failures.
- **Responsive web design** is the practice of making your functionality and layouts flexible so they can automatically adapt to different browsers. An obvious example is a website that is laid out one way in a widescreen browser on the desktop, but displays as a more compact, single-column layout on mobile phone browsers. Try adjusting the width of your browser window now, and see what happens.
- **Performance** means getting websites to load as quickly as possible, but also making them intuitive and easy to use so that users don't get frustrated and go somewhere else.
- **Accessibility** means making your websites usable by as many different kinds of people as possible (related concepts are diversity and inclusion, and inclusive design). This includes people with visual impairments, hearing impairments, cognitive disabilities, or physical disabilities. It also goes beyond people with disabilities — how about young or old people, people from different cultures, people using mobile devices, or people with unreliable or slow network connections?
- **Internationalization** means making websites usable by people from different cultures, who speak different languages to your own. There are technical considerations here (such as altering your layout so that it still works OK for right-to-left, or even vertical languages), and human ones (such as using simple, non-slang language so that people who have your language as their second or third language are more likely to understand your text).
- **Privacy & Security**. These two concepts are related but different. Privacy refers to allowing people to go about their business privately and not spying on them or collecting more of their data than you absolutely need to. Security refers to constructing your website in a secure way so that malicious users cannot steal information contained on it from you or your users.

## See also

- [History of the World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
- [How does the internet work?](/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)
