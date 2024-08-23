<?php
// Agregar encabezados CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Incluir PHPMailer
require 'vendor/autoload.php'; // Asegúrate de que la ruta es correcta

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Configuración del correo electrónico
define('EMAIL_HOST', 'smtp.hostinger.com');
define('EMAIL_PORT', 465);
define('EMAIL_USER', 'daniandrade@dashsystemsmty.com');
define('EMAIL_PASS', 'Dash.2024');

// Obtener los datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$website = $_POST['website'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Configurar PHPMailer
$mail = new PHPMailer(true);
try {
    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = EMAIL_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = EMAIL_USER;
    $mail->Password = EMAIL_PASS;
    $mail->SMTPSecure = 'ssl';
    $mail->Port = EMAIL_PORT;

    // Configuración del correo
    $mail->setFrom($email, 'Formulario de Contacto');
    $mail->addAddress('daniandrade@dashsystemsmty.com'); // Dirección de correo a la que se enviará
    $mail->isHTML(true);
    $mail->Subject = 'Contacto desde la web';
    $mail->Body = "Nombre: $name <br>Correo: $email<br>Teléfono: $phone<br>Mensaje: $message";

    $mail->send();
    echo json_encode(['message' => 'El mensaje ha sido enviado']);
} catch (Exception $e) {
    echo json_encode(['message' => "El mensaje no pudo ser enviado. Error de correo: {$mail->ErrorInfo}"]);
}
?>