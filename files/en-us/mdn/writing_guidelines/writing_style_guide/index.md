---
title: Writing style guide
slug: MDN/Writing_guidelines/Writing_style_guide
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

This writing style guide describes how content should be written, organized, spelled, and formatted on MDN Web Docs.

These guidelines are for ensuring language and style consistency across the website. That said, we are more interested in content rather than its formatting, so don't feel obligated to learn the entire writing style guide before contributing. Do not be upset or surprised, however, if another contributor later edits your work to conform to this guide. The reviewers might also point you to this style guide when you submit a content pull request.

> **Note:** The language aspects of this guide apply primarily to English-language documentation. Other languages may have (and are welcome to create) their own style guides. These should be published as subpages of the respective localization team's page. However, this guide should still be consulted for formatting and organizing content.

After listing the general writing guidelines, this guide describes the recommended the writing style for MDN Web Docs and then how to format different components on a page, such as lists and titles.

## General writing guidelines

The goal is to write pages that include all the information that readers may need for understanding the topic at hand. Following are some recommendations to achieve this.

### Consider your target audience

Keep the target audience for the content you are writing in mind. For example, a page on advanced network techniques likely doesn't need to go into as much detail about basic networking concepts as the typical page on networking. Keep in mind that these are guidelines. Some of these tips may not apply in every case.

### Consider the three Cs of writing

The three Cs of good writing are writing clearly, concisely, and consistently.

- **Clear**: Ensure that your writing is clear and simple. In general, use active voice and unambiguous pronouns. Write short sentences, sticking to one idea per sentence. Define new terms, keeping the target audience in, before using them.
- **Concise**: When writing any document, it's important to know how much to say. If you provide excessive detail, the page becomes tedious to read and it will rarely be used.
- **Consistent**: Ensure you use the same verbiage consistently throughout the page and across multiple pages.

### Include relevant examples

In general, add examples or real-life scenarios to better explain the content you are writing. This helps readers to understand conceptual and procedural information in a more tangible and practical way.

You should use examples to clarify what every parameter is used for and to clarify any edge cases that may exist.
You can also use examples to demonstrate solutions for common tasks and solutions to problems that may arise.

### Provide a descriptive introduction

Make sure that the opening paragraph(s) before the first heading adequately summarizes the information that the page will cover and perhaps what readers will be able to achieve after going through the content. This way a reader can determine quickly whether the page is relevant to their concerns and desired learning outputs.

In a guide or tutorial, the introductory paragraph(s) should inform the reader about the topics that will be covered as well as the prerequisite knowledge the reader is expected to have, if any. The opening paragraph should mention the technologies and/or APIs that are being documented or discussed, with links to the related information, and it should offer hints to situations in which the article's contents might be useful.

- **Example of short introduction** This example of an introduction is far too short. It leaves out too much information, such as what it means exactly to "stroke" text, where the text is drawn, and so forth.

  > **`CanvasRenderingContext2D.strokeText()`** draws a string.

- **Example of long introduction**: This example has an updated introduction, but now it's far too long.
  Too much detail is included, and the text delves too deeply into describing other methods and properties.
  Instead, the introduction should focus on the `strokeText()` method and should refer to the appropriate guides where the other details are described.

  > When called, the Canvas 2D API method **`CanvasRenderingContext2D.strokeText()`** strokes the characters in the specified string beginning at the coordinates specified, using the current pen color.
  > In the terminology of computer graphics, "stroking" text means to draw the outlines of the glyphs in the string without filling in the contents of each character with color.
  >
  > The text is drawn using the context's current font as specified in the context's {{domxref("CanvasRenderingContext2D.font", "font")}} property.
  >
  > The placement of the text relative to the specified coordinates are determined by the context's `textAlign`, `textBaseline`, and `direction` properties.
  > `textAlign` controls the placement of the string relative to the X coordinate specified; if the value is `"center"`, then the string is drawn starting at `x - (stringWidth / 2)`, placing the specified X-coordinate in the middle of the string.
  > If the value is `"left"`, the string is drawn starting at the specified value of `x`.
  > And if `textAlign` is `"right"`, the text is drawn such that it ends at the specified X-coordinate.
  >
  > (…)
  >
  > You can, optionally, provide a fourth parameter that lets you specify a maximum width for the string, in pixels.
  > If you provide this parameter, the text is compressed horizontally or scaled (or otherwise adjusted) to fit inside a space that wide when being drawn.
  >
  > You can call the **`fillText()`** method to draw a string's characters as filled with color instead of only drawing the outlines of the characters.

- **Example of an appropriate introduction**: Here we see a much better overview for the `strokeText()` method.

  > The {{domxref("CanvasRenderingContext2D")}} method **`strokeText()`**, part of the [Canvas 2D API](/en-US/docs/Web/API/Canvas_API),   strokes—that is, draws the outlines of—the characters of a specified string, anchored at the position indicated by the given X and Y   coordinates.
  > The text is drawn using the context's current {{domxref("CanvasRenderingContext2D.font", "font")}}, and is justified and aligned according   to the {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}},   and {{domxref("CanvasRenderingContext2D.direction", "direction")}} properties.
  >
  > For more details and further examples, see {{SectionOnPage("/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Text")}} in the Learning Area as well as our main article on the subject, [Drawing text](/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Use inclusive language

MDN has a wide and diverse audience.
We strongly encourage keeping text as inclusive as possible.
Here are some alternatives to common terms used in documentation:

- Avoid using the terms **master** and **slave** and instead use **main** and **replica**.
- Replace **whitelist** and **blacklist** with **allowlist** and **denylist**.
- **Sanity** should be replaced with **coherence**.
- Instead of **dummy**, use **placeholder**.
- You should not need to use the terms **crazy** and **insane** in documentation; however, if the case arises, consider using **fantastic** instead.

It is best to use gender-neutral language in any writing where gender is irrelevant to the subject matter.
For example, if you are talking about the actions of a specific man, using "he"/"his" is fine; but if the subject is a person of either gender, "he"/"his" isn't appropriate.

Let's look at the following examples:

- **Incorrect**: "A confirmation dialog asks the user if he wants to allow the web page to make use of his webcam."
- **Incorrect**: "A confirmation dialog asks the user if she wants to allow the web page to make use of her webcam."

Both versions are gender-specific. To fix this, use gender-neutral pronouns like so:

- **Correct**: "A confirmation dialog asks the user if they want to allow the web page to make use of their webcam."

> **Note:** MDN Web Docs allows the use of third-person plural, commonly known as "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they).". The gender-neutral pronouns include "they," "them", "their," and "theirs".

Another option is to make the users plural, like so:

- **Correct**: "A confirmation dialog asks the users if they want to allow the web page to make use of their webcams."

The best solution, of course, is to rewrite and eliminate the pronouns:

- **Correct**: "A confirmation dialog requesting the user's permission for webcam access appears."
- **Correct**: "A confirmation dialog box that asks the user for permission to use the webcam appears."

This last example of dealing with the problem is arguably better.
Not only is it grammatically more correct, but removes some of the complexity associated with dealing with genders across different languages that may have wildly different gender rules.
This solution can make translation easier for both readers and translators.

### Write with SEO in mind

While the primary goal of any writing on MDN Web Docs should always be to explain and inform about open web technology so developers can quickly learn to do what they want or to find the little details they need to know in order to perfect their code, it's important that they be able to _find_ the material we write. We can achieve this by keeping Search Engine Optimization ({{Glossary("SEO")}}) in mind while writing.

This section covers the standard practices, recommendations, and requirements for content to help ensure that search engines can easily categorize and index our material to ensure that users can easily reach what they need. The SEO guidelines includes ensuring that each page writers and editors work on is reasonably well-designed, written, and marked up to give search engines the context and clues they need to properly index articles.

The following checklist is good to keep in mind while writing and reviewing content to help ensure that the page and its neighbors will be indexed properly by search engines:

- **Ensure that pages aren't too similar**: If the content on different pages is similar textually, search engines will assume that the pages are about the same thing even if they aren't.
  For example, if an interface has the properties `width` and `height`, it's easy for the text to be surprisingly similar on the two pages documenting these two properties, with just a few words swapped out and using the same example. This makes it hard for search engines to know which is which, and they wind up sharing page rank, resulting in both being harder to find than they ought to be.

  It's important, then, to ensure that every page has its own content. Here are some suggestions to help you accomplish that:

  - **Explain more unique concepts**: Consider use cases where there might be more differences than one would think. For instance, in the case of documenting `width` and `height` properties, perhaps write about the ways horizontal space and vertical space are used differently, and provide a discussion about the appropriate concepts. Perhaps you can mention the use of `width` in terms of making room for a sidebar, while using `height` to handle vertical scrolling or footers. Including information about accessibility issues is a useful and important idea as well.
  - **Use different examples**: Examples in these situations are often even more similar than the body text because the examples may use both (or all) of the similar methods or properties to begin with, thereby requiring no real changes when reused. So throw out the example and write a new one, or at least provide multiple examples, with at least some of them different.
  - **Add descriptions for examples**: Both an overview of what the example does as well as coverage of how it works, in an appropriate level of detail given the complexity of the topic and the target audience, should be included.

  The easiest way to avoid being overly similar is of course to write each article from scratch if time allows.

- **Ensure that pages aren't too short**: If the content on a page is too little (called "thin pages" in SEO parlance), search engines will not catalog such pages accurately (or at all). Overly-short content pages are hard to find. As a guiding principle, ensure that pages on MDN Web Docs are not shorter than around 300 words or so. Don't artificially inflate a page, but treat this guideline as a minimum target length when possible.

  Here are some basic guidelines to help you create pages that have enough content to be properly searchable without resorting to cluttering them up with unnecessary text:

  - **Avoid stubs**: Obviously, if the article is a stub or is missing content, add it. We try to avoid outright "stub" pages on MDN web Docs, although they do exist, but there are plenty of pages that are missing large portions of their content.
  - **Review page structure**: Review the page to ensure that it's structured properly for the [type of page](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types) it is <!--link to be revised-->. Be sure every section that it should have is present and has appropriate content.
  - **Ensure completeness**: Review sections to ensure that no information is missing. Ensure that all parameters listed and explained. Ensure that any exceptions are covered — this is a particularly common place where content is missing.
  - **Ensure all concepts are fully fleshed-out**: It's easy to give a quick explanation of something, but make sure that all the nuances are covered. Are there special cases? Are there any known restrictions that the reader might need to know about?
  - **Add examples**: There should be examples covering all parameters or at least the parameters (or properties, or attributes) that users from the beginner-through-intermediate range are likely to use, as well as any advanced ones that require extra explanation. Each example should be preceded with an overview of what the example will do, what additional knowledge might be needed to understand it, and so forth. After the example (or interspersed among pieces of the example) should be text explaining how the code works. Don't skimp on the details and the handling of errors in examples. Keep in mind that users _will_ copy and paste your example to use in their own projects, and your code _will_ wind up used on production sites! See our [code example guidelines](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) for more useful information. <!--link to be revised-->
  - **Explain use cases**: If there are particularly common use cases for the feature being described, talk about them! Instead of assuming that a user will figure out that the method being documented can be used to solve a common development problem, actually add a section about that use case with an example and text explaining how the example works.
  - **Add image information**: Include proper {{htmlattrxref("alt", "img")}} text on all images and diagrams. This text, as well as captions on tables and other figures, counts because spiders can't crawl images, and so `alt` text tells search engine crawlers what content the embedded media contains.
    > **Note:** It is not recommended to include too many keywords or keywords not related to the feature in an attempt to manipulate search engine rankings; this type of behavior is easy to spot and tends to be penalized.
    > Likewise, **do not** add repetitive, unhelpful material or blobs of keywords within the actual page, in an attempt to improve the page's size and search ranking. This does more harm than good, both to content readability and to our search results.
  - **Focus on topic content**: With Google's Hummingbird update in 2013 <!--do we need to retain this-->, there has been an increasing focus on the use of natural language to convey information. This means that it is far better to write content around the topic of the page than a specific keyword. It is highly likely that there will be many keywords you could include for a given topic; in fact, many SEOs compile a list of 5-100 different keywords (varying between short, medium, and long-tail keywords) to include within their article, depending on the length. Doing so will diversify your wording, leading to less repetition.

## Writing style

Other than writing grammatically correct sentences in English, we recommend you follow these guidelines to keep content consistent across MDN Web Docs.

### Abbreviations and acronyms

An abbreviation is a shortened version of a longer word, while an acronym is a new word created using the first letter of each word from a phrase. This section describes are guidelines for abbreviations and acronyms.

- **Expansions**: On the first mention of a term on a page, expand acronyms that are likely to be unfamiliar to users. When in doubt, expand it—or better yet, link it to the article or [glossary](/en-US/docs/Glossary) entry describing the technology.

  - **Correct**: "XUL (XML User Interface Language) is Mozilla's XML-based language..."
  - **Incorrect**: "XUL is Mozilla's XML-based language..."

- **Capitalization and periods**: Use full capitals and delete periods in all abbreviations and acronyms, including organizations such as "US" and "UN".

  - **Correct**: XUL
  - **Incorrect**: X.U.L.; Xul

- **Latin abbreviations**: You can use common Latin abbreviations (etc., i.e., e.g.) in parenthetical expressions and notes. Use periods in these abbreviations, followed by a comma or other appropriate punctuation.

  - **Correct**: Web browsers (e.g., Firefox) can be used ...
  - **Incorrect**: Web browsers e.g. Firefox can be used ...
  - **Incorrect**: Web browsers, e.g. Firefox, can be used ...
  - **Incorrect**: Web browsers, (eg: Firefox) can be used ...

  In regular text (i.e., text outside of notes or parentheses), use the English equivalent of the abbreviation.

  - **Correct**: ... web browsers, and so on.
  - **Incorrect**: ... web browsers, etc.

  - **Correct**: Web browsers such as Firefox can be used ...
  - **Incorrect**: Web browsers e.g. Firefox can be used ...

  The following table summarizes the meanings and English equivalents of Latin abbreviations:

  | Abbrev | Latin            | English                 |
  | ------ | ---------------- | ----------------------- |
  | cf.    | _confer_         | compare                 |
  | e.g.   | _exempli gratia_ | for example             |
  | et al. | _et alii_        | and others              |
  | etc.   | _et cetera_      | and so forth, and so on |
  | i.e.   | _id est_         | that is, in other words |
  | N.B.   | _nota bene_      | note well               |
  | P.S.   | _post scriptum_  | postscript              |

  > **Note:** Always consider whether it's truly beneficial to use a Latin abbreviation. Some of these are used so rarely that many readers will either confuse or fail to understand their meanings.
  >
  > Also, be sure that _you_ use them correctly if you choose to do so. For example, be careful not to confuse "e.g." with "i.e.", which is a common error.

- **Plurals of abbreviations and acronyms**: For plurals of abbreviations and acronyms, add _s_. Don't use an apostrophe. Ever. Please.

  - **Correct**: CD-ROMs
  - **Incorrect**: CD-ROM's

- **"Versus", "vs.", and "v."**: The contraction "vs." is preferred.

  - **Correct**: this vs. that
  - **Incorrect**: this v. that
  - **Incorrect**: this versus that

### Capitalization

Use standard English capitalization rules in body text, and capitalize "World Wide Web." It is acceptable to use lower case for "web" (used alone or as a modifier) and "internet".

> **Note:** This guideline is a change from a previous version of this guide, so you may find many instances of "Web" and "Internet" on MDN.
> Feel free to change these as you are making other changes, but editing an article just to change capitalization is not necessary.

Keyboard keys should use sentence-style capitalization, not all-caps capitalization.
For example, "<kbd>Enter</kbd>" not "<kbd>ENTER</kbd>".
The only exception is that you can use "<kbd>ESC</kbd>" to abbreviate the "<kbd>Escape</kbd>" key.

Certain words should always be capitalized (such as trademarks which include capital letters), or words derived from the name of a person (unless it's being used within code, and code's syntax requires lower-casing).
Some examples include:

- Boolean (named for English mathematician and logician [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (a trademark of Oracle Corporation, it should always be written as trademarked)
- Python, TypeScript, Django, and other programming languages and framework names

### Contractions

Our writing style tends to be casual, so you should feel free to use contractions (e.g., "don't", "can't", "shouldn't"), if you prefer.

### Numbers and numerals

- **Commas**: In running text, use commas only in five-digit and larger numbers.

  - **Correct**: 4000; 54,000
  - **Incorrect**: 4,000; 54000

- **Dates**: For dates (not including dates in code samples), use the format "January 1, 1990".

  - **Correct**: February 24, 2006
  - **Incorrect**: February 24th, 2006; 24 February, 2006; 24/02/2006

  Alternately, you can use the YYYY/MM/DD format.
  - **Correct**: 2006/02/24
  - **Incorrect**: 02/24/2006; 24/02/2006; 02/24/06

- **Decades**: Use the format "1990s". Don't use an apostrophe.

  - **Correct**: 1990s
  - **Incorrect**: 1990's

- **Plurals of numerals**: Add "s". Don't use an apostrophe.

  - **Correct**: 486s
  - **Incorrect**: 486's

### Pluralization

Use English-style plurals, not the Latin- or Greek-influenced forms.

- **Correct**: syllabuses, octopuses
- **Incorrect**: syllabi, octopi

### Apostrophes and quotation marks

Do not use "curly" quotes and quotation marks. On MDN Web Docs, we only use straight quotes and apostrophes. This is because we need to choose one or the other for consistency. If curly quotes or apostrophes make their way into code snippets, even inline ones, readers may copy and paste them, expecting them to function (which they will not).

- **Correct**: Please don't use "curly quotes."
- **Incorrect**: Please don&rsquo;t use &ldquo;curly quotes.&rdquo;

### Commas

The list below describes some of the common situations where we need to be aware of the comma usage rules:

- **After introductory clauses**: An introductory clause is a dependent clause, usually found at the beginning of a sentence. Use a comma after an introductory clause to separate it from the following independent clause.
  - Example 1:
    - **Correct**: "In this example, you will see how to use a comma."
    - **Incorrect**: "In this example you will see how to use a comma."
  - Example 2:
    - **Correct**: "If you are looking for guidelines, you have come to the right place."
    - **Incorrect**: "If you are looking for guidelines you have come to the right place."
  - Example 3:
    - **Correct**: "On mobile platforms, you tend to get a numeric keypad for entering data."
    - **Incorrect**: "On mobile platforms you tend to get a numeric keypad for entering data."

- **Before conjunctions**: The serial comma (also known as "the Oxford comma") is the comma that appears before the conjunction in a series of three or more items. On MDN Web Docs, we use the serial comma. Commas also separate each item of the list.

  - **Correct**: "I will travel on trains, planes, and automobiles."
  - **Incorrect**: "I will travel on trains, planes and automobiles."

  Don't use comma before "and" and "or" in a list that contains two items.

  - **Correct**: "My dog is cute and smart."
  - **Incorrect**: "My dog is cute, and smart."

  Use comma before the conjunctions "and", "but", and "or" if they join two independent clauses. However, if the sentence is becoming very long or complex with the conjunction, consider rewriting it as two sentences.
  - Example 1:
    - **Correct**: "You can perform this step, but you need to pay attention to the file setting."
    - **Incorrect**: "You can perform this step but you need to pay attention to the file setting."
  - Example 2:
    - **Correct**: "My father is strict but loving."
    - **Incorrect**: "My father is strict, but loving."

- **Before "that" and "which"**: A restrictive clause is essential for the meaning of the sentence and does not need commas to be set off from the remaining sentence. A restrictive clause is usually introduced by "that" and **should not** be preceded by a comma.

  - **Correct**: "We have put together a course that includes all the essential information you need to work towards your goal."
  - **Incorrect**: "We have put together a course, that includes all the essential information you need to work towards your goal."

  A nonrestrictive clause provides additional information and is not essential to the meaning of the sentence. A nonrestrictive clause is usually introduced by "which" and should be preceded by a comma.

  - **Correct**: "You write a policy, which is an allowed list of origins for each feature."
  - **Incorrect**: "You write a policy which is an allowed list of origins for each feature."

- **Before "such as"**: If "such as" is part of a nonrestrictive clause and the remaining sentence is an independent clause, use comma before "such as".

  - **Correct**: "The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them."
  - **Incorrect**: "The Array object has methods for manipulating arrays in various ways such as joining, reversing, and sorting them."

  The example below shows when not to use comma with "such as". Here the clause containing "such as" is essential for the meaning of the sentence.

  - **Correct**: "Web applications are becoming more powerful by adding features such as audio and video manipulation and allowing access to raw data using WebSockets."
  - **Incorrect**: "Web applications are becoming more powerful by adding features, such as audio and video manipulation, and allowing access to raw data using WebSockets."

### Hyphens

Hyphenated compounds should be used when the last letter of the prefix is a vowel and is the same as the first letter of the root.

- **Correct**: email, re-elect, co-op
- **Incorrect**: e-mail, reelect, coop

### Spelling

Use American-English spelling.

In general, use the first entry at [Dictionary.com](https://www.dictionary.com/), unless that entry is listed as a variant spelling or as being primarily used in a non-American form of English.
For example, if you [look up "behaviour"](https://www.dictionary.com/browse/behaviour)(with a additional _u_ added to the American standard form), you find the phrase "Chiefly British" followed by a link to the American standard form, ["behavior"](https://www.dictionary.com/browse/behavior).
Do not use variant spellings.

- **Correct**: localize, behavior
- **Incorrect**: localise, behaviour

### Terminology

These are our recommendations for using certain technical terms:

- **HTML elements**: Use "elements" to refer to HTML and XML elements, rather than "tags". In addition, they should almost always be wrapped in "<>", and should be in the {{HTMLElement("code")}} style.

  When you reference a given element for the first time in a section, you should use the [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs) <!--this link should point to the macro's documentation--> macro to create a link to the documentation for the element (unless you're writing within that element's reference document page).

  - **Correct**: the {{HTMLElement("span")}} element
  - **Incorrect**: the span tag

- **Parameters vs. arguments**: The preferred term on MDN Web Docs is **parameters**. Please avoid the term "arguments" for consistency whenever possible.

- **User interface actions**: In task sequences, describe user interface actions using the imperative mood. Identify the user interface element by its label and type.

  - **Correct**: "Click the Edit button."
  - **Incorrect**: "Click Edit."

### Voice

While the active voice is preferred, the passive voice is also acceptable, given the informal feel of our content.
Try to be consistent, though.

## Page components

This section lists the guidelines to follow for components such as headings, notes, links, and examples that commonly appear on a page.

### Code examples

A page on MDN Web Docs can contain more than one code example. The following list presents some recommended practices when writing a code example for MDN Web Docs:

- Each piece of example code should include:
  - **Heading**: A short `###` (`<h3>`) heading to describe the scenario being demonstrated through the code example. For example, "Using offset printing" and "Reverting to style in previous layer".
  - **Description**: A short description preceding the example code that states the specifics of the example to which you want to draw reader's attention. For example, "In the example below, two cascade layers are defined in the CSS, `base` and `special`."
  - **Result explanation**: An explanation after the example code that describes the result and how the code works.
- In general, the code example should not only demonstrate the syntax of the feature and how it is used, but also highlight the purpose and situations in which a web developer might want or need to use the feature.
- If you are working with a large piece of example code, it may make sense to break it up into smaller logical parts so that they can be described individually.
- When adding [live samples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples) <!--link to be revised-->, it's helpful to be aware that all of the {{HTMLElement("pre")}} blocks in the area that contains the sample are concatenated together before running the example, which lets you break any or all of the HTML, CSS, and JavaScript into multiple segments, each optionally with its own descriptions, headings, and so forth. This makes documenting code incredibly powerful and flexible.

To learn about how to style or format code examples for MDN Web Docs, see [Guidelines for styling code examples](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide). <!--link to be revised-->

### External links

External links are allowed on MDN Web Docs in specific situations. Use the guidelines described in this section to decide whether or not it is okay to include an external link on MDN Web Docs. Your pull request to add an external link will be rejected if it does not meet the guidelines described here.

In general, if you're considering adding an external link, you need to ensure that there is minimal risk of the following:

- Broken or outdated links
- Appearance of endorsement, especially for commercial products or services
- Attempt to use MDN Web Docs to distribute spam

> **Note:** Before adding an external link, consider cross-referencing content within MDN Web Docs. Internal links are easier to maintain and make the entirety of MDN Web Docs more valuable to readers.

- **Good external links**: Good external links take readers to resources that are relevant, durable, and widely trusted. You should prefer adding links to external content that is:

  - Unique or indispensable (e.g., an IETF RFC)
  - Necessary for attribution, citation, or acknowledgement (e.g., as part of a Creative Commons attribution)
  - More likely to be maintained for the topic than incorporating such content on MDN Web Docs itself (e.g., a vendor's release notes)
  - Open source or community-driven, like MDN Web Docs itself

- **Poor external links**: Poor external links lack relevance, maintainability, accessibility, or otherwise put up barriers to readers. Avoid adding links to external content that is:

  - Generic or non-specific (e.g., a vendor's home page, instead of the related documentation)
  - Ephemeral or unmaintained (e.g., a one-time announcement)
  - Self-linking or self-promotional (e.g., the author's own work off of MDN Web Docs)
  - Paywalled (e.g., an expensive course beyond the reach of hobbyists, students, or readers living in lower-income countries)
  - Inaccessible (e.g., a video without captions)

- **Links that are self-promotional or spam**: While a personal blog post, conference talk, or GitHub repository has value, linking to your own resources can create the appearance of a conflict of interest. Think twice before linking to resources that you have a business or personal connection with.

  > **Note:** If you have a business or personal relationship with the target of a link, you must disclose that relationship in your pull request. Failure to do so may imperil your continued participation with MDN Web Docs.

  Sometimes such links are relevant and appropriate. For example, if you're the editor of a specification and you're contributing to documentation related to that specification, then linking to that specification is expected and acceptable. But you must disclose the relationship between you and the link.

### Heading levels

When a new paragraph starts a new section, a header should be added.
Use these markdown heading levels in decreasing order without skipping levels: `##`, then `###`, and then `####`; these translate to the [HTML heading tags](/en-US/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>`, and `<h4>` tags, respectively.

`##` is the highest level allowed because `#` is reserved for the page title.
We recommend to not add more than three levels of headers. If you feel the need for adding the fourth header level, consider breaking up the article into several smaller articles with a landing page. Alternatively, see if you can present the information in bulleted points to avoid adding level four header.

Keep the following dos and don'ts in mind while creating headings for subsections:

- **Don't create single subsections.** Don't subdivide a topic into a single subtopic.
  It's either two subheadings or more or none at all.
- **Don't use styles, classes, or macros within headings.** This includes the {{HTMLElement("code")}} element for code terms.
  So don't format the heading as "Using the `SuperAmazingThing` interface".
  It should instead just be "Using the SuperAmazingThing interface".
- **Don't create "bumping heads".** These are headings followed immediately by a subheading, with no content text in between them.
  This doesn't look good and leaves readers without any explanatory text at the beginning of the outer section.

### Images and other media

If you include images or other media in on a page, follow these guidelines:

- Make sure the media license allows you to use them. Try to use media that has a very permissive license such as [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/) or at least one that is compatible with our general content license —  [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- For images, run them through <https://tinypng.com> or <https://imageoptim.com> to reduce the page weight.
- For `SVG`, run the code through [SVGOMG](https://jakearchibald.github.io/svgomg/), and ensure that the `SVG` file has an empty line at the end of the file.
- When displaying icons on a page (e.g., via {{cssxref("background-image")}}), use icons from the [mdn-dinocons](https://github.com/mdn/mdn-dinocons) repository, where appropriate, and try to match their style in other cases. <!--this is not valid anymore, the repo has been archived. do we want to point readers to another resource?-->

### Lists

Lists should be formatted and structured consistently across all pages.
Individual list items should be written with suitable punctuation, regardless of the list format.
However, depending on the type of list you are creating, you will want to adjust your writing as described in the sections below. In both the cases, include a lead-in sentence that describes the information in the list.

- **Bulleted lists**: Bulleted lists should be used to group related pieces of concise information. Each item in the list should follow a similar sentence structure. Phrases and sentences in bulleted lists should include standard punctuation. A period must appear at the end of each sentence in a bulleted list, including the item's final sentence, just as would be expected in a paragraph.

  This is an example of a correctly structured bulleted list:

  > In this example, we should include:
  >
  > - A condition, with a brief explanation.
  > - A similar condition, with a brief explanation.
  > - Yet another condition, with some further explanation.

  Notice how the same sentence structure repeats from bullet to bullet. In this example, each bullet point states a condition followed by a comma and a brief explanation, and each item in the list ends with a period.

- **Numbered lists**: Numbered lists are used primarily to enumerate steps in a set of instructions. Because instructions can be complex, clarity is a priority, especially if the text in each list item is lengthy. As with bulleted lists, follow standard punctuation usage. This is an example of a correctly structured numbered list:

  > In order to correctly structure a numbered list, you should:
  >
  > 1. Open with a heading or brief paragraph to introduce the instructions. It's important to provide the user with context before beginning the instructions.
  > 2. Start creating your instructions, and keep each step in its own numbered item.
  >   Your instructions may be quite extensive, so it is important to write clearly and use correct punctuation.
  > 3. After you have finished your instructions, follow the numbered list with a brief closing summary or explanation about the expected outcome upon completion.

  The following is an example of writing a closing explanation for the above list:
  > We have created a short numbered list that provides instructive steps to produce a numbered list with the correct formatting.

  Notice how the items in numbered lists read like short paragraphs. Because numbered lists are routinely used for instructional purposes or to walk someone through an orderly procedure, be sure to keep each item focused: one numbered item per step.

### Subpages

When you need to add some articles about a topic or subject area, you will typically do so by creating a landing page, then adding subpages for each of the individual articles.
The landing page should open with a paragraph or two describing the topic or technology, then provide a list of the subpages with descriptions of each page.
You can automate the insertion of pages into the list using some macros we've created.

For example, consider the [JavaScript](/en-US/docs/Web/JavaScript) guide, which is structured as follows:

- [JavaScript/Guide](/en-US/docs/Web/JavaScript/Guide) – Main table-of-contents page
- [JavaScript/Guide/JavaScript Overview](/en-US/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)

Try to avoid putting your article at the top of the hierarchy, which slows the site down and makes search and site navigation less effective.

### Slugs

The page title, which is displayed at the top of the page, can be different from the page "slug", which is the portion of the page's URL following `<locale>/docs/`. Keep the following guidelines in mind when defining a slug:

- Slugs should be kept short. When creating a new level of hierarchy, the new level's component in the slug should just be a word or two.
- Slugs should use an underscore for a multi-word component, such as `Getting_started` in `/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started`.
- Follow sentence casing in slugs as well for each component, such as `Getting_started` in the previous example.

### Titles

Page titles are used in search results and are also used to structure the page hierarchy in the breadcrumb list at the top of the page. A page title can be different from the page "slug", as explained in the [Slugs](#slugs) section.

Keep the following guidelines in mind when writing titles:

- **Capitalization style**: On MDN Web Docs, page titles and section headings should use sentence-style capitalization (only capitalize the first word and proper nouns) rather than headline-style capitalization:

  - **Correct**: "A new method for creating JavaScript rollovers"
  - **Incorrect**: "A New Method for Creating JavaScript Rollovers"

  We have many older pages that were written before this style rule was established. Feel free to update them as needed if you like. We're gradually getting to them.

- **General guidelines**: Deciding what you want to document and how you will structure that content is one of the first steps in writing. Writing a table of contents can help you decide how you want to order information. Cover simple concepts first and then go on to more complicated and advanced concepts. Cover conceptual information first and then move on to action-oriented topics.

  Keep the following guidelines in mind when writing titles for a page and sections or subsections:

  - **Go higher to lower**: As stated in the [Heading levels](#heading_levels) section, go from higher `##` to lower `####`, without skipping levels. Use higher level headings for broader introductory titles, and use more specific titles as you progress to lower-level headings.
  - **Group logically**: Make sure all related subsections are grouped together logically under a higher level heading. Naming titles of various sections can help you in this exercise.
  - **Keep titles short**: Shorter titles are easier to scan in text and in table of contents.
  - **Keep titles specific**: Use the title to convey the specific information that will be covered in the section. For example, for a section introducing HTML elements, use the title "HTML elements" instead of "Introduction" or "Overview".
  - **Keep titles focussed**: Use the title to convey one objective—a single idea or a concept that will be covered in that section. For that purpose, as far as possible, try not to use the conjunction "and" in a title.
  - **Use parallel construction**: Use similar language for titles at the same heading level. For example, if a `###` heading level title uses gerunds, that is, words ending in "-ing", such as "Installing", then try to write all titles at that heading level using gerunds. If a title starts with an imperative verb, such as "Use", "Configure", then write all titles at that heading level starting with an imperative verb.
  - **Avoid common term in lower-level heading**: Do not repeat the text in the title of a higher-level heading in lower-level titles. For example, in a section titled "Commas", name the title of a subsection "After introductory clauses" instead of "Commas after introductory clauses".
  - **Don't begin with article**: Avoid starting titles with articles "a", "an", or "the".
  - **Add lead-in information**: After a title, add some introductory text to explain what will be covered in the section.

## See also

### Preferred style guides

If you have questions about usage and style not covered here, we recommend referring to the [Microsoft Writing Style Guide](https://docs.microsoft.com/style-guide/welcome/)—or, failing that, the [Chicago Manual of Style](https://www.amazon.com/Chicago-Manual-Style-16th/dp/0226104206).
An [unofficial crib sheet for the Chicago Manual of Style](https://faculty.cascadia.edu/cma/HIST148/cmscrib.pdf) is available online.

### Preferred dictionary

For questions of spelling, please refer to [Dictionary.com](https://www.dictionary.com/).
The spelling checker for this site uses American English.
Please do not use variant spellings (e.g., use _color_ rather than _colour_).

We will be expanding the guide over time, so if you have specific questions that aren't covered in this document, [please get in touch](/en-US/docs/MDN/Community/Contributing/Getting_started#step_4_ask_for_help), so we know what should be added.

### Language, grammar, and spelling

If you're interested in improving your writing and editing skills, you may find the following resources to be helpful.

- [On Writing Well](https://www.amazon.com/Writing-Well-30th-Anniversary-Nonfiction/dp/0060891548), by William Zinsser (Amazon link)
- [Style: The Basics of Clarity and Grace](https://www.amazon.com/Style-Basics-Clarity-Grace-4th/dp/0205830765/), by Joseph Williams and Gregory Colomb (Amazon link)
- [Common Errors in English](https://brians.wsu.edu/common-errors-in-english-usage/)
- [English Grammar FAQ](https://www-personal.umich.edu/~jlawler/aue.html) (alt.usage.english)
- [Bob's quick guide to the apostrophe, you idiots](https://www.angryflower.com/bobsqu.gif) (funny)
- [Merriam-Webster's Concise Dictionary of English Usage](https://www.amazon.com/Merriam-Websters-Concise-Dictionary-English-Usage/dp/B004L2KNI2) (Amazon link): Scholarly but user-friendly, evidence-based advice; very good for non-native speakers, especially for preposition usage.
- [English Language and Usage StackExchange](https://english.stackexchange.com/): Question and answer site for English language usage.
