class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :score, :salon_id
end
