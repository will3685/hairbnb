class SalonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :image_url, :slug, :avg_score, :address, :latitude, :longitude

  has_many :reviews
end
