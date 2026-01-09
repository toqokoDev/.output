import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-f61ceca7><h1 data-v-f61ceca7>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 BGLK Site</h1><p data-v-f61ceca7>\u042D\u0442\u043E Nuxt 3 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441 TypeScript</p><div class="features" data-v-f61ceca7><div class="feature-card" data-v-f61ceca7><h2 data-v-f61ceca7>\u{1F680} Nuxt 3</h2><p data-v-f61ceca7>\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A \u0434\u043B\u044F Vue.js</p></div><div class="feature-card" data-v-f61ceca7><h2 data-v-f61ceca7>\u{1F4D8} TypeScript</h2><p data-v-f61ceca7>\u0422\u0438\u043F\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 JavaScript</p></div><div class="feature-card" data-v-f61ceca7><h2 data-v-f61ceca7>\u26A1 Vite</h2><p data-v-f61ceca7>\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f61ceca7"]]);

export { index as default };
//# sourceMappingURL=index-DRGwNiM0.mjs.map
