class CreateSalons < ActiveRecord::Migration[6.0]
  def change
    create_table :salons do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.string :slug

      t.timestamps
    end
  end
end
