---
title: Pull request guidelines
slug: MDN/Community/Pull_requests
page-type: mdn-community-guide
tags:
  - meta
  - community-guidelines
  - governance
---
{{MDNSidebar}}

## Guidelines for after submitting a pull request

- **Handle test failures**: When you submit a PR, a number of tests are automatically run as [GitHub Actions](https://github.com/features/actions). If one or more of these tests fail, it is your responsibility to try and resolve the underlying issue(s). If you don't know how to resolve the underlying issue(s), you can ask for help. Your PR will not be approved and merged if there are failing tests.
- **Resolve merge conflicts**: If your PR has [merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts) with the main branch (GitHub checks for this automatically and notifies you), you are responsible for resolving them. You have two options here:
  - For simple merge conflicts, you can use the [GitHub UI](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) to resolve the conflicts.
  - For more complex merge conflicts, you should use the [command line(terminal)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) to resolve the conflicts.
- **Don't reopen closed PRs**: Don't re-open a PR that a reviewer has closed unless there has been a discussion and a consensus reached to do so. In most cases it is best to open a new PR and reference the previous PR.

## Reviewing pull requests

This document describes the review process for content changes on MDN Web Docs, and is for use by those who have been tasked with reviewing MDN content PRs.

## Process for reviewing content changes

Content changes we get on MDN are related to a variety of work streams,
for example:

- Day-to-day content improvement work — new APIs, new CSS properties, and
  other significant platform updates and content additions, usually done
  by MDN staff working for Mozilla, Google, Open Web Docs, Samsung, etc.,
  but also sometimes by community volunteers.
- "Drive-by fixes" — small updates done to the site to fix typos, grammatical issues, and technical inaccuracies, usually as they are found by readers of MDN Web Docs.
- MDN content bug fixes, usually done by volunteers to close issues on this repo.

Regardless of how a content change is done, they will be submitted as
[pull requests](https://github.com/mdn/content/pulls) on this repo, which will require rapid reviewing and merging to ensure that the site does not get out-of-date. This is being handled as follows:

1. Different MDN staff members and volunteers have been assigned as "topic
   review owners", meaning that when a pull request comes in related to a
   particular topic area of the site (e.g. the CSS reference, or the learning area), it will be assigned to that area's topic review owner(s) and they will receive an e-mail notification asking for a review. This is being handled using a [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) file, in which particular content directories are assigned to the topics review owner's GitHub usernames.
1. Once the review has been done and the pull request has been approved, the
   reviewer should also merge the pull request.
1. The site will be rebuilt once every 24 hours to ensure that the content
   does not get too stale.

## Review guidelines

If you are reviewing mdn content changes, read through the following
guidelines. There's quite a lot here, but don't worry if you don't review
perfectly in accordance with all of these points immediately. It is more
important to make sure the content is readable, useful, correct, and not
inappropriate, than it is to follow every guideline to the letter.

1. Familiarize yourself with the [MDN Code example guidelines](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_example_guidelines) and make sure that code examples follow the guidelines. You'll get used to them eventually, and we are intending to automatically lint against our guidelines at some point in the future.
1. Familiarize yourself with the [MDN Writing style guide](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide), and use it to inform your reviews of new text content.
1. Familiarize yourself with the MDN [pull request guidelines](https://github.com/mdn/content/blob/main/README.md#pull-request-etiquette).
   The key points here are
   - You have the right to request more information to help your review if the submitter has not explained why they are making this change.
   - You have the right to close a pull request if it is too complex and/or contains multiple unrelated changes and ask the submitter to submit their changes in smaller atomic chunks.
1. When reviewing a pull request, use the [GitHub review tools](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews). Use "Request changes" when submitting a review that will require the submitter to do some more work, or "Approve" if the submission is ready to add and you want to merge it. [Reviewing proposed changes in a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) is also useful if you want more information.
1. Be polite and constructive at all times when writing review comments, or otherwise interacting with the submitter and other community members. We are all bound by our Code of Conduct when contributing to MDN, which means adhering to Mozilla's [Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/). If anyone has engaged in behavior that is potentially illegal or makes you or someone else feel unsafe, unwelcome, or uncomfortable, you are encouraged to [report it](https://www.mozilla.org/en-US/about/governance/policies/participation/reporting/). We want MDN to be a welcoming, friendly community that we can all be proud of.
1. If a pull request is fine apart from a small typo or some other minor issue, you might want to just fix the issue yourself rather than ask the submitter to change it. You can do this provided the PR has been set up to allow changes (see [Allowing changes to a pull request branch created from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork) for more details). If you are not sure how to make changes to someone else's pull request, [@vkWeb](https://github.com/vkWeb/) wrote some nice simple instructions on how to do this on the command line; see [ReviewPRCommands](https://gist.github.com/vkWeb/dcec82b079f1edc19478ddb58b0ffc5e).
   - Alternatively, you can edit files using the GitHub UI — go to the pull request's "Files changed" tab, find the file you want to edit, and choose "three dot" menu (...) > Edit file.
1. If you don't understand a content change that you've been selected to review, or feel that it is too large and complex for you to deal with, don't panic! Feel free to reach out to someone else to ask for help, like a colleague, or someone else in your group of topic review owners (if you know who they are). If you are not sure who to approach for help, then ping our `@core-yari-content` group to ask for help.
1. Related to the above point, it is rare that you'll be required to review a large, complex content change with no warning, like a complete page rewrite, or the addition of several new reference pages or tutorials. Usually such changes are done as part of specific work streams where the content has been approved for addition, and reviewer(s) have been assigned already. In such cases, the PR should be linked to an issue that explains all these details. If you are not sure, ask the submitter if they need a review of the content, and where the rationale behind the change is explained. Ping our team on [MDN Web Docs chat room](https://chat.mozilla.org/#/room/#mdn:mozilla.org) to ask for help if you are still not sure, or if you think the content is suspicious.

Note: You may encounter merge conflicts as you review pull requests, if a another pull request that touches some of the same files got merged before the one you are reviewing. [Addressing merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts) is a useful resource to help you. Feel free also to ask your team(s) for help if you need it.

## Specific reviewer overrides on pull requests

Some of the pull requests submitted on the `content` repo relate to specific workstreams being undertaken by browser vendors or other organizations that have a defined set of writers and reviewers. In these cases, the submitter of the PR will include the username of the reviewer in a line at the bottom of the pull request description, for example:

`reviewer: @jpmedley`

Upon submitting the pull request, they will request a review from the reviewer specified in the pull request description. Once that reviewer has approved the new content, they will then ask you for an approval as required by the `CODEOWNERS` system for the pull request to be mergeable.

Therefore, if you receive a pull request review request and then see that you have been overridden with another reviewer in the manner described above, then don't review the pull request — just wait for an approval request.

## Topic review owners

The following specific topic areas are being reviewed by the kind souls listed underneath them. Be kind to them, and thank them for all the help they give to this project. If you would like to help with MDN content reviews,
[get in touch with us](/en-US/docs/MDN/Community/Contributing/Getting_started#Step_4_Ask_for_help).

Note that changes to any content areas not explicitly listed below will be handled by the [@core-yari-content](https://github.com/orgs/mdn/teams/core-yari-content) team.

- [Web accessibility content](https://github.com/orgs/mdn/teams/yari-content-accessibility)
- [General learning content](https://github.com/orgs/mdn/teams/yari-content)
- [CSS learning content](https://github.com/orgs/mdn/teams/yari-content-css)
- [Server-side learning content](https://github.com/orgs/mdn/teams/yari-content)
- [MDN meta docs](https://github.com/orgs/mdn/teams/yari-content)
- [Firefox Developer Tools content](https://github.com/orgs/mdn/teams/yari-content)
- [Mozilla Add-ons reference content](https://github.com/orgs/mdn/teams/yari-content-mozilla-add-ons)
- [HTTP reference content](https://github.com/orgs/mdn/teams/yari-content-http)
- [CSS reference content](https://github.com/orgs/mdn/teams/yari-content-css)
- [HTML reference content](https://github.com/orgs/mdn/teams/yari-content-html)
- [JavaScript reference content](https://github.com/orgs/mdn/teams/yari-content-javascript)
- [Web API reference content](https://github.com/orgs/mdn/teams/yari-content-web-api)
- [SVG reference content](https://github.com/orgs/mdn/teams/yari-content-svg)
- [WebAssembly reference content](https://github.com/orgs/mdn/teams/content-webassembly)

### Reviewer alumni

The following folks used to be in one or more of our review teams, but no
longer have the time to contribute; we want to give them our sincere thanks
for all their help.

- [@vkWeb](https://github.com/vkWeb/)
- [@ericwbailey](https://github.com/ericwbailey)
- [@chrisdavidmills](https://github.com/chrisdavidmills/)
- [@mirunacurtean](https://github.com/mirunacurtean)

## Make progress, not noise

Think carefully about the way you handle communication in the project — make sure it is useful, and that it doesn't make other contributors jobs harder. Submitting pull requests to fix issues is great, but are they truly useful, and easy to review? Filing issues and joining in other conversations is fine, but are your issues and comments on topic, or are they just adding noise?

As a rule, do:

- Fix one issue per PR — it may be slightly more work for you, but it is much easier to review a single clear fix.
- Ask questions using other mechanisms like [chat rooms](https://chat.mozilla.org/#/room/#mdn:mozilla.org) or [forums](<(https://discourse.mozilla.org/c/mdn/236)>) if you are not sure whether something is useful or have a simple question.
- Read the [contributor documentation]() and [how to write documentation]() first to try to answer the question yourself before filing a pr.

Don't:

- Try to cram multiple fixes into a single pull request. It makes it a lot harder to review, and raises suspicions (some people might think you are trying to hide some malicious code in between the valid changes).

## Opening a pull request

## Reviewing a pull request

## Pull requests we accept

## Idle pull requests
