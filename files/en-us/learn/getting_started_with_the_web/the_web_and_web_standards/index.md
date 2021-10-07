---
title: The web and web standards
slug: Learn/Getting_started_with_the_web/The_web_and_web_standards
tags:
  - Beginner
  - Front-end
  - Learn
  - Web
  - Web Standards
---
<p>{{learnsidebar}}</p>

<p>This article provides some useful background on the Web — how it came about, what web standard technologies are, how they work together, why "web developer" is a great career to choose, and what kinds of best practices you'll learn about through the course.</p>

<h2 id="Brief_history_of_the_web">Brief history of the web</h2>

<p>We'll keep this very brief, as there are many (more) detailed accounts of the web's history out there, which we'll link to later on (also try searching for "history of the web" in your favorite search engine and see what you get, if you are interested in more detail.)</p>

<p>In the late 1960s, the US military developed a communication network called <a href="/en-US/docs/Glossary/Arpanet">ARPANET</a>. This can be considered a forerunner of the Web, as it worked on <a href="https://en.wikipedia.org/wiki/Packet_switching">packet switching</a>, and featured the first implementation of the <a href="https://en.wikipedia.org/wiki/Internet_protocol_suite">TCP/IP</a> protocol suite. These two technologies form the basis of the infrastructure that the internet is built on.</p>

<p>In 1980, Tim Berners-Lee (often referred to as TimBL) wrote a notebook program called ENQUIRE, which featured the concept of links between different nodes. Sound familiar?</p>

<p>Fast forward to 1989, and TimBL wrote <a href="https://www.w3.org/History/1989/proposal.html">Information Management: A Proposal</a> and HyperText at CERN; these two publications together provided the background for how the web would work. They received a fair amount of interest, enough to convince TimBL's bosses to allow him to go ahead and create a global hypertext system.</p>

<p>By late 1990, TimBL had created all the things needed to run the first version of the web — <a href="/en-US/docs/Web/HTTP">HTTP</a>, <a href="/en-US/docs/Web/HTML">HTML</a>, the first web browser, which was called <a href="https://en.wikipedia.org/wiki/WorldWideWeb">WorldWideWeb</a>, an HTTP server, and some web pages to look at.</p>

<p>In the next few years that followed, the web exploded, with multiple browsers being released, thousands of web servers being set up, and millions of web pages being created. OK, that's a very simple summary of what happened, but we did promise you a brief summary.</p>

<p>One last significant data point to share is that in 1994, TimBL founded the <a href="https://en.wikipedia.org/wiki/World_Wide_Web_Consortium">World Wide Web Consortium</a> (W3C), an organization that brings together representatives from many different technology companies to work together on the creation of web technology specifications. After that other technologies followed such as <a href="/en-US/docs/Web/CSS">CSS</a> and <a href="/en-US/docs/Web/JavaScript">JavaScript</a>, and the web started to look more like the web we know today.</p>

<h2 id="Web_standards">Web standards</h2>

<p><strong>Web standards</strong> are the technologies we use to build web sites. These standards exist as long technical documents called specifications, which detail exactly how the technology should work. These documents are not very useful for learning how to use the technologies they describe (this is why we have sites like MDN Web Docs), but instead are intended to be used by software engineers to implement these technologies (usually in web browsers).</p>

<p>For example, the <a href="https://html.spec.whatwg.org/multipage/">HTML Living Standard</a> describes exactly how HTML (all the HTML elements, and their associated APIs, and other surrounding technologies) should be implemented.</p>

<p>Web standards are created by standards bodies — institutions that invite groups of people from different technology companies to come together and agree on how the technologies should work in the best way to fulfill all of their use cases. The W3C is the best known web standards body, but there are others such as the <a href="https://whatwg.org/">WHATWG</a> (who maintain the living standards for the HTML language), <a href="https://www.ecma-international.org/">ECMA</a> (who publish the standard for ECMAScript, which JavaScript is based on), <a href="https://www.khronos.org/">Khronos</a> (who publish technologies for 3D graphics, such as WebGL), and others.</p>

<h3 id="Open_standards">"Open" standards</h3>

<p>One of the key aspects of web standards, which TimBL and the W3C agreed on from the start, is that the web (and web technologies) should be free to both contribute and use, and not encumbered by patents/licensing. Therefore anyone can write the code to build a website for free, and anyone can contribute to the standards creation process, where the specs are written.</p>

<p>Because web technologies are created openly, in collaboration between many different companies, it means that no one company gets to control them, which is a really good thing. You wouldn't want a single company suddenly deciding to put the entire web behind a paywall, or releasing a new version of HTML that everyone has to buy to continue making web sites, or worse still, just deciding they aren't interested any more and just turning it off.</p>

<p>This allows the web to remain a freely-available public resource.</p>

<h3 id="Dont_break_the_web">Don't break the web</h3>

<p>Another phrase you'll hear around open web standards is "don't break the web" — the idea is that any new web technology that is introduced should be backwards compatible with what went before it (i.e. old web sites will still continue to work), and forwards compatible (future technologies in turn will be compatible with what we currently have). As you go through the learning material presented here, you'll start to learn how this is made possible with some very clever design and implementation work.</p>

<h2 id="Being_a_web_developer_is_good">Being a web developer is good</h2>

<p>The web industry is a very attractive market to enter if you are looking for a job. Recent published figures say that there are currently around 19 million web developers in the world, and that figure is set more than double in the next decade. And at the same time, there is a skill shortage in the industry — so what better time to learn web development?</p>

<p>It isn't all fun and games however — building web sites is a more complicated proposition than it used to be, and you'll have to put some time in to studying all the different technologies you need to use, all the techniques and best practices you need to know, and all the typical patterns you'll be called upon to implement. It'll take you a few months to really start to get into it, and then you'll need to keep learning so that your knowledge stays up-to-date with all the new tools and features that appear on the web platform, and keep practicing and refining your craft.</p>

<p><em>The only constant is change.</em></p>

<p>Does this sound hard? Don't worry — we aim to give you everything you need to know to get started, and things will get easier. Once you embrace the constant change and uncertainty of the web, you'll start to enjoy yourself. As a part of the web community, you'll have an entire web of contacts and useful material to help you, and you'll start to enjoy the creative possibilities it brings.</p>

<p>You're a digital creative now. Enjoy the experience, and the potential for earning a living.</p>

<h2 id="Overview_of_modern_web_technologies">Overview of modern web technologies</h2>

<p>There are a number of technologies to learn if you want to be a front-end web developer. In this section we will describe them briefly. For a more detailed explanation of how some of them work together, read our article <a href="/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works">How the web works</a>.</p>

<h3 id="Browsers">Browsers</h3>

<p>You are probably reading these words inside a web browser in this very moment (unless you've printed it out, or are using assistive technology, such as a screenreader to read it out to you). Web browsers are the software programs people use to consume the web, and include <a href="https://www.mozilla.org/en-US/firefox/">Firefox</a>, <a href="https://www.google.com/chrome/">Chrome</a>, <a href="https://www.opera.com/">Opera</a>, <a href="https://www.apple.com/safari/">Safari</a>, and <a href="https://www.microsoft.com/en-us/windows/microsoft-edge">Edge</a>.</p>

<h3 id="HTTP">HTTP</h3>

<p>Hypertext Transfer Protocol, or <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP">HTTP</a>, is a messaging protocol that allows web browsers to communicate with web servers (where web sites are stored). A typical conversation goes something like</p>

<pre>"Hello web server. Can you give me the files I need to render bbc.co.uk"?

"Sure thing web browser — here you go"

[Downloads files and renders web page]</pre>

<p>The actual syntax for HTTP messages (called requests and responses) is not that human-readable, but this gives you the basic idea.</p>

<h3 id="HTML_CSS_and_JavaScript">HTML, CSS, and JavaScript</h3>

<p><a href="/en-US/docs/Web/HTML">HTML</a>, <a href="/en-US/docs/Web/CSS">CSS</a>, and <a href="/en-US/docs/Web/JavaScript">JavaScript</a> are the main three technologies you'll use to build a website:</p>

<ul>
 <li>
  <p>Hypertext markup language, or <strong>HTML</strong>, is a markup language consisting of different elements you can wrap (mark up) content in to give it meaning (semantics) and structure. Simple HTML looks like this:</p>

  <pre class="brush: html">&lt;h1&gt;This is a top-level heading&lt;/h1&gt;

&lt;p&gt;This is a paragraph of text.&lt;/p&gt;

&lt;img src="cat.jpg" alt="A picture of my cat"&gt;</pre>

  <p>If we adopted a house-building analogy, HTML would be like the foundations and walls of the house, which give it structure and hold it together.</p>
 </li>
 <li>
  <p>Cascading Style Sheets (<strong>CSS</strong>) is a rule-based language used to apply styles to your HTML, for example setting text and background colors, adding borders, animating things, or laying out a page in a certain way. As a simple example, the following code would turn our HTML paragraph red:</p>

  <pre class="brush: css">p  {
  color: red;
}</pre>

  <p>In the house analogy, CSS is like the paint, wallpaper, carpets and paintings you'd use to make the house look nice.</p>
 </li>
 <li>
  <p><strong>JavaScript</strong> is the programming language we use to add interactivity to web sites, from dynamic style switching, to fetching updates from the server, right through to complex 3D graphics. The following simple JavaScript will store a reference to our paragraph in memory and change the text inside it:</p>

  <pre class="brush: js">let pElem = document.querySelector('p');
pElem.textContent =  'We changed the text!';</pre>

  <p>In the house analogy, JavaScript is like the cooker, TV, Microwave, or hairdryer — the things that give your house useful functionality</p>
 </li>
</ul>

<h3 id="Tooling">Tooling</h3>

<p>Once you've learned the "raw" technologies that can be used to build web pages (such as HTML, CSS, and JavaScript), you'll soon start to come across various tools that can be used to make your work easier or more efficient. Examples include:</p>

<ul>
 <li>The <a href="/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools">developer tools</a> inside modern browsers that can be used to debug your code.</li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing">Testing tools</a> that can be used to run tests to show whether your code is behaving as you intended it to.</li>
 <li>Libraries and frameworks built on top of JavaScript that allow you to build certain types of web site much more quickly and effectively.</li>
 <li>So-called "Linters", which take a set of rules, look at your code, and highlight places where you haven't followed the rules properly.</li>
 <li>Minifiers, which remove all the whitespace from your code files to make it so that they  are smaller and therefore download from the server more quickly.</li>
</ul>

<h3 id="Server-side_languages_and_frameworks">Server-side languages and frameworks</h3>

<p>HTML, CSS, and JavaScript are front-end (or client-side) languages, which means they are run by the browser to produce a website front-end that your users can use.</p>

<p>There are another class of languages called back-end (or server-side) languages, meaning that they are run on the server before the result is then sent to the browser to be displayed. A typical use for a server-side language is to get some data out of a database and generate some HTML to contain the data, before then sending the HTML over to the browser to display it to the user.</p>

<p>Example server-side languages include ASP.NET, Python, PHP, and NodeJS.</p>

<h2 id="Web_best_practices">Web best practices</h2>

<p>We have briefly talked about the technologies that you'll use to build websites. Now let's discuss the best practices you should employ to make sure you are using those technologies in the best way that you can.</p>

<p>When doing web development, the main cause of uncertainty comes from the fact that you don't know what combination of technology each user will use to view your web site:</p>

<ul>
 <li>User 1 might be looking at it on an iPhone, with a small, narrow screen.</li>
 <li>User 2 might be looking at it on a Windows laptop with a widescreen monitor attached to it.</li>
 <li>User 3 might be blind, and using a screenreader to read the web page out to them.</li>
 <li>User 4 might be using a really old desktop machine that can't run modern browsers.</li>
</ul>

<p>Because you don't know exactly what your users will use, you need to design defensively — make your web site as flexible as possible, so that all of the above users can make use of it, even if they might not all get the same experience. In short, we are trying to make the web work for all, as much as possible.</p>

<p>You'll come across the below concepts at some point in your studies.</p>

<ul>
 <li><strong>Cross-browser compatibility</strong> is the practice of trying to make sure your webpage works across as many devices as possible. This includes using technologies that all the browsers support, delivering better experiences to browsers that can handle them (progressive enhancement), and/or writing code so that it falls back to a simpler but still usable experience in older browsers (graceful degradation). It also involves a lot of testing to see if anything fails in certain browsers, and then more work to fix those failures.</li>
 <li><strong>Responsive web design</strong> is the practice of making your functionality and layouts flexible so they can automatically adapt to different browsers. An obvious example is a website that is laid out one way in a widescreen browser on the desktop, but displays as a more compact, single-column layout on mobile phone browsers. Try adjusting the width of your browser window now, and see what happens.</li>
 <li><strong>Performance</strong> means getting web sites to load as quickly as possible, but also making them intuitive and easy to use so that users don't get frustrated and go somewhere else.</li>
 <li><strong>Accessibility</strong> means making your websites usable by as many different kinds of people as possible (related concepts are diversity and inclusion, and inclusive design). This includes people with visual impairments, hearing impairments, cognitive disabilities, or physical disabilities. It also goes beyond people with disabilities — how about young or old people, people from different cultures, people using mobile devices, or people with unreliable or slow network connections?</li>
 <li><strong>Internationalization</strong> means making websites usable by people from different cultures, who speak different languages to your own. There are technical considerations here (such as altering your layout so that it still works OK for right-to-left, or even vertical languages), and human ones (such as using simple, non-slang language so that people who have your language as their second or third language are more likely to understand your text).</li>
 <li><strong>Privacy &amp; Security</strong>. These two concepts are related but different. Privacy refers to allowing people to go about their business privately and not spying on them or collecting more of their data than you absolutely need to. Security refers to constructing your website in a secure way so that malicious users cannot steal information contained on it from you or your users.</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web">History of the World Wide Web</a></li>
 <li><a href="/en-US/docs/Learn/Common_questions/How_does_the_Internet_work">How does the internet work?</a></li>
</ul>
