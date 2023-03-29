---
title: Criteria for inclusion on MDN Web Docs
slug: MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion
page-type: mdn-writing-guide
---

{{MDNSidebar}}

This article describes, in detail, criteria for content to be included on MDN Web Docs, the application process for including new documentation, and expectations and guidelines for a party applying.

This is aimed at larger projects. To suggest a new page or article, please refer to the [Suggesting content](/en-US/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) section on the "What we write" page.

## Web standards technologies

The remit of MDN Web Docs is to document web standards technologies that are in a specification published by a reliable standards body and are supported in at least one stable browser. These criteria signal enough interest, stability, and "intent to implement" by the web industry at large. Therefore, we think those technologies are a safe bet for us to spend our time and effort in documenting them. Any earlier than that, a web technology or a feature might be prone to getting cancelled due to lack of interest or might be so unstable that it might change significantly, which will needlessly involve a lot of rewriting (which we try to avoid where possible).

## Non-web standards technologies

Non-web standards technologies are technologies that do not follow our criteria summarized above. We would not normally consider them for documentation on MDN Web Docs.

Our mission statement is _"to provide developers with the information they need to easily build projects on the open web"_. This suggests that we should consider documenting technologies that are useful to web developers, even if they are not open web standards, on the standards track, etc.

If you want to consider a non-web standard technology for inclusion on MDN Web Docs, you should make sure that it matches the criteria below.

## Criteria for inclusion on MDN Web Docs

Technologies should fulfill the criteria described here for being considered to be documented on MDN Web Docs.

### Be open and not proprietary

At MDN Web Docs, we are supporters of open technologies. We don't support closed technology ecosystems that are controlled by a single entity, that are not open for contributions by any interested party, and that are not interoperable across multiple platforms and systems. We believe that technology works better for everyone when created out in the open.

### Be web-exposed and be related to web technologies

Our central remit is web standards technologies; there is no point starting to document technologies that do not relate to the web or hold any interest to web developers.

### Show signs of interest and adoption

We don't want to spend our time documenting a technology that has no signal of interest and adoption from the industry. It may just be that it is too early to start documenting the technology, and we could consider it to be documented on MDN Web Docs in the future.

### Not show signs of being deprecated or superseded

Related to the above point, we also don't want to spend our time documenting a technology that is late in its lifecycle and is already showing signs of decline in interest.

### Not have an established documentation resource elsewhere

There are many libraries and frameworks in existence, which are not web standards but are built on top of web technologies and are very popular in the web industry. We do not document any of these because, in general, they all have established documentation resources already. It would be foolish to compete with the official resource of a popular framework — to do so would be a waste of time and probably end up confusing developers trying to learn the technology.

### Have a community willing to write and maintain the documentation

The MDN Web Docs team concentrates on documenting the open web platform. If you want a technology in this area to be considered for documentation on MDN Web Docs, you'll need to have a community assembled that is willing to write the documentation and maintain it after completion. Our team is happy to provide guidance in such cases, including edits and feedback, but we don't have the resource for more than that.

> **Note:** MDN Web Docs work is carried out on GitHub and 'in the open'. Your team should be versed in git & GitHub and be comfortable with working in open source.

## Process for selecting the new technology

If a technology looks like a good candidate for being documented on MDN Web Docs, you can start a discussion on the [GitHub community discussions](/en-US/docs/MDN/Community/Communication_channels#github_discussions) to propose and discuss the inclusion of this technology. This section describes what the proposal should include.

### Submitting the proposal

Technologies will be considered for inclusion on MDN Web Docs on a case-by-case basis. For consideration, you would need to submit a proposal titled "Proposal for documenting a new technology on MDN Web Docs". We would need the following information from you in the proposal:

- The technology, its core purpose/use cases, and target developer audience.
- What kind of industry or community buzz is there is around the technology?
  - Are a lot web developers using it? What is the industry adoption like?
  - Do a lot of web developers want or need this information?
  - What is the size of the target audience for this information? Supporting statistics would help if you have them.
- How does the technology relate to core web technology and web browsers? Useful details include:
  - Does it use HTML and CSS but generally not output to the web?
  - Is it supported in web browsers via a polyfill?
- What documentation or resources are already available that cover the technology?
- How much documentation would need to be added to MDN Web Docs?
  - List the expected number of guides, tutorials, reference pages for elements/methods/attributes, etc.
  - Provide a high-level table of contents.
  - Mention the kind of "advanced" features you think you might need for this resource, beyond the basic documentation pages. Are you expecting to include embedded videos, interactive code samples, etc.?
- Who will be writing the documentation? Who are they and why are they suited for the job?
- How will the documentation be maintained?

You don't need to provide us with hundreds of pages of detail at this stage (in fact, we'd prefer it if you didn't). A couple of paragraphs on each of the above points is more than adequate.

> **Note:** MDN Web Docs is primarily an English site (en-US). The primary language for your project should be in US English.

### Awaiting a response

We will consider the technology and the information you submit in the proposal and respond with one of the following answers:

- **No**: We don't think this meets the criteria for being documented on MDN Web Docs.
- **Maybe**: We are not sure if it is suitable for documenting on MDN Web Docs and would like to ask some further questions.
- **Yes**: We think it is appropriate for including it on MDN Web Docs.

If the technology is a good candidate, the team will assist you in getting started with the documentation.

## Project guidelines for documenting the new technology

If your chosen technology is accepted for documentation on MDN Web Docs, the next step is to get started.

To ensure that your project for documenting the new technology on MDN Web Docs is successful, we'll need you to have the following in place:

- A dedicated team
- A project plan and roadmap
- Writing guidelines and standards
- An intuitive documentation structure
- A maintenance plan

### Dedicated team

Make sure you have a dedicated team in place that will be there to both write the initial documentation as well as maintain it in future with the required updates.

Have a think about how much work there is and how many people you might need for that.

- If it is a large project, you might benefit from having a few writers, a technical reviewer to check that the work is technically accurate, a copy editor to clean up the language, someone to write code examples, etc.
- On a smaller project, you might have one or two people taking on multiple roles. However you want to build up the team is fine as long as it works for you.

A member of the MDN Web Docs team will be assigned to your project to provide guidance on the MDN Web Docs side of things.

You should assign one (or two) team leads who can liaise with the MDN Web Docs team member.

The MDN Web Docs representative will help get the required permissions to everyone on your team to work in the [MDN organization on GitHub](https://github.com/mdn).

### Project plan and roadmap

Create a plan for the project — tasks, estimate completion dates, and milestones you would want to track to ensure you're making steady progress.

If the project is large, you should consider assigning one of your team members as the project manager. You should also consider writing a subproject plan for an initial release that encompasses the minimum set of documentation that is useful to publish (a _minimum viable product_); you can follow it up with further additions later.

If the documentation project is small, you would still need to keep a record of what has been done and what hasn't, what stage each part of the documentation is at (e.g., not started, in progress, draft written, reviewed, done), and who is working on what.

### Writing guidelines and standards

These [guidelines](/en-US/docs/MDN/Writing_guidelines) state how we expect documents to be written for MDN Web Docs.

If you have additional guidelines for the documents you are writing, we expect this guide to be added to and kept up to date.

In terms of standards, you are expected to maintain a reasonable level of writing quality for your documentation to stay on MDN Web Docs. Your MDN Web Docs representative will work with you to make you clear on what is expected.

### Intuitive documentation structure

If you went through the proposal submission process, then you should already have a rough outline of what you are going to write for this technology. At this point, you should refine that into a site structure plan: think about what the document hierarchy will be and where everything will fit and link together.

Each project is different, but we'd roughly recommend something like this:

```
Landing page
|
------Reference
      |
      --------Elements
      |
      --------Methods
      |
      --------Other reference page type(s)?
|
------Guides/tutorials
|
------Examples
```

Each page type that you will use in your project should have a page template for others to copy the structure from. You should decide on these early on.

Please refer to our section on [page types](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types). If additions need to be made, please liaise with your MDN Web Docs representative.

### Maintenance plan

The documentation for this technology will need to be maintained to remain on MDN Web Docs:

- The content and files for MDN Web Docs are stored on GitHub. When others make changes to the documentation for your technology, a member from your team needs to review those changes to make sure the content is still good. You can track the open pull requests (PRs) via GitHub's notification feature.
- When changes occur to the technology that require documentation to be updated, your team needs to make updates as appropriate, maintaining the same standards as the original documentation.

If positive changes are not observed over a period of six months and the documentation appears to be in any of the following states:

- Stale or unmaintained
- Stalled without being finished
- Low quality
- Becoming obsolete

Then the documentation for this technology will be considered dead. After a discussion between your team and the MDN Web Docs team representative, the documentation will be removed.

We hope you understand that we need to be strict on such matters — we can't let the site fill up with bad quality, incomplete, or obsolete documentation.
