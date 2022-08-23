---
title: Issue guidelines
slug: MDN/Community/Issues
page-type: mdn-community-guide
tags:
  - meta
  - community-guidelines
  - governance
---
{{MDNSidebar}}

[Issues](https://docs.github.com/en/github/managing-your-work-on-github/about-issues) are used to track all bugs and work that has a clear actionable outcome. If you have found a bug with either our content or the platform, please search current open issues against the [relevant repository](/en-US/docs/MDN/Community/Contributing/Our_repositories/) to ensure someone has not already reported the issue. If the issue is new, please file an issue using the relevant template available in the repository.

> **Note:** If an issue has a triage label, we haven't reviewed it yet, and you shouldn't begin work on it.

If the issue you are filing is not to report a bug, please ensure that it lists actionable tasks or a clear outcome. For example:

```markdown
## Remove \{{ warning }} macro from documents

We should no longer be using the `\{{ warning }}` macro in our documentation.

### Task description

We should therefore replace all instances of the `\{{ warning }}` macro with the following:

> **Warning:** Main subject line
>
> Details of the warning.
> It can have multiple paragraphs.

### Actionable outcome

- [ ] There are no more instances of the `\{{ warning }}` macro in the `mdn/content` repository.
- [ ] Deprecate `\{{ warning }}` macro
- [ ] Notify localization team leads of the change.
```

## Opening an issue

What info should be included
What we accept and don't accept

Discussions should be here

<!-- content from elsewhere -->

Priority:

- `p0` Urgent: Something is broken and needs to be fixed immediately.
- `p1` High priority: This is needed, but not something that's broken and affecting our users.
- `p2` Medium priority: It would be great to get this done if there aren't any other high priority tasks, chances are this issue will escalate to high priority soon enough.
- `p3` Low priority: This is a nice to have. Small chance of it escalating, but something we should consider.

## Make progress, not noise

Think carefully about the way you handle communication in the project — make sure it is useful, and that it doesn't make other contributors jobs harder. Submitting pull requests to fix issues is great, but are they truly useful, and easy to review? Filing issues and joining in other conversations is fine, but are your issues and comments on topic, or are they just adding noise?

As a rule, do:

- Use [GitHub discussion](https://github.com/mdn/mdn-community/discussions) before filing an issue. This helps to keep issues focused and productive.
- Ask questions using other mechanisms like [chat rooms](https://chat.mozilla.org/#/room/#mdn:mozilla.org) or [forums](https://discourse.mozilla.org/c/mdn/236) if you are not sure whether something is useful or have a simple question.
- Read our [contribution guidelines](/en-US/docs/MDN/Community) and [writing guidelines](/en-US/docs/MDN/Writing_guidelines) first to try to solve the issue yourself.

Don't:

- Complicate issues by trying to discuss multiple topics at once, or making off-topic comments.
- Open lots of issues asking vague questions.
- Ask questions without trying to solve the problem yourself first.

## Working on an issue

All repositories have an issue tracker, where you can find tasks to help contribute

Most repositories have a `help-wanted` label or `good-first-issue` label. Some do not, but this is not a pre-requisite and you are welcome to browse and pick something that is suitable for your skill set.

Once you've found an issue you'd like to work on, make sure no one else is assigned to the issue. Add a comment saying you would like to work on it and assign the issue to yourself.

Most issues need some investigation before work can start, if you need to ask questions ask for help in the [MDN Web Docs chat room](https://chat.mozilla.org/#/room/#mdn:mozilla.org) on [Matrix](https://wiki.mozilla.org/Matrix).

If you take on an issue we expect work to happen in a timely manner. If you can no longer take on the task, leave a comment and unassign yourself.

Fork and branch the repository, do your work and open a [pull request](/en-US/docs/MDN/Community/Pull_requests).

_(more stuff)_

Now and then, you may run into problems while using MDN. Whether it's a problem with site infrastructure or an error in documentation content, you can either try to fix it yourself or report the problem. While the former is preferred, the latter is sometimes the best you can manage, and that's okay too.

The best thing you can possibly do is fix problems you spot yourself — this is done by updating the site source:

- The MDN content itself (in English) is found in the [content](https://github.com/mdn/content) repo.
- The MDN content, translated in other locales, is found in the [translated-content](https://github.com/mdn/translated-content) repo.
- The MDN platform code, which renders the content as MDN, is found in the [yari](https://github.com/mdn/yari) repo.

Each repo includes useful information to guide you on how to contribute.

However, maybe you don't know the answer or are in the middle of a deadline on your own project, and need to jot down the problem so someone can look at it later.

The way to report a documentation problem by filing an [documentation issue](https://github.com/mdn/content/issues), [localization issue](https://github.com/mdn/translated-content/issues) or [platform issue](https://github.com/mdn/yari/issues), depending on what the problem you've discovered relates to.

## When choosing a GitHub issue to work on

1. Write a comment in the issue saying that you would like to take it on, and we'll assign you to it.

   - If someone else is already assigned to the issue:

     1. If this was more than one week ago, and there has not been much activity, @mention them and ask them if you can take it over, or otherwise help get it to completion.

        - If they agree for you to take it, we'll assign you to it and remove them.
        - If they agree for you to take it and some work has been done already, or the agreement is to help them out with it, we'll assign you to it alongside them.

     2. If it was less than one week ago, then have some patience, and give them a chance to work on it.

2. If the issue has been marked as complete but needing a review, and you want to review it, @mention them in the comments and say you'll review it.

## When you've been assigned to an issue

1. Scope out the remainder of the work that needs to be done.

   - If the issue is well-described, and the work is pretty obvious, go ahead and do it.
   - If the issue is not well-described, and/or you are not sure what is needed, feel free to @mention the poster and ask for more information.
   - If you are not still sure who to ask, ask for help in the [MDN Web Docs chat room](https://chat.mozilla.org/#/room/#mdn:mozilla.org) on [Matrix](https://wiki.mozilla.org/Matrix).

2. Once you think you've fixed an issue, ask for a review in the comments.
3. Once an issue has been successfully reviewed and comments answered, you can mark it as closed.
4. If you no longer have time to work on an issue, let us know in a comment so we can assign it someone else.
