---
title: Module ecs
title_tag: Module ecs | Package pulumi_aws | Python SDK
linktitle: ecs
notitle: true
block_external_search_index: true
---

{{< resource-docs-alert "aws" >}}

<div class="section" id="ecs">
<h1>ecs<a class="headerlink" href="#ecs" title="Permalink to this headline">¶</a></h1>
<blockquote>
<div><p>This provider is a derived work of the <a class="reference external" href="https://github.com/terraform-providers/terraform-provider-aws">Terraform Provider</a> distributed under
<a class="reference external" href="https://www.mozilla.org/en-US/MPL/2.0/">MPL 2.0</a>. If you encounter a bug or missing feature, first check the
<a class="reference external" href="https://github.com/pulumi/pulumi-aws/issues">pulumi/pulumi-aws repo</a>; however, if that doesn’t turn up
anything, please consult the source <a class="reference external" href="https://github.com/terraform-providers/terraform-provider-aws/issues">terraform-providers/terraform-provider-aws repo</a>.</p>
</div></blockquote>
<span class="target" id="module-pulumi_aws.ecs"></span><dl class="py class">
<dt id="pulumi_aws.ecs.AwaitableGetClusterResult">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">AwaitableGetClusterResult</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">cluster_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">pending_tasks_count</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">registered_container_instances_count</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">running_tasks_count</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">settings</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">status</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.AwaitableGetClusterResult" title="Permalink to this definition">¶</a></dt>
<dd></dd></dl>

<dl class="py class">
<dt id="pulumi_aws.ecs.AwaitableGetContainerDefinitionResult">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">AwaitableGetContainerDefinitionResult</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">container_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">cpu</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">disable_networking</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">docker_labels</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">environment</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">image</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">image_digest</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">memory</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">memory_reservation</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_definition</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.AwaitableGetContainerDefinitionResult" title="Permalink to this definition">¶</a></dt>
<dd></dd></dl>

<dl class="py class">
<dt id="pulumi_aws.ecs.AwaitableGetServiceResult">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">AwaitableGetServiceResult</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">cluster_arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">desired_count</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">launch_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">scheduling_strategy</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">service_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_definition</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.AwaitableGetServiceResult" title="Permalink to this definition">¶</a></dt>
<dd></dd></dl>

<dl class="py class">
<dt id="pulumi_aws.ecs.AwaitableGetTaskDefinitionResult">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">AwaitableGetTaskDefinitionResult</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">family</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">network_mode</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">revision</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">status</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_definition</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_role_arn</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.AwaitableGetTaskDefinitionResult" title="Permalink to this definition">¶</a></dt>
<dd></dd></dl>

<dl class="py class">
<dt id="pulumi_aws.ecs.CapacityProvider">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">CapacityProvider</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">auto_scaling_group_provider</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.CapacityProvider" title="Permalink to this definition">¶</a></dt>
<dd><p>Provides an ECS cluster capacity provider. More information can be found on the <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-capacity-providers.html">ECS Developer Guide</a>.</p>
<blockquote>
<div><p><strong>NOTE:</strong> The AWS API does not currently support deleting ECS cluster capacity providers. Removing this resource will only remove the state for it.</p>
</div></blockquote>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_aws</span> <span class="k">as</span> <span class="nn">aws</span>

<span class="n">test</span> <span class="o">=</span> <span class="n">aws</span><span class="o">.</span><span class="n">ecs</span><span class="o">.</span><span class="n">CapacityProvider</span><span class="p">(</span><span class="s2">&quot;test&quot;</span><span class="p">,</span> <span class="n">auto_scaling_group_provider</span><span class="o">=</span><span class="p">{</span>
    <span class="s2">&quot;autoScalingGroupArn&quot;</span><span class="p">:</span> <span class="n">aws_autoscaling_group</span><span class="p">[</span><span class="s2">&quot;test&quot;</span><span class="p">][</span><span class="s2">&quot;arn&quot;</span><span class="p">],</span>
    <span class="s2">&quot;managedTerminationProtection&quot;</span><span class="p">:</span> <span class="s2">&quot;ENABLED&quot;</span><span class="p">,</span>
    <span class="s2">&quot;managed_scaling&quot;</span><span class="p">:</span> <span class="p">{</span>
        <span class="s2">&quot;maximumScalingStepSize&quot;</span><span class="p">:</span> <span class="mi">1000</span><span class="p">,</span>
        <span class="s2">&quot;minimumScalingStepSize&quot;</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="s2">&quot;status&quot;</span><span class="p">:</span> <span class="s2">&quot;ENABLED&quot;</span><span class="p">,</span>
        <span class="s2">&quot;target_capacity&quot;</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span>
    <span class="p">},</span>
<span class="p">})</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>auto_scaling_group_provider</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – Nested argument defining the provider for the ECS auto scaling group. Defined below.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the capacity provider.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – Key-value map of resource tags.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>auto_scaling_group_provider</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">autoScalingGroupArn</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - - The Amazon Resource Name (ARN) of the associated auto scaling group.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">managedScaling</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[dict]</span></code>) - - Nested argument defining the parameters of the auto scaling. Defined below.</p>
<ul>
<li><p><code class="docutils literal notranslate"><span class="pre">maximumScalingStepSize</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The maximum step adjustment size. A number between 1 and 10,000.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">minimumScalingStepSize</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The minimum step adjustment size. A number between 1 and 10,000.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">status</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Whether auto scaling is managed by ECS. Valid values are <code class="docutils literal notranslate"><span class="pre">ENABLED</span></code> and <code class="docutils literal notranslate"><span class="pre">DISABLED</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">target_capacity</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The target utilization for the capacity provider. A number between 1 and 100.</p></li>
</ul>
</li>
<li><p><code class="docutils literal notranslate"><span class="pre">managedTerminationProtection</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - - Enables or disables container-aware termination of instances in the auto scaling group when scale-in happens. Valid values are <code class="docutils literal notranslate"><span class="pre">ENABLED</span></code> and <code class="docutils literal notranslate"><span class="pre">DISABLED</span></code>.</p></li>
</ul>
<dl class="py attribute">
<dt id="pulumi_aws.ecs.CapacityProvider.arn">
<code class="sig-name descname">arn</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.CapacityProvider.arn" title="Permalink to this definition">¶</a></dt>
<dd><p>The Amazon Resource Name (ARN) that identifies the capacity provider.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.CapacityProvider.auto_scaling_group_provider">
<code class="sig-name descname">auto_scaling_group_provider</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.CapacityProvider.auto_scaling_group_provider" title="Permalink to this definition">¶</a></dt>
<dd><p>Nested argument defining the provider for the ECS auto scaling group. Defined below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">autoScalingGroupArn</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - - The Amazon Resource Name (ARN) of the associated auto scaling group.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">managedScaling</span></code> (<code class="docutils literal notranslate"><span class="pre">dict</span></code>) - - Nested argument defining the parameters of the auto scaling. Defined below.</p>
<ul>
<li><p><code class="docutils literal notranslate"><span class="pre">maximumScalingStepSize</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The maximum step adjustment size. A number between 1 and 10,000.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">minimumScalingStepSize</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The minimum step adjustment size. A number between 1 and 10,000.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">status</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Whether auto scaling is managed by ECS. Valid values are <code class="docutils literal notranslate"><span class="pre">ENABLED</span></code> and <code class="docutils literal notranslate"><span class="pre">DISABLED</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">target_capacity</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The target utilization for the capacity provider. A number between 1 and 100.</p></li>
</ul>
</li>
<li><p><code class="docutils literal notranslate"><span class="pre">managedTerminationProtection</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - - Enables or disables container-aware termination of instances in the auto scaling group when scale-in happens. Valid values are <code class="docutils literal notranslate"><span class="pre">ENABLED</span></code> and <code class="docutils literal notranslate"><span class="pre">DISABLED</span></code>.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.CapacityProvider.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.CapacityProvider.name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the capacity provider.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.CapacityProvider.tags">
<code class="sig-name descname">tags</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.CapacityProvider.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>Key-value map of resource tags.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_aws.ecs.CapacityProvider.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">auto_scaling_group_provider</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.CapacityProvider.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing CapacityProvider resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>arn</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Amazon Resource Name (ARN) that identifies the capacity provider.</p></li>
<li><p><strong>auto_scaling_group_provider</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – Nested argument defining the provider for the ECS auto scaling group. Defined below.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the capacity provider.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – Key-value map of resource tags.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>auto_scaling_group_provider</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">autoScalingGroupArn</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - - The Amazon Resource Name (ARN) of the associated auto scaling group.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">managedScaling</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[dict]</span></code>) - - Nested argument defining the parameters of the auto scaling. Defined below.</p>
<ul>
<li><p><code class="docutils literal notranslate"><span class="pre">maximumScalingStepSize</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The maximum step adjustment size. A number between 1 and 10,000.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">minimumScalingStepSize</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The minimum step adjustment size. A number between 1 and 10,000.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">status</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Whether auto scaling is managed by ECS. Valid values are <code class="docutils literal notranslate"><span class="pre">ENABLED</span></code> and <code class="docutils literal notranslate"><span class="pre">DISABLED</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">target_capacity</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The target utilization for the capacity provider. A number between 1 and 100.</p></li>
</ul>
</li>
<li><p><code class="docutils literal notranslate"><span class="pre">managedTerminationProtection</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - - Enables or disables container-aware termination of instances in the auto scaling group when scale-in happens. Valid values are <code class="docutils literal notranslate"><span class="pre">ENABLED</span></code> and <code class="docutils literal notranslate"><span class="pre">DISABLED</span></code>.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_aws.ecs.CapacityProvider.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.CapacityProvider.translate_output_property" title="Permalink to this definition">¶</a></dt>
<dd><p>Provides subclasses of Resource an opportunity to translate names of output properties
into a format of their choosing before writing those properties to the resource object.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><p><strong>prop</strong> (<em>str</em>) – A property name.</p>
</dd>
<dt class="field-even">Returns</dt>
<dd class="field-even"><p>A potentially transformed property name.</p>
</dd>
<dt class="field-odd">Return type</dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>

<dl class="py method">
<dt id="pulumi_aws.ecs.CapacityProvider.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.CapacityProvider.translate_input_property" title="Permalink to this definition">¶</a></dt>
<dd><p>Provides subclasses of Resource an opportunity to translate names of input properties into
a format of their choosing before sending those properties to the Pulumi engine.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><p><strong>prop</strong> (<em>str</em>) – A property name.</p>
</dd>
<dt class="field-even">Returns</dt>
<dd class="field-even"><p>A potentially transformed property name.</p>
</dd>
<dt class="field-odd">Return type</dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>

</dd></dl>

<dl class="py class">
<dt id="pulumi_aws.ecs.Cluster">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">Cluster</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">capacity_providers</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">default_capacity_provider_strategies</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">settings</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.Cluster" title="Permalink to this definition">¶</a></dt>
<dd><p>Provides an ECS cluster.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_aws</span> <span class="k">as</span> <span class="nn">aws</span>

<span class="n">foo</span> <span class="o">=</span> <span class="n">aws</span><span class="o">.</span><span class="n">ecs</span><span class="o">.</span><span class="n">Cluster</span><span class="p">(</span><span class="s2">&quot;foo&quot;</span><span class="p">)</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>capacity_providers</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – List of short names of one or more capacity providers to associate with the cluster. Valid values also include <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code> and <code class="docutils literal notranslate"><span class="pre">FARGATE_SPOT</span></code>.</p></li>
<li><p><strong>default_capacity_provider_strategies</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – The capacity provider strategy to use by default for the cluster. Can be one or more.  Defined below.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the cluster (up to 255 letters, numbers, hyphens, and underscores)</p></li>
<li><p><strong>settings</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – Configuration block(s) with cluster settings. For example, this can be used to enable CloudWatch Container Insights for a cluster. Defined below.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – Key-value map of resource tags</p></li>
</ul>
</dd>
</dl>
<p>The <strong>default_capacity_provider_strategies</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">base</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">capacityProvider</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The short name of the capacity provider.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">weight</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The relative percentage of the total number of launched tasks that should use the specified capacity provider.</p></li>
</ul>
<p>The <strong>settings</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Name of the setting to manage. Valid values: <code class="docutils literal notranslate"><span class="pre">containerInsights</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">value</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The value to assign to the setting. Value values are <code class="docutils literal notranslate"><span class="pre">enabled</span></code> and <code class="docutils literal notranslate"><span class="pre">disabled</span></code>.</p></li>
</ul>
<dl class="py attribute">
<dt id="pulumi_aws.ecs.Cluster.arn">
<code class="sig-name descname">arn</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Cluster.arn" title="Permalink to this definition">¶</a></dt>
<dd><p>The Amazon Resource Name (ARN) that identifies the cluster</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Cluster.capacity_providers">
<code class="sig-name descname">capacity_providers</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Cluster.capacity_providers" title="Permalink to this definition">¶</a></dt>
<dd><p>List of short names of one or more capacity providers to associate with the cluster. Valid values also include <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code> and <code class="docutils literal notranslate"><span class="pre">FARGATE_SPOT</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Cluster.default_capacity_provider_strategies">
<code class="sig-name descname">default_capacity_provider_strategies</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Cluster.default_capacity_provider_strategies" title="Permalink to this definition">¶</a></dt>
<dd><p>The capacity provider strategy to use by default for the cluster. Can be one or more.  Defined below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">base</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">capacityProvider</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The short name of the capacity provider.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">weight</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The relative percentage of the total number of launched tasks that should use the specified capacity provider.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Cluster.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Cluster.name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the cluster (up to 255 letters, numbers, hyphens, and underscores)</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Cluster.settings">
<code class="sig-name descname">settings</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Cluster.settings" title="Permalink to this definition">¶</a></dt>
<dd><p>Configuration block(s) with cluster settings. For example, this can be used to enable CloudWatch Container Insights for a cluster. Defined below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Name of the setting to manage. Valid values: <code class="docutils literal notranslate"><span class="pre">containerInsights</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">value</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The value to assign to the setting. Value values are <code class="docutils literal notranslate"><span class="pre">enabled</span></code> and <code class="docutils literal notranslate"><span class="pre">disabled</span></code>.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Cluster.tags">
<code class="sig-name descname">tags</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Cluster.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>Key-value map of resource tags</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_aws.ecs.Cluster.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">capacity_providers</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">default_capacity_provider_strategies</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">settings</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.Cluster.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing Cluster resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>arn</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Amazon Resource Name (ARN) that identifies the cluster</p></li>
<li><p><strong>capacity_providers</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – List of short names of one or more capacity providers to associate with the cluster. Valid values also include <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code> and <code class="docutils literal notranslate"><span class="pre">FARGATE_SPOT</span></code>.</p></li>
<li><p><strong>default_capacity_provider_strategies</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – The capacity provider strategy to use by default for the cluster. Can be one or more.  Defined below.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the cluster (up to 255 letters, numbers, hyphens, and underscores)</p></li>
<li><p><strong>settings</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – Configuration block(s) with cluster settings. For example, this can be used to enable CloudWatch Container Insights for a cluster. Defined below.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – Key-value map of resource tags</p></li>
</ul>
</dd>
</dl>
<p>The <strong>default_capacity_provider_strategies</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">base</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">capacityProvider</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The short name of the capacity provider.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">weight</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The relative percentage of the total number of launched tasks that should use the specified capacity provider.</p></li>
</ul>
<p>The <strong>settings</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Name of the setting to manage. Valid values: <code class="docutils literal notranslate"><span class="pre">containerInsights</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">value</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The value to assign to the setting. Value values are <code class="docutils literal notranslate"><span class="pre">enabled</span></code> and <code class="docutils literal notranslate"><span class="pre">disabled</span></code>.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_aws.ecs.Cluster.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.Cluster.translate_output_property" title="Permalink to this definition">¶</a></dt>
<dd><p>Provides subclasses of Resource an opportunity to translate names of output properties
into a format of their choosing before writing those properties to the resource object.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><p><strong>prop</strong> (<em>str</em>) – A property name.</p>
</dd>
<dt class="field-even">Returns</dt>
<dd class="field-even"><p>A potentially transformed property name.</p>
</dd>
<dt class="field-odd">Return type</dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>

<dl class="py method">
<dt id="pulumi_aws.ecs.Cluster.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.Cluster.translate_input_property" title="Permalink to this definition">¶</a></dt>
<dd><p>Provides subclasses of Resource an opportunity to translate names of input properties into
a format of their choosing before sending those properties to the Pulumi engine.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><p><strong>prop</strong> (<em>str</em>) – A property name.</p>
</dd>
<dt class="field-even">Returns</dt>
<dd class="field-even"><p>A potentially transformed property name.</p>
</dd>
<dt class="field-odd">Return type</dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>

</dd></dl>

<dl class="py class">
<dt id="pulumi_aws.ecs.GetClusterResult">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">GetClusterResult</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">cluster_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">pending_tasks_count</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">registered_container_instances_count</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">running_tasks_count</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">settings</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">status</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.GetClusterResult" title="Permalink to this definition">¶</a></dt>
<dd><p>A collection of values returned by getCluster.</p>
<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetClusterResult.arn">
<code class="sig-name descname">arn</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetClusterResult.arn" title="Permalink to this definition">¶</a></dt>
<dd><p>The ARN of the ECS Cluster</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetClusterResult.id">
<code class="sig-name descname">id</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetClusterResult.id" title="Permalink to this definition">¶</a></dt>
<dd><p>The provider-assigned unique ID for this managed resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetClusterResult.pending_tasks_count">
<code class="sig-name descname">pending_tasks_count</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetClusterResult.pending_tasks_count" title="Permalink to this definition">¶</a></dt>
<dd><p>The number of pending tasks for the ECS Cluster</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetClusterResult.registered_container_instances_count">
<code class="sig-name descname">registered_container_instances_count</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetClusterResult.registered_container_instances_count" title="Permalink to this definition">¶</a></dt>
<dd><p>The number of registered container instances for the ECS Cluster</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetClusterResult.running_tasks_count">
<code class="sig-name descname">running_tasks_count</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetClusterResult.running_tasks_count" title="Permalink to this definition">¶</a></dt>
<dd><p>The number of running tasks for the ECS Cluster</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetClusterResult.settings">
<code class="sig-name descname">settings</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetClusterResult.settings" title="Permalink to this definition">¶</a></dt>
<dd><p>The settings associated with the ECS Cluster.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetClusterResult.status">
<code class="sig-name descname">status</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetClusterResult.status" title="Permalink to this definition">¶</a></dt>
<dd><p>The status of the ECS Cluster</p>
</dd></dl>

</dd></dl>

<dl class="py class">
<dt id="pulumi_aws.ecs.GetContainerDefinitionResult">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">GetContainerDefinitionResult</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">container_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">cpu</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">disable_networking</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">docker_labels</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">environment</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">image</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">image_digest</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">memory</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">memory_reservation</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_definition</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.GetContainerDefinitionResult" title="Permalink to this definition">¶</a></dt>
<dd><p>A collection of values returned by getContainerDefinition.</p>
<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetContainerDefinitionResult.cpu">
<code class="sig-name descname">cpu</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetContainerDefinitionResult.cpu" title="Permalink to this definition">¶</a></dt>
<dd><p>The CPU limit for this container definition</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetContainerDefinitionResult.disable_networking">
<code class="sig-name descname">disable_networking</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetContainerDefinitionResult.disable_networking" title="Permalink to this definition">¶</a></dt>
<dd><p>Indicator if networking is disabled</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetContainerDefinitionResult.docker_labels">
<code class="sig-name descname">docker_labels</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetContainerDefinitionResult.docker_labels" title="Permalink to this definition">¶</a></dt>
<dd><p>Set docker labels</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetContainerDefinitionResult.environment">
<code class="sig-name descname">environment</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetContainerDefinitionResult.environment" title="Permalink to this definition">¶</a></dt>
<dd><p>The environment in use</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetContainerDefinitionResult.id">
<code class="sig-name descname">id</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetContainerDefinitionResult.id" title="Permalink to this definition">¶</a></dt>
<dd><p>The provider-assigned unique ID for this managed resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetContainerDefinitionResult.image">
<code class="sig-name descname">image</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetContainerDefinitionResult.image" title="Permalink to this definition">¶</a></dt>
<dd><p>The docker image in use, including the digest</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetContainerDefinitionResult.image_digest">
<code class="sig-name descname">image_digest</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetContainerDefinitionResult.image_digest" title="Permalink to this definition">¶</a></dt>
<dd><p>The digest of the docker image in use</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetContainerDefinitionResult.memory">
<code class="sig-name descname">memory</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetContainerDefinitionResult.memory" title="Permalink to this definition">¶</a></dt>
<dd><p>The memory limit for this container definition</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetContainerDefinitionResult.memory_reservation">
<code class="sig-name descname">memory_reservation</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetContainerDefinitionResult.memory_reservation" title="Permalink to this definition">¶</a></dt>
<dd><p>The soft limit (in MiB) of memory to reserve for the container. When system memory is under contention, Docker attempts to keep the container memory to this soft limit</p>
</dd></dl>

</dd></dl>

<dl class="py class">
<dt id="pulumi_aws.ecs.GetServiceResult">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">GetServiceResult</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">cluster_arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">desired_count</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">launch_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">scheduling_strategy</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">service_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_definition</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.GetServiceResult" title="Permalink to this definition">¶</a></dt>
<dd><p>A collection of values returned by getService.</p>
<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetServiceResult.arn">
<code class="sig-name descname">arn</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetServiceResult.arn" title="Permalink to this definition">¶</a></dt>
<dd><p>The ARN of the ECS Service</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetServiceResult.desired_count">
<code class="sig-name descname">desired_count</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetServiceResult.desired_count" title="Permalink to this definition">¶</a></dt>
<dd><p>The number of tasks for the ECS Service</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetServiceResult.id">
<code class="sig-name descname">id</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetServiceResult.id" title="Permalink to this definition">¶</a></dt>
<dd><p>The provider-assigned unique ID for this managed resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetServiceResult.launch_type">
<code class="sig-name descname">launch_type</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetServiceResult.launch_type" title="Permalink to this definition">¶</a></dt>
<dd><p>The launch type for the ECS Service</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetServiceResult.scheduling_strategy">
<code class="sig-name descname">scheduling_strategy</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetServiceResult.scheduling_strategy" title="Permalink to this definition">¶</a></dt>
<dd><p>The scheduling strategy for the ECS Service</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetServiceResult.task_definition">
<code class="sig-name descname">task_definition</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetServiceResult.task_definition" title="Permalink to this definition">¶</a></dt>
<dd><p>The family for the latest ACTIVE revision</p>
</dd></dl>

</dd></dl>

<dl class="py class">
<dt id="pulumi_aws.ecs.GetTaskDefinitionResult">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">GetTaskDefinitionResult</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">family</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">network_mode</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">revision</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">status</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_definition</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_role_arn</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.GetTaskDefinitionResult" title="Permalink to this definition">¶</a></dt>
<dd><p>A collection of values returned by getTaskDefinition.</p>
<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetTaskDefinitionResult.family">
<code class="sig-name descname">family</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetTaskDefinitionResult.family" title="Permalink to this definition">¶</a></dt>
<dd><p>The family of this task definition</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetTaskDefinitionResult.id">
<code class="sig-name descname">id</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetTaskDefinitionResult.id" title="Permalink to this definition">¶</a></dt>
<dd><p>The provider-assigned unique ID for this managed resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetTaskDefinitionResult.network_mode">
<code class="sig-name descname">network_mode</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetTaskDefinitionResult.network_mode" title="Permalink to this definition">¶</a></dt>
<dd><p>The Docker networking mode to use for the containers in this task.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetTaskDefinitionResult.revision">
<code class="sig-name descname">revision</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetTaskDefinitionResult.revision" title="Permalink to this definition">¶</a></dt>
<dd><p>The revision of this task definition</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetTaskDefinitionResult.status">
<code class="sig-name descname">status</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetTaskDefinitionResult.status" title="Permalink to this definition">¶</a></dt>
<dd><p>The status of this task definition</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.GetTaskDefinitionResult.task_role_arn">
<code class="sig-name descname">task_role_arn</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.GetTaskDefinitionResult.task_role_arn" title="Permalink to this definition">¶</a></dt>
<dd><p>The ARN of the IAM role that containers in this task can assume</p>
</dd></dl>

</dd></dl>

<dl class="py class">
<dt id="pulumi_aws.ecs.Service">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">Service</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">capacity_provider_strategies</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">cluster</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">deployment_controller</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">deployment_maximum_percent</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">deployment_minimum_healthy_percent</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">desired_count</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">enable_ecs_managed_tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">force_new_deployment</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">health_check_grace_period_seconds</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">iam_role</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">launch_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">load_balancers</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">network_configuration</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">ordered_placement_strategies</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">placement_constraints</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">platform_version</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">propagate_tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">scheduling_strategy</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">service_registries</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_definition</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">wait_for_steady_state</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.Service" title="Permalink to this definition">¶</a></dt>
<dd><blockquote>
<div><p><strong>Note:</strong> To prevent a race condition during service deletion, make sure to set <code class="docutils literal notranslate"><span class="pre">depends_on</span></code> to the related <code class="docutils literal notranslate"><span class="pre">iam.RolePolicy</span></code>; otherwise, the policy may be destroyed too soon and the ECS service will then get stuck in the <code class="docutils literal notranslate"><span class="pre">DRAINING</span></code> state.</p>
</div></blockquote>
<p>Provides an ECS service - effectively a task that is expected to run until an error occurs or a user terminates it (typically a webserver or a database).</p>
<p>See <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">ECS Services section in AWS developer guide</a>.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_aws</span> <span class="k">as</span> <span class="nn">aws</span>

<span class="n">mongo</span> <span class="o">=</span> <span class="n">aws</span><span class="o">.</span><span class="n">ecs</span><span class="o">.</span><span class="n">Service</span><span class="p">(</span><span class="s2">&quot;mongo&quot;</span><span class="p">,</span>
    <span class="n">cluster</span><span class="o">=</span><span class="n">aws_ecs_cluster</span><span class="p">[</span><span class="s2">&quot;foo&quot;</span><span class="p">][</span><span class="s2">&quot;id&quot;</span><span class="p">],</span>
    <span class="n">task_definition</span><span class="o">=</span><span class="n">aws_ecs_task_definition</span><span class="p">[</span><span class="s2">&quot;mongo&quot;</span><span class="p">][</span><span class="s2">&quot;arn&quot;</span><span class="p">],</span>
    <span class="n">desired_count</span><span class="o">=</span><span class="mi">3</span><span class="p">,</span>
    <span class="n">iam_role</span><span class="o">=</span><span class="n">aws_iam_role</span><span class="p">[</span><span class="s2">&quot;foo&quot;</span><span class="p">][</span><span class="s2">&quot;arn&quot;</span><span class="p">],</span>
    <span class="n">ordered_placement_strategy</span><span class="o">=</span><span class="p">[{</span>
        <span class="s2">&quot;type&quot;</span><span class="p">:</span> <span class="s2">&quot;binpack&quot;</span><span class="p">,</span>
        <span class="s2">&quot;field&quot;</span><span class="p">:</span> <span class="s2">&quot;cpu&quot;</span><span class="p">,</span>
    <span class="p">}],</span>
    <span class="n">load_balancer</span><span class="o">=</span><span class="p">[{</span>
        <span class="s2">&quot;target_group_arn&quot;</span><span class="p">:</span> <span class="n">aws_lb_target_group</span><span class="p">[</span><span class="s2">&quot;foo&quot;</span><span class="p">][</span><span class="s2">&quot;arn&quot;</span><span class="p">],</span>
        <span class="s2">&quot;container_name&quot;</span><span class="p">:</span> <span class="s2">&quot;mongo&quot;</span><span class="p">,</span>
        <span class="s2">&quot;containerPort&quot;</span><span class="p">:</span> <span class="mi">8080</span><span class="p">,</span>
    <span class="p">}],</span>
    <span class="n">placement_constraints</span><span class="o">=</span><span class="p">[{</span>
        <span class="s2">&quot;type&quot;</span><span class="p">:</span> <span class="s2">&quot;memberOf&quot;</span><span class="p">,</span>
        <span class="s2">&quot;expression&quot;</span><span class="p">:</span> <span class="s2">&quot;attribute:ecs.availability-zone in [us-west-2a, us-west-2b]&quot;</span><span class="p">,</span>
    <span class="p">}])</span>
</pre></div>
</div>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_aws</span> <span class="k">as</span> <span class="nn">aws</span>

<span class="n">example</span> <span class="o">=</span> <span class="n">aws</span><span class="o">.</span><span class="n">ecs</span><span class="o">.</span><span class="n">Service</span><span class="p">(</span><span class="s2">&quot;example&quot;</span><span class="p">,</span>
    <span class="n">desired_count</span><span class="o">=</span><span class="mi">2</span><span class="p">,</span>
    <span class="n">lifecycle</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;ignoreChanges&quot;</span><span class="p">:</span> <span class="p">[</span><span class="s2">&quot;desiredCount&quot;</span><span class="p">],</span>
    <span class="p">})</span>
</pre></div>
</div>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_aws</span> <span class="k">as</span> <span class="nn">aws</span>

<span class="n">bar</span> <span class="o">=</span> <span class="n">aws</span><span class="o">.</span><span class="n">ecs</span><span class="o">.</span><span class="n">Service</span><span class="p">(</span><span class="s2">&quot;bar&quot;</span><span class="p">,</span>
    <span class="n">cluster</span><span class="o">=</span><span class="n">aws_ecs_cluster</span><span class="p">[</span><span class="s2">&quot;foo&quot;</span><span class="p">][</span><span class="s2">&quot;id&quot;</span><span class="p">],</span>
    <span class="n">scheduling_strategy</span><span class="o">=</span><span class="s2">&quot;DAEMON&quot;</span><span class="p">,</span>
    <span class="n">task_definition</span><span class="o">=</span><span class="n">aws_ecs_task_definition</span><span class="p">[</span><span class="s2">&quot;bar&quot;</span><span class="p">][</span><span class="s2">&quot;arn&quot;</span><span class="p">])</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>capacity_provider_strategies</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – The capacity provider strategy to use for the service. Can be one or more.  Defined below.</p></li>
<li><p><strong>cluster</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – ARN of an ECS cluster</p></li>
<li><p><strong>deployment_controller</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – Configuration block containing deployment controller configuration. Defined below.</p></li>
<li><p><strong>deployment_maximum_percent</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – The upper limit (as a percentage of the service’s desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the <code class="docutils literal notranslate"><span class="pre">DAEMON</span></code> scheduling strategy.</p></li>
<li><p><strong>deployment_minimum_healthy_percent</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – The lower limit (as a percentage of the service’s desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment.</p></li>
<li><p><strong>desired_count</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – The number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the <code class="docutils literal notranslate"><span class="pre">DAEMON</span></code> scheduling strategy.</p></li>
<li><p><strong>enable_ecs_managed_tags</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Specifies whether to enable Amazon ECS managed tags for the tasks within the service.</p></li>
<li><p><strong>force_new_deployment</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Enable to force a new task deployment of the service. This can be used to update tasks to use a newer Docker image with same image/tag combination (e.g. <code class="docutils literal notranslate"><span class="pre">myimage:latest</span></code>), roll Fargate tasks onto a newer platform version, or immediately deploy <code class="docutils literal notranslate"><span class="pre">ordered_placement_strategy</span></code> and <code class="docutils literal notranslate"><span class="pre">placement_constraints</span></code> updates.</p></li>
<li><p><strong>health_check_grace_period_seconds</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 2147483647. Only valid for services configured to use load balancers.</p></li>
<li><p><strong>iam_role</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the <code class="docutils literal notranslate"><span class="pre">awsvpc</span></code> network mode. If using <code class="docutils literal notranslate"><span class="pre">awsvpc</span></code> network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.</p></li>
<li><p><strong>launch_type</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The launch type on which to run your service. The valid values are <code class="docutils literal notranslate"><span class="pre">EC2</span></code> and <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">EC2</span></code>.</p></li>
<li><p><strong>load_balancers</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – A load balancer block. Load balancers documented below.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the service (up to 255 letters, numbers, hyphens, and underscores)</p></li>
<li><p><strong>network_configuration</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – The network configuration for the service. This parameter is required for task definitions that use the <code class="docutils literal notranslate"><span class="pre">awsvpc</span></code> network mode to receive their own Elastic Network Interface, and it is not supported for other network modes.</p></li>
<li><p><strong>ordered_placement_strategies</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. Updates to this configuration will take effect next task deployment unless <code class="docutils literal notranslate"><span class="pre">force_new_deployment</span></code> is enabled. The maximum number of <code class="docutils literal notranslate"><span class="pre">ordered_placement_strategy</span></code> blocks is <code class="docutils literal notranslate"><span class="pre">5</span></code>. Defined below.</p></li>
<li><p><strong>placement_constraints</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – rules that are taken into consideration during task placement. Updates to this configuration will take effect next task deployment unless <code class="docutils literal notranslate"><span class="pre">force_new_deployment</span></code> is enabled. Maximum number of <code class="docutils literal notranslate"><span class="pre">placement_constraints</span></code> is <code class="docutils literal notranslate"><span class="pre">10</span></code>. Defined below.</p></li>
<li><p><strong>platform_version</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The platform version on which to run your service. Only applicable for <code class="docutils literal notranslate"><span class="pre">launch_type</span></code> set to <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">LATEST</span></code>. More information about Fargate platform versions can be found in the <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS ECS User Guide</a>.</p></li>
<li><p><strong>propagate_tags</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies whether to propagate the tags from the task definition or the service to the tasks. The valid values are <code class="docutils literal notranslate"><span class="pre">SERVICE</span></code> and <code class="docutils literal notranslate"><span class="pre">TASK_DEFINITION</span></code>.</p></li>
<li><p><strong>scheduling_strategy</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The scheduling strategy to use for the service. The valid values are <code class="docutils literal notranslate"><span class="pre">REPLICA</span></code> and <code class="docutils literal notranslate"><span class="pre">DAEMON</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">REPLICA</span></code>. Note that <cite>*Fargate tasks do not support the ``DAEMON`</cite> scheduling strategy* &lt;<a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html</a>&gt;`_.</p></li>
<li><p><strong>service_registries</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – The service discovery registries for the service. The maximum number of <code class="docutils literal notranslate"><span class="pre">service_registries</span></code> blocks is <code class="docutils literal notranslate"><span class="pre">1</span></code>.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – Key-value mapping of resource tags</p></li>
<li><p><strong>task_definition</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The family and revision (<code class="docutils literal notranslate"><span class="pre">family:revision</span></code>) or full ARN of the task definition that you want to run in your service.</p></li>
<li><p><strong>wait_for_steady_state</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – If <code class="docutils literal notranslate"><span class="pre">true</span></code>, this provider will wait for the service to reach a steady state (like <cite>``aws ecs wait services-stable`</cite> &lt;<a class="reference external" href="https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html">https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html</a>&gt;`_) before continuing. Default <code class="docutils literal notranslate"><span class="pre">false</span></code>.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>capacity_provider_strategies</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">base</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">capacityProvider</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The short name of the capacity provider.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">weight</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The relative percentage of the total number of launched tasks that should use the specified capacity provider.</p></li>
</ul>
<p>The <strong>deployment_controller</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Type of deployment controller. Valid values: <code class="docutils literal notranslate"><span class="pre">CODE_DEPLOY</span></code>, <code class="docutils literal notranslate"><span class="pre">ECS</span></code>. Default: <code class="docutils literal notranslate"><span class="pre">ECS</span></code>.</p></li>
</ul>
<p>The <strong>load_balancers</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">container_name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The name of the container to associate with the load balancer (as it appears in a container definition).</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">containerPort</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The port on the container to associate with the load balancer.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">elbName</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The name of the ELB (Classic) to associate with the service.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">target_group_arn</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The ARN of the Load Balancer target group to associate with the service.</p></li>
</ul>
<p>The <strong>network_configuration</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">assignPublicIp</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[bool]</span></code>) - Assign a public IP address to the ENI (Fargate launch type only). Valid values are <code class="docutils literal notranslate"><span class="pre">true</span></code> or <code class="docutils literal notranslate"><span class="pre">false</span></code>. Default <code class="docutils literal notranslate"><span class="pre">false</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">security_groups</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[list]</span></code>) - The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">subnets</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[list]</span></code>) - The subnets associated with the task or service.</p></li>
</ul>
<p>The <strong>ordered_placement_strategies</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">field</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - For the <code class="docutils literal notranslate"><span class="pre">spread</span></code> placement strategy, valid values are <code class="docutils literal notranslate"><span class="pre">instanceId</span></code> (or <code class="docutils literal notranslate"><span class="pre">host</span></code>,
which has the same effect), or any platform or custom attribute that is applied to a container instance.
For the <code class="docutils literal notranslate"><span class="pre">binpack</span></code> type, valid values are <code class="docutils literal notranslate"><span class="pre">memory</span></code> and <code class="docutils literal notranslate"><span class="pre">cpu</span></code>. For the <code class="docutils literal notranslate"><span class="pre">random</span></code> type, this attribute is not
needed. For more information, see <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PlacementStrategy.html">Placement Strategy</a>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The type of placement strategy. Must be one of: <code class="docutils literal notranslate"><span class="pre">binpack</span></code>, <code class="docutils literal notranslate"><span class="pre">random</span></code>, or <code class="docutils literal notranslate"><span class="pre">spread</span></code></p></li>
</ul>
<p>The <strong>placement_constraints</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">expression</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Cluster Query Language expression to apply to the constraint. Does not need to be specified
for the <code class="docutils literal notranslate"><span class="pre">distinctInstance</span></code> type.
For more information, see <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language in the Amazon EC2 Container
Service Developer
Guide</a>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The type of constraint. The only valid values at this time are <code class="docutils literal notranslate"><span class="pre">memberOf</span></code> and <code class="docutils literal notranslate"><span class="pre">distinctInstance</span></code>.</p></li>
</ul>
<p>The <strong>service_registries</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">container_name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The container name value, already specified in the task definition, to be used for your service discovery service.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">containerPort</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The port value, already specified in the task definition, to be used for your service discovery service.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">port</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The port value used if your Service Discovery service specified an SRV record.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">registryArn</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The ARN of the Service Registry. The currently supported service registry is Amazon Route 53 Auto Naming Service(<code class="docutils literal notranslate"><span class="pre">servicediscovery.Service</span></code>). For more information, see <a class="reference external" href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_autonaming_Service.html">Service</a></p></li>
</ul>
<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.capacity_provider_strategies">
<code class="sig-name descname">capacity_provider_strategies</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.capacity_provider_strategies" title="Permalink to this definition">¶</a></dt>
<dd><p>The capacity provider strategy to use for the service. Can be one or more.  Defined below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">base</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">capacityProvider</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The short name of the capacity provider.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">weight</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The relative percentage of the total number of launched tasks that should use the specified capacity provider.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.cluster">
<code class="sig-name descname">cluster</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.cluster" title="Permalink to this definition">¶</a></dt>
<dd><p>ARN of an ECS cluster</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.deployment_controller">
<code class="sig-name descname">deployment_controller</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.deployment_controller" title="Permalink to this definition">¶</a></dt>
<dd><p>Configuration block containing deployment controller configuration. Defined below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Type of deployment controller. Valid values: <code class="docutils literal notranslate"><span class="pre">CODE_DEPLOY</span></code>, <code class="docutils literal notranslate"><span class="pre">ECS</span></code>. Default: <code class="docutils literal notranslate"><span class="pre">ECS</span></code>.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.deployment_maximum_percent">
<code class="sig-name descname">deployment_maximum_percent</code><em class="property">: pulumi.Output[float]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.deployment_maximum_percent" title="Permalink to this definition">¶</a></dt>
<dd><p>The upper limit (as a percentage of the service’s desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the <code class="docutils literal notranslate"><span class="pre">DAEMON</span></code> scheduling strategy.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.deployment_minimum_healthy_percent">
<code class="sig-name descname">deployment_minimum_healthy_percent</code><em class="property">: pulumi.Output[float]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.deployment_minimum_healthy_percent" title="Permalink to this definition">¶</a></dt>
<dd><p>The lower limit (as a percentage of the service’s desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.desired_count">
<code class="sig-name descname">desired_count</code><em class="property">: pulumi.Output[float]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.desired_count" title="Permalink to this definition">¶</a></dt>
<dd><p>The number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the <code class="docutils literal notranslate"><span class="pre">DAEMON</span></code> scheduling strategy.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.enable_ecs_managed_tags">
<code class="sig-name descname">enable_ecs_managed_tags</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.enable_ecs_managed_tags" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies whether to enable Amazon ECS managed tags for the tasks within the service.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.force_new_deployment">
<code class="sig-name descname">force_new_deployment</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.force_new_deployment" title="Permalink to this definition">¶</a></dt>
<dd><p>Enable to force a new task deployment of the service. This can be used to update tasks to use a newer Docker image with same image/tag combination (e.g. <code class="docutils literal notranslate"><span class="pre">myimage:latest</span></code>), roll Fargate tasks onto a newer platform version, or immediately deploy <code class="docutils literal notranslate"><span class="pre">ordered_placement_strategy</span></code> and <code class="docutils literal notranslate"><span class="pre">placement_constraints</span></code> updates.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.health_check_grace_period_seconds">
<code class="sig-name descname">health_check_grace_period_seconds</code><em class="property">: pulumi.Output[float]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.health_check_grace_period_seconds" title="Permalink to this definition">¶</a></dt>
<dd><p>Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 2147483647. Only valid for services configured to use load balancers.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.iam_role">
<code class="sig-name descname">iam_role</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.iam_role" title="Permalink to this definition">¶</a></dt>
<dd><p>ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the <code class="docutils literal notranslate"><span class="pre">awsvpc</span></code> network mode. If using <code class="docutils literal notranslate"><span class="pre">awsvpc</span></code> network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.launch_type">
<code class="sig-name descname">launch_type</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.launch_type" title="Permalink to this definition">¶</a></dt>
<dd><p>The launch type on which to run your service. The valid values are <code class="docutils literal notranslate"><span class="pre">EC2</span></code> and <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">EC2</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.load_balancers">
<code class="sig-name descname">load_balancers</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.load_balancers" title="Permalink to this definition">¶</a></dt>
<dd><p>A load balancer block. Load balancers documented below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">container_name</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The name of the container to associate with the load balancer (as it appears in a container definition).</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">containerPort</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The port on the container to associate with the load balancer.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">elbName</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The name of the ELB (Classic) to associate with the service.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">target_group_arn</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The ARN of the Load Balancer target group to associate with the service.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the service (up to 255 letters, numbers, hyphens, and underscores)</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.network_configuration">
<code class="sig-name descname">network_configuration</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.network_configuration" title="Permalink to this definition">¶</a></dt>
<dd><p>The network configuration for the service. This parameter is required for task definitions that use the <code class="docutils literal notranslate"><span class="pre">awsvpc</span></code> network mode to receive their own Elastic Network Interface, and it is not supported for other network modes.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">assignPublicIp</span></code> (<code class="docutils literal notranslate"><span class="pre">bool</span></code>) - Assign a public IP address to the ENI (Fargate launch type only). Valid values are <code class="docutils literal notranslate"><span class="pre">true</span></code> or <code class="docutils literal notranslate"><span class="pre">false</span></code>. Default <code class="docutils literal notranslate"><span class="pre">false</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">security_groups</span></code> (<code class="docutils literal notranslate"><span class="pre">list</span></code>) - The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">subnets</span></code> (<code class="docutils literal notranslate"><span class="pre">list</span></code>) - The subnets associated with the task or service.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.ordered_placement_strategies">
<code class="sig-name descname">ordered_placement_strategies</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.ordered_placement_strategies" title="Permalink to this definition">¶</a></dt>
<dd><p>Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. Updates to this configuration will take effect next task deployment unless <code class="docutils literal notranslate"><span class="pre">force_new_deployment</span></code> is enabled. The maximum number of <code class="docutils literal notranslate"><span class="pre">ordered_placement_strategy</span></code> blocks is <code class="docutils literal notranslate"><span class="pre">5</span></code>. Defined below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">field</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - For the <code class="docutils literal notranslate"><span class="pre">spread</span></code> placement strategy, valid values are <code class="docutils literal notranslate"><span class="pre">instanceId</span></code> (or <code class="docutils literal notranslate"><span class="pre">host</span></code>,
which has the same effect), or any platform or custom attribute that is applied to a container instance.
For the <code class="docutils literal notranslate"><span class="pre">binpack</span></code> type, valid values are <code class="docutils literal notranslate"><span class="pre">memory</span></code> and <code class="docutils literal notranslate"><span class="pre">cpu</span></code>. For the <code class="docutils literal notranslate"><span class="pre">random</span></code> type, this attribute is not
needed. For more information, see <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PlacementStrategy.html">Placement Strategy</a>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The type of placement strategy. Must be one of: <code class="docutils literal notranslate"><span class="pre">binpack</span></code>, <code class="docutils literal notranslate"><span class="pre">random</span></code>, or <code class="docutils literal notranslate"><span class="pre">spread</span></code></p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.placement_constraints">
<code class="sig-name descname">placement_constraints</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.placement_constraints" title="Permalink to this definition">¶</a></dt>
<dd><p>rules that are taken into consideration during task placement. Updates to this configuration will take effect next task deployment unless <code class="docutils literal notranslate"><span class="pre">force_new_deployment</span></code> is enabled. Maximum number of <code class="docutils literal notranslate"><span class="pre">placement_constraints</span></code> is <code class="docutils literal notranslate"><span class="pre">10</span></code>. Defined below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">expression</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Cluster Query Language expression to apply to the constraint. Does not need to be specified
for the <code class="docutils literal notranslate"><span class="pre">distinctInstance</span></code> type.
For more information, see <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language in the Amazon EC2 Container
Service Developer
Guide</a>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The type of constraint. The only valid values at this time are <code class="docutils literal notranslate"><span class="pre">memberOf</span></code> and <code class="docutils literal notranslate"><span class="pre">distinctInstance</span></code>.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.platform_version">
<code class="sig-name descname">platform_version</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.platform_version" title="Permalink to this definition">¶</a></dt>
<dd><p>The platform version on which to run your service. Only applicable for <code class="docutils literal notranslate"><span class="pre">launch_type</span></code> set to <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">LATEST</span></code>. More information about Fargate platform versions can be found in the <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS ECS User Guide</a>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.propagate_tags">
<code class="sig-name descname">propagate_tags</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.propagate_tags" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies whether to propagate the tags from the task definition or the service to the tasks. The valid values are <code class="docutils literal notranslate"><span class="pre">SERVICE</span></code> and <code class="docutils literal notranslate"><span class="pre">TASK_DEFINITION</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.scheduling_strategy">
<code class="sig-name descname">scheduling_strategy</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.scheduling_strategy" title="Permalink to this definition">¶</a></dt>
<dd><p>The scheduling strategy to use for the service. The valid values are <code class="docutils literal notranslate"><span class="pre">REPLICA</span></code> and <code class="docutils literal notranslate"><span class="pre">DAEMON</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">REPLICA</span></code>. Note that <cite>*Fargate tasks do not support the ``DAEMON`</cite> scheduling strategy* &lt;<a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html</a>&gt;`_.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.service_registries">
<code class="sig-name descname">service_registries</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.service_registries" title="Permalink to this definition">¶</a></dt>
<dd><p>The service discovery registries for the service. The maximum number of <code class="docutils literal notranslate"><span class="pre">service_registries</span></code> blocks is <code class="docutils literal notranslate"><span class="pre">1</span></code>.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">container_name</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The container name value, already specified in the task definition, to be used for your service discovery service.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">containerPort</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The port value, already specified in the task definition, to be used for your service discovery service.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">port</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The port value used if your Service Discovery service specified an SRV record.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">registryArn</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The ARN of the Service Registry. The currently supported service registry is Amazon Route 53 Auto Naming Service(<code class="docutils literal notranslate"><span class="pre">servicediscovery.Service</span></code>). For more information, see <a class="reference external" href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_autonaming_Service.html">Service</a></p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.tags">
<code class="sig-name descname">tags</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>Key-value mapping of resource tags</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.task_definition">
<code class="sig-name descname">task_definition</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.task_definition" title="Permalink to this definition">¶</a></dt>
<dd><p>The family and revision (<code class="docutils literal notranslate"><span class="pre">family:revision</span></code>) or full ARN of the task definition that you want to run in your service.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.Service.wait_for_steady_state">
<code class="sig-name descname">wait_for_steady_state</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.Service.wait_for_steady_state" title="Permalink to this definition">¶</a></dt>
<dd><p>If <code class="docutils literal notranslate"><span class="pre">true</span></code>, this provider will wait for the service to reach a steady state (like <cite>``aws ecs wait services-stable`</cite> &lt;<a class="reference external" href="https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html">https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html</a>&gt;`_) before continuing. Default <code class="docutils literal notranslate"><span class="pre">false</span></code>.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_aws.ecs.Service.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">capacity_provider_strategies</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">cluster</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">deployment_controller</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">deployment_maximum_percent</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">deployment_minimum_healthy_percent</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">desired_count</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">enable_ecs_managed_tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">force_new_deployment</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">health_check_grace_period_seconds</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">iam_role</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">launch_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">load_balancers</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">network_configuration</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">ordered_placement_strategies</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">placement_constraints</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">platform_version</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">propagate_tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">scheduling_strategy</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">service_registries</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_definition</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">wait_for_steady_state</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.Service.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing Service resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>capacity_provider_strategies</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – The capacity provider strategy to use for the service. Can be one or more.  Defined below.</p></li>
<li><p><strong>cluster</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – ARN of an ECS cluster</p></li>
<li><p><strong>deployment_controller</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – Configuration block containing deployment controller configuration. Defined below.</p></li>
<li><p><strong>deployment_maximum_percent</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – The upper limit (as a percentage of the service’s desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the <code class="docutils literal notranslate"><span class="pre">DAEMON</span></code> scheduling strategy.</p></li>
<li><p><strong>deployment_minimum_healthy_percent</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – The lower limit (as a percentage of the service’s desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment.</p></li>
<li><p><strong>desired_count</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – The number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the <code class="docutils literal notranslate"><span class="pre">DAEMON</span></code> scheduling strategy.</p></li>
<li><p><strong>enable_ecs_managed_tags</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Specifies whether to enable Amazon ECS managed tags for the tasks within the service.</p></li>
<li><p><strong>force_new_deployment</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Enable to force a new task deployment of the service. This can be used to update tasks to use a newer Docker image with same image/tag combination (e.g. <code class="docutils literal notranslate"><span class="pre">myimage:latest</span></code>), roll Fargate tasks onto a newer platform version, or immediately deploy <code class="docutils literal notranslate"><span class="pre">ordered_placement_strategy</span></code> and <code class="docutils literal notranslate"><span class="pre">placement_constraints</span></code> updates.</p></li>
<li><p><strong>health_check_grace_period_seconds</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 2147483647. Only valid for services configured to use load balancers.</p></li>
<li><p><strong>iam_role</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the <code class="docutils literal notranslate"><span class="pre">awsvpc</span></code> network mode. If using <code class="docutils literal notranslate"><span class="pre">awsvpc</span></code> network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.</p></li>
<li><p><strong>launch_type</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The launch type on which to run your service. The valid values are <code class="docutils literal notranslate"><span class="pre">EC2</span></code> and <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">EC2</span></code>.</p></li>
<li><p><strong>load_balancers</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – A load balancer block. Load balancers documented below.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the service (up to 255 letters, numbers, hyphens, and underscores)</p></li>
<li><p><strong>network_configuration</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – The network configuration for the service. This parameter is required for task definitions that use the <code class="docutils literal notranslate"><span class="pre">awsvpc</span></code> network mode to receive their own Elastic Network Interface, and it is not supported for other network modes.</p></li>
<li><p><strong>ordered_placement_strategies</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. Updates to this configuration will take effect next task deployment unless <code class="docutils literal notranslate"><span class="pre">force_new_deployment</span></code> is enabled. The maximum number of <code class="docutils literal notranslate"><span class="pre">ordered_placement_strategy</span></code> blocks is <code class="docutils literal notranslate"><span class="pre">5</span></code>. Defined below.</p></li>
<li><p><strong>placement_constraints</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – rules that are taken into consideration during task placement. Updates to this configuration will take effect next task deployment unless <code class="docutils literal notranslate"><span class="pre">force_new_deployment</span></code> is enabled. Maximum number of <code class="docutils literal notranslate"><span class="pre">placement_constraints</span></code> is <code class="docutils literal notranslate"><span class="pre">10</span></code>. Defined below.</p></li>
<li><p><strong>platform_version</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – <p>The platform version on which to run your service. Only applicable for <code class="docutils literal notranslate"><span class="pre">launch_type</span></code> set to <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">LATEST</span></code>. More information about Fargate platform versions can be found in the <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS ECS User Guide</a>.</p>
</p></li>
<li><p><strong>propagate_tags</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies whether to propagate the tags from the task definition or the service to the tasks. The valid values are <code class="docutils literal notranslate"><span class="pre">SERVICE</span></code> and <code class="docutils literal notranslate"><span class="pre">TASK_DEFINITION</span></code>.</p></li>
<li><p><strong>scheduling_strategy</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The scheduling strategy to use for the service. The valid values are <code class="docutils literal notranslate"><span class="pre">REPLICA</span></code> and <code class="docutils literal notranslate"><span class="pre">DAEMON</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">REPLICA</span></code>. Note that <cite>*Fargate tasks do not support the ``DAEMON`</cite> scheduling strategy* &lt;<a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html</a>&gt;`_.</p></li>
<li><p><strong>service_registries</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – The service discovery registries for the service. The maximum number of <code class="docutils literal notranslate"><span class="pre">service_registries</span></code> blocks is <code class="docutils literal notranslate"><span class="pre">1</span></code>.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – Key-value mapping of resource tags</p></li>
<li><p><strong>task_definition</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The family and revision (<code class="docutils literal notranslate"><span class="pre">family:revision</span></code>) or full ARN of the task definition that you want to run in your service.</p></li>
<li><p><strong>wait_for_steady_state</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – If <code class="docutils literal notranslate"><span class="pre">true</span></code>, this provider will wait for the service to reach a steady state (like <cite>``aws ecs wait services-stable`</cite> &lt;<a class="reference external" href="https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html">https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html</a>&gt;`_) before continuing. Default <code class="docutils literal notranslate"><span class="pre">false</span></code>.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>capacity_provider_strategies</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">base</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">capacityProvider</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The short name of the capacity provider.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">weight</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The relative percentage of the total number of launched tasks that should use the specified capacity provider.</p></li>
</ul>
<p>The <strong>deployment_controller</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Type of deployment controller. Valid values: <code class="docutils literal notranslate"><span class="pre">CODE_DEPLOY</span></code>, <code class="docutils literal notranslate"><span class="pre">ECS</span></code>. Default: <code class="docutils literal notranslate"><span class="pre">ECS</span></code>.</p></li>
</ul>
<p>The <strong>load_balancers</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">container_name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The name of the container to associate with the load balancer (as it appears in a container definition).</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">containerPort</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The port on the container to associate with the load balancer.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">elbName</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The name of the ELB (Classic) to associate with the service.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">target_group_arn</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The ARN of the Load Balancer target group to associate with the service.</p></li>
</ul>
<p>The <strong>network_configuration</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">assignPublicIp</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[bool]</span></code>) - Assign a public IP address to the ENI (Fargate launch type only). Valid values are <code class="docutils literal notranslate"><span class="pre">true</span></code> or <code class="docutils literal notranslate"><span class="pre">false</span></code>. Default <code class="docutils literal notranslate"><span class="pre">false</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">security_groups</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[list]</span></code>) - The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">subnets</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[list]</span></code>) - The subnets associated with the task or service.</p></li>
</ul>
<p>The <strong>ordered_placement_strategies</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">field</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - For the <code class="docutils literal notranslate"><span class="pre">spread</span></code> placement strategy, valid values are <code class="docutils literal notranslate"><span class="pre">instanceId</span></code> (or <code class="docutils literal notranslate"><span class="pre">host</span></code>,
which has the same effect), or any platform or custom attribute that is applied to a container instance.
For the <code class="docutils literal notranslate"><span class="pre">binpack</span></code> type, valid values are <code class="docutils literal notranslate"><span class="pre">memory</span></code> and <code class="docutils literal notranslate"><span class="pre">cpu</span></code>. For the <code class="docutils literal notranslate"><span class="pre">random</span></code> type, this attribute is not
needed. For more information, see <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PlacementStrategy.html">Placement Strategy</a>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The type of placement strategy. Must be one of: <code class="docutils literal notranslate"><span class="pre">binpack</span></code>, <code class="docutils literal notranslate"><span class="pre">random</span></code>, or <code class="docutils literal notranslate"><span class="pre">spread</span></code></p></li>
</ul>
<p>The <strong>placement_constraints</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">expression</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Cluster Query Language expression to apply to the constraint. Does not need to be specified
for the <code class="docutils literal notranslate"><span class="pre">distinctInstance</span></code> type.
For more information, see <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language in the Amazon EC2 Container
Service Developer
Guide</a>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The type of constraint. The only valid values at this time are <code class="docutils literal notranslate"><span class="pre">memberOf</span></code> and <code class="docutils literal notranslate"><span class="pre">distinctInstance</span></code>.</p></li>
</ul>
<p>The <strong>service_registries</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">container_name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The container name value, already specified in the task definition, to be used for your service discovery service.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">containerPort</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The port value, already specified in the task definition, to be used for your service discovery service.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">port</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The port value used if your Service Discovery service specified an SRV record.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">registryArn</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The ARN of the Service Registry. The currently supported service registry is Amazon Route 53 Auto Naming Service(<code class="docutils literal notranslate"><span class="pre">servicediscovery.Service</span></code>). For more information, see <a class="reference external" href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_autonaming_Service.html">Service</a></p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_aws.ecs.Service.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.Service.translate_output_property" title="Permalink to this definition">¶</a></dt>
<dd><p>Provides subclasses of Resource an opportunity to translate names of output properties
into a format of their choosing before writing those properties to the resource object.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><p><strong>prop</strong> (<em>str</em>) – A property name.</p>
</dd>
<dt class="field-even">Returns</dt>
<dd class="field-even"><p>A potentially transformed property name.</p>
</dd>
<dt class="field-odd">Return type</dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>

<dl class="py method">
<dt id="pulumi_aws.ecs.Service.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.Service.translate_input_property" title="Permalink to this definition">¶</a></dt>
<dd><p>Provides subclasses of Resource an opportunity to translate names of input properties into
a format of their choosing before sending those properties to the Pulumi engine.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><p><strong>prop</strong> (<em>str</em>) – A property name.</p>
</dd>
<dt class="field-even">Returns</dt>
<dd class="field-even"><p>A potentially transformed property name.</p>
</dd>
<dt class="field-odd">Return type</dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>

</dd></dl>

<dl class="py class">
<dt id="pulumi_aws.ecs.TaskDefinition">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">TaskDefinition</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">container_definitions</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">cpu</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">execution_role_arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">family</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">inference_accelerators</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">ipc_mode</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">memory</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">network_mode</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">pid_mode</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">placement_constraints</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">proxy_configuration</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">requires_compatibilities</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_role_arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">volumes</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a revision of an ECS task definition to be used in <code class="docutils literal notranslate"><span class="pre">ecs.Service</span></code>.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_aws</span> <span class="k">as</span> <span class="nn">aws</span>

<span class="n">service</span> <span class="o">=</span> <span class="n">aws</span><span class="o">.</span><span class="n">ecs</span><span class="o">.</span><span class="n">TaskDefinition</span><span class="p">(</span><span class="s2">&quot;service&quot;</span><span class="p">,</span>
    <span class="n">family</span><span class="o">=</span><span class="s2">&quot;service&quot;</span><span class="p">,</span>
    <span class="n">container_definitions</span><span class="o">=</span><span class="p">(</span><span class="k">lambda</span> <span class="n">path</span><span class="p">:</span> <span class="nb">open</span><span class="p">(</span><span class="n">path</span><span class="p">)</span><span class="o">.</span><span class="n">read</span><span class="p">())(</span><span class="s2">&quot;task-definitions/service.json&quot;</span><span class="p">),</span>
    <span class="n">proxy_configuration</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;type&quot;</span><span class="p">:</span> <span class="s2">&quot;APPMESH&quot;</span><span class="p">,</span>
        <span class="s2">&quot;container_name&quot;</span><span class="p">:</span> <span class="s2">&quot;applicationContainerName&quot;</span><span class="p">,</span>
        <span class="s2">&quot;properties&quot;</span><span class="p">:</span> <span class="p">{</span>
            <span class="s2">&quot;AppPorts&quot;</span><span class="p">:</span> <span class="s2">&quot;8080&quot;</span><span class="p">,</span>
            <span class="s2">&quot;EgressIgnoredIPs&quot;</span><span class="p">:</span> <span class="s2">&quot;169.254.170.2,169.254.169.254&quot;</span><span class="p">,</span>
            <span class="s2">&quot;IgnoredUID&quot;</span><span class="p">:</span> <span class="s2">&quot;1337&quot;</span><span class="p">,</span>
            <span class="s2">&quot;ProxyEgressPort&quot;</span><span class="p">:</span> <span class="mi">15001</span><span class="p">,</span>
            <span class="s2">&quot;ProxyIngressPort&quot;</span><span class="p">:</span> <span class="mi">15000</span><span class="p">,</span>
        <span class="p">},</span>
    <span class="p">})</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>container_definitions</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – A list of valid [container definitions]
(<a class="reference external" href="http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html">http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html</a>) provided as a
single valid JSON document. Please note that you should only provide values that are part of the container
definition document. For a detailed description of what parameters are available, see the [Task Definition Parameters]
(<a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html</a>) section from the
official <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide">Developer Guide</a>.</p></li>
<li><p><strong>cpu</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The number of cpu units used by the task. If the <code class="docutils literal notranslate"><span class="pre">requires_compatibilities</span></code> is <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code> this field is required.</p></li>
<li><p><strong>execution_role_arn</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.</p></li>
<li><p><strong>family</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – A unique name for your task definition.</p></li>
<li><p><strong>inference_accelerators</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – Configuration block(s) with Inference Accelerators settings. Detailed below.</p></li>
<li><p><strong>ipc_mode</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The IPC resource namespace to be used for the containers in the task The valid values are <code class="docutils literal notranslate"><span class="pre">host</span></code>, <code class="docutils literal notranslate"><span class="pre">task</span></code>, and <code class="docutils literal notranslate"><span class="pre">none</span></code>.</p></li>
<li><p><strong>memory</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The amount (in MiB) of memory used by the task. If the <code class="docutils literal notranslate"><span class="pre">requires_compatibilities</span></code> is <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code> this field is required.</p></li>
<li><p><strong>network_mode</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Docker networking mode to use for the containers in the task. The valid values are <code class="docutils literal notranslate"><span class="pre">none</span></code>, <code class="docutils literal notranslate"><span class="pre">bridge</span></code>, <code class="docutils literal notranslate"><span class="pre">awsvpc</span></code>, and <code class="docutils literal notranslate"><span class="pre">host</span></code>.</p></li>
<li><p><strong>pid_mode</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The process namespace to use for the containers in the task. The valid values are <code class="docutils literal notranslate"><span class="pre">host</span></code> and <code class="docutils literal notranslate"><span class="pre">task</span></code>.</p></li>
<li><p><strong>placement_constraints</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – A set of placement constraints rules that are taken into consideration during task placement. Maximum number of <code class="docutils literal notranslate"><span class="pre">placement_constraints</span></code> is <code class="docutils literal notranslate"><span class="pre">10</span></code>.</p></li>
<li><p><strong>proxy_configuration</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – The proxy configuration details for the App Mesh proxy.</p></li>
<li><p><strong>requires_compatibilities</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – A set of launch types required by the task. The valid values are <code class="docutils literal notranslate"><span class="pre">EC2</span></code> and <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code>.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – Key-value map of resource tags</p></li>
<li><p><strong>task_role_arn</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ARN of IAM role that allows your Amazon ECS container task to make calls to other AWS services.</p></li>
<li><p><strong>volumes</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – A set of volume blocks that containers in your task may use.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>inference_accelerators</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">device_name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Elastic Inference accelerator device name. The deviceName must also be referenced in a container definition as a ResourceRequirement.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">deviceType</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Elastic Inference accelerator type to use.</p></li>
</ul>
<p>The <strong>placement_constraints</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">expression</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Cluster Query Language expression to apply to the constraint.
For more information, see <a class="reference external" href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language in the Amazon EC2 Container
Service Developer
Guide</a>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The proxy type. The default value is <code class="docutils literal notranslate"><span class="pre">APPMESH</span></code>. The only supported value is <code class="docutils literal notranslate"><span class="pre">APPMESH</span></code>.</p></li>
</ul>
<p>The <strong>proxy_configuration</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">container_name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The name of the container that will serve as the App Mesh proxy.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">properties</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[dict]</span></code>) - The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified a key-value mapping.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The proxy type. The default value is <code class="docutils literal notranslate"><span class="pre">APPMESH</span></code>. The only supported value is <code class="docutils literal notranslate"><span class="pre">APPMESH</span></code>.</p></li>
</ul>
<p>The <strong>volumes</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">dockerVolumeConfiguration</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[dict]</span></code>) - Used to configure a docker volume</p>
<ul>
<li><p><code class="docutils literal notranslate"><span class="pre">autoprovision</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[bool]</span></code>) - If this value is <code class="docutils literal notranslate"><span class="pre">true</span></code>, the Docker volume is created if it does not already exist. <em>Note</em>: This field is only used if the scope is <code class="docutils literal notranslate"><span class="pre">shared</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">driver</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">driverOpts</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[dict]</span></code>) - A map of Docker driver specific options.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">labels</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[dict]</span></code>) - A map of custom metadata to add to your Docker volume.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">scope</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The scope for the Docker volume, which determines its lifecycle, either <code class="docutils literal notranslate"><span class="pre">task</span></code> or <code class="docutils literal notranslate"><span class="pre">shared</span></code>.  Docker volumes that are scoped to a <code class="docutils literal notranslate"><span class="pre">task</span></code> are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are <code class="docutils literal notranslate"><span class="pre">scoped</span></code> as shared persist after the task stops.</p></li>
</ul>
</li>
<li><p><code class="docutils literal notranslate"><span class="pre">efsVolumeConfiguration</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[dict]</span></code>) - Used to configure a EFS volume. Can be used only with an EC2 type task.</p>
<ul>
<li><p><code class="docutils literal notranslate"><span class="pre">file_system_id</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The ID of the EFS File System.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">root_directory</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The path to mount on the host</p></li>
</ul>
</li>
<li><p><code class="docutils literal notranslate"><span class="pre">hostPath</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The path on the host container instance that is presented to the container. If not set, ECS will create a nonpersistent data volume that starts empty and is deleted after the task has finished.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The name of the volume. This name is referenced in the <code class="docutils literal notranslate"><span class="pre">sourceVolume</span></code>
parameter of container definition in the <code class="docutils literal notranslate"><span class="pre">mountPoints</span></code> section.</p></li>
</ul>
<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.arn">
<code class="sig-name descname">arn</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.arn" title="Permalink to this definition">¶</a></dt>
<dd><p>Full ARN of the Task Definition (including both <code class="docutils literal notranslate"><span class="pre">family</span></code> and <code class="docutils literal notranslate"><span class="pre">revision</span></code>).</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.container_definitions">
<code class="sig-name descname">container_definitions</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.container_definitions" title="Permalink to this definition">¶</a></dt>
<dd><p>A list of valid [container definitions]
(<a class="reference external" href="http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html">http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html</a>) provided as a
single valid JSON document. Please note that you should only provide values that are part of the container
definition document. For a detailed description of what parameters are available, see the [Task Definition Parameters]
(<a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html</a>) section from the
official <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide">Developer Guide</a>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.cpu">
<code class="sig-name descname">cpu</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.cpu" title="Permalink to this definition">¶</a></dt>
<dd><p>The number of cpu units used by the task. If the <code class="docutils literal notranslate"><span class="pre">requires_compatibilities</span></code> is <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code> this field is required.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.execution_role_arn">
<code class="sig-name descname">execution_role_arn</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.execution_role_arn" title="Permalink to this definition">¶</a></dt>
<dd><p>The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.family">
<code class="sig-name descname">family</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.family" title="Permalink to this definition">¶</a></dt>
<dd><p>A unique name for your task definition.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.inference_accelerators">
<code class="sig-name descname">inference_accelerators</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.inference_accelerators" title="Permalink to this definition">¶</a></dt>
<dd><p>Configuration block(s) with Inference Accelerators settings. Detailed below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">device_name</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The Elastic Inference accelerator device name. The deviceName must also be referenced in a container definition as a ResourceRequirement.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">deviceType</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The Elastic Inference accelerator type to use.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.ipc_mode">
<code class="sig-name descname">ipc_mode</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.ipc_mode" title="Permalink to this definition">¶</a></dt>
<dd><p>The IPC resource namespace to be used for the containers in the task The valid values are <code class="docutils literal notranslate"><span class="pre">host</span></code>, <code class="docutils literal notranslate"><span class="pre">task</span></code>, and <code class="docutils literal notranslate"><span class="pre">none</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.memory">
<code class="sig-name descname">memory</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.memory" title="Permalink to this definition">¶</a></dt>
<dd><p>The amount (in MiB) of memory used by the task. If the <code class="docutils literal notranslate"><span class="pre">requires_compatibilities</span></code> is <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code> this field is required.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.network_mode">
<code class="sig-name descname">network_mode</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.network_mode" title="Permalink to this definition">¶</a></dt>
<dd><p>The Docker networking mode to use for the containers in the task. The valid values are <code class="docutils literal notranslate"><span class="pre">none</span></code>, <code class="docutils literal notranslate"><span class="pre">bridge</span></code>, <code class="docutils literal notranslate"><span class="pre">awsvpc</span></code>, and <code class="docutils literal notranslate"><span class="pre">host</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.pid_mode">
<code class="sig-name descname">pid_mode</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.pid_mode" title="Permalink to this definition">¶</a></dt>
<dd><p>The process namespace to use for the containers in the task. The valid values are <code class="docutils literal notranslate"><span class="pre">host</span></code> and <code class="docutils literal notranslate"><span class="pre">task</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.placement_constraints">
<code class="sig-name descname">placement_constraints</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.placement_constraints" title="Permalink to this definition">¶</a></dt>
<dd><p>A set of placement constraints rules that are taken into consideration during task placement. Maximum number of <code class="docutils literal notranslate"><span class="pre">placement_constraints</span></code> is <code class="docutils literal notranslate"><span class="pre">10</span></code>.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">expression</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Cluster Query Language expression to apply to the constraint.
For more information, see <a class="reference external" href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language in the Amazon EC2 Container
Service Developer
Guide</a>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The proxy type. The default value is <code class="docutils literal notranslate"><span class="pre">APPMESH</span></code>. The only supported value is <code class="docutils literal notranslate"><span class="pre">APPMESH</span></code>.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.proxy_configuration">
<code class="sig-name descname">proxy_configuration</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.proxy_configuration" title="Permalink to this definition">¶</a></dt>
<dd><p>The proxy configuration details for the App Mesh proxy.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">container_name</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The name of the container that will serve as the App Mesh proxy.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">properties</span></code> (<code class="docutils literal notranslate"><span class="pre">dict</span></code>) - The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified a key-value mapping.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The proxy type. The default value is <code class="docutils literal notranslate"><span class="pre">APPMESH</span></code>. The only supported value is <code class="docutils literal notranslate"><span class="pre">APPMESH</span></code>.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.requires_compatibilities">
<code class="sig-name descname">requires_compatibilities</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.requires_compatibilities" title="Permalink to this definition">¶</a></dt>
<dd><p>A set of launch types required by the task. The valid values are <code class="docutils literal notranslate"><span class="pre">EC2</span></code> and <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.revision">
<code class="sig-name descname">revision</code><em class="property">: pulumi.Output[float]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.revision" title="Permalink to this definition">¶</a></dt>
<dd><p>The revision of the task in a particular family.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.tags">
<code class="sig-name descname">tags</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>Key-value map of resource tags</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.task_role_arn">
<code class="sig-name descname">task_role_arn</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.task_role_arn" title="Permalink to this definition">¶</a></dt>
<dd><p>The ARN of IAM role that allows your Amazon ECS container task to make calls to other AWS services.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_aws.ecs.TaskDefinition.volumes">
<code class="sig-name descname">volumes</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.volumes" title="Permalink to this definition">¶</a></dt>
<dd><p>A set of volume blocks that containers in your task may use.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">dockerVolumeConfiguration</span></code> (<code class="docutils literal notranslate"><span class="pre">dict</span></code>) - Used to configure a docker volume</p>
<ul>
<li><p><code class="docutils literal notranslate"><span class="pre">autoprovision</span></code> (<code class="docutils literal notranslate"><span class="pre">bool</span></code>) - If this value is <code class="docutils literal notranslate"><span class="pre">true</span></code>, the Docker volume is created if it does not already exist. <em>Note</em>: This field is only used if the scope is <code class="docutils literal notranslate"><span class="pre">shared</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">driver</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">driverOpts</span></code> (<code class="docutils literal notranslate"><span class="pre">dict</span></code>) - A map of Docker driver specific options.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">labels</span></code> (<code class="docutils literal notranslate"><span class="pre">dict</span></code>) - A map of custom metadata to add to your Docker volume.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">scope</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The scope for the Docker volume, which determines its lifecycle, either <code class="docutils literal notranslate"><span class="pre">task</span></code> or <code class="docutils literal notranslate"><span class="pre">shared</span></code>.  Docker volumes that are scoped to a <code class="docutils literal notranslate"><span class="pre">task</span></code> are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are <code class="docutils literal notranslate"><span class="pre">scoped</span></code> as shared persist after the task stops.</p></li>
</ul>
</li>
<li><p><code class="docutils literal notranslate"><span class="pre">efsVolumeConfiguration</span></code> (<code class="docutils literal notranslate"><span class="pre">dict</span></code>) - Used to configure a EFS volume. Can be used only with an EC2 type task.</p>
<ul>
<li><p><code class="docutils literal notranslate"><span class="pre">file_system_id</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The ID of the EFS File System.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">root_directory</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The path to mount on the host</p></li>
</ul>
</li>
<li><p><code class="docutils literal notranslate"><span class="pre">hostPath</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The path on the host container instance that is presented to the container. If not set, ECS will create a nonpersistent data volume that starts empty and is deleted after the task has finished.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The name of the volume. This name is referenced in the <code class="docutils literal notranslate"><span class="pre">sourceVolume</span></code>
parameter of container definition in the <code class="docutils literal notranslate"><span class="pre">mountPoints</span></code> section.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_aws.ecs.TaskDefinition.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">container_definitions</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">cpu</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">execution_role_arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">family</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">inference_accelerators</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">ipc_mode</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">memory</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">network_mode</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">pid_mode</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">placement_constraints</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">proxy_configuration</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">requires_compatibilities</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">revision</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_role_arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">volumes</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing TaskDefinition resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>arn</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Full ARN of the Task Definition (including both <code class="docutils literal notranslate"><span class="pre">family</span></code> and <code class="docutils literal notranslate"><span class="pre">revision</span></code>).</p></li>
<li><p><strong>container_definitions</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – <p>A list of valid [container definitions]
(<a class="reference external" href="http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html">http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html</a>) provided as a
single valid JSON document. Please note that you should only provide values that are part of the container
definition document. For a detailed description of what parameters are available, see the [Task Definition Parameters]
(<a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html">https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html</a>) section from the
official <a class="reference external" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide">Developer Guide</a>.</p>
</p></li>
<li><p><strong>cpu</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The number of cpu units used by the task. If the <code class="docutils literal notranslate"><span class="pre">requires_compatibilities</span></code> is <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code> this field is required.</p></li>
<li><p><strong>execution_role_arn</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.</p></li>
<li><p><strong>family</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – A unique name for your task definition.</p></li>
<li><p><strong>inference_accelerators</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – Configuration block(s) with Inference Accelerators settings. Detailed below.</p></li>
<li><p><strong>ipc_mode</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The IPC resource namespace to be used for the containers in the task The valid values are <code class="docutils literal notranslate"><span class="pre">host</span></code>, <code class="docutils literal notranslate"><span class="pre">task</span></code>, and <code class="docutils literal notranslate"><span class="pre">none</span></code>.</p></li>
<li><p><strong>memory</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The amount (in MiB) of memory used by the task. If the <code class="docutils literal notranslate"><span class="pre">requires_compatibilities</span></code> is <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code> this field is required.</p></li>
<li><p><strong>network_mode</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Docker networking mode to use for the containers in the task. The valid values are <code class="docutils literal notranslate"><span class="pre">none</span></code>, <code class="docutils literal notranslate"><span class="pre">bridge</span></code>, <code class="docutils literal notranslate"><span class="pre">awsvpc</span></code>, and <code class="docutils literal notranslate"><span class="pre">host</span></code>.</p></li>
<li><p><strong>pid_mode</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The process namespace to use for the containers in the task. The valid values are <code class="docutils literal notranslate"><span class="pre">host</span></code> and <code class="docutils literal notranslate"><span class="pre">task</span></code>.</p></li>
<li><p><strong>placement_constraints</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – A set of placement constraints rules that are taken into consideration during task placement. Maximum number of <code class="docutils literal notranslate"><span class="pre">placement_constraints</span></code> is <code class="docutils literal notranslate"><span class="pre">10</span></code>.</p></li>
<li><p><strong>proxy_configuration</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – The proxy configuration details for the App Mesh proxy.</p></li>
<li><p><strong>requires_compatibilities</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – A set of launch types required by the task. The valid values are <code class="docutils literal notranslate"><span class="pre">EC2</span></code> and <code class="docutils literal notranslate"><span class="pre">FARGATE</span></code>.</p></li>
<li><p><strong>revision</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – The revision of the task in a particular family.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – Key-value map of resource tags</p></li>
<li><p><strong>task_role_arn</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ARN of IAM role that allows your Amazon ECS container task to make calls to other AWS services.</p></li>
<li><p><strong>volumes</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – A set of volume blocks that containers in your task may use.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>inference_accelerators</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">device_name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Elastic Inference accelerator device name. The deviceName must also be referenced in a container definition as a ResourceRequirement.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">deviceType</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Elastic Inference accelerator type to use.</p></li>
</ul>
<p>The <strong>placement_constraints</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">expression</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Cluster Query Language expression to apply to the constraint.
For more information, see <a class="reference external" href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language in the Amazon EC2 Container
Service Developer
Guide</a>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The proxy type. The default value is <code class="docutils literal notranslate"><span class="pre">APPMESH</span></code>. The only supported value is <code class="docutils literal notranslate"><span class="pre">APPMESH</span></code>.</p></li>
</ul>
<p>The <strong>proxy_configuration</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">container_name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The name of the container that will serve as the App Mesh proxy.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">properties</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[dict]</span></code>) - The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified a key-value mapping.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The proxy type. The default value is <code class="docutils literal notranslate"><span class="pre">APPMESH</span></code>. The only supported value is <code class="docutils literal notranslate"><span class="pre">APPMESH</span></code>.</p></li>
</ul>
<p>The <strong>volumes</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">dockerVolumeConfiguration</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[dict]</span></code>) - Used to configure a docker volume</p>
<ul>
<li><p><code class="docutils literal notranslate"><span class="pre">autoprovision</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[bool]</span></code>) - If this value is <code class="docutils literal notranslate"><span class="pre">true</span></code>, the Docker volume is created if it does not already exist. <em>Note</em>: This field is only used if the scope is <code class="docutils literal notranslate"><span class="pre">shared</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">driver</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">driverOpts</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[dict]</span></code>) - A map of Docker driver specific options.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">labels</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[dict]</span></code>) - A map of custom metadata to add to your Docker volume.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">scope</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The scope for the Docker volume, which determines its lifecycle, either <code class="docutils literal notranslate"><span class="pre">task</span></code> or <code class="docutils literal notranslate"><span class="pre">shared</span></code>.  Docker volumes that are scoped to a <code class="docutils literal notranslate"><span class="pre">task</span></code> are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are <code class="docutils literal notranslate"><span class="pre">scoped</span></code> as shared persist after the task stops.</p></li>
</ul>
</li>
<li><p><code class="docutils literal notranslate"><span class="pre">efsVolumeConfiguration</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[dict]</span></code>) - Used to configure a EFS volume. Can be used only with an EC2 type task.</p>
<ul>
<li><p><code class="docutils literal notranslate"><span class="pre">file_system_id</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The ID of the EFS File System.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">root_directory</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The path to mount on the host</p></li>
</ul>
</li>
<li><p><code class="docutils literal notranslate"><span class="pre">hostPath</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The path on the host container instance that is presented to the container. If not set, ECS will create a nonpersistent data volume that starts empty and is deleted after the task has finished.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The name of the volume. This name is referenced in the <code class="docutils literal notranslate"><span class="pre">sourceVolume</span></code>
parameter of container definition in the <code class="docutils literal notranslate"><span class="pre">mountPoints</span></code> section.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_aws.ecs.TaskDefinition.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.translate_output_property" title="Permalink to this definition">¶</a></dt>
<dd><p>Provides subclasses of Resource an opportunity to translate names of output properties
into a format of their choosing before writing those properties to the resource object.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><p><strong>prop</strong> (<em>str</em>) – A property name.</p>
</dd>
<dt class="field-even">Returns</dt>
<dd class="field-even"><p>A potentially transformed property name.</p>
</dd>
<dt class="field-odd">Return type</dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>

<dl class="py method">
<dt id="pulumi_aws.ecs.TaskDefinition.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.TaskDefinition.translate_input_property" title="Permalink to this definition">¶</a></dt>
<dd><p>Provides subclasses of Resource an opportunity to translate names of input properties into
a format of their choosing before sending those properties to the Pulumi engine.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><p><strong>prop</strong> (<em>str</em>) – A property name.</p>
</dd>
<dt class="field-even">Returns</dt>
<dd class="field-even"><p>A potentially transformed property name.</p>
</dd>
<dt class="field-odd">Return type</dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>

</dd></dl>

<dl class="py function">
<dt id="pulumi_aws.ecs.get_cluster">
<code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">get_cluster</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">cluster_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.get_cluster" title="Permalink to this definition">¶</a></dt>
<dd><p>The ECS Cluster data source allows access to details of a specific
cluster within an AWS ECS service.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_aws</span> <span class="k">as</span> <span class="nn">aws</span>

<span class="n">ecs_mongo</span> <span class="o">=</span> <span class="n">aws</span><span class="o">.</span><span class="n">ecs</span><span class="o">.</span><span class="n">get_cluster</span><span class="p">(</span><span class="n">cluster_name</span><span class="o">=</span><span class="s2">&quot;ecs-mongo-production&quot;</span><span class="p">)</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><p><strong>cluster_name</strong> (<em>str</em>) – The name of the ECS Cluster</p>
</dd>
</dl>
</dd></dl>

<dl class="py function">
<dt id="pulumi_aws.ecs.get_container_definition">
<code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">get_container_definition</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">container_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_definition</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.get_container_definition" title="Permalink to this definition">¶</a></dt>
<dd><p>The ECS container definition data source allows access to details of
a specific container within an AWS ECS service.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_aws</span> <span class="k">as</span> <span class="nn">aws</span>

<span class="n">ecs_mongo</span> <span class="o">=</span> <span class="n">aws</span><span class="o">.</span><span class="n">ecs</span><span class="o">.</span><span class="n">get_container_definition</span><span class="p">(</span><span class="n">container_name</span><span class="o">=</span><span class="s2">&quot;mongodb&quot;</span><span class="p">,</span>
    <span class="n">task_definition</span><span class="o">=</span><span class="n">aws_ecs_task_definition</span><span class="p">[</span><span class="s2">&quot;mongo&quot;</span><span class="p">][</span><span class="s2">&quot;id&quot;</span><span class="p">])</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>container_name</strong> (<em>str</em>) – The name of the container definition</p></li>
<li><p><strong>task_definition</strong> (<em>str</em>) – The ARN of the task definition which contains the container</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<dl class="py function">
<dt id="pulumi_aws.ecs.get_service">
<code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">get_service</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">cluster_arn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">service_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.get_service" title="Permalink to this definition">¶</a></dt>
<dd><p>The ECS Service data source allows access to details of a specific
Service within a AWS ECS Cluster.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_aws</span> <span class="k">as</span> <span class="nn">aws</span>

<span class="n">example</span> <span class="o">=</span> <span class="n">aws</span><span class="o">.</span><span class="n">ecs</span><span class="o">.</span><span class="n">get_service</span><span class="p">(</span><span class="n">cluster_arn</span><span class="o">=</span><span class="n">data</span><span class="p">[</span><span class="s2">&quot;aws_ecs_cluster&quot;</span><span class="p">][</span><span class="s2">&quot;example&quot;</span><span class="p">][</span><span class="s2">&quot;arn&quot;</span><span class="p">],</span>
    <span class="n">service_name</span><span class="o">=</span><span class="s2">&quot;example&quot;</span><span class="p">)</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>cluster_arn</strong> (<em>str</em>) – The arn of the ECS Cluster</p></li>
<li><p><strong>service_name</strong> (<em>str</em>) – The name of the ECS Service</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<dl class="py function">
<dt id="pulumi_aws.ecs.get_task_definition">
<code class="sig-prename descclassname">pulumi_aws.ecs.</code><code class="sig-name descname">get_task_definition</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">task_definition</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_aws.ecs.get_task_definition" title="Permalink to this definition">¶</a></dt>
<dd><p>The ECS task definition data source allows access to details of
a specific AWS ECS task definition.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><p><strong>task_definition</strong> (<em>str</em>) – The family for the latest ACTIVE revision, family and revision (family:revision) for a specific revision in the family, the ARN of the task definition to access to.</p>
</dd>
</dl>
</dd></dl>

</div>
