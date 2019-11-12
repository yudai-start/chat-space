FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/img_sit-cat.jpeg")}
    user
    group
  end
end