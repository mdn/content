---
title: Cognitive accessibility
slug: Web/Accessibility/Cognitive_accessibility
page-type: guide
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("Web/Accessibility", 1)}}
</section>

Cognitive accessibility covers accessibility considerations for people with cognition and learning disabilities. This document introduces cognitive accessibility and improving accessibility of the web for people with cognitive and learning differences.

Cognitive impairment refers to a broad range of disabilities, from people with intellectual disabilities who may have the most-limited capabilities, to age-related issues with thinking and remembering. The range includes people with mental illnesses, such as depression and schizophrenia. It also includes people with learning disabilities, such as dyslexia and attention deficit hyperactivity disorder (ADHD).

Though there is a lot of diversity within clinical definitions of cognitive impairments, people with them experience a common set of functional problems. These problems include difficulty with understanding content, remembering how to complete tasks, and confusion caused by inconsistent or non-traditional web page layouts. In this document, we focus on steps developers should take to improve the cognitive accessibility of their websites and applications.

## Overview

Cognitive and intellectual disabilities cover a large spectrum, and may be momentary, temporary, or permanent conditions. For example, dementia and Alzheimer's are permanent cognitive impairments that get progressively worse. Other permanent cognitive impairments include aphasia, speech and language, autism, ADD/ADHD, dyslexia, and dyscalculia.

An example of a temporary cognitive impairment could be people affected by substances such as alcohol or drugs. Another form it can take is depression, such as when mourning the loss of a loved one, or being momentarily saddened by a tweet or video they just saw online. A third example could be sleep deprivation.

It may seem like an overwhelming challenge to address the wide range of cognitive differences, especially when solutions for two different people may be conflicting. One way to handle this is to focus on cognitive skills. Cognitive skills include:

- attention
- memory
- processing speed
- time management
- letters and language
- numbers symbols and math
- understanding and making choices

A solid approach to providing accessible solutions for people with cognitive impairments includes:

- delivering content in more than one way, such as by text-to-speech or by video;
- providing easily-understood content, such as text written using plain-language standards;
- focusing attention on important content;
- minimizing distractions, such as unnecessary content or advertisements;
- providing consistent web page layout and navigation;
- incorporating familiar elements, such as underlined links that are blue when not visited and purple when visited;
- dividing processes into logical, essential steps with progress indicators;
- making website authentication as easy as possible without compromising security; and
- making forms easy to complete, such as with clear error messages and simple error recovery.

## WCAG Guidelines

WCAG, Web Content Accessibility Guidelines, includes several guidelines to improve cognitive accessibility. These guidelines are published by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C), the main international standards organization for the Internet. This group is also responsible for the [Accessible Rich Internet Application (ARIA)](/en-US/docs/Web/Accessibility/ARIA/ARIA_Guides) guidelines.

WCAG are guided by four principles: websites must be Perceivable, Operable, Understandable, and Robust. To this end, they define 17 specific guidelines, of which six are especially relevant for cognitive accessibility.

All of the following guidelines help more than just people with cognitive disabilities. For example, being able to extend the expiration time on an application requiring an authentication code sent to a mobile device via text message helps with the following scenarios:

- People with attention or anxiety disorders.
- People who have a poor short-term memory, or who are multitasking.
- People who are less technologically literate.
- People who have poor wireless reception.
- People who have motor control issues.

## Adaptability

[Guideline 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) states "content should be **adaptable**". Create content that can be presented in different ways without losing information or structure. For example, provide {{glossary('responsive web design', 'responsive')}} layouts, with a single column mobile design.

All information, including structure and relationships conveyed through the presentation, should be available in a form that can be perceived by all users to achieve this goal. For example, the information could be spoken aloud via a narration tool. Making your content capable of being understood by the software is a good way to help ensure it can be used by alternate presentational modes.

## Time

It is important to allow users the time they require to complete tasks. [Guideline 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) states "provide users enough **time** to read and use content".

A **time limit** is any process that happens without user initiation after a set time or on a periodic basis, such as being logged out after 30 minutes or having 15 minutes to make a purchase. People with cognitive disabilities may require more time to read content, or to perform functions such as filling out forms. Solutions include providing users enough additional time to complete tasks or eliminate time constraints altogether.

### Timers

Options for adjusting time requirements include:

- Allowing the user to turn off or adjust the time to at least 10 times the original limit before encountering it.
- Alerting the user and providing a buffer of at least 20 seconds to extend the timeout duration by a factor of 10 with a simple action, such as hitting the space bar.

Provide a toggle on content that allows users to enable a longer session time limit, or no session time limit at all. Examples of timed content include forms, timed reading exercises, and training materials. If the time limit is longer than 20 hours, accommodations are not required.

### Moving, blinking, scrolling

It is important not to distract users, especially ones with cognitive disabilities.

If moving, blinking, scrolling, or auto-updating information starts automatically, lasts more than five seconds, and is presented in parallel with other content, the user must able to pause, stop, hide or control it, unless it's an essential functionality. "Essential" means that removing the moving, blinking, scrolling, or auto-updating information would fundamentally change the meaning of the content and/or functionality, **and** information and functionality cannot be achieved in another way that would conform. This includes animated gifs, if the gif animates for more than 5 seconds.

Additional timing criteria to consider are:

- People who have cognitive or language limitations may need more time to read and to understand. For improved usability remove any time limit. Timed content should also be avoided, with exceptions for non-interactive synchronized media and real-time events.
- People with attention deficit disorders should be able to focus on content without distractions. The user should be able to postpone or suppress interruptions, except situations involving alerting a person to an emergency. This provides access to people with cognitive disabilities by enabling them to focus on the main purpose of the content. Enable the user to postpone content updates by providing a way to request content updates rather than updating automatically. Also, enable a way to make nonessential alerts optional.
- Ensure that people can continue an activity without loss of data after re-authenticating an expired session, for example, saving the state of a questionnaire. Make sure to save data in such a way that it can be modified after a user re-authenticates. Before re-authenticating, encode the data as hidden or encrypted.
- Providing warnings about inactivity that could result in data loss. When a timeout is used, tell people exactly how much time will cause the session to time out and result in lost data. The exception to this is preserving data for more than 20 hours when no actions are taken.

## Navigation

[Guideline 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) states "provide ways to help users navigate, find content, and determine where they are," and provides 10 guidelines to ensure the site is navigable and content is findable:

### Include a `<title>`

Make sure to include a {{HTMLElement('title')}} for the document, as titles provide a quick and easy to reference description of the screen's main point. People with cognitive disabilities, limited short-term memory, and reading disabilities all benefit from being able to identify the purpose of content this way.

### Heading and labels

Include clear and descriptive headings so users can easily find information and understand relationships between different content sections. Descriptive labels help users identify specific components within the content. People who read slowly and people with limited short-term memory benefit when section titles make it possible to predict what each section contains.

### Section headings

Headings help define overall organization of page content. They help facilitate navigation through page content sections, and provide a mechanism to aid comprehension. Examples of headings include chapters, sections and subsections of content, and so on.

Headings are more obvious navigational aids compared to other methods to identify page content sections (borders, whitespace, horizontal rules, etc.).

### Multiple ways to find content

Different users prefer different methods of finding information, so it is important to provide multiple ways for users to locate content on your site.

Providing more than one way to navigate your site can help people find information faster. Some users may prefer a table of contents, site map, or search functionality rather than reading and traversing through several pages to find what they need. Others may prefer to explore the site in a sequential manner, moving from page to page in order to best understand the site's layout, content, and concepts.

### Ability to bypass blocks of content

Providing a mechanism, such as a [skip link](/en-US/docs/Web/HTML/Element/a#skip_links), to bypass blocks of content that are repeated on multiple web pages.

### Focus order makes sense

The order of focus for interactive elements should make sense. To achieve this, the DOM order should match the visual order, which in turn should match the tabbing order. If the tab order jumps around, especially in a way that does not match the visual order when navigating with a keyboard, users can become disoriented.

### Focused elements should be visibly focused

When a user navigates using a keyboard, the UI should make it obvious which element currently has focus. Don't alter or remove the browser's default [`:focus`](/en-US/docs/Web/CSS/:focus) styling, unless you're making focus even more obvious.

### Link text conveys meaning

The link's text should clearly and concisely communicate what the user should expect to be navigated to next if they choose to activate it. Poorly phrased link text may confuse users as to its purpose or destination.

Some forms of assistive technology allow users to navigate by lists of all the links present on the page. Links will be removed from the context of their surrounding non-link content, making the need for understandable link text even more important. An example of a poor experience is a page full of links whose text reads, "Click here". Without indicating where "here" will take you, the link's purpose is unclear.

For screen readers, it is vital that linked text describes the purpose of each link. If you have added content to links for screen readers, and that content is verbose and potentially confusing to sighted readers, consider clipping the added text to visually hide it from those not using assistive technologies.

### Current location is available

Users should be able to orient themselves within a site or application. This is especially important and helpful for people with short attention spans who may become confused when following a long series of navigation steps.

All users benefit from information about where they are in a site's hierarchy, especially for sites or applications with large amounts of content or many subsections. [Breadcrumbs](/en-US/docs/Glossary/Breadcrumb), [site maps](/en-US/docs/Glossary/Site_map), and identifying the current page in the navigation as "current" are all techniques that help communicate the current location.

## Readability

[Guideline 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) states "make text content readable and understandable". For some users, it is difficult to infer the meaning of a word or phrase from context, especially when the word or phrase is used in an unusual way, or has been given a specialized meaning.

For these users, the ability to read and understand may depend on the availability of specific definitions or the expanded forms of acronyms or abbreviations. Some users may experience great difficulty in recognizing written words yet they understand extremely complex and sophisticated documents when the text is read aloud, or when key processes and ideas are illustrated visually.

### Declare the language of the page and any content not in that main language

The language of every page must be declared by using the [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attribute on the {{HTMLElement('html')}} element. Include the `lang` attribute again on text that is in a language other than the main language of the document.

Proper use of `lang` allows some screen readers to announce the text properly when converting it into synthetic speech. It also helps people who use text-to-speech software.

### Define unusual words and word usage

Some disabilities make it difficult to understand nonliteral word usage, such as idioms, colloquialisms, and specialized jargon. Non-native language speakers may also struggle with these terms. If a word or phrase has a unique meaning, in the document provide a definition inline or linked, within a glossary, or to an online dictionary. If a word or phrase is used to mean more than one thing, define each use.

### Define abbreviations

Abbreviations can be confusing for people who:

- Have difficulty decoding words.
- Have limited memory.
- Have difficulty using context to aid understanding.
- Rely on screen magnifiers (which often reduce contextual cues).

Provide an expanded form of the abbreviation the first time it is used, followed by the abbreviation placed within an {{HTMLElement('abbr')}} element. If an abbreviation has no expanded form, or is an abbreviation for a word that is not in the document's main language (such as Latin), explain its meaning. Also, consider using [ruby text](/en-US/docs/Web/HTML/Element/ruby) for initialism (pronunciation of acronyms).

### Reading level

Content should be written as clearly and as possible. A good rule to go by is to make content simple enough that it can be understood the first time. Methods to achieve this include:

- Using short, simple words.
- Writing short sentences.
- Using active voice in the present tense.
- Using correct grammar and spelling.

It helps users with cognitive disabilities to provide a text summary (sometimes referred to as a TL;DR, or "too long; didn't read") at a low reading level. Another technique you can use is providing accompanying visuals to help explain ideas, events, and processes.

There are tools that can rate the level of your content. For example, this document has an average grade level of about 11. This means it should be easily understood by a native English speaker aged 16 to 17. Some tools can even provide suggestions to help simplify it.

### Pronunciation

There are multiple techniques that can help teach people how to pronounce words:

- Provide the pronunciation immediately following the word.
- Link to a list of pronunciations.
- Provide a glossary with pronunciation.
- Use the {{HTMLElement('ruby')}} element to illustrate how a word is pronounced.

Providing guidance on how to pronounce words helps many different kinds of people, including those who prefer to read aloud, non-native language speakers, and people who may unfamiliar with the meaning of a term in context.

Another solution is to use glyphs or diacritical marks to illustrate pronunciation. However, if this technique is used, there must be a mechanism to turn it off. Further, it is helpful to link to a guide to the marks being used, as their meaning may not be obvious.

## Predictability

WCAG [Guideline 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) states "make web pages appear and operate in predictable ways". This is a tenet of good user experience design. Consistency is especially important for people with cognitive difficulties. This includes consistency in page layout and predictable interactive components.

### Use activation, not focus to change context

Creating a change in context should be intentional. Because of this, when a UI feature receives [focus](/en-US/docs/Web/API/HTMLElement/focus), it should not trigger further user-facing actions. Rather, users should need to "activate" a feature to trigger the change.

### Change setting based on an active request

Form control operation and data entry should result in predictable behavior. Changes in context can confuse users with cognitive disabilities, and should therefore only occur when it is clear that such a change will happen in response to the user's action.

Changing state should require intentional user action. Examples of this are checking a checkbox, entering data or changing a select option. Also be sure to provide a submit button to initiate the change of context, and describe what will happen before the change is made.

### Keep navigation consistent throughout the site

Keep the navigation order consistent between pages. For example, if you have a navigation bar on multiple pages, make that navigation uniform across the site with the same links in the same location. This doesn't just apply to navigation: present all repeated components in the same relative order each time they appear.

### Provide consistent labeling

Identical functions should have similar labels every time they are utilized. Consistent button labels, alternative text for icons, and iconography for similar interactions and so on, even on different sections of your site, help all your users.

### Be consistent and predictable, and use norms

While unlabeled iconography is not the most effective method of conveying information, keeping the use of the icons (and if labeled, their label text) consistent helps people to understand what the icon represents. Similarly, don't change defaults like the browser's back button. If you need to redirect a user, let the user know about it beforehand.

## Input Assistance

[Guideline 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) helps to ensure accurate data entry, stating "help users avoid and correct mistakes". While we all make mistakes, some people are more likely to make mistakes, less likely to notice a mistake, or have a harder time correcting a mistake once they make one.

Input Assistance guidelines aim to reduce the likelihood that users, especially those with disabilities, make a mistake, and, if they do make a mistake, increase the likelihood that they see and comprehend the error message and can successfully fix any errors.

### Convey automated error detection

Users need to be alerted to the error and informed of what is wrong. If there is client side error detection, observe the following guidelines to make the error as effective as possible when conveyed to the user:

- The error must be described in the text.
- Ensure that the error message is as specific as possible.
- Provide text to identify incomplete required fields and text descriptions if a value entered is invalid.
- If the error prevented a form submission, focus on the error. If multiple errors are present, provide a summary, with each error linking to the related input.
- Include text along with use of icons, images, color and so on. Some people have difficulty understanding the meaning of icons and other visual cues.
- Other people may have difficulty understanding the text version of your error message. For these people, also provide things like icons and colors.
- Also, provide feedback on when there is a successful form submission.

### Provide instructions for user input

Start the form with text instructions on how to operate it. Include labels or instructions when users need to input information, using the {{HTMLElement('label')}}, {{HTMLElement('fieldset')}}, and {{HTMLElement('legend')}} elements to do so.

Labels should be descriptive and positioned close to the input they relate to. When requiring a specific format for input, provide an example formatted in the proper way. Additionally, consider performing server-side validation to help format input data, to aid in the ease of user input.

If a form control is required, indicate it both visually and [via code](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required). If a form control changes context, describe what will happen in a way that the user will understand it before they cause the context change to happen.

### Error Suggestion

Provide suggested input to the user if an input error is automatically detected and suggestions for correction are known (unless doing so would jeopardize the security or purpose of the content).

### Prevent catastrophes

For submissions that cause, or can lead to, legal, financial, or other significant consequences, ensure that the submissions can be reviewed, confirmed, and/or are reversible.

Data entered by the user should be checked for errors before submission, and the user should be given the opportunity to correct them. The user should be able to review, confirm, and correct information before final submission. Also, be sure to include a confirmation checkbox in addition to a submit button.

If a submission causes a legal or financial transaction to occur, provide a stated time within which the request can be amended or canceled by the user.

### Provide help

Context-sensitive help should be made available. If a form requires text input, provide form instructions describing the purpose and the necessary input. Include spell checking and suggestions for long-form text input, as well as links to help and support material. If a specific data format is expected for input, provide an example.

## Notes

The above are good design practices. They will benefit everyone.

- Many people with cognitive impairments also have physical disabilities. Websites must conform with the W3C's [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/).
- The W3C's [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) produces web accessibility guidelines for people with cognitive impairments.
- WebAIM has a [Cognitive page](https://webaim.org/articles/cognitive/) of relevant information and resources.
- The United States Centers for Disease Control estimate that, as of 2018, 1 in 4 U.S. citizens have a disability and, of them, [cognitive impairment is the most common for young people](https://www.cdc.gov/media/releases/2018/p0816-disability.html).
- In the U.S., "intellectual disabilities" used to be called "mental retardation". In the U.K., "intellectual disabilities" is commonly called "learning disabilities" or "learning difficulties".

## See also

- [Accessibility Guidelines](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [What is accessibility](/en-US/docs/Learn/Accessibility/What_is_accessibility)
- [Accessibility for seizure disorders](/en-US/docs/Web/Accessibility/Seizure_disorders)
- [Understanding WCAG Guidelines](/en-US/docs/Web/Accessibility/Understanding_WCAG)
- [Accessibility overview](/en-US/docs/Learn/Accessibility)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), including [cognitive accessibility guidelines](#wcag_guidelines).
- [CThe W3Cs cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WebAIM Cognitive information](https://webaim.org/articles/cognitive/)
- [CDC information on disabilities.](https://www.cdc.gov/media/releases/2018/p0816-disability.html)
