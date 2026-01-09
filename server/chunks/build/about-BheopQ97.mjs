import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-container" }, _attrs))} data-v-357fee42><h1 data-v-357fee42>\u041E \u043D\u0430\u0441</h1><p data-v-357fee42>\u042D\u0442\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 &quot;\u041E \u043D\u0430\u0441&quot; \u0434\u043B\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 BGLK Site.</p><p data-v-357fee42>\u041F\u0440\u043E\u0435\u043A\u0442 \u0441\u043E\u0437\u0434\u0430\u043D \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C Nuxt 3 \u0438 TypeScript.</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-357fee42"]]);

export { about as default };
//# sourceMappingURL=about-BheopQ97.mjs.map
