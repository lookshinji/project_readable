export const CREATE_CATEGORY = 'create_categories';

export function createCategories(categories) {
  return {
    type: CREATE_CATEGORY,
    payload: categories
  };
};
