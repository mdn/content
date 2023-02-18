---
title: JavaScript
slug: Web/JavaScript
tags:
  - JavaScript
  - Landing
  - Landing page
  - Learn
  - "l10n:priority"
---
# starting in a directory of your choice
cd ~/repos
# clone your fork of the repository
git clone git@github.com:octocat/content.git
# starting in your clone directory
cd ~/repos/content
git remote add upstream git@github.com:mdn/content.git
cd ~/repos/content
# checkout your local clone's main branch
git checkout main
git fetch upstream
# merge the latest content from the main branch of the mdn repository
git merge upstream/main
cd ~/repos/content
# checkout your local clone's main branch
git checkout main
# create a new branch named fix-typo
git checkout -b fix-typo
node -v
yarn -v
# Assuming your fork is in ~/repos/content
cd ~/repos/content
yarn
yarn start
echo 'EDITOR=code' >> .env
# Adding all files to the commit
git add .
# Making a commit with a message describing the changes
git commit -m "Fix typo"
# Pushing the commit to your fork
git push
# or "git push --set-upstream origin fix-typo" if you haven't pushed this branch before
yarn content move Learn/Accessibility Learn/A11y
cd ~/repos/content
# Fetch the latest changes from the main branch on mdn/content
git fetch upstream
git checkout main
git merge upstream/main
# create a new branch for your work
git checkout -b moving-a11y
cd ~/repos/content
# Fetch the latest changes from the main branch on mdn/content
git fetch upstream
git checkout main
git merge upstream/main
# create a new branch for your work
git checkout -b deleting-a11y
