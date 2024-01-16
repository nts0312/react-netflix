<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="webjars/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet" >
<title>Todo List</title>
</head>
<body>

<div class = "container">
 <div><h1>Your Todos are </h1></div>


<table class="table">
<thead>
<tr>
<th>Description</th>
<th>Target Date</th>
<th>Is Done</th>
</tr>
</thead>

</tbody>


<c:forEach items = "${todos}" var = "todo">

<tr>
<td>${todo.description}</td>
<td><fmt:formatDate value="${todo.targetDate}" pattern="dd-MM-yyyy"/></td>
<td>${todo.done}</td>





<td><a href="delete-todo?id=${todo.id}" class="btn btn-warning">Delete</a></td>
<td><a href="update-todo?id=${todo.id}" class="btn btn-success">Update</a></td>

</tr>

</c:forEach>



</tbody>
</table>

<a href ="add-todo" class="btn btn-success"> Add Todo </a>

<script src="webjars/bootstrap/5.1.3/js/bootstrap.min.js"></script>
<script src="webjars/jquery/3.6.0/jquery.min.js"></script>
</div>
</body>
</html>