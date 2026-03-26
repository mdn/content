---
title: How to sunset a section of content
short-title: Sunsetting content
slug: MDN/Writing_guidelines/Howto/Sunsetting_content
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This article describes the process for retiring entire sections of MDN Web Docs content, known as _sunsetting_. Sunsetting is different from [deleting or moving individual pages](/en-US/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting); it applies when a whole section is no longer actively maintained, relevant, or aligned with MDN's goals and needs to be retired in a planned and transparent way.

Sunsetting is a very rare occurrence. The process will differ depending on the circumstances, but this guide gives an overview of when and how to sunset a section, and the steps that must be followed to do so responsibly.

## When to consider sunsetting content

You may want to propose sunsetting a section of MDN Web Docs content if any of the following apply:

- The technology is deprecated or no longer relevant to the web platform.
- The section duplicates information better maintained elsewhere (such as an official documentation site for a framework).
- The section does not align with [MDN's content strategy](/en-US/docs/MDN/Writing_guidelines/What_we_write#topics_that_belong_on_mdn_web_docs).
- The maintenance cost outweighs the value to users, as indicated by usage data and user feedback.

Sunsetting should always be a deliberate, visible process. Large-scale removals should never happen without discussion or notice. The final decision to sunset a section lies with the MDN team.

> [!NOTE]
> If you want to remove individual pages rather than an entire section, see [Deleting pages](/en-US/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#deleting_pages). For guidance on labeling individual features as deprecated, see [How to label a technology](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

## The sunsetting process

Sunsetting a section of MDN Web Docs content involves two phases: reaching an agreement and then removing the content.

### Phase 1: Decision process

Sunsetting must be agreed upon by the MDN team and partners. Discussion may happen in our [communication channels](/en-US/docs/MDN/Community/Communication_channels), via a [GitHub discussion](https://github.com/orgs/mdn/discussions), and/or in our editorial calls (held every two weeks).

If a section is seriously being considered for sunsetting, a GitHub discussion must be opened to capture the decision and process. The discussion should be clear about:

- The reasoning for removal.
- The impact of the removal.
- That relevant stakeholders are aware.
- That alternative approaches have been considered.

In some cases, the decision may also involve **gathering feedback from MDN users**. This can include:

- Running a user survey.
- Asking for feedback via GitHub or other [MDN communication channels](/en-US/docs/MDN/Community/Communication_channels).

The goal is to confirm that the section is no longer meeting user needs and that there is no clear path to its sustainable maintenance.

If an agreement to sunset a section is reached, a timeline should be set — typically between **3 and 6 months**. The reasons and timeline should be recorded in the GitHub discussion. It should be clear in the discussion that the content will be archived, not permanently deleted.

If a decision is reached _not_ to sunset, this should be communicated along with reasons via the original communication channel.

### Phase 2: Removing content

Once agreement has been reached, follow these steps to remove the content.

#### Add a sunsetting notice banner

Add a [note banner](/en-US/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) to the top of _every article_ in the section being sunset. The banner should clearly state:

- That the section is being removed from the website.
- The expected removal timeframe and date.
- That the content will be archived.
- A link to the GitHub discussion for more details.

Use the following format:

```md
> [!NOTE]
> This section of MDN is no longer being maintained and will be removed from the website in 6 months (by MONTH YEAR). The content will be archived. See [this discussion](LINK) for further information.
```

This notice ensures transparency and gives users time to adjust.

#### Archive and remove the content

After the agreed sunsetting period has passed, the content can be removed from MDN Web Docs:

1. **Archive the content.** Copy the section to the [MDN Museum repository](https://github.com/mdn/museum) for archival purposes. Keep the content in a directory that matches the original URL path. For example, content at `https://developer.mozilla.org/en-US/docs/Games` would go in a `/docs/games/` directory in the museum repository. This preserves MDN's content history while keeping deprecated material off the active site.

2. **Remove the content and add redirects.** Use the `delete` command documented in the [Creating, moving, and deleting](/en-US/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#deleting_pages) guide to remove the pages and set up redirects. Redirects should point users to the most relevant alternative content if available. If there is no suitable alternative, redirect to the MDN Web Docs homepage.

> [!WARNING]
> Do not permanently delete content without archiving it first.

## See also

- [How to create, edit, move, or delete pages](/en-US/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)
- [What we write](/en-US/docs/MDN/Writing_guidelines/What_we_write)
- [Experimental, deprecated, and obsolete](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)
- [Banners and notices](/en-US/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
