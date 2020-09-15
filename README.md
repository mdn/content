# MDN Content

MDN Content is all the source documents for
[MDN Web Docs](https://developer.mozilla.org).

To make edits you use [Yari](https://github.com/mdn/content) to preview your
edits locally.

## Quickstart

To run the previewing service, you need [git](https://git-scm.com/),
[Node](https://nodejs.org)
(version >=12) and [Yarn 1](https://classic.yarnpkg.com/en/docs/install).

Run these commands in your bash:

    git clone https://github.com/mdn/content.git mdn/content
    cd mdn/content
    yarn
    yarn start
    open http://localhost:5000

## Upkeep

When you start a new piece of work, always remember to first run:

    git pull origin main
    yarn
    yarn start

This will upgrade everything to the latest and greatest. From this,
you create your `git` topic branches, which is what you'll push to your
fork and make pull requests from.
