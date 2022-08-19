---
title: "Archiving and unarchiving pages"
linkTitle: "Archiving"
weight: 4
---

Pages with the banner "This is an archived page. It's not actively maintained."
at the top are archived pages — they are archived because either they are
obsolete or out-of-date, or they are not in scope for MDN contributors to
actively work on.

If you find a page that is marked archived and you think it shouldn't be,
you can follow the below steps to unarchive it:

- Submit an issue to check why the page is archived and if it should be
  unarchived.
- Find the source code location of the archived page. Archived pages live in
  the [Archived content](https://github.com/mdn/archived-content/) repo,
  the structure of which is the same as this repo (except that there are
  also locale directories present other than `en-US`). As an example:
  - Take the archived 'Mobile developer challenge' page, which was at the URL `https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Mobile_developer_challenge`.
  - This page's source code is at [https://github.com/mdn/archived-content/blob/main/files/en-us/mozilla/mobile/mobile_developer_challenge/index.html](https://github.com/mdn/archived-content/blob/main/files/en-us/mozilla/mobile/mobile_developer_challenge/index.html).
- To unarchive the page, you need to open a pull request to move the page's
  directory into the appropriate place inside this repo, and update the
  page's meta data (like `slug`) if needed.

> **Note:** To archive a non-archived page, you need to follow the
> above procedure, but move the page in question the opposite way between repos.
> When removing the page from MDN, remember to use the [delete command](#deleting-a-document).

**Note:** You can have an archived page with non-archived pages below it in the
hierarchy, and vice-versa. To achieve this you need to have the same directory
structure in both the `content` and `archive-content` repos. Whether a page
is non-archived or archived depends on which repo its `index.html` file is
in. As an example, compare the [archived-content mozilla directory](https://github.com/mdn/archived-content/tree/main/files/en-us/mozilla)
with the [content mozilla directory](https://github.com/mdn/content/tree/main/files/en-us/mozilla).
Both locations represent the same directory structure, but the
`index.html` file appears in the latter, therefore the page is not archived.
