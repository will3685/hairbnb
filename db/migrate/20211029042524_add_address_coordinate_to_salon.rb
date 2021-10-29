class AddAddressCoordinateToSalon < ActiveRecord::Migration[6.0]
  def change
    add_column :salons, :street, :string, :limit => 250
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
    add_column :salons, :city, :string, :limit => 25
    add_column :salons, :state, :string, :limit => 25
    add_column :salons, :country, :string, :limit => 25
  end
end
