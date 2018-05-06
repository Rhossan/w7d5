class ChangeColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :api_users, :password, :password_digest
    add_column :api_users, :session_token, :string 
  end
end
