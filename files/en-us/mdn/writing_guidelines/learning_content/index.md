---
title: Learn web development writing guidelines
short-title: Learning content
slug: MDN/Writing_guidelines/Learning_content
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

The [Learn web development](/en-US/docs/Learn_web_development) section of MDN is aimed specifically at folks learning the basic fundamentals of web development, and as such, requires a different approach to the rest of MDN's content. This articles provides guidelines for writing learning content.

## Target audience

MDN Learn Web Development (also known as Learn)'s target audience is people who are not expert front-end developers — this includes students, junior or trainee web developers, hobbyists, and teachers looking for best practice guidance on what to teach their students.

## Topic coverage

Learn provides a structured pathway containing learning outcomes, designed to teach the fundamental skills and practices that will set readers up for being successful front-end developers. Learners can rely on it to provide the correct information for their studies, and educators can rely on it to provide the correct outcomes to base their courses and curricula around.

As a result, we are aiming to strictly limit the scope of Learn to:

- Setup, soft skills, and background knowledge in our [Getting started modules](/en-US/docs/Learn_web_development/Getting_started).
- The fundamental technologies required at the start of a web developer's journey in our [Core modules](/en-US/docs/Learn_web_development/Core).
- "Second wave" topics representing useful next steps for relative beginners to move on to once they've mastered the Core modules, in our [Extensions modules](/en-US/docs/Learn_web_development/Extensions).

Learn is not intended to be the place on MDN for introductory content on _all_ topics. This means that niche topics such as MathML and Web Games, and advanced or specialist topics such as regular expressions, performance testing, WebRTC, and WebGPU, do not belong in Learn.

If you do not see a topic covered in Learn and you think it should be covered, don't just try to add it — discuss it with us first (see [Suggesting content](/en-US/docs/MDN/Writing_guidelines/What_we_write#suggesting_content)).

## Approach

To create and update MDN Learn web development content, you should follow the same approach as for the rest of MDN, in many ways. You should follow the same general [writing style guide](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide), [code style](/en-US/docs/MDN/Writing_guidelines/Code_style_guide), and [techniques](/en-US/docs/MDN/Writing_guidelines/Howto).

There are a few differences, however:

- **Tutorial style**: Most MDN content is a mixture of reference material and guides; Learn, on the other hand, is intended to provide hands-on tutorials. We don't have a strict template for each page, but they should be written in a way that leads readers by the hand, through a combination of step-by-step sections and "Try it out" sections. These should instruct readers to jump in, try things out, and start writing code. See the "Try it out" section at the bottom of our [Search engine](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) information, for example. These are created using the following markdown:

  ```md
  > [!CALLOUT]
  >
  > **Try it out**
  >
  > Try this...
  ```

- **Challenges**: Learn content includes challenges periodically to test that the reader understands the topics they have learnt about before moving on to the next article. These are currently written in a few different styles, for example see [Challenge: Structuring a page of content](/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) and [Test your skills: HTML images](/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images), but we intend to improve the consistency and experience of these in the future.
- **Density and completeness**: MDN content is generally known for its comprehensiveness. Learn content is specifically not as exhaustively complete as the rest of the MDN content. It is less dense and gentler in its approach, to allow learners to pick up useful skills and make regular progress, without feeling overwhelmed. They can dive deeper later on. Learn content can omit details to provide a more comfortable learning experience, provided it does not teach the reader anything misleading or bad practice.
- **Stable learning outcomes**: The learning outcomes at the top of each tutorial provide a summary of what each tutorial teaches, and together provide a structured curriculum for front-end web development. It is vital that the learning outcomes and what is taught both remain stable and in sync, otherwise the content cannot be trusted as a basis for formal learning (for example educational courses of certifications). As such, changes to the learning outcomes should happen slowly, and not without good reason. If you try to add content that is not covered in the associated learning outcomes (or vice versa), your pull request will be closed. [Make a suggestion](/en-US/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) first.

> [!NOTE]
> We maintain a [changelog](/en-US/docs/Learn_web_development/Changelog) that details any significant changes made to the learning outcomes, so educators are able to maintain any resources based on MDN Learn.

## Partner links and embeds

As outlined in our [External links](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) guidelines, MDN generally does not allow external links (or embeds) that appear to endorse commercial products of services or point to paywalled content. This is to mitigate the risk of MDN's content losing trust and being made less useful due to being flooded by spam links.

MDN's Learn content has a few exceptions to this. We allow links to external content (that may be paywalled) from specific trusted partner sites. These are sites that MDN has built up a trusting relationship with, by thoroughly examining their quality, ethics, and commitment to web standards and best practices, and helping them update their content where it doesn't meet our standards. We trust them not to change their links on us without notice, and we trust that their content is safe to link to.

The purpose of these partner links are as follows:

- Provide access to supporting content that builds on what is taught in our pages.
- Provide access to multimedia learning experiences (videos, slideshows, other interactive content) that MDN content teams don't have the resources to produce. We are all about the text on MDN, but people often want different learning approaches.
- Earn revenue via affiliate links to paid content options, which we can invest to make MDN even better.

However, we:

- Won't add these links in a way that compromises the integrity of MDN's content and is openly spammy; only where we feel they are genuinely useful.
- Will always make sure a free option is available beside anything that is paywalled. In many cases, we've managed to convince our partners to make content available for free that was previously paywalled.
- Will clearly mark partner content with a "MDN learning partner" label, so you can clearly tell them apart from other links.

### "See also" link order

On Learn content pages, the "See also" links that appear at the bottom should appear in the following order:

1. Internal links.
2. Links to free content.
3. Links to mixed free/paywalled content.

### Current education partners

- [Scrimba](https://scrimba.com/home)
