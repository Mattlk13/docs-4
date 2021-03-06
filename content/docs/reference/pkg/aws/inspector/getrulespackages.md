
---
title: "GetRulesPackages"
title_tag: "Function GetRulesPackages | Module inspector | Package AWS"
meta_desc: "Explore the GetRulesPackages function of the inspector module, including examples, input properties, output properties, and supporting types. The AWS Inspector Rules Packages data source allows access to the list of AWS"
---



<!-- WARNING: this file was generated by Pulumi Docs Generator. -->
<!-- Do not edit by hand unless you're certain you know what you are doing! -->

The AWS Inspector Rules Packages data source allows access to the list of AWS
Inspector Rules Packages which can be used by AWS Inspector within the region
configured in the provider.


{{% examples %}}
## Example Usage

{{< chooser language "typescript,python,go,csharp" / >}}

{{% example csharp %}}
```csharp
using Pulumi;
using Aws = Pulumi.Aws;

class MyStack : Stack
{
    public MyStack()
    {
        var rules = Output.Create(Aws.Inspector.GetRulesPackages.InvokeAsync());
        // e.g. Use in aws_inspector_assessment_template
        var @group = new Aws.Inspector.ResourceGroup("group", new Aws.Inspector.ResourceGroupArgs
        {
            Tags = 
            {
                { "test", "test" },
            },
        });
        var assessmentAssessmentTarget = new Aws.Inspector.AssessmentTarget("assessmentAssessmentTarget", new Aws.Inspector.AssessmentTargetArgs
        {
            ResourceGroupArn = @group.Arn,
        });
        var assessmentAssessmentTemplate = new Aws.Inspector.AssessmentTemplate("assessmentAssessmentTemplate", new Aws.Inspector.AssessmentTemplateArgs
        {
            Duration = 60,
            RulesPackageArns = rules.Apply(rules => rules.Arns),
            TargetArn = assessmentAssessmentTarget.Arn,
        });
    }

}
```
{{% /example %}}

{{% example go %}}
Coming soon!
{{% /example %}}

{{% example python %}}
```python
import pulumi
import pulumi_aws as aws

rules = aws.inspector.get_rules_packages()
# e.g. Use in aws_inspector_assessment_template
group = aws.inspector.ResourceGroup("group", tags={
    "test": "test",
})
assessment_assessment_target = aws.inspector.AssessmentTarget("assessmentAssessmentTarget", resource_group_arn=group.arn)
assessment_assessment_template = aws.inspector.AssessmentTemplate("assessmentAssessmentTemplate",
    duration="60",
    rules_package_arns=rules.arns,
    target_arn=assessment_assessment_target.arn)
```
{{% /example %}}

{{% example typescript %}}
```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// Declare the data source
const rules = pulumi.output(aws.inspector.getRulesPackages({ async: true }));
// e.g. Use in aws_inspector_assessment_template
const group = new aws.inspector.ResourceGroup("group", {
    tags: {
        test: "test",
    },
});
const assessmentAssessmentTarget = new aws.inspector.AssessmentTarget("assessment", {
    resourceGroupArn: group.arn,
});
const assessmentAssessmentTemplate = new aws.inspector.AssessmentTemplate("assessment", {
    duration: 60,
    rulesPackageArns: rules.arns,
    targetArn: assessmentAssessmentTarget.arn,
});
```
{{% /example %}}

{{% /examples %}}


## Using GetRulesPackages {#using}

{{< chooser language "typescript,python,go,csharp" / >}}


{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">function </span>getRulesPackages<span class="p">(</span><span class="nx">opts</span><span class="p">?:</span> <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#InvokeOptions">InvokeOptions</a></span><span class="p">): Promise&lt;<span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/inspector/#GetRulesPackagesResult">GetRulesPackagesResult</a></span>></span></code></pre></div>
{{% /choosable %}}


{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">function </span> get_rules_packages(</span>opts=None<span class="p">)</span></code></pre></div>
{{% /choosable %}}


{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetRulesPackages<span class="p">(</span><span class="nx">ctx</span><span class="p"> *</span><span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">opts</span><span class="p"> ...</span><span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#InvokeOption">InvokeOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/inspector?tab=doc#GetRulesPackagesResult">GetRulesPackagesResult</a></span>, error)</span></code></pre></div>

{{% /choosable %}}


{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static class </span><span class="nx">GetRulesPackages </span><span class="p">{</span><span class="k">
    public static </span>Task&lt;<span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.Inspector.GetRulesPackagesResult.html">GetRulesPackagesResult</a></span>> <span class="p">InvokeAsync(</span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.InvokeOptions.html">InvokeOptions</a></span><span class="p">? </span><span class="nx">opts = null<span class="p">)</span><span class="p">
}</span></code></pre></div>
{{% /choosable %}}




## GetRulesPackages Result {#result}

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span id="arns_csharp">
<a href="#arns_csharp" style="color: inherit; text-decoration: inherit;">Arns</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of the AWS Inspector Rules Packages arns available in the AWS region.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span id="id_csharp">
<a href="#id_csharp" style="color: inherit; text-decoration: inherit;">Id</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The provider-assigned unique ID for this managed resource.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span id="arns_go">
<a href="#arns_go" style="color: inherit; text-decoration: inherit;">Arns</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A list of the AWS Inspector Rules Packages arns available in the AWS region.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span id="id_go">
<a href="#id_go" style="color: inherit; text-decoration: inherit;">Id</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The provider-assigned unique ID for this managed resource.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span id="arns_nodejs">
<a href="#arns_nodejs" style="color: inherit; text-decoration: inherit;">arns</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A list of the AWS Inspector Rules Packages arns available in the AWS region.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span id="id_nodejs">
<a href="#id_nodejs" style="color: inherit; text-decoration: inherit;">id</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The provider-assigned unique ID for this managed resource.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span id="arns_python">
<a href="#arns_python" style="color: inherit; text-decoration: inherit;">arns</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A list of the AWS Inspector Rules Packages arns available in the AWS region.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span id="id_python">
<a href="#id_python" style="color: inherit; text-decoration: inherit;">id</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The provider-assigned unique ID for this managed resource.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}









<h2 id="package-details">Package Details</h2>
<dl class="package-details">
	<dt>Repository</dt>
	<dd><a href="https://github.com/pulumi/pulumi-aws">https://github.com/pulumi/pulumi-aws</a></dd>
	<dt>License</dt>
	<dd>Apache-2.0</dd>
	<dt>Notes</dt>
	<dd>This Pulumi package is based on the [`aws` Terraform Provider](https://github.com/terraform-providers/terraform-provider-aws).</dd>
</dl>

