import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/creatbook.DAogKDtd.jpg";
const _imports_1 = "/assets/people.C8oef98c.jpg";
const _imports_2 = "/assets/writing.C1SnBW4D.jpg";
const _imports_3 = "/assets/writing2.DII1zqtN.jpg";
const _imports_4 = "/assets/writing3.BNSXFwYc.jpg";
const _imports_5 = "/assets/writing4.Kj9E-FpW.jpg";
const __pageData = JSON.parse('{"title":"开始写作","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start-writing.md","filePath":"guide/start-writing.md"}');
const _sfc_main = { name: "guide/start-writing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="开始写作" tabindex="-1">开始写作 <a class="header-anchor" href="#开始写作" aria-label="Permalink to &quot;开始写作&quot;">​</a></h1><p>开始了解神笔软件中写作界面各部分的使用方法</p><h2 id="创建书籍" tabindex="-1">创建书籍 <a class="header-anchor" href="#创建书籍" aria-label="Permalink to &quot;创建书籍&quot;">​</a></h2><p>点击首页的“添加”按钮并输入名称来创建书籍</p><p><img${ssrRenderAttr("src", _imports_0)} alt="创建书籍"></p><h2 id="写作界面" tabindex="-1">写作界面 <a class="header-anchor" href="#写作界面" aria-label="Permalink to &quot;写作界面&quot;">​</a></h2><h4 id="_1-写作界面分为-4-个部分-顶部左侧是当前书籍名称-右侧是书籍关联内容和全局设定" tabindex="-1">1. 写作界面分为 4 个部分，顶部左侧是当前书籍名称，右侧是书籍关联内容和全局设定 <a class="header-anchor" href="#_1-写作界面分为-4-个部分-顶部左侧是当前书籍名称-右侧是书籍关联内容和全局设定" aria-label="Permalink to &quot;1. 写作界面分为 4 个部分，顶部左侧是当前书籍名称，右侧是书籍关联内容和全局设定&quot;">​</a></h4><ul><li>人物设定：为本书涉及到的人物进行详细设定。</li><li>词条设定：除了人物以外，对物品，事件，系统等进行详细的设定。</li><li>全局设定：本书的基本信息和世界观设定。</li><li>注意：以上三条内容均可根据剧情发展进行随时的修改。</li></ul><p><img${ssrRenderAttr("src", _imports_1)} alt="人物设定界面"></p><h4 id="_2-主要区域使用三栏设计" tabindex="-1">2. 主要区域使用三栏设计 <a class="header-anchor" href="#_2-主要区域使用三栏设计" aria-label="Permalink to &quot;2. 主要区域使用三栏设计&quot;">​</a></h4><ul><li>左侧为章节管理区域，可以创建和删除章节，查看章节梗概信息及状态。</li><li>中间为内容编辑区域，顶部拥有工具栏。</li><li>右侧为 AI 交互区域，进行上下文构建，AI 交互。</li></ul><p><img${ssrRenderAttr("src", _imports_2)} alt="写作界面"></p><h4 id="_3-ai-对话区域介绍" tabindex="-1">3. AI 对话区域介绍 <a class="header-anchor" href="#_3-ai-对话区域介绍" aria-label="Permalink to &quot;3. AI 对话区域介绍&quot;">​</a></h4><ul><li>左侧创建章节后，选中这个章节。</li><li>在右侧选择合适的人物词条等信息，并输入对本章的想法</li></ul><p><img${ssrRenderAttr("src", _imports_3)} alt="写作2界面"></p><h4 id="_4-对话内容编辑" tabindex="-1">4. 对话内容编辑 <a class="header-anchor" href="#_4-对话内容编辑" aria-label="Permalink to &quot;4. 对话内容编辑&quot;">​</a></h4><ul><li>右侧区域调用的是<strong>规划模式</strong>的大模型及提示词，目标是通过修改或多轮对话生产满意的章节细纲。</li><li>支持手动对 AI 生成内容进行修改</li></ul><p><img${ssrRenderAttr("src", _imports_4)} alt="写作3界面"></p><h4 id="_5-开始写作" tabindex="-1">5. 开始写作 <a class="header-anchor" href="#_5-开始写作" aria-label="Permalink to &quot;5. 开始写作&quot;">​</a></h4><ul><li>确定最终的<strong>章节细纲</strong>之后，点击<strong>开始写作按钮</strong>调用<strong>写作模式</strong>进行章节创作</li><li>进入正文编辑页面了解更多内容。👉<a href="/guide/editor-writing.html">正文编辑</a></li></ul><p><img${ssrRenderAttr("src", _imports_5)} alt="写作4界面"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/start-writing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const startWriting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  startWriting as default
};
