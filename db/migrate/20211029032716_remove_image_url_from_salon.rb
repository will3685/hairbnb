class RemoveImageUrlFromSalon < ActiveRecord::Migration[6.0]
  def change
    remove_column :salons, :image_url, :string
  end
end
