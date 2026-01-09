import { _ as __nuxt_component_0 } from './index-DYKrTv6o.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-26QaJRYc.mjs';
import { defineComponent, useSSRContext, ref, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './server.mjs';
import '../_/nitro.mjs';
import 'mysql2/promise';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'vue-router';
import './composables-DaIzQ5JL.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _imports_0 = "" + __buildAssetsURL("flag_rb.BJEWetts.png");
const _imports_1 = "" + __buildAssetsURL("coat_rb.DCn-Qnj9.png");
const _imports_2 = "" + __buildAssetsURL("logo_bgtu.DcDEEwk0.png");
const _imports_3 = "" + __buildAssetsURL("logo_college.FVHgDG5w.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const currentLocale = ref("ru");
    const isMobileMenuOpen = ref(false);
    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))} data-v-402f90cd><header class="header" data-v-402f90cd><div class="top-bar" data-v-402f90cd><div class="container" data-v-402f90cd><div class="contact-info" data-v-402f90cd><span data-v-402f90cd>📞 +375 (XX) XXX-XX-XX</span><span data-v-402f90cd>✉️ bglk@bobruisk.belstu.by</span><span data-v-402f90cd>📍 ул. Ленина 93А, г. Бобруйск</span></div><div class="language-switcher" data-v-402f90cd><button class="${ssrRenderClass([{ active: unref(currentLocale) === "ru" }, "lang-btn"])}" data-v-402f90cd>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "circle-flags:ru",
        class: "flag-icon"
      }, null, _parent));
      _push(`<span data-v-402f90cd>Русский</span></button><span class="separator" data-v-402f90cd>|</span><button class="${ssrRenderClass([{ active: unref(currentLocale) === "by" }, "lang-btn"])}" data-v-402f90cd>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "circle-flags:by",
        class: "flag-icon"
      }, null, _parent));
      _push(`<span data-v-402f90cd>Беларускі</span></button><span class="separator" data-v-402f90cd>|</span><button class="${ssrRenderClass([{ active: unref(currentLocale) === "en" }, "lang-btn"])}" data-v-402f90cd>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "circle-flags:en",
        class: "flag-icon"
      }, null, _parent));
      _push(`<span data-v-402f90cd>English</span></button></div></div></div><div class="hero-section" data-v-402f90cd><div class="hero-bg" data-v-402f90cd></div><div class="hero-content container" data-v-402f90cd><div class="emblems-left" data-v-402f90cd><img${ssrRenderAttr("src", _imports_0)} alt="Флаг РБ" class="emblem" data-v-402f90cd><img${ssrRenderAttr("src", _imports_1)} alt="Герб РБ" class="emblem" data-v-402f90cd></div><div class="emblems-right" data-v-402f90cd><img${ssrRenderAttr("src", _imports_2)} alt="Герб БГТУ" class="emblem" data-v-402f90cd><img${ssrRenderAttr("src", _imports_3)} alt="Герб колледжа" class="emblem" data-v-402f90cd></div></div></div><nav class="nav-menu" data-v-402f90cd><div class="container" data-v-402f90cd><button class="mobile-menu-toggle" aria-label="Toggle menu" data-v-402f90cd><span class="${ssrRenderClass([{ active: unref(isMobileMenuOpen) }, "hamburger-line"])}" data-v-402f90cd></span><span class="${ssrRenderClass([{ active: unref(isMobileMenuOpen) }, "hamburger-line"])}" data-v-402f90cd></span><span class="${ssrRenderClass([{ active: unref(isMobileMenuOpen) }, "hamburger-line"])}" data-v-402f90cd></span></button><div class="${ssrRenderClass([{ "mobile-open": unref(isMobileMenuOpen) }, "nav-links"])}" data-v-402f90cd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "nav-link",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Главная`);
          } else {
            return [
              createTextVNode("Главная")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "nav-link",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`О нас`);
          } else {
            return [
              createTextVNode("О нас")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/specialties",
        class: "nav-link",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Специальности`);
          } else {
            return [
              createTextVNode("Специальности")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/abiturient",
        class: "nav-link",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Абитуриенту`);
          } else {
            return [
              createTextVNode("Абитуриенту")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacts",
        class: "nav-link",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Контакты`);
          } else {
            return [
              createTextVNode("Контакты")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav></header><main class="main" data-v-402f90cd><div class="main-container" data-v-402f90cd><div class="content-area" data-v-402f90cd>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><aside class="sidebar" data-v-402f90cd><div class="info-block" data-v-402f90cd><div class="info-block-content" data-v-402f90cd><p data-v-402f90cd><strong data-v-402f90cd>Телефон:</strong><br data-v-402f90cd>+375 (XX) XXX-XX-XX</p><p data-v-402f90cd><strong data-v-402f90cd>Email:</strong><br data-v-402f90cd>bglk@bobruisk.belstu.by</p><p data-v-402f90cd><strong data-v-402f90cd>Адрес:</strong><br data-v-402f90cd>ул. Ленина 93А,<br data-v-402f90cd>г. Бобруйск</p></div></div><div class="info-block" data-v-402f90cd><div class="info-block-content" data-v-402f90cd><div class="date-item" data-v-402f90cd><span class="date-label" data-v-402f90cd>Приём документов:</span><span class="date-value" data-v-402f90cd>15.07 - 10.08</span></div><div class="date-item" data-v-402f90cd><span class="date-label" data-v-402f90cd>Вступительные испытания:</span><span class="date-value" data-v-402f90cd>12.08 - 15.08</span></div><div class="date-item" data-v-402f90cd><span class="date-label" data-v-402f90cd>Зачисление:</span><span class="date-value" data-v-402f90cd>20.08</span></div></div></div></aside></div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-402f90cd"]]);

export { _default as default };
//# sourceMappingURL=default-DfN9jFpm.mjs.map
