class ProductSerializer
  include FastJsonapi::ObjectSerializer

  set_type :product
  
  attributes :name, :description, :price, :image_url
  has_many :products_orders
  has_many :orders, through: :products_orders

  # belongs_to :order, through: :products_orders

end
