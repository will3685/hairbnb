class ChangeColumnToHair < ActiveRecord::Migration[6.0]
  def change
    change_column :hairs, :price, :decimal, precision: 5, scale:2
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
