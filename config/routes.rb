Rails.application.routes.draw do
  get 'notifications/index'

  root 'tops#index'

  resources :relationships, only: [:create, :destroy]
  
  resources :topics do
    resources :comments
  
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

  resources :users, only: [:index, :show, :edit, :update] do
    resources :notifications, only: [:index]
  end
  
  resources :conversations do
    resources :messages
  end

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end
  
end