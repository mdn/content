---
title: How to write with SEO in mind on MDN Web Docs
slug: MDN/Contribute/Howto/Write_for_SEO
tags:
  - Contributing to MDN
  - Documentation
  - MDN
  - MDN Meta
  - MDN Web Docs
  - SEO
  - Search Engine Optimization
---
{{MDNSidebar}}

This guide covers our standard practices, recommendations, and requirements for content to help ensure that search engines can easily categorize and index our material in order to ensure that users can easily reach what they need.

## Introduction

While the primary goal of any writing on MDN should always be to explain and inform about open web technology so developers can quickly learn to do what they want, or to find the little details they need to know in order to perfect their code, it's important that they be able to _find_ the material we write.

Since most readers reach content on MDN through search engines, as writers, we have to keep that in mind while we work. To do that, we are establishing a selection of "SEO guidelines," to help writers and editors on MDN ensure that each page they work on is reasonably well designed, written, and marked up to give search engines the context and clues they need to properly index articles.

## SEO checklist

The following is a list of things you should check while writing and reviewing content to help ensure that the page and its neighbors will be indexed properly by search engines.

- Make sure the page's contents are [different enough from other pages](/en-US/docs/MDN/Contribute/Howto/Write_for_SEO#ensure_pages_aren't_too_similar) that search engines don't assume they're about the same thing.
- [Avoid pages that are too short](/en-US/docs/MDN/Contribute/Howto/Write_for_SEO#avoid_pages_that_are_too_short). Articles that are too short (called "thin pages" in SEO parlance) are difficult to catalog accurately. Whenever possible, pages on MDN should avoid being shorter than around 300 words or so.

## Ensure pages aren't too similar

Each article should be as unique as possible. Articles that look similar to one another textually will wind up being considered to be about roughly the same thing, even if they aren't. For example, if an interface has the properties `width` and `height`, it's easy for the text to be surprisingly similar, with just a few words swapped out, and using the same example. This makes it hard for search engines to know which is which, and they wind up sharing page rank, resulting in both being harder to find than they ought to be.

Understandably, writers confronted with two related properties like `width` and `height` (or any other set of functionally related features) are tempted to write the article on `width`, then copy that article and paste it into the one on `height`, replacing a few words. Done!

Unfortunately, the result is two pages that, as far as search engines are concerned, may as well be the same thing.

It's important, then, to ensure that every page has its own content. Here are some suggestions to help you accomplish that:

- Consider use cases where there might be more differences than one would think. For instance, in the case of `width` and `height`, perhaps consider ways horizontal space and vertical space are used differently, and provide a discussion about the appropriate concepts. Perhaps you mention the use of width in terms of making room for a sidebar, while using height to handle vertical scrolling or footers or similar. Including information about accessibility issues is a useful and important idea as well.
- Use entirely different examples on each page. Examples in these situations are often even more similar than the body text, since the examples may use both (or all) of the similar methods or properties to begin with, thereby requiring no real changes when reused. So throw out the example and write a new one, or at least provide multiple examples, with at least some of them different.
- Include descriptions of each example. Both an overview of what the example does as well as coverage of how it works, in an appropriate level of detail given the complexity of the topic and the target audience, should be included.

The easiest way to avoid being overly similar is of course to write each article from scratch if time allows.

## Avoid pages that are too short

Articles that are too short (called "thin pages" in SEO parlance) are difficult to catalog accurately. Whenever possible, pages on MDN should avoid being shorter than around 300 words or so. Here are some basic guidelines to help you create pages that have enough content to be properly searchable without resorting to cluttering them up with unnecessary text.

- Obviously, if the article is a stub, or is missing material, add it. We try to avoid outright "stub" pages on MDN, although they do exist, but there are plenty of pages that are missing large portions of their content.
- Generally review the page to ensure that it's structured properly for the [type of page](/en-US/docs/MDN/Structures/Page_types) it is. Be sure every section that it should have is present and has appropriate content.
- Make sure every section is complete and up-to-date, with no information missing. Are all parameters listed and explained? Make sure any exceptions are covered (this is a particularly common place where content is missing).
- Be sure everything is fully fleshed-out. It's easy to give a quick explanation of something, but make sure that all the nuances are covered. Are there special cases? Known restrictions that the reader might need to know about?
- There should be examples covering all parameters or at least the parameters (or properties, or attributes) that users from the beginner through intermediate range are likely to use, as well as any advanced ones that require extra explanation. Each example should be preceded with an overview of what the example will do, what additional knowledge might be needed to understand it, and so forth. After the example (or interspersed among pieces of the example) should be text explaining how the code works. Don't skimp on the details and the handling of errors in examples; readers _will_ copy and paste your example to use in their own projects, and your code _will_ wind up used on production sites! See [code examples](/en-US/docs/MDN/Structures/Code_examples) and our [code example guidelines](/en-US/docs/MDN/Guidelines/Code_guidelines) for more useful information.
- If there are particularly common use cases for the feature being described, talk about them! Instead of assuming the reader will figure out that the method being documented can be used to solve a common development problem, actually add a section about that use case with an example and text explaining how the example works.
- Include proper {{htmlattrxref("alt", "img")}} text on all images and diagrams; this text counts, as do captions on tables and other figures, because spiders can't crawl images, and so {{htmlattrxref("alt", "img")}} text tells search engine crawlers what content the embedded media contains. Note: it is not best practice to include too many keywords, or feature unrelated keywords in an attempt to manipulate search engine rankings; this type of behavior is easy to spot and tends to be penalised.
- Likewise, do *not* descend into adding repetitive, unhelpful material, or blobs of keywords within the actual page, in an attempt to improve the page's size and search ranking. This does more harm than good, both to content readability and to our search results.
- With Google's Hummingbird update in 2013, there has been an increasing focus on the use of natural language to convey information. This means that it is far better to write content around the topic of the article, than a specific keyword. It is highly likely that there will be many keywords you could include for a given topic; in fact, many SEOs compile a list of 5-100 different keywords (varying between short, medium, and long-tail keywords) to include within their article, depending on the length. Doing so will diversify your wording, leading to less repetition.

## See also

- [Contributing to MDN](/en-US/docs/MDN/Contribute)
- [Writing style guide](/en-US/docs/MDN/Guidelines/Writing_style_guide)
