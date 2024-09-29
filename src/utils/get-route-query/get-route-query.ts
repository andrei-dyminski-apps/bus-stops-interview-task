import type { LocationQueryValue } from "vue-router";

export const getRouteQuery = (
  value: LocationQueryValue | LocationQueryValue[],
): string | null => (Array.isArray(value) ? value[0] : value) ?? null;
