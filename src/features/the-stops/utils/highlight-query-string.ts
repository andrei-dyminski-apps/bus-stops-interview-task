export const highlightQueryString = (text: string, query: string): string => {
  if (!query?.length) return text;
  const escapedQuery = query.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  return text.replace(
    new RegExp(escapedQuery, "gi"),
    (match) => `<mark>${match}</mark>`,
  );
};