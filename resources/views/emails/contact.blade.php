<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message de Contact</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            font-family: cursive;
        }
        .header {
            background-color: #4A6FDC;
            padding: 25px;
            text-align: center;
            color: white;
        }
        .content {
            padding: 30px;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #888;
        }
        h2 {
            color: #4A6FDC;
            margin-top: 0;
        }
        .info-item {
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }
        .info-item:last-child {
            border-bottom: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Nouveau Message</h1>
        </div>
        <div class="content">
            <h2>Message de contact</h2>
            
            <div class="info-item">
                <strong>Nom:</strong> {{ $data['name'] }}
            </div>
            
            <div class="info-item">
                <strong>Email:</strong> <a href="mailto:{{ $data['email'] }}">{{ $data['email'] }}</a>
            </div>
            
            <div class="info-item">
                <strong>Message:</strong>
                <p>{{ $data['message'] }}</p>
            </div>
        </div>
        <div class="footer">
            <p>Ce message a été envoyé via le formulaire de contact de votre Portfolio.</p>
        </div>
    </div>
</body>
</html>
