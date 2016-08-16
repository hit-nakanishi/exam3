class TopicsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_topic, only: [:show, :edit, :update, :destroy]

  def index
    @topics = Topic.all.order(id: :desc)
  end

  def show
  end

  def new
    if params[:back]
      @topic = Topic.new(topics_params)
      set_user
    else
      @topic = Topic.new
      set_user
    end
  end

  def create
    @topic = Topic.new(topics_params)
    set_user

    if @topic.save
      redirect_to topics_path, notice: "トピックを作成しました！"
      NoticeMailer.sendmail_topic(@topic).deliver
    else
      render action: 'new'
    end
  end
  
  def edit
  
  end
  
  def update
    set_user
    if @topic.update(topics_params)
     redirect_to topics_path, notice: "トピックを更新しました！"
    else
      render action: 'edit'
    end
  
  end

  def destroy
    @topic.destroy
    redirect_to topics_path, notice: "トピックを削除しました！"
  end

  def confirm
    @topic = Topic.new(topics_params)
    set_user
    render :new if @topic.invalid?
  end

  private
    def topics_params
      params.require(:topic).permit(:title, :content, :user_id)
    end
    
    # idをキーとして値を取得するメソッド
    def set_topic
      @topic = Topic.find(params[:id])
    end

    # user_idを代入する
    def set_user
      @topic.user_id = current_user.id
    end

end
