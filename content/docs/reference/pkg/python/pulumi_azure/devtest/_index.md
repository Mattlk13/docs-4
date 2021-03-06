---
title: Module devtest
title_tag: Module devtest | Package pulumi_azure | Python SDK
linktitle: devtest
notitle: true
block_external_search_index: true
---

{{< resource-docs-alert "azure" >}}

<div class="section" id="devtest">
<h1>devtest<a class="headerlink" href="#devtest" title="Permalink to this headline">¶</a></h1>
<blockquote>
<div><p>This provider is a derived work of the <a class="reference external" href="https://github.com/terraform-providers/terraform-provider-azurerm">Terraform Provider</a> distributed under
<a class="reference external" href="https://www.mozilla.org/en-US/MPL/2.0/">MPL 2.0</a>. If you encounter a bug or missing feature, first check the
<a class="reference external" href="https://github.com/pulumi/pulumi-azure/issues">pulumi/pulumi-azure repo</a>; however, if that doesn’t turn up
anything, please consult the source <a class="reference external" href="https://github.com/terraform-providers/terraform-provider-azurerm/issues">terraform-providers/terraform-provider-azurerm repo</a>.</p>
</div></blockquote>
<span class="target" id="module-pulumi_azure.devtest"></span><dl class="py class">
<dt id="pulumi_azure.devtest.AwaitableGetLabResult">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">AwaitableGetLabResult</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">artifacts_storage_account_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">default_premium_storage_account_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">default_storage_account_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">key_vault_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">premium_data_disk_storage_account_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">storage_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">unique_identifier</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.AwaitableGetLabResult" title="Permalink to this definition">¶</a></dt>
<dd></dd></dl>

<dl class="py class">
<dt id="pulumi_azure.devtest.AwaitableGetVirtualNetworkResult">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">AwaitableGetVirtualNetworkResult</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">allowed_subnets</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">subnet_overrides</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">unique_identifier</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.AwaitableGetVirtualNetworkResult" title="Permalink to this definition">¶</a></dt>
<dd></dd></dl>

<dl class="py class">
<dt id="pulumi_azure.devtest.GetLabResult">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">GetLabResult</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">artifacts_storage_account_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">default_premium_storage_account_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">default_storage_account_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">key_vault_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">premium_data_disk_storage_account_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">storage_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">unique_identifier</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.GetLabResult" title="Permalink to this definition">¶</a></dt>
<dd><p>A collection of values returned by getLab.</p>
<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetLabResult.artifacts_storage_account_id">
<code class="sig-name descname">artifacts_storage_account_id</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetLabResult.artifacts_storage_account_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the Storage Account used for Artifact Storage.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetLabResult.default_premium_storage_account_id">
<code class="sig-name descname">default_premium_storage_account_id</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetLabResult.default_premium_storage_account_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the Default Premium Storage Account for this Dev Test Lab.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetLabResult.default_storage_account_id">
<code class="sig-name descname">default_storage_account_id</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetLabResult.default_storage_account_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the Default Storage Account for this Dev Test Lab.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetLabResult.id">
<code class="sig-name descname">id</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetLabResult.id" title="Permalink to this definition">¶</a></dt>
<dd><p>The provider-assigned unique ID for this managed resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetLabResult.key_vault_id">
<code class="sig-name descname">key_vault_id</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetLabResult.key_vault_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the Key used for this Dev Test Lab.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetLabResult.location">
<code class="sig-name descname">location</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetLabResult.location" title="Permalink to this definition">¶</a></dt>
<dd><p>The Azure location where the Dev Test Lab exists.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetLabResult.premium_data_disk_storage_account_id">
<code class="sig-name descname">premium_data_disk_storage_account_id</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetLabResult.premium_data_disk_storage_account_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the Storage Account used for Storage of Premium Data Disk.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetLabResult.storage_type">
<code class="sig-name descname">storage_type</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetLabResult.storage_type" title="Permalink to this definition">¶</a></dt>
<dd><p>The type of storage used by the Dev Test Lab.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetLabResult.tags">
<code class="sig-name descname">tags</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetLabResult.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>A mapping of tags to assign to the resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetLabResult.unique_identifier">
<code class="sig-name descname">unique_identifier</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetLabResult.unique_identifier" title="Permalink to this definition">¶</a></dt>
<dd><p>The unique immutable identifier of the Dev Test Lab.</p>
</dd></dl>

</dd></dl>

<dl class="py class">
<dt id="pulumi_azure.devtest.GetVirtualNetworkResult">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">GetVirtualNetworkResult</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">allowed_subnets</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">subnet_overrides</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">unique_identifier</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.GetVirtualNetworkResult" title="Permalink to this definition">¶</a></dt>
<dd><p>A collection of values returned by getVirtualNetwork.</p>
<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetVirtualNetworkResult.allowed_subnets">
<code class="sig-name descname">allowed_subnets</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetVirtualNetworkResult.allowed_subnets" title="Permalink to this definition">¶</a></dt>
<dd><p>The list of subnets enabled for the virtual network as defined below.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetVirtualNetworkResult.id">
<code class="sig-name descname">id</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetVirtualNetworkResult.id" title="Permalink to this definition">¶</a></dt>
<dd><p>The provider-assigned unique ID for this managed resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetVirtualNetworkResult.subnet_overrides">
<code class="sig-name descname">subnet_overrides</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetVirtualNetworkResult.subnet_overrides" title="Permalink to this definition">¶</a></dt>
<dd><p>The list of permission overrides for the subnets as defined below.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GetVirtualNetworkResult.unique_identifier">
<code class="sig-name descname">unique_identifier</code><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GetVirtualNetworkResult.unique_identifier" title="Permalink to this definition">¶</a></dt>
<dd><p>The unique immutable identifier of the virtual network.</p>
</dd></dl>

</dd></dl>

<dl class="py class">
<dt id="pulumi_azure.devtest.GlobalVMShutdownSchedule">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">GlobalVMShutdownSchedule</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">daily_recurrence_time</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">enabled</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">notification_settings</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">timezone</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">virtual_machine_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.GlobalVMShutdownSchedule" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages automated shutdown schedules for Azure VMs that are not within an Azure DevTest Lab. While this is part of the DevTest Labs service in Azure,
this resource applies only to standard VMs, not DevTest Lab VMs. To manage automated shutdown schedules for DevTest Lab VMs, reference the
<code class="docutils literal notranslate"><span class="pre">devtest.Schedule</span></code> resource</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example_resource_group</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">core</span><span class="o">.</span><span class="n">ResourceGroup</span><span class="p">(</span><span class="s2">&quot;exampleResourceGroup&quot;</span><span class="p">,</span> <span class="n">location</span><span class="o">=</span><span class="s2">&quot;eastus&quot;</span><span class="p">)</span>
<span class="n">example_virtual_network</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">network</span><span class="o">.</span><span class="n">VirtualNetwork</span><span class="p">(</span><span class="s2">&quot;exampleVirtualNetwork&quot;</span><span class="p">,</span>
    <span class="n">address_spaces</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;10.0.0.0/16&quot;</span><span class="p">],</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">)</span>
<span class="n">example_subnet</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">network</span><span class="o">.</span><span class="n">Subnet</span><span class="p">(</span><span class="s2">&quot;exampleSubnet&quot;</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">virtual_network_name</span><span class="o">=</span><span class="n">example_virtual_network</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">address_prefix</span><span class="o">=</span><span class="s2">&quot;10.0.2.0/24&quot;</span><span class="p">)</span>
<span class="n">example_network_interface</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">network</span><span class="o">.</span><span class="n">NetworkInterface</span><span class="p">(</span><span class="s2">&quot;exampleNetworkInterface&quot;</span><span class="p">,</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">ip_configuration</span><span class="o">=</span><span class="p">[{</span>
        <span class="s2">&quot;name&quot;</span><span class="p">:</span> <span class="s2">&quot;testconfiguration1&quot;</span><span class="p">,</span>
        <span class="s2">&quot;subnet_id&quot;</span><span class="p">:</span> <span class="n">example_subnet</span><span class="o">.</span><span class="n">id</span><span class="p">,</span>
        <span class="s2">&quot;privateIpAddressAllocation&quot;</span><span class="p">:</span> <span class="s2">&quot;Dynamic&quot;</span><span class="p">,</span>
    <span class="p">}])</span>
<span class="n">example_linux_virtual_machine</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">compute</span><span class="o">.</span><span class="n">LinuxVirtualMachine</span><span class="p">(</span><span class="s2">&quot;exampleLinuxVirtualMachine&quot;</span><span class="p">,</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">network_interface_ids</span><span class="o">=</span><span class="p">[</span><span class="n">example_network_interface</span><span class="o">.</span><span class="n">id</span><span class="p">],</span>
    <span class="n">size</span><span class="o">=</span><span class="s2">&quot;Standard_B2s&quot;</span><span class="p">,</span>
    <span class="n">source_image_reference</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;publisher&quot;</span><span class="p">:</span> <span class="s2">&quot;Canonical&quot;</span><span class="p">,</span>
        <span class="s2">&quot;offer&quot;</span><span class="p">:</span> <span class="s2">&quot;UbuntuServer&quot;</span><span class="p">,</span>
        <span class="s2">&quot;sku&quot;</span><span class="p">:</span> <span class="s2">&quot;16.04-LTS&quot;</span><span class="p">,</span>
        <span class="s2">&quot;version&quot;</span><span class="p">:</span> <span class="s2">&quot;latest&quot;</span><span class="p">,</span>
    <span class="p">},</span>
    <span class="n">os_disk</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;name&quot;</span><span class="p">:</span> <span class="s2">&quot;myosdisk-</span><span class="si">%d</span><span class="s2">&quot;</span><span class="p">,</span>
        <span class="s2">&quot;caching&quot;</span><span class="p">:</span> <span class="s2">&quot;ReadWrite&quot;</span><span class="p">,</span>
        <span class="s2">&quot;managedDiskType&quot;</span><span class="p">:</span> <span class="s2">&quot;Standard_LRS&quot;</span><span class="p">,</span>
    <span class="p">},</span>
    <span class="n">admin_username</span><span class="o">=</span><span class="s2">&quot;testadmin&quot;</span><span class="p">,</span>
    <span class="n">admin_password</span><span class="o">=</span><span class="s2">&quot;Password1234!&quot;</span><span class="p">,</span>
    <span class="n">disable_password_authentication</span><span class="o">=</span><span class="kc">False</span><span class="p">)</span>
<span class="n">example_global_vm_shutdown_schedule</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">devtest</span><span class="o">.</span><span class="n">GlobalVMShutdownSchedule</span><span class="p">(</span><span class="s2">&quot;exampleGlobalVMShutdownSchedule&quot;</span><span class="p">,</span>
    <span class="n">virtual_machine_id</span><span class="o">=</span><span class="n">azurerm_virtual_machine</span><span class="p">[</span><span class="s2">&quot;example&quot;</span><span class="p">][</span><span class="s2">&quot;id&quot;</span><span class="p">],</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">enabled</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span>
    <span class="n">daily_recurrence_time</span><span class="o">=</span><span class="s2">&quot;1100&quot;</span><span class="p">,</span>
    <span class="n">time_zone</span><span class="o">=</span><span class="s2">&quot;Pacific Standard Time&quot;</span><span class="p">,</span>
    <span class="n">notification_settings</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;enabled&quot;</span><span class="p">:</span> <span class="kc">True</span><span class="p">,</span>
        <span class="s2">&quot;timeInMinutes&quot;</span><span class="p">:</span> <span class="s2">&quot;60&quot;</span><span class="p">,</span>
        <span class="s2">&quot;webhookUrl&quot;</span><span class="p">:</span> <span class="s2">&quot;https://sample-webhook-url.example.com&quot;</span><span class="p">,</span>
    <span class="p">})</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>daily_recurrence_time</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The time each day when the schedule takes effect. Must match the format HHmm where HH is 00-23 and mm is 00-59 (e.g. 0930, 2300, etc.)</p></li>
<li><p><strong>enabled</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Whether to enable the schedule. Possible values are <code class="docutils literal notranslate"><span class="pre">true</span></code> and <code class="docutils literal notranslate"><span class="pre">false</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p></li>
<li><p><strong>location</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The location where the schedule is created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>timezone</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The time zone ID (e.g. Pacific Standard time). Refer to this guide for a <a class="reference external" href="https://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/">full list of accepted time zone names</a>.</p></li>
<li><p><strong>virtual_machine_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The resource ID of the target ARM-based Virtual Machine. Changing this forces a new resource to be created.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>notification_settings</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">enabled</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[bool]</span></code>) - Whether to enable pre-shutdown notifications. Possible values are <code class="docutils literal notranslate"><span class="pre">true</span></code> and <code class="docutils literal notranslate"><span class="pre">false</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">false</span></code></p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">timeInMinutes</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - Time in minutes between 15 and 120 before a shutdown event at which a notification will be sent. Defaults to <code class="docutils literal notranslate"><span class="pre">30</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">webhookUrl</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The webhook URL to which the notification will be sent. Required if <code class="docutils literal notranslate"><span class="pre">enabled</span></code> is <code class="docutils literal notranslate"><span class="pre">true</span></code>. Optional otherwise.</p></li>
</ul>
<dl class="py attribute">
<dt id="pulumi_azure.devtest.GlobalVMShutdownSchedule.daily_recurrence_time">
<code class="sig-name descname">daily_recurrence_time</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GlobalVMShutdownSchedule.daily_recurrence_time" title="Permalink to this definition">¶</a></dt>
<dd><p>The time each day when the schedule takes effect. Must match the format HHmm where HH is 00-23 and mm is 00-59 (e.g. 0930, 2300, etc.)</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GlobalVMShutdownSchedule.enabled">
<code class="sig-name descname">enabled</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GlobalVMShutdownSchedule.enabled" title="Permalink to this definition">¶</a></dt>
<dd><p>Whether to enable the schedule. Possible values are <code class="docutils literal notranslate"><span class="pre">true</span></code> and <code class="docutils literal notranslate"><span class="pre">false</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GlobalVMShutdownSchedule.location">
<code class="sig-name descname">location</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GlobalVMShutdownSchedule.location" title="Permalink to this definition">¶</a></dt>
<dd><p>The location where the schedule is created. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GlobalVMShutdownSchedule.tags">
<code class="sig-name descname">tags</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GlobalVMShutdownSchedule.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>A mapping of tags to assign to the resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GlobalVMShutdownSchedule.timezone">
<code class="sig-name descname">timezone</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GlobalVMShutdownSchedule.timezone" title="Permalink to this definition">¶</a></dt>
<dd><p>The time zone ID (e.g. Pacific Standard time). Refer to this guide for a <a class="reference external" href="https://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/">full list of accepted time zone names</a>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.GlobalVMShutdownSchedule.virtual_machine_id">
<code class="sig-name descname">virtual_machine_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.GlobalVMShutdownSchedule.virtual_machine_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The resource ID of the target ARM-based Virtual Machine. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.GlobalVMShutdownSchedule.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">daily_recurrence_time</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">enabled</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">notification_settings</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">timezone</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">virtual_machine_id</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.GlobalVMShutdownSchedule.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing GlobalVMShutdownSchedule resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>daily_recurrence_time</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The time each day when the schedule takes effect. Must match the format HHmm where HH is 00-23 and mm is 00-59 (e.g. 0930, 2300, etc.)</p></li>
<li><p><strong>enabled</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Whether to enable the schedule. Possible values are <code class="docutils literal notranslate"><span class="pre">true</span></code> and <code class="docutils literal notranslate"><span class="pre">false</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p></li>
<li><p><strong>location</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The location where the schedule is created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>timezone</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – <p>The time zone ID (e.g. Pacific Standard time). Refer to this guide for a <a class="reference external" href="https://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/">full list of accepted time zone names</a>.</p>
</p></li>
<li><p><strong>virtual_machine_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The resource ID of the target ARM-based Virtual Machine. Changing this forces a new resource to be created.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>notification_settings</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">enabled</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[bool]</span></code>) - Whether to enable pre-shutdown notifications. Possible values are <code class="docutils literal notranslate"><span class="pre">true</span></code> and <code class="docutils literal notranslate"><span class="pre">false</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">false</span></code></p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">timeInMinutes</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - Time in minutes between 15 and 120 before a shutdown event at which a notification will be sent. Defaults to <code class="docutils literal notranslate"><span class="pre">30</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">webhookUrl</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The webhook URL to which the notification will be sent. Required if <code class="docutils literal notranslate"><span class="pre">enabled</span></code> is <code class="docutils literal notranslate"><span class="pre">true</span></code>. Optional otherwise.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.GlobalVMShutdownSchedule.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.GlobalVMShutdownSchedule.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.GlobalVMShutdownSchedule.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.GlobalVMShutdownSchedule.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.Lab">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">Lab</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">storage_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.Lab" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a Dev Test Lab.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example_resource_group</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">core</span><span class="o">.</span><span class="n">ResourceGroup</span><span class="p">(</span><span class="s2">&quot;exampleResourceGroup&quot;</span><span class="p">,</span> <span class="n">location</span><span class="o">=</span><span class="s2">&quot;West US&quot;</span><span class="p">)</span>
<span class="n">example_lab</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">devtest</span><span class="o">.</span><span class="n">Lab</span><span class="p">(</span><span class="s2">&quot;exampleLab&quot;</span><span class="p">,</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">tags</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;Sydney&quot;</span><span class="p">:</span> <span class="s2">&quot;Australia&quot;</span><span class="p">,</span>
    <span class="p">})</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>location</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the supported Azure location where the Dev Test Lab should exist. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Lab. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group under which the Dev Test Lab resource has to be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>storage_type</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The type of storage used by the Dev Test Lab. Possible values are <code class="docutils literal notranslate"><span class="pre">Standard</span></code> and <code class="docutils literal notranslate"><span class="pre">Premium</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">Premium</span></code>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
</ul>
</dd>
</dl>
<dl class="py attribute">
<dt id="pulumi_azure.devtest.Lab.artifacts_storage_account_id">
<code class="sig-name descname">artifacts_storage_account_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Lab.artifacts_storage_account_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the Storage Account used for Artifact Storage.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Lab.default_premium_storage_account_id">
<code class="sig-name descname">default_premium_storage_account_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Lab.default_premium_storage_account_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the Default Premium Storage Account for this Dev Test Lab.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Lab.default_storage_account_id">
<code class="sig-name descname">default_storage_account_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Lab.default_storage_account_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the Default Storage Account for this Dev Test Lab.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Lab.key_vault_id">
<code class="sig-name descname">key_vault_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Lab.key_vault_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the Key used for this Dev Test Lab.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Lab.location">
<code class="sig-name descname">location</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Lab.location" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the supported Azure location where the Dev Test Lab should exist. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Lab.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Lab.name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the Dev Test Lab. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Lab.premium_data_disk_storage_account_id">
<code class="sig-name descname">premium_data_disk_storage_account_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Lab.premium_data_disk_storage_account_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the Storage Account used for Storage of Premium Data Disk.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Lab.resource_group_name">
<code class="sig-name descname">resource_group_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Lab.resource_group_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the resource group under which the Dev Test Lab resource has to be created. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Lab.storage_type">
<code class="sig-name descname">storage_type</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Lab.storage_type" title="Permalink to this definition">¶</a></dt>
<dd><p>The type of storage used by the Dev Test Lab. Possible values are <code class="docutils literal notranslate"><span class="pre">Standard</span></code> and <code class="docutils literal notranslate"><span class="pre">Premium</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">Premium</span></code>. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Lab.tags">
<code class="sig-name descname">tags</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Lab.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>A mapping of tags to assign to the resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Lab.unique_identifier">
<code class="sig-name descname">unique_identifier</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Lab.unique_identifier" title="Permalink to this definition">¶</a></dt>
<dd><p>The unique immutable identifier of the Dev Test Lab.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.Lab.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">artifacts_storage_account_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">default_premium_storage_account_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">default_storage_account_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">key_vault_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">premium_data_disk_storage_account_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">storage_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">unique_identifier</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.Lab.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing Lab resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>artifacts_storage_account_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID of the Storage Account used for Artifact Storage.</p></li>
<li><p><strong>default_premium_storage_account_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID of the Default Premium Storage Account for this Dev Test Lab.</p></li>
<li><p><strong>default_storage_account_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID of the Default Storage Account for this Dev Test Lab.</p></li>
<li><p><strong>key_vault_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID of the Key used for this Dev Test Lab.</p></li>
<li><p><strong>location</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the supported Azure location where the Dev Test Lab should exist. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Lab. Changing this forces a new resource to be created.</p></li>
<li><p><strong>premium_data_disk_storage_account_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID of the Storage Account used for Storage of Premium Data Disk.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group under which the Dev Test Lab resource has to be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>storage_type</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The type of storage used by the Dev Test Lab. Possible values are <code class="docutils literal notranslate"><span class="pre">Standard</span></code> and <code class="docutils literal notranslate"><span class="pre">Premium</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">Premium</span></code>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>unique_identifier</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The unique immutable identifier of the Dev Test Lab.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.Lab.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.Lab.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.Lab.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.Lab.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.LinuxVirtualMachine">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">LinuxVirtualMachine</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">allow_claim</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">disallow_public_ip_address</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">gallery_image_reference</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">inbound_nat_rules</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_subnet_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_virtual_network_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">notes</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">password</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">size</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">ssh_key</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">storage_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">username</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a Linux Virtual Machine within a Dev Test Lab.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>allow_claim</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Can this Virtual Machine be claimed by users? Defaults to <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p></li>
<li><p><strong>disallow_public_ip_address</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.</p></li>
<li><p><strong>gallery_image_reference</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A <code class="docutils literal notranslate"><span class="pre">gallery_image_reference</span></code> block as defined below.</p></li>
<li><p><strong>inbound_nat_rules</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – One or more <code class="docutils literal notranslate"><span class="pre">inbound_nat_rule</span></code> blocks as defined below. Changing this forces a new resource to be created.</p></li>
<li><p><strong>lab_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>lab_subnet_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.</p></li>
<li><p><strong>lab_virtual_network_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>location</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.</p></li>
<li><p><strong>notes</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Any notes about the Virtual Machine.</p></li>
<li><p><strong>password</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Password associated with the <code class="docutils literal notranslate"><span class="pre">username</span></code> used to login to this Virtual Machine. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>size</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Machine Size to use for this Virtual Machine, such as <code class="docutils literal notranslate"><span class="pre">Standard_F2</span></code>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>ssh_key</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The SSH Key associated with the <code class="docutils literal notranslate"><span class="pre">username</span></code> used to login to this Virtual Machine. Changing this forces a new resource to be created.</p></li>
<li><p><strong>storage_type</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The type of Storage to use on this Virtual Machine. Possible values are <code class="docutils literal notranslate"><span class="pre">Standard</span></code> and <code class="docutils literal notranslate"><span class="pre">Premium</span></code>.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>username</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>gallery_image_reference</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">offer</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Offer of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">publisher</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Publisher of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">sku</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The SKU of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">version</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Version of the Gallery Image. Changing this forces a new resource to be created.</p></li>
</ul>
<p>The <strong>inbound_nat_rules</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">backend_port</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The Backend Port associated with this NAT Rule. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">frontend_port</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The frontend port associated with this Inbound NAT Rule.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">protocol</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Protocol used for this NAT Rule. Possible values are <code class="docutils literal notranslate"><span class="pre">Tcp</span></code> and <code class="docutils literal notranslate"><span class="pre">Udp</span></code>. Changing this forces a new resource to be created.</p></li>
</ul>
<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.allow_claim">
<code class="sig-name descname">allow_claim</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.allow_claim" title="Permalink to this definition">¶</a></dt>
<dd><p>Can this Virtual Machine be claimed by users? Defaults to <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.disallow_public_ip_address">
<code class="sig-name descname">disallow_public_ip_address</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.disallow_public_ip_address" title="Permalink to this definition">¶</a></dt>
<dd><p>Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.fqdn">
<code class="sig-name descname">fqdn</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.fqdn" title="Permalink to this definition">¶</a></dt>
<dd><p>The FQDN of the Virtual Machine.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.gallery_image_reference">
<code class="sig-name descname">gallery_image_reference</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.gallery_image_reference" title="Permalink to this definition">¶</a></dt>
<dd><p>A <code class="docutils literal notranslate"><span class="pre">gallery_image_reference</span></code> block as defined below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">offer</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The Offer of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">publisher</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The Publisher of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">sku</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The SKU of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">version</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The Version of the Gallery Image. Changing this forces a new resource to be created.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.inbound_nat_rules">
<code class="sig-name descname">inbound_nat_rules</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.inbound_nat_rules" title="Permalink to this definition">¶</a></dt>
<dd><p>One or more <code class="docutils literal notranslate"><span class="pre">inbound_nat_rule</span></code> blocks as defined below. Changing this forces a new resource to be created.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">backend_port</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The Backend Port associated with this NAT Rule. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">frontend_port</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The frontend port associated with this Inbound NAT Rule.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">protocol</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The Protocol used for this NAT Rule. Possible values are <code class="docutils literal notranslate"><span class="pre">Tcp</span></code> and <code class="docutils literal notranslate"><span class="pre">Udp</span></code>. Changing this forces a new resource to be created.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.lab_name">
<code class="sig-name descname">lab_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.lab_name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.lab_subnet_name">
<code class="sig-name descname">lab_subnet_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.lab_subnet_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.lab_virtual_network_id">
<code class="sig-name descname">lab_virtual_network_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.lab_virtual_network_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.location">
<code class="sig-name descname">location</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.location" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.notes">
<code class="sig-name descname">notes</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.notes" title="Permalink to this definition">¶</a></dt>
<dd><p>Any notes about the Virtual Machine.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.password">
<code class="sig-name descname">password</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.password" title="Permalink to this definition">¶</a></dt>
<dd><p>The Password associated with the <code class="docutils literal notranslate"><span class="pre">username</span></code> used to login to this Virtual Machine. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.resource_group_name">
<code class="sig-name descname">resource_group_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.resource_group_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.size">
<code class="sig-name descname">size</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.size" title="Permalink to this definition">¶</a></dt>
<dd><p>The Machine Size to use for this Virtual Machine, such as <code class="docutils literal notranslate"><span class="pre">Standard_F2</span></code>. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.ssh_key">
<code class="sig-name descname">ssh_key</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.ssh_key" title="Permalink to this definition">¶</a></dt>
<dd><p>The SSH Key associated with the <code class="docutils literal notranslate"><span class="pre">username</span></code> used to login to this Virtual Machine. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.storage_type">
<code class="sig-name descname">storage_type</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.storage_type" title="Permalink to this definition">¶</a></dt>
<dd><p>The type of Storage to use on this Virtual Machine. Possible values are <code class="docutils literal notranslate"><span class="pre">Standard</span></code> and <code class="docutils literal notranslate"><span class="pre">Premium</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.tags">
<code class="sig-name descname">tags</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>A mapping of tags to assign to the resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.unique_identifier">
<code class="sig-name descname">unique_identifier</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.unique_identifier" title="Permalink to this definition">¶</a></dt>
<dd><p>The unique immutable identifier of the Virtual Machine.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.username">
<code class="sig-name descname">username</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.username" title="Permalink to this definition">¶</a></dt>
<dd><p>The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">allow_claim</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">disallow_public_ip_address</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">fqdn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">gallery_image_reference</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">inbound_nat_rules</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_subnet_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_virtual_network_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">notes</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">password</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">size</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">ssh_key</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">storage_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">unique_identifier</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">username</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing LinuxVirtualMachine resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>allow_claim</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Can this Virtual Machine be claimed by users? Defaults to <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p></li>
<li><p><strong>disallow_public_ip_address</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.</p></li>
<li><p><strong>fqdn</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The FQDN of the Virtual Machine.</p></li>
<li><p><strong>gallery_image_reference</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A <code class="docutils literal notranslate"><span class="pre">gallery_image_reference</span></code> block as defined below.</p></li>
<li><p><strong>inbound_nat_rules</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – One or more <code class="docutils literal notranslate"><span class="pre">inbound_nat_rule</span></code> blocks as defined below. Changing this forces a new resource to be created.</p></li>
<li><p><strong>lab_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>lab_subnet_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.</p></li>
<li><p><strong>lab_virtual_network_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>location</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.</p></li>
<li><p><strong>notes</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Any notes about the Virtual Machine.</p></li>
<li><p><strong>password</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Password associated with the <code class="docutils literal notranslate"><span class="pre">username</span></code> used to login to this Virtual Machine. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>size</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Machine Size to use for this Virtual Machine, such as <code class="docutils literal notranslate"><span class="pre">Standard_F2</span></code>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>ssh_key</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The SSH Key associated with the <code class="docutils literal notranslate"><span class="pre">username</span></code> used to login to this Virtual Machine. Changing this forces a new resource to be created.</p></li>
<li><p><strong>storage_type</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The type of Storage to use on this Virtual Machine. Possible values are <code class="docutils literal notranslate"><span class="pre">Standard</span></code> and <code class="docutils literal notranslate"><span class="pre">Premium</span></code>.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>unique_identifier</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The unique immutable identifier of the Virtual Machine.</p></li>
<li><p><strong>username</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>gallery_image_reference</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">offer</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Offer of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">publisher</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Publisher of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">sku</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The SKU of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">version</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Version of the Gallery Image. Changing this forces a new resource to be created.</p></li>
</ul>
<p>The <strong>inbound_nat_rules</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">backend_port</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The Backend Port associated with this NAT Rule. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">frontend_port</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The frontend port associated with this Inbound NAT Rule.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">protocol</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Protocol used for this NAT Rule. Possible values are <code class="docutils literal notranslate"><span class="pre">Tcp</span></code> and <code class="docutils literal notranslate"><span class="pre">Udp</span></code>. Changing this forces a new resource to be created.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.LinuxVirtualMachine.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.LinuxVirtualMachine.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.Policy">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">Policy</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">description</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">evaluator_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">fact_data</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">policy_set_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">threshold</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.Policy" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a Policy within a Dev Test Policy Set.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example_resource_group</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">core</span><span class="o">.</span><span class="n">ResourceGroup</span><span class="p">(</span><span class="s2">&quot;exampleResourceGroup&quot;</span><span class="p">,</span> <span class="n">location</span><span class="o">=</span><span class="s2">&quot;West US&quot;</span><span class="p">)</span>
<span class="n">example_lab</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">devtest</span><span class="o">.</span><span class="n">Lab</span><span class="p">(</span><span class="s2">&quot;exampleLab&quot;</span><span class="p">,</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">tags</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;Sydney&quot;</span><span class="p">:</span> <span class="s2">&quot;Australia&quot;</span><span class="p">,</span>
    <span class="p">})</span>
<span class="n">example_policy</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">devtest</span><span class="o">.</span><span class="n">Policy</span><span class="p">(</span><span class="s2">&quot;examplePolicy&quot;</span><span class="p">,</span>
    <span class="n">policy_set_name</span><span class="o">=</span><span class="s2">&quot;default&quot;</span><span class="p">,</span>
    <span class="n">lab_name</span><span class="o">=</span><span class="n">example_lab</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">fact_data</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">,</span>
    <span class="n">threshold</span><span class="o">=</span><span class="s2">&quot;999&quot;</span><span class="p">,</span>
    <span class="n">evaluator_type</span><span class="o">=</span><span class="s2">&quot;MaxValuePolicy&quot;</span><span class="p">,</span>
    <span class="n">tags</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;Acceptance&quot;</span><span class="p">:</span> <span class="s2">&quot;Test&quot;</span><span class="p">,</span>
    <span class="p">})</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>description</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – A description for the Policy.</p></li>
<li><p><strong>evaluator_type</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Evaluation Type used for this Policy. Possible values include: ‘AllowedValuesPolicy’, ‘MaxValuePolicy’. Changing this forces a new resource to be created.</p></li>
<li><p><strong>fact_data</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Fact Data for this Policy.</p></li>
<li><p><strong>lab_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Policy. Possible values are <code class="docutils literal notranslate"><span class="pre">GalleryImage</span></code>, <code class="docutils literal notranslate"><span class="pre">LabPremiumVmCount</span></code>, <code class="docutils literal notranslate"><span class="pre">LabTargetCost</span></code>, <code class="docutils literal notranslate"><span class="pre">LabVmCount</span></code>, <code class="docutils literal notranslate"><span class="pre">LabVmSize</span></code>, <code class="docutils literal notranslate"><span class="pre">UserOwnedLabPremiumVmCount</span></code>, <code class="docutils literal notranslate"><span class="pre">UserOwnedLabVmCount</span></code> and <code class="docutils literal notranslate"><span class="pre">UserOwnedLabVmCountInSubnet</span></code>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>policy_set_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>threshold</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Threshold for this Policy.</p></li>
</ul>
</dd>
</dl>
<dl class="py attribute">
<dt id="pulumi_azure.devtest.Policy.description">
<code class="sig-name descname">description</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Policy.description" title="Permalink to this definition">¶</a></dt>
<dd><p>A description for the Policy.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Policy.evaluator_type">
<code class="sig-name descname">evaluator_type</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Policy.evaluator_type" title="Permalink to this definition">¶</a></dt>
<dd><p>The Evaluation Type used for this Policy. Possible values include: ‘AllowedValuesPolicy’, ‘MaxValuePolicy’. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Policy.fact_data">
<code class="sig-name descname">fact_data</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Policy.fact_data" title="Permalink to this definition">¶</a></dt>
<dd><p>The Fact Data for this Policy.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Policy.lab_name">
<code class="sig-name descname">lab_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Policy.lab_name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Policy.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Policy.name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the Dev Test Policy. Possible values are <code class="docutils literal notranslate"><span class="pre">GalleryImage</span></code>, <code class="docutils literal notranslate"><span class="pre">LabPremiumVmCount</span></code>, <code class="docutils literal notranslate"><span class="pre">LabTargetCost</span></code>, <code class="docutils literal notranslate"><span class="pre">LabVmCount</span></code>, <code class="docutils literal notranslate"><span class="pre">LabVmSize</span></code>, <code class="docutils literal notranslate"><span class="pre">UserOwnedLabPremiumVmCount</span></code>, <code class="docutils literal notranslate"><span class="pre">UserOwnedLabVmCount</span></code> and <code class="docutils literal notranslate"><span class="pre">UserOwnedLabVmCountInSubnet</span></code>. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Policy.policy_set_name">
<code class="sig-name descname">policy_set_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Policy.policy_set_name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Policy.resource_group_name">
<code class="sig-name descname">resource_group_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Policy.resource_group_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Policy.tags">
<code class="sig-name descname">tags</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Policy.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>A mapping of tags to assign to the resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Policy.threshold">
<code class="sig-name descname">threshold</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Policy.threshold" title="Permalink to this definition">¶</a></dt>
<dd><p>The Threshold for this Policy.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.Policy.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">description</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">evaluator_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">fact_data</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">policy_set_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">threshold</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.Policy.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing Policy resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>description</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – A description for the Policy.</p></li>
<li><p><strong>evaluator_type</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Evaluation Type used for this Policy. Possible values include: ‘AllowedValuesPolicy’, ‘MaxValuePolicy’. Changing this forces a new resource to be created.</p></li>
<li><p><strong>fact_data</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Fact Data for this Policy.</p></li>
<li><p><strong>lab_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Policy. Possible values are <code class="docutils literal notranslate"><span class="pre">GalleryImage</span></code>, <code class="docutils literal notranslate"><span class="pre">LabPremiumVmCount</span></code>, <code class="docutils literal notranslate"><span class="pre">LabTargetCost</span></code>, <code class="docutils literal notranslate"><span class="pre">LabVmCount</span></code>, <code class="docutils literal notranslate"><span class="pre">LabVmSize</span></code>, <code class="docutils literal notranslate"><span class="pre">UserOwnedLabPremiumVmCount</span></code>, <code class="docutils literal notranslate"><span class="pre">UserOwnedLabVmCount</span></code> and <code class="docutils literal notranslate"><span class="pre">UserOwnedLabVmCountInSubnet</span></code>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>policy_set_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>threshold</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Threshold for this Policy.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.Policy.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.Policy.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.Policy.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.Policy.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.Schedule">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">Schedule</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">daily_recurrence</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">hourly_recurrence</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">notification_settings</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">status</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">time_zone_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">weekly_recurrence</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.Schedule" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages automated startup and shutdown schedules for Azure Dev Test Lab.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example_resource_group</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">core</span><span class="o">.</span><span class="n">ResourceGroup</span><span class="p">(</span><span class="s2">&quot;exampleResourceGroup&quot;</span><span class="p">,</span> <span class="n">location</span><span class="o">=</span><span class="s2">&quot;West US&quot;</span><span class="p">)</span>
<span class="n">example_lab</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">devtest</span><span class="o">.</span><span class="n">Lab</span><span class="p">(</span><span class="s2">&quot;exampleLab&quot;</span><span class="p">,</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">)</span>
<span class="n">example_schedule</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">devtest</span><span class="o">.</span><span class="n">Schedule</span><span class="p">(</span><span class="s2">&quot;exampleSchedule&quot;</span><span class="p">,</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">lab_name</span><span class="o">=</span><span class="n">example_lab</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">weekly_recurrence</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;time&quot;</span><span class="p">:</span> <span class="s2">&quot;1100&quot;</span><span class="p">,</span>
        <span class="s2">&quot;week_days&quot;</span><span class="p">:</span> <span class="p">[</span>
            <span class="s2">&quot;Monday&quot;</span><span class="p">,</span>
            <span class="s2">&quot;Tuesday&quot;</span><span class="p">,</span>
        <span class="p">],</span>
    <span class="p">},</span>
    <span class="n">time_zone_id</span><span class="o">=</span><span class="s2">&quot;Pacific Standard Time&quot;</span><span class="p">,</span>
    <span class="n">task_type</span><span class="o">=</span><span class="s2">&quot;LabVmsStartupTask&quot;</span><span class="p">,</span>
    <span class="n">notification_settings</span><span class="o">=</span><span class="p">{},</span>
    <span class="n">tags</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;environment&quot;</span><span class="p">:</span> <span class="s2">&quot;Production&quot;</span><span class="p">,</span>
    <span class="p">})</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>lab_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the dev test lab. Changing this forces a new resource to be created.</p></li>
<li><p><strong>location</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The location where the schedule is created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the dev test lab schedule. Valid value for name depends on the <code class="docutils literal notranslate"><span class="pre">task_type</span></code>. For instance for task_type <code class="docutils literal notranslate"><span class="pre">LabVmsStartupTask</span></code> the name needs to be <code class="docutils literal notranslate"><span class="pre">LabVmAutoStart</span></code>.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which to create the dev test lab schedule. Changing this forces a new resource to be created.</p></li>
<li><p><strong>status</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The status of this schedule. Possible values are <code class="docutils literal notranslate"><span class="pre">Enabled</span></code> and <code class="docutils literal notranslate"><span class="pre">Disabled</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">Disabled</span></code>.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>task_type</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The task type of the schedule. Possible values include <code class="docutils literal notranslate"><span class="pre">LabVmsShutdownTask</span></code> and <code class="docutils literal notranslate"><span class="pre">LabVmAutoStart</span></code>.</p></li>
<li><p><strong>time_zone_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The time zone ID (e.g. Pacific Standard time).</p></li>
</ul>
</dd>
</dl>
<p>The <strong>daily_recurrence</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">time</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The time each day when the schedule takes effect.</p></li>
</ul>
<p>The <strong>hourly_recurrence</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">minute</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>)</p></li>
</ul>
<p>The <strong>notification_settings</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">status</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The status of the notification. Possible values are <code class="docutils literal notranslate"><span class="pre">Enabled</span></code> and <code class="docutils literal notranslate"><span class="pre">Disabled</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">Disabled</span></code></p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">timeInMinutes</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - Time in minutes before event at which notification will be sent.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">webhookUrl</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The webhook URL to which the notification will be sent.</p></li>
</ul>
<p>The <strong>weekly_recurrence</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">time</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The time when the schedule takes effect.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">week_days</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[list]</span></code>) - A list of days that this schedule takes effect . Possible values include <code class="docutils literal notranslate"><span class="pre">Monday</span></code>, <code class="docutils literal notranslate"><span class="pre">Tuesday</span></code>, <code class="docutils literal notranslate"><span class="pre">Wednesday</span></code>, <code class="docutils literal notranslate"><span class="pre">Thursday</span></code>, <code class="docutils literal notranslate"><span class="pre">Friday</span></code>, <code class="docutils literal notranslate"><span class="pre">Saturday</span></code> and <code class="docutils literal notranslate"><span class="pre">Sunday</span></code>.</p></li>
</ul>
<dl class="py attribute">
<dt id="pulumi_azure.devtest.Schedule.lab_name">
<code class="sig-name descname">lab_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Schedule.lab_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the dev test lab. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Schedule.location">
<code class="sig-name descname">location</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Schedule.location" title="Permalink to this definition">¶</a></dt>
<dd><p>The location where the schedule is created. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Schedule.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Schedule.name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the dev test lab schedule. Valid value for name depends on the <code class="docutils literal notranslate"><span class="pre">task_type</span></code>. For instance for task_type <code class="docutils literal notranslate"><span class="pre">LabVmsStartupTask</span></code> the name needs to be <code class="docutils literal notranslate"><span class="pre">LabVmAutoStart</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Schedule.resource_group_name">
<code class="sig-name descname">resource_group_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Schedule.resource_group_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the resource group in which to create the dev test lab schedule. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Schedule.status">
<code class="sig-name descname">status</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Schedule.status" title="Permalink to this definition">¶</a></dt>
<dd><p>The status of this schedule. Possible values are <code class="docutils literal notranslate"><span class="pre">Enabled</span></code> and <code class="docutils literal notranslate"><span class="pre">Disabled</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">Disabled</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Schedule.tags">
<code class="sig-name descname">tags</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Schedule.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>A mapping of tags to assign to the resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Schedule.task_type">
<code class="sig-name descname">task_type</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Schedule.task_type" title="Permalink to this definition">¶</a></dt>
<dd><p>The task type of the schedule. Possible values include <code class="docutils literal notranslate"><span class="pre">LabVmsShutdownTask</span></code> and <code class="docutils literal notranslate"><span class="pre">LabVmAutoStart</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.Schedule.time_zone_id">
<code class="sig-name descname">time_zone_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.Schedule.time_zone_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The time zone ID (e.g. Pacific Standard time).</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.Schedule.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">daily_recurrence</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">hourly_recurrence</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">notification_settings</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">status</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">task_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">time_zone_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">weekly_recurrence</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.Schedule.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing Schedule resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>lab_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the dev test lab. Changing this forces a new resource to be created.</p></li>
<li><p><strong>location</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The location where the schedule is created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the dev test lab schedule. Valid value for name depends on the <code class="docutils literal notranslate"><span class="pre">task_type</span></code>. For instance for task_type <code class="docutils literal notranslate"><span class="pre">LabVmsStartupTask</span></code> the name needs to be <code class="docutils literal notranslate"><span class="pre">LabVmAutoStart</span></code>.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which to create the dev test lab schedule. Changing this forces a new resource to be created.</p></li>
<li><p><strong>status</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The status of this schedule. Possible values are <code class="docutils literal notranslate"><span class="pre">Enabled</span></code> and <code class="docutils literal notranslate"><span class="pre">Disabled</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">Disabled</span></code>.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>task_type</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The task type of the schedule. Possible values include <code class="docutils literal notranslate"><span class="pre">LabVmsShutdownTask</span></code> and <code class="docutils literal notranslate"><span class="pre">LabVmAutoStart</span></code>.</p></li>
<li><p><strong>time_zone_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The time zone ID (e.g. Pacific Standard time).</p></li>
</ul>
</dd>
</dl>
<p>The <strong>daily_recurrence</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">time</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The time each day when the schedule takes effect.</p></li>
</ul>
<p>The <strong>hourly_recurrence</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">minute</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>)</p></li>
</ul>
<p>The <strong>notification_settings</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">status</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The status of the notification. Possible values are <code class="docutils literal notranslate"><span class="pre">Enabled</span></code> and <code class="docutils literal notranslate"><span class="pre">Disabled</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">Disabled</span></code></p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">timeInMinutes</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - Time in minutes before event at which notification will be sent.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">webhookUrl</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The webhook URL to which the notification will be sent.</p></li>
</ul>
<p>The <strong>weekly_recurrence</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">time</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The time when the schedule takes effect.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">week_days</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[list]</span></code>) - A list of days that this schedule takes effect . Possible values include <code class="docutils literal notranslate"><span class="pre">Monday</span></code>, <code class="docutils literal notranslate"><span class="pre">Tuesday</span></code>, <code class="docutils literal notranslate"><span class="pre">Wednesday</span></code>, <code class="docutils literal notranslate"><span class="pre">Thursday</span></code>, <code class="docutils literal notranslate"><span class="pre">Friday</span></code>, <code class="docutils literal notranslate"><span class="pre">Saturday</span></code> and <code class="docutils literal notranslate"><span class="pre">Sunday</span></code>.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.Schedule.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.Schedule.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.Schedule.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.Schedule.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.VirtualNetwork">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">VirtualNetwork</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">description</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">subnet</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.VirtualNetwork" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a Virtual Network within a DevTest Lab.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example_resource_group</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">core</span><span class="o">.</span><span class="n">ResourceGroup</span><span class="p">(</span><span class="s2">&quot;exampleResourceGroup&quot;</span><span class="p">,</span> <span class="n">location</span><span class="o">=</span><span class="s2">&quot;West US&quot;</span><span class="p">)</span>
<span class="n">example_lab</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">devtest</span><span class="o">.</span><span class="n">Lab</span><span class="p">(</span><span class="s2">&quot;exampleLab&quot;</span><span class="p">,</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">tags</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;Sydney&quot;</span><span class="p">:</span> <span class="s2">&quot;Australia&quot;</span><span class="p">,</span>
    <span class="p">})</span>
<span class="n">example_virtual_network</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">devtest</span><span class="o">.</span><span class="n">VirtualNetwork</span><span class="p">(</span><span class="s2">&quot;exampleVirtualNetwork&quot;</span><span class="p">,</span>
    <span class="n">lab_name</span><span class="o">=</span><span class="n">example_lab</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">subnet</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;usePublicIpAddress&quot;</span><span class="p">:</span> <span class="s2">&quot;Allow&quot;</span><span class="p">,</span>
        <span class="s2">&quot;useInVirtualMachineCreation&quot;</span><span class="p">:</span> <span class="s2">&quot;Allow&quot;</span><span class="p">,</span>
    <span class="p">})</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>description</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – A description for the Virtual Network.</p></li>
<li><p><strong>lab_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Lab in which the Virtual Network should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Virtual Network. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>subnet</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A <code class="docutils literal notranslate"><span class="pre">subnet</span></code> block as defined below.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>subnet</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Specifies the name of the Dev Test Virtual Network. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">useInVirtualMachineCreation</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Can this subnet be used for creating Virtual Machines? Possible values are <code class="docutils literal notranslate"><span class="pre">Allow</span></code>, <code class="docutils literal notranslate"><span class="pre">Default</span></code> and <code class="docutils literal notranslate"><span class="pre">Deny</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">usePublicIpAddress</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Can Virtual Machines in this Subnet use Public IP Addresses? Possible values are <code class="docutils literal notranslate"><span class="pre">Allow</span></code>, <code class="docutils literal notranslate"><span class="pre">Default</span></code> and <code class="docutils literal notranslate"><span class="pre">Deny</span></code>.</p></li>
</ul>
<dl class="py attribute">
<dt id="pulumi_azure.devtest.VirtualNetwork.description">
<code class="sig-name descname">description</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.VirtualNetwork.description" title="Permalink to this definition">¶</a></dt>
<dd><p>A description for the Virtual Network.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.VirtualNetwork.lab_name">
<code class="sig-name descname">lab_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.VirtualNetwork.lab_name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the Dev Test Lab in which the Virtual Network should be created. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.VirtualNetwork.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.VirtualNetwork.name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the Dev Test Virtual Network. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.VirtualNetwork.resource_group_name">
<code class="sig-name descname">resource_group_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.VirtualNetwork.resource_group_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.VirtualNetwork.subnet">
<code class="sig-name descname">subnet</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.VirtualNetwork.subnet" title="Permalink to this definition">¶</a></dt>
<dd><p>A <code class="docutils literal notranslate"><span class="pre">subnet</span></code> block as defined below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Specifies the name of the Dev Test Virtual Network. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">useInVirtualMachineCreation</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Can this subnet be used for creating Virtual Machines? Possible values are <code class="docutils literal notranslate"><span class="pre">Allow</span></code>, <code class="docutils literal notranslate"><span class="pre">Default</span></code> and <code class="docutils literal notranslate"><span class="pre">Deny</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">usePublicIpAddress</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Can Virtual Machines in this Subnet use Public IP Addresses? Possible values are <code class="docutils literal notranslate"><span class="pre">Allow</span></code>, <code class="docutils literal notranslate"><span class="pre">Default</span></code> and <code class="docutils literal notranslate"><span class="pre">Deny</span></code>.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.VirtualNetwork.tags">
<code class="sig-name descname">tags</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.VirtualNetwork.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>A mapping of tags to assign to the resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.VirtualNetwork.unique_identifier">
<code class="sig-name descname">unique_identifier</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.VirtualNetwork.unique_identifier" title="Permalink to this definition">¶</a></dt>
<dd><p>The unique immutable identifier of the Dev Test Virtual Network.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.VirtualNetwork.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">description</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">subnet</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">unique_identifier</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.VirtualNetwork.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing VirtualNetwork resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>description</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – A description for the Virtual Network.</p></li>
<li><p><strong>lab_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Lab in which the Virtual Network should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Virtual Network. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>subnet</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A <code class="docutils literal notranslate"><span class="pre">subnet</span></code> block as defined below.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>unique_identifier</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The unique immutable identifier of the Dev Test Virtual Network.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>subnet</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Specifies the name of the Dev Test Virtual Network. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">useInVirtualMachineCreation</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Can this subnet be used for creating Virtual Machines? Possible values are <code class="docutils literal notranslate"><span class="pre">Allow</span></code>, <code class="docutils literal notranslate"><span class="pre">Default</span></code> and <code class="docutils literal notranslate"><span class="pre">Deny</span></code>.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">usePublicIpAddress</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Can Virtual Machines in this Subnet use Public IP Addresses? Possible values are <code class="docutils literal notranslate"><span class="pre">Allow</span></code>, <code class="docutils literal notranslate"><span class="pre">Default</span></code> and <code class="docutils literal notranslate"><span class="pre">Deny</span></code>.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.VirtualNetwork.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.VirtualNetwork.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.VirtualNetwork.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.VirtualNetwork.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.WindowsVirtualMachine">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">WindowsVirtualMachine</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">allow_claim</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">disallow_public_ip_address</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">gallery_image_reference</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">inbound_nat_rules</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_subnet_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_virtual_network_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">notes</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">password</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">size</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">storage_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">username</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a Windows Virtual Machine within a Dev Test Lab.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>allow_claim</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Can this Virtual Machine be claimed by users? Defaults to <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p></li>
<li><p><strong>disallow_public_ip_address</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.</p></li>
<li><p><strong>gallery_image_reference</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A <code class="docutils literal notranslate"><span class="pre">gallery_image_reference</span></code> block as defined below.</p></li>
<li><p><strong>inbound_nat_rules</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – One or more <code class="docutils literal notranslate"><span class="pre">inbound_nat_rule</span></code> blocks as defined below. Changing this forces a new resource to be created.</p></li>
<li><p><strong>lab_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>lab_subnet_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.</p></li>
<li><p><strong>lab_virtual_network_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>location</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.</p></li>
<li><p><strong>notes</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Any notes about the Virtual Machine.</p></li>
<li><p><strong>password</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Password associated with the <code class="docutils literal notranslate"><span class="pre">username</span></code> used to login to this Virtual Machine. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>size</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Machine Size to use for this Virtual Machine, such as <code class="docutils literal notranslate"><span class="pre">Standard_F2</span></code>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>storage_type</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The type of Storage to use on this Virtual Machine. Possible values are <code class="docutils literal notranslate"><span class="pre">Standard</span></code> and <code class="docutils literal notranslate"><span class="pre">Premium</span></code>.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>username</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>gallery_image_reference</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">offer</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Offer of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">publisher</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Publisher of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">sku</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The SKU of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">version</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Version of the Gallery Image. Changing this forces a new resource to be created.</p></li>
</ul>
<p>The <strong>inbound_nat_rules</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">backend_port</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The Backend Port associated with this NAT Rule. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">frontend_port</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The frontend port associated with this Inbound NAT Rule.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">protocol</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Protocol used for this NAT Rule. Possible values are <code class="docutils literal notranslate"><span class="pre">Tcp</span></code> and <code class="docutils literal notranslate"><span class="pre">Udp</span></code>. Changing this forces a new resource to be created.</p></li>
</ul>
<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.allow_claim">
<code class="sig-name descname">allow_claim</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.allow_claim" title="Permalink to this definition">¶</a></dt>
<dd><p>Can this Virtual Machine be claimed by users? Defaults to <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.disallow_public_ip_address">
<code class="sig-name descname">disallow_public_ip_address</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.disallow_public_ip_address" title="Permalink to this definition">¶</a></dt>
<dd><p>Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.fqdn">
<code class="sig-name descname">fqdn</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.fqdn" title="Permalink to this definition">¶</a></dt>
<dd><p>The FQDN of the Virtual Machine.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.gallery_image_reference">
<code class="sig-name descname">gallery_image_reference</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.gallery_image_reference" title="Permalink to this definition">¶</a></dt>
<dd><p>A <code class="docutils literal notranslate"><span class="pre">gallery_image_reference</span></code> block as defined below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">offer</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The Offer of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">publisher</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The Publisher of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">sku</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The SKU of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">version</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The Version of the Gallery Image. Changing this forces a new resource to be created.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.inbound_nat_rules">
<code class="sig-name descname">inbound_nat_rules</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.inbound_nat_rules" title="Permalink to this definition">¶</a></dt>
<dd><p>One or more <code class="docutils literal notranslate"><span class="pre">inbound_nat_rule</span></code> blocks as defined below. Changing this forces a new resource to be created.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">backend_port</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The Backend Port associated with this NAT Rule. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">frontend_port</span></code> (<code class="docutils literal notranslate"><span class="pre">float</span></code>) - The frontend port associated with this Inbound NAT Rule.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">protocol</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The Protocol used for this NAT Rule. Possible values are <code class="docutils literal notranslate"><span class="pre">Tcp</span></code> and <code class="docutils literal notranslate"><span class="pre">Udp</span></code>. Changing this forces a new resource to be created.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.lab_name">
<code class="sig-name descname">lab_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.lab_name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.lab_subnet_name">
<code class="sig-name descname">lab_subnet_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.lab_subnet_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.lab_virtual_network_id">
<code class="sig-name descname">lab_virtual_network_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.lab_virtual_network_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.location">
<code class="sig-name descname">location</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.location" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.notes">
<code class="sig-name descname">notes</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.notes" title="Permalink to this definition">¶</a></dt>
<dd><p>Any notes about the Virtual Machine.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.password">
<code class="sig-name descname">password</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.password" title="Permalink to this definition">¶</a></dt>
<dd><p>The Password associated with the <code class="docutils literal notranslate"><span class="pre">username</span></code> used to login to this Virtual Machine. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.resource_group_name">
<code class="sig-name descname">resource_group_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.resource_group_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.size">
<code class="sig-name descname">size</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.size" title="Permalink to this definition">¶</a></dt>
<dd><p>The Machine Size to use for this Virtual Machine, such as <code class="docutils literal notranslate"><span class="pre">Standard_F2</span></code>. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.storage_type">
<code class="sig-name descname">storage_type</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.storage_type" title="Permalink to this definition">¶</a></dt>
<dd><p>The type of Storage to use on this Virtual Machine. Possible values are <code class="docutils literal notranslate"><span class="pre">Standard</span></code> and <code class="docutils literal notranslate"><span class="pre">Premium</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.tags">
<code class="sig-name descname">tags</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>A mapping of tags to assign to the resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.unique_identifier">
<code class="sig-name descname">unique_identifier</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.unique_identifier" title="Permalink to this definition">¶</a></dt>
<dd><p>The unique immutable identifier of the Virtual Machine.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.username">
<code class="sig-name descname">username</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.username" title="Permalink to this definition">¶</a></dt>
<dd><p>The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">allow_claim</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">disallow_public_ip_address</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">fqdn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">gallery_image_reference</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">inbound_nat_rules</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_subnet_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">lab_virtual_network_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">notes</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">password</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">size</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">storage_type</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">unique_identifier</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">username</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing WindowsVirtualMachine resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>allow_claim</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Can this Virtual Machine be claimed by users? Defaults to <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p></li>
<li><p><strong>disallow_public_ip_address</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.</p></li>
<li><p><strong>fqdn</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The FQDN of the Virtual Machine.</p></li>
<li><p><strong>gallery_image_reference</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A <code class="docutils literal notranslate"><span class="pre">gallery_image_reference</span></code> block as defined below.</p></li>
<li><p><strong>inbound_nat_rules</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – One or more <code class="docutils literal notranslate"><span class="pre">inbound_nat_rule</span></code> blocks as defined below. Changing this forces a new resource to be created.</p></li>
<li><p><strong>lab_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>lab_subnet_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.</p></li>
<li><p><strong>lab_virtual_network_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.</p></li>
<li><p><strong>location</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.</p></li>
<li><p><strong>notes</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Any notes about the Virtual Machine.</p></li>
<li><p><strong>password</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Password associated with the <code class="docutils literal notranslate"><span class="pre">username</span></code> used to login to this Virtual Machine. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>size</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Machine Size to use for this Virtual Machine, such as <code class="docutils literal notranslate"><span class="pre">Standard_F2</span></code>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>storage_type</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The type of Storage to use on this Virtual Machine. Possible values are <code class="docutils literal notranslate"><span class="pre">Standard</span></code> and <code class="docutils literal notranslate"><span class="pre">Premium</span></code>.</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>unique_identifier</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The unique immutable identifier of the Virtual Machine.</p></li>
<li><p><strong>username</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>gallery_image_reference</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">offer</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Offer of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">publisher</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Publisher of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">sku</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The SKU of the Gallery Image. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">version</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Version of the Gallery Image. Changing this forces a new resource to be created.</p></li>
</ul>
<p>The <strong>inbound_nat_rules</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">backend_port</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The Backend Port associated with this NAT Rule. Changing this forces a new resource to be created.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">frontend_port</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - The frontend port associated with this Inbound NAT Rule.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">protocol</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The Protocol used for this NAT Rule. Possible values are <code class="docutils literal notranslate"><span class="pre">Tcp</span></code> and <code class="docutils literal notranslate"><span class="pre">Udp</span></code>. Changing this forces a new resource to be created.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.WindowsVirtualMachine.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.WindowsVirtualMachine.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.devtest.get_lab">
<code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">get_lab</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.get_lab" title="Permalink to this definition">¶</a></dt>
<dd><p>Use this data source to access information about an existing Dev Test Lab.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">devtest</span><span class="o">.</span><span class="n">get_lab</span><span class="p">(</span><span class="n">name</span><span class="o">=</span><span class="s2">&quot;example-lab&quot;</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="s2">&quot;example-resources&quot;</span><span class="p">)</span>
<span class="n">pulumi</span><span class="o">.</span><span class="n">export</span><span class="p">(</span><span class="s2">&quot;uniqueIdentifier&quot;</span><span class="p">,</span> <span class="n">example</span><span class="o">.</span><span class="n">unique_identifier</span><span class="p">)</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>name</strong> (<em>str</em>) – The name of the Dev Test Lab.</p></li>
<li><p><strong>resource_group_name</strong> (<em>str</em>) – The Name of the Resource Group where the Dev Test Lab exists.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<dl class="py function">
<dt id="pulumi_azure.devtest.get_virtual_network">
<code class="sig-prename descclassname">pulumi_azure.devtest.</code><code class="sig-name descname">get_virtual_network</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">lab_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.devtest.get_virtual_network" title="Permalink to this definition">¶</a></dt>
<dd><p>Use this data source to access information about an existing Dev Test Lab Virtual Network.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">devtest</span><span class="o">.</span><span class="n">get_virtual_network</span><span class="p">(</span><span class="n">name</span><span class="o">=</span><span class="s2">&quot;example-network&quot;</span><span class="p">,</span>
    <span class="n">lab_name</span><span class="o">=</span><span class="s2">&quot;examplelab&quot;</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="s2">&quot;example-resource&quot;</span><span class="p">)</span>
<span class="n">pulumi</span><span class="o">.</span><span class="n">export</span><span class="p">(</span><span class="s2">&quot;labSubnetName&quot;</span><span class="p">,</span> <span class="n">example</span><span class="o">.</span><span class="n">allowed_subnets</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="s2">&quot;lab_subnet_name&quot;</span><span class="p">])</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>lab_name</strong> (<em>str</em>) – Specifies the name of the Dev Test Lab.</p></li>
<li><p><strong>name</strong> (<em>str</em>) – Specifies the name of the Virtual Network.</p></li>
<li><p><strong>resource_group_name</strong> (<em>str</em>) – Specifies the name of the resource group that contains the Virtual Network.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

</div>
