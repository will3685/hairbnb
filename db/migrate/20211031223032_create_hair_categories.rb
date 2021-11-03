class CreateHairCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :hair_categories do |t|

      t.timestamps
    end
  end
end
