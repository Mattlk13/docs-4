---
title: "Pulumi Service Improvements, February 2020"
authors: ["chris-smith"]
tags: ["features"]
date: "2020-03-02"
meta_desc: "Recent improvements to the Pulumi Service: stack tags, audit logs, CI/CD integration, downloadable checkpoint files"
meta_image: "pretty-print-multiline-json.png"
---

We've been hard at work making it easier to manage stacks, permissions, and organizations in the Pulumi Service. Adding
new features like first-class support for stack tags, deep links into CI/CD providers, and downloadable checkpoint files.

In this post, we showcase what's new!

<!--more-->

## First-class Support for Tags

Pulumi has had support for [stack tags](/docs/concepts/stack#stack-tags) for a while, enabling
you to add attributes to your stacks with custom data such as the `account-id` or `environment`. But previously the data was
only available on the command-line, via the `pulumi stack tag` command ([documentation](/docs/cli/commands/pulumi_stack_tag/).

We've added first-class support for stack tags in the Pulumi Service as well. You can create, update, and delete tags from within the console.

{{< figure alt="Updating stack tags within the Pulumi Service" src="./update-tags-in-console.png" class="md:max-w-lg" >}}

Making it easier to create and edit tag data is just the beginning. We've started to add new search/filtering capabilities
based on stack tags. For example, you can now use filters to rapidly add stacks to [Pulumi teams](/docs/pulumi-cloud/access-management/teams/).

{{< figure alt="Filtering stacks by their tags" src="./filter-stacks-by-tag.png" class="md:max-w-lg" >}}

We will continue wiring stack tags throughout other parts of the Pulumi Service, so stay tuned! Also, this new feature was
added by Pulumi's first (and extremely awesome) intern, Tasia (👋)!

## Deep Linking into CI/CD Systems

Many people practice [continuous delivery using Pulumi](/docs/iac/packages-and-automation/continuous-delivery/), automatically
updating stacks in response to code check-ins or merges. We've now added support for deep links from the Pulumi Service back
into your CI/CD tool of choice. So, for example, you'll now see links to the [Circle CI job](https://circleci.com) or
[Travis CI build](https://travis-ci.com) from the Pulumi Service.

{{< figure alt="Link to the Travis CI Build from the Pulumi Service" src="./deep-linking-cicd-providers.png" class="md:max-w-lg" >}}

> Pulumi supports a variety of CI/CD providers, but if yours isn't listed in [our CI/CD guide](/docs/iac/packages-and-automation/continuous-delivery/)
> [let us know](https://slack.pulumi.com) or [contribute it](https://github.com/pulumi/pulumi/blob/master/sdk/go/common/util/ciutil)
> on your own.

## Pretty Printing JSON / Multi Configuration

We now pretty print JSON configuration values and have much better support for viewing multi-line data.

{{< figure alt="JSON and mutiline configuration values" src="https://www.pulumi.com/uploads/content/blog/pulumi-service-improvements_02-2020/pretty-print-multiline-json.gif" class="md:max-w-lg" >}}

## Download Earlier Checkpoints

The most important job of the Pulumi Service is to maintain a durable, accurate snapshot of your cloud resource data.
While in most cases your [stack's checkpoint data](/docs/iac/concepts/state-and-backends) is a low-level detail
you don't need to worry about; in some advanced scenarios, you may need to inspect or edit it manually.

You can now download a stack’s checkpoint file directly from the Pulumi Service. You can get the
same data from the command-line, using `pulumi stack export` ([documentation](/docs/cli/commands/pulumi_stack_export/),
which now supports a `--version` flag to export older checkpoint files too.

{{< figure alt="Download stack checkpoints from the Pulumi Service" src="./download-checkpoint-file.png" class="md:max-w-lg" >}}

## Reverse Stack Permissions View

The Enterprise Edition supports [role-based access control](/docs/pulumi-cloud/projects-and-stacks#stack-permissions)
using [teams](/docs/pulumi-cloud/access-management/teams/). But a common problem we've heard from people in large organizations
is that it can be difficult to review exactly *_what_* access someone has to a stack and *_why_*.

Fortunately, the Pulumi Service now has the ability for organization administrators to see all stacks a particular member has access to.

{{< figure alt="Stacks an organization member has access to" src="./list-of-accessible-stacks.png" class="md:max-w-lg" >}}

They can even go one step further, review the specific access granted from various sources.

{{< figure alt="Sources granting stack permissions" src="./stack-access-grants.png" class="md:max-w-lg" >}}

## Log Rendering Performance

We've made some changes that dramatically improve the Pulumi Service's performance when rendering large update logs.

{{< figure alt="Log rendering performance" src="https://www.pulumi.com/uploads/content/blog/pulumi-service-improvements_02-2020/log-rendering-perf.gif" class="md:max-w-lg" >}}

## Audit Logs

Pulumi Enterprise customers typically have many stacks and teams. Multiple teams and stacks can make it difficult to review what's currently in-motion and to understand a sequence of events a few days or few weeks in the past.

[As we announced earlier](/blog/auditing-your-organizations-infrastructure-as-code-activity/) we launched the ability to view
and download audit logs with all the changes within an organization.

{{< figure alt="Audit logs of recent changes within an organization" src="./audit-logs.png" class="md:max-w-lg" >}}

## Conclusion

Phew! As I said, we've been busy this month working on the Pulumi Service. And there is plenty more awesomeness still in the pipe!
If you want to get a peek at other things in-development, check out the [Pulumi 2.0 Roadmap](/blog/pulumi-2-0-roadmap/).

As always, we love to hear if you have any feedback, suggestions, or ideas for other improvements we could make to the
Pulumi Service. Just let us know on the [Pulumi Community Slack](https://slack.pulumi.com), Twitter [@PulumiCorp](https://twitter.com/pulumicorp),
or [on GitHub](https://github.com/pulumi/pulumi).
