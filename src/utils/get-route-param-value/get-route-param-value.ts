export const getRouteParamValue = (
  value?: string | string[],
): string | undefined => (Array.isArray(value) ? value[0] : value);
