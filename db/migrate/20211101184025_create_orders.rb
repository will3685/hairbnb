class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.time :date_submitted
      t.integer :status
      t.decimal :subtotal
      t.decimal :services
      t.decimal :total
      t.belongs_to :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
