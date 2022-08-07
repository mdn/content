---
title: Pull Request Etiquette and Process for MDN Content
slug: MDN/Community/MDN_content/Pull_requests
page-type: mdn-community-guide
tags:
  - meta
  - community-guidelines
  - governance
  - mdn-content
---
{{MDNSidebar}}

## Overall process

This section describes how contributors make changes on MDN Web Docs and how the changes are reviewed and land on the site.

### Types of content changes on MDN Web Docs

Content changes we get on MDN Web Docs are related to a variety of work streams, some of which include:

- **Day-to-day content improvement work**: This includes documentation of new APIs, new CSS properties, and other significant content additions. This is usually done by MDN Web Docs staff working for Mozilla, Google, Open Web Docs, Samsung, etc., but also sometimes by community volunteers.
- **"Drive-by" fixes**: This includes small updates done to the site to fix typos, grammatical issues, and technical inaccuracies. These issues are usually found by users of MDN Web Docs.
- **Content bug fixes**: These are usually done by volunteers to close issues on mdn/content repo.

### How content changes are reviewed

Regardless of how content changes are done, they will be submitted as pull requests on this repo, which requires rapid reviewing and merging to ensure that the site does not get out-of-date. This is managed in the following way:

1. **Reviewer assignment**: Different MDN staff members and volunteers have been assigned as "topic review owners", meaning that when a pull request related to a particular topic area of the site (e.g. the CSS reference, or the learning area) is opened, it will be assigned to that area's topic review owner(s). This is handled using the CODEOWNERS file, in which particular content directories are assigned to the respective reviewing team.
2. **Review, approval, merge**: Once the review has been done and the pull request has been approved, the assigned reviewer merges the pull request.
3. **Content update on the site**: The site is rebuilt once every 24 hours to ensure that the content does not get too stale. So volunteers can see their changes go live after 24 hours.

### Things to consider before opening a pull request

These guidelines apply to anyone opening a PR to make a change on MDN Web Docs.

- **Open issue or discussion before opening PR**: If your PR would contain any kind of significant complexity (for example, it contains technical changes and isn't just a typo fix, grammatical improvement, or a formatting/structural change), please open an [issue](https://github.com/mdn/content/issues/new/choose) or [discussion](https://github.com/mdn/mdn-community) to describe why you're making the change, how the change would improve the content, and anything else we need to know about the change. Specifically for content suggestions or feature proposals, we have a [well documented](../../issues/content-suggestions-feature-proposals/) process to follow.
- **Keep the PR short (1 issue per PR)**: Each PR should contain a single logical change or a related set of changes that make sense to submit together. If a PR becomes too large or contains too many unrelated changes, it becomes too difficult to review, and may begin to look suspicious (it is easier to hide malicious changes in a large PR. In such cases, the reviewer has the right to close your PR, and ask that you submit a separate PR for each logical set of changes that belong together. It is also good practice to reference the relevant issue in your PR description using [GitHub's special syntax](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue). This helps maintenance as GitHub will automatically close linked issues once the PR is merged.
- **PR to update grammar**: PRs should not contain large amounts of grammar updates. Seemingly insignificant changes can change the meaning of technical content, so these need a careful review. Keep in mind that MDN Web Docs contains technical documentation; you should not report basic improvements in the grammar but only cases where the grammar is clearly incorrect.
- **PR to update a demo repository**: For PRs that update API usage, there needs to be an accompanying PR on the mdn/content repository to update the corresponding relevant documentation. Such a PR can be rejected if there is no corresponding content PR.
- **Only enable auto-merge for approved PRs**: It is not a recommended practice to select the "Enable auto-merge (squash)" checkbox on your PRs that are waiting to be reviewed or approved.

### Guidelines for after submitting a pull request

We have general guidelines for what to do and expect after a PR has been opened. Please [refer to these guidelines](../../pull-requests/).

### Guidelines for pull request review assignments

These guidelines apply to anyone who is tasked with reviewing MDN content PRs.

#### If you are the assigned reviewer

- **Add a starting comment**: Add a comment as soon as possible that you are aware of the PR and will start the review soon. This is an important step to avoid someone else reviewing the PR at the same time as you and so that others know it's on your radar for review.
- **Ask for information from the PR author**: You can request more information to help with your review if the PR author has not explained why they are making this change. Ideally, they should reference an issue that they're trying to fix in this PR.
- **Ask for help**: If you're open to receiving or want technical help with the review, add the `review-help-needed` label.

If you don't understand a content change that you've been selected to review or feel that it is too large and complex for you to deal with, don't panic! Feel free to reach out to someone else to ask for help, like a colleague or someone else in your group of topic review owners (if you know who they are). If you are not sure who to approach for help, then ping our `@mdn/core-yari-content` group to ask for help.

Related to the above point, it is rare that you'll be required to review a large, complex content change with no warning, like a complete page rewrite, or the addition of several new reference pages or tutorials. Usually such changes are done as part of specific work streams where the content has been approved for addition and reviewer(s) have been assigned already. In such cases, the PR should be linked to an issue that explains all these details. If you are not sure, ask the PR author if they need a review of the content, and where the rationale behind the change is explained. Ping our team on [MDN Web Docs chat room](https://chat.mozilla.org/#/room/#mdn:mozilla.org) to ask for help if you are still not sure or if you think the content is suspicious.

- **Close PR with unrelated changes**: You have the right to close a PR if it is too complex and/or contains multiple unrelated changes and ask the PR author to submit their changes in smaller atomic chunks.
- **Ask for load balancing help**: If your plate is full at the moment and you don't think you will be able to complete the review in a timely manner, copy the `@mdn/core-yari-content` team and ask if someone else can take up the review.
