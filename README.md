# Serverless Web Application on AWS

## Project Name: Serverless Web Application on AWS

### Project Description:

In this project, you will build a serverless web application using AWS Lambda, DynamoDB, and S3. The application will allow users to create, read, update, and delete (CRUD) items from a DynamoDB table.

### Project Architecture:

![Serverless Web Application on AWS Architecture](https://user-images.githubusercontent.com/66474973/228492073-5cd3d975-3439-4ce4-b109-fb33997df3c3.png)

### Steps to Build the Project:

* Create a DynamoDB table to store the items. \
* Build a Lambda function to handle the CRUD operations on the DynamoDB table. \
* Use S3 to store and host the web application's static files (HTML, CSS, and JavaScript). \
* Create a CloudFront distribution to serve the S3-hosted static files with low latency. \

### Expected Outcome:

Upon completing the project, you will have a working serverless web application hosted on AWS. \
You will have hands-on experience building a serverless application using AWS Lambda, DynamoDB, S3, CloudFront. \
Additionally, you will have experience working with AWS services and integrating them to build a complete solution.

This project will help you improve your skills in cloud computing, serverless architecture, and AWS services.

Link to the documentation: https://docs.google.com/document/d/1FKIs7_yF0D98dHC1D-_pE494EiNF5xhP3s7YCRzw3B8/edit?usp=sharing. 



Follow our tutorials here: https://www.youtube.com/@amonkincloud/videos \
Follow our blog here: https://amonkincloud.com/ \
Follow my personal blog here:https://dev.to/yeshwanthlm/ \
Follow us on Instagram: https://www.instagram.com/amonkincloud/ \
For queries write to us at: amonkincloud@gmail.com 









# 🌟 Serverless Visitor Counter with AWS

![Modern Serverless Architecture](https://i.imgur.com/JKQ4W0x.png)

A beautiful, responsive web application demonstrating serverless architecture on AWS with:
- **Frontend**: Hosted on S3 + CloudFront
- **Backend**: AWS Lambda function
- **Database**: DynamoDB for visitor counting
- **API**: Lambda Function URL for direct access

## ✨ Features
- Real-time visitor counter
- Interactive greeting system
- Modern UI with animations
- Fully responsive design
- 100% serverless infrastructure

## 🛠️ Architecture
```mermaid
graph LR
    A[User] --> B[CloudFront CDN]
    B --> C[S3 Bucket]
    C --> D[HTML/CSS/JS]
    D --> E[Lambda Function URL]
    E --> F[DynamoDB]


Tip: Perfect for showcasing AWS serverless skills on LinkedIn!
---

### Points forts de la nouvelle version :
1. **Design professionnel** avec dégradés et animations CSS modernes
2. **Expérience utilisateur améliorée** :
   - Feedback visuel lors des interactions
   - Animation du compteur
   - Message de bienvenue temporaire
3. **Code robuste** :
   - Gestion des erreurs dans le JavaScript
   - Intervalle de rafraîchissement du compteur
4. **Responsive** : S'adapte à tous les écrans
5. **Branding** : Mention des technologies AWS

Pour votre post LinkedIn, je recommande :
1. Une capture d'écran de la nouvelle interface
2. Un schéma architecture simple
3. Un court texte expliquant les technologies utilisées
4. Un lien vers le code GitHub si public

Souhaitez-vous que j'ajoute d'autres fonctionnalités comme un dark mode ou des statistiques avancées ? 😊    