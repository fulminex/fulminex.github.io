<?php
session_cache_limiter('nocache');
header('Expires: ' . gmdate('r', 0));

header('Content-type: application/json');

require 'php-mailer/class.phpmailer.php';

// Your email address
$to = 'angelherrerax7@gmail.com';

$subject = $_POST['assunto'];

if($to) {

	$name = $_POST['nome'];
	$email = $_POST['email'];
	
	$fields = array(
		0 => array(
			'text' => 'Nome',
			'val' => $_POST['nome']
		),
		1 => array(
			'text' => 'Email',
			'val' => $_POST['email']
		),
		2 => array(
			'text' => 'Mensagem',
			'val' => $_POST['mensagem']
		)
	);
	
	$message = "";
	
	foreach($fields as $field) {
		$message .= $field['text'].": " . htmlspecialchars($field['val'], ENT_QUOTES) . "<br>\n";
	}
	
	$mail = new PHPMailer;

	$mail->IsSMTP();                                      // Set mailer to use SMTP
	
	// Optional Settings
	$mail->Host = 'smtp.gmail.com';				  // Specify main and backup server
	$mail->Port = 25; 
	$mail->SMTPAuth = true;                             // Enable SMTP authentication
	$mail->Username = '';             		  // SMTP username
	$mail->Password = '';                         // SMTP password
	//$mail->SMTPSecure = 'ssl';                          // Enable encryption, 'ssl' also accepted

	$mail->From = $email;
	$mail->FromName = $_POST['name'];
	$mail->AddAddress($to);								  // Add a recipient
	$mail->AddReplyTo($email, $name);

	$mail->IsHTML(true);                                  // Set email format to HTML
	
	$mail->CharSet = 'UTF-8';

	$mail->Subject = $subject;
	$mail->Body    = $message;

	if(!$mail->Send()) {
	   $arrResult = array ('response'=>'error');
	}

	$arrResult = array ('response'=>'success');

	echo json_encode($arrResult);
	
} else {

	$arrResult = array ('response'=>'error');
	echo json_encode($arrResult);

}
?>