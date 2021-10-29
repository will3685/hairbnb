class AddBairroToSalon < ActiveRecord::Migration[6.0]
  def change
    add_column :salons, :bairro, :string, :limit => 250
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
