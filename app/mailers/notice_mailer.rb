class NoticeMailer < ApplicationMailer
  def sendmail_topic(topic)
    @topic = topic
    mail to: "naka24naka24@gmail.com",
	    subject: '【exam3】トピックが投稿されました'
  end

  # お問い合わせ投稿（お客様）
  def sendmail_contact(contact)
    @contact = contact
    mail to: @contact.email,
	    subject: '【exam3】お問い合わせありがとうございます'
  end

  # お問い合わせ投稿（admin）
  def sendmail_contact_admin(contact2)
    @contact = contact2
    mail to: "naka24naka24@gmail.com",
    subject: '【exam3】お問い合わせが届きました'
  end
end
