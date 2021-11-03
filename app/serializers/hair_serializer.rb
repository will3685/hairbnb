class HairSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price, :description, :observation, :image_url

  belongs_to :haircategory 
end
