# Stream Shop

A final project submission of Generasi Gigih 3.0 by Muhammad Rizky Khairullah (GG3FSGP0455). This repository only contain the front end of stream shop application. The backend side is avalaible at https://github.com/Rzkykhrllh/GG3.0-Midterm.

## Installation
1. Clone this github into your local machine 
    ```bash
    git clone https://github.com/Rzkykhrllh/GG3.0-Midterm.git
    ```
2. Install all the dependencies
    ```bash
    git clone https://github.com/Rzkykhrllh/GG3.0-Midterm.git
    ```
3. Create the environtment variable named `.env.dev` and `.env.prod`. In both file create variable named `REACT_APP_BASE_URL` and the value is the endpoint of your server
4. Run the local server from this repository https://github.com/Rzkykhrllh/GG3.0-Midterm
5. After run the local server, now you can run the front end application with this command:
    ```bash
    npm run dev
    ```
6. Enjoy the application

## Page & Feature
1. Homepage
In this page you can see all the avaliable video to watch

2. Video Detail Page
In this page you can watch the video you select, see all the product related to the video, and the comment section. The Product section is a carousel so you can scroll horizontally to see more product. In the comment secton you can see the comment regarding the video and give your own comment. You can sccroll in the comment section to see the earlier comment. You need to login first before give comment. The comment section is scrollable.

3. Register Page
In this page, you can register yourself yourself. You have to input your name, email, phone number and password. The password must contain at least 1 uppercase, 1 lowercase and 1 numeric. The password minimum length is 8 character.

4. Login Page
Inn this page, you can log in so you can comment in the video detail page.

All the pages have responsive user interface.

## Screenshoots
1. Homepage
   ![image](https://github.com/Rzkykhrllh/GG3.0-Finalterm-FE/assets/22367124/b103a084-9dc2-4233-a7a1-d4ecdc129db3)
   ![image](https://github.com/Rzkykhrllh/GG3.0-Finalterm-FE/assets/22367124/1a590470-73c0-491d-823f-19bd82547885)

2. Video Detail Page
   ![image](https://github.com/Rzkykhrllh/GG3.0-Finalterm-FE/assets/22367124/36b39d78-32e5-4ba7-92f2-3543210f1ebf)
   ![image](https://github.com/Rzkykhrllh/GG3.0-Finalterm-FE/assets/22367124/7def327b-9b49-43f5-8a4a-b5a7f4496ea4)
   ![image](https://github.com/Rzkykhrllh/GG3.0-Finalterm-FE/assets/22367124/8cc8db32-4652-4396-94da-5307cbe92e4b)

3. Register Page
   ![image](https://github.com/Rzkykhrllh/GG3.0-Finalterm-FE/assets/22367124/6732688e-0abd-4deb-ba08-a5ef73d16362)
   ![image](https://github.com/Rzkykhrllh/GG3.0-Finalterm-FE/assets/22367124/990ce268-303e-49ae-a73d-3b72aaa3e2b4)

4. Login Page
   ![image](https://github.com/Rzkykhrllh/GG3.0-Finalterm-FE/assets/22367124/f943182a-e6c6-4459-b7cf-b19cea6c1a85)
   ![image](https://github.com/Rzkykhrllh/GG3.0-Finalterm-FE/assets/22367124/5beca2ad-1325-4daa-9d6f-4cee5e7b4aaf)

5. Carousel in Vdeo Detail Page
   ![Animation](https://github.com/Rzkykhrllh/GG3.0-Finalterm-FE/assets/22367124/fd649c88-f504-4e48-8a87-1713fdb4bfed)



## TechStack
Techstack: React JS, Tailwind CSS, Daisy UI, Axios, React Router Dom, React Spinner, React Toastify, Tailwind Scrollbar.
Hooks: useState, useEffect, useContext, useAuth (custom hooks), useAxiosPrivate (custom hooks), useRefreshToken (custom hooks)
