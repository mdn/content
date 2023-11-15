---
title: Privacy sandbox enrollment
slug: Web/Privacy/Privacy_sandbox/Enrollment
page-type: guide
---

To access certain privacy sandbox features, developers must complete an **enrollment** process.

Enrollment provides a mechanism to verify the entities that call privacy sandbox features, and to gather the developer-specific data needed to properly configure and use them. The enrollment process adds an additional layer of protections on top of the structural restrictions enforced within each feature by adding transparency to who is collecting data, and mitigating attempts to misuse features to gather more data than intended.

To provide auditable transparency, enrollment information about the company will be made public.

## Features requiring enrollment

The following features require enrollment to be usable:

- Attribution Reporting API
- Fenced Frames API
- Protected Audience API
- Shared Storage API
- [Topics API](/en-US/docs/Web/API/Topics_API)

The documentation of each feature includes more details on exactly which sub-features will fail if enrollment is not completed, and how.

## How to enroll

1. Complete the [Privacy Sandbox Developer Enrollment form](https://docs.google.com/forms/d/e/1FAIpQLSehzvBN65Tce--ryGhyHuY0fqfAId2Q6fMbUh4KHZhheFjqMw/viewform). Once your submission is reviewed and approved, Google will send you a confirmation email with a unique developer enrollment account ID and attestation JSON file.
   - If you want to enroll more than one site to use privacy sandbox features, fill out the [Multi Enrollment Request Process form](https://docs.google.com/document/d/1ViXZgvQ8V9KBV1FeKMksurrGMvG7we4r6TKrj60SmII/edit#heading=h.96gjm6xz86bx) in addition to submitting the normal enrollment form for the first enrollment you are requesting.
   - Enrollments are feature-specific. If you want to start using additional features on a site, you will need to update your enrollment by filling out the enrollment form again and using the resulting updated attestation file.
2. The attestation file must be made publicly available from the `/.well-known` directory of the site you intend to use the features from, within 30 days of receiving the confirmation. For example, if you enroll `https://example.com`, you should place the attestation file at `https://example.com/.well-known/privacy-sandbox-attestations.json`.

## Local privacy sandbox testing

You do not need to enroll to test privacy sandbox features locally. To allow local testing, enable the following Chrome developer flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## See also

- [The Privacy Sandbox](https://developer.chrome.com/en/docs/privacy-sandbox/) on developer.chrome.com
- [Enroll for the Privacy Sandbox](https://github.com/privacysandbox/attestation/blob/main/how-to-enroll.md) (includes detailed FAQ)

<section id="Quick_links">
{{ListSubpages("/en-US/docs/Web/Privacy", "2", "0", "0")}}
</section>
