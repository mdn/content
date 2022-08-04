---
title: Users and teams
slug: MDN/Community/Users_teams
page-type: mdn-community-guide
tags:
  - meta
  - community-guidelines
  - governance
---
{{MDNSidebar}}

The success and growth of MDN Web Docs is thanks, in large part, to our community of contributors. There are also employees, contractors and a network of partners who are dedicated to the health, growth and maintenance of the project as a whole. There are also some individuals who have committed a portion of their time to assist with the daily tasks of running MDN Web Docs. These people are part of our invited experts program. To manage all these different groups, we rely heavily on roles and teams within our GitHub organization.

A list of the members of the organization can be [found here](https://github.com/orgs/mdn/people).

## Teams

- **Core**: Core MDN Web Docs Team.
- **Localization team leads**: The people who lead our individual localization teams.
- **MDN Community Engagement**: People responsible for community engagement across our repositories.
- **MDN Product**: People responsible for the MDN Plus product.
- **OWD**: Contributors from the Open Web Docs non-profit organization.
- **SRE**: The site reliability engineers that support MDN Web Docs.
- **Yari content**: The umbrella team for all MDN Web Docs content reviewers.
  - **Yari content MDN**: Responsible for reviewing docs under /en-US/docs
  - **Yari content Mozilla Add-ons**: Responsible for reviewing docs under /en-US/docs/Mozilla/Add-ons
  - **Yari content JavaScript**: Responsible for reviewing docs under /en-US/docs/Web/JavaScript
  - **Yari content HTML**: Responsible for reviewing docs under /en-US/docs/Web/HTML
  - **Yari content Web API**: Responsible for reviewing docs under /en-US/docs/Web/API
  - **Yari content HTTP**: Responsible for reviewing docs under /en-US/docs/Web/HTTP
  - **Yari content CSS**: Responsible for reviewing docs under /en-US/docs/Web/CSS
  - **Yari content accessibility**: Responsible for reviewing docs under /en-US/docs/Web/Accessibility
  - **Yari content SVG**: Responsible for reviewing docs under /en-US/docs/Web/SVG
  - **Yari content Web Assembly**: Responsible for reviewing docs related to WebAssembly
- **Yari content ES**: Responsible for reviewing `es` docs on MDN
- **Yari content ES**: Responsible for reviewing `fr` docs on MDN
- **Yari content JA**: Responsible for reviewing `ja` docs on MDN
- **Yari content KO**: Responsible for reviewing `ko` docs on MDN
- **Yari content PT-BR**: Responsible for reviewing `pt-br` docs on MDN
- **Yari content RU**: Responsible for reviewing `ru` docs on MDN
- **Yari content ZH**: Responsible for reviewing `zh` docs on MDN

### What it means to be in a team

We manage teams using the [GitHub teams feature](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams). When you are added to a team it means that you have communicated your intent to be more closely involved in the project. This also means that you have some additional responsibilities and rights.

1. A person on a team is commonly added to the [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) file for their respective area(s) as detailed above.
2. Based on the CODEOWNERS file, you will be automatically assigned to pull requests using a [load-balancing algorithm](https://docs.github.com/en/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team#routing-algorithms) when a pull request touches files in your area of responsibility.
3. Members of a team have higher level repository access assigned. Repository permissions are assigned to only those repositories a member need access to.

## Requesting to be added to a team

If you wish to become a member of a team you should start by [filing an issue in this repository](https://github.com/mdn/mdn/issues/new/choose).

To become a member of a team, you are required to:

- Agree to abide by our [Code of conduct](https://www.mozilla.org/en-US/about/governance/policies/participation/).
- Agree to Mozilla's [Commit Access Requirements](https://www.mozilla.org/en-US/about/governance/policies/commit/requirements/).
- Set up [Two factor authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) on your GitHub account.

Once you have filed your issue, someone from our team will review it, and give you the necessary privileges provided our requirements are satisfied.

## Invited experts

On MDN Web Docs we have a commitment to document the open web. Not only does this mean that there is a large base of constantly evolving documentation to write and maintain, but we cannot possibly have intimate knowledge of all areas of the open web. To help fill in the gaps we started the invited experts program.

Invited experts are individuals that have demonstrated in depth knowledge in a particular area, were nominated by the community, our partners, or the MDN Web Docs internal team.

Invited experts should:

- Agree to abide by our [Code of conduct](https://www.mozilla.org/en-US/about/governance/policies/participation/).
- Agree to Mozilla's [Commit Access Requirements](https://www.mozilla.org/en-US/about/governance/policies/commit/requirements/).
- Set up [Two factor authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) on your GitHub account.

Invited experts are also:

- Invited to our weekly MDN Web Docs editorial call.
- Invited to our invited experts channel on Matrix.
- Added to the relevant topic team(s) for automatic PR assignments.
- Assigned merge privileges to the repositories where they will review pull requests.

If you wish to nominate someone to be considered as an invited expert, start by [filing an issue in this repository](https://github.com/mdn/mdn/issues/new/choose).

## Volunteer and partner maintainers

MDN Web Docs also have volunteers and partners who are assigned maintainer rights to certain repositories. This is the highest level of access afforded to volunteers and partner contributors. Volunteer maintainers are [nominated](https://github.com/mdn/mdn/issues/new/choose) by our partners or the MDN Web Docs team because they demonstrated a deep understanding of the area of responsibility. These individuals have also demonstrated their commitment to being responsive, reliable, trustworthy and able to interact in a manner that fosters a welcoming and friendly environment.

Maintainers should:

- Agree to abide by our [Code of conduct](https://www.mozilla.org/en-US/about/governance/policies/participation/).
- Agree to Mozilla's [Commit Access Requirements](https://www.mozilla.org/en-US/about/governance/policies/commit/requirements/).
- Set up [Two factor authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) on your GitHub account.
- Have a vouched [Mozillians](https://people.mozilla.org) profile in the [NDA group](https://people.mozilla.org/a/nda/).

## Owners

Owners have wide permissions to manage users, teams, maintainer access across repositories in the MDN organization, maintain repository settings and deploy to production. Owners are currently limited to Mozilla staff and are also bound by all the requirements of the other user levels. In addition to all the responsibilities of the other user levels, owners have the following additional responsibilities:

- Follow and enforce MDN team norms, including the [code of conduct](https://www.mozilla.org/en-US/about/governance/policies/participation/) and [Mozilla Policies](https://www.mozilla.org/en-US/about/governance/policies/).
- Follow and contribute to issues and discussions across the MDN organization.
- Ensure that an issue or pull request gets feedback from one or more members within one week.
- Follow MDN organization policies described in this repo, and lead by example.
- Suggest, document, and implement new policies through the pull request process.
- Add and remove collaborators to repositories as needed.
- [Archive](https://help.github.com/articles/about-archiving-repositories/) or delete unmaintained repositories.
- Discuss GitHub features, decide which to use, and document decisions in this repository.

In addition, Owners should:

- Add and remove organization owners and members as needed.
- Add repositories (as fresh projects or transfers) as needed.
