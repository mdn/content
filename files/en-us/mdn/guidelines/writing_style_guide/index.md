---
title: Writing style guide
slug: MDN/Guidelines/Writing_style_guide
tags:
  - Documentation
  - Guide
  - Guidelines
  - MDN
  - MDN Meta
  - MDN Web Docs
  - MDN style guide
  - Style guide
  - Writing style guide
---
{{MDNSidebar}}

To present documentation in an organized, standardized, and easy-to-read manner, the MDN Web Docs style guide describes how text should be organized, spelled, formatted, and so on.
These are guidelines rather than strict rules.
We are more interested in content than formatting, so don't feel obligated to learn the style guide before contributing.
Do not be upset or surprised, however, if an industrious volunteer later edits your work to conform to this guide.

The language aspects of this guide apply primarily to English-language documentation.
Other languages may have (and are welcome to create) style guides.
These should be published as subpages of the localization team's page.

## Basics

The best place to start in any extensive publishing style guide is with some very basic text standards to help keep documentation consistent.
The following sections outline some of these basics to help you.

### Page titles

Page titles are used in search results and are also used to structure the page hierarchy in the breadcrumb list at the top of the page.
The page title (which is displayed at the top of the page and in the search results) can be different from the page "slug", which is the portion of the page's URL following "`<locale>/docs/`".

#### Title and heading capitalization

Page titles and section headings should use sentence-style capitalization (only capitalize the first word and proper nouns) rather than headline-style capitalization:

- **Correct**: "A new method for creating JavaScript rollovers"
- **Incorrect**: "A New Method for Creating JavaScript Rollovers"

We have many older pages that were written before this style rule was established.
Feel free to update them as needed if you like.
We're gradually getting to them.

#### Choosing titles and slugs

Page slugs should be kept short.
When creating a new level of hierarchy, the new level's component in the slug should just be a word or two.

Page titles, on the other hand, may be as long as you like, within reason, and they should be descriptive.

#### Creating new subtrees

When you need to add some articles about a topic or subject area, you will typically do so by creating a landing page, then adding subpages for each of the individual articles.
The landing page should open with a paragraph or two describing the topic or technology, then provide a list of the subpages with descriptions of each page.
You can automate the insertion of pages into the list using some macros we've created.

For example, consider the [JavaScript](/en-US/docs/Web/JavaScript) guide, which is structured as follows:

- [JavaScript/Guide](/en-US/docs/Web/JavaScript/Guide) – Main table-of-contents page
- [JavaScript/Guide/JavaScript Overview](/en-US/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)

Try to avoid putting your article at the top of the hierarchy, which slows the site down and makes search and site navigation less effective.

### General article content guidelines

When writing any document, it's important to know how much to say.
If you ramble on too long, or provide excessive detail, the article becomes tedious to read and it will rarely be used.
Getting the amount of coverage right is important for several reasons.
Among those reasons: ensure that the reader finds the information they truly need, and provide enough quality material for search engines to adequately analyze and rank the article.

We'll discuss the former (providing the information the reader may need) here.
To learn more about ensuring that pages are properly classified and ranked by search engines, see the article [How to write for SEO on MDN](/en-US/docs/MDN/Contribute/Howto/Write_for_SEO).

The goal is to write pages that include all the information that readers may need without going into too much detail.
Following are some recommendations to achieve this.

#### Consider your audience

Keep in mind that these are guidelines.
Some of these tips may not apply in every case.
Certainly keep your article's audience in mind.
For example, an article on advanced network techniques likely doesn't need to go into as much detail about basic networking concepts as the typical article on networking.

#### Provide a useful summary

Make sure the article's summary—that is, the opening paragraph or paragraphs before the first heading—provides enough information to adequately inform readers of the article's contents.
This way a reader can determine quickly whether the article is relevant to their concerns.

In a guide or tutorial, the summary should inform the reader of the topics that are covered as well as of what requisite knowledge the reader is expected to have, if any.
It should mention the technologies and/or APIs that are being documented or discussed, with links to related information, and it should offer hints to situations in which the article's contents might be useful.

##### Example: Too short!

This example of a summary is far too short.
It leaves out too much information, such as what it means exactly to "stroke" text, where the text is drawn, and so forth.

**`CanvasRenderingContext2D.strokeText()`** draws a string.

##### Example: Too long!

Here, we've updated the summary, but now it's far too long.
Too much detail is included, and the text delves too deeply into describing other methods and properties.

Instead, the summary should focus on the `strokeText()` method, and should refer to the appropriate guides where the other details are described.

When called, the Canvas 2D API method **`CanvasRenderingContext2D.strokeText()`** strokes the characters in the specified string beginning at the coordinates specified, using the current pen color.
In the terminology of computer graphics, "stroking" text means to draw the outlines of the glyphs in the string without filling in the contents of each character with color.

The text is drawn using the context's current font as specified in the context's {{domxref("CanvasRenderingContext2D.font", "font")}} property.

The placement of the text relative to the specified coordinates are determined by the context's `textAlign`, `textBaseline`, and `direction` properties.
`textAlign` controls the placement of the string relative to the X coordinate specified; if the value is `"center"`, then the string is drawn starting at `x - (stringWidth / 2)`, placing the specified X-coordinate in the middle of the string.
If the value is `"left"`, the string is drawn starting at the specified value of `x`.
And if `textAlign` is `"right"`, the text is drawn such that it ends at the specified X-coordinate.

(etc etc etc...)

You can, optionally, provide a fourth parameter that lets you specify a maximum width for the string, in pixels.
If you provide this parameter, the text is compressed horizontally or scaled (or otherwise adjusted) to fit inside a space that wide when being drawn.

You can call the **`fillText()`** method to draw a string's characters as filled with color instead of only drawing the outlines of the characters.

##### Example: Much better!

Here we see a much better overview for the `strokeText()` method.

The {{domxref("CanvasRenderingContext2D")}} method **`strokeText()`**, part of the [Canvas 2D API](/en-US/docs/Web/API/Canvas_API), strokes—that is, draws the outlines of—the characters of a specified string, anchored at the position indicated by the given X and Y coordinates.
The text is drawn using the context's current {{domxref("CanvasRenderingContext2D.font", "font")}}, and is justified and aligned according to the {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}, and {{domxref("CanvasRenderingContext2D.direction", "direction")}} properties.

For more details and further examples, see {{SectionOnPage("/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Text")}} in the Learning Area as well as our main article on the subject, [Drawing text](/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

#### Include all relevant examples

It's important to ensure that you use examples to clarify what every parameter is used for, and to clarify any edge cases that may exist.
You should also use examples to demonstrate solutions for common tasks, and you should use examples to demonstrate solutions to problems that may arise.

In general it is expected that most of the pages will include examples, and that most of them will include more than one example.

Each example should be preceded by text explaining what the example does and anything the reader should know before beginning to read or try out the example.

##### Code Examples

Each piece of code should include an explanation of how it works.
Keep in mind that it may make sense to break up a large piece of code into smaller portions so they can be described individually.

The text following each piece of code should explain anything relevant, using an appropriate level of detail:

- If the code is very simple and doesn't really use anything directly related to the API being documented, you need only give a quick summary of what it is and why it's there.
- If the code is intricate, uses the API being documented, or is technically creative, you should provide a more detailed explanation.

When adding [live samples](/en-US/docs/MDN/Structures/Live_samples), it's helpful to be aware that all of the {{HTMLElement("pre")}} blocks in the area that contains the sample are concatenated together before running the example, which lets you break any or all of the HTML, CSS, and JavaScript into multiple segments, each optionally with its own descriptions, headings, and so forth.
This makes documenting code incredibly powerful and flexible.

#### Overly-short articles are hard to find

If an article is "thin"—that is, too short—it may not be indexed properly (or at all) by search engines.
As a rule of thumb, the article's body text should be at least 250–300 words.
Don't artificially inflate a page, but treat this guideline as a minimum target length when possible.

### Headings

When a new paragraph starts a new section, a header should be added.
Use heading levels in decreasing order: {{HTMLElement("h2")}} then {{HTMLElement("h3")}} then {{HTMLElement("h4")}}, without skipping levels.

H2 is the highest level allowed because H1 is reserved for the page title.
If you need more than three or four levels of headers, consider breaking up the article into several smaller articles with a landing page.

#### Heading dos and don'ts

- **Don't create single subsections.** Don't subdivide a topic into a single subtopic.
  It's either two subheadings or more, or none at all.
- **Don't use styles and classes within headings.** This includes the {{HTMLElement("code")}} element for code terms.
  So don't make a heading "Using the `SuperAmazingThing` interface".
  It should instead just be "Using the SuperAmazingThing interface".
- **Avoid using macros within headings** (except for certain macros that are specifically designed to be used in headings).
- **Don't create "bumping heads."** These are headings followed immediately by a subheading, with no content text in between.
  This doesn't look good, and leaves readers without any explanatory text at the beginning of the outer section.

### Lists

Lists should be formatted and structured uniformly across all pages.
Individual list items should be written with suitable punctuation, regardless of the list format.
However, depending on the type of the list you are creating, you will want to adjust your writing as described in the sections below.

#### Bulleted lists

Bulleted lists should be used to group related pieces of concise information.
Each item in the list should follow a similar sentence structure.
Phrases and sentences in bulleted lists should include standard punctuation.
A period must appear at the end of each sentence in a bulleted list, including the item's final sentence, just as would be expected in a paragraph.

An example of a correctly structured bulleted list:

In this example we should include:

- A condition, with a brief explanation.
- A similar condition, with a brief explanation.
- Yet another condition, with some further explanation.

Note how the same sentence structure repeats from bullet to bullet.
In this example, each bullet point states a condition followed by a comma and a brief explanation, and each item in the list ends with a period.

#### Numbered lists

Numbered lists are used primarily to enumerate steps in a set of instructions.
Because instructions can be complex, clarity is a priority, especially if the text in each list item is lengthy.
As with bulleted lists, follow standard punctuation usage.

An example of a correctly structured numbered list:

In order to correctly structure a numbered list, you should:

1. Open with a heading or brief paragraph to introduce the instructions.
   It's important to provide the user with context before beginning the instructions.
2. Start creating your instructions, and keep each step in its own numbered item.
   Your instructions may be quite extensive, so it is important to write clearly and use correct punctuation.
3. After you have finished your instructions, follow the numbered list with a brief closing summary or explanation about the expected outcome upon completion.

This is an example of writing a closing explanation.
We have created a short numbered list that provides instructive steps to produce a numbered list with the correct formatting.

Note how the items in numbered lists read like short paragraphs.
Because numbered lists are routinely used for instructional purposes, or to walk someone through an orderly procedure, be sure to keep each item focused: one numbered item per step.

### Text formatting and styles

Use the **"Formatting Styles"** drop-down list to apply predefined styles to selected content.

> **Note:** The **"Note Box"** style is used to call out important notes, like this one.

> **Warning:** Similarly, the **"Warning Box"** style creates warning boxes like this.

Unless specifically instructed, _do not_ use the HTML `style` attribute to manually apply a style.
If you can't do it using a predefined class, ask for help in the [MDN discussion forum](https://discourse.mozilla.org/c/mdn).

### Code sample style and formatting

> **Note:** This section deals with the styling/formatting of code as it appears on an MDN article.
> If you want guidelines on actually writing code examples, see our [Code sample guidelines](/en-US/docs/MDN/Guidelines/Code_guidelines).

#### Tabs and line breaks

Use two spaces per tab in all code examples.
Indent the code cleanly, with open-brace ("`{`") characters on the same line as the statement that opens the block.
For example:

```js
if (condition) {
  /* handle the condition */
} else {
  /* handle the "else" case */
}
```

Long lines shouldn't be allowed to stretch off horizontally to the extent that they require horizontal scrolling to read.
Instead, break long lines at natural breaking points.
Some examples follow:

```js
if (class.CONDITION || class.OTHER_CONDITION || class.SOME_OTHER_CONDITION
       || class.YET_ANOTHER_CONDITION ) {
  /* something */
}

var toolkitProfileService = Components.classes["@mozilla.org/toolkit/profile-service;1"]
                           .createInstance(Components.interfaces.nsIToolkitProfileService);
```

#### Inline code formatting

Use the {{HTMLElement("code")}} tags to mark up function names, variable names, and method names.
For example: "the `frenchText()` function".

**Method names should be followed by a pair of parentheses.** For example, `doSomethingUseful()`.
The parentheses help differentiate methods from other code terms.

#### Syntax highlighting

A line or multiple lines of code should be formatted using [syntax highlighting](/en-US/docs/MDN/Guidelines/CSS_style_guide#code_syntax_highlighting) rather than the {{HTMLElement("code")}} element.

#### Styling mentions of HTML elements

There are specific rules to follow when writing about HTML elements.
These rules produce consistent descriptions of elements and their components.
They also ensure correct linking to detailed documentation.

- Element names
  - : Use the [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs) macro, which creates a link to the page for that element.
    For example, writing `\{{HTMLElement("title")}}` produces "{{HTMLElement("title")}}".
    If you don't want to create a link, **enclose the name in angle brackets** and use the "Inline Code" style (e.g., `<title>`).
- Attribute names
  - : Use "Inline Code" style to put attribute names in `code font`.
    Additionally, put them in **`bold face`** when the attribute is mentioned in association with an explanation of what it does, or the first time it is used in the article.
- Attribute definitions
  - : Use the [`htmlattrdef`](https://github.com/mdn/yari/tree/main/kumascript/macros/htmlattrdef.ejs)  macro (e.g., `\{{htmlattrdef("type")}})` for the definition term, so that it can be linked to from other pages easily by using the [`htmlattrxref`](https://github.com/mdn/yari/blob/main/kumascript/macros/htmlattrxref.ejs) macro (e.g., `\{{htmlattrxref("type","element")}}`) to reference attribute definitions.
- Attribute values
  - : Use the "Inline Code" style to apply `<code>` to attribute values, and don't use quotation marks around string values, unless needed by the syntax of a code sample.
    **For example:** "When the `type` attribute of an `<input>` element is set to `email` or `tel` ..."

### Latin abbreviations

#### In notes and parentheses

- Common Latin abbreviations (etc., i.e., e.g.) may be used in parenthetical expressions and notes.
  Use periods in these abbreviations, followed by a comma or other appropriate punctuation.

  - **Correct**: Web browsers (e.g., Firefox) can be used ...
  - **Incorrect**: Web browsers e.g. Firefox can be used ...
  - **Incorrect**: Web browsers, e.g. Firefox, can be used ...
  - **Incorrect**: Web browsers, (eg: Firefox) can be used ...

#### In running text

- In regular text (i.e., text outside of notes or parentheses), use the English equivalent of the abbreviation.

  - **Correct**: ... web browsers, and so on.
  - **Incorrect**: ... web browsers, etc.
  - **Correct**: Web browsers such as Firefox can be used ...
  - **Incorrect**: Web browsers e.g. Firefox can be used ...

#### Meanings and English equivalents of Latin abbreviations

| Abbrev | Latin            | English                 |
| ------ | ---------------- | ----------------------- |
| cf.    | _confer_         | compare                 |
| e.g.   | _exempli gratia_ | for example             |
| et al. | _et alii_        | and others              |
| etc.   | _et cetera_      | and so forth, and so on |
| i.e.   | _id est_         | that is, in other words |
| N.B.   | _nota bene_      | note well               |
| P.S.   | _post scriptum_  | postscript              |

> **Note:** Always consider whether it's truly beneficial to use a Latin abbreviation.
> Some of these are used so rarely that many readers will either confuse or fail to understand their meanings.
>
> Also, be sure that _you_ use them correctly, if you choose to do so.
> For example, be careful not to confuse "e.g." with "i.e.", which is a common error.

### Acronyms and abbreviations

#### Capitalization and periods

Use full capitals and delete periods in all acronyms and abbreviations, including organizations such as "US" and "UN".

- **Correct**: XUL
- **Incorrect**: X.U.L.; Xul

#### Expansion

On the first mention of a term on a page, expand acronyms that are likely to be unfamiliar to users. When in doubt, expand it—or better yet, link it to the article or [glossary](/en-US/docs/Glossary) entry describing the technology.

- **Correct**: "XUL (XML User Interface Language) is Mozilla's XML-based language..."
- **Incorrect**: "XUL is Mozilla's XML-based language..."

#### Plurals of acronyms and abbreviations

For plurals of acronyms or abbreviations, add _s_.

Don't use an apostrophe. Ever. Please.

- **Correct**: CD-ROMs
- **Incorrect**: CD-ROM's

#### "Versus", "vs.", and "v."

The contraction "vs." is preferred.

- **Correct**: this vs. that
- **Incorrect**: this v. that
- **Incorrect**: this versus that

### Capitalization

Use standard English capitalization rules in body text, and capitalize "World Wide Web." It is acceptable to use lower case for "web" (used alone or as a modifier) and "internet".

> **Note:** This guideline is a change from a previous version of this guide, so you may find many instances of "Web" and "Internet" on MDN.
> Feel free to change these as you are making other changes, but editing an article just to change capitalization is not necessary.

Keyboard keys should use sentence-style capitalization, not all-caps capitalization.
For example, "<kbd>Enter</kbd>" not "<kbd>ENTER</kbd>".
The only exception is that you can use "<kbd>ESC</kbd>" to abbreviate the "<kbd>Escape</kbd>" key.

Certain words should always be capitalized (such as trademarks which include capital letters), or words derived from the name of a person (unless it's being used within code, and code’s syntax requires lower-casing).
Some examples:

- Boolean (named for English mathematician and logician {{interwiki("wikipedia", "George Boole")}})
- JavaScript (a trademark of Oracle Corporation, it should always be written as trademarked)
- Python, TypeScript, Django, and other programming languages and framework names

### Contractions

Our writing style tends to be casual, so you should feel free to use contractions (e.g., "don't", "can't", "shouldn't"), if you prefer.

### Pluralization

Use English-style plurals, not the Latin- or Greek-influenced forms.

- **Correct**: syllabuses, octopuses
- **Incorrect**: syllabi, octopi

### Hyphenation

Hyphenated compounds should be used when the last letter of the prefix is a vowel and is the same as the first letter of the root.

- **Correct**: email, re-elect, co-op
- **Incorrect**: e-mail, reelect, coop

### Inclusive language

MDN has a wide and diverse audience.
We strongly encourage keeping text as inclusive as possible.
Here are some alternatives to common terms used in documentation:

- Avoid using the terms **master** and **slave** and instead **main** and **replica**
- Replace **whitelist** and **blacklist** with **allowlist** and **denylist**
- **Sanity** should be replaced with **coherence**
- Instead of **dummy** you should use **placeholder**
- You should not need to use **crazy** and **insane** in documentation, however if the case arises consider **fantastic** instead.

#### Gender-neutral language

It is best to use gender-neutral language in any writing where gender is irrelevant to the subject matter. 
or example, if you are talking about the actions of a specific man, using "he"/"his" is fine; but if the subject is a person of either gender, "he"/"his" isn't appropriate.

Let's take the following example:

_A confirmation dialog appears, asking the user if he allows the Web page to make use of his Web cam._

_A confirmation dialog appears, asking the user if she allows the Web page to make use of her Web cam._

Both versions are gender-specific.
To fix this, use gender-neutral pronouns:

_A confirmation dialog appears, asking the user if they allow the Web page to make use of their Web cam._

> **Note:** MDN allows the use of this very common syntax (which is controversial among usage authorities) to make up for the lack of a neutral gender in English.
>
> The use of the third-person plural as a gender neutral pronoun (that is, using "they," "them", "their," and "theirs") is an accepted practice, commonly known as "[singular 'they.'](https://en.wikipedia.org/wiki/Singular_they)"

Making the users plural:

_A confirmation dialog appears, asking the users if they allow the web page to make use of their web cams._

The best solution, of course, is to rewrite and eliminate the pronouns:

_A confirmation dialog appears, requesting the user's permission for web cam access._

_A confirmation dialog box appears, which asks the user for permission to use the web cam._

This last example of dealing with the problem is arguably better.
Not only is it grammatically more correct, but removes some of the complexity associated with dealing with genders across different languages that may have wildly different gender rules.
This solution can make translation easier for both readers and localizers.

### Numbers and numerals

#### Dates

For dates (not including dates in code samples) use the format "January 1, 1990".

- **Correct**: February 24, 2006
- **Incorrect**: February 24th, 2006; 24 February, 2006; 24/02/2006

Alternately, you can use the YYYY/MM/DD format.

- **Correct**: 2006/02/24
- **Incorrect**: 02/24/2006; 24/02/2006; 02/24/06

#### Decades

For decades, use the format "1990s".
Don't use an apostrophe.

- **Correct**: 1990s
- **Incorrect**: 1990's

#### Plurals of numerals

For plurals of numerals add "s".
Don't use an apostrophe.

- **Correct**: 486s
- **Incorrect**: 486's

#### Commas

In running text, use commas only in five-digit and larger numbers.

- **Correct**: 4000; 54,000
- **Incorrect**: 4,000; 54000

### Punctuation

#### Serial comma

**Use the serial comma**.
The serial (also known as "Oxford") comma is the comma that appears before the conjunction in a series of three or more items.

- **Correct**: I will travel on trains, planes, and automobiles.
- **Incorrect**: I will travel on trains, planes and automobiles.

#### Apostrophes and quotation marks

**Do not use "curly" quotes and quotation marks.** On MDN, we only use straight quotes and apostrophes.

There are a couple of reasons for this.

1. We need to choose one or the other for consistency.
2. If curly quotes or apostrophes make their way into code snippets—even inline ones—readers may copy and paste them, expecting them to function (which they will not).

- **Correct**: Please don't use "curly quotes."
- **Incorrect**: Please don’t use “curly quotes.”

### Spelling

Use American-English spelling.

In general, use the first entry at [Dictionary.com](https://www.dictionary.com/), unless that entry is listed as a variant spelling or as being primarily used in a non-American form of English.
For example, if you [look up "behavior"](https://www.dictionary.com/browse/behavior), you find the phrase "Chiefly British" followed by a link to the American standard form, "[behavior](https://dictionary.reference.com/browse/behavior)".
Do not use variant spellings.

- **Correct**: localize, behavior
- **Incorrect**: localise, behaviour

### Terminology

#### HTML elements

Use "elements" to refer to HTML and XML elements, rather than "tags".
In addition, they should almost always be wrapped in "<>", and should be in the {{HTMLElement("code")}} style.

When you reference a given element for the first time in a section, you should use the [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs) macro to create a link to the documentation for the element (unless you're writing within that element's reference document page).

- **Correct**: the {{HTMLElement("span")}} element
- **Incorrect**: the span tag

#### Parameters vs. arguments

The preferred term on MDN is **parameters**.
Please avoid the term "arguments" for consistency whenever possible.

#### User interface actions

In task sequences, describe user interface actions using the imperative mood.
Identify the user interface element by its label and type.

- **Correct**: Click the Edit button.
- **Incorrect**: Click Edit.

### Voice

While the active voice is preferred, the passive voice is also acceptable, given the informal feel of our content.
Try to be consistent, though.

## Other references

### Preferred style guides

If you have questions about usage and style not covered here, we recommend referring to the [Microsoft Writing Style Guide](https://docs.microsoft.com/en-us/style-guide/welcome/)—or, failing that, the [Chicago Manual of Style](https://www.amazon.com/Chicago-Manual-Style-16th/dp/0226104206).
An [unofficial crib sheet for the Chicago Manual of Style](https://faculty.cascadia.edu/cma/HIST148/cmscrib.pdf) is available online.

### Preferred dictionary

For questions of spelling, please refer to [Dictionary.com](https://www.dictionary.com/).
The spelling checker for this site uses American English.
Please do not use variant spellings (e.g., use _color_ rather than _colour_).

We will be expanding the guide over time, so if you have specific questions that aren't covered in this document, [please get in touch](/en-US/docs/MDN/Contribute/Getting_started#step_4_ask_for_help), so we know what should be added.

### Language, grammar, spelling

If you're interested in improving your writing and editing skills, you may find the following resources to be helpful.

- [On Writing Well](https://www.amazon.com/Writing-Well-30th-Anniversary-Nonfiction/dp/0060891548), by William Zinsser (Amazon link)
- [Style: The Basics of Clarity and Grace](https://www.amazon.com/Style-Basics-Clarity-Grace-4th/dp/0205830765/), by Joseph Williams and Gregory Colomb (Amazon link)
- [Common Errors in English](https://brians.wsu.edu/common-errors-in-english-usage/)
- [English Grammar FAQ](https://www-personal.umich.edu/~jlawler/aue.html) (alt.usage.english)
- [Bob's quick guide to the apostrophe, you idiots](https://www.angryflower.com/bobsqu.gif) (funny)
- [Merriam-Webster's Concise Dictionary of English Usage](https://www.amazon.com/Merriam-Websters-Concise-Dictionary-English-Usage/dp/B004L2KNI2) (Amazon link): Scholarly but user-friendly, evidence-based advice; very good for non-native speakers, especially for preposition usage.
- [English Language and Usage StackExchange](https://english.stackexchange.com/): Question and answer site for English language usage.
