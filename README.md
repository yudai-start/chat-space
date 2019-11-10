# DB設計

## userテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|created_at|datetime|null: false|
|updated_at|datetime|

### Association  

 has_many :groups, through: :group_users  
 has_many :messages  
 has_many :group_users

## group_userテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

### Association  

 belongs_to :user  
 belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|created_at|datetime|null: false|

### Association  

 has_many :users, through: :group_users 
 has_many :messages  
 has_many :group_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|content|string|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association  

 belongs_to :user  
 belongs_to :group
