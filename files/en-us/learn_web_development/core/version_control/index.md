---
title: Version control
slug: Learn_web_development/Core/Version_control
page-type: learn-module
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}

Version control tools (often called **Version Control Systems**, or **VCS**) are an essential part of modern workflows, for backing up and collaborating on codebases. This module takes you through the essentials of version control using Git and GitHub.

## Overview

Version control tools are essential for software development:

- It is rare that you will work on a project completely on your own, and as soon as you start working with other people you start to run the risk of conflicting with each other's work — this is when both of you try to update the same piece of code at the same time. You need to have some kind of mechanism in place to manage the occurrences, and help avoid loss of work as a result.
- When working on a project on your own or with others, you'll want to be able to back up the code in a central place, so it is not lost if your computer breaks.
- You will also want to be able to roll back to earlier versions if a problem is later discovered. You might have started doing this in your own work by creating different versions of the same file, e.g. `myCode.js`, `myCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `myCode_really_really_final.js`, etc., but this is really error-prone and unreliable.
- Different team members will commonly want to create their own separate versions of the code (called **branches** in Git), work on a new feature in that version, and then get it merged in a controlled manner (in GitHub we use **pull requests**) with the master version when they are done with it.

Version control tools meet the above needs. [Git](https://git-scm.com/) is an example of a version control tool, and [GitHub](https://github.com/) is a website + infrastructure that provides a Git server plus a number of really useful tools for working with git repositories individually or in teams, such as reporting issues with the code, reviewing tools, project management features such as assigning tasks and task statuses, and more.

> [!NOTE]
> Git is actually a _distributed_ version control tools, meaning that a complete copy of the repository containing the codebase is made on your computer (and everyone else's). You make changes to your own copy and then push those changes back up to the server, where an administrator will decide whether to merge your changes with the master copy.

## Prerequisites

To use Git and GitHub, you need:

- A desktop computer with Git installed on it (see the [Git downloads page](https://git-scm.com/downloads)).
- A tool to use Git. Depending on how you like to work, you could use a [Git GUI client](https://git-scm.com/downloads/guis/) (we'd recommend [GitHub Desktop](https://desktop.github.com/download/), [SourceTree](https://www.sourcetreeapp.com/) or [Git Kraken](https://www.gitkraken.com/)) or just stick to using a terminal window. In fact, it is probably useful for you to get to know at least the basics of git terminal commands, even if you intend to use a GUI.
- A [GitHub account](https://github.com/signup). If you haven't already got one, sign up now using the provided link.

In terms of prerequisite knowledge, you don't need to know anything about web development, Git/GitHub, or version control to start this module. However, it is recommended that you know some coding so that you have reasonable computer literacy, and some code to store in your repositories!

It is also preferable that you have some basic terminal knowledge, so for example moving between directories and creating files. You can find out all the basics in our [Command line crash course](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

> [!NOTE]
> GitHub is not the only site/toolset you can use with Git. There are other alternatives such as [GitLab](https://about.gitlab.com/) that you could try, and you could also try setting your own Git server up and using it instead of GitHub. We've only stuck with GitHub in this course to provide a single way that works.

## Learning outcomes

- Why version control systems are necessary.
- The difference between Git, and websites like GitHub and GitLab.
- Understand that websites such as GitHub and GitLab enable teamwork and collaboration that isn't so easy just with plain Git.
- Basic setup — installing git, signing up for an account for your chosen social coding site.
- Handling security requirements, like SSH/GPG keys.
- Creating a repo and pushing changes to it.
- Contributing to others' repos: forking, creating a new branch, creating a PR, and review flow.
- Good housekeeping:
  - Regularly updating local repos so that they are in sync with their remote counterparts.
  - Using `.gitignore` to ignore all the stuff you don't want to commit.
  - Deleting branches you have finished with.
- Handling merge conflicts.

## Guides

Note that the links below take you to resources on external sites. Eventually, we are aiming to have our own dedicated Git/GitHub course, but for now, these will help you get to grips with the subject at hand.

- [Hello, World (from GitHub)](https://docs.github.com/en/get-started/start-your-journey/hello-world)
  - : This is a good place to start — this practical guide gets you to jump right into using GitHub, learning the basics of Git such as creating repositories and branches, making commits, and opening and merging pull requests.
- [Git Handbook (from GitHub)](https://docs.github.com/en/get-started/using-git/about-git)
  - : This Git Handbook goes into a little more depth, explaining what a version control tool is, what a repository is, how the basic GitHub model works, Git commands and examples, and more.
- [Forking Projects (from GitHub)](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
  - : Forking projects is essential when you want to contribute to someone else's code. This guide explains how.
- [About Pull Requests (from GitHub)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
  - : A useful guide to managing pull requests, the way that your suggested code changes are delivered to people's repositories for consideration.
- [Mastering issues (from GitHub)](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
  - : Issues are like a forum for your GitHub project, where people can ask questions and report problems, and you can manage updates (for example assigning people to fix issues, clarifying the issue, letting people know things are fixed). This article tells you what you need to know about issues.

> [!NOTE]
> There is **a lot more** that you can do with Git and GitHub, but we feel that the above represents the minimum you need to know to start using Git effectively. As you get deeper into Git, you'll start to realize that it is easy to go wrong when you start using more complicated commands. Don't worry, even professional web developers find Git confusing sometimes, and often solve problems by searching for solutions on the web, or consulting sites like [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) and [Dangit, git!](https://dangitgit.com/)

## See also

- [Understanding the GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [Git command list](https://git-scm.com/docs)
- [Mastering markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (the text format you write in on PR, issue comments, and `.md` files).
- [Getting Started with GitHub Pages](https://docs.github.com/en/pages/quickstart) (how to publish demos and websites on GitHub).
- [Learn Git branching](https://learngitbranching.js.org/)
- [Flight rules for Git](https://github.com/k88hudson/git-flight-rules) (a very useful compendium of ways to achieve specific things in Git, including how to correct things when you went wrong).
- [Dangit, git!](https://dangitgit.com/) (another useful compendium, specifically of ways to correct things when you went wrong).

{{PreviousMenu("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core")}}
