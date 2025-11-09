---
title: Creating and working on issues
slug: MDN/Community/Issues
page-type: mdn-community-guide
sidebar: mdnsidebar
---

As a contributor, you can [report](#guidelines_for_reporting_an_issue) and [work](#guidelines_for_working_on_an_issue) on issues.
After you report an issue, the issue gets triaged. Issue [triaging](#guidelines_for_triaging_issues) is typically done by people assigned the role of a maintainer or an owner.

## General guidelines for participation

While reporting an issue or participating in a conversation in an issue, always ensure that your inputs are contributing to the overall progress of the project. Consider whether the issues you open and your comments in an issue are constructive and on topic and are not just adding noise.

Do the following:

- If you have a question, you can ask it in the [MDN Web Docs chat rooms](/en-US/docs/MDN/Community/Communication_channels#chat_rooms) instead of filing an issue.
- If there's many ways to fix a problem, consider if you need to [discuss](/en-US/docs/MDN/Community/Communication_channels#chat_rooms) it with the staff/community.
  Use discussions to gain different viewpoints and to converge on an agreed-upon course of action. This helps to keep issues focused and productive.
- After filing an issue, try to fix the problem yourself. There's a guide about [Pull request submission and reviews](/en-US/docs/MDN/Community/Pull_requests) that covers everything you need to know about the contribution process.

Avoid doing the following:

- Complicating issues by trying to discuss multiple topics or by making off-topic comments.
- Opening lots of issues asking vague questions.
- Asking questions without trying to solve the problem yourself first.

If you want to suggest new documentation or ways to improve the website, see [Proposing new content or features](/en-US/docs/MDN/Community/Issues/Content_suggestions_feature_proposals).

## Guidelines for reporting an issue

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues) are used to track bugs. An issue must be a single actionable task or a collection of related actionable tasks and must have a clear outcome.

### Before filing an issue

First, based on the type of problem you've discovered, identify the appropriate [MDN GitHub repository](/en-US/docs/MDN/Community/Our_repositories) to create the issue so the right people can handle it. Then, before creating an issue, check that it hasn't already been reported.

### Reporting an issue

Here are some hints for opening issues:

- Choose the appropriate category to report the issue. For example, to report a content bug, use the [Content issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) template in the `mdn/content` repository.
- Provide sufficient information while reporting the issue:
  - **Issue title** must convey succinctly the _required action_.
  - **Issue description** must clearly describe the bug and the action required to resolve the issue. It must also list the task or sub-tasks to be completed to resolve the issue. Some other guidelines include:
    - Use the description field to indicate the status of the task or sub-tasks by using checklists.
    - Update the status of a task in the issue description instead of commenting on the issue. Use [task lists](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) in the description if an issue has multiple parts. This helps others who may otherwise need to scroll through comments on the issue to determine the status of various tasks.
    - Comments in an issue should be limited to details or context that help resolve the issue.
- If you find yourself in one of the following situations, move the conversation to [MDN's discussion on GitHub](https://github.com/orgs/mdn/discussions):
  - A discussion needs to take place to clarify an issue.
  - A discussion begins after opening the issue.
  - The issue has no clear consensus on its resolution.
  - The requirements for completing the task expand while it's being resolved or the work is unclear.
- For minor bugs, you can [make the changes yourself](#fixing_issues_yourself) and submit a pull request.

If the information you provide in the issue is incomplete, you might be asked to provide more details during the [issue triaging process](#review_the_issue_for_completeness_of_information) (look out for the `needs info` label).

### Creating a task list issue

If the issue you're opening is not to report a bug but to perform a series of tasks, you can create the issue as a [task list](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists).
Explain the context or reason for performing the tasks in the description.
Ensure that you list all the actionable tasks as a checklist.

For example:

```md
// Issue title
Ensure sections follow the order defined in the CSS property template

### Description

The CSS property page template is defined [here](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template).
The task list in this issue will be used to compare the documented CSS properties with the template and track changes to the property pages for compliance.

### List of pages checked

- [x] [accent-color](/en-US/docs/Web/CSS/Reference/Properties/accent-color) - checked, okay
- [ ] [backdrop-filter](/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter)
- [ ] [letter-spacing](/en-US/docs/Web/CSS/Reference/Properties/letter-spacing) - open pull request to move `Accessibility concerns` and `Internationalization concerns` sections before the `Specifications` section.
```

## Guidelines for working on an issue

Remember that if you take on an issue, the expectation is for the work to be completed in a timely manner. If you're not able to make any progress for a week after being assigned or can no longer complete the required task, leave a comment and unassign yourself from the issue.

These are the general steps for working on an issue:

1. **Find an issue:** If you're looking to contribute, search for issues with a priority label, `p2` or `p3` (see what these [priority labels](#set_a_priority_label) mean). Alternatively, look for issues with [one of these labels that indicate we're inviting PRs from the community](#set_other_labels): `good first issue`, `accepting PR`, and `help wanted`. Most repositories have issues with these labels. You are welcome to browse and pick an issue that is suitable for your skill set.

   Another useful place to look for issues is the [MDN Issue Board](https://github.com/orgs/mdn/projects/25). This project view lists open issues from multiple repositories. You can filter the list based on the topics (`Labels` column) you're interested in. If you're curious, read the meanings of the [labels](#set_other_labels) that get applied during the issue triage process.

   > [!NOTE]
   > An issue with the `needs triage` label indicates that the MDN team has not reviewed the issue yet, and you shouldn't begin work on it.

2. **Assign the issue to yourself:** After finding an issue you'd like to work on, make sure that the issue is not assigned to anybody else. Add a comment saying you would like to work on the issue, and if you are able to, [assign the issue to yourself](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Do the research:** Most issues need some investigation before work can start.
   - Scope out the work that needs to be done. If you need to ask questions, ask them in the [MDN Web Docs chat rooms](/en-US/docs/MDN/Community/Communication_channels#chat_rooms).
   - If the issue is well-described, and the work is pretty obvious, go ahead and do it.
   - If the issue is not well-described, and/or you are not sure what is needed, feel free to @mention the poster and ask for more information.

4. **Make the changes:** Fork and branch the repository. Do your work and open a [pull request](/en-US/docs/MDN/Community/Pull_requests) in the repository. [Reference the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in the pull request description. Depending on the files you've updated in the pull request, a reviewer will be assigned to your pull request automatically. (Teams per topic area are defined in the [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) file).

   After opening the pull request, if you find you no longer have the time to make changes or incorporate review feedback, let the team know as soon as possible in a comment in the pull request. This will help the team assign another interested contributor to complete the work on the pull request and close the linked issue.

5. After your pull request has been reviewed and merged, you can mark the linked issue as closed. If you opened the pull request with `Fixes #<issue>` verbiage, the issue will be closed automatically when the pull request is merged.

### Fixing issues yourself

If you spot a bug — whether it's a problem with the website's look and feel or an error in documentation — you can try to fix it yourself in a [pull request](/en-US/docs/MDN/Community/Pull_requests).
If the bug is small (such as a typo or a minor sentence improvement) or involves a quick fix, you can submit a pull request with the appropriate changes.

For any other type of bug, begin by [opening an issue](#guidelines_for_reporting_an_issue).
Add a comment about your intent to work on the issue and, if possible, describe your proposed solution or steps to fix it.

> [!NOTE]
> Your time and effort might go waste if you open a pull request without opening an issue first.
> Wait for the issue to be triaged, so that the MDN Web Docs team can verify that the issue is legit and approve your proposed solution.

Using the [guidelines on working on an issue](#guidelines_for_working_on_an_issue), try to fix the problem by updating the appropriate source, such as:

- The MDN Web Docs **content** (in English) in the [mdn/content](https://github.com/mdn/content) repository
- The MDN Web Docs **translated content** in the [mdn/translated-content](https://github.com/mdn/translated-content) repository
- The MDN Web Docs **frontend** in the [mdn/fred](https://github.com/mdn/fred) repository

Each repository includes useful information to guide you on how to contribute.
For more information, see [our main GitHub repositories](/en-US/docs/MDN/Community/Our_repositories).

## Guidelines for triaging issues

If you are a maintainer or an owner in the MDN Web Docs GitHub organization, you are responsible for triaging issues in one or more MDN Web Docs repository.

The overall process for triaging includes some [general](#general_triaging_tasks) and some [issue-specific tasks](#issue-specific_triaging_tasks).

### General triaging tasks

- When an issue is opened, the `needs triage` label is set on the issue automatically. You can search for this label to look for issues that [need to be triaged](#issue-specific_triaging_tasks). Contributors or anybody else should not work on the issue until the issue has been triaged. (Triagers should remember to remove the `needs triage` label after triaging the issue.)

- In the [mdn/content repository](https://github.com/mdn/content/issues), an additional `Content:` label, such as `Content:CSS` or `Content:WebAPI`, is set on the issue automatically. This gets set based on the MDN URL mentioned in the issue. You can use the content-specific label to look for issues to be triaged in your specific topic area.

- If an issue concerns an active, non-en-US locale, set the appropriate label, such as `l10n-fr`, `l10n-zh`, or `l10n-ja`. The teams for those locales will pick these issues up and triage them.

- You don't need to actively triage issues all the time. Set aside time, say 30 minutes every week, to triage issues on a regular basis in your area of responsibility. Triaging doesn't have to be done as part of a synchronous meeting or even at the same time as everyone else, but it should be done regularly to make sure that the backlog of untriaged bugs doesn't get too high.

- Apart from triaging incoming issues every week, review the list of old bugs to see if there are any that are stalled, need closing, or are no longer relevant. The `idle` label is automatically set on issues that have had no activity for 30 days.
  - Check assigned issues that are still open to see if the assignee is making progress. If there is no progress after a week of being assigned, ask them if they still have time to work on the issue. If another week passes by without any progress, unassign them and leave a comment indicating that you're making the issue available for other interested contributors.
  - If a pull request has been opened to fix the issue but has not been reviewed for a week, give the reviewer a gentle ping to ask if they can get to it.
  - If a pull request to fix the issue is waiting on review comments to be addressed after a week, then ask the author if they can respond to their review. If another week goes by, either fix the review comments yourself if you have time, or close the pull request and unassign the related issue.

### Issue-specific triaging tasks

These are the guidelines to follow while triaging each issue.

#### Review if the issue is valid

These are some of the things to keep in mind while reviewing the validity of an issue:

- Check if the issue raised is valid and if the fix will improve the content for the readers and the website.
- Evaluate if the impact of the fix will be small or site-wide.
- Evaluate if the fix for the issue will need a discussion first, in which case, point the author to open a [discussion](https://github.com/orgs/mdn/discussions) instead.
- Check if the issue complies with our [writing guidelines](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide) and [templates](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types).
- Check whether suggestions for adding links comply with our [external links policy](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#external_links).

#### Review the issue for completeness of information

Review each issue against the following checklist to ensure that the issue contains the described information for someone to start working on the bug:

- URL of the MDN Web Docs page with the problem or URL of an example MDN Web Docs page if the problem exists on multiple pages
- The specific heading or section on the MDN Web Docs page where the problem was found
- A clear description of the incorrect, unhelpful, incomplete, or missing information

If any of the above information is not present, then you should ask the author of the issue to provide these details, and add the `needs info` label to the issue. Resume triaging the issue only after those details have been provided (after which, you can remove the `needs info` label). It is okay to wait for up to a week to get a response from the author.

#### Set a priority label

For each bug, set a priority label based on the severity of the issue to help people who want to work on the most important issues or areas.

- Critical issue: This type of issue needs to be fixed as soon as possible, regardless of where it appears on the site. This type of issue could damage MDN's reputation severely and/or harm users. Examples of this issue include an incorrect code snippet, which if used in production, could create a severe security problem and undesirable content such as malware, profanity, pornography, hate speech, or links to such content.
  - Label: `p0` (will be addressed immediately)

- Major issue: This type of issue could severely affect a page's usefulness. For example, a significant amount of out-of-date information, a complex and important code example that doesn't work, a significant amount of prose that is badly written and hard to understand, or a large number of broken links.
  - Labels: `p1` (will be addressed soon) and `p2` (will be addressed soon, but higher priority items will take precedence)

- Minor issue: This is a type of improvement issue that can make the existing content better but does not affect learning or only has a minor effect on learning. Since these types of issues are not actively planned for, help from contributors to fix these issues is welcome and much appreciated. Fixing some of these issues can also provide the necessary practice to beginner contributors who are starting to get familiar with the contribution process. Examples include typos, bad grammar, a broken link, a small amount of out-of-date information or badly-written prose, or a code snippet that doesn't work.
  - Labels: `p3` (no visibility when the issue will be addressed)

In general, critical issues should be fixed immediately and are most likely handled by MDN staff and peers. If not specified, `p3` is the default priority level.

#### Add helpful information

If possible, add information that can help contributors to fix the issue. The information can be in the form of steps, general approach, links to other similar fixed issues, or reading resources. A well-laid out plan or steps is especially required in issues that are labeled `good first issue` and can help ramp up new contributors quickly. You can time-box this task to 5-10 minutes.

For example, as a triager, you can add the following information to the issue you are triaging:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Set other labels

Next, set the following labels where possible:

- A label to indicate the "type of problem" that needs to be fixed, if applicable:
  - `broken link external`: The issue reports a broken link to an external page.
  - `document not written`: The issue reports a necessary document that has not been written yet, usually because a link points to it. Note that we have a [Web Docs Backlog](https://openwebdocs.github.io/web-docs-backlog/all/) project that already tracks many unwritten reference pages, so if the issue is about one of those, you can [close the issue](#closing_an_issue_as_not_planned) with `closed: duplicate` and point to the backlog.
  - `screenshot`: The issue reports a missing or outdated screenshot.
  - `baseline`: The issue reports an incorrect [baseline](/en-US/docs/Glossary/Baseline/Compatibility) banner. Note that this banner is not controlled by content, but through a collaboration of [browser compat data](https://github.com/mdn/browser-compat-data), [front-end code](https://github.com/mdn/fred), and the [web-platform-dx/web-features](https://github.com/web-platform-dx/web-features) project. You should almost always either close the issue as working as intended or transfer it somewhere else.

- A "goal" label to indicate what the fix is trying to achieve:
  - `goal: accuracy`: The issue reports incorrect or inaccurate information. If the content was accurate at the time of writing, use `goal: up-to-date` instead.
  - `goal: clarity`: The issue reports misleading or unclear information (but is technically correct).
  - `goal: completeness`: The issue reports missing information, usually important caveats or explanations.
  - `goal: consistency`: The issue reports inconsistent information. Use this label only for editorial consistency, such as code examples and their descriptions; if at least one place is technically incorrect, use the `goal: accuracy` label instead.
  - `goal: up-to-date`: The issue reports out-of-date information, usually because of changes in the web platform.
  - `goal: best practices`: The issue reports anti-patterns used in code examples or content.
  - `goal: discoverability`: The issue reports missing links to related content or missing keywords that would help search engines find the page.

- An "effort" label to help contributors find issues that match the time and effort they can spend. Use your best estimate to apply the appropriate label, since the actual effort ultimately depends on the contributor's skill set and experience. In reality, the effort put in may be more significant than the amount of work delivered (e.g., the work requires significant prior research) or vice versa (e.g., it only involves a single change that affects many pages).
  - `effort: small`: The fix would likely be under 50 lines (corresponding to an `xs` or `s`-sized PR).
  - `effort: medium`: The fix would likely be between 50 and 1000 lines (corresponding to an `m` or `l`-sized PR).
  - `effort: large`: The fix would likely be over 1000 lines (corresponding to an `xl`-sized PR).


- An "accepting contribution" type of label that indicates we're inviting PRs from the community:
  - `good first issue`: Add this label if the fix for the issue is really simple and would provide good practice for a newcomer who is getting used to the contribution process. Apply this label only if _all_ these are true:
    - There are instructions, either from the author or the triager, about what _exactly_ needs to be written (preferably verbatim text, or a step-by-step guide).
    - The fix targets one single page (so the contributor can easily fix it via the web interface).
    - The fix does not involve writing significant new content or code, which may require deeper technical understanding.
  - `help wanted`: Set this label if the issue requires help from someone who knows about or is familiar with the topic. This is a popular label, and some contributors use it to search for issues to work on in open source projects in their areas of familiarity or expertise.
  - `accepting PR`: Add this neutral label if the issue is not as straightforward as a `good first issue`, but not so complex or niche to require a `help wanted` label.

  If an issue has none of the above labels, it generally indicates that community contributions are discouraged, either because further discussion is needed, because it needs someone familiar with the MDN editorial conventions (i.e., the team), or because a team member would like to work on it. Contributors can still work on these issues if they are familiar enough with the process.

- Issue status: if an issue is not marked as welcoming PRs or otherwise in progress, add a label indicating what it's blocked on.
  - `needs BCD update`: Set this label if the issue involves documentation for new features or behavior that would first need data about when it's implemented.
  - `needs content update`: Set this label if the issue fix in another repository will need an equivalent fix in the `mdn/content` repository.
  - `needs decision`: Set this label if the issue involves a team consensus on the approach. The consensus can be reached via a discussion or a synchronous internal meeting.
  - `needs example update`: Set this label if the issue involves synchronizing code examples in another repository. If the repository is external, it probably needs to be converted to an internal [live sample](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples) or transferred under MDN first.
  - `needs info`: As [mentioned above](#review_the_issue_for_completeness_of_information), set this label if any information is requested, either from the issue author, from the author of the content in question, or from someone else, in order to proceed with the issue.
  - `on hold`: A generic label to indicate that the issue should not be worked on yet.
  - `waiting for implementations`: Set this label if the issue involves a feature that is not yet implemented in browsers and therefore don't qualify for our [documentation criteria](/en-US/docs/MDN/Writing_guidelines/Criteria_for_inclusion).

> [!NOTE]
> After the triage process is complete, remove the `needs triage` label.

### Closing an issue as not planned

If an issue does not map to any action items, you should consider closing the issue as not planned. Select from one of the labels below:

- `closed: browser bug`: The issue reports unexpected behavior (with their code or MDN's code) that's actually a browser bug, and it's not significant enough to warrant a BCD note.
- `closed: duplicate`: The issue is already tracked elsewhere. If there's another issue, use GitHub's "close as duplicate" feature, linking that issue; otherwise, indicate where the canonical place to track the issue is, such as [Web Docs Backlog](https://openwebdocs.github.io/web-docs-backlog/all/).
- `closed: question`: The issue is based on a user error or misunderstanding, and the content is sufficiently correct and clear. However, usually do give some acknowledgment of the issue and consider whether the content can be clarified further to avoid similar questions.
- `closed: wontfix`: The issue reports a valid "problem", but MDN decides not to fix it. Reasons include too much effort, out of scope, working as intended, etc.
