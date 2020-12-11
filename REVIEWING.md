# Reviewing pull requests

This document describes the review process for content changes on MDN Web Docs, and is for use by those who have been tasked with reviewing MDN content PRs.

## Process for reviewing content changes

Content changes we get on MDN are related to a variety of work streams, for example:

* Day-to-day content improvement work — new APIs, new CSS properties, and other significant platform updates and content additions, usually done by MDN staff working for Mozilla, Google, Open Web Docs, Samsung, etc., but also sometimes by community volunteers.
* "Drive-by fixes" — small updates done to the site to fix typos, grammatical issues, and technical inaccuracies, usually as they are found by users of MDN.
* MDN content bug fixes, usually done by volunteers to close issues opened by users on our [sprints](https://github.com/mdn/sprints/issues) repo.

Regardless of how a content change is done, they will be submitted as [pull requests](https://github.com/mdn/content/pulls) on this repo, which will require rapid reviewing and merging to ensure that the site does not get out-of-date. This is being handled as follows:

1. Different MDN staff members and volunteers have been assigned as "topic review owners", meaning that when a pull request comes in related to a particular topic area of the site (e.g. the CSS reference, or the learning area), it will be assigned to that area's topic review owner(s) and they will receive an e-mail notification asking for a review. This is being handled using a [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) file, in which particular content directories are assigned to the topics review owner's GitHub usernames.
1. Once the review has been done and the pull request has been approved, our mdn-merge group will be automatically pinged to ask if one of them can merge the pull request.
1. The site will be rebuilt once every 24 hours to ensure that the content does not get too stale.

## Review guidelines

If you are reviewing mdn content changes, read through the following guidelines. There's quite a lot here, but don't worry if you don't review perfectly in accordance with all of these points immediately. It is more important to make sure the content is readable, useful, correct, and not inappropriate, than it is to follow every guideline to the letter.

1. Familiarize yourself with the [MDN Code example guidelines](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines) and make sure that code examples follow the guidelines. You'll get used to them eventually, and we are intending to automatically lint against our guidelines at some point in the future.
1. Familiarize yourself with the [MDN Writing style guide](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Writing_style_guide), and use it to inform your reviews of new text content.
1. Familiarize yourself with the MDN [pull request guidelines](https://github.com/mdn/content/blob/main/README.md#pull-request-etiquette). The key points here are
   * You have the right to request more information to help your review if the submitter has not explained why they are making this change.
   * You have the right to close a pull request if it is too complex and/or contains multiple unrelated changes and ask the submitter to submit their changes in smaller atomic chunks.
1. When reviewing a pull request, use the [GitHub review tools](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews). Use "Request changes" when submitting a review that will require the submitter to do some more work, or "Approve" if the submission is ready to add and you want to request merging. [Reviewing proposed changes in a pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request) is also useful if you want more information.
1. Be polite and constructive at all times when writing review comments, or otherwise interacting with the submitter. You and the submitter are both bound by [our Code of Conduct](CODE_OF_CONDUCT.md) when contributing to MDN, which means adhering to Mozilla's [Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/). If anyone has engaged in behavior that is potentially illegal or makes you or someone else feel unsafe, unwelcome, or uncomfortable, you are encouraged to [report it](https://www.mozilla.org/en-US/about/governance/policies/participation/reporting/). We want MDN to be a welcoming, friendly community that we can all be proud of.
1. If you don't understand a content change that you've been selected to review, or feel that it is too large and complex for you to deal with, don't panic! Feel free to reach out to someone else to ask for help, like a colleague, or someone else in your group of topic review owners (if you know who they are). If you are not sure who to approach for help, then ping our @core-yari-content group to ask for help.
1. Related to the above point, it is rare that you'll be required to review a large, complex content change with no warning, like a complete page rewrite, or the addition of several new reference pages or tutorials. Usually such changes are done as part of specific work streams where the content has been approved for addition, and reviewer(s) have been assigned already. In such cases, the PR should be linked to an issue that explains all these details. If you are not sure, ask the submitter if they need a review of the content, and/or if their submission has been approved for inclusion on MDN. Ping our @core-yari-content group to ask for help if you are still not sure, or if you think the content is suspicious.
 

## Topic review owners

The following specific topic areas are being reviewed by the kind souls listed underneath them. Be kind to them, and thank them for all the help they give to this project. If you would like to help with MDN content reviews, [get in touch with us](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Getting_started#Step_4_Ask_for_help).

Note that changes to any content areas not explicitly listed below will be handled by the @core-yari-content group, which currently consists of @chrisdavidmills.

* https://github.com/mdn/content/tree/main/files/en-us/web/accessibility
  * @ericwbailey
* https://github.com/mdn/content/tree/main/files/en-us/learn
  * @chrisdavidmills
* https://github.com/mdn/content/tree/main/files/en-us/learn/css
  * @rachelandrew
* https://github.com/mdn/content/tree/main/files/en-us/learn/server-side
  * @hamishwillee
* https://github.com/mdn/content/tree/main/files/en-us/mdn
  * @chrisdavidmills
  * @Elchi3
* https://github.com/mdn/content/tree/main/files/en-us/tools
  * @hamishwillee
* https://github.com/mdn/content/tree/main/files/en-us/mozilla/add-ons
  * @caitmuenster
  * @rpl
  * @Rob--W
  * @zombie
  * @mixedpuppy
* https://github.com/mdn/content/tree/main/files/en-us/web/http
  * @hamishwillee
  * @Elchi3
* https://github.com/mdn/content/tree/main/files/en-us/web/css
  * @rachelandrew
  * @ericwbailey
  * @vkWeb
* https://github.com/mdn/content/tree/main/files/en-us/web/html
  * @rachelandrew
  * @ericwbailey
  * @vkWeb
* https://github.com/mdn/content/tree/main/files/en-us/web/javascript
  * @Rumyra
  * @sideshowbarker
  * @Elchi3
  * @vkWeb
* https://github.com/mdn/content/tree/main/files/en-us/web/api
  * @Rumyra
  * @sideshowbarker
  * @Elchi3
