class HairCategory < ApplicationRecord
  
  belongs_to :book_category
  has_many :hairs
end
