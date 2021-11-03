class AddColumnToBook < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :date, :date
    add_column :books, :status, :string
  end
end
