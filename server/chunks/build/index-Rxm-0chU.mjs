import { _ as __nuxt_component_0, u as useAsyncData } from './index-DYKrTv6o.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, toValue, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { E as hash } from '../_/nitro.mjs';
import { isPlainObject } from '@vue/shared';
import { f as fetchDefaults, u as useNuxtApp } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-DaIzQ5JL.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
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

function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
  return useRequestEvent()?.$fetch || globalThis.$fetch;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/news", {
      query: { limit: 5 },
      default: () => ({ success: true, data: [], count: 0 })
    }, "$77hSeXQoip")), __temp = await __temp, __restore(), __temp);
    const news = computed(() => data.value?.data || []);
    function truncateText(text, maxLength) {
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + "...";
    }
    function formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-492009ee>`);
      if (unref(news).length > 0) {
        _push(`<section class="news-section" data-v-492009ee><h2 class="section-title" data-v-492009ee>Последние новости</h2><div class="news-list" data-v-492009ee><!--[-->`);
        ssrRenderList(unref(news), (item) => {
          _push(`<article class="news-card" data-v-492009ee>`);
          if (item.image_url) {
            _push(`<div class="news-image" data-v-492009ee><img${ssrRenderAttr("src", item.image_url)}${ssrRenderAttr("alt", item.title)} data-v-492009ee></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="news-content" data-v-492009ee><h3 class="news-title" data-v-492009ee>${ssrInterpolate(item.title)}</h3><p class="news-text" data-v-492009ee>${ssrInterpolate(truncateText(item.content, 150))}</p><div class="news-meta" data-v-492009ee><span class="news-date" data-v-492009ee>`);
          _push(ssrRenderComponent(_component_Icon, { name: "mdi:calendar" }, null, _parent));
          _push(` ${ssrInterpolate(formatDate(item.created_at))}</span></div></div></article>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(pending)) {
        _push(`<div class="loading" data-v-492009ee><p data-v-492009ee>Загрузка новостей...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(`<div class="error" data-v-492009ee><p data-v-492009ee>Ошибка при загрузке новостей: ${ssrInterpolate(unref(error).message)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-492009ee"]]);

export { index as default };
//# sourceMappingURL=index-Rxm-0chU.mjs.map
