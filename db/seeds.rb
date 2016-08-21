10.times do |n|
  name = Faker::Internet.name
  email = "example-#{n}@example.org"
  password = "password"
  User.create!(
               email: email,
               name: name,
               password: password
	       password_confirmation: password,
              )
end
