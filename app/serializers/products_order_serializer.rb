class ProductsOrderSerializer
  include FastJsonapi::ObjectSerializer
  attributes 
  belongs_to :order
  belongs_to :product
end
