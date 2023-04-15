"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2946],{781829:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-ca3c1c02","path":"/guide/configuration/homeassistant.html","title":"Home Assistant integration","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"excerpt":"","headers":[{"level":2,"title":"Advanced configuration","slug":"advanced-configuration","link":"#advanced-configuration","children":[]}],"git":{"updatedTime":1681542817000},"filePathRelative":"guide/configuration/homeassistant.md"}')},820748:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var e=a(166252);const t=(0,e._)("h1",{id:"home-assistant-integration",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#home-assistant-integration","aria-hidden":"true"},"#"),(0,e.Uk)(" Home Assistant integration")],-1),i=(0,e.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Optional: Home Assistant integration (MQTT discovery) (default: false)</span>\n<span class="token key atrule">homeassistant</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration" aria-hidden="true">#</a> Advanced configuration</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">homeassistant</span><span class="token punctuation">:</span>\n  <span class="token comment"># Optional: Home Assistant discovery topic (default: shown below)</span>\n  <span class="token key atrule">discovery_topic</span><span class="token punctuation">:</span> <span class="token string">&#39;homeassistant&#39;</span>\n  <span class="token comment"># Optional: Home Assistant status topic (default: shown below)</span>\n  <span class="token comment"># Note: in addition to the `status_topic`, &#39;homeassistant/status&#39; will also be used</span>\n  <span class="token key atrule">status_topic</span><span class="token punctuation">:</span> <span class="token string">&#39;hass/status&#39;</span>\n  <span class="token comment"># Optional: Home Assistant legacy entity attributes, (default: shown below), when enabled:</span>\n  <span class="token comment"># Zigbee2MQTT will send additional states as attributes with each entity. For example,</span>\n  <span class="token comment"># A temperature &amp; humidity sensor will have 2 entities for the temperature and</span>\n  <span class="token comment"># humidity, with this setting enabled both entities will also have</span>\n  <span class="token comment"># an temperature and humidity attribute.</span>\n  <span class="token comment"># Note: Disabling this option, requires a Home Assistant restart</span>\n  <span class="token key atrule">legacy_entity_attributes</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token comment"># Optional: Home Assistant legacy triggers (default: shown below), when enabled:</span>\n  <span class="token comment"># - Zigbee2mqt will send an empty &#39;action&#39; or &#39;click&#39; after one has been send</span>\n  <span class="token comment"># - A &#39;sensor_action&#39; and &#39;sensor_click&#39; will be discoverd</span>\n  <span class="token key atrule">legacy_triggers</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),l={},o=(0,a(983744).Z)(l,[["render",function(n,s){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e._)("p",null,[(0,e.Uk)("See: "),(0,e.Wm)(a,{to:"/guide/usage/integrations/home_assistant.html"},{default:(0,e.w5)((()=>[(0,e.Uk)("Home Assistant integration guide")])),_:1}),(0,e.Uk)(".")]),i])}]])}}]);