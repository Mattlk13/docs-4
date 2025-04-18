---
title_tag: Python SDK | Pulumi ESC
title: Python
h1: "Pulumi ESC: Python SDK"
meta_desc: This page provides an overview on how to use Pulumi ESC Python SDK.
menu:
  esc:
    parent: esc-languages-sdks
    identifier: esc-python-sdk
    weight: 2
aliases:
  - /docs/esc/sdk/python/
---

The [Python SDK](https://pypi.org/project/pulumi-esc-sdk/) for [Pulumi ESC (Environments, Secrets, and Configuration)](/product/esc/) allows you to automate Pulumi ESC.

Here are some of the scenarios the SDK can automate:

* List environments and read environment definitions
* Open environments to access config and resolve secrets
* Create, update, decrypt, and delete environment definitions
    * Supports both structured types and yaml text
* List environment revisions and create new revision tags
* Check environment definitions for errors

## Install the SDK package

Run `pip install pulumi-esc-sdk` to install the SDK package.

### Initializing ESC SDK client

The easiest way to initialize an ESC SDK client is to run:

```python
import pulumi_esc_sdk as esc

client = esc.esc_client.default_client()
```

This method will first look for the `PULUMI_ACCESS_TOKEN` environment variable, and if it's not present, it will fall back to CLI credentials that are present on your machine if you have logged in using Pulumi CLI or ESC CLI.

If the default behavior does not work for you, you can always manually initialize the client configuration and pass it into the client constructor:

```python
import pulumi_esc_sdk as esc

configuration = esc.Configuration(access_token=myAccessToken)
client = esc.EscClient(configuration)
```

## Examples

All of these examples expect a `PULUMI_ACCESS_TOKEN` and `PULUMI_ORG` environment variable to be set.

### Manage environment example

This example creates a new environment, opens that environment to access a secret, and the list the environments.

{{< chooser language "python" >}}

{{% choosable language "python" %}}

```python
import pulumi_esc_sdk as esc
import os

orgName = os.getenv("PULUMI_ORG")

client = esc.esc_client.default_client()

projName = "examples"
envName = "sdk-python-example"

# Create environment
client.create_environment(orgName, projName, envName)

# create a new EnvironmentDefinition with "my_secret" as a secret in values additional_properties
envDef = esc.EnvironmentDefinition(
    imports=[],
    values=esc.EnvironmentDefinitionValues(
        additional_properties={
            "my_secret": {
                "fn::secret": "shh! don't tell anyone"
            }
        }
    )
)

# Update environment
client.update_environment(orgName, projName, envName, envDef)

# Open and read the environment

env, values, yaml = client.open_and_read_environment(orgName, projName, envName)

secret = values["my_secret"]
print(f'Secret: {secret}\n')

# List environments

environments = client.list_environments(orgName)

for env in environments.environments:
    print(f'Environment: {env.project}/{env.name}')

```

{{% /choosable %}}
{{< /chooser >}}

### Tag revision example

This example lists revisions for an environment, tags a revision, and lists revision tags.

{{< chooser language "python" >}}

{{% choosable language "python" %}}

```python
import pulumi_esc_sdk as esc
import os

orgName = os.getenv("PULUMI_ORG")

client = esc.esc_client.default_client()

projName = "examples"
envName = "sdk-python-example"

# list environment revisions

revisions = client.list_environment_revisions(orgName, projName, envName)

# get second latest revision
second_latest_revision = revisions[1]

# create a new environment revision tag
client.create_environment_revision_tag(orgName, projName, envName, "stable", second_latest_revision.number)

print(f'Tagged revision {second_latest_revision.number} as stable')

# list environment revision tags
tags = client.list_environment_revision_tags(orgName, projName, envName)

for tag in tags.tags:
    print(f'Tag {tag.name} at revision {tag.revision}')

```

{{% /choosable %}}
{{< /chooser >}}

## Documentation

* [API Reference Documentation](/docs/reference/pkg/python/pulumi_esc_sdk/)
