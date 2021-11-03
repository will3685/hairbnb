class BookCategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description
end
