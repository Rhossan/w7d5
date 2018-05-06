class Api::SessionsController < ApplicationController
  def create
    debugger
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["invalid credentials"], status: 422
    end
  end

  def destroy
    # if !current_user
    #   render json: ['hey, you\'re trying to logout, but your\'e not even logged in...'], status: 404
    # else
      logout
      render json: {}
    # end
  end

end
