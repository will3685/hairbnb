class RemoveAddressFromSalon < ActiveRecord::Migration[6.0]
  def change
    remove_column :salons, :address, :string
  end
end
