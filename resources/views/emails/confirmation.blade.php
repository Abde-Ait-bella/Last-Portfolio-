<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmation de réception</title>
    <style>
        /* Styles de base */
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
        }

        /* Container principal */
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            margin-top: 20px;
            margin-bottom: 20px;
        }

        /* En-tête */
        .email-header {
            background: linear-gradient(135deg, #62748e 0%, rgb(227, 227, 227) 100%);
            padding: 30px 20px;
            text-align: center;
        }

        .logo {
            max-width: 100px;
            height: auto;
            margin-bottom: 10px;
        }

        .header-title {
            color: #ffffff;
            font-size: 24px;
            margin: 0;
            font-weight: 600;
        }

        /* Contenu */
        .email-content {
            padding: 30px 25px;
            background-color: #ffffff;
        }

        .greeting {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #292929;
        }

        .message {
            font-size: 16px;
            color: #62748e;
            margin-bottom: 25px;
        }

        /* Citation du message */
        .message-quote {
            background-color: #F3F4F6;
            border-left: 4px solid #62748e;
            padding: 15px;
            border-radius: 4px;
            margin: 30px 0;
            font-size: 13px;
        }

        /* CTA */
        .cta-container {
            text-align: center;
            margin-bottom: 25px;
        }

        .cta-button {
            display: inline-block;
            background-color: #9e9e9e4a;
            color: #292929;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 6px;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        /* Pied de page */
        .email-footer {
            background-color: #F9FAFB;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #E5E7EB;
        }

        .social-links {
            margin-bottom: 15px;
        }

        .social-link {
            padding: 0 5px;
        }


        .footer-text {
            font-size: 14px;
            color: #6B7280;
            margin: 0;
        }

        .address {
            font-size: 12px;
            color: #9CA3AF;
            margin-top: 10px;
        }

        /* Responsive */
        @media screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin-top: 0;
                margin-bottom: 0;
                border-radius: 0;
            }

            .email-header {
                padding: 20px 15px;
            }

            .email-content {
                padding: 25px 15px;
            }
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="email-header">
            <h1 class="header-title">Merci pour votre message !</h1>
        </div>

        <div class="email-content">
            <p class="greeting">Bonjour {{ $name }},</p>

            <p class="message">
                Je vous remercie d'avoir pris le temps de me contacter. J'ai bien reçu votre message et je vous
                répondrai dans les meilleurs délais.
            </p>

            <div class="message-quote">
                <p>Votre message a été envoyé avec succès et sera traité au plus vite.</p>
            </div>

            <p class="message">
                Si votre demande nécessite une réponse urgente, n'hésitez pas à me contacter directement par téléphone.
            </p>
            <div style="text-align: center; margin-top: 25px;">
                <a href="tel:+212681783861" style="display: inline-block; background-color: #f8f9fa; color: #62748e; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: 600; border: 1px solid #e5e7eb; transition: all 0.3s ease;">
                    <span style="margin-right: 8px;">📞</span> +212 681 783 861
                </a>
            </div></div>

            <div class="cta-container">
                <a href="https://aitbella.digital" class="cta-button">
                    Visiter mon portfolio
                </a>
            </div>

            <p class="message">
                Cordialement,<br>
                <strong>Abdessamad Ait-bella</strong>
            </p>
        </div>

        <div class="email-footer">
            <div class="social-links">
                <a href="https://github.com/Abde-Ait-bella" class="social-link" target="_blank">
                    Github
                </a>
                <a href="https://www.linkedin.com/in/abdessamad-ait-bella-92481a249/" class="social-link ml-2"
                    target="_blank">

                    Linkedin
                </a>
                <a href="mailto:abdessamadaitbella1998@gmail.com" class="social-link">
                    Email
                </a>
            </div>

            <p class="footer-text">
                © {{ date('Y') }} Abdessamad Ait-bella .
            </p>

            <p class="address">
                Portfolio - Développeur Web Full Stack
            </p>
        </div>
    </div>
</body>

</html>