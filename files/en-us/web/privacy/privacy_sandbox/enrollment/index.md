---
title: Privacy sandbox enrollment
slug: Web/Privacy/Privacy_sandbox/Enrollment
page-type: guide
---

To access certain privacy sandbox features, browsers require developers to complete an **enrollment** process.

Enrollment provides a mechanism to verify the entities that call privacy sandbox features, and to gather the developer-specific data needed to properly configure and use them. The enrollment process adds an additional layer of protections on top of the structural restrictions enforced within each feature by adding transparency to who is collecting data, and mitigating attempts to misuse features to gather more data than intended.

The intention is for information about each company that completes enrollment to be made public, to provide auditable transparency.

## Features requiring enrollment

The following features require enrollment to be usable:

- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API)
- [Fenced Frame API](/en-US/docs/Web/API/Fenced_frame_API)
- Protected Audience API
- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
- [Topics API](/en-US/docs/Web/API/Topics_API)

The documentation of each feature includes more details on exactly which sub-features will fail if enrollment is not completed, and how.

## Browser enrollment information

### Chrome

- **Instructions**: [Enroll for the Privacy Sandbox](https://github.com/privacysandbox/attestation/blob/main/how-to-enroll.md).
- **Testing**: You do not need to enroll to test privacy sandbox features locally. To allow local testing, enable the `chrome://flags/#privacy-sandbox-enrollment-overrides` developer flag.

## See also

- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) on developers.google.com

<section id="Quick_links">
{{ListSubpages("/en-US/docs/Web/Privacy", "2", "0", "0")}}
</section>
