Rails.application.routes.draw do

  root 'tops#index'
  
  resources :topics do
    collection do
      post :confirm
      post 'topics' => 'topics#new', :path => '/new'
    end
  end

  resources :contacts, only: [:index, :new, :create] do
    collection do
      post :confirm
      post 'contacts' => 'contacts#new', :path => '/new'
    end
  end

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  devise_for :users, controllers: {
    registrations: "users/registrations",
    omniauth_callbacks: "users/omniauth_callbacks"
  }

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end
  
end
