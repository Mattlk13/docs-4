---
title: Module database
title_tag: Module database | Package pulumi_openstack | Python SDK
linktitle: database
notitle: true
---

<div class="section" id="database">
<h1>database<a class="headerlink" href="#database" title="Permalink to this headline">¶</a></h1>
<blockquote>
<div><p>This provider is a derived work of the <a class="reference external" href="https://github.com/terraform-providers/terraform-provider-openstack">Terraform Provider</a> distributed under
<a class="reference external" href="https://www.mozilla.org/en-US/MPL/2.0/">MPL 2.0</a>. If you encounter a bug or missing feature, first check the
<a class="reference external" href="https://github.com/pulumi/pulumi-openstack/issues">pulumi/pulumi-openstack repo</a>; however, if that doesn’t turn up
anything, please consult the source <a class="reference external" href="https://github.com/terraform-providers/terraform-provider-openstack/issues">terraform-providers/terraform-provider-openstack repo</a>.</p>
</div></blockquote>
<span class="target" id="module-pulumi_openstack.database"></span><dl class="py class">
<dt id="pulumi_openstack.database.Configuration">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_openstack.database.</code><code class="sig-name descname">Configuration</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">configurations</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">datastore</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">description</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">region</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.Configuration" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a V1 DB configuration resource within OpenStack.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_openstack</span> <span class="k">as</span> <span class="nn">openstack</span>

<span class="n">test</span> <span class="o">=</span> <span class="n">openstack</span><span class="o">.</span><span class="n">database</span><span class="o">.</span><span class="n">Configuration</span><span class="p">(</span><span class="s2">&quot;test&quot;</span><span class="p">,</span>
    <span class="n">configurations</span><span class="o">=</span><span class="p">[{</span>
        <span class="s2">&quot;name&quot;</span><span class="p">:</span> <span class="s2">&quot;max_connections&quot;</span><span class="p">,</span>
        <span class="s2">&quot;value&quot;</span><span class="p">:</span> <span class="mi">200</span><span class="p">,</span>
    <span class="p">}],</span>
    <span class="n">datastore</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;type&quot;</span><span class="p">:</span> <span class="s2">&quot;mysql&quot;</span><span class="p">,</span>
        <span class="s2">&quot;version&quot;</span><span class="p">:</span> <span class="s2">&quot;mysql-5.7&quot;</span><span class="p">,</span>
    <span class="p">},</span>
    <span class="n">description</span><span class="o">=</span><span class="s2">&quot;description&quot;</span><span class="p">)</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>configurations</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – An array of configuration parameter name and value. Can be specified multiple times. The configuration object structure is documented below.</p></li>
<li><p><strong>datastore</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – An array of database engine type and version. The datastore
object structure is documented below. Changing this creates resource.</p></li>
<li><p><strong>description</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Description of the resource.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Configuration parameter name. Changing this creates a new resource.</p></li>
<li><p><strong>region</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The region in which to create the db instance. Changing this
creates a new instance.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>configurations</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Configuration parameter name. Changing this creates a new resource.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">value</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Configuration parameter value. Changing this creates a new resource.</p></li>
</ul>
<p>The <strong>datastore</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Database engine type to be used with this configuration. Changing this creates a new resource.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">version</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Version of database engine type to be used with this configuration. Changing this creates a new resource.</p></li>
</ul>
<dl class="py attribute">
<dt id="pulumi_openstack.database.Configuration.configurations">
<code class="sig-name descname">configurations</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Configuration.configurations" title="Permalink to this definition">¶</a></dt>
<dd><p>An array of configuration parameter name and value. Can be specified multiple times. The configuration object structure is documented below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Configuration parameter name. Changing this creates a new resource.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">value</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Configuration parameter value. Changing this creates a new resource.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Configuration.datastore">
<code class="sig-name descname">datastore</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Configuration.datastore" title="Permalink to this definition">¶</a></dt>
<dd><p>An array of database engine type and version. The datastore
object structure is documented below. Changing this creates resource.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Database engine type to be used with this configuration. Changing this creates a new resource.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">version</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Version of database engine type to be used with this configuration. Changing this creates a new resource.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Configuration.description">
<code class="sig-name descname">description</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Configuration.description" title="Permalink to this definition">¶</a></dt>
<dd><p>Description of the resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Configuration.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Configuration.name" title="Permalink to this definition">¶</a></dt>
<dd><p>Configuration parameter name. Changing this creates a new resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Configuration.region">
<code class="sig-name descname">region</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Configuration.region" title="Permalink to this definition">¶</a></dt>
<dd><p>The region in which to create the db instance. Changing this
creates a new instance.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_openstack.database.Configuration.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">configurations</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">datastore</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">description</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">region</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.Configuration.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing Configuration resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>configurations</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – An array of configuration parameter name and value. Can be specified multiple times. The configuration object structure is documented below.</p></li>
<li><p><strong>datastore</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – An array of database engine type and version. The datastore
object structure is documented below. Changing this creates resource.</p></li>
<li><p><strong>description</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Description of the resource.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Configuration parameter name. Changing this creates a new resource.</p></li>
<li><p><strong>region</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The region in which to create the db instance. Changing this
creates a new instance.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>configurations</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Configuration parameter name. Changing this creates a new resource.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">value</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Configuration parameter value. Changing this creates a new resource.</p></li>
</ul>
<p>The <strong>datastore</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Database engine type to be used with this configuration. Changing this creates a new resource.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">version</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Version of database engine type to be used with this configuration. Changing this creates a new resource.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_openstack.database.Configuration.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.Configuration.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_openstack.database.Configuration.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.Configuration.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_openstack.database.Database">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_openstack.database.</code><code class="sig-name descname">Database</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">instance_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">region</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.Database" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a V1 DB database resource within OpenStack.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_openstack</span> <span class="k">as</span> <span class="nn">openstack</span>

<span class="n">mydb</span> <span class="o">=</span> <span class="n">openstack</span><span class="o">.</span><span class="n">database</span><span class="o">.</span><span class="n">Database</span><span class="p">(</span><span class="s2">&quot;mydb&quot;</span><span class="p">,</span> <span class="n">instance_id</span><span class="o">=</span><span class="n">openstack_db_instance_v1</span><span class="p">[</span><span class="s2">&quot;basic&quot;</span><span class="p">][</span><span class="s2">&quot;id&quot;</span><span class="p">])</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>instance_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID for the database instance.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – A unique name for the resource.</p></li>
<li><p><strong>region</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Openstack region resource is created in.</p></li>
</ul>
</dd>
</dl>
<dl class="py attribute">
<dt id="pulumi_openstack.database.Database.instance_id">
<code class="sig-name descname">instance_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Database.instance_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The ID for the database instance.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Database.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Database.name" title="Permalink to this definition">¶</a></dt>
<dd><p>A unique name for the resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Database.region">
<code class="sig-name descname">region</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Database.region" title="Permalink to this definition">¶</a></dt>
<dd><p>Openstack region resource is created in.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_openstack.database.Database.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">instance_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">region</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.Database.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing Database resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>instance_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The ID for the database instance.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – A unique name for the resource.</p></li>
<li><p><strong>region</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Openstack region resource is created in.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<dl class="py method">
<dt id="pulumi_openstack.database.Database.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.Database.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_openstack.database.Database.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.Database.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_openstack.database.Instance">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_openstack.database.</code><code class="sig-name descname">Instance</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">configuration_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">databases</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">datastore</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">flavor_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">networks</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">region</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">size</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">users</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.Instance" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a V1 DB instance resource within OpenStack.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_openstack</span> <span class="k">as</span> <span class="nn">openstack</span>

<span class="n">test</span> <span class="o">=</span> <span class="n">openstack</span><span class="o">.</span><span class="n">database</span><span class="o">.</span><span class="n">Instance</span><span class="p">(</span><span class="s2">&quot;test&quot;</span><span class="p">,</span>
    <span class="n">datastore</span><span class="o">=</span><span class="p">{</span>
        <span class="s2">&quot;type&quot;</span><span class="p">:</span> <span class="s2">&quot;mysql&quot;</span><span class="p">,</span>
        <span class="s2">&quot;version&quot;</span><span class="p">:</span> <span class="s2">&quot;mysql-5.7&quot;</span><span class="p">,</span>
    <span class="p">},</span>
    <span class="n">flavor_id</span><span class="o">=</span><span class="s2">&quot;31792d21-c355-4587-9290-56c1ed0ca376&quot;</span><span class="p">,</span>
    <span class="n">networks</span><span class="o">=</span><span class="p">[{</span>
        <span class="s2">&quot;uuid&quot;</span><span class="p">:</span> <span class="s2">&quot;c0612505-caf2-4fb0-b7cb-56a0240a2b12&quot;</span><span class="p">,</span>
    <span class="p">}],</span>
    <span class="n">region</span><span class="o">=</span><span class="s2">&quot;region-test&quot;</span><span class="p">,</span>
    <span class="n">size</span><span class="o">=</span><span class="mi">8</span><span class="p">)</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>configuration_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Configuration ID to be attached to the instance. Database instance
will be rebooted when configuration is detached.</p></li>
<li><p><strong>databases</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – An array of database name, charset and collate. The database
object structure is documented below.</p></li>
<li><p><strong>datastore</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – An array of database engine type and version. The datastore
object structure is documented below. Changing this creates a new instance.</p></li>
<li><p><strong>flavor_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The flavor ID of the desired flavor for the instance.
Changing this creates new instance.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Database to be created on new instance. Changing this creates a
new instance.</p></li>
<li><p><strong>networks</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – An array of one or more networks to attach to the
instance. The network object structure is documented below. Changing this
creates a new instance.</p></li>
<li><p><strong>region</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The region in which to create the db instance. Changing this
creates a new instance.</p></li>
<li><p><strong>size</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – Specifies the volume size in GB. Changing this creates new instance.</p></li>
<li><p><strong>users</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – An array of username, password, host and databases. The user
object structure is documented below.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>databases</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">charset</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Database character set. Changing this creates a
new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">collate</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Database collation. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Database to be created on new instance. Changing this creates a
new instance.</p></li>
</ul>
<p>The <strong>datastore</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Database engine type to be used in new instance. Changing this
creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">version</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Version of database engine type to be used in new instance.
Changing this creates a new instance.</p></li>
</ul>
<p>The <strong>networks</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">fixedIpV4</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Specifies a fixed IPv4 address to be used on this
network. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">fixedIpV6</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Specifies a fixed IPv6 address to be used on this
network. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">port</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The port UUID of a
network to attach to the instance. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">uuid</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The network UUID to
attach to the instance. Changing this creates a new instance.</p></li>
</ul>
<p>The <strong>users</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">databases</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[list]</span></code>) - A list of databases that user will have access to. If not specified, 
user has access to all databases on th einstance. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">host</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - An ip address or % sign indicating what ip addresses can connect with
this user credentials. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Database to be created on new instance. Changing this creates a
new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">password</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - User’s password. Changing this creates a
new instance.</p></li>
</ul>
<dl class="py attribute">
<dt id="pulumi_openstack.database.Instance.configuration_id">
<code class="sig-name descname">configuration_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Instance.configuration_id" title="Permalink to this definition">¶</a></dt>
<dd><p>Configuration ID to be attached to the instance. Database instance
will be rebooted when configuration is detached.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Instance.databases">
<code class="sig-name descname">databases</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Instance.databases" title="Permalink to this definition">¶</a></dt>
<dd><p>An array of database name, charset and collate. The database
object structure is documented below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">charset</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Database character set. Changing this creates a
new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">collate</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Database collation. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Database to be created on new instance. Changing this creates a
new instance.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Instance.datastore">
<code class="sig-name descname">datastore</code><em class="property">: pulumi.Output[dict]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Instance.datastore" title="Permalink to this definition">¶</a></dt>
<dd><p>An array of database engine type and version. The datastore
object structure is documented below. Changing this creates a new instance.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Database engine type to be used in new instance. Changing this
creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">version</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Version of database engine type to be used in new instance.
Changing this creates a new instance.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Instance.flavor_id">
<code class="sig-name descname">flavor_id</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Instance.flavor_id" title="Permalink to this definition">¶</a></dt>
<dd><p>The flavor ID of the desired flavor for the instance.
Changing this creates new instance.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Instance.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Instance.name" title="Permalink to this definition">¶</a></dt>
<dd><p>Database to be created on new instance. Changing this creates a
new instance.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Instance.networks">
<code class="sig-name descname">networks</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Instance.networks" title="Permalink to this definition">¶</a></dt>
<dd><p>An array of one or more networks to attach to the
instance. The network object structure is documented below. Changing this
creates a new instance.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">fixedIpV4</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Specifies a fixed IPv4 address to be used on this
network. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">fixedIpV6</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Specifies a fixed IPv6 address to be used on this
network. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">port</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The port UUID of a
network to attach to the instance. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">uuid</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - The network UUID to
attach to the instance. Changing this creates a new instance.</p></li>
</ul>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Instance.region">
<code class="sig-name descname">region</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Instance.region" title="Permalink to this definition">¶</a></dt>
<dd><p>The region in which to create the db instance. Changing this
creates a new instance.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Instance.size">
<code class="sig-name descname">size</code><em class="property">: pulumi.Output[float]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Instance.size" title="Permalink to this definition">¶</a></dt>
<dd><p>Specifies the volume size in GB. Changing this creates new instance.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.Instance.users">
<code class="sig-name descname">users</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.Instance.users" title="Permalink to this definition">¶</a></dt>
<dd><p>An array of username, password, host and databases. The user
object structure is documented below.</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">databases</span></code> (<code class="docutils literal notranslate"><span class="pre">list</span></code>) - A list of databases that user will have access to. If not specified, 
user has access to all databases on th einstance. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">host</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - An ip address or % sign indicating what ip addresses can connect with
this user credentials. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - Database to be created on new instance. Changing this creates a
new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">password</span></code> (<code class="docutils literal notranslate"><span class="pre">str</span></code>) - User’s password. Changing this creates a
new instance.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_openstack.database.Instance.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">configuration_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">databases</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">datastore</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">flavor_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">networks</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">region</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">size</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">users</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.Instance.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing Instance resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>configuration_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Configuration ID to be attached to the instance. Database instance
will be rebooted when configuration is detached.</p></li>
<li><p><strong>databases</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – An array of database name, charset and collate. The database
object structure is documented below.</p></li>
<li><p><strong>datastore</strong> (<em>pulumi.Input</em><em>[</em><em>dict</em><em>]</em>) – An array of database engine type and version. The datastore
object structure is documented below. Changing this creates a new instance.</p></li>
<li><p><strong>flavor_id</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The flavor ID of the desired flavor for the instance.
Changing this creates new instance.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Database to be created on new instance. Changing this creates a
new instance.</p></li>
<li><p><strong>networks</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – An array of one or more networks to attach to the
instance. The network object structure is documented below. Changing this
creates a new instance.</p></li>
<li><p><strong>region</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – The region in which to create the db instance. Changing this
creates a new instance.</p></li>
<li><p><strong>size</strong> (<em>pulumi.Input</em><em>[</em><em>float</em><em>]</em>) – Specifies the volume size in GB. Changing this creates new instance.</p></li>
<li><p><strong>users</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – An array of username, password, host and databases. The user
object structure is documented below.</p></li>
</ul>
</dd>
</dl>
<p>The <strong>databases</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">charset</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Database character set. Changing this creates a
new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">collate</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Database collation. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Database to be created on new instance. Changing this creates a
new instance.</p></li>
</ul>
<p>The <strong>datastore</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">type</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Database engine type to be used in new instance. Changing this
creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">version</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Version of database engine type to be used in new instance.
Changing this creates a new instance.</p></li>
</ul>
<p>The <strong>networks</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">fixedIpV4</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Specifies a fixed IPv4 address to be used on this
network. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">fixedIpV6</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Specifies a fixed IPv6 address to be used on this
network. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">port</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The port UUID of a
network to attach to the instance. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">uuid</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - The network UUID to
attach to the instance. Changing this creates a new instance.</p></li>
</ul>
<p>The <strong>users</strong> object supports the following:</p>
<ul class="simple">
<li><p><code class="docutils literal notranslate"><span class="pre">databases</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[list]</span></code>) - A list of databases that user will have access to. If not specified, 
user has access to all databases on th einstance. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">host</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - An ip address or % sign indicating what ip addresses can connect with
this user credentials. Changing this creates a new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">name</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - Database to be created on new instance. Changing this creates a
new instance.</p></li>
<li><p><code class="docutils literal notranslate"><span class="pre">password</span></code> (<code class="docutils literal notranslate"><span class="pre">pulumi.Input[str]</span></code>) - User’s password. Changing this creates a
new instance.</p></li>
</ul>
</dd></dl>

<dl class="py method">
<dt id="pulumi_openstack.database.Instance.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.Instance.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_openstack.database.Instance.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.Instance.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_openstack.database.User">
<em class="property">class </em><code class="sig-prename descclassname">pulumi_openstack.database.</code><code class="sig-name descname">User</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">databases</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">host</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">instance_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">password</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">region</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__props__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__name__</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">__opts__</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.User" title="Permalink to this definition">¶</a></dt>
<dd><p>Manages a V1 DB user resource within OpenStack.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">pulumi</span>
<span class="kn">import</span> <span class="nn">pulumi_openstack</span> <span class="k">as</span> <span class="nn">openstack</span>

<span class="n">basic</span> <span class="o">=</span> <span class="n">openstack</span><span class="o">.</span><span class="n">database</span><span class="o">.</span><span class="n">User</span><span class="p">(</span><span class="s2">&quot;basic&quot;</span><span class="p">,</span>
    <span class="n">databases</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;testdb&quot;</span><span class="p">],</span>
    <span class="n">instance</span><span class="o">=</span><span class="n">openstack_db_instance_v1</span><span class="p">[</span><span class="s2">&quot;basic&quot;</span><span class="p">][</span><span class="s2">&quot;id&quot;</span><span class="p">],</span>
    <span class="n">password</span><span class="o">=</span><span class="s2">&quot;password&quot;</span><span class="p">)</span>
</pre></div>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The name of the resource.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>databases</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – A list of database user should have access to.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – A unique name for the resource.</p></li>
<li><p><strong>password</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – User’s password.</p></li>
<li><p><strong>region</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Openstack region resource is created in.</p></li>
</ul>
</dd>
</dl>
<dl class="py attribute">
<dt id="pulumi_openstack.database.User.databases">
<code class="sig-name descname">databases</code><em class="property">: pulumi.Output[list]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.User.databases" title="Permalink to this definition">¶</a></dt>
<dd><p>A list of database user should have access to.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.User.name">
<code class="sig-name descname">name</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.User.name" title="Permalink to this definition">¶</a></dt>
<dd><p>A unique name for the resource.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.User.password">
<code class="sig-name descname">password</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.User.password" title="Permalink to this definition">¶</a></dt>
<dd><p>User’s password.</p>
</dd></dl>

<dl class="py attribute">
<dt id="pulumi_openstack.database.User.region">
<code class="sig-name descname">region</code><em class="property">: pulumi.Output[str]</em><em class="property"> = None</em><a class="headerlink" href="#pulumi_openstack.database.User.region" title="Permalink to this definition">¶</a></dt>
<dd><p>Openstack region resource is created in.</p>
</dd></dl>

<dl class="py method">
<dt id="pulumi_openstack.database.User.get">
<em class="property">static </em><code class="sig-name descname">get</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">resource_name</span></em>, <em class="sig-param"><span class="n">id</span></em>, <em class="sig-param"><span class="n">opts</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">databases</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">host</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">instance_id</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">name</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">password</span><span class="o">=</span><span class="default_value">None</span></em>, <em class="sig-param"><span class="n">region</span><span class="o">=</span><span class="default_value">None</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.User.get" title="Permalink to this definition">¶</a></dt>
<dd><p>Get an existing User resource’s state with the given name, id, and optional extra
properties used to qualify the lookup.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters</dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>resource_name</strong> (<em>str</em>) – The unique name of the resulting resource.</p></li>
<li><p><strong>id</strong> (<em>str</em>) – The unique provider ID of the resource to lookup.</p></li>
<li><p><strong>opts</strong> (<a class="reference internal" href="../../pulumi/#pulumi.ResourceOptions" title="pulumi.ResourceOptions"><em>pulumi.ResourceOptions</em></a>) – Options for the resource.</p></li>
<li><p><strong>databases</strong> (<em>pulumi.Input</em><em>[</em><em>list</em><em>]</em>) – A list of database user should have access to.</p></li>
<li><p><strong>name</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – A unique name for the resource.</p></li>
<li><p><strong>password</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – User’s password.</p></li>
<li><p><strong>region</strong> (<em>pulumi.Input</em><em>[</em><em>str</em><em>]</em>) – Openstack region resource is created in.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<dl class="py method">
<dt id="pulumi_openstack.database.User.translate_output_property">
<code class="sig-name descname">translate_output_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.User.translate_output_property" title="Permalink to this definition">¶</a></dt>
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
<dt id="pulumi_openstack.database.User.translate_input_property">
<code class="sig-name descname">translate_input_property</code><span class="sig-paren">(</span><em class="sig-param"><span class="n">prop</span></em><span class="sig-paren">)</span><a class="headerlink" href="#pulumi_openstack.database.User.translate_input_property" title="Permalink to this definition">¶</a></dt>
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
