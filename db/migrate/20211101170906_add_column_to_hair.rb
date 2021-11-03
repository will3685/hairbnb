class AddColumnToHair < ActiveRecord::Migration[6.0]
  def change
    add_column :hairs, :name, :string, :limit => 250
    add_column :hairs, :description, :string, :limit => 250
    add_column :hairs, :price, :float
    add_column :hairs, :image_url, :string, :limit => 250
  end
end
