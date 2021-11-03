class CustomerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  has_many :orders
end
