export const highlightQueryString = (
  text: string,
  query: string | null,
): string => {
  if (!query?.length) return text;
  const escapedQuery = query.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  return text.replace(
    new RegExp(escapedQuery, "gi"),
    (match) => `<mark class="px-0">${match}</mark>`,
  );
};
