<?php
/**
 * Nextart Power Controller - Production cPanel Contact Form Mailer
 * Designed for Namecheap Apache Shared Hosting
 */

// Set response headers for AJAX
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// CONFIGURATION: Set your destination email addresses here
$to_emails = array(
    "ygpatil2214@gmail.com",     // Primary User Email
    "sales@nextartpower.com"     // Corporate Sales Desk (placeholder)
);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize input data
    $name     = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
    $company  = filter_input(INPUT_POST, 'company', FILTER_SANITIZE_SPECIAL_CHARS);
    $phone    = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
    $email    = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $location = filter_input(INPUT_POST, 'location', FILTER_SANITIZE_SPECIAL_CHARS);
    $loadKva  = filter_input(INPUT_POST, 'loadKva', FILTER_SANITIZE_SPECIAL_CHARS);
    $subject  = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_SPECIAL_CHARS);
    $message  = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);
    $urgency  = filter_input(INPUT_POST, 'urgency', FILTER_SANITIZE_SPECIAL_CHARS);

    if (empty($name) || empty($phone) || empty($email)) {
        http_response_code(400);
        echo json_encode(array("status" => "error", "message" => "Please complete all required fields (*)."));
        exit;
    }

    $mail_subject = "⚡ [NEXTART B2B LEAD] " . $subject . " - from " . $company;

    // Build elegant HTML email template
    $email_content = '
    <html>
    <head>
        <title>New Industrial Enquiry - Nextart Power Controller</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333333; }
            .container { max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
            .header { bg-color: #0f172a; background: #0f172a; color: #ffffff; padding: 20px; text-align: center; }
            .header h2 { margin: 0; font-size: 20px; letter-spacing: 1px; color: #ffffff; }
            .header p { margin: 5px 0 0; font-size: 12px; color: #94a3b8; }
            .body { padding: 25px; }
            .badge { display: inline-block; padding: 4px 10px; font-size: 11px; font-weight: bold; border-radius: 4px; }
            .badge-high { background-color: #fef2f2; color: #dc2626; border: 1px solid #fca5a5; }
            .badge-medium { background-color: #fff7ed; color: #ea580c; border: 1px solid #ffedd5; }
            .table-data { width: 100%; border-collapse: collapse; margin-top: 15px; }
            .table-data td { padding: 10px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
            .table-data td.label { font-weight: bold; color: #475569; width: 35%; }
            .table-data td.value { color: #0f172a; }
            .msg-box { background: #f8fafc; border-left: 4px solid #ea580c; padding: 15px; margin-top: 15px; font-style: italic; font-size: 14px; border-radius: 0 4px 4px 0; }
            .footer { background: #f1f5f9; padding: 15px; text-align: center; font-size: 11px; color: #64748b; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>NEXTART POWER CONTROLLER</h2>
                <p>New B2B Lead Generated from Corporate Industrial Portal</p>
            </div>
            <div class="body">
                <p>Hello Admin,</p>
                <p>A new customer has submitted an industrial sales / technical consultation form. Here are the specifications:</p>
                
                <table class="table-data">
                    <tr>
                        <td class="label">Client Name:</td>
                        <td class="value">'.htmlspecialchars($name).'</td>
                    </tr>
                    <tr>
                        <td class="label">Company Name:</td>
                        <td class="value">'.htmlspecialchars($company).'</td>
                    </tr>
                    <tr>
                        <td class="label">Phone / Mobile:</td>
                        <td class="value"><strong>'.htmlspecialchars($phone).'</strong></td>
                    </tr>
                    <tr>
                        <td class="label">Email Address:</td>
                        <td class="value">'.htmlspecialchars($email).'</td>
                    </tr>
                    <tr>
                        <td class="label">Site Location:</td>
                        <td class="value">'.htmlspecialchars($location).'</td>
                    </tr>
                    <tr>
                        <td class="label">Required Capacity:</td>
                        <td class="value"><strong>'.htmlspecialchars($loadKva).'</strong></td>
                    </tr>
                    <tr>
                        <td class="label">Subject Interest:</td>
                        <td class="value">'.htmlspecialchars($subject).'</td>
                    </tr>
                    <tr>
                        <td class="label">Urgency Level:</td>
                        <td class="value">
                            <span class="badge badge-'.(($urgency == "Immediate / Breakdown") ? "high" : "medium").'">
                                '.htmlspecialchars($urgency).'
                            </span>
                        </td>
                    </tr>
                </table>';

    if (!empty($message)) {
        $email_content .= '
                <h4 style="margin: 25px 0 10px; color: #0f172a;">Detailed Project Scope:</h4>
                <div class="msg-box">
                    '.nl2br(htmlspecialchars($message)).'
                </div>';
    }

    $email_content .= '
            </div>
            <div class="footer">
                This inquiry was automatically dispatched from the Nextart SEO website system.<br>
                For immediate lead callback, tap the phone number on your mobile.
            </div>
        </div>
    </body>
    </html>
    ';

    // Headers for HTML emailing
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Nextart Web Portal <no-reply@nextartpower.com>" . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Dispatch email to all configured destinations
    $success_count = 0;
    foreach ($to_emails as $recipient) {
        if (mail($recipient, $mail_subject, $email_content, $headers)) {
            $success_count++;
        }
    }

    if ($success_count > 0) {
        http_response_code(200);
        echo json_encode(array("status" => "success", "message" => "Enquiry dispatched to admin desks successfully."));
    } else {
        http_response_code(500);
        echo json_encode(array("status" => "error", "message" => "Internal mail server error. Please call +91 94222 47352 directly."));
    }

} else {
    http_response_code(403);
    echo json_encode(array("status" => "error", "message" => "Direct script access prohibited."));
}
?>
