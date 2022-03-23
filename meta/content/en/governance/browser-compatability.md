---
title: "Browser compatibility tables"
linkTitle: "Compatibility tables"
weight: 40
description: >
  How we manage the contents of browser compatibility tables
---

Browser compatibility tables on MDN Web Docs are generated from [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (also known as _BCD_). While MDN content and BCD are closely related projects, they're not directly tied to each other. This page describes the relationship between MDN content and BCD.

## MDN Web Docs and BCD are distinct projects

MDN Web Docs content is managed separately from browser compatibility data. BCD has its own [governance](https://github.com/mdn/browser-compat-data/blob/main/GOVERNANCE.md), [contribution process](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md), and [content guidelines](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines.md).

MDN uses browser compatibility data to generate browser compatibility tables (plus some other site content). MDN uses the data as provided, including:

- Feature descriptions
- Support status and reported version numbers
- Notes
- Experimental, standards track, and deprecation status

That said, MDN does not necessarily use all compatibility data. For example, some features in BCD don't have corresponding pages on MDN. Historically, certain browsers were part of BCD, but weren't included in compatibility tables on MDN.

The MDN site is just one of many consumers of BCD. While MDN's needs influence the direction and contents of BCD, they're not determinative.

## Update data

To change the details of individual compatibility tables on MDN, [contribute directly to BCD](https://github.com/mdn/browser-compat-data).

## Add a browser or engine

From time to time, MDN has added new browsers and engines to compatibility tables.
The MDN team selects browsers and engines to appear, weighing factors including:

- Relevance to open web platform technologies, both today and in the future
- Reader benefit and interest
- Maintenance requirements and impact on contributors
- Alignment with MDN's mission

In practice, selecting a browser requires two interdependent decision-making processes:

- Adding the browser or engine to BCD
- Selecting the browser or engine to appear on MDN

Since these processes can overlap, it presents something of a [chicken-or-the-egg](https://en.wikipedia.org/wiki/Chicken_or_the_egg) problem.
To recommend adding a browser to MDN, follow these steps:

1. Review BCD's [_Addition of browsers_](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines.md#addition-of-browsers) guideline.

1. Start [a discussion on the mdn/content repository](https://github.com/mdn/content/discussions) proposing to add the browser and mention `@mdn/yari-content`.

1. Complete the [browser selection questionnaire](#compatibility-table-browser-selection-questionnaire).

   If you're comfortable sharing your responses publicly, do so;
   otherwise, ask in the GitHub discussion for a Mozilla email contact.

   If needed, the MDN team may ask follow-up questions.

1. Wait for the team to consider your recommendation.

Whether your recommendation is selected, deferred, or rejected, we'll follow up in the GitHub discussion with next steps.

## Browser selection questionnaire

Answer these questions to recommend a browser (or engine) to MDN compatibility tables:

1. Why do you want this browser added to MDN (and BCD)?
1. How many users and developers do you estimate the browser has?
   How did you make this estimation?
1. What's the governance model of the browser?
   For example, who owns it, what is or is not open source, who participates in its development, and how is it funded?
1. What is on the browser's roadmap for the next year?
   How do you see the browser's compatibility or support for existing tools changing in the future?
