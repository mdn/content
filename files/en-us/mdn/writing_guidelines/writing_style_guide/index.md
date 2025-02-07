---
title: Writing style guide
short-title: Style guide
slug: MDN/Writing_guidelines/Writing_style_guide
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This writing style guide describes how content should be written, organized, spelled, and formatted on MDN Web Docs.

These guidelines are for ensuring language and style consistency across the website. That said, we are more interested in content rather than its formatting, so don't feel obligated to learn the entire writing style guide before contributing. Do not be upset or surprised, however, if another contributor later edits your work to conform to this guide. The reviewers might also point you to this style guide when you submit a content pull request.

> [!NOTE]
> The language aspects of this guide apply primarily to English-language documentation. Other languages may have (and are welcome to create) their own style guides. These should be published as subpages of the respective localization team's page. However, this guide should still be consulted for formatting and organizing content.

After listing the general writing guidelines, this guide describes the recommended writing style for MDN Web Docs and then how to format different components on a page, such as lists and titles.

## General writing guidelines

The goal is to write pages that include all the information that readers may need for understanding the topic at hand.

The following subsections provide the recommendations to achieve this:

- [Consider your target audience](#consider_your_target_audience)
- [Consider the three Cs of writing](#consider_the_three_cs_of_writing)
- [Include relevant examples](#include_relevant_examples)
- [Provide a descriptive introduction](#provide_a_descriptive_introduction)
- [Use inclusive language](#use_inclusive_language)
- [Write with SEO in mind](#write_with_seo_in_mind)

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

- **Example of short introduction**: This example of an introduction is far too short. It leaves out too much information, such as what it means exactly to "stroke" text, where the text is drawn, and so forth.

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

  > The {{domxref("CanvasRenderingContext2D")}} method **`strokeText()`**, part of the [Canvas 2D API](/en-US/docs/Web/API/Canvas_API), strokes (draws the outlines of) the characters of a specified string, anchored at the position indicated by the given X and Y coordinates.
  > The text is drawn using the context's current {{domxref("CanvasRenderingContext2D.font", "font")}}, and is justified and aligned according to the {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}, and {{domxref("CanvasRenderingContext2D.direction", "direction")}} properties.
  >
  > For more details and examples, see the [Text](/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) section on the Drawing graphics page as well as our main article on the subject, [Drawing text](/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

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

> [!NOTE]
> MDN Web Docs allows the use of third-person plural, commonly known as "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they).". The gender-neutral pronouns include "they," "them", "their," and "theirs".

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

This section covers the standard practices, recommendations, and requirements for content to help ensure that search engines can easily categorize and index our material to ensure that readers can easily find what they need. The SEO guidelines include ensuring that each page that writers and editors work on is reasonably well-designed, written, and marked up to give search engines the context and clues they need to properly index the articles.

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
  - **Review page structure**: Review the page to ensure that it's structured properly for its [page type](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types) it is. Check to make sure that all sections are present and have appropriate content.
  - **Ensure completeness**: Review sections to ensure that no information is missing. Ensure that all parameters are listed and explained. Ensure that any exceptions are covered — this is a particularly common place where content is missing.
  - **Ensure all concepts are fully fleshed-out**: It's easy to give a quick explanation of something, but make sure that all the nuances are covered. Are there special cases? Are there any known restrictions that the reader might need to know about?
  - **Add examples**: There should be examples covering all parameters or at least the parameters (or properties, or attributes) that users from the beginner-through-intermediate range are likely to use, as well as any advanced ones that require extra explanation. Each example should be preceded with an overview of what the example will do, what additional knowledge might be needed to understand it, and so forth. After the example (or interspersed among pieces of the example) should be text explaining how the code works. Don't skimp on the details or the handling of errors in examples. Keep in mind that users _will_ copy and paste your example to use in their own projects, and your code _will_ wind up used on production sites! See our [code example guidelines](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) for more useful information.
  - **Explain use cases**: If there are particularly common use cases for the feature being described, talk about them! Instead of assuming that a user will figure out that the method being documented can be used to solve a common development problem, actually add a section about that use case with an example and text explaining how the example works.
  - **Add image information**: Include proper [`alt`](/en-US/docs/Web/HTML/Element/img#alt) text on all images and diagrams. This text, as well as captions on tables and other figures, counts because spiders can't crawl images, and so `alt` text tells search engine crawlers what content the embedded media contains.
    > [!NOTE]
    > It is not recommended to include too many keywords or keywords not related to the feature in an attempt to manipulate search engine rankings; this type of behavior is easy to spot and tends to be penalized.
    > Likewise, **do not** add repetitive, unhelpful material or blobs of keywords within the actual page, in an attempt to improve the page's size and search ranking. This does more harm than good, both to content readability and to our search results.

- **Focus on topic content**: It is far better to write content around the topic of the page than a specific keyword. It is highly likely that there will be many keywords you could include for a given topic; in fact, many SEOs compile a list of 5-100 different keywords (varying between short, medium, and long-tail keywords) to include within their article, depending on the length. Doing so will diversify your wording, leading to less repetition.

## Writing style

Other than writing grammatically correct sentences in English, we recommend you follow these guidelines to keep content consistent across MDN Web Docs.

- [Abbreviations and acronyms](#abbreviations_and_acronyms)
- [Capitalization](#capitalization)
- [Contractions](#contractions)
- [Numbers and numerals](#numbers_and_numerals)
- [Pluralization](#pluralization)
- [Apostrophes and quotation marks](#apostrophes_and_quotation_marks)
- [Commas](#commas)
- [Hyphens](#hyphens)
- [Spelling](#spelling)
- [Terminology](#terminology)
- [Voice](#voice)

### Abbreviations and acronyms

An abbreviation is a shortened version of a longer word, while an acronym is a new word created using the first letter of each word from a phrase. This section describes guidelines for abbreviations and acronyms.

- **Expansions**: On the first mention of a term on a page, expand acronyms that are likely to be unfamiliar to users. When in doubt, expand the term. Better yet, link it to the article or [glossary](/en-US/docs/Glossary) entry describing the technology.

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

  > [!NOTE]
  > Always consider whether it's truly beneficial to use a Latin abbreviation. Some of these are used so rarely that many readers will either confuse or fail to understand their meanings.
  >
  > Also, be sure that _you_ use them correctly if you choose to do so. For example, be careful not to confuse "e.g." with "i.e.", which is a common error.

- **Plurals of abbreviations and acronyms**: For plurals of abbreviations and acronyms, add _s_. Don't use an apostrophe. Ever. Please.

  - **Correct**: CD-ROMs
  - **Incorrect**: CD-ROM's

- **"Versus", "vs.", and "v."**: If using the contraction, "vs." is preferred over "v." and can be used in headings. Elsewhere in text, use the spelled-out form "versus".

  - **Correct**: this vs. that
  - **Incorrect**: this v. that
  - **Correct**: this versus that

### Capitalization

Use standard English capitalization rules in body text, and capitalize "World Wide Web." It is acceptable to use lower case for "web" (used alone or as a modifier) and "internet".

> [!NOTE]
> This guideline is a change from a previous version of this guide, so you may find many instances of "Web" and "Internet" on MDN.
> Feel free to change these as you are making other changes, but editing an article just to change capitalization is not necessary.

Keyboard keys should use sentence-style capitalization, not all-caps capitalization.
For example, "<kbd>Enter</kbd>" not "<kbd>ENTER</kbd>".
The only exception is that you can use "<kbd>ESC</kbd>" to abbreviate the "<kbd>Escape</kbd>" key.

Certain words should always be capitalized, such as trademarks that include capital letters or words that derive from the name of a person (unless the word is being used within code and the code syntax requires lower-casing).
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

- **Dates**: For dates (not including dates in code samples), use the format "January 1, 1900".

  - **Correct**: February 24, 1906
  - **Incorrect**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternately, you can use the YYYY/MM/DD format.

  - **Correct**: 1906/02/24
  - **Incorrect**: 02/24/1906; 24/02/1906; 02/24/06

- **Decades**: Use the format "1990s". Don't use an apostrophe.

  - **Correct**: 1920s
  - **Incorrect**: 1920's

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

Compound words should be hyphenated only when the last letter of the prefix is a vowel and is the same as the first letter of the root.

- **Correct**: re-elect, co-op, email
- **Incorrect**: reelect, coop, e&#45;mail

### Spelling

Use American-English spelling.

In general, use the first entry at [Dictionary.com](https://www.dictionary.com/), unless that entry is listed as a variant spelling or as being primarily used in a non-American form of English.
For example, if you [look up "behaviour"](https://www.dictionary.com/browse/behaviour) (with an additional _u_ added to the American standard form), you find the phrase "Chiefly British" followed by a link to the American standard form, ["behavior"](https://www.dictionary.com/browse/behavior).
Do not use variant spelling.

<!-- cSpell:ignore localise behaviour colour -->

- **Correct**: localize, behavior, color
- **Incorrect**: localise, behaviour, colour

We have [cSpell](https://cspell.org/) installed to catch spelling errors. It runs every week and generates [a report of spelling errors](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) in the repository. You can also run it locally via the following command:

```bash
npx cspell --no-progress --gitignore --config .vscode/cspell.json "**/*.md"
```

In the repository, we maintain several word lists, located at [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries), that contain sanctioned words not in the default dictionaries. You can add more words to these lists if they are valid but reported by the spell checker. Read [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json) to understand what each dictionary contains and the details of our spell-checking configuration.

### Terminology

These are our recommendations for using certain technical terms:

- **HTML elements**: Use the term "element" to refer to HTML and XML elements, instead of "tag". In addition, the element should be wrapped in angle brackets "<>" and should be styled using backticks (\`). For example, using \<input\> inside backticks will style it as `<input>` as is expected.

  - **Correct**: the `<span>` element
  - **Incorrect**: the span tag

  On MDN, you can optionally specify the HTML element in the [`HTMLElement` macro](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references), which will style the element, add the angle brackets "<>", as well as add a link to its reference page.

  - **Using backticks**: `<span>`
  - **Using the macro**: {{HTMLElement("span")}} (source in markdown: `\{{HTMLElement("span")}}`)

- **Parameters vs. arguments**: The preferred term on MDN Web Docs is **parameters**. Please avoid the term "arguments" for consistency whenever possible.

- **User interface actions**: In task sequences, describe user interface actions using the imperative mood. Identify the user interface element by its label and type.

  - **Correct**: "Click the Edit button."
  - **Incorrect**: "Click Edit."

### Voice

While the active voice is preferred, the passive voice is also acceptable, given the informal feel of our content.
Try to be consistent, though.

## Page components

This section lists the guidelines to follow for different parts of each page, such as headings, notes, links, and examples.

- [Code examples](#code_examples)
- [Cross-references (linking)](#cross-references_linking)
- [External links](#external_links)
- [Shortened URLs (shortlinks)](#shortened_urls_shortlinks)
- [Heading levels](#heading_levels)
- [Images and other media](#images_and_other_media)
- [Lists](#lists)
- [See also section](#see_also_section)
- [Subpages](#subpages)
- [Slugs](#slugs)
- [Titles](#titles)

### Code examples

A page on MDN Web Docs can contain more than one code example. The following list presents some recommended practices when writing a code example for MDN Web Docs:

- Each piece of example code should include:
  - **Heading**: A short `###` (`<h3>`) heading to describe the scenario being demonstrated through the code example. For example, "Using offset printing" and "Reverting to style in previous layer".
  - **Description**: A short description preceding the example code that states the specifics of the example to which you want to draw the reader's attention. For example, "In the example below, two cascade layers are defined in the CSS, `base` and `special`."
  - **Result explanation**: An explanation after the example code that describes the result and how the code works.
- In general, the code example should not only demonstrate the syntax of the feature and how it is used, but also highlight the purpose and situations in which a web developer might want or need to use the feature.
- If you are working with a large piece of example code, it may make sense to break it up into smaller logical parts so that they can be described individually.
- When adding [live samples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples), it's helpful to be aware that all of the sample's code blocks that have the same type (HTML, CSS, and JavaScript) are concatenated together before running the example. This lets you break the code into multiple segments, each optionally with its own descriptions, headings, and so forth. This makes documenting code incredibly powerful and flexible.

To learn about how to style or format code examples for MDN Web Docs, see [Guidelines for styling code examples](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

### Cross-references (linking)

When referencing another page or the section of a page on MDN by its title, follow sentence casing in the link text (match the page or section title). Use sentence casing in the link text even if it is different from the linked page title or section title (it might be that the case used in the page or section title is incorrect). Don't use quotation marks around the link text. To refer to a page on MDN by its title, use the following style:

- **Correct**: "See the [Ordering flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) guide."
- **Incorrect**: "See the "[Ordering flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" guide."

Follow similar style when linking to a section on a page, as shown below:

- **Correct**: "For more information, see the [Allocation in JavaScript](/en-US/docs/Web/JavaScript/Memory_management#allocation_in_javascript) section on the _Memory management_ page."

If the section you're linking to is on the same page, you can hint at the location of the section using the words "above" or "below".

- **Correct**: "This concept is described in more detail in the [Accessibility](/en-US/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) section below."

You can link part of a sentence to an article or the section of an article. Be mindful to use descriptive phrases as link texts to provide enough context for the page being linked.

- **Correct**: "Learn more about [how to order flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Incorrect**: "Click [here](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) to learn more."
- **Incorrect**: "Read [this article](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) to learn more."

On MDN, another way to link to a reference page is by using a macro. These macros are described on the [Commonly-used macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) page. For example, to link to the reference page of an HTML element, use the `HTMLElement` macro, and to link to the reference page of a CSS property, use the `CSSxRef` macro.

We follow similar cross-referencing guidelines in the [See also](#see_also) sections at the end of reference pages, glossary pages, and guides.

### External links

External links are allowed on MDN Web Docs in specific situations. Use the guidelines described in this section to decide whether or not it is okay to include an external link on MDN Web Docs. Your pull request to add an external link will be rejected if it does not meet the guidelines described here.

If you are considering adding an external link to MDN [Learn web development](/en-US/docs/Learn_web_development) content, please also read [Learn web development writing guidelines > External links and embeds](/en-US/docs/MDN/Writing_guidelines/Learning_content#external_links_and_embeds).

In general, if you're considering adding an external link, you need to ensure that there is minimal risk of the following:

- Broken or outdated links
- Appearance of endorsement, especially for commercial products or services
- Attempt to use MDN Web Docs to distribute spam
- Shortlinks that obfuscate the link destination

> [!NOTE]
> Before adding an external link, consider cross-referencing content within MDN Web Docs. Internal links are easier to maintain and make the entirety of MDN Web Docs more valuable to readers.

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

  > [!NOTE]
  > If you have a business or personal relationship with the target of a link, you must disclose that relationship in your pull request. Failure to do so may imperil your continued participation with MDN Web Docs.

  Sometimes such links are relevant and appropriate. For example, if you're the editor of a specification and you're contributing to documentation related to that specification, then linking to that specification is expected and acceptable. But you must disclose the relationship between you and the link.

### Shortened URLs (shortlinks)

A URL shortener (such as TinyURL or Bitly) can be great for shortening long links into small, easier-to-remember URLs (also known as "shortlinks"). However, they also obfuscate the destination of the URL. Additionally, with certain shorteners, the destination can be changed after their creation, a feature that could be utilized for malicious purposes.

Do not use links created via third-party (user-generatable) URL shorteners. For example, if `https://myshort.link/foobar` is a short URL generated by a random user and redirects to `https://example.com/somelongURL/details/show?page_id=foobar`, use the longer `example.com` URL.

On the other hand, first-party shorteners that are maintained by the organizations that also maintain the destination URLs are encouraged. `https://bugzil.la` is owned and operated by Mozilla and is a URL shortener that redirects to `https://bugzilla.mozilla.org/`, which is also a Mozilla-owned domain. In this case, use the shorter URL. For example, use `https://bugzil.la/1682349` instead of `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Heading levels

When a new paragraph starts a new section, a header should be added.
Use these markdown heading levels in decreasing order without skipping levels: `##`, then `###`, and then `####`; these translate to the [HTML heading tags](/en-US/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>`, and `<h4>` tags, respectively.

`##` is the highest level allowed because `#` is reserved for the page title.
We recommend to not add more than three levels of headers. If you feel the need for adding the fourth header level, consider breaking up the article into several smaller articles with a landing page. Alternatively, see if you can present the information in bulleted points to avoid adding level four header.

Keep the following dos and don'ts in mind while creating headings for subsections:

- **Don't create single subsections.** Don't subdivide a topic into a single subtopic.
  It's either two subheadings or more or none at all.
- **Don't use inline styles, classes, or macros within headings.** However, you can use backticks to indicate code terms (e.g. "Using `FooBar` interface").
- **Don't create "bumping heads".** These are headings followed immediately by a subheading, with no content text in between them.
  This doesn't look good and leaves readers without any explanatory text at the beginning of the outer section.

### Images and other media

If you include images or other media on a page, follow these guidelines:

- Make sure the media license allows you to use them. Try to use media that has a very permissive license such as [CC0](https://creativecommons.org/public-domain/cc0/) or at least one that is compatible with our general content license — [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- For images, run them through <https://tinypng.com> or <https://imageoptim.com> to reduce the page weight.
- For `SVG`, run the code through [SVGOMG](https://jakearchibald.github.io/svgomg/), and ensure that the `SVG` file has an empty line at the end of the file.
- Every image must [include descriptive `alt` text](/en-US/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Lists

Lists should be formatted and structured consistently across all pages.
Individual list items should be written with suitable punctuation, regardless of the list format.
However, depending on the type of list you are creating, you will want to adjust your writing as described in the sections below. In both cases, include a lead-in sentence that describes the information in the list.

- **Bulleted lists**: Bulleted lists should be used to group related pieces of concise information. Each item in the list should follow a similar sentence structure. Sentences and phrases (i.e., sentence fragments missing a verb or a subject or both) in bulleted lists should include standard punctuation — sentences end with periods, phrases don't.

  If there are multiple sentences in a list item, a period must appear at the end of each sentence, including the item's final sentence, just as would be expected in a paragraph. This is an example of a correctly structured bulleted list:

  > In this example, we should include:
  >
  > - A condition, with a brief explanation.
  > - A similar condition, with a brief explanation.
  > - Yet another condition, with some further explanation.

  Notice how the same sentence structure repeats from bullet to bullet. In this example, each bullet point states a condition followed by a comma and a brief explanation, and each item in the list ends with a period.

  If the list items include incomplete sentences, no period is required at the end. For example:

  > The following color-related properties will be helpful in this scenario:
  >
  > - propertyA: Sets the background color
  > - propertyB: Adds shadow to text

  If one or more list items are complete sentences, use a period after every list item, even if a list item contains three or fewer words. However, as far as possible, follow the same structure for all items in a list; ensure all list items are either complete sentences or phrases.

- **Numbered lists**: Numbered lists are used primarily to enumerate steps in a set of instructions. Because instructions can be complex, clarity is a priority, especially if the text in each list item is lengthy. As with bulleted lists, follow standard punctuation usage. This is an example of a correctly structured numbered list:

  > In order to correctly structure a numbered list, you should:
  >
  > 1. Open with a heading or brief paragraph to introduce the instructions. It's important to provide the user with context before beginning the instructions.
  > 2. Start creating your instructions, and keep each step in its own numbered item.
  >    Your instructions may be quite extensive, so it is important to write clearly and use correct punctuation.
  > 3. After you have finished your instructions, follow the numbered list with a brief closing summary or explanation about the expected outcome upon completion.

  The following is an example of writing a closing explanation for the above list:

  > We have created a short numbered list that provides instructive steps to produce a numbered list with the correct formatting.

  Notice how the items in numbered lists read like short paragraphs. Because numbered lists are routinely used for instructional purposes or to walk someone through an orderly procedure, be sure to keep each item focused: one numbered item per step.

### See also section

Most of the guides, reference pages, and even glossary pages on MDN Web Docs contain a _See also_ section at the end of the article. This section contains [cross-references](#cross-references_linking) to related topics within MDN and sometimes links to related external articles. For example, this is the [See also section](/en-US/docs/Web/CSS/@layer#see_also) for the `@layer` page.

In general, present the links in a See also section in a [bulleted list](#lists) format with each item in the list as a phrase. In the [Learn web development](/en-US/docs/Learn_web_development) section on MDN, however, the See also section follows the [definition list](/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) format.

To maintain consistency across MDN Web Docs, keep the following guidelines in mind while adding or updating a See also section.

#### Link text

- The link text should be the same as the title of the page or the section being linked to. For example, the link text to this [ARIA](/en-US/docs/Web/Accessibility/ARIA/Attributes) page with the page title "ARIA states and properties" will be:
  - **Correct**: [ARIA states and properties](/en-US/docs/Web/Accessibility/ARIA/Attributes)
- Use sentence casing in the link text even if it is different from the linked page title or section title. It might be that the case used in the page or section title is incorrect. For example, the link text to the [Quirks Mode](/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) page in correct sentence case will be:
  - **Correct**: [Quirks mode](/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- For external links as well, use sentence casing even if the casing on the target article page is different. This is to ensure consistency across MDN Web Docs. Exceptions include names of books.
- On MDN, you can optionally use a macro to link to a page, as is explained in the [Linking to pages in references](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) section on the _Commonly used macros_ page. The use of macro will add code formatting to the keyword in the link text, as shown in the next example.
- No article ("A", "An", "The") is needed at the beginning of the link list item. No punctuation is required at the end of the list item because it will invariably be a term or a phrase.
  - **Correct**: [`revert-layer`](/en-US/docs/Web/CSS/revert-layer)
  - **Incorrect**: The [`revert-layer`](/en-US/docs/Web/CSS/revert-layer) keyword.
  - **Correct**: [HTML DOM API](/en-US/docs/Web/API/HTML_DOM_API)
  - **Incorrect**: The [HTML DOM API](/en-US/docs/Web/API/HTML_DOM_API)
- As shown in the above examples, add code formatting using backticks (\`) to keywords and literals in the link text, even though the formatting is not used in page and section titles. For example, for the page title "Array() constructor", the link text will be [`Array()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Descriptive text

- Keep the descriptive text surrounding the link minimal. In case of a description, add it after the link text and a colon. Word the description as a phrase with no ending punctuation. Keep all linked text at the beginning to aid in scanning the list of links.
  - **Correct**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS selectors for styling checkboxes
- Don't use the conjunction "and" before the last item in the series.
  - **Correct**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Other color-related properties
- For external links, aim to specify the source website and the year of publication or last update (in parentheses) whenever feasible and appropriate. Providing this information upfront gives readers a clear idea of the destination they'll reach upon clicking the link. The date of publication or last update guides readers in assessing the relevance of the linked article and also helps MDN maintainers to review links to articles that have not been updated in a long time. If you provide a link to an article on Wikipedia, for example, you can ignore the publish/update date. The following list item is an example of adding a link to the [Top-level await](https://v8.dev/features/top-level-await) external article in the See also section, along with the source and year information:
  - **Correct**: [Top-level await](https://v8.dev/features/top-level-await) on v8.dev (2019)
- For external links to books, you can also provide author names. You can see a few examples for this in the [Further reading](#language_grammar_and_spelling) section below. Refrain from adding author names for blog posts or GitHub repositories you might link to.

#### Order of links

- List the links to MDN pages in the order of reference pages first, followed by links to the related guides and tutorial pages. This suggested order is mainly to aid in the scanability of the items in the list.
- If the list is a mix of internal and external links, list the internal links first and then the external ones.
- Within each group of internal and external links, follow alphabetical or simple-to-advanced order, whatever makes more sense for the context.

### Subpages

When you need to add some articles about a topic or subject area, you will typically do so by creating a landing page, then adding subpages for each of the individual articles.
The landing page should open with a paragraph or two describing the topic or technology, then provide a list of the subpages with descriptions of each page.
You can automate the insertion of pages into the list using some macros we've created.

For example, consider the [JavaScript](/en-US/docs/Web/JavaScript) guide, which is structured as follows:

- [JavaScript/Guide](/en-US/docs/Web/JavaScript/Guide) – Main table-of-contents page
- [JavaScript/Guide/JavaScript Overview](/en-US/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

Try to avoid putting your article at the top of the hierarchy, which slows the site down and makes search and site navigation less effective.

### Slugs

The page title, which is displayed at the top of the page, can be different from the page "slug", which is the portion of the page's URL following `<locale>/docs/`. Keep the following guidelines in mind when defining a slug:

- Slugs should be kept short. When creating a new level of hierarchy, the new level's component in the slug should just be a word or two.
- Slugs should use an underscore for a multi-word component, such as `Basic_HTML_syntax` in `/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Follow sentence casing in slugs as well for each component, such as `Basic_HTML_syntax` in the previous example.

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
  - **Keep titles focused**: Use the title to convey one objective—a single idea or a concept that will be covered in that section. For that purpose, as far as possible, try not to use the conjunction "and" in a title.
  - **Use parallel construction**: Use similar language for titles at the same heading level. For example, if a `###` heading level title uses gerunds, that is, words ending in "-ing", such as "Installing", then try to write all titles at that heading level using gerunds. If a title starts with an imperative verb, such as "Use", "Configure", then write all titles at that heading level starting with an imperative verb.
  - **Avoid common term in lower-level heading**: Do not repeat the text in the title of a higher-level heading in lower-level titles. For example, in a section titled "Commas", name the title of a subsection "After introductory clauses" instead of "Commas after introductory clauses".
  - **Don't begin with article**: Avoid starting titles with articles "a", "an", or "the".
  - **Add lead-in information**: After a title, add some introductory text to explain what will be covered in the section.

## See also

- [Guidelines for writing code examples](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
- [Guidelines for writing HTML code examples](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Guidelines for writing CSS code examples](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [Guidelines for writing JavaScript code examples](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Guidelines for writing shell prompt code examples](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Further reading

### Other style guides

If you have questions about usage and style not covered here, we recommend referring to the [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) or the [Chicago Manual of Style](https://www.chicagomanualofstyle.org/).

### Language, grammar, and spelling

If you're interested in improving your writing and editing skills, you may find the following resources to be helpful.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) on brians.wsu.edu
- [English grammar FAQ](https://websites.umich.edu/~jlawler/aue.html) on alt-usage-english.org
- [English language and usage](https://english.stackexchange.com/) on english.stackexchange.com: Question and answer site for English language usage
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) on google.com/books (published 2002): Scholarly but user-friendly, evidence-based advice; very good for non-native speakers, especially for preposition usage
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) by William Zinsser on harpercollins.com (published 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) by Joseph Williams and Gregory Colomb on google.com/books (published 2019)
