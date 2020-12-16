# Reviewing pull requests

This document describes the review process for content changes on MDN Web Docs, and is for use by those who have been tasked with reviewing MDN content PRs.

## Process for reviewing content changes

Content changes we get on MDN are related to a variety of work streams, for example:

* Day-to-day content improvement work — new APIs, new CSS properties, and other significant platform updates and content additions, usually done by MDN staff working for Mozilla, Google, Open Web Docs, Samsung, etc., but also sometimes by community volunteers.
* "Drive-by fixes" — small updates done to the site to fix typos, grammatical issues, and technical inaccuracies, usually as they are found by users of MDN.
* MDN content bug fixes, usually done by volunteers to close issues opened by users on our [sprints](https://github.com/mdn/sprints/issues) repo.

Regardless of how a content change is done, they will be submitted as [pull requests](https://github.com/mdn/content/pulls) on this repo, which will require rapid reviewing and merging to ensure that the site does not get out-of-date. This is being handled as follows:

1. Different MDN staff members and volunteers have been assigned as "topic review owners", meaning that when a pull request comes in related to a particular topic area of the site (e.g. the CSS reference, or the learning area), it will be assigned to that area's topic review owner(s) and they will receive an e-mail notification asking for a review. This is being handled using a [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) file, in which particular content directories are assigned to the topics review owner's GitHub usernames.
1. Once the review has been done and the pull request has been approved, the reviewer should also merge the pull request.
1. The site will be rebuilt once every 24 hours to ensure that the content does not get too stale.

## Review guidelines

If you are reviewing mdn content changes, read through the following guidelines. There's quite a lot here, but don't worry if you don't review perfectly in accordance with all of these points immediately. It is more important to make sure the content is readable, useful, correct, and not inappropriate, than it is to follow every guideline to the letter.

1. Familiarize yourself with the [MDN Code example guidelines](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines) and make sure that code examples follow the guidelines. You'll get used to them eventually, and we are intending to automatically lint against our guidelines at some point in the future.
1. Familiarize yourself with the [MDN Writing style guide](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Writing_style_guide), and use it to inform your reviews of new text content.
1. Familiarize yourself with the MDN [pull request guidelines](https://github.com/mdn/content/blob/main/README.md#pull-request-etiquette). The key points here are
   * You have the right to request more information to help your review if the submitter has not explained why they are making this change.
   * You have the right to close a pull request if it is too complex and/or contains multiple unrelated changes and ask the submitter to submit their changes in smaller atomic chunks.
1. When reviewing a pull request, use the [GitHub review tools](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews). Use "Request changes" when submitting a review that will require the submitter to do some more work, or "Approve" if the submission is ready to add and you want to merge it. [Reviewing proposed changes in a pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request) is also useful if you want more information.
1. Be polite and constructive at all times when writing review comments, or otherwise interacting with the submitter and other community members. We are all bound by [our Code of Conduct](CODE_OF_CONDUCT.md) when contributing to MDN, which means adhering to Mozilla's [Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/). If anyone has engaged in behavior that is potentially illegal or makes you or someone else feel unsafe, unwelcome, or uncomfortable, you are encouraged to [report it](https://www.mozilla.org/en-US/about/governance/policies/participation/reporting/). We want MDN to be a welcoming, friendly community that we can all be proud of.
1. If a pull request is fine apart from a small typo or some other minor issue, you might want to just fix the issue yourself rather than ask the submitter to change it. You can do this provided the PR has been set up to allow changes (see [Allowing changes to a pull request branch created from a fork](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) for more details). If you are not sure how to make changes to someone else's pull request, [@vkWeb](https://github.com/vkWeb/) wrote some nice simple instructions on how to do this on the command line; see [ReviewPRCommands](https://gist.github.com/vkWeb/dcec82b079f1edc19478ddb58b0ffc5e). 
   * Alternatively, you can edit files using the GitHub UI — go to the pull request's "Files changed" tab, find the file you want to edit, and choose "three dot" menu (...) > Edit file. 
1. If you don't understand a content change that you've been selected to review, or feel that it is too large and complex for you to deal with, don't panic! Feel free to reach out to someone else to ask for help, like a colleague, or someone else in your group of topic review owners (if you know who they are). If you are not sure who to approach for help, then ping our @core-yari-content group to ask for help.
1. Related to the above point, it is rare that you'll be required to review a large, complex content change with no warning, like a complete page rewrite, or the addition of several new reference pages or tutorials. Usually such changes are done as part of specific work streams where the content has been approved for addition, and reviewer(s) have been assigned already. In such cases, the PR should be linked to an issue that explains all these details. If you are not sure, ask the submitter if they need a review of the content, and where the rationale behnd the change is explained. Ping our [@core-yari-content](https://github.com/orgs/mdn/teams/core-yari-content) team to ask for help if you are still not sure, or if you think the content is suspicious.

### Choosing how a pull request gets merged

When you're ready to merge a pull request to the main branch, you can use the green button in GitHub to perform the actual merge.

As explained in [Merging a pull request on GitHub](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request#merging-a-pull-request-on-github), GitHub provides multiple options for controlling how pull requests gets merged. The MDN content repo doesn't allow the *"Merge all of the commits into the base branch"* option, so you're left with a choice between two options:

* Squash the commits into one commit by clicking the merge drop down menu next to the green button, selecting **Squash and merge** and then clicking the green button (which will now say **Squash and merge**).

* Rebase the commits individually onto the base branch by clicking the merge drop down menu next to the green button, selecting **Rebase and merge** and then clicking the green button (which will now say **Rebase and merge**).

For most pull requests, you generally want to use the **Squash and merge** option, to squash all the commits in the pull-request branch into one commit.

Especially you should be careful to choose the **Squash and merge** option when your review of a pull request has resulted in the pull-request author making a series of small commits in response to your review suggestions.

Using that **Squash and merge** option helps significantly to keep the [commit history for the repo](https://github.com/mdn/content/commits/main) more readable. Otherwise, we end up with a commit history that's less clear, with multiple commit messages that are less informative, making it all a lot more work to read through later

However, in the case of some pull requests, using the **Rebase and merge** option makes more sense. You should choose that option when the commit author has intentionally constructed the pull request as a set of related commits, and has written an informative commit message for each commit in the pull request.

## Topic review owners

The following specific topic areas are being reviewed by the kind souls listed underneath them. Be kind to them, and thank them for all the help they give to this project. If you would like to help with MDN content reviews, [get in touch with us](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Getting_started#Step_4_Ask_for_help).

Note that changes to any content areas not explicitly listed below will be handled by the [@core-yari-content](https://github.com/orgs/mdn/teams/core-yari-content) team, which currently consists of [@chrisdavidmills](https://github.com/chrisdavidmills/).

* [Web accessibility content](https://github.com/mdn/content/tree/main/files/en-us/web/accessibility):
  * [@ericwbailey](https://github.com/ericwbailey)
* [General learning content](https://github.com/mdn/content/tree/main/files/en-us/learn):
  * [@chrisdavidmills](https://github.com/chrisdavidmills/)
* [CSS learning content](https://github.com/mdn/content/tree/main/files/en-us/learn/css):
  * [@rachelandrew](https://github.com/rachelandrew)
* [Server-side learning content](https://github.com/mdn/content/tree/main/files/en-us/learn/server-side):
  * [@hamishwillee](https://github.com/hamishwillee)
* [MDN meta docs](https://github.com/mdn/content/tree/main/files/en-us/mdn) — the [@yari-content-mdn](https://github.com/orgs/mdn/teams/yari-content-mdn) team, which consists of:
  * [@chrisdavidmills](https://github.com/chrisdavidmills/)
  * [@Elchi3](https://github.com/Elchi3)
* [Firefox Developer Tools content](https://github.com/mdn/content/tree/main/files/en-us/tools):
  * [@hamishwillee](https://github.com/hamishwillee)
* [Mozilla Add-ons reference content](https://github.com/mdn/content/tree/main/files/en-us/mozilla/add-ons) — the [@yari-content-mozilla-add-ons](https://github.com/orgs/mdn/teams/yari-content-mozilla-add-ons) team, which consists of:
  * [@caitmuenster](https://github.com/caitmuenster)
  * [@rpl](https://github.com/rpl)
  * [@Rob--W](https://github.com/Rob--W)
  * [@zombie](https://github.com/zombie)
  * [@mixedpuppy](https://github.com/mixedpuppy)
* [HTTP reference content](https://github.com/mdn/content/tree/main/files/en-us/web/http) — the [@yari-content-http](https://github.com/orgs/mdn/teams/yari-content-http) team, which consists of:
  * [@hamishwillee](https://github.com/hamishwillee)
  * [@Elchi3](https://github.com/Elchi3)
* [CSS reference content](https://github.com/mdn/content/tree/main/files/en-us/web/css) — the [@yari-content-css](https://github.com/orgs/mdn/teams/yari-content-css) team, which conists of:
  * [@rachelandrew](https://github.com/rachelandrew)
  * [@ericwbailey](https://github.com/ericwbailey)
  * [@vkWeb](https://github.com/vkWeb/)
* [HTML reference content](https://github.com/mdn/content/tree/main/files/en-us/web/html) — the [@yari-content-html](https://github.com/orgs/mdn/teams/yari-content-html) team, which consists of:
  * [@rachelandrew](https://github.com/rachelandrew)
  * [@ericwbailey](https://github.com/ericwbailey)
  * [@vkWeb](https://github.com/vkWeb/)
* [JavaScript reference content](https://github.com/mdn/content/tree/main/files/en-us/web/javascript) — the [@yari-content-javascript](https://github.com/orgs/mdn/teams/yari-content-javascript) team, which consists of:
  * [@Rumyra](https://github.com/Rumyra)
  * [@sideshowbarker](https://github.com/sideshowbarker)
  * [@Elchi3](https://github.com/Elchi3)
  * [@vkWeb](https://github.com/vkWeb/)
* [Web API reference content](https://github.com/mdn/content/tree/main/files/en-us/web/api) — the [@yari-content-web-api](https://github.com/orgs/mdn/teams/yari-content-web-api) team, which consists of:
  * [@Rumyra](https://github.com/Rumyra)
  * [@sideshowbarker](https://github.com/sideshowbarker)
  * [@Elchi3](https://github.com/Elchi3)
