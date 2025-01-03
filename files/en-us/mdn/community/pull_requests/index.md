---
title: Pull request submission and reviews
slug: MDN/Community/Pull_requests
page-type: mdn-community-guide
---

{{MDNSidebar}}

This document describes how contributors make changes to MDN Web Docs and how the changes are reviewed and land on the site.
Content changes to MDN Web Docs include:

- **Day-to-day improvements** for the documentation of APIs, CSS properties, platform updates and content additions.
  This is usually done by MDN Web Docs staff working for Mozilla, Google, Open Web Docs, Samsung, but also by community volunteers.
- **Minor fixes** and small updates to the site for fixing typos, grammatical issues, and technical inaccuracies.
  These issues are usually found by readers of MDN Web Docs.
- **Content bug fixes**, usually done by volunteers to close [issues on the `mdn/content` repository](https://github.com/mdn/content/issues).

Regardless of how content changes are done, they are submitted as pull requests on GitHub.
The content changes go through the following stages before they are published on MDN Web Docs:

1. **Submitting changes:** As a pull request author, you submit changes via opening a pull request.
   See the sections [Before you start](#before_you_start), [Open a pull request](#open_a_pull_request), and [After you open a pull request](#after_you_open_a_pull_request) to learn more about our processes.
2. **Reviewing changes:** Your changes are reviewed by MDN members and volunteers.
   See the section [Pull request review process](#pull_request_review_process) for more details.
3. **Viewing published changes:** Content updated on `mdn/content` goes live within a day of merging via a site rebuild once every 24 hours.

## Submitting changes

### Values and participation

We want MDN Web Docs to be a welcoming, friendly community that we can all be proud of.
All participants must follow our [Code of Conduct](https://github.com/mdn/content/blob/main/CODE_OF_CONDUCT.md) which means adhering to [Mozilla's Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/).
Be polite and constructive when opening pull requests, writing review comments, interacting with the pull request author or other community members.
If you or someone else has experienced behavior that is potentially illegal or makes you feel unsafe, unwelcome, or uncomfortable, we encourage you to [report it](https://www.mozilla.org/en-US/about/governance/policies/participation/reporting/).

### Before you start

Before you start work on MDN, please go through the recommendations and guidelines listed below.

**Pull requests must resolve or partially fix an existing issue.**
The reason why we have this restriction is to avoid that you start on any kind of task that someone else might already be working on.
Search through issues and pull requests in the [MDN repository](https://github.com/orgs/mdn/repositories) you want to contribute to and confirm that the work you want to start is not already being worked on.
When looking to contribute to the MDN project, you will find yourself in one of the following situations:

- **If you are looking to contribute to the project**, you can find tasks under 'Issues' in any of the [MDN GitHub repositories](https://github.com/orgs/mdn/repositories) (for example, [`mdn/content` issues](https://github.com/mdn/content/issues)) and our [public GitHub project boards](https://github.com/orgs/mdn/projects).
  Make sure the issue isn't assigned to someone and no one has already opened a pull request for the task.
  Issues labelled with `good first issue` are a good place to start.

- **If you have found a problem on MDN**, you should open an issue first.
  **Issues need a response from maintainers before you start working** so that you know a problem addressed by a pull request is valid and that your pull request will be accepted.
  More information on issues can be found on our [Community pages for GitHub issues](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **If you want to suggest new content or a new feature**, submit a proposal through the 'New content or feature suggestion' [GitHub issue template](https://github.com/mdn/mdn/issues/new/choose).

If you're not sure where to start, reach out to us on [the Discord server](/discord) and ask for feedback.

### Open a pull request

When you're ready to open a pull request, follow these guidelines:

- **Pull requests should be short and focused to one issue:** If possible, group related set of changes into multiple, small pull requests.
  If a pull request becomes too large, the reviewer may close it and ask that you to submit pull requests for each logical set of changes that belong together.
- **Add a description of the changes:** Provide as much context and rationale for the pull request as possible.
- **Add the link to the issue you are closing:** In the pull request description, add 'Fixes' if it fully resolves the issue or 'Relates to' if it is a related issue.
  More information about linking to issues in pull requests can be found in [GitHub docs](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Add 'depends on'** with a link to a dependency if there are pull requests that must be merged first (e.g., code examples in other repositories).
- **Accompany code example changes with content changes:** This is important to ensure that updated examples are served correctly.
  If you're making content changes that affect how examples are used, the related code examples should also be updated.
- **Add a reviewer:** You can add a reviewer, such as a team member or a topic owner, if you already know who should review your pull request.
- **Don't make grammar-only changes:**
  MDN Web Docs contains technical documentation; you should not suggest prose style changes except where grammar is incorrect.
- **Don't unnecessarily add or remove line breaks** on pages that follow a certain formatting style.
- **Don't enable auto-merge.**

### After you open a pull request

- **Handle CI failures** from the automated tests that run as GitHub Actions (see `.github/workflows`).
  If one or more of these tests fail, it is your responsibility to try to resolve them.
  If you don't know how to resolve the underlying issues, ask for help.
- **Resolve merge conflicts** with the main branch; you are responsible for resolving these.
  You can do this by merging the `mdn/main` branch into your branch.
  For more information, see the GitHub documentation on [keeping your branch up to date](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Be responsive to feedback.**
  This means being prepared to make changes to the pull request based on the review.
  If a review happens and the changes are not made, the pull request may be closed.
- **Be patient during the review process.**
  The MDN organization receives a large volume of pull requests and the team may need time to review your contributions.
- **Don't reopen closed pull requests.**
  If you must create a new pull request, it can reference the closed one.

## Pull request review process

Reviewer(s) are automatically assigned when you open a pull request based on a `CODEOWNERS` file, but if there is a specific person you want to request review from, you can [request a review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) manually.
We also use auto-labeling on pull requests to help us triage them.
Maintainers can further triage pull requests and add any additional labels, such as `needs-info` or `on-hold`, if needed based on context.

If you want to review a pull request but are not listed as a reviewer, you may add yourself as one.
It's polite to check with existing reviewers first by commenting on the pull request that you intend to start a review.

### Reviewers and assignees

The MDN Web Docs team uses reviewers and assignees to track the status of pull requests.

- **Reviewers** are people that assess the changes in pull request and provide feedback for the author.
- **Assignees** are people responsible for making sure the pull request is not blocked.
  Not all pull requests have assignees, but if they do, they are responsible for making sure the pull request progresses.
  An assignee helps the work reach a conclusion either by merging, closing, or undertaking unblocking work themselves.

A pull request reviewer or assignee is responsible for merging the changes.

Before you start with a review, check the pull request description to make sure no one specific should review it.
Ensure that all continuous integration (CI) tasks have been completed successfully and that there are no merge conflicts.

If any tasks fail or there are merge conflicts, communicate this to the author; it is their responsibility to address these.
You may set the author as an **assignee** to indicate that a pull request needs their attention before a review can start.
Do leave the door open to the author to ask for help, especially new contributors to the project.

### Reviewing a pull request

When it comes to the changes in a pull request, content and prose must adhere to the [MDN Writing style guide](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide) and example code must follow the [code style guide](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

When you are reviewing a pull request, you should:

- **Add a comment** to the pull request to let the author know you are aware of the pull request and will start the review.
  This is to avoid cases when someone else starts to review the pull request at the same time unnecessarily.
- **Limit the scope of review** to the changes in the pull request only.
  Open a follow-up issue or pull request to address other improvements not covered by the pull request.
- **Ask for help** and add the `review-help-needed` label if you need technical assistance with the review.
- **Close pull requests with unrelated changes** if it is too complex or contains multiple unrelated changes.
  In such cases, ask the pull request author to submit their changes in smaller chunks.
- **Request load balancing** if your plate is full and you don't have bandwidth for the review.
  Tag the `@core-yari-content` team and ask if someone else can step in.
- **Don't merge unless 'depends on'** pull requests are merged first.
- **Don't merge pull requests that have failing tests.**
  It is good [open source etiquette](/en-US/docs/MDN/Community/Open_source_etiquette) to keep the `main` branch stable to avoid disruption for contributors, maintainers, and for automated processes.
  An unstable `main` branch blocks all other pull requests and makes it difficult for others to review and merge contributions.
  In addition, contributors who watch repositories receive high volumes of notifications and unnecessary noise caused by failing tests can be frustrating.
  If you are not sure how to fix the failing tests, [ask for help](/en-US/docs/MDN/Community/Communication_channels) or assign the pull request to someone else.

If a pull request looks good apart from small typos or other minor issues, you may want to fix the problem directly.
You can do this provided the pull request [has been set up to allow changes](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).
It's recommended to use [comments with suggestions](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request) for fixing minor issues, as they can be batched and committed in one go.

When submitting your review you have three options, **approve**, **comment**, or **request changes**.
The following sections explain when to use each option.

### Requesting changes

Use the request changes option when the feedback you provided _needs_ to be addressed by the author and re-reviewed by the reviewer before the pull request can be approved and merged.

#### Comment

Use the comment option when your feedback is not critical and will not require a re-review.
In short, you trust the author and other reviewers to use good judgment.

#### Approve

Use the approve option when everything looks good and is ready to merge from your perspective.
After submitting your review, you can safely merge the pull request if there are no other reviewers or any outstanding review comments to address.

#### What to do if you are stuck

If you don't understand a content change or feel that it is too large and complex for you to deal with, don't panic!
A good place to start is by asking for information from the pull request author to help.

It is rare that you'll be required to review a large, complex content change with no warning.
If this does happen, however, the pull request description should link to an issue that explains the background information.

If you are still not sure or if you think the content is suspicious, reach out to the MDN Web Docs team and ask for help.

### Guidelines for turnaround times for authors and reviewers

This section provides details for expected turnaround times while responding to review comments if you're a pull request author and while reviewing pull requests if you're a reviewer.

- **Reviewing**:
  The pull request reviewer should be able to review the changes in 2 weeks or less.
  In the 2 weeks after a pull request is open, the reviewer can:
  - Leave a comment about when they can start reviewing the pull request
  - Ask for technical or resource help
- **Addressing requested changes:**
  The pull request author should be able to respond to or fix the comments in 4 weeks or less.
  If the pull request author is unable to respond or fix the review comments in that time, the reviewer can do one of the following:
  - Commit the changes and merge the pull request
  - Close the pull request

### External reviewers

Some pull requests on the MDN content repo relate to specific work by browser vendors or organizations with defined authors and reviewers.
The author will include the username of the reviewer in a line at the bottom of the pull request description in these cases, for example:

```md
reviewer: @jpmedley
```

If you receive a review request and you have been overridden with another reviewer in the manner described above, do not review the changes.
Once the reviewer mentioned in the description has approved the changes, they will ask for an approval required by the `CODEOWNERS`.

## Reading list

Reviewers are encouraged to read the following articles for help with common tasks:

- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/) explains how to close an unfinished or rejected pull request
- [Kindness and Code Reviews: Improving the Way We Give Feedback](https://product.voxmedia.com/2018/8/21/17549400/kindness-and-code-reviews-improving-the-way-we-give-feedback) gives useful hints to give feedback
- [Code Review Guidelines for the Reviewer](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) provides examples of good and bad feedback
