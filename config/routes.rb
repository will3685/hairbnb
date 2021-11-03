Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    namespace :v1 do
      resources :products 
      resources :products_orders
      resources :customers, only: [:index, :show]
      resources :orders, only: [:create, :index, :show]
      resources :salons, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  get '*path', to: 'pages#home', via: :all
end
