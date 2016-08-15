Rails.application.routes.draw do

  root 'top#index'
  resources :topics do
    collection do
      post :confirm
      post 'topics' => 'topics#new', :path => '/new'
    end
  end

  resources :contacts, only: [:index, :new, :create] do
    collection do
      post :confirm
    end
  end

end
