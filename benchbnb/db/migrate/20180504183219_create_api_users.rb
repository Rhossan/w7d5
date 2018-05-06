class CreateApiUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :api_users do |t|
      t.string :username
      t.string :password

      t.timestamps
    end
  end
end
