"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75170],{845859:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-73bd1490","path":"/guide/configuration/devices-groups.html","title":"Devices and Groups","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"excerpt":"","headers":[{"level":2,"title":"Common device options","slug":"common-device-options","link":"#common-device-options","children":[]},{"level":2,"title":"Specific device options","slug":"specific-device-options","link":"#specific-device-options","children":[]},{"level":2,"title":"Default values","slug":"default-values","link":"#default-values","children":[]},{"level":2,"title":"Groups","slug":"groups","link":"#groups","children":[]},{"level":2,"title":"Extract config to separate files","slug":"extract-config-to-separate-files","link":"#extract-config-to-separate-files","children":[]}],"git":{"updatedTime":1681542817000},"filePathRelative":"guide/configuration/devices-groups.md"}')},319061:(e,n,s)=>{s.r(n),s.d(n,{default:()=>x});var a=s(166252);const t=(0,a.uE)('<h1 id="devices-and-groups" tabindex="-1"><a class="header-anchor" href="#devices-and-groups" aria-hidden="true">#</a> Devices and Groups</h1><p>Zigbee2MQTT also stores the definitions of Devices and Groups in the <code>configuration.yml</code>.</p><p>Most options are optional, only the IEEE address (or MAC) as the <code>key</code> and a <code>friendly_name</code> are required.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">devices</span><span class="token punctuation">:</span>\n   <span class="token comment"># First device</span>\n  <span class="token key atrule">&#39;0x00158d0001d82999&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_occupancy_sensor&#39;</span>\n    <span class="token key atrule">retain</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n    <span class="token key atrule">disabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n    <span class="token key atrule">qos</span><span class="token punctuation">:</span> <span class="token number">1</span>\n    <span class="token key atrule">debounce</span><span class="token punctuation">:</span> <span class="token number">0.5</span>\n    <span class="token key atrule">debounce_ignore</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> action\n      <span class="token punctuation">-</span> brightness\n    <span class="token comment"># Set `homeassistant: null` to skip discovery for this device</span>\n    <span class="token key atrule">homeassistant</span><span class="token punctuation">:</span>\n      <span class="token comment"># Applied to all discovered entities.</span>\n      <span class="token key atrule">expire_after</span><span class="token punctuation">:</span> <span class="token number">30</span>\n      <span class="token comment"># Only applied to discovered temperature sensor.</span>\n      <span class="token key atrule">temperature</span><span class="token punctuation">:</span>\n        <span class="token key atrule">icon</span><span class="token punctuation">:</span> mdi<span class="token punctuation">:</span>oil<span class="token punctuation">-</span>temperature\n        <span class="token comment"># Omit values by setting them to null, e.g. don&#39;t send device_class</span>\n        <span class="token key atrule">device_class</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n    <span class="token comment"># Device type specific examples</span>\n    <span class="token key atrule">occupancy_timeout</span><span class="token punctuation">:</span> <span class="token number">120</span>\n    <span class="token key atrule">no_occupancy_since</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">]</span>\n  <span class="token comment"># Another device</span>\n  <span class="token key atrule">&#39;0x000d6ffffee405eb&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;Kitchen bulb&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="common-device-options" tabindex="-1"><a class="header-anchor" href="#common-device-options" aria-hidden="true">#</a> Common device options</h2><p>Every Zigbee Device supports the following list of options.</p><p><strong><code>friendly_name</code></strong><br> Used in the MQTT topic of a device. By default, this is the device ID (e.g. <code>0x00128d0001d9e1d2</code>).</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can use the <code>/</code> separator in <code>friendly_name</code> to structure devices. For example, using a <code>friendly_name</code> like <code>kitchen/floor_light</code> would result in a corresponding MQTT structure with <code>kitchen</code> as folder containing <code>floor_light</code> in MQTT Explorer.</p></div>',8),i={class:"custom-container warning"},o=(0,a._)("p",{class:"custom-container-title"},"WARNING",-1),c=(0,a._)("code",null,"friendly_name",-1),l=(0,a._)("strong",null,"NOT",-1),d=(0,a._)("code",null,"/",-1),p=(0,a._)("code",null,"/",-1),r={href:"https://github.com/Koenkk/zigbee2mqtt/blob/master/lib/util/utils.ts#L30",target:"_blank",rel:"noopener noreferrer"},u=(0,a._)("code",null,"/left",-1),m=(0,a._)("code",null,"/",-1),v=(0,a._)("code",null,"/4",-1),h=(0,a.uE)("<p><strong><code>description</code></strong><br> Description of this device, e.g. <code>This device is in the kitchen</code>, will be shown in the frontend.</p><p><strong><code>retain</code></strong><br> Retain MQTT messages of this device (default <code>false</code>).</p><p><strong><code>disabled</code></strong><br> Disables the device. This <strong>does not</strong> prevent the device from communicating in the Zigbee network. E.g. when messages are received from this device, Zigbee2MQTT will still publish them. This feature is useful for devices which will be disconnected from the Zigbee network for a longer time (like Christmas lights). Disabling a device does the following:</p><ul><li>The availability feature will not try to ping it</li><li>The device is always marked as <code>unavailable</code> in Home Assistant</li><li>It will not be configured on Zigbee2MQTT startup (required for some devices in order to start working)</li><li>It will be excluded from network scans (network map)</li><li>It will be excluded from optimistic group state updates</li></ul><p><strong><code>retention</code></strong><br> Sets the MQTT Message Expiry in seconds e.g. <code>retention: 900</code> = 15 minutes (default: not enabled). Make sure to set <code>mqtt.version</code> to <code>5</code> (see <code>mqtt</code> configuration above)</p>",5),b=(0,a._)("strong",null,[(0,a._)("code",null,"qos")],-1),k=(0,a._)("br",null,null,-1),g={href:"https://www.npmjs.com/package/mqtt#about-qos",target:"_blank",rel:"noopener noreferrer"},f=(0,a.uE)('<p><strong><code>homeassistant</code></strong><br> Allows overriding the values of the Home Assistant discovery payload. See example below.</p><p><strong><code>debounce</code></strong><br> Debounces messages of this device. When setting e.g. <code>debounce: 1</code> and a message from a device is received, Zigbee2MQTT will not immediately publish this message. But it will combine it with other messages that are received max 1 seconds apart from each other. So there needs to be &quot;N second of silence&quot; from the device before the combined message is sent out.</p><p>For example <code>debounce: 5</code> means that there needs to be &quot;5 seconds of silence&quot; from the device, before combined messages is sent out.</p><p>This is handy for e.g. the <code>WSDCGQ11LM</code> which publishes humidity, temperature and pressure at the same time but as 3 different messages.</p><p>Don&#39;t configure debounce to be higher that sensors update interval as that would cause all the messages to be debouncer and messages won&#39;t be sent out at all.</p><p><strong><code>debounce_ignore</code></strong><br> Protects unique payload values of specified payload properties from overriding within debounce time. When setting e.g. <code>debounce: 1</code> and <code>debounce_ignore: - action</code> every payload with unique <code>action</code> value will be published. This is handy for e.g. the <code>E1744</code> which publishes multiple messages in short time period after one turn and <code>debounce</code> option without <code>debounce_ignore</code> publishes only last payload with action <code>rotate_stop</code>. On the other hand <code>debounce: 1</code> with <code>debounce_ignore: - action</code> will publish all unique action messages, at least two ( e.g. <code>action: rotate_left</code> and <code>action: rotate_stop</code>)</p><p><strong><code>retrieve_state</code></strong><br> (DEPRECATED) Retrieves the state after setting it. Should only be enabled when the reporting feature does not work for this device.</p><p><strong><code>filtered_attributes</code></strong><br> Allows preventing certain attributes from being published. When a device would e.g. publish <code>{&quot;temperature&quot;: 10, &quot;battery&quot;: 20}</code> and you set <code>filtered_attributes: [&quot;battery&quot;]</code> it will publish <code>{&quot;temperature&quot;: 10}</code>.</p><p><strong><code>filtered_cache</code></strong> Allows preventing certain attributes from ending up in the cache. This prevents attributes from being published when the value did not change.</p><p><strong><code>optimistic</code></strong><br> Publish optimistic state after set, e.g. when a brightness change command succeeds Zigbee2MQTT assumes the brightness of the device changed and will publish this (default <code>true</code>).</p><p><strong><code>filtered_optimistic</code></strong><br> Same as the <code>filtered_attributes</code> option but only applies to the optimistic published attributes. Has no effect when <code>optimistic: false</code> is set. Example: <code>filtered_optimistic: [&quot;color_mode&quot;, &quot;color&quot;]</code>.</p><h2 id="specific-device-options" tabindex="-1"><a class="header-anchor" href="#specific-device-options" aria-hidden="true">#</a> Specific device options</h2>',12),y=(0,a.uE)('<p>In the above example <code>occupancy_timeout</code> and <code>no_occupancy_since</code> are device specific options.</p><h2 id="default-values" tabindex="-1"><a class="header-anchor" href="#default-values" aria-hidden="true">#</a> Default values</h2><p>You can set default values which are applied to all devices if the devices does not explicitly set the value in the device block. You can also set defaults for device-specific options.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">device_options</span><span class="token punctuation">:</span>\n  <span class="token key atrule">retain</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token key atrule">occupancy_timeout</span><span class="token punctuation">:</span> <span class="token number">120</span>\n  <span class="token key atrule">no_occupancy_since</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">600</span> <span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="groups" tabindex="-1"><a class="header-anchor" href="#groups" aria-hidden="true">#</a> Groups</h2>',5),_=(0,a.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">groups</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;1&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> Kitchen lights\n    <span class="token comment"># Optional: Retain messages (true/false) (default: false)</span>\n    <span class="token key atrule">retain</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n    <span class="token comment"># Optional: Default transition to be used when e.g. changing brightness (in seconds) (default: 0)</span>\n    <span class="token key atrule">transition</span><span class="token punctuation">:</span> <span class="token number">2</span>\n    <span class="token comment"># Optional: Change group state when one of the devices in it changes state, see &#39;State changes&#39; below (default: true)</span>\n    <span class="token key atrule">optimistic</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n    <span class="token comment"># Optional: Devices of this group,</span>\n    <span class="token comment"># Note: This can be the ieeeAddr of the device or the friendly_name (default: empty)</span>\n    <span class="token key atrule">devices</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token number">0x84fd27fffe4082ca</span>\n      <span class="token punctuation">-</span> <span class="token number">0x000b3cfffef8ed66</span>\n      <span class="token comment"># Only add specific endpoint to the group</span>\n      <span class="token punctuation">-</span> 0x000d6ffffee405eb/1\n      <span class="token punctuation">-</span> <span class="token number">0x001788010818fc75</span>\n      <span class="token punctuation">-</span> some_device_friendly_name\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The Group-key has to be unique and a quoted integer.</p></div><h2 id="extract-config-to-separate-files" tabindex="-1"><a class="header-anchor" href="#extract-config-to-separate-files" aria-hidden="true">#</a> Extract config to separate files</h2><p>Usually <code>devices</code> and <code>groups</code> are specified as objects within the <code>configuration.yaml</code> but it is also possible to extract the configuration into separate files.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Define the files which contains the configs </span>\n<span class="token key atrule">devices</span><span class="token punctuation">:</span> devices.yaml\n<span class="token key atrule">groups</span><span class="token punctuation">:</span> groups.yaml\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># devices.yaml </span>\n<span class="token key atrule">&#39;0x00158d0001d82999&#39;</span><span class="token punctuation">:</span>\n  <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_occupancy_sensor&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># groups.yaml</span>\n<span class="token key atrule">&#39;1&#39;</span><span class="token punctuation">:</span>\n  <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> group_1\n  <span class="token key atrule">devices</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token number">0x00158d0001d82999</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',7),w={},x=(0,s(983744).Z)(w,[["render",function(e,n){const s=(0,a.up)("ExternalLinkIcon"),w=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[t,(0,a._)("div",i,[o,(0,a._)("p",null,[(0,a.Uk)("Note that a "),c,(0,a.Uk)(" is "),l,(0,a.Uk)(" allowed to end with "),d,(0,a.Uk)(", "),p,(0,a.Uk)(" + one of the possible "),(0,a._)("a",r,[(0,a.Uk)("endpoint names"),(0,a.Wm)(s)]),(0,a.Uk)(" (e.g. "),u,(0,a.Uk)(") or "),m,(0,a.Uk)(" + a number (e.g. "),v,(0,a.Uk)(").")])]),h,(0,a._)("p",null,[b,k,(0,a.Uk)(" QoS level for MQTT messages of this device. "),(0,a._)("a",g,[(0,a.Uk)("What is QoS?"),(0,a.Wm)(s)])]),f,(0,a._)("p",null,[(0,a.Uk)("Some Zigbee devices like the "),(0,a.Wm)(w,{to:"/devices/RTCGQ11LM.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("RTCGQ11LM")])),_:1}),(0,a.Uk)(" supports some special attributes. To see if your device has device type specific configuration, visit the device page by going to "),(0,a.Wm)(w,{to:"/supported-devices/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Supported devices")])),_:1}),(0,a.Uk)(" and clicking on the model number.")]),y,(0,a._)("p",null,[(0,a.Uk)("You can define groups of devices which are applied to the Zigbee network. Also see the "),(0,a.Wm)(w,{to:"/guide/usage/groups.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Groups guide")])),_:1}),(0,a.Uk)(".")]),_])}]])}}]);