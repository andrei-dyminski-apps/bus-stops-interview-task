import type { DirectiveBinding } from "vue";

declare global {
  interface HTMLElement {
    loaderParent?: HTMLElement | null;
  }
}

interface LoadingDirective {
  body: HTMLElement | null;
  parent: HTMLElement | null;

  insertLoader(options?: { type?: string }): void;
  removeLoader(loader: HTMLElement): void;
  mounted(el: HTMLElement, binding: DirectiveBinding): void;
  updated(el: HTMLElement, binding: DirectiveBinding): void;
  unmounted(): void;
}

export const loading: LoadingDirective = {
  body: document.documentElement,
  parent: null,

  insertLoader(options?: { type?: string }) {
    if (!loading.parent) return;
    loading.parent.style.position = "relative";
    loading.parent.insertAdjacentHTML(
      "beforeend",
      `<div class="loader js-loader" data-type="${options?.type ?? ""}"></div>`,
    );
  },

  removeLoader(loader: HTMLElement) {
    if (!loading.parent) return;
    loading.parent.style.removeProperty("position");
    if (loader && loading.parent.contains(loader)) {
      loading.parent.removeChild(loader);
    }
  },

  mounted(el: HTMLElement, binding: DirectiveBinding) {
    loading.parent = el.children.length ? el : loading.body;
    el.loaderParent = loading.parent;

    if (binding.value) loading.insertLoader({ type: binding.arg });
  },

  updated(el: HTMLElement, binding: DirectiveBinding) {
    loading.parent = el.loaderParent ?? null;
    const loader: HTMLElement | null =
      loading.parent?.querySelector(":scope > .js-loader") ?? null;

    if (binding.value && !loader) {
      loading.insertLoader({ type: binding.arg });
    } else if (!binding.value && loader) {
      loading.removeLoader(loader);
    }
  },

  unmounted() {
    const loader: HTMLElement | null =
      loading.parent?.querySelector(":scope > .js-loader") ?? null;
    if (loader) loading.removeLoader(loader);
  },
};
