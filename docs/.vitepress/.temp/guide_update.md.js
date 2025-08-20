import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"📋 更新日志","description":"","frontmatter":{},"headers":[],"relativePath":"guide/update.md","filePath":"guide/update.md"}');
const _sfc_main = { name: "guide/update.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="📋-更新日志" tabindex="-1">📋 更新日志 <a class="header-anchor" href="#📋-更新日志" aria-label="Permalink to &quot;📋 更新日志&quot;">​</a></h1><p>本页面记录了神笔写作软件的所有版本更新内容，包括新功能、改进和修复。</p><h2 id="🔄-当前版本" tabindex="-1">🔄 当前版本 <a class="header-anchor" href="#🔄-当前版本" aria-label="Permalink to &quot;🔄 当前版本&quot;">​</a></h2><p><strong>最新版本</strong>: v0.1.1<br><strong>发布日期</strong>: 2025 年 8 月 19 日<br><strong>状态</strong>: 公开</p><h2 id="下载地址" tabindex="-1">下载地址 <a class="header-anchor" href="#下载地址" aria-label="Permalink to &quot;下载地址&quot;">​</a></h2><h4 id="📦-夸克网盘" tabindex="-1">📦 夸克网盘 <a class="header-anchor" href="#📦-夸克网盘" aria-label="Permalink to &quot;📦 夸克网盘&quot;">​</a></h4><ul><li><strong>下载链接</strong>: <a href="https://pan.quark.cn/s/4b11b0cd4a69" target="_blank" rel="noreferrer">https://pan.quark.cn/s/4b11b0cd4a69</a></li><li><strong>文件名称</strong>: <code>神笔写作_0.1.1_x64-setup.exe</code></li><li><strong>文件大小</strong>: 约 5MB</li><li><strong>版本</strong>: v0.1.1</li></ul><h4 id="📦-百度网盘" tabindex="-1">📦 百度网盘 <a class="header-anchor" href="#📦-百度网盘" aria-label="Permalink to &quot;📦 百度网盘&quot;">​</a></h4><ul><li><strong>下载链接</strong>: <a href="https://pan.baidu.com/s/18rYE1zMdbDjf_3j9jsedSQ?pwd=jdwd" target="_blank" rel="noreferrer">https://pan.baidu.com/s/18rYE1zMdbDjf_3j9jsedSQ?pwd=jdwd</a></li><li><strong>提取码</strong>: <code>jdwd</code></li><li><strong>文件大小</strong>: 约 5MB</li><li><strong>版本</strong>: v0.1.1</li></ul><h2 id="📦-版本历史" tabindex="-1">📦 版本历史 <a class="header-anchor" href="#📦-版本历史" aria-label="Permalink to &quot;📦 版本历史&quot;">​</a></h2><h3 id="v0-1-1-2025-08-19" tabindex="-1">v0.1.1 (2025-08-19) <a class="header-anchor" href="#v0-1-1-2025-08-19" aria-label="Permalink to &quot;v0.1.1 (2025-08-19)&quot;">​</a></h3><p>公开测试版，包含以下功能：</p><ul><li>支持 AI 辅助写作</li><li>知识图谱功能</li><li>提示词管理</li><li>实用工具集成</li><li>多平台支持 (Windows, macOS, Linux)</li></ul><h3 id="v0-1-0-2025-08-15" tabindex="-1">v0.1.0 (2025-08-15) <a class="header-anchor" href="#v0-1-0-2025-08-15" aria-label="Permalink to &quot;v0.1.0 (2025-08-15)&quot;">​</a></h3><p>内测版本：</p><ul><li>基础写作功能</li><li>简单的 AI 集成</li><li>用户界面优化</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/update.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const update = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  update as default
};
