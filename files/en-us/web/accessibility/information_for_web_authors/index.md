---
title: Accessibility Information for Web Authors
slug: Web/Accessibility/Information_for_Web_authors
tags:
  - Accessibility
  - Authoring
---
## Guidelines and Regulations

1.  [Section 508 Guidelines for web authors](https://www.section508.gov/index.cfm?FuseAction=Content&#x26;ID=12#Web)

    These guidelines must be followed by U.S. websites. Other organizations such as schools are starting to follow these guidelines as well.

2.  [<dfn>Web Content Accessibility Guidelines (WCAG)</dfn> 1.0](https://www.w3.org/TR/WAI-WEBCONTENT/)

    Another important set of guidelines from the W3C _Web Accessibility Initiative (WAI)_. The European Union is looking to base their upcoming accessibility regulations on these guidelines. These guidelines are discussed on the [<abbr title="Web Accessibility Initiative">WAI</abbr> interest group discussion list](https://www.w3.org/WAI/IG/).

## How-to's

1.  [Key-navigable custom DHTML widgets in Mozilla & IE](https://web.archive.org/web/20081001203400/https://developer.mozilla.org/En/Key-navigable_custom_DHTML_widgets)

    This document discusses how to use tabindex, element.focus() and onkeypress to make custom DHTML widgets such as menus or tree views keyboard accessible.

2.  [Accessible Web Page Authoring](https://www.ibm.com/able/guidelines/web/accessweb.html)

    IBM has put together a simple, practical resource for web authors to learn accessibility the fast and painless way. Highly recommended, an excellent resource.

3.  [Dive Into Accessibility](http://diveintoaccessibility.org/)

    by Mark Pilgrim

    An excellent, easy-to-understand resource (available in English and in 9 other languages) on accessible website authoring, which goes into greater depth. In 30 days, you will know why your website should be accessible and how to make it more accessible.

### Automated Checking & Repair

1.  [Cynthia says™](https://www.contentquality.com/)

    from HiSoftware® Company

    "Cynthia says™" is a free online webpage accessibility validation service that is designed to identify errors in webpage related to Section 508 standards and/or the WCAG guidelines. It can perform a "Complete Webpage Quality Check" for accessibility, privacy, searchability, metadata and even alt text attribute quality. The web author chooses the guidelines (as a basis for errors and warnings) to be used by "Cynthia says™": Section 508, WCAG Priorities 1, 2 and 3. The output data report is displayed in a clear and well structured table where each and all checkpoints are identified and described (along with an helpful clickable link to the related reference guideline) into logical groups and according to measurable results: passed, warning, failed for automated verification, warning for manual verification, not selected, not available, not related, etc.

2.  [Accessibility Valet](http://valet.webthing.com/access/url.html)

    from WebThing


3.  [<dfn>WAVE 4.0 beta (Web Accessibility Versatile Evaluator)</dfn>](https://wave.webaim.org/) from  [WebAIM](https://www.webaim.org/)

    WAVE 4.0 beta is another powerful, free online webpage accessibility validation service that identifies accessibility errors and reports accessibility warnings about webpage related to Section 508 standards and/or the WCAG guidelines. Its purpose is to aid humans in the web accessibility evaluation process. Rather than providing a complex technical report, WAVE 4.0 shows the original web page with embedded icons and indicators that reveal the accessibility information within your page. You can get accessibility report for errors, warnings. You can view the structure and order view of the document. You can see a text-only view and outline view of the document.

    You can install a custom WAVE toolbar in Firefox for a quick, easy and convenient evaluation of web pages directly within Firefox. You can also add a WAVE bookmarklet in Firefox or even WAVE direct links for checking a webpage.

4.  [HTML advanced validator](http://users.skynet.be/mgueury/mozilla/index.html) (Firefox extension)</a>

    by Marc Gueury

    This HTML Validator (based on W3C Tidy and on OpenSP for SGML validation) is a powerful, versatile, extended HTML validator. It's free. It **works off-line** and that is a major advantage over other accessibility checkers. No document upload needed and no additional application to launch; everything is accessible within the Firefox browser.

    This HTML advanced validator Firefox extension is very resourceful and highly customizable. It's an extension add-on to Firefox 2.x and Firefox 3.x. It not only checks and reports possible markup errors and warnings (based on W3C Tidy and/or based on true SGML validation) but it can also report accessibility errors and warnings according to selectable accessibility guidelines (Section 508, WCAG Priorities 1, 2 or 3). Its accessibility report is viewable in the View Source window (View > Source code <kbd>Ctrl+U</kbd> or right-click on the status bar). Two panes are added at the bottom of the view source code window: the left pane contains the errors and warnings (with their correspondent line number) and the right pane identifies the checkpoint along with an example and a clickable link to the reference/guideline. **Just wonderful!**

    The HTML advanced validator may also be downloaded from [Firefox Add-ons: HTML Validator](https://addons.mozilla.org/firefox/addon/249).

5.  [Color contrast analyzer](https://juicystudio.com/services/colourcontrast.php#contrast)

    by Juicy Studio
    How can a web author establish easily and quickly if the background color and foreground (text) color in use in his webpages have sufficient color contrast difference and sufficient color brightness difference? [Color contrast analyzer](https://juicystudio.com/services/colourcontrast.php#contrast) is an excellent tool for such task. Effective color contrast and effective color brightness difference have a **decisive importance for reading**, furthermore for people with partial color deficiency (see the excellent examples in [Effective Color Contrast](http://www.lighthouse.org/accessibility/effective-color-contrast/) by Lighthouse International). 

    The [Juicy Studio CSS analyzer](https://juicystudio.com/services/csstest.php) will also analyze and report the color contrast and color brightness differences involved in your stylesheets.

### The Future: Accessible DHTML

[DHTML Accessibility Roadmap](/en-US/docs/Web/Accessibility/ARIA): a peek into how DHTML will be made accessible in the future. This document gives a plan which is being developed by IBM, Mozilla and [WAI Protocols and Formats Working Group (PFWG)](https://www.w3.org/WAI/PF/) to address the issue of Accessible DHTML.

Dynamic web content is not accessible, because it uses vanilla {{HTMLElement('div')}}'s and {{HTMLElement('span')}}'s combined with Javascript rather than declarative markup to describe the behavior of custom widgets such as menus and tree views. These widgets are usually not even keyboard focusable. Furthermore, assistive technologies do not understand what these widgets are supposed to be, or what state they are in or what they are capable of.

This document tackles such difficulties and shows several interactive desktop-style widgets such as tree views, menu bars and spreadsheets which are accessible both with the keyboard and assistive technologies such as screen readers, screen magnifiers and alternative input devices.

## Join the Mozilla Accessibility Community

### Live Chat

Both end users and developers are invited for discussion on the live IRC channel at [irc.mozilla.org/#accessibility](irc://moznet/%23accessibility). Since this is a worldwide effort, there is always a good chance to find someone to chat with there, day or night.

### Newsgroup and Mailing List

We have two discussion lists, which can be read via a newsgroup reader, as a mailing list or via Google groups.

| Purpose              | Newsgroup                                                                              | Mailing list                                                                      | Google group                                                                  |
| -------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Developer discussion | [mozilla.dev.accessibility](news://news.mozilla.org/mozilla.dev.accessibility)         | [subscribe/unsubscribe](https://lists.mozilla.org/listinfo/dev-accessibility)     | [Google group](https://groups.google.com/group/mozilla.dev.accessibility)     |
| End user support     | [mozilla.support.accessibility](news://news.mozilla.org/mozilla.support.accessibility) | [subscribe/unsubscribe](https://lists.mozilla.org/listinfo/support-accessibility) | [Google group](https://groups.google.com/group/mozilla.support.accessibility) |
