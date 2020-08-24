<?php
   
   function filter_email_header($form_field) {
    return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);

   }


       

   
   
   $email_address = $_POST['email'];
   $nombre = $_POST['nombre'];
   $asunto = $_POST['asunto'];
   $mensaje = $_POST['input-text-area'];
   $email_addressn  = filter_email_header($email_address);
   $mensaje_final = "Hola buen día, has recibido un mensaje de $nombre \r\n \r\n [ $asunto ] \r\n \r\n $mensaje";
   $cabeceras = "From: $email_address" . "\r\n" .
        "Reply-To: $email_address" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();
   
   
   
    
    
    
    
    $headers = "From: $email_addressn";
    $sent = mail('benjamin.flores@sinergiarica.cl', 'Consulta de Servicios',$mensaje_final, $cabeceras);

    #Thank user or notify them of a problem

?>