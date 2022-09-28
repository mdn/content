---
title: Issue triage on MDN Web Docs
slug: MDN/Community/Issues/Issue_triage
page-type: mdn-community-guide
tags:
  - meta
  - community-guidelines
  - governance
---

This document looks at the process for triaging content bugs and getting them ready for contributors to effectively work on.

## Reporting and working on bugs

Anyone can report a content bug by writing an issue at <https://github.com/mdn/content/issues/new> using the "Content bug" issue template, or by using the "Report a problem with this content on GitHub" link at the bottom of each MDN page.

Once reported, content bugs are listed at <https://github.com/mdn/content/issues>, and are designed to be done by individuals with minimal process requirements. Anyone is welcome to work on a content bug, using the process outlined at [Fixing MDN content bugs](/en-US/docs/MDN/Community/Issues).

## Overall triage process

At a high level, the process for triage looks like so:

Triage preparation:

- Decide on triagers — Who will do the regular triage?
- Set initial labels — As soon as a new bug comes in, give it the "needs-triage" label, to signify that it needs to be triaged (this should happen automatically), plus a "Content:" label to signify what topic area it is in, e.g. "Content:HTML". Anyone can do this as they spot bugs coming in, but the MDN core team will keep an active eye on this.
- Set aside triage time — set out a regular 30-minute slot in which to do the triage, each week.

Triage for each issue:

- Checklist — run through checklist to see if it is ready to triage.
- Set priority measure — according to priority rules.
- Provide further information to help other contributors start working on bugs more easily.
- Set other labels — there are other labels to set, to help people to choose issues to work on.

Check through old bugs — look at existing bugs, and see if there are any that are stalled, or need closing, etc.

## Triage preparation

### Decide on triagers

We need an assigned triager to regularly triage bugs coming in on each MDN content area. We currently have the following triagers assigned:

- Accessibility — Eric Bailey?
- CSS — Rachel Andrew
- DevTools — Hamish Willee
- HTML — Rachel Andrew
- HTTP — Florian Scholz
- JS — Florian Scholz
- Learn — Chris Mills
- Learn:CSS — Rachel Andrew
- Learn:Express / Learn:Django — Hamish Willee
- Media — Ruth John
- Other — Ruth John
- SVG — André Jaenisch
- WebAPI — Ruth John
- WebExt — Caitlin/WebExt team

### Set initial labels

As soon as a new issue is filed, the MDN core team, and anyone else who wishes to help, will add the following labels to that issue:

- `needs-triage` — signals that this issue needs a proper triage, to get it ready to work on (this should happen automatically).
- `Content:<area>` — specifies the content topic this issue relates to, e.g. `Content:HTML` or `Content:CSS`. This needed for the triagers to be able to find the issues in their specific areas.
- `l10n-fr`, `l10n-zh`, `l10n-ja` — specifies that the issue filed concerns an active non-en-US locale. The teams for those locales will pick these issues up and triage them.

### Set aside triage time

Triagers don't need to be actively triaging bugs all the time. Instead, they should set out a 30-minute slot in which to triage the bugs in their area of responsibility, each week.

This doesn't have to be done as part of a synchronous meeting, or even at the same time as everyone else, but it should be done regularly, say once per week, to make sure that the backlog of untriaged bugs doesn't get too high.

## Triage process for each issue

### Checklist to determine if we have enough information

For each bug, run through the following checklist to make sure the issue contains enough information for someone to start working on the bug.

Does the issue contain:

- The MDN URL where the problem has been found.
- The URL of any example page or repo related to the bug, if appropriate.
- The specific heading on the MDN page where the problem can be found (if needed to find it).
- A clear description of what the problem is.

If this information is not present, then the triager should ask the submitter of the issue to provide these details, and not continue triaging the issue until those details are provided.

### Set priority measure

For each bug, set a priority measure label to help people who want to work on the most important issues or areas (rather than the topics they are interested in).

The levels of priority are:

- `P0` — A critical issue on any MDN doc.
- `P1` — A major issue on a Tier 1 MDN doc.
- `P2` — A minor issue on a Tier 1 MDN doc.
- `P3` — A major issue on a Tier 2 MDN doc.
- `P4` — A minor issue on a Tier 2 MDN doc.

Definitions:

- Critical issue — Something that could damage MDN's reputation severely and/or harm users, which we need to fix as soon as possible, regardless of where it appears on the site. Examples include code examples that if used in production could create a severe security issue, undesirable content such as malware, profanity, pornography, hate speech, or other undesirable content, or links to such content.
- Major issue — Something that could severely affect a page's usefulness, for example a significant amount of out-of-date information, a complex and important code example that doesn't work, a significant amount of prose that is badly written and hard to understand, a large number of broken links, etc.
- Minor issue — something that doesn't look great but does not affect learning, or only has a minor effect on learning. Examples — Typos, bad grammar, a broken link, a small amount of out-of-date information or badly-written prose, a small code snippet that doesn't work.

Generally speaking, critical issues should be fixed immediately, and would probably be handled by MDN staff/peers. And Tier 1 issues are more important than Tier 2 issues. Folks that are interested in tackling the highest priority MDN issues should always tackle Tier 0 issues if any are available, before moving on to Tier 1 then Tier 2 issues.

> **Note:** For definitions of Tier 1 and Tier 2, see the [MDN documentation priority list](https://mdn-contributor-docs.mozilla.org/legacy/documentation-priorities/).

### Provide further information

It is really useful for other contributors to provide them with further information to help them fix issues; we'd like to recommend that triaging each bug involves a time-box of up to 5 minutes in which the triager quickly describes some steps to take to fix the bug, to help the person who eventually tries to fix it.

For example:

```plain
To whoever fixes this issue, it looks like the following is needed:

* Update the first paragraph below heading X to correct the problem with Y
* Add a description of X
* Update the compatibility data at Link-X
```

### Set other labels

Next, set other labels as appropriate:

- `10 minute task`, `30 minute task`, `1 hour task`, `multiple hour task` — Some people like to search for bugs based on how much time they've got to contribute, so we like to give a rough measure to allow people to choose. We appreciate that this is hard to estimate, and that different people will fix bugs at different speeds, but this is only supposed to be a rough measure. When setting it, think about how much time you think someone with a moderate-to-good amount of knowledge in the subject area would take to fix it.
- `good first issue` — if the fix for the issue is really simple, and it would be a good practice issue for a newcomer just getting used to the system, mark it with this label.
- `help wanted` — this seems to be a very popular label for people to use to search for things to do on open source projects, so we set this as a matter of course on successfully-triaged bugs.
- `broken-link-internal`, `broken-link-external` — use these if the issue involves a link to a non-existent internal page, or a broken external link.
- Once the triage process is completed, **don't forget to remove the `needs-triage label`.**

## Check through old issues

At the end of your triage session, have a look through the older existing triaged issues in your topic area, and check to make sure none of the issues are being unnecessarily stalled or clogged up:

- Check assigned issues that are still open to see if the assignee is making progress. If they have done nothing after a week of being assigned, ask them if they still have to work on the issue. If another week passes and they have still done nothing, unassign them and say that you are opening this up again for others to take.
- If a PR has been issued to fix the issue but it has not been reviewed for a week, give the reviewer a gentle ping to ask if they can get to it.
- If a PR is waiting on review comments to be addressed after a week, then ask the submitter if they can respond to their review. If another week goes by, either fix the review comments yourself if you have time, or close the PR if not.
