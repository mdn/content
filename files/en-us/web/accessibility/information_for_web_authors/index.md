---
title: Accessibility Information for Web Authors
slug: Web/Accessibility/Information_for_Web_authors
tags:
  - Accessibility
  - Authoring
---
<h2 id="Guidelines_and_Regulations">Guidelines and Regulations</h2>

<ol>
 <li><a class="ex-ref" href="https://www.section508.gov/index.cfm?FuseAction=Content&amp;ID=12#Web">Section 508 Guidelines for web authors</a>

  <p>These guidelines must be followed by U.S. websites. Other organizations such as schools are starting to follow these guidelines as well.</p>
 </li>
 <li><a class="ex-ref" href="https://www.w3.org/TR/WAI-WEBCONTENT/"><dfn>Web Content Accessibility Guidelines (WCAG)</dfn> 1.0</a>
  <p>Another important set of guidelines from the <abbr title="World Wide Web Consortium">W3C</abbr> <dfn>Web Accessibility Initiative (WAI)</dfn>. The European Union is looking to base their upcoming accessibility regulations on these guidelines. These guidelines are discussed on the <a class="ex-ref" href="https://www.w3.org/WAI/IG/"><abbr title="Web Accessibility Initiative">WAI</abbr> interest group discussion list</a>.</p>
 </li>
</ol>

<h2 id="Howtos">How-to's</h2>

<ol>
 <li><a href="https://web.archive.org/web/20081001203400/https://developer.mozilla.org/En/Key-navigable_custom_DHTML_widgets">Key-navigable custom DHTML widgets in Mozilla &amp; IE</a>

  <p>This document discusses how to use tabindex, element.focus() and onkeypress to make custom DHTML widgets such as menus or tree views keyboard accessible.</p>
 </li>
 <li><a class="ex-ref" href="https://www.ibm.com/able/guidelines/web/accessweb.html">Accessible Web Page Authoring</a>
  <p>IBM has put together a simple, practical resource for web authors to learn accessibility the fast and painless way. Highly recommended, an excellent resource.</p>
 </li>
 <li><a class="ex-ref" href="http://diveintoaccessibility.org/">Dive Into Accessibility</a> by Mark Pilgrim
  <p>An excellent, easy-to-understand resource (available in English and in 9 other languages) on accessible website authoring, which goes into greater depth. In 30 days, you will know why your website should be accessible and how to make it more accessible.</p>
 </li>
</ol>

<h3 id="Automated_Checking_Repair">Automated Checking &amp; Repair</h3>

<ol>
 <li><a class="ex-ref" href="https://www.contentquality.com/">Cynthia says™</a> from HiSoftware® Company

  <p>"Cynthia says™" is a free online webpage accessibility validation service that is designed to identify errors in webpage related to Section 508 standards and/or the <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> guidelines. It can perform a "Complete Webpage Quality Check" for accessibility, privacy, searchability, metadata and even alt text attribute quality. The web author chooses the guidelines (as a basis for errors and warnings) to be used by "Cynthia says™": Section 508, <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> Priorities 1, 2 and 3. The output data report is displayed in a clear and well structured table where each and all checkpoints are identified and described (along with an helpful clickable link to the related reference guideline) into logical groups and according to measurable results: passed, warning, failed for automated verification, warning for manual verification, not selected, not available, not related, etc.</p>
 </li>
 <li><a class="ex-ref" href="http://valet.webthing.com/access/url.html">Accessibility Valet</a> from WebThing
  <p>Description and summary to be written.</p>
 </li>
 <li><a class="ex-ref" href="https://wave.webaim.org/"><dfn>WAVE 4.0 beta (Web Accessibility Versatile Evaluator)</dfn></a> from <a class="ex-ref" href="https://www.webaim.org/">WebAIM</a> and sponsored by <a class="ex-ref" href="https://disabilities.temple.edu/">Temple University Institute on Disabilities</a>
  <p><abbr title="Web Accessibility Versatile Evaluator">WAVE</abbr> 4.0 beta is another powerful, free online webpage accessibility validation service that identifies accessibility errors and reports accessibility warnings about webpage related to Section 508 standards and/or the <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> guidelines. Its purpose is to aid humans in the web accessibility evaluation process. Rather than providing a complex technical report, <abbr title="Web Accessibility Versatile Evaluator">WAVE</abbr> 4.0 shows the original web page with embedded icons and indicators that reveal the accessibility information within your page. You can get accessibility report for errors, warnings. You can view the structure and order view of the document. You can see a text-only view and outline view of the document.</p>

  <p>You can install a custom <abbr title="Web Accessibility Versatile Evaluator">WAVE</abbr> toolbar in Firefox for a quick, easy and convenient evaluation of web pages directly within Firefox. You can also add a <abbr title="Web Accessibility Versatile Evaluator">WAVE</abbr> bookmarklet in Firefox or even WAVE direct links for checking a webpage.</p>
 </li>
 <li><a class="ex-ref" href="http://users.skynet.be/mgueury/mozilla/index.html">HTML advanced validator (Firefox extension)</a> by Marc Gueury
  <p>This HTML Validator (based on W3C Tidy and on OpenSP for SGML validation) is a powerful, versatile, extended HTML validator. It's free. It <strong>works off-line</strong> and that is a major advantage over other accessibility checkers. No document upload needed and no additional application to launch; everything is accessible within the Firefox browser.</p>

  <p>This HTML advanced validator Firefox extension is very resourceful and highly customizable. It's an extension add-on to Firefox 2.x and Firefox 3.x. It not only checks and reports possible markup errors and warnings (based on W3C Tidy and/or based on true SGML validation) but it can also report accessibility errors and warnings according to selectable accessibility guidelines (Section 508, WCAG Priorities 1, 2 or 3). Its accessibility report is viewable in the View Source window (View &gt; Source code <kbd>Ctrl+U</kbd> or right-click on the status bar). Two panes are added at the bottom of the view source code window: the left pane contains the errors and warnings (with their correspondent line number) and the right pane identifies the checkpoint along with an example and a clickable link to the reference/guideline. <strong>Just wonderful!</strong></p>

  <p>The HTML advanced validator may also be downloaded from <a href="https://addons.mozilla.org/firefox/addon/249">Firefox Add-ons: HTML Validator</a>.</p>
 </li>
 <li><a class="ex-ref" href="https://juicystudio.com/services/colourcontrast.php#contrast">Color contrast analyzer</a> by Juicy Studio
  <blockquote cite="https://msdn.microsoft.com/en-us/library/bb263947(VS.85).aspx">
  <p>"Contrast is the perceived difference between two adjacent colors. (...) Contrast is extremely important in Web design."</p>

  <address><a class="ex-ref" href="https://msdn.microsoft.com/en-us/library/bb263947%28VS.85%29.aspx">Wheel of Color: Pump up the Contrast, Robert Hess, MSDN</a></address>
  </blockquote>

  <blockquote cite="http://www.useit.com/alertbox/designmistakes.html">
  <p>"For this year's list of worst design mistakes, (...) I asked readers of my newsletter to nominate the usability problems they found the most irritating. (...) about one-third complained about <strong>low contrast between text and background</strong>."</p>

  <address><a class="ex-ref" href="http://www.useit.com/alertbox/designmistakes.html">Top Ten Web Design Mistakes of 2005: 1. Legibility Problems</a></address>
  </blockquote>

  <p>How can a web author establish easily and quickly if the background color and foreground (text) color in use in his webpages have sufficient color contrast difference and sufficient color brightness difference? <a class="ex-ref" href="https://juicystudio.com/services/colourcontrast.php#contrast">Color contrast analyzer</a> is an excellent tool for such task. Effective color contrast and effective color brightness difference have a <strong>decisive importance for reading</strong>, furthermore for people with partial color deficiency (see the excellent examples in <a class="ex-ref" href="http://www.lighthouse.org/accessibility/effective-color-contrast/">Effective Color Contrast</a> by Lighthouse International). A study has established that <a class="ex-ref" href="https://msdn.microsoft.com/en-us/library/bb263953.aspx">about 8 percent of all men have some form of color deficiency</a>. Color contrast analyzer algorithm is based on the formula provided in <a class="ex-ref" href="https://www.w3.org/TR/AERT#color-contrast">Techniques For Accessibility Evaluation And Repair Tools</a> from W3C.</p>

  <p>The <a class="ex-ref" href="https://juicystudio.com/services/csstest.php">Juicy Studio CSS analyzer</a> will also analyze and report the color contrast and color brightness differences involved in your stylesheets.</p>
 </li>
</ol>

<h3 id="The_Future_Accessible_DHTML">The Future: Accessible DHTML</h3>

<p><a href="/en-US/docs/Web/Accessibility/ARIA">DHTML Accessibility Roadmap</a>: a peek into how DHTML will be made accessible in the future. This document gives a plan which is being developed by IBM, Mozilla and <a class="ex-ref" href="https://www.w3.org/WAI/PF/">WAI Protocols and Formats Working Group (PFWG)</a> to address the issue of Accessible DHTML.</p>

<p>Dynamic web content is not accessible, because it uses vanilla &lt;div&gt;'s and &lt;span&gt;'s combined with Javascript rather than declarative markup to describe the behavior of custom widgets such as menus and tree views. These widgets are usually not even keyboard focusable. Furthermore, assistive technologies do not understand what these widgets are supposed to be, or what state they are in or what they are capable of.</p>

<p>This document tackles such difficulties and shows several interactive desktop-style widgets such as tree views, menu bars and spreadsheets which are accessible both with the keyboard and assistive technologies such as screen readers, screen magnifiers and alternative input devices.</p>

<h2 id="Join_the_Mozilla_Accessibility_Community">Join the Mozilla Accessibility Community</h2>

<h3 id="Live_Chat">Live Chat</h3>

<p>Both end users and developers are invited for discussion on the live IRC channel at <a href="irc://moznet/%23accessibility">irc.mozilla.org/#accessibility</a>. Since this is a worldwide effort, there is always a good chance to find someone to chat with there, day or night.</p>

<h3 id="Newsgroup_and_Mailing_List">Newsgroup and Mailing List</h3>

<p>We have two discussion lists, which can be read via a newsgroup reader, as a mailing list or via Google groups.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Purpose</th>
   <th scope="col">Newsgroup</th>
   <th scope="col">Mailing list</th>
   <th scope="col">Google group</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Developer discussion</td>
   <td><a href="news://news.mozilla.org/mozilla.dev.accessibility">mozilla.dev.accessibility</a></td>
   <td><a href="https://lists.mozilla.org/listinfo/dev-accessibility">subscribe/unsubscribe</a></td>
   <td><a href="https://groups.google.com/group/mozilla.dev.accessibility">Google group</a></td>
  </tr>
  <tr>
   <td>End user support</td>
   <td><a href="news://news.mozilla.org/mozilla.support.accessibility">mozilla.support.accessibility</a></td>
   <td><a href="https://lists.mozilla.org/listinfo/support-accessibility">subscribe/unsubscribe</a></td>
   <td><a href="https://groups.google.com/group/mozilla.support.accessibility">Google group</a></td>
  </tr>
 </tbody>
</table>
