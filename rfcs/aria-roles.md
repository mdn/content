# MDN content project: ARIA roles reference docs

This RFC proposes that we work on completing the [ARIA role reference docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
available on MDN. We did quite a bit of work on this in the past, including
having it as a major workstream at a past [Accessibility Hack on MDN event](https://hacks.mozilla.org/2018/10/hack-on-mdn-better-accessibility-for-mdn-web-docs/),
but we still never got around to completing the docs.

## Problem statement

ARIA roles are an important part of the [WAI-ARIA](https://w3c.github.io/aria/)
technology standard — they allow us to provide semantics where semantics are
lacking, for the benefit of AT and AT-users. Unfortunately many roles are a bit
obscure in their use, especially across different browser and screenreader
combinations, and a lot of information on this topic is spread far and wide
across the Web. It would be great to provide a deep and complete resource on
this in one place.

## Priority assessment

This table checks this project against the [OWD prioritization criteria](https://github.com/openwebdocs/project/blob/main/steering-committee/prioritization-criteria.md).

* **Effort**: Medium/High: Each page (60) is fairly large and may require some
  research.
* **Dependencies**: Need to find accessibility experts to help.
* **Community enablement**: Yes. Each page is a self-contained task.
* **Momentum**: Low/Medium. The tech itself is fairly stable, but a11y is
  something we want to push.
* **Enabling learners**: Not really. The MDN Learn section contains ARIA basics
  already.
* **Enabling professionals**: Yes.
* **Underrepresented topics / Ethical web**: Yes. We want to push forward the
  importance of a11y and make it easier to action.
* **Operational necessities**: In a way, yes. Without a11y, certain groups
  cannot use the web.
* **Addressing the needs of the web industry**: Accessibility not seen as a
  major pain point in Web DNA, but is that just because people don't understand
  it?

## Proposed solutions

We need to write those pages.

## Task list

- Write out list of which roles pages are not written yet, and which ones are
  incomplete/need improvement.
- Make sure we agree on a template to base each page on — what does each page
  need?
- Write an issue for each page, and try to enlist the help of a11y experts to
  write recommendations for the use cases/potential examples for each role,
  plus links to anything that would help people get started.
- Contact folks in the a11y community who might be willing to help write such
  pages. Get them working on pages.
- Create a spreadsheet to track progress on each page.
