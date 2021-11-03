class Product < ApplicationRecord
  has_many :products_orders
  has_many :orders, through: :products_orders
  # belongs_to :order, through: :products_orders
end
