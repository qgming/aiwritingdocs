import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/memo.CmIDNXxz.jpg";
const _imports_1 = "/assets/alltools.Dp2RqYTo.jpg";
const _imports_2 = "/assets/token.gC8e9fnb.jpg";
const _imports_3 = "/assets/backup.DWV3bMkv.jpg";
const __pageData = JSON.parse('{"title":"写作工具","description":"","frontmatter":{},"headers":[],"relativePath":"guide/tools.md","filePath":"guide/tools.md"}');
const _sfc_main = { name: "guide/tools.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="写作工具" tabindex="-1">写作工具 <a class="header-anchor" href="#写作工具" aria-label="Permalink to &quot;写作工具&quot;">​</a></h1><p>为了更好的创作体验，神笔写作中提供了众多有用的工具</p><h2 id="全局备忘录" tabindex="-1">全局备忘录 <a class="header-anchor" href="#全局备忘录" aria-label="Permalink to &quot;全局备忘录&quot;">​</a></h2><p>在侧边栏可以点开一个全局备忘录。</p><ul><li>备忘录拥有记忆功能，可以保存内容。</li><li>备忘录可以全局显示，拖动可以移动位置</li></ul><p><img${ssrRenderAttr("src", _imports_0)} alt="全局备忘录"></p><h2 id="工具页面" tabindex="-1">工具页面 <a class="header-anchor" href="#工具页面" aria-label="Permalink to &quot;工具页面&quot;">​</a></h2><p>神笔写作提供一个独立的工具页面，内置多种工具。</p><p><img${ssrRenderAttr("src", _imports_1)} alt="工具页面"></p><h2 id="用量统计" tabindex="-1">用量统计 <a class="header-anchor" href="#用量统计" aria-label="Permalink to &quot;用量统计&quot;">​</a></h2><p>神笔写作软件会通过本地的算法来预估每次调用 AI 时消耗的 Token。</p><ul><li>注意：仅为预估值，请在 API 供应商处查看详细内容。</li></ul><p><img${ssrRenderAttr("src", _imports_2)} alt="用量统计"></p><h2 id="数据管理" tabindex="-1">数据管理 <a class="header-anchor" href="#数据管理" aria-label="Permalink to &quot;数据管理&quot;">​</a></h2><p>软件内提供数据备份及恢复功能</p><ul><li>软件备份是整个数据库，包含书籍内容也包含设置信息。</li><li>如果把备份数据包发给其他朋友，会恢复完整软件书籍，包含密钥。这可能导致 key 泄露，请注意。</li></ul><p><img${ssrRenderAttr("src", _imports_3)} alt="备份恢复"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/tools.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tools = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tools as default
};
