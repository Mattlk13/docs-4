---
title: Module mysql
title_tag: Module mysql | Package pulumi_azure | Python SDK
linktitle: mysql
notitle: true
block_external_search_index: true
---

{{< resource-docs-alert "azure" >}}

<div class="section" id="mysql">
<h1>mysql<a class="headerlink" href="#mysql" title="Permalink to this headline">¶</a></h1>
<blockquote>
<div><p>This provider is a derived work of the <a class="reference external" href="https://github.com/terraform-providers/terraform-provider-azurerm">Terraform Provider</a> distributed under
<a class="reference external" href="https://www.mozilla.org/en-US/MPL/2.0/">MPL 2.0</a>. If you encounter a bug or missing feature, first check the
<a class="reference external" href="https://github.com/pulumi/pulumi-azure/issues">pulumi/pulumi-azure repo</a>; however, if that doesn’t turn up
anything, please consult the source <a class="reference external" href="https://github.com/terraform-providers/terraform-provider-azurerm/issues">terraform-providers/terraform-provider-azurerm repo</a>.</p>
</div></blockquote>
<span class="target" id="module-pulumi_azure.mysql"></span><dl class="py class">
<dt id="pulumi_azure.mysql.Configuration">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.mysql.</code><code class="sig-name descname">Configuration</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">server_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">value</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.Configuration" title="Permalink to this definition">¶</a></dt>
<dd><p>Sets a MySQL Configuration value on a MySQL Server.</p>
<blockquote>
<div><p><strong>Note:</strong> Since this resource is provisioned by default, the Azure Provider will not check for the presence of an existing resource prior to attempting to create it.</p>
</div></blockquote>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example_resource_group</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">core</span><span class="o">.</span><span class="n">ResourceGroup</span><span class="p">(</span><span class="s2">&quot;exampleResourceGroup&quot;</span><span class="p">,</span> <span class="n">location</span><span class="o">=</span><span class="s2">&quot;West Europe&quot;</span><span class="p">)</span>
<span class="n">example_server</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">mysql</span><span class="o">.</span><span class="n">Server</span><span class="p">(</span><span class="s2">&quot;exampleServer&quot;</span><span class="p">,</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">sku_name</span><span class="o">=</span><span class="s2">&quot;GP_Gen5_2&quot;</span><span class="p">,</span>
    <span class="n">storage_profile</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;storage_mb&quot;</span><span class="p">:</span> <span class="mi">5120</span><span class="p">,</span>
        <span class="s2">&quot;backup_retention_days&quot;</span><span class="p">:</span> <span class="mi">7</span><span class="p">,</span>
        <span class="s2">&quot;geoRedundantBackup&quot;</span><span class="p">:</span> <span class="s2">&quot;Disabled&quot;</span><span class="p">,</span>
    <span class="p">},</span>
    <span class="n">administrator_login</span><span class="o">=</span><span class="s2">&quot;psqladminun&quot;</span><span class="p">,</span>
    <span class="n">administrator_login_password</span><span class="o">=</span><span class="s2">&quot;H@Sh1CoR3!&quot;</span><span class="p">,</span>
    <span class="n">version</span><span class="o">=</span><span class="s2">&quot;5.7&quot;</span><span class="p">,</span>
    <span class="n">ssl_enforcement</span><span class="o">=</span><span class="s2">&quot;Enabled&quot;</span><span class="p">)</span>
<span class="n">example_configuration</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">mysql</span><span class="o">.</span><span class="n">Configuration</span><span class="p">(</span><span class="s2">&quot;exampleConfiguration&quot;</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">server_name</span><span class="o">=</span><span class="n">example_server</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">value</span><span class="o">=</span><span class="s2">&quot;600&quot;</span><span class="p">)</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the MySQL Configuration, which needs <a class="reference external" href="https://dev.mysql.com/doc/refman/5.7/en/server-configuration.html">to be a valid MySQL configuration name</a>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>server_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the MySQL Server. Changing this forces a new resource to be created.</p></li>
<li><p><strong>value</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the value of the MySQL Configuration. See the MySQL documentation for valid values.</p></li>
</ul>
</dd>
</dl>
<dl class="py attribute">
<dt id="pulumi_azure.mysql.Configuration.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Configuration.name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the MySQL Configuration, which needs <a class="reference external" href="https://dev.mysql.com/doc/refman/5.7/en/server-configuration.html">to be a valid MySQL configuration name</a>. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Configuration.resource_group_name">
<code class="sig-name descname">resource_group_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Configuration.resource_group_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Configuration.server_name">
<code class="sig-name descname">server_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Configuration.server_name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the MySQL Server. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Configuration.value">
<code class="sig-name descname">value</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Configuration.value" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the value of the MySQL Configuration. See the MySQL documentation for valid values.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.mysql.Configuration.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">server_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">value</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.Configuration.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing Configuration resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – <p>Specifies the name of the MySQL Configuration, which needs <a class="reference external" href="https://dev.mysql.com/doc/refman/5.7/en/server-configuration.html">to be a valid MySQL configuration name</a>. Changing this forces a new resource to be created.</p>
</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>server_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the MySQL Server. Changing this forces a new resource to be created.</p></li>
<li><p><strong>value</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the value of the MySQL Configuration. See the MySQL documentation for valid values.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.mysql.Configuration.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.Configuration.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.mysql.Configuration.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.Configuration.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.mysql.Database">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.mysql.</code><code class="sig-name descname">Database</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">charset</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">collation</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">server_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.Database" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a MySQL Database within a MySQL Server</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example_resource_group</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">core</span><span class="o">.</span><span class="n">ResourceGroup</span><span class="p">(</span><span class="s2">&quot;exampleResourceGroup&quot;</span><span class="p">,</span> <span class="n">location</span><span class="o">=</span><span class="s2">&quot;West Europe&quot;</span><span class="p">)</span>
<span class="n">example_server</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">mysql</span><span class="o">.</span><span class="n">Server</span><span class="p">(</span><span class="s2">&quot;exampleServer&quot;</span><span class="p">,</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">sku_name</span><span class="o">=</span><span class="s2">&quot;B_Gen5_2&quot;</span><span class="p">,</span>
    <span class="n">storage_profile</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;storage_mb&quot;</span><span class="p">:</span> <span class="mi">5120</span><span class="p">,</span>
        <span class="s2">&quot;backup_retention_days&quot;</span><span class="p">:</span> <span class="mi">7</span><span class="p">,</span>
        <span class="s2">&quot;geoRedundantBackup&quot;</span><span class="p">:</span> <span class="s2">&quot;Disabled&quot;</span><span class="p">,</span>
    <span class="p">},</span>
    <span class="n">administrator_login</span><span class="o">=</span><span class="s2">&quot;mysqladminun&quot;</span><span class="p">,</span>
    <span class="n">administrator_login_password</span><span class="o">=</span><span class="s2">&quot;H@Sh1CoR3!&quot;</span><span class="p">,</span>
    <span class="n">version</span><span class="o">=</span><span class="s2">&quot;5.7&quot;</span><span class="p">,</span>
    <span class="n">ssl_enforcement</span><span class="o">=</span><span class="s2">&quot;Enabled&quot;</span><span class="p">)</span>
<span class="n">example_database</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">mysql</span><span class="o">.</span><span class="n">Database</span><span class="p">(</span><span class="s2">&quot;exampleDatabase&quot;</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">server_name</span><span class="o">=</span><span class="n">example_server</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">charset</span><span class="o">=</span><span class="s2">&quot;utf8&quot;</span><span class="p">,</span>
    <span class="n">collation</span><span class="o">=</span><span class="s2">&quot;utf8_unicode_ci&quot;</span><span class="p">)</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>charset</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the Charset for the MySQL Database, which needs <a class="reference external" href="https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html">to be a valid MySQL Charset</a>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>collation</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the Collation for the MySQL Database, which needs <a class="reference external" href="https://dev.mysql.com/doc/refman/5.7/en/charset-mysql.html">to be a valid MySQL Collation</a>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the MySQL Database, which needs <a class="reference external" href="https://dev.mysql.com/doc/refman/5.7/en/identifiers.html">to be a valid MySQL identifier</a>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>server_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the MySQL Server. Changing this forces a new resource to be created.</p></li>
</ul>
</dd>
</dl>
<dl class="py attribute">
<dt id="pulumi_azure.mysql.Database.charset">
<code class="sig-name descname">charset</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Database.charset" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the Charset for the MySQL Database, which needs <a class="reference external" href="https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html">to be a valid MySQL Charset</a>. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Database.collation">
<code class="sig-name descname">collation</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Database.collation" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the Collation for the MySQL Database, which needs <a class="reference external" href="https://dev.mysql.com/doc/refman/5.7/en/charset-mysql.html">to be a valid MySQL Collation</a>. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Database.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Database.name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the MySQL Database, which needs <a class="reference external" href="https://dev.mysql.com/doc/refman/5.7/en/identifiers.html">to be a valid MySQL identifier</a>. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Database.resource_group_name">
<code class="sig-name descname">resource_group_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Database.resource_group_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Database.server_name">
<code class="sig-name descname">server_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Database.server_name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the MySQL Server. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.mysql.Database.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">charset</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">collation</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">server_name</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.Database.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing Database resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>charset</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – <p>Specifies the Charset for the MySQL Database, which needs <a class="reference external" href="https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html">to be a valid MySQL Charset</a>. Changing this forces a new resource to be created.</p>
</p></li>
<li><p><strong>collation</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – <p>Specifies the Collation for the MySQL Database, which needs <a class="reference external" href="https://dev.mysql.com/doc/refman/5.7/en/charset-mysql.html">to be a valid MySQL Collation</a>. Changing this forces a new resource to be created.</p>
</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – <p>Specifies the name of the MySQL Database, which needs <a class="reference external" href="https://dev.mysql.com/doc/refman/5.7/en/identifiers.html">to be a valid MySQL identifier</a>. Changing this forces a new resource to be created.</p>
</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>server_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the MySQL Server. Changing this forces a new resource to be created.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.mysql.Database.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.Database.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.mysql.Database.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.Database.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.mysql.FirewallRule">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.mysql.</code><code class="sig-name descname">FirewallRule</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">end_ip_address</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">server_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">start_ip_address</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.FirewallRule" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a Firewall Rule for a MySQL Server</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example_resource_group</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">core</span><span class="o">.</span><span class="n">ResourceGroup</span><span class="p">(</span><span class="s2">&quot;exampleResourceGroup&quot;</span><span class="p">,</span> <span class="n">location</span><span class="o">=</span><span class="s2">&quot;West Europe&quot;</span><span class="p">)</span>
<span class="n">example_server</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">mysql</span><span class="o">.</span><span class="n">Server</span><span class="p">(</span><span class="s2">&quot;exampleServer&quot;</span><span class="p">)</span>
<span class="c1"># ...</span>
<span class="n">example_firewall_rule</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">mysql</span><span class="o">.</span><span class="n">FirewallRule</span><span class="p">(</span><span class="s2">&quot;exampleFirewallRule&quot;</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">server_name</span><span class="o">=</span><span class="n">example_server</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">start_ip_address</span><span class="o">=</span><span class="s2">&quot;40.112.8.12&quot;</span><span class="p">,</span>
    <span class="n">end_ip_address</span><span class="o">=</span><span class="s2">&quot;40.112.8.12&quot;</span><span class="p">)</span>
</pre></div>
</div>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example_resource_group</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">core</span><span class="o">.</span><span class="n">ResourceGroup</span><span class="p">(</span><span class="s2">&quot;exampleResourceGroup&quot;</span><span class="p">,</span> <span class="n">location</span><span class="o">=</span><span class="s2">&quot;West Europe&quot;</span><span class="p">)</span>
<span class="n">example_server</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">mysql</span><span class="o">.</span><span class="n">Server</span><span class="p">(</span><span class="s2">&quot;exampleServer&quot;</span><span class="p">)</span>
<span class="c1"># ...</span>
<span class="n">example_firewall_rule</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">mysql</span><span class="o">.</span><span class="n">FirewallRule</span><span class="p">(</span><span class="s2">&quot;exampleFirewallRule&quot;</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">server_name</span><span class="o">=</span><span class="n">example_server</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">start_ip_address</span><span class="o">=</span><span class="s2">&quot;40.112.0.0&quot;</span><span class="p">,</span>
    <span class="n">end_ip_address</span><span class="o">=</span><span class="s2">&quot;40.112.255.255&quot;</span><span class="p">)</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>end_ip_address</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the End IP Address associated with this Firewall Rule. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the MySQL Firewall Rule. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>server_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the MySQL Server. Changing this forces a new resource to be created.</p></li>
<li><p><strong>start_ip_address</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the Start IP Address associated with this Firewall Rule. Changing this forces a new resource to be created.</p></li>
</ul>
</dd>
</dl>
<dl class="py attribute">
<dt id="pulumi_azure.mysql.FirewallRule.end_ip_address">
<code class="sig-name descname">end_ip_address</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.FirewallRule.end_ip_address" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the End IP Address associated with this Firewall Rule. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.FirewallRule.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.FirewallRule.name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the MySQL Firewall Rule. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.FirewallRule.resource_group_name">
<code class="sig-name descname">resource_group_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.FirewallRule.resource_group_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.FirewallRule.server_name">
<code class="sig-name descname">server_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.FirewallRule.server_name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the MySQL Server. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.FirewallRule.start_ip_address">
<code class="sig-name descname">start_ip_address</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.FirewallRule.start_ip_address" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the Start IP Address associated with this Firewall Rule. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.mysql.FirewallRule.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">end_ip_address</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">server_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">start_ip_address</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.FirewallRule.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing FirewallRule resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>end_ip_address</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the End IP Address associated with this Firewall Rule. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the MySQL Firewall Rule. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>server_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the MySQL Server. Changing this forces a new resource to be created.</p></li>
<li><p><strong>start_ip_address</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the Start IP Address associated with this Firewall Rule. Changing this forces a new resource to be created.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.mysql.FirewallRule.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.FirewallRule.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.mysql.FirewallRule.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.FirewallRule.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.mysql.Server">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.mysql.</code><code class="sig-name descname">Server</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">administrator_login</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">administrator_login_password</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">auto_grow_enabled</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">backup_retention_days</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">create_mode</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">creation_source_server_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">geo_redundant_backup_enabled</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">infrastructure_encryption_enabled</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">public_network_access_enabled</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">restore_point_in_time</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">sku_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">ssl_enforcement</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">ssl_enforcement_enabled</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">ssl_minimal_tls_version_enforced</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">storage_mb</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">storage_profile</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">version</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.Server" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a MySQL Server.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example_resource_group</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">core</span><span class="o">.</span><span class="n">ResourceGroup</span><span class="p">(</span><span class="s2">&quot;exampleResourceGroup&quot;</span><span class="p">,</span> <span class="n">location</span><span class="o">=</span><span class="s2">&quot;West Europe&quot;</span><span class="p">)</span>
<span class="n">example_server</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">mysql</span><span class="o">.</span><span class="n">Server</span><span class="p">(</span><span class="s2">&quot;exampleServer&quot;</span><span class="p">,</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">administrator_login</span><span class="o">=</span><span class="s2">&quot;mysqladminun&quot;</span><span class="p">,</span>
    <span class="n">administrator_login_password</span><span class="o">=</span><span class="s2">&quot;H@Sh1CoR3!&quot;</span><span class="p">,</span>
    <span class="n">sku_name</span><span class="o">=</span><span class="s2">&quot;B_Gen5_2&quot;</span><span class="p">,</span>
    <span class="n">storage_mb</span><span class="o">=</span><span class="mi">5120</span><span class="p">,</span>
    <span class="n">version</span><span class="o">=</span><span class="s2">&quot;5.7&quot;</span><span class="p">,</span>
    <span class="n">auto_grow_enabled</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span>
    <span class="n">backup_retention_days</span><span class="o">=</span><span class="mi">7</span><span class="p">,</span>
    <span class="n">geo_redundant_backup_enabled</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span>
    <span class="n">infrastructure_encryption_enabled</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span>
    <span class="n">public_network_access_enabled</span><span class="o">=</span><span class="kc">False</span><span class="p">,</span>
    <span class="n">ssl_enforcement_enabled</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span>
    <span class="n">ssl_minimal_tls_version_enforced</span><span class="o">=</span><span class="s2">&quot;TLS1_2&quot;</span><span class="p">)</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>administrator_login</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Administrator Login for the MySQL Server. Required when <code class="docutils literal notranslate"><span class="pre">create_mode</span></code> is <code class="docutils literal notranslate"><span class="pre">Default</span></code>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>administrator_login_password</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Password associated with the <code class="docutils literal notranslate"><span class="pre">administrator_login</span></code> for the MySQL Server. Required when <code class="docutils literal notranslate"><span class="pre">create_mode</span></code> is <code class="docutils literal notranslate"><span class="pre">Default</span></code>.</p></li>
<li><p><strong>auto_grow_enabled</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Enable/Disable auto-growing of the storage. Storage auto-grow prevents your server from running out of storage and becoming read-only. If storage auto grow is enabled, the storage automatically grows without impacting the workload. The default value if not explicitly specified is <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p></li>
<li><p><strong>backup_retention_days</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – Backup retention days for the server, supported values are between <code class="docutils literal notranslate"><span class="pre">7</span></code> and <code class="docutils literal notranslate"><span class="pre">35</span></code> days.</p></li>
<li><p><strong>create_mode</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The creation mode. Can be used to restore or replicate existing servers. Possible values are <code class="docutils literal notranslate"><span class="pre">Default</span></code>, <code class="docutils literal notranslate"><span class="pre">Replica</span></code>, <code class="docutils literal notranslate"><span class="pre">GeoRestore</span></code>, and <code class="docutils literal notranslate"><span class="pre">PointInTimeRestore</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">Default</span></code>.</p></li>
<li><p><strong>creation_source_server_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – For creation modes other than <code class="docutils literal notranslate"><span class="pre">Default</span></code>, the source server ID to use.</p></li>
<li><p><strong>geo_redundant_backup_enabled</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Turn Geo-redundant server backups on/off. This allows you to choose between locally redundant or geo-redundant backup storage in the General Purpose and Memory Optimized tiers. When the backups are stored in geo-redundant backup storage, they are not only stored within the region in which your server is hosted, but are also replicated to a paired data center. This provides better protection and ability to restore your server in a different region in the event of a disaster. This is not supported for the Basic tier.</p></li>
<li><p><strong>infrastructure_encryption_enabled</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Whether or not infrastructure is encrypted for this server. Defaults to <code class="docutils literal notranslate"><span class="pre">false</span></code>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>location</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the MySQL Server. Changing this forces a new resource to be created. This needs to be globally unique within Azure.</p></li>
<li><p><strong>public_network_access_enabled</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Whether or not public network access is allowed for this server. Defaults to <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which to create the MySQL Server. Changing this forces a new resource to be created.</p></li>
<li><p><strong>restore_point_in_time</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – When <code class="docutils literal notranslate"><span class="pre">create_mode</span></code> is <code class="docutils literal notranslate"><span class="pre">PointInTimeRestore</span></code>, specifies the point in time to restore from <code class="docutils literal notranslate"><span class="pre">creation_source_server_id</span></code>.</p></li>
<li><p><strong>sku_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the SKU Name for this MySQL Server. The name of the SKU, follows the <code class="docutils literal notranslate"><span class="pre">tier</span></code> + <code class="docutils literal notranslate"><span class="pre">family</span></code> + <code class="docutils literal notranslate"><span class="pre">cores</span></code> pattern (e.g. <code class="docutils literal notranslate"><span class="pre">B_Gen4_1</span></code>, <code class="docutils literal notranslate"><span class="pre">GP_Gen5_8</span></code>). For more information see the <a class="reference external" href="https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#sku">product documentation</a>.</p></li>
<li><p><strong>ssl_enforcement_enabled</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Specifies if SSL should be enforced on connections. Possible values are <code class="docutils literal notranslate"><span class="pre">true</span></code> and <code class="docutils literal notranslate"><span class="pre">false</span></code>.</p></li>
<li><p><strong>ssl_minimal_tls_version_enforced</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The minimum TLS version to support on the sever. Possible values are <code class="docutils literal notranslate"><span class="pre">TLSEnforcementDisabled</span></code>, <code class="docutils literal notranslate"><span class="pre">TLS1_0</span></code>, <code class="docutils literal notranslate"><span class="pre">TLS1_1</span></code>, and <code class="docutils literal notranslate"><span class="pre">TLS1_2</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">TLSEnforcementDisabled</span></code>.</p></li>
<li><p><strong>storage_mb</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – <p>Max storage allowed for a server. Possible values are between <code class="docutils literal notranslate"><span class="pre">5120</span></code> MB(5GB) and <code class="docutils literal notranslate"><span class="pre">1048576</span></code> MB(1TB) for the Basic SKU and between <code class="docutils literal notranslate"><span class="pre">5120</span></code> MB(5GB) and <code class="docutils literal notranslate"><span class="pre">4194304</span></code> MB(4TB) for General Purpose/Memory Optimized SKUs. For more information see the <a class="reference external" href="https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#StorageProfile">product documentation</a>.</p>
</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>version</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the version of MySQL to use. Valid values are <code class="docutils literal notranslate"><span class="pre">5.6</span></code>, <code class="docutils literal notranslate"><span class="pre">5.7</span></code>, and <code class="docutils literal notranslate"><span class="pre">8.0</span></code>. Changing this forces a new resource to be created.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>storage_profile</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">autoGrow</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>)</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">backup_retention_days</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - Backup retention days for the server, supported values are between <code class="docutils literal notranslate"><span class="pre">7</span></code> and <code class="docutils literal notranslate"><span class="pre">35</span></code> days.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">geoRedundantBackup</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>)</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">storage_mb</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - Max storage allowed for a server. Possible values are between <code class="docutils literal notranslate"><span class="pre">5120</span></code> MB(5GB) and <code class="docutils literal notranslate"><span class="pre">1048576</span></code> MB(1TB) for the Basic SKU and between <code class="docutils literal notranslate"><span class="pre">5120</span></code> MB(5GB) and <code class="docutils literal notranslate"><span class="pre">4194304</span></code> MB(4TB) for General Purpose/Memory Optimized SKUs. For more information see the <a class="reference external" href="https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#StorageProfile">product documentation</a>.</p></li>
</ul>
<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.administrator_login">
<code class="sig-name descname">administrator_login</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.administrator_login" title="Permalink to this definition">¶</a></dt>
<dd><p>The Administrator Login for the MySQL Server. Required when <code class="docutils literal notranslate"><span class="pre">create_mode</span></code> is <code class="docutils literal notranslate"><span class="pre">Default</span></code>. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.administrator_login_password">
<code class="sig-name descname">administrator_login_password</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.administrator_login_password" title="Permalink to this definition">¶</a></dt>
<dd><p>The Password associated with the <code class="docutils literal notranslate"><span class="pre">administrator_login</span></code> for the MySQL Server. Required when <code class="docutils literal notranslate"><span class="pre">create_mode</span></code> is <code class="docutils literal notranslate"><span class="pre">Default</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.auto_grow_enabled">
<code class="sig-name descname">auto_grow_enabled</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.auto_grow_enabled" title="Permalink to this definition">¶</a></dt>
<dd><p>Enable/Disable auto-growing of the storage. Storage auto-grow prevents your server from running out of storage and becoming read-only. If storage auto grow is enabled, the storage automatically grows without impacting the workload. The default value if not explicitly specified is <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.backup_retention_days">
<code class="sig-name descname">backup_retention_days</code><em class="property">: pulumi.Output[float]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.backup_retention_days" title="Permalink to this definition">¶</a></dt>
<dd><p>Backup retention days for the server, supported values are between <code class="docutils literal notranslate"><span class="pre">7</span></code> and <code class="docutils literal notranslate"><span class="pre">35</span></code> days.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.create_mode">
<code class="sig-name descname">create_mode</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.create_mode" title="Permalink to this definition">¶</a></dt>
<dd><p>The creation mode. Can be used to restore or replicate existing servers. Possible values are <code class="docutils literal notranslate"><span class="pre">Default</span></code>, <code class="docutils literal notranslate"><span class="pre">Replica</span></code>, <code class="docutils literal notranslate"><span class="pre">GeoRestore</span></code>, and <code class="docutils literal notranslate"><span class="pre">PointInTimeRestore</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">Default</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.creation_source_server_id">
<code class="sig-name descname">creation_source_server_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.creation_source_server_id" title="Permalink to this definition">¶</a></dt>
<dd><p>For creation modes other than <code class="docutils literal notranslate"><span class="pre">Default</span></code>, the source server ID to use.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.fqdn">
<code class="sig-name descname">fqdn</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.fqdn" title="Permalink to this definition">¶</a></dt>
<dd><p>The FQDN of the MySQL Server.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.geo_redundant_backup_enabled">
<code class="sig-name descname">geo_redundant_backup_enabled</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.geo_redundant_backup_enabled" title="Permalink to this definition">¶</a></dt>
<dd><p>Turn Geo-redundant server backups on/off. This allows you to choose between locally redundant or geo-redundant backup storage in the General Purpose and Memory Optimized tiers. When the backups are stored in geo-redundant backup storage, they are not only stored within the region in which your server is hosted, but are also replicated to a paired data center. This provides better protection and ability to restore your server in a different region in the event of a disaster. This is not supported for the Basic tier.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.infrastructure_encryption_enabled">
<code class="sig-name descname">infrastructure_encryption_enabled</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.infrastructure_encryption_enabled" title="Permalink to this definition">¶</a></dt>
<dd><p>Whether or not infrastructure is encrypted for this server. Defaults to <code class="docutils literal notranslate"><span class="pre">false</span></code>. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.location">
<code class="sig-name descname">location</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.location" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the name of the MySQL Server. Changing this forces a new resource to be created. This needs to be globally unique within Azure.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.public_network_access_enabled">
<code class="sig-name descname">public_network_access_enabled</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.public_network_access_enabled" title="Permalink to this definition">¶</a></dt>
<dd><p>Whether or not public network access is allowed for this server. Defaults to <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.resource_group_name">
<code class="sig-name descname">resource_group_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.resource_group_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the resource group in which to create the MySQL Server. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.restore_point_in_time">
<code class="sig-name descname">restore_point_in_time</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.restore_point_in_time" title="Permalink to this definition">¶</a></dt>
<dd><p>When <code class="docutils literal notranslate"><span class="pre">create_mode</span></code> is <code class="docutils literal notranslate"><span class="pre">PointInTimeRestore</span></code>, specifies the point in time to restore from <code class="docutils literal notranslate"><span class="pre">creation_source_server_id</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.sku_name">
<code class="sig-name descname">sku_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.sku_name" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the SKU Name for this MySQL Server. The name of the SKU, follows the <code class="docutils literal notranslate"><span class="pre">tier</span></code> + <code class="docutils literal notranslate"><span class="pre">family</span></code> + <code class="docutils literal notranslate"><span class="pre">cores</span></code> pattern (e.g. <code class="docutils literal notranslate"><span class="pre">B_Gen4_1</span></code>, <code class="docutils literal notranslate"><span class="pre">GP_Gen5_8</span></code>). For more information see the <a class="reference external" href="https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#sku">product documentation</a>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.ssl_enforcement_enabled">
<code class="sig-name descname">ssl_enforcement_enabled</code><em class="property">: pulumi.Output[bool]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.ssl_enforcement_enabled" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies if SSL should be enforced on connections. Possible values are <code class="docutils literal notranslate"><span class="pre">true</span></code> and <code class="docutils literal notranslate"><span class="pre">false</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.ssl_minimal_tls_version_enforced">
<code class="sig-name descname">ssl_minimal_tls_version_enforced</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.ssl_minimal_tls_version_enforced" title="Permalink to this definition">¶</a></dt>
<dd><p>The minimum TLS version to support on the sever. Possible values are <code class="docutils literal notranslate"><span class="pre">TLSEnforcementDisabled</span></code>, <code class="docutils literal notranslate"><span class="pre">TLS1_0</span></code>, <code class="docutils literal notranslate"><span class="pre">TLS1_1</span></code>, and <code class="docutils literal notranslate"><span class="pre">TLS1_2</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">TLSEnforcementDisabled</span></code>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.storage_mb">
<code class="sig-name descname">storage_mb</code><em class="property">: pulumi.Output[float]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.storage_mb" title="Permalink to this definition">¶</a></dt>
<dd><p>Max storage allowed for a server. Possible values are between <code class="docutils literal notranslate"><span class="pre">5120</span></code> MB(5GB) and <code class="docutils literal notranslate"><span class="pre">1048576</span></code> MB(1TB) for the Basic SKU and between <code class="docutils literal notranslate"><span class="pre">5120</span></code> MB(5GB) and <code class="docutils literal notranslate"><span class="pre">4194304</span></code> MB(4TB) for General Purpose/Memory Optimized SKUs. For more information see the <a class="reference external" href="https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#StorageProfile">product documentation</a>.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.tags">
<code class="sig-name descname">tags</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.tags" title="Permalink to this definition">¶</a></dt>
<dd><p>A mapping of tags to assign to the resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.Server.version">
<code class="sig-name descname">version</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.Server.version" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the version of MySQL to use. Valid values are <code class="docutils literal notranslate"><span class="pre">5.6</span></code>, <code class="docutils literal notranslate"><span class="pre">5.7</span></code>, and <code class="docutils literal notranslate"><span class="pre">8.0</span></code>. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.mysql.Server.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">administrator_login</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">administrator_login_password</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">auto_grow_enabled</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">backup_retention_days</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">create_mode</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">creation_source_server_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">fqdn</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">geo_redundant_backup_enabled</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">infrastructure_encryption_enabled</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">location</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">public_network_access_enabled</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">restore_point_in_time</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">sku_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">ssl_enforcement</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">ssl_enforcement_enabled</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">ssl_minimal_tls_version_enforced</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">storage_mb</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">storage_profile</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">tags</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">version</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.Server.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing Server resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>administrator_login</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Administrator Login for the MySQL Server. Required when <code class="docutils literal notranslate"><span class="pre">create_mode</span></code> is <code class="docutils literal notranslate"><span class="pre">Default</span></code>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>administrator_login_password</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The Password associated with the <code class="docutils literal notranslate"><span class="pre">administrator_login</span></code> for the MySQL Server. Required when <code class="docutils literal notranslate"><span class="pre">create_mode</span></code> is <code class="docutils literal notranslate"><span class="pre">Default</span></code>.</p></li>
<li><p><strong>auto_grow_enabled</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Enable/Disable auto-growing of the storage. Storage auto-grow prevents your server from running out of storage and becoming read-only. If storage auto grow is enabled, the storage automatically grows without impacting the workload. The default value if not explicitly specified is <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p></li>
<li><p><strong>backup_retention_days</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – Backup retention days for the server, supported values are between <code class="docutils literal notranslate"><span class="pre">7</span></code> and <code class="docutils literal notranslate"><span class="pre">35</span></code> days.</p></li>
<li><p><strong>create_mode</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The creation mode. Can be used to restore or replicate existing servers. Possible values are <code class="docutils literal notranslate"><span class="pre">Default</span></code>, <code class="docutils literal notranslate"><span class="pre">Replica</span></code>, <code class="docutils literal notranslate"><span class="pre">GeoRestore</span></code>, and <code class="docutils literal notranslate"><span class="pre">PointInTimeRestore</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">Default</span></code>.</p></li>
<li><p><strong>creation_source_server_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – For creation modes other than <code class="docutils literal notranslate"><span class="pre">Default</span></code>, the source server ID to use.</p></li>
<li><p><strong>fqdn</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The FQDN of the MySQL Server.</p></li>
<li><p><strong>geo_redundant_backup_enabled</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Turn Geo-redundant server backups on/off. This allows you to choose between locally redundant or geo-redundant backup storage in the General Purpose and Memory Optimized tiers. When the backups are stored in geo-redundant backup storage, they are not only stored within the region in which your server is hosted, but are also replicated to a paired data center. This provides better protection and ability to restore your server in a different region in the event of a disaster. This is not supported for the Basic tier.</p></li>
<li><p><strong>infrastructure_encryption_enabled</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Whether or not infrastructure is encrypted for this server. Defaults to <code class="docutils literal notranslate"><span class="pre">false</span></code>. Changing this forces a new resource to be created.</p></li>
<li><p><strong>location</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the name of the MySQL Server. Changing this forces a new resource to be created. This needs to be globally unique within Azure.</p></li>
<li><p><strong>public_network_access_enabled</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Whether or not public network access is allowed for this server. Defaults to <code class="docutils literal notranslate"><span class="pre">true</span></code>.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group in which to create the MySQL Server. Changing this forces a new resource to be created.</p></li>
<li><p><strong>restore_point_in_time</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – When <code class="docutils literal notranslate"><span class="pre">create_mode</span></code> is <code class="docutils literal notranslate"><span class="pre">PointInTimeRestore</span></code>, specifies the point in time to restore from <code class="docutils literal notranslate"><span class="pre">creation_source_server_id</span></code>.</p></li>
<li><p><strong>sku_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – <p>Specifies the SKU Name for this MySQL Server. The name of the SKU, follows the <code class="docutils literal notranslate"><span class="pre">tier</span></code> + <code class="docutils literal notranslate"><span class="pre">family</span></code> + <code class="docutils literal notranslate"><span class="pre">cores</span></code> pattern (e.g. <code class="docutils literal notranslate"><span class="pre">B_Gen4_1</span></code>, <code class="docutils literal notranslate"><span class="pre">GP_Gen5_8</span></code>). For more information see the <a class="reference external" href="https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#sku">product documentation</a>.</p>
</p></li>
<li><p><strong>ssl_enforcement_enabled</strong> (<em>pulumi.Input</em><em>[</em><em>bool</em><em>]</em>) – Specifies if SSL should be enforced on connections. Possible values are <code class="docutils literal notranslate"><span class="pre">true</span></code> and <code class="docutils literal notranslate"><span class="pre">false</span></code>.</p></li>
<li><p><strong>ssl_minimal_tls_version_enforced</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The minimum TLS version to support on the sever. Possible values are <code class="docutils literal notranslate"><span class="pre">TLSEnforcementDisabled</span></code>, <code class="docutils literal notranslate"><span class="pre">TLS1_0</span></code>, <code class="docutils literal notranslate"><span class="pre">TLS1_1</span></code>, and <code class="docutils literal notranslate"><span class="pre">TLS1_2</span></code>. Defaults to <code class="docutils literal notranslate"><span class="pre">TLSEnforcementDisabled</span></code>.</p></li>
<li><p><strong>storage_mb</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – <p>Max storage allowed for a server. Possible values are between <code class="docutils literal notranslate"><span class="pre">5120</span></code> MB(5GB) and <code class="docutils literal notranslate"><span class="pre">1048576</span></code> MB(1TB) for the Basic SKU and between <code class="docutils literal notranslate"><span class="pre">5120</span></code> MB(5GB) and <code class="docutils literal notranslate"><span class="pre">4194304</span></code> MB(4TB) for General Purpose/Memory Optimized SKUs. For more information see the <a class="reference external" href="https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#StorageProfile">product documentation</a>.</p>
</p></li>
<li><p><strong>tags</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – A mapping of tags to assign to the resource.</p></li>
<li><p><strong>version</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Specifies the version of MySQL to use. Valid values are <code class="docutils literal notranslate"><span class="pre">5.6</span></code>, <code class="docutils literal notranslate"><span class="pre">5.7</span></code>, and <code class="docutils literal notranslate"><span class="pre">8.0</span></code>. Changing this forces a new resource to be created.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>storage_profile</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">autoGrow</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>)</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">backup_retention_days</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - Backup retention days for the server, supported values are between <code class="docutils literal notranslate"><span class="pre">7</span></code> and <code class="docutils literal notranslate"><span class="pre">35</span></code> days.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">geoRedundantBackup</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>)</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">storage_mb</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[float]</span></code>) - Max storage allowed for a server. Possible values are between <code class="docutils literal notranslate"><span class="pre">5120</span></code> MB(5GB) and <code class="docutils literal notranslate"><span class="pre">1048576</span></code> MB(1TB) for the Basic SKU and between <code class="docutils literal notranslate"><span class="pre">5120</span></code> MB(5GB) and <code class="docutils literal notranslate"><span class="pre">4194304</span></code> MB(4TB) for General Purpose/Memory Optimized SKUs. For more information see the <a class="reference external" href="https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#StorageProfile">product documentation</a>.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.mysql.Server.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.Server.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.mysql.Server.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.Server.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.mysql.VirtualNetworkRule">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_azure.mysql.</code><code class="sig-name descname">VirtualNetworkRule</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">server_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">subnet_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.VirtualNetworkRule" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a MySQL Virtual Network Rule.</p>
<blockquote>
<div><p><strong>NOTE:</strong> MySQL Virtual Network Rules <cite>can only be used with SKU Tiers of ``GeneralPurpose`</cite> or <code class="docutils literal notranslate"><span class="pre">MemoryOptimized</span></code> &lt;<a class="reference external" href="https://docs.microsoft.com/en-us/azure/mysql/concepts-data-access-and-security-vnet">https://docs.microsoft.com/en-us/azure/mysql/concepts-data-access-and-security-vnet</a>&gt;`_</p>
</div></blockquote>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_azure</span> <span class="k">as</span> <span class="nn">azure</span>

<span class="n">example_resource_group</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">core</span><span class="o">.</span><span class="n">ResourceGroup</span><span class="p">(</span><span class="s2">&quot;exampleResourceGroup&quot;</span><span class="p">,</span> <span class="n">location</span><span class="o">=</span><span class="s2">&quot;West Europe&quot;</span><span class="p">)</span>
<span class="n">example_virtual_network</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">network</span><span class="o">.</span><span class="n">VirtualNetwork</span><span class="p">(</span><span class="s2">&quot;exampleVirtualNetwork&quot;</span><span class="p">,</span>
    <span class="n">address_spaces</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;10.7.29.0/29&quot;</span><span class="p">],</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">)</span>
<span class="n">internal</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">network</span><span class="o">.</span><span class="n">Subnet</span><span class="p">(</span><span class="s2">&quot;internal&quot;</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">virtual_network_name</span><span class="o">=</span><span class="n">example_virtual_network</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">address_prefix</span><span class="o">=</span><span class="s2">&quot;10.7.29.0/29&quot;</span><span class="p">,</span>
    <span class="n">service_endpoints</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;Microsoft.Sql&quot;</span><span class="p">])</span>
<span class="n">example_server</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">mysql</span><span class="o">.</span><span class="n">Server</span><span class="p">(</span><span class="s2">&quot;exampleServer&quot;</span><span class="p">,</span>
    <span class="n">location</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">location</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">administrator_login</span><span class="o">=</span><span class="s2">&quot;mysqladminun&quot;</span><span class="p">,</span>
    <span class="n">administrator_login_password</span><span class="o">=</span><span class="s2">&quot;H@Sh1CoR3!&quot;</span><span class="p">,</span>
    <span class="n">version</span><span class="o">=</span><span class="s2">&quot;5.7&quot;</span><span class="p">,</span>
    <span class="n">ssl_enforcement</span><span class="o">=</span><span class="s2">&quot;Enabled&quot;</span><span class="p">,</span>
    <span class="n">sku_name</span><span class="o">=</span><span class="s2">&quot;GP_Gen5_2&quot;</span><span class="p">,</span>
    <span class="n">storage_profile</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;storage_mb&quot;</span><span class="p">:</span> <span class="mi">5120</span><span class="p">,</span>
        <span class="s2">&quot;backup_retention_days&quot;</span><span class="p">:</span> <span class="mi">7</span><span class="p">,</span>
        <span class="s2">&quot;geoRedundantBackup&quot;</span><span class="p">:</span> <span class="s2">&quot;Disabled&quot;</span><span class="p">,</span>
    <span class="p">})</span>
<span class="n">example_virtual_network_rule</span> <span class="o">=</span> <span class="n">azure</span><span class="o">.</span><span class="n">mysql</span><span class="o">.</span><span class="n">VirtualNetworkRule</span><span class="p">(</span><span class="s2">&quot;exampleVirtualNetworkRule&quot;</span><span class="p">,</span>
    <span class="n">resource_group_name</span><span class="o">=</span><span class="n">example_resource_group</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">server_name</span><span class="o">=</span><span class="n">example_server</span><span class="o">.</span><span class="n">name</span><span class="p">,</span>
    <span class="n">subnet_id</span><span class="o">=</span><span class="n">internal</span><span class="o">.</span><span class="n">id</span><span class="p">)</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the MySQL Virtual Network Rule. Cannot be empty and must only contain alphanumeric characters and hyphens. Cannot start with a number, and cannot start or end with a hyphen. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group where the MySQL server resides. Changing this forces a new resource to be created.</p></li>
<li><p><strong>server_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the SQL Server to which this MySQL virtual network rule will be applied to. Changing this forces a new resource to be created.</p></li>
<li><p><strong>subnet_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID of the subnet that the MySQL server will be connected to.</p></li>
</ul>
</dd>
</dl>
<dl class="py attribute">
<dt id="pulumi_azure.mysql.VirtualNetworkRule.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.VirtualNetworkRule.name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the MySQL Virtual Network Rule. Cannot be empty and must only contain alphanumeric characters and hyphens. Cannot start with a number, and cannot start or end with a hyphen. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.VirtualNetworkRule.resource_group_name">
<code class="sig-name descname">resource_group_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.VirtualNetworkRule.resource_group_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the resource group where the MySQL server resides. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.VirtualNetworkRule.server_name">
<code class="sig-name descname">server_name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.VirtualNetworkRule.server_name" title="Permalink to this definition">¶</a></dt>
<dd><p>The name of the SQL Server to which this MySQL virtual network rule will be applied to. Changing this forces a new resource to be created.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_azure.mysql.VirtualNetworkRule.subnet_id">
<code class="sig-name descname">subnet_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_azure.mysql.VirtualNetworkRule.subnet_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID of the subnet that the MySQL server will be connected to.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.mysql.VirtualNetworkRule.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">resource_group_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">server_name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">subnet_id</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.VirtualNetworkRule.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing VirtualNetworkRule resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the MySQL Virtual Network Rule. Cannot be empty and must only contain alphanumeric characters and hyphens. Cannot start with a number, and cannot start or end with a hyphen. Changing this forces a new resource to be created.</p></li>
<li><p><strong>resource_group_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the resource group where the MySQL server resides. Changing this forces a new resource to be created.</p></li>
<li><p><strong>server_name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The name of the SQL Server to which this MySQL virtual network rule will be applied to. Changing this forces a new resource to be created.</p></li>
<li><p><strong>subnet_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID of the subnet that the MySQL server will be connected to.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<dl class="py method">
<dt id="pulumi_azure.mysql.VirtualNetworkRule.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.VirtualNetworkRule.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_azure.mysql.VirtualNetworkRule.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_azure.mysql.VirtualNetworkRule.translate_input_property" title="Permalink to this definition">¶</a></dt>
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

</div>
