# MDN content project: Modernizing the Learning Area JavaScript modules

This RFC proposes that we work on modernizing the [Learning Area JavaScript modules](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
available on MDN.

## Problem statement

The JavaScript learning area modules are pretty good as they stand, and still
helpful to aspiring web developers. The main problem is that many of the
component articles were written before the time that MDN's JS policy was
changed (from "don't use ES6 features, they are too modern" to "use modern
features").

As a result, a number of articles are a bit out of date, or teach the old way
of doing something first, with the new way added in as a new section at the end.

Examples:

- In the [Handling text — strings in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)
  article, old-school string concatenation is introduced centrally,
  whereas template literals are introduced at the end as a newer syntax that
  you'll also come across. This should really be done the other way round.
- In the [arrays introduction](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays),
  the basics are explained just fine, but there is no coverage of modern array
  methods that are very commonplace in JS these days, such as `map()` or `filter()`.
- In the [JS objects module](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects),
  old-school constructors and prototypes are introduced first, and ES class
  syntax is tacked on the end as an afterthought. This should be the other way
  round.
- We did some work on making sure that `const`/`let` is used in appropriate
  Places instead of `var`. We should check to see if there is any more work to
  do here.
- We should include a guide early on about targeting browsers, where we could
  cover things like considering which browsers/non-browser runtimes you need to
  support, making it clear that we only support modern browsers in these guides,
  and setting up tools like Babel.js if you want to support ancient engines.

## Priority assessment

This list checks this project against the [OWD prioritization criteria](https://github.com/openwebdocs/project/blob/main/steering-committee/prioritization-criteria.md).

- **Effort**: Medium/High: There are over 40 JavaScript articles in the
  learning area, and each one needs to be audited, a decision made about what we
  should do with it, and then rewriting work done. Related examples also need
  to be updated.
- **Dependencies**: Not much to mention here.
- **Community enablement**: Yes. Each page rewrite is a self-contained task, so
  we could get community to help out here.
- **Momentum**: Medium. A lot of features we'd be writing about are pretty
  stable, but the technology is very popular.
- **Enabling learners**: Yes!!
- **Enabling professionals**: Yes, somewhat. Even professional web developers
  can often benefit greatly from an authoritative source of information show
  the modern way to write JS. We should aim to keep this pretty up-to-date.
- **Underrepresented topics / Ethical web**: n/a
- **Operational necessities**: n/a
- **Addressing the needs of the web industry**: n/a

## Proposed solutions

Audit existing articles, work out how to update them, get them rewritten.

## Task list

- Agree on an overall strategy for the updates. For example, is there a
  particular set of ECMAScript that we want to stick to documenting in this
  resource? How new is too new? Do we gate it on what is supported in at least
  two rendering engines, or somesuchthing? How do we deal with
  backwards-compatibility? Show examples of how to support older browsers, or
  just teach everyone how to use Babel.js to begin with?
- Audit each page. For each one, write a list of what needs to be done to get
  that page updated in line with the above strategy.
- Find writers to help do this work.
- Divide the writing and reviewing work up between the available writers.
