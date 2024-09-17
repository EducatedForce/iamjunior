export const slugify = (label: string) => {
  return label
    .toLowerCase()              // Convert all letters to lowercase
    .trim()                     // Remove leading and trailing whitespace
    .replace(/\s+/g, '-')       // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '')   // Remove all non-word characters (excluding hyphens)
    .replace(/--+/g, '-');    // Replace multiple hyphens with a single one
};
