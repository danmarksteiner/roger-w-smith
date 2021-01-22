<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $title = strip_tags(trim($_POST["title"]));
        $title = str_replace(array("\r","\n"),array(" "," "),$title);
        $firstName = strip_tags(trim($_POST["firstName"]));
		$firstName = str_replace(array("\r","\n"),array(" "," "),$firstName);
        $lastName = strip_tags(trim($_POST["lastName"]));
        $lastName = str_replace(array("\r","\n"),array(" "," "),$lastName);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = strip_tags(trim($_POST["phone"]));
        $country = strip_tags(trim($_POST["country"]));
        $contactMethod = $_POST["contactMethod"];
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        // if ( empty($firstName) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        //     // Set a 400 (bad request) response code and exit.
        //     header('Status: 400', TRUE, 400);
        //     echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        //     exit;
        // }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "CarolineSmith@rwsmithwatches.com";

        // Set the email subject.
        $subject = "New enquiry from $title $firstName $lastName";

        // Build the email content.
        $email_content .= "Title: $title\n";
        $email_content .= "First Name: $firstName\n";
        $email_content .= "Last Name: $lastName\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Phone: $phone\n";
        $email_content .= "Country: $country\n";
        $email_content .= "Preferred method of contact: $contactMethod\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $firstName <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            header('Location: thanks.php');
            header('Status: 200', TRUE, 200);
            //http_response_code(200);
            //echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            header('Status: 500', TRUE, 500);
            //http_response_code(500);
            //echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        header('Status: 403', TRUE, 403);
        //http_response_code(403);
        //echo "There was a problem with your submission, please try again.";
    }

?>