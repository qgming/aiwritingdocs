import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/knowledge.BKNqvnA4.jpg";
const _imports_1 = "/assets/knowledge2.D3rENWWB.jpg";
const _imports_2 = "/assets/knowledge3.q_PBevAi.jpg";
const __pageData = JSON.parse('{"title":"知识图谱","description":"","frontmatter":{},"headers":[],"relativePath":"guide/knowledgegraph.md","filePath":"guide/knowledgegraph.md"}');
const _sfc_main = { name: "guide/knowledgegraph.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="知识图谱" tabindex="-1">知识图谱 <a class="header-anchor" href="#知识图谱" aria-label="Permalink to &quot;知识图谱&quot;">​</a></h1><p>知识图谱系统是一种书籍 RAG 系统，帮助大模型在后续创作中了解前文信息。</p><h2 id="演示页面" tabindex="-1">演示页面 <a class="header-anchor" href="#演示页面" aria-label="Permalink to &quot;演示页面&quot;">​</a></h2><p>知识图谱页面支持切换不同书籍的知识图谱，并对内容进行编辑删除等。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="知识图谱截图"></p><h2 id="编辑内容" tabindex="-1">编辑内容 <a class="header-anchor" href="#编辑内容" aria-label="Permalink to &quot;编辑内容&quot;">​</a></h2><p>编辑功能使用提示：</p><ul><li>编辑实体名称为其他实体名称时，会合并实体为一个。</li><li>删除实体时会删除本实体链接的关系。</li><li>删除关系时不会删除两边的实体。</li></ul><p><img${ssrRenderAttr("src", _imports_1)} alt="知识图谱2截图"></p><h2 id="使用提示" tabindex="-1">使用提示 <a class="header-anchor" href="#使用提示" aria-label="Permalink to &quot;使用提示&quot;">​</a></h2><p>注意，当章节越来越多时，实体及关系肯定会越来越多，要及时的清理小说情节中不在需要的实体及关系。</p><ul><li><p>及时清理旧的实体和关系可以避免在新章节时提供过时的信息。</p></li><li><p>及时清理可以减少软件卡顿。</p></li><li><p>及时清理可以减少软件空间占用。</p><p><img${ssrRenderAttr("src", _imports_2)} alt="知识图谱3截图"></p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/knowledgegraph.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const knowledgegraph = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  knowledgegraph as default
};
