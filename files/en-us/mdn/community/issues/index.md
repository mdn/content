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

- Before filing an issue, consider if you need to [discuss](/en-US/docs/MDN/Community/Communication_channels#chat_rooms) it with the staff/community. Use discussions to gain different viewpoints and to converge on an agreed-upon course of action. This helps to keep issues focused and productive.
- After filing an issue, try to fix the problem yourself. Read our [contribution guide](https://github.com/mdn/content/blob/main/CONTRIBUTING.md) to learn more.
- If you have a question, you can ask it in the [MDN Web Docs chat rooms](/en-US/docs/MDN/Community/Communication_channels#chat_rooms) instead of filing an issue.

Avoid doing the following:

- Complicating issues by trying to discuss multiple topics or by making off-topic comments.
- Opening lots of issues asking vague questions.
- Asking questions without trying to solve the problem yourself first.

## Guidelines for reporting an issue

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) are used to track bugs. An issue must be a single actionable task or a collection of related actionable tasks and must have a clear outcome.

### Before filing an issue

If you think you've found a bug with the content on MDN Web Docs or with the look and feel of the website, search the current open issues in the [relevant repository](/en-US/docs/MDN/Community/Our_repositories) and make sure nobody else has reported the issue.

### Reporting an issue

Depending on the type of problem you've discovered, you can report it by filing an issue on one of the main [MDN GitHub repositories](MDN/Community/Our_repositories).
If the information you provide in the issue is incomplete, you might be asked to provide more details during the [issue triaging process](#review_the_issue_for_completeness_of_information).

Here are some hints for opening issues:

- Choose the appropriate category to report the issue. For example, to report a content bug, use the [Content issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) template in the `mdn/content` repository.
- Provide sufficient information while reporting the issue:
  - **Issue title** must convey succinctly the _required action_.
  - **Issue description** must clearly describe the bug and the action required to resolve the issue. It must also list the task or sub-tasks to be completed to resolve the issue. Some other guidelines include:
    - Use the description field to indicate the status of the task or sub-tasks by using checklists.
    - Update the status of a task in the issue description instead of commenting on the issue. Use [task lists](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) in the description if an issue has multiple parts. This helps others who may otherwise need to scroll through comments on the issue to determine the status of various tasks.
    - Comments in an issue should be limited to details or context that help resolve the issue.
- If you find yourself in one of the following situations, move the conversation to [MDN's discussion on GitHub](https://github.com/orgs/mdn/discussions):
  - A discussion needs to take place to clarify an issue.
  - A discussion begins after opening the issue.
  - The issue has no clear consensus on its resolution.
  - The requirements for completing the task expand while it's being resolved or the work is unclear.
- For minor bugs, you can [make the changes yourself](#fixing_issues_yourself) and submit a pull request.

### Creating a task list issue

If the issue you're opening is not to report a bug but to perform a series of tasks, you can create the issue as a [task list](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists).
Explain the context or reason for performing the tasks in the description.
Ensure that you list all the actionable tasks as a checklist.

For example:

```markdown
// Issue title
Ensure sections follow the order defined in the CSS property template

### Description

The CSS property page template is defined [here](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template).
The task list in this issue will be used to compare the documented CSS properties with the template and track changes to the property pages for compliance.

### List of pages checked

- [x] [accent-color](/en-US/docs/Web/CSS/accent-color) - checked, okay
- [ ] [backdrop-filter](/en-US/docs/Web/CSS/backdrop-filter)
- [ ] [letter-spacing](/en-US/docs/Web/CSS/letter-spacing) - open pull request to move `Accessibility concerns` and `Internationalization concerns` sections before the `Specifications` section.
```

## Guidelines for working on an issue

Remember that if you take on an issue, the expectation is for the work to be completed in a timely manner. If you're not able to make any progress for a week after being assigned or can no longer complete the required task, leave a comment and unassign yourself from the issue.

These are the general steps for working on an issue:

1. **Find an issue:** If you're looking to contribute, search for issues with [`good first issue`, `help wanted`](#set_other_labels) or [`p3`](#set_a_priority_label) label. Most repositories have issues with these labels. You are welcome to browse and pick an issue that is suitable for your skill set. Another useful place to look for issues to work on is the [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). This project view lists open issues from multiple repositories. You can filter the list based on the topics (`Labels` column) you're interested in. See the description of some of the [labels](#set_other_labels) that get applied during the issue triage process.

   > [!NOTE]
   > An issue with the `needs triage` label indicates that the MDN Web Docs core team has not reviewed the issue yet, and you shouldn't begin work on it.

2. **Assign the issue to yourself:** After finding an issue you'd like to work on, make sure that the issue is not assigned to anybody else. Add a comment saying you would like to work on the issue, and if you are able to, [assign the issue to yourself](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Do the research:** Most issues need some investigation before work can start.

   - Scope out the work that needs to be done. If you need to ask questions, ask them in the [MDN Web Docs chat rooms](/en-US/docs/MDN/Community/Communication_channels#chat_rooms).
   - If the issue is well-described, and the work is pretty obvious, go ahead and do it.
   - If the issue is not well-described, and/or you are not sure what is needed, feel free to @mention the poster and ask for more information.

4. **Make the changes:** Fork and branch the repository. Do your work and open a [pull request](/en-US/docs/MDN/Community/Pull_requests) in the repository. [Reference the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in the pull request description. Depending on the files you've updated in the pull request, a reviewer will be assigned to your pull request automatically. (Teams per topic area are defined in the [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) file).

   After opening the pull request, if you find you no longer have the time to make changes or incorporate review feedback, let the team know as soon as possible in a comment in the pull request. This will help the team assign another interested contributor to complete the work on the pull request and close the linked issue.

5. After your pull request has been reviewed and merged, you can mark the linked issue as closed. If you opened the pull request with `Fixes #<issue>` verbiage, the issue will be closed automatically when the pull request is merged.

### Fixing issues yourself

If you spot a bug — whether it's a problem with the website's look and feel or an error in documentation — you can try to fix it yourself. Learn how you can contribute by going through our [contribution guide](https://github.com/mdn/content/blob/main/CONTRIBUTING.md).

If the bug is small, such as a typo or a minor sentence improvement, or involves an uncontroversial fix, submit a pull request with the changes.

For all other type of bugs, begin by [opening the issue](#guidelines_for_reporting_an_issue). Add a comment about your intent to work on the issue and if possible, describe your proposed solution or steps to fix the issue.
Wait for the issue to be triaged, so that the MDN Web Docs team can verify that the issue is legit and approves your proposed solution.

> [!NOTE]
> If you open a pull request before the issue has been triaged, your time and effort might go waste if the linked issue is deemed invalid or the solution does not match the one expected by the MDN Web Docs team.
> After the issue is triaged, assign the issue to yourself.

Using the [guidelines on working on an issue](#guidelines_for_working_on_an_issue), try to fix the problem by updating the appropriate source, such as:

- The MDN Web Docs **content** (in English) in the [mdn/content](https://github.com/mdn/content) repository
- The MDN Web Docs **translated content** in the [mdn/translated-content](https://github.com/mdn/translated-content) repository
- The MDN Web Docs **frontend** in the [mdn/yari](https://github.com/mdn/yari) repository

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

In general, critical issues should be fixed immediately and are most likely handled by MDN Web Docs staff and peers.

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

Next, set the following labels as appropriate:

- `effort: small`, `effort: medium`, `effort: large`: Some contributors like to search for bugs based on the time and effort that will be needed to fix the bug. So where possible, you should try to provide an estimate of the required effort.
- `good first issue`: Set this label on the issue if the fix for the issue is really simple and if fixing the issue would provide good practice for a newcomer who is getting used to the process.
- `help wanted`: Set this label if the issue requires help from someone who knows about or is familiar with the topic. This is a popular label and some contributors use it to search for issues to work on in open source projects in their areas of familiarity or expertise.
- `broken link external`: Set this label if the issue involves a broken link to an external page.
- `document not written`: Set this label if the issue involves a necessary document that has not been written yet, usually because a link points to it.
- `needs content update`: Set this label if the issue fix in another repository will need an equivalent fix in the `mdn/content` repository.

  > [!NOTE]
  > After the triage process is complete, remove the `needs triage` label.
