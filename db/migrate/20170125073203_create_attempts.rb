class CreateAttempts < ActiveRecord::Migration
  def change
    create_table :attempts do |t|
      t.integer :user_id
      t.integer :evaluation_id
      t.boolean :unfinished, default: true

      t.timestamps null: false
    end
  end
end
