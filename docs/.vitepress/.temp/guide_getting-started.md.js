import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/weixin.D5dCdpGH.jpg";
const __pageData = JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md"}');
const _sfc_main = { name: "guide/getting-started.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="🖥️-推荐配置" tabindex="-1">🖥️ 推荐配置 <a class="header-anchor" href="#🖥️-推荐配置" aria-label="Permalink to &quot;🖥️ 推荐配置&quot;">​</a></h2><ul><li><strong>操作系统</strong>: Windows 10 及以上版本</li><li><strong>内存</strong>: 8GB RAM 或更高</li><li><strong>存储</strong>: 1GB 可用空间</li><li><strong>网络</strong>: 稳定的网络连接（用于 AI 功能）</li></ul><h2 id="📥-下载与安装" tabindex="-1">📥 下载与安装 <a class="header-anchor" href="#📥-下载与安装" aria-label="Permalink to &quot;📥 下载与安装&quot;">​</a></h2><h3 id="下载地址" tabindex="-1">下载地址 <a class="header-anchor" href="#下载地址" aria-label="Permalink to &quot;下载地址&quot;">​</a></h3><p>我们提供多个网盘下载渠道，请选择您偏好的方式：</p><p><a href="/guide/update.html">软件下载</a></p><h3 id="安装步骤" tabindex="-1">安装步骤 <a class="header-anchor" href="#安装步骤" aria-label="Permalink to &quot;安装步骤&quot;">​</a></h3><ol><li><p><strong>下载安装包</strong></p><ul><li>从上述任一链接下载安装程序</li></ul></li><li><p><strong>运行安装程序</strong></p><ul><li>双击下载的 <code>神笔写作-Windows版-v1.0.0.exe</code></li><li>如果弹出 Windows 安全提示，点击&quot;更多信息&quot; → &quot;仍要运行&quot;</li></ul></li><li><p><strong>安装向导</strong></p><ul><li>根据安装向导提示进行设置（推荐全程默认）</li><li>点击&quot;安装&quot;开始安装过程</li></ul></li><li><p><strong>完成安装</strong></p><ul><li>安装完成后，勾选&quot;立即运行神笔写作&quot;</li><li>点击&quot;完成&quot;启动应用</li></ul></li></ol><h2 id="📚-下一步" tabindex="-1">📚 下一步 <a class="header-anchor" href="#📚-下一步" aria-label="Permalink to &quot;📚 下一步&quot;">​</a></h2><p>完成安装后，建议您：</p><ul><li>📖 配置 <a href="/guide/app-setting.html">完善软件配置</a></li><li>🎯 写作 <a href="/guide/start-writing.html">了解写作功能</a></li><li>🤖 工具 <a href="/guide/tools.html">了解更多工具</a></li><li>🕸️ 了解 <a href="/guide/knowledgegraph.html">知识图谱功能</a></li></ul><h2 id="🆘-遇到问题" tabindex="-1">🆘 遇到问题？ <a class="header-anchor" href="#🆘-遇到问题" aria-label="Permalink to &quot;🆘 遇到问题？&quot;">​</a></h2><ul><li><p>📖 查看 <a href="/faq/">常见问题</a></p></li><li><p>📧 联系技术支持：<strong>极点维度</strong>公众号</p><p><img${ssrRenderAttr("src", _imports_0)} alt="微信公众号"></p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/getting-started.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gettingStarted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gettingStarted as default
};
