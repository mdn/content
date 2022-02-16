---
title: Project guidelines
slug: Related/Project_guidelines
tags:
  - Related
  - project guidelines
---
If you've had your chosen technology accepted for documentation on MDN Web Docs, the next step is to get started. This article provides you with all you need to know to get started on documenting your project.

## What does a successful project need?

A successful documentation project requires a number of things. We'll look at each of these in turn:

- A dedicated team
- A Project plan/roadmap
- Guidelines and standards
- An intuitive structure
- Maintenance

## Dedicated team

Make sure you have a dedicated team in place that will be there both to write the documentation in the first place, and maintain it after the major bulk of the work is completed and updates are required.

Have a think about how much work there is to do on your particular docs project, and how many people you might need for that.

If it is a large project, you might benefit from having a few writers, a technical reviewer to check that the work is correct, a copy editor to clean up the language, someone to write code examples, etc.

On a smaller project, you might have one or two people taking on multiple roles. Whatever you want to do is fine, as long as it works for you. You will be assigned a member of MDN staff to provide guidance on the MDN Web Docs side of things, and advice and help in general.

You should assign one (or two) team leads, to act as a central point of contact for the MDN team member, and anyone else wishing to contact the team about it (you might get more offers of help, for example).

Once your team is assembled, you'll need to get them all to [create MDN accounts](/en-US/docs/MDN/Contribute/Howto/Create_an_MDN_account), and then talk to your MDN rep to work out what site permissions each person needs (e.g. creating pages, moving pages, etc.)

## Project plan/roadmap

Write down a plan for the work — what needs to be done, and when? What milestones do you need to reach so that progress is healthy? If the project is large, you should consider getting one of your team members to be a project manager for the project, and using a project tracking tool like [Trello](https://trello.com/). You should also consider writing a sub-project plan for an initial release that encompasses the minimum set of documentation that is useful to publish (a _minimum viable product_), do that first, and then follow up with further additions later.

If the documentation resource is small, then this probably isn't so critical, but you still need to keep a record of what has been done and what hasn't, what stage each part of the documentation is at (e.g. not started, in progress, draft written, reviewed, done...), and who is working on what.

## Guidelines and standards

There are [guidelines available on MDN](/en-US/docs/MDN/Guidelines) that state how we expect documents to be written, and how to use the tools on the site to create them.

Since this is a project in its own right, you may have additional guidelines on language or code styles that you expect to be followed. Feel free to keep a record of these, and even host them on a page inside your own project pages.

In terms of standards, you are expected to maintain a reasonable level of quality for your documentation to stay on MDN. Your MDN rep will work with you on this to make you clear on what is expected. It is a good idea to produce a prototype showing what each type of page in your documentation should look like (e.g. an element or method reference page, a code example...) so that people have a template to follow.

> **Note:** MDN is primarily an English site (en-US). The primary language for your resource should be in US English. If this really doesn't make sense for your project (e.g. it might be for a tool usable in a specific non-English locale), then talk to us about it, and we'll see how we can accommodate this.

## Intuitive structure

If you went through the submission process then you should already have a rough plan of what you are going to write for your documentation resource. At this point you should refine that into a site structure plan — think about what the document hierarchy will be, and where everything will fit and link together.

Each project will be different, but we'd roughly recommend something like this:

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
|
------Project metadata
```

### Page templates

Each page type that you will use in your project should have a page template for others to copy the structure from. You should decide on these early on.

#### Landing page

The landing page should contain something like:

- Introductory paragraph to say what the technology is and why it's exciting.
- Concepts and usage — why the technology exists, use cases, target audience, and a brief description of how it is used. This should be a taster, and not too much detail. If there is a lot to say here, feel free to spin it out to a separate "Concepts" article that can live in the Guides/tutorials section.
- List of reference docs, guides, and examples — list these in separate sections, with links and descriptions of what they do. For code examples, you can show code snippets in your pages, but you are also advised to create some kind of repo to contain full examples for people to learn from, on [GitHub](https://github.com/) for example.
- Specifications — it is useful to link to specifications and other such documents that define and provide context to the technology.
- Project team — in this section, list the project team and their contact details. It is useful for the MDN team to know who is responsible for a project at a glance, as well as external people who might want to provide feedback or help with the documentation work.
- See also — in here, include any other links you think might be useful.

#### Reference pages

Each reference page type should have a template defined. These will likely be different in structure to the reference page types you see on the core MDN site, but that's OK. Feel free to use our pages for guidance/inspiration, and talk to your MDN rep for help.

#### Guides/tutorials

The structure of guides/tutorials can be anything you like, as long as it proves effective in teaching readers what they need to know. Again, feel free to look to some of our guides for inspiration.

### Project metadata

By project metadata, we mean things like:

- Team contact details, if you'd rather put them on a separate page.
- Project-specific language or code guidelines.
- Code templates to write new examples into.
- Reusable asset lists.

## Maintenance

The documentation will need to be maintained to remain on MDN:

- MDN is a Wiki; when others make changes to the docs, a core community member for that technology needs to review those changes to make sure the content is still good. This can be done via MDN's ["Watch" functionality](/en-US/docs/MDN/Contribute/Tools/Page_watching).
- When changes occur to the technology that require documentation updates, the community needs to make updates as appropriate, keeping the same standards and process in mind as the original documentation.

## Archiving documentation

If the documentation appears to be:

- Stale/unmaintained
- Stalled without being finished
- Low quality
- Becoming obsolete

If positive changes are not observed over a period of 6 months, it will be considered dead documentation, and will be archived. If you are having trouble with meeting the requirements for a successful documentation project, please reach out to your MDN rep and discuss it. We can try to work through the issues together if we know what they are; silence is never a solution.

We need to be strict on such matters — we can't let the site fill up with bad quality, incomplete, or obsolete documentation — it harms our reputation.
