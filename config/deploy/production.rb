server '52.192.40.3', user: 'app', roles: %w{app db web}
set :ssh_options, keys: '/home/vagrant/.ssh/id_rsa.exam3'
