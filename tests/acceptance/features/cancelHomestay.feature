Feature:cancel Homestay
As a user
I want to navigate homepage and click detail button
So I can view the detail of homestay

Scenario: click cancelbutton
Given a user has navigated to detailpage and didn't like the homestay
When the user click cancel to book the stay
Then user can view the homepage again