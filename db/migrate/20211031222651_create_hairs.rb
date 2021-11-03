class CreateHairs < ActiveRecord::Migration[6.0]
  def change
    create_table :hairs do |t|

      t.timestamps
    end
  end
end
