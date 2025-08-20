import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/editor.CuWYkH70.jpg";
const _imports_1 = "/assets/editor2.BktDAXQe.jpg";
const _imports_2 = "/assets/editor3.CTIA6tjv.jpg";
const _imports_3 = "/assets/editor4.Xerj87DZ.jpg";
const __pageData = JSON.parse('{"title":"正文编辑","description":"","frontmatter":{},"headers":[],"relativePath":"guide/editor-writing.md","filePath":"guide/editor-writing.md"}');
const _sfc_main = { name: "guide/editor-writing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="正文编辑" tabindex="-1">正文编辑 <a class="header-anchor" href="#正文编辑" aria-label="Permalink to &quot;正文编辑&quot;">​</a></h1><p>正文创作以后，需要进行一系列的编辑确定最终版本。</p><h2 id="编辑器介绍" tabindex="-1">编辑器介绍 <a class="header-anchor" href="#编辑器介绍" aria-label="Permalink to &quot;编辑器介绍&quot;">​</a></h2><p>中间的编辑器顶部为工具栏，中间为内容编辑区域，底部为状态栏</p><p><img${ssrRenderAttr("src", _imports_0)} alt="编辑器截图"></p><h2 id="内容编辑" tabindex="-1">内容编辑 <a class="header-anchor" href="#内容编辑" aria-label="Permalink to &quot;内容编辑&quot;">​</a></h2><p>可以直接进行内容编辑，增加或删除内容。 在编辑器内每 <strong>1000</strong> 字所在段落下方会显示数字里程碑标记，帮助用户了解字符数量。</p><p><img${ssrRenderAttr("src", _imports_1)} alt="数字里程碑截图"></p><h2 id="生成梗概" tabindex="-1">生成梗概 <a class="header-anchor" href="#生成梗概" aria-label="Permalink to &quot;生成梗概&quot;">​</a></h2><p>确定正文最终版本后，点击上方<strong>梗概</strong>按钮生产本章梗概。</p><ul><li>生成梗概能更好的帮助 AI 在后续章节创作中了解前文章节内容，让剧情更连贯。</li></ul><p><img${ssrRenderAttr("src", _imports_2)} alt="梗概截图"></p><h2 id="定稿功能" tabindex="-1">定稿功能 <a class="header-anchor" href="#定稿功能" aria-label="Permalink to &quot;定稿功能&quot;">​</a></h2><p>定稿功能又名为知识图谱生产器，需要配置知识图谱基础默契和嵌入模型。</p><ul><li>注意定稿功能需要消耗几分钟以及大量 Token</li><li>定稿功能生成内容会构成图 RAG 系统，赋予 AI 长记忆能力。</li><li>在规划模式和正文模式创作时，都会自动进行检索以往记忆来帮助创作。</li><li>了解知识图谱详细内容 👉<a href="/guide/knowledgegraph.html">知识图谱</a></li></ul><p><img${ssrRenderAttr("src", _imports_3)} alt="定稿截图"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/editor-writing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editorWriting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  editorWriting as default
};
