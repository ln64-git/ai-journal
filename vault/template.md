# <% tp.date.now("dddd, MMMM DD YYYY")%>
<<  [[<% fileDate = moment(tp.file.title, 'YYYY-MM-DD').subtract(1, 'd').format('YYYY-MM-DD') %>|Yesterday]]  |  [[<% fileDate = moment(tp.file.title, 'YYYY-MM-DD').add(1, 'd').format('YYYY-MM-DD') %>|Tomorrow]]  >>

> [!note] Summary

<% tp.file.cursor(1) %>

> [!abstract] Inbox

- 