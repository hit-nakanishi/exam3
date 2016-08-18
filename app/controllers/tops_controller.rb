class TopsController < ApplicationController
  def index
    @topics = Topic.all.order(id: :desc)
  end
end
