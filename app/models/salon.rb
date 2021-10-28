class Salon < ApplicationRecord
  has_many :reviews

  before_create :slugify
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
  
  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    return 0 unless reviews.count.positive?
    reviews.average(:score).round(2).to_f
  end
end
