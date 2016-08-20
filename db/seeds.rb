n = 3
10.times do |n|
  name = Faker::Internet.name
  email = "test" + n + "@test.test"
  password = "password"
  User.create!(
               user_id: n,
               email: email,
               name: name,
	       password: password,
               password_confirmation: password,
              )
end
