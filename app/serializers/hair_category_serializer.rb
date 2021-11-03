class HairCategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description
  belongs_to :book_category
  has_many :hairs
end
