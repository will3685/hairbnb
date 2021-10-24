class SalonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :image_url, :slug

  has_many :reviews
end
