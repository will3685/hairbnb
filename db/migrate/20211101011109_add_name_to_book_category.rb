class AddNameToBookCategory < ActiveRecord::Migration[6.0]
  def change
    add_column :book_categories, :name, :string
  end
end
