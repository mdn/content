---
title: The web standards model
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
page-type: tutorial-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

This article provides some useful background on the web and web standards — how they came about, what web standards technologies are, and how they work together.

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
          <li>Web standards, and the key principles they are built on.</li>
          <li>How standards bodies operate — for example the <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a>, and <a href="https://www.khronos.org/">Khronos Group</a>; the process of standards creation.</li>
          <li>The main web standards technologies, and how they work together.</li>
          <li>Server-side (dynamic) versus client-side (static) files.</li>
          <li>Web best practices.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Brief history of the web

In the late 1960s, the US military developed a communication network called [ARPANET](/en-US/docs/Glossary/Arpanet). This can be considered a forerunner of the **internet**, as it worked on [packet switching](https://en.wikipedia.org/wiki/Packet_switching), and featured the first implementation of the [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) protocol suite. These two technologies form the basis of the infrastructure that the internet is built on.

In 1980, [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) (often referred to as TimBL) wrote a notebook program called ENQUIRE, which featured the concept of links between different nodes. Sound familiar?

Fast forward to 1989, and TimBL wrote [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) and HyperText at CERN; these two publications together provided the background for how the web would work. They received a fair amount of interest, enough to convince TimBL's bosses to allow him to go ahead and create a global hypertext system.

By 1990-91, TimBL had created all the things needed to run the first version of the **World Wide Web** (generally referred to as the **web**) — [HTTP](/en-US/docs/Web/HTTP), [HTML](/en-US/docs/Web/HTML), the first web browser, which was called [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb), a web server, and some web pages to look at.

> [!NOTE]
> People sometimes use "the web" and "the internet" interchangeably, but they are different things. The internet is the infrastructure that enables information to be transported around the world between different servers and clients, whereas the web is a system built on top of the internet. The web defines types of information (content and code) that are transported via the internet and communications protocols to manage that transport.

In 1994, TimBL founded the [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), an organization that brings together representatives from many different companies to work together on the creation of web technologies. The W3C worked on standardizing and improving existing web technologies such as HTML and HTTP, and creating new technologies such as [CSS](/en-US/docs/Web/CSS) and [JavaScript](/en-US/docs/Web/JavaScript). CSS and JavaScript in particular were vital for giving the web styling and interactivity, making it look more like the web we know today.

In the next few years that followed, the web exploded, with multiple browsers being released, thousands of web servers being set up, and millions of web pages being created. Other standards organizations also appeared to help standardize different aspects of web technologies.

> [!NOTE]
> If you are interested in reading a more detailed account of web history, try searching for "history of the web" in your favorite [search engine](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) and see what you can find.

## Web standards

**Web standards** are the technologies we use to build websites. These standards exist as long technical documents called specifications, which detail exactly how the technology should work. These documents are not very useful for learning how to use the technologies they describe (this is why we have sites like MDN Web Docs). Instead, they are intended to be used by software engineers to implement these technologies (usually in web browsers).

### Standards bodies and processes

Web standards are created by standards bodies — institutions that invite groups of people from different technology companies to come together and agree on how the technologies should work in the best way to fulfill all of their use cases.

The W3C is the best known web standards body, but there are others. For example:

- [WHATWG](https://whatwg.org/) maintains the [HTML Living Standard](https://html.spec.whatwg.org/multipage/), which describes exactly how HTML (all the HTML elements, and their associated APIs, and other surrounding technologies) should be implemented.
- [TC39](https://tc39.es/) and [ECMA](https://ecma-international.org/) specify and publish the standard for ECMAScript, which modern JavaScript is based on.
- [Khronos](https://www.khronos.org/) publish technologies for 3D graphics, such as WebGL.

The full processes by which standards are created can get deep and complex. However, unless you want to create your own web technology features, you don't need to understand most of it. If you want to contribute to the discussion around new technologies and provide feedback, it is usually a matter of joining the relevant mailing list or other discussion mechanism. Standards discussions are carried out in public, hence the term ["Open" standards](#open_standards).

For now, we'll give you a general, high-level understanding of how standards processes work:

1. Someone notices the need for a new web standard feature that will make developers' lives easier. For example, maybe there is a common pattern that is commonly used in web user interfaces, but it is a pain to implement. A dedicated CSS feature would make it much easier. The someone could be anyone — an individual developer, or an engineer working for a big tech company.
2. The person discusses this feature with other developers, browser engineers, etc., and starts to create interest in implementing the feature. Usually they write an explainer document that explains the need for the feature and how it will work, and a code demo that shows what the feature would look like in action.
3. If there is enough interest in the feature, it is formally discussed inside the relevant standards body working group. For example, CSS features are usually discussed by the [CSS Working Group](https://www.w3.org/groups/wg/css/) (WG) (see also the [CSS Working Group Wikipedia page](https://en.wikipedia.org/wiki/CSS_Working_Group) for a bit more description and history). Before a new web technology is accepted, it must be rigorously evaluated to make sure it is good for the web — for example, it doesn't introduce any security problems, it is [accessible and compatible](#accessible_and_interoperable) with other web technologies, and it doesn't rely on patents.
4. To prove out the feature, several things happen. These points can all happen around the same time as Point 3., or even before (browser vendors sometimes implement proprietary/non-standard features and then attempt to standardize them afterwards):

   1. One or more browser vendors will implement an experimental version of the new feature, often disabled by default, but which can be enabled by people who want to test it and provide feedback.
   2. A working group member will also add it to a technology specification so that browser vendors are able to implement it consistently.
   3. They will also seek out feedback from other browser vendors to see what issues they have with the proposal, and how likely they are to implement it. These are called Standards positions. See for example [Mozilla Standards Positions](https://mozilla.github.io/standards-positions/).
   4. Involved individuals will also write an extensive suite of tests to demonstrate that the feature works as described.

5. Eventually, if all is well, the feature will be implemented across all browsers and can start being used when creating websites.

> [!NOTE]
> It is perfectly possible that the people suggesting the feature, implementing it in a browser, creating the specification, writing tests, and collecting feedback on it, are the same person/people.

You can find more information on specific standards body processes. See for example:

- [W3C Process Document](https://www.w3.org/policies/process/)
- [WHATWG — Working Mode](https://whatwg.org/working-mode)
- [The TC39 Process](https://tc39.es/process-document/)

## Web standards key principles

The key principles of the web, which make the web a unique and exciting industry to get involved in, are as follows:

- Open to contribute and use, and therefore not patent-encumbered or controlled by a single private entity.
- Accessible and interoperable.
- They don't break the web.

Let's look at each of these in a little more detail.

### "Open" standards

One of the key aspects of web standards, which TimBL and the W3C agreed on from the start, is that the web (and web technologies) should be **open**. This means they free to both contribute to and use, and not encumbered by patents/licensing. This is important — if a web technology relies on patented/licensed technologies to function, the patent/owner can then charge implementing browser vendors potentially large amounts of of money, and those costs would then be passed onto the browser users.

In addition, because web technologies are created openly, in collaboration between many different companies, it means that no one company gets to control them, which is a really good thing. You wouldn't want a single company suddenly deciding to put the entire web behind a paywall, or releasing a new version of HTML that everyone has to buy to continue making websites, or worse still, deciding they aren't interested any more and just turning it off.

Open standards enable the web to remain a freely-available public resource, where anyone can write the code to build a website for free, and anyone can contribute to the standards creation process.

### Accessible and interoperable

The web and web browsers are fundamentally designed so that web content is **accessible** to people with disabilities. It was originally envisaged as a great leveller, enabling people to access information regardless of circumstance. This means that, for example:

- People who are unable to use a mouse or pointing device can use the keyboard to navigate the web.
- People who are visually impaired can magnify content, or use a program called a **screen reader** to read content out to them and describe controls in a way that makes sense.

> [!NOTE]
> You'll learn more about [Accessibility](/en-US/docs/Learn_web_development/Core/Accessibility) later on in the learning pathway.

In addition, web technologies are intended to be **interoperable**. Because web technologies are implemented according to published standards, browsers should provide the same rendered output for a given input (for example, HTML, CSS, or JS code) — in other words, a website should work consistently across multiple browsers.

### Don't break the web

Another phrase you'll hear around open web standards is "don't break the web". The idea behind this is that any new web technology should be backwards compatible with what went before it, so existing websites will continue to work in the same way as they did before.

Web browser vendors should be able to implement new web technologies without causing a difference in rendering or functionality that would cause their users to think a website is broken and try another browser as a result.

## Overview of modern web technologies

There are a number of technologies to learn if you want to be a front-end web developer. In this section we will describe them briefly.

### HTML, CSS, and JavaScript

[HTML](/en-US/docs/Web/HTML), [CSS](/en-US/docs/Web/CSS), and [JavaScript](/en-US/docs/Web/JavaScript) are the main three technologies you'll use to build a website.

- HTML is for structure and semantics (meaning).
- CSS is for styling and layout.
- JavaScript and APIs are for controlling dynamic behavior.

#### HTML

HyperText Markup Language, or **HTML**, is a markup language consisting of different elements you can wrap (mark up) content in to give it meaning (semantics) and structure. Simple HTML looks like this:

```html
<h1>This is a top-level heading</h1>

<p>This is a paragraph of text.</p>

<img src="cat.jpg" alt="A picture of my cat" />
```

If we adopted a house-building analogy, HTML would be like the foundations and walls of the house, which give it structure and hold it together.

#### CSS

Cascading Style Sheets (**CSS**) is a rule-based language used to apply styles to your HTML — for example, setting text and background colors, adding borders, animating things, or laying out a page in a certain way. As a simple example, the following code would turn all HTML paragraphs red:

```css
p {
  color: red;
}
```

In the house analogy, CSS is like the paint, wallpaper, carpets and paintings you'd use to make the house look nice.

#### JavaScript (and APIs)

**JavaScript** is the programming language we use to add interactivity to websites, from dynamic style switching, to fetching updates from the server, right through to complex 3D graphics. The following simple JavaScript store a reference to a paragraph in memory and change the text inside it:

```js
let pElem = document.querySelector("p");
pElem.textContent = "We changed the text!";
```

You'll also hear the term **APIs** along with JavaScript. API stands for **Application Programming Interface**. In general terms, an API is a bit of code that allows you to control other more complex bits of code or other functionality on your computer (such as hardware devices like your webcam or microphone) in a manageable way.

For example, writing your own interface to communicate with your webcam and capture a video stream from it, but the JavaScript [`getUserMedia()`](/en-US/docs/Web/API/MediaDevices/getUserMedia#examples) API method allows you to do this fairly easily. It does all the hard work for you, behind the scenes, so you don't need to reinvent the wheel each time.

The simple code snippet above also uses an API. [`querySelector()`](/en-US/docs/Web/API/Document/querySelector) and [`textContent`](/en-US/docs/Web/API/Node/textContent) are both parts of the [Document Object Model (DOM)](/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) family of APIs, which allow you to use JavaScript to manipulate web documents.

In the house analogy, JavaScript is like the cooker, TV, Microwave, or hairdryer — the things that give your house useful functionality.

### Other web technologies

There are other technologies used on the web, for example:

- [HTTP](/en-US/docs/Web/HTTP) for communicating between clients and servers, as mentioned earlier.
- [SVG](/en-US/docs/Web/SVG) for creating and manipulating vector graphics.
- [MathML](/en-US/docs/Web/MathML) for describing mathematical formulae.

However, HTML, CSS, and JavaScript by far the most important technologies to learn, so we will focus mainly on those in our learning pathway.

## Tools

Once you've learned about the standard, foundational technologies used to build web pages (such as HTML, CSS, and JavaScript), you'll soon start to come across various tools that can be used to make your work easier or more efficient. Examples include:

- [Developer tools](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) inside modern browsers that can be used to debug your code.
- [Testing tools](/en-US/docs/Learn_web_development/Extensions/Testing) that can be used to run tests to show whether your code is behaving as you intended it to.
- [Frameworks and libraries](/en-US/docs/Learn_web_development/Core/Frameworks_libraries) built on top of JavaScript that allow you to build certain types of website much more quickly and effectively.
- So-called **Linters** and **formatters**, which take a set of rules for coding style, look at your code, and update your code to follow those rules. Prettier, which you [met earlier in the course](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions), is an example of a formatter.

## Server-side languages and frameworks

HTML, CSS, and JavaScript are front-end (or client-side) languages, which means they are run by the browser to produce a website front-end that your users can use.

There is another class of languages called back-end (or server-side) languages, meaning that they are run on the server before the result is then sent to the browser to be displayed. A typical use for a server-side language is to get some data out of a database, generate some HTML to contain the data, then send the HTML over to the browser to display it to the user.

Example server-side frameworks and languages include ASP.NET (C#), Django (Python), Laravel (PHP), and Next.js (JavaScript).

These technologies are not considered to be "web standards" — they are developed by organizations outside the web standards processes of organizations such as the W3C and WHATWG — although some of them will have processes that are similarly open.

### Static versus dynamic

Another way that client-side and server-side languages are often described is **static** and **dynamic**:

- A plain HTML file is stored on the server. When requested, it is delivered to the client, unchanged, and rendered by the browser. Because it does not change, it is referred to as "static".
- When server-side code (for example, a Python script or an ASP.NET page) generates some HTML containing data and returns that HTML to the client, the contents of the HTML change depending on what the server-side code does. It is therefore referred to as "dynamic".

There is often a bit of overlap between the concepts of static and dynamic code. Server-side languages usually define HTML structures inside a template file, which tend to be mostly static HTML with some special dynamic sections included that change depending on what data needs to be inserted.

## Web best practices

We have briefly talked about the technologies that you'll use to build websites. Now let's discuss the best practices that web developers generally employ to ensure that their websites are usable by as many people as possible.

When doing web development, the main cause of uncertainty comes from the fact that you don't know what combination of technology each user will use to view your website:

- User 1 might be looking at it on an iPhone, with a small, narrow screen.
- User 2 might be looking at it on a Windows laptop with a widescreen monitor attached to it.
- User 3 might be visually impaired, and using a screen reader to read and interact with the web page.
- User 4 might be using a really old desktop machine that can't run modern browsers.

Because you don't know exactly what your users will use, you need to design defensively — make your website as flexible as possible, so that all of the above users can make use of it, even if they might not all get the same experience.

You'll come across the below concepts at some point in your studies, which represent best practices your websites should ideally adhere to. Don't worry about these too much for now. Throughout most of the course we try to teach these implicitly, meaning that when we teach you HTML, CSS, and JavaScript, our examples will follow the best practices where possible. Later on in your learning journey you will likely explore explicit teachings in these areas.

- **Progressive enhancement**
  - : Creating a minimal experience that provides the essential functionality to all users, and layering on a better experience and other enhancements in browsers that can support them. Progressive enhancement is often seen as unimportant, because browsers tend to support new features more consistently these days, and people tend to have faster internet connections with higher limits on data usage. However, consider examples like cutting down on decoration to make a mobile experience smoother and save on data or providing a lighter, low-bandwidth experience for users who pay by the megabyte or have metered connections.
- **Cross-browser compatibility**
  - : Trying to make sure your webpage works across as many devices as possible. This includes using technologies that all the browsers support, delivering better experiences to browsers that can handle them (progressive enhancement), and/or writing code so that it falls back to a simpler but still usable experience in older browsers (termed **graceful degradation**). It also requires testing to see if anything fails in certain browsers, and then more work to fix those failures.
- **Separating the layers**
  - : Putting your content (HTML), styling (CSS), and behavior (JavaScript) in different code files, rather than lumping them all together in the same place. This is a good idea for many reasons, including code management and comprehension and teamwork/separation of roles. In reality, the separation is not always clear. It is an ideal to aim for where possible, rather than an absolute.
- **Responsive web design**
  - : Making your functionality and layouts flexible so they can automatically adapt to different browsers. An obvious example is a website that is laid out one way in a widescreen browser on the desktop, but displays as a more compact, single-column layout on mobile phone browsers. Try adjusting the width of your browser window now, and see what happens to the site layout.
- **Performance**
  - : Getting websites to load as quickly as possible, but also making them intuitive and easy to use so that users don't get frustrated and go somewhere else.
- **Internationalization**
  - : Making websites usable by people from different cultures, who speak different languages to your own. There are technical considerations here (such as altering your layout so that it still works OK for right-to-left or top-to-bottom languages), and human ones (such as using simple, non-slang language so that diverse cultures are more likely to understand your text).
- **Privacy** & **Security**
  - : These two concepts are related but different. Privacy refers to allowing people to go about their business privately and not spying on them or collecting more of their data than you absolutely need to. Security refers to constructing your website in a secure way so that malicious users cannot steal information contained on it from you or your users.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
