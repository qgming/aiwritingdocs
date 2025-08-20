import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/home.DBlQYE-u.jpg";
const _imports_1 = "/assets/model.CJ3N3ZII.jpg";
const _imports_2 = "/assets/feature.myvZPEWx.jpg";
const __pageData = JSON.parse('{"title":"软件配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/app-setting.md","filePath":"guide/app-setting.md"}');
const _sfc_main = { name: "guide/app-setting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="软件配置" tabindex="-1">软件配置 <a class="header-anchor" href="#软件配置" aria-label="Permalink to &quot;软件配置&quot;">​</a></h1><p>在神笔写作首次使用时，需要进行相关配置，以便后续使用</p><h2 id="启动应用" tabindex="-1">启动应用 <a class="header-anchor" href="#启动应用" aria-label="Permalink to &quot;启动应用&quot;">​</a></h2><ul><li>双击桌面上的&quot;神笔写作&quot;图标</li><li>或从开始菜单搜索&quot;神笔写作&quot;</li></ul><p><img${ssrRenderAttr("src", _imports_0)} alt="首页界面截图"></p><h2 id="配置模型设置" tabindex="-1">配置模型设置 <a class="header-anchor" href="#配置模型设置" aria-label="Permalink to &quot;配置模型设置&quot;">​</a></h2><ol><li>进入&quot;设置&quot; → &quot;模型设置&quot;</li><li>选择您想使用的 AI 提供商（OpenAI、Claude、DeepSeek 等）</li><li>输入您的 API 密钥</li><li>点击&quot;测试&quot;确保配置成功</li><li>推荐国内用户使用<strong>硅基流动</strong><a href="https://cloud.siliconflow.cn/i/BT2o4ohd" target="_blank" rel="noreferrer">官网</a>和<strong>AiHubMix（推理时代）</strong><a href="https://aihubmix.com?aff=4SXn" target="_blank" rel="noreferrer">官网</a></li></ol><p><img${ssrRenderAttr("src", _imports_1)} alt="模型设置截图"></p><h2 id="配置功能设置" tabindex="-1">配置功能设置 <a class="header-anchor" href="#配置功能设置" aria-label="Permalink to &quot;配置功能设置&quot;">​</a></h2><ol><li>进入&quot;设置&quot; → &quot;功能设置&quot;</li><li>根据不同的功能特点配置不同模型</li><li>点击保存即可配置成功</li><li>一些功能设置的推荐（性价比优先策略） <ul><li>规划模式：deepseek-v3</li><li>写作模式：gemini-2.5-pro</li><li>章节梗概：deepseek-v3</li><li>知识图谱基础模型：deepseek-v3</li><li>知识图谱嵌入模型：bge-m3（在硅基流动为免费模型）</li><li>其他功能为独立功能，可自由配置</li></ul></li></ol><p><img${ssrRenderAttr("src", _imports_2)} alt="功能设置截图"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/app-setting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const appSetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  appSetting as default
};
