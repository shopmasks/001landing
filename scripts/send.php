<head>
<meta name="robots" content="noindex, nofollow"/>
<link href="css/style.css" rel="stylesheet">
<style>
	body {
		text-align: center;
		font-size: 1.2rem;
	}
a {
color: #161616;
}

a:hover, a:focus {
	color: rgba(0,0,0,0.75);
	text-decoration: none;
	outline: 0;
}
		
	</style>
</head>
<body>
<?php 
/*
Форма обратной связи может получать сообщения с любых почтовых ящиков.
Исправлена проблема кодировки при получении писем почтовым клиентом Outlook.
ВНИМАНИЕ! Лучше всего в переменную myemail прописать почту домена, который использует сайт. А не mail.ru, gmail и тд.
*/
if(isset($_POST['submit'])){
/* Устанавливаем e-mail Кому и от Кого будут приходить письма */   
$to = "swansever@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма   
$from = "swansever@gmail.com"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply(собака)epicblog.net
 
/* Указываем переменные, в которые будет записываться информация с формы */
$first_name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$subject = "Форма отправки сообщений с сайта.";
     
/* Проверка правильного написания e-mail адреса */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}
     
/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
$mail_to_myemail = "Здравствуйте! 
Было отправлено сообщение с сайта! 
Имя отправителя: $first_name
E-mail: $email
Номер телефона: $phone
Текст сообщения: $message
Чтобы ответить на письмо, скопируйте электронный адрес, создайте новое сообщение и вставьте в поле Кому.";  
     
$headers = "From: $from \r\n";
     
/* Отправка сообщения, с помощью функции mail() */
mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
echo "Сообщение отправлено. Благодарим за письмо, " . $name . ". Мы скоро свяжемся с Вами.";
echo "<br /><br />Через 3 секунды Вас перенаправит на главную страницу.";
echo "<br /><br /><a href='http://ferroni.lebedev-web.ru'>Вернуться на сайт.</a>";
}
?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://ferroni.lebedev-web.ru");}
window.setTimeout("changeurl();",3000);
</script>
</body>