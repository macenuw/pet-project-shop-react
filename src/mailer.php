<?php
$_POST = json_decode(file_get_contents("php://input"), true);
$name = $_POST['name'];
$email = $_POST['email'];
$lastName = $_POST['lastName'];
$tel = $_POST['tel'];
$city = $_POST['city'];
$region = $_POST['region'];
$sectionNumber = $_POST['number'];
$sectionAddress = $_POST['address'];
$cost = $_POST['cost'];
$orderMessage = $_POST['message'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '3740rozovaya@gmail.com';                 // Наш логин
$mail->Password = 'yfkcpsxtyyddiqno';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('3740rozovaya@gmail.com', '3740.od.ua');   // От кого письмо
$mail->addAddress($email);     // Add a recipient
$mail->addAddress('sasha1992bogachenko@gmail.com');               // Name is optional
// $mail->addAddress('bogachenkoana@gmail.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('yfkcpsxtyyddiqno');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказ в Интернет-магазине 3740.od.ua';
$mail->Body    = '
<div style="max-width: 600px; width: 100%;">
<table style="width: 100%;">
  <tr style="width: 100%;">
    <td style="width: 100%; text-align: center; font-size: 16px; font-weight: bold;">Получен заказ</td>
  </tr>
</table>
<table style="max-width: 600px; width:100%; border: 1px solid black; margin: 0 auto; border-radius: 8px;">
  <tr style="width: 100%; ">
    <td style="width: 25%;">На имя:</td>
    <td style="width: 25%;">' . $name . '</td>
  </tr>
  <tr style="width: 100%;">
    <td style="width: 25%; ">Номер телефона:</td>
    <td style="width: 25%; ">' . $tel . '</td>
  </tr>
  <tr style="width: 100%;">
    <td style="width: 25%; ">E-mail:</td>
    <td style="width: 25%; ">' . $email . '</td>
  </tr>
  <tr style="width: 100%;">
    <td style="width: 25%; ">Область:</td>
    <td style="width: 25%; ">' . $region . '</td>
  </tr>
  <tr style="width: 100%;">
    <td style="width: 25%; ">Город:</td>
    <td style="width: 25%; ">' . $city . '</td>
  </tr>
  <tr style="width: 100%;">
    <td style="width: 25%; ">Сумма заказа:</td>
    <td style="width: 25%; ">' . $cost .  '&#8372;</td>
  </tr>
  <tr style="width: 100%;">
  <td style="width: 25%; ">Номер отделения Новой Почты № </td>
  <td style="width: 25%; ">' . $sectionNumber . '</td>
</tr>
<tr style="width: 100%;">
  <td style="width: 25%; ">Адресс отделения:</td>
  <td style="width: 25%; ">' . $sectionAddress . '</td>
</tr>
</table>
' . $orderMessage . '
</div>';

if (!$mail->send()) {
  return false;
} else {
  return true;
}
