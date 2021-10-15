---
title: How to migrate external content to MDN Web Docs
slug: MDN/Contribute/Howto/Migrate_external_content_to_MDN
tags:
  - Content migration
  - MDN Meta
---
{{MDNSidebar}}

You will sometimes identify already-existing content that would make sense to migrate onto MDN Web Docs from elsewhere. This article covers what kinds of content potentially make sense to migrate, whether you should migrate content or not, and what workflow to use to undertake the migration.

## What content would make sense to migrate?

There are a number of content types that it would potentially make sense to migrate onto MDN Web Docs:

- Tutorials/Guides: Practical information on using a technology. These are useful on MDN Web Docs in a variety of places depending on level and coverage (e.g. [Using Fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch), [Creating hyperlinks](/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)).
- Explainers/concept articles: These generally deal with explaining high-level concepts such as why an API is structured like it is, what problems it is designed to solve, etc. These would make sense as "Concepts" articles (for example [WebVR concepts](/en-US/docs/Web/API/WebVR_API/Concepts)).
- Code examples: MDN Web Docs really values good code examples, whether it is code snippets to put inside reference articles or full examples to link to. We are happy to welcome good code examples into our GitHub repos, either as standalone examples, or part of our [interactive-examples repo](https://github.com/mdn/interactive-examples).

Content that doesn't make sense to migrate to MDN Web Docs:

- Lengthy case studies
- Product documentation
- Promotional content

## Why would you migrate the content?

If good developer content exists already, it makes sense to migrate it to MDN Web Docs for a number of reasons:

- SEO: MDN Web Docs is a very popular site — putting your content on there is a good way to make it more findable.
- Not reinventing the wheel: MDN Web Docs documentation is prided on being complete, meaning that we'll need to write all essential references and tutorials on site rather than linking off to other places. Putting an existing tutorial on here means that we won't have to write it ;-)
- Revisions and maintenance: If you put your content on MDN Web Docs, you'll have the full support of our writer's team and community in helping to review, edit and maintain the work.

## Should you migrate the content?

If the content is high quality and meets the above content type criteria, then it sounds like a good thing to migrate it. However, you should consider the below points first before you make a move:

- Duplicating content: Does the resource you want to move duplicate content that is already on MDN Web Docs? If so, it might make sense to help improve the existing resource instead of moving another resource over. If the external resource is much better than the existing resource, then move it over and make sure the old resource is redirected to the new one.
- Where to put it: If you are not sure where to move a resource, talk to us about it first so we can help you (see [Join the conversation](/en-US/docs/MDN/Contribute/Feedback#join_the_conversation)).
- Ownership: If you do not own the rights to the content, then you cannot just move it without getting permission from the owners. You should contact them and talk about it first. If the content is published under some kind of permissive license scheme (e.g. Creative Commons or GPL) then make sure the license conditions are satisfied. Feel free to ask us for advice also.
- Keeping community happy: Even if you own the content, if there is a community built around it you should consult them — get their input, make sure they understand what is going on, minimize any confusion or annoyance that can result in moving the content.
- Redirects: When you move a content resource, you will usually want to redirect the old content to the new location, so that links do not break. In a few cases where this doesn't make sense — for example if the moved content is a copy of an original template, and both make sense in the context they are found in — it often still makes sense to provide a link somewhere to the new version, so the relationship between the two is clear.
- Making sense: When the content has been moved, do the resources in the old and new locations still make sense? You might need to update descriptions or navigation menus to ensure this.

## Workflow for migration

What follows is a sample workflow for migrating content onto MDN Web Docs. We migrated some W3C Payment Request code to MDN, as recorded in [this GitHub issue](https://github.com/w3c/payment-request-info/issues/4).

1.  Identify the resource to be migrated.
2.  Identify who owns the content, and talk to them and their associated community to make sure moving the content is not going to be a problem.
3.  Identify an MDN Web Docs contact who can help you with the migration. If in doubt, [ask for help](/en-US/docs/MDN/Contribute/Getting_started#step_4_ask_for_help).
4.  Looking at [our GitHub content repo](https://github.com/mdn/content), identify the location where the content should be put, making sure that it doesn't duplicate existing content (see above).
5.  Move the content over, making changes as necessary so it fits MDN style.
6.  Request a review from the MDN team/community
7.  Redirect the old resource to the new location, as appropriate.
