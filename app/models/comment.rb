class Comment < ActiveRecord::Base
  validates :content, presence: true

  belongs_to :user
  belongs_to :topic

  def comment_time
    created_at.strftime("%y/%m/%d %p %l:%M")
  end
end
