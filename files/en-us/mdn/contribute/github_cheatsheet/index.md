---
title: GitHub cheatsheet
slug: MDN/Contribute/GitHub_cheatsheet
tags:
  - Best practices
  - Community
  - GitHub
  - MDN
  - Beginners
  - Cheatsheet
  - Commands
---
{{MDNSidebar}}

This article provides a quick reference to the essential commands you'll need when using [Git](https://git-scm.com/) and [GitHub](https://github.com/) to contribute to MDN. If you are new to these tools and need a helping hand, our [GitHub for complete beginners](/en-US/docs/MDN/Contribute/GitHub_beginners) tutorial teaches the basics.

## Cloning

```bash
git clone the-repo-url
```

## Setting up a remote

```bash
git remote add remote-name repo-you-want-to-point-to
```

## View remotes list

```bash
git remote -v
```

## Preparing to make a change to the repo

### Switch to the main branch

```bash
git switch main
```

### Update your main branch

```bash
git fetch remote-name
git rebase remote-name/main
git push
```

## Get your branch locally and switch to it

```bash
git pull
git switch new-branch
```

## Get latest status

```bash
git status
```

## Adding, committing, and pushing changes

```bash
git add path-to-changed-file
git commit -m 'my commit message'
git push
```

## Troubleshooting

### Reverting a change you made to a file that you haven't yet added to the commit list

```bash
git restore file-path
```

### Removing a file from the commit list

```bash
git restore --staged file-path
```

### Reversing the last commit

```bash
git reset HEAD~1
```

### Reversing a commit that has been pushed to the remote fork

```bash
git revert HEAD
git push
```

> **Note:** Another way to handle getting rid of files that have ended up in pull requests that you don't want to be there is to use the GitHub UI. Go to your pull request's page on github.com, go to the "Files changed" tab, and find the file you want to remove from the pull request. At the top right of the file's box in the page there will be a "three dot" (`...`) menu. Press this button and choose "Delete file". In the confirmation page, enter a title for the new commit, make sure the "Commit directly..." checkbox is selected, and press the "Commit changes" button.

## Want to see more?

If you think this cheatsheet should contain more commands, please [create an issue](https://github.com/mdn/content/issues/new) to suggest what you think we should include.
