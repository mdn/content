---
title: MDN Workstream assessment and project setup process
slug: MDN/Contribute/Processes/Workstream_assessment_project
---

{{MDNSidebar}}

Workstreams are larger, more involved MDN projects that are designed to be done by multiple people (across organizations) and require planning/process. They start life as content opportunities.

## Content opportunity assessment

Once per month we have a content opportunity assessment meeting. During this meeting we assess new opportunities, and record the results in the [content opportunities spreadsheet](https://docs.google.com/spreadsheets/d/13YYX5rRu4ATbo1Yl7rXHF9rbgXGBSLisguzo-cB8Fno/edit#gid=0). Near the end of each quarter, we have a further meeting to decide which of the opportunities assessed this quarter will be added to the roadmap for the next quarter.

The process looks like this:

1. Opportunities are initially submitted as issues to the [mdn/content](https://github.com/mdn/content) or [openwebdocs/project](https://github.com/openwebdocs/project) repositories. These issues are given a preliminary quick assessment by a core team member to assess suitability.
2. If an idea is deemed suitable, the issue submitter is asked to fill in a full RFC document to be assessed. This is currently done by updating the existing issue's description to use the format seen at [OWD project: Making MDN syntax boxes beginner friendly](https://github.com/openwebdocs/project/issues/26).

   - Note that in the "Priority assessment" table, each opportunity needs to be assessed against our [prioritization criteria](https://github.com/openwebdocs/project/blob/main/steering-committee/prioritization-criteria.md).
   - For each criterion, give the project a description as well as a rough score of none/small/medium/large.

3. Each month, we hold the opportunity assessment meeting to assess new opportunities, and record the results in the [content opportunities spreadsheet](https://docs.google.com/spreadsheets/d/13YYX5rRu4ATbo1Yl7rXHF9rbgXGBSLisguzo-cB8Fno/edit#gid=0). To be discussed in a meeting, each assessment needs an RFC submitted, to act as the basis for our discussion.
4. At the end of each opportunity assessment meeting, we stack rank the ideas:

   - We vote on the priority order for the ideas discussed by writing a simple number order in the meeting chat. For example if three opportunities were discussed and you thought that 2 was the most important, followed by 1, followed by 3, you'd write "2,1,3".
   - We tally the votes and create a priority order for that meeting's opportunities.
   - We then decide how those opportunities fit into the overall stack rank, by discussing where we think they'd fit.

5. In the middle of the last month in each quarter, we have a meeting to look at the submitted opportunities, and decide which ones should be put on the MDN content roadmap for the next quarter. We present this proposal to the [Open Web Docs (OWD)](https://github.com/openwebdocs) editorial steering committee to get signed off. Each assessed opportunity is given a decision word — "roadmap", "park" or "decline":

   - Roadmap — we are going ahead with this by putting it on the roadmap.
   - Park — we are not going forward with this yet, but will consider it in the future.
   - Decline — we are not going forward with this opportunity.

6. Projects that are added to the roadmap are moved onto the project setup stage. At this stage, each one needs a project lead assigned that will make sure the work happens.

> **Note:** If there is any disagreement about any of the given scores or decisions during the opportunity assessment meetings, the chair of the meeting will listen to opposing views for a maximum of one minute per view, then make a final decision on the matter. The chair's decision is final.

## MDN project setup

Workstreams that are signed off by the OWD editorial steering committee will follow the process outlined in this section and the next one. This first section details with the setup required for each workstream, and the second one looks at the process to follow when actually working on a project.

### Overall project summary issue

Each workstream needs an overall project summary issue, created on the [mdn/content](https://github.com/mdn/content) repo, to act as a focal point and summary for the project work.

This should include:

- A link to the RFC created for the workstream during the assessment process, so people can find further background information on the project if they need it.
- Links to the spec or specs for the features being documented, as appropriate.
- A list of the people involved in the project. Say what they are doing on it, and include their GitHub handles so that people can contact them if needed.
- What are the success criteria for this project? Obviously we want to do all the listed tasks, but what is the effect of that going to be? A certain monthly page view figure for the new docs? Reduction in bugs received about a certain topic?
- Other links that are useful to this project.
- A list of what content and engineering work is required to complete this project. Eventually this should be a list of links to issues that define this work, as described in the [Individual work issues](#individual_work_issues) section.

### Add to shared project roadmap

Each workstream should be added to the shared project roadmap (which currently lives in the [High-level MDN schedule](https://docs.google.com/spreadsheets/d/1dMK17xXgPQxnfsMZedi-uf5EVdJcagk3BhuxJlxC6l8/edit#gid=0) spreadsheet). This is a really simple view of what work is being done and when. Each project entry should span across the months it is being done in, and link to the [overall project summary issue](#overall_project_summary_issue) for more information if required.

Add your workstream/project to the spreadsheet, or ask someone else to do so if you don't have editing access.

### Individual work issues

The next step is to create individual GitHub issues for each bit of work listed in the overall project summary, and link to those issues from there. Each issue should be as self-contained as possible.

Split the work up in a granular fashion that makes each chunk as easy as possible to pick up and work on — for example fix one error, or write one page. Inside each issue, provide instructions for doing the work, or link to them.

For example, instructions for creating a new reference page might look like this:

- This issue relates to the workstream defined at `https://xxxxx` (link to overall project summary).
- Feature X is defined in this spec: `https://xxxxxxx`.
- This page should be created at `https://developer.mozilla.org/xxxxxx`.
- Use `https://xxxxxx` as a template for the page.
- Create a new source page in the content repo and test it locally using the instructions available at `https://github.com/mdn/content`.
- Once the page has been created, submit the changes as a pull request and wait for a review.

Each issue should also have a reviewer assigned.

Each issue should be given a specific label of the form "Workstream:xxxx", so that it is easy to filter for all related issues.

Think of other contributors that might be looking for a bit of work to do, not just the existing personnel who are already invested.

### Create project board

Each workstream should have its own project board, created under <https://github.com/mdn/content/projects>. All of the individual work item issues should be listed on this board, as well as the overall project summary.

The board title should describe the project succinctly, as well as containing the due date for completion of the project, as a reminder to those working on it, e.g. "Restructuring the mixin docs (March 15th)".

The columns on each board should be as follows, from start to end:

- Summary: Include the overall project summary card, and nothing else, in this column, so it is easy to find.
- Not ready: A place to put issue cards that have been started but are not ready to work on yet.
- To do: Issue cards that are ready to work on, but have not yet been started.
- In progress: Issues that are in progress.
- Needs review: Issues where the work is complete, and so are ready for review.
- Done: Issues that are complete.

## Running a project

Once you have done the project setup work, as listed in the above section, moving forward with running the project should be fairly straightforward.

### Set up a regular checkin meeting

The project lead should set up a weekly checkin time, ideally a video or voice call, although a text-based chat would do. In this call, the project team should:

- Report on what they've been doing since the last meeting.
- Look at the actual work speed compared to the required speed for meeting the deadline, and adjust their work speed as required (only slip the deadline as a last resort).
- Talk through any problems that have come up, and make any necessary changes (e.g. does new work need adding, are there any blockers that need escalating, does existing work need rescoping?).
- Make sure everyone knows what they need to do next. The project lead should be responsible for agreeing and setting work items (assigning issues), and indeed in the first meeting some time should be set aside for deciding what everyone will work on first.

### Ongoing work

Go ahead with the project, doing the work as required, and meeting regularly to make sure everything is moving forward.

Work organization:

- When you start work on an issue, remember to put your work item in the "In progress" column on the project board.
- When an item is ready to review, put it in the "Needs review" column. If there is not a reviewer assigned, bring it up with the project lead. If it hasn't been reviewed for a few days, politely remind the reviewer, and bring it up in the regular project meeting if it is delayed for longer.
- Get the project lead to sign off on work items by @-mentioning them in the issue when it looks like everything has been approved, and getting them to do a final check, merge, and move the item to the "Done" column.

### Final check

Once all issue cards are done, the project lead should go through all the cards and give them all a final check before signing off on the entire workstream.
