Rails.application.routes.draw do
  resources :sub_categories
  resources :questions
  resources :quizzes
  resources :categories
  resources :users
  post '/auth', to: 'api/v1/auth#create'
  root 'users#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
