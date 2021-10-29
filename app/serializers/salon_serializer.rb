class SalonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :slug, :avg_score, :latitude, :longitude, :address

  has_many :reviews
end
