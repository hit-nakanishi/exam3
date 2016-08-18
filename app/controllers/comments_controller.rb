class CommentsController < ApplicationController
  before_action :authenticate_user!
  after_action :sending_pusher, only: [:create]
  
  # コメントを保存、投稿するためのアクションです。
  def create
    # ログインユーザーに紐付けてインスタンス生成するためbuildメソッドを使用します。
    @comment = current_user.comments.build(comment_params)
    @topic = @comment.topic
    
    @notification = @comment.notifications.build(recipient_id: @topic.user_id, sender_id: current_user.id)

    # クライアント要求に応じてフォーマットを変更
    if @comment.save
      respond_to do |format|
        format.js { render :index }
      end
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @topic = @comment.topic
    @comment.destroy
    
    respond_to do |format|
      format.js { render :index }
    end
  end

  private
    # ストロングパラメーター
    def comment_params
      params.require(:comment).permit(:topic_id, :content)
    end

    def sending_pusher
      if @topic.user_id != current_user.id?
        Notification.sending_pusher(@notification.recipient_id)
      end
    end
end