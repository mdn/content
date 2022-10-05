---
title: "Issue triage"
weight: 0
description: >
  Issue triage process for mdn/content
---

We triage new issues filed in the mdn/content repository. The purpose of triage is:

1. **Quickly close any issues that don't need further action from mdn/content maintainers**: For example, we often see issues that could be closed with a comment, but it's hard for individual maintainers to feel able (empowered) to do this. It's helpful to have a dedicated space where we can make collective decisions about these issues, and record them as collective decisions.

2. **Help remove blockages to issues being worked on**: We see issues getting stuck because it is not clear how to process with them. An outline of a plan for how to address an issue helps maintainers (both staff and volunteers) fix it.

## Triage meeting schedule and participants

We hold triage once a week. Triage meetings alternate timezones, between Europe/Asia-friendly and Europe/North America-friendly.

The meeting lasts 30 minutes.

All mdn/content maintainers (that is, all people with merge access to mdn/content) are invited.

One person is responsible for running the meeting: this includes getting the list of issues to triage and updating issues (adding labels, writing comments).

## Meeting schedule

The person running the meeting has a list of open issues that have the `needs-triage` label set.

For each issue, we ask:

- is this an issue we want to keep open? If not, close it now with a comment.
- is this issue in the correct repo? If not, transfer it now with a comment.
- otherwise:
  - do we need more information from the reporter? If so, ask, add the `needs-info` label, and move on. Issues that have had `needs-info` set for a month without a response may be closed.
  - is it a bug or a feature request?
  - what does a fix look like? If we can quickly decide and write that up as a comment in the issue. If we can't, don't (so we don't spend 30 minutes discussing one issue - maybe schedule it for the editorial meeting instead?)
  - is it a good first issue? If so, add the `good-first-issue` label.
  - do we need more/expert opinion? If so, tag an expert in the issue.
- remove the `needs-triage` label

This process does not prioritize issues or assign issues to people.
