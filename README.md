# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|created_at|datetime|null: false|
|updated_at|datetime|

### Association
  has_many :groups, through: :groups_users  
  has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association

  belongs_to :user  
  belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|group_name|string|null: false|
|created_at|datetime|null: false|

### Association

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

### Association

  belongs_to :user  
  belongs_to :group