# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|created_at|datetime|null: false|
|updated_at|datetime|

### Association1  

 has_many :groups, through: :groups_users  
 has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association2  

 belongs_to :user  
 belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|group_name|string|null: false|
|created_at|datetime|null: false|

### Association3  

 has_many :users, through: :groups_users  
 has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|message|text|null: false|
|image|string|
|created_at|datetime|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association4  

 belongs_to :user  
 belongs_to :group
