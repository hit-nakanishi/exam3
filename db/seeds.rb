n = 3
10.times do |n|
  name = Faker::Internet.name
  email = #{変数}"test@test.test"
  password = "password"
  User.create!(
               email: email,
               name: name,
	       password: password,
               password_confirmation: password,
              )
end
