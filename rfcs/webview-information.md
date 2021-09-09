# MDN content project: WebView information on MDN

This RFC proposes that we work on adding WebView documentation to MDN, to help
web developers figure out how to test and support WebView environments (i.e. iOS
and Android WebView-based "mega app" type environments).

This would include:

- What is a WebView environment?
- How frequently WebView environments are used and in what regions they are
  used the most.
- How WebView environments differ from their browser counterparts.
- How to test a site in WebView environments.
- How to detect whether a site is running in a WebView environment at runtime.
- General overview of WebView API compatibility patterns, exceptions, and pain
  points, e.g. how to handle feature detection false positives.

## Problem statement

WebView environments are used more than you might think (early data suggests
that up to 20% of Android web use is WebView), but there is very little
information available on how to effectively support them, and some thorny
problems to overcome, for example certain features that are supported in a
rendering engine but don't work because of environmental differences.

## Priority assessment

This table checks this project against the [OWD prioritization criteria](https://github.com/openwebdocs/project/blob/main/steering-committee/prioritization-criteria.md).

- **Effort**: Low to medium. This is probably not a huge amount of content.
- **Dependencies**: Need to find experts in this area to help.
- **Community enablement**: Potentially, yes. Each page is a self-contained task.
- **Momentum**: Medium. WebView usage is on the rise; more people are becoming
  aware of these issues.
- **Enabling learners**: Not really.
- **Enabling professionals**: Yes.
- **Underrepresented topics / Ethical web**: n/a.
- **Operational necessities**: n/a.
- **Addressing the needs of the web industry**: Yes. As mentioned before, this
  kind of information is becoming more sought after.

## Proposed solutions

We need to write this content.

## Task list

- Write out summary of what content we want to produce, and organize it into a
  set of pages.
- Write an issue for each page, and try to enlist the help of experts in this area to
  write the content.
- Contact folks in the community who might be willing to help write such
  pages. Get them working on pages.
- Create a spreadsheet to track progress on each page.

## Useful links

- [What is in a Web View? An Analysis of Progressive Web App Features When the Means
  of Web Access is not a Web Browser](https://research.google/pubs/pub46739/) by 
  Thomas Steiner.
