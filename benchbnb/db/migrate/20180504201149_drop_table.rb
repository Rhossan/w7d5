class DropTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :api_users
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
  end
end
