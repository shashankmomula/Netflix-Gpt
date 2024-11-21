# Netflix GPT

A Netflix-inspired movie recommendation app built with React, Redux, and Tailwind CSS, integrated with GPT-3.5 for personalized movie suggestions. Users can sign up, log in, update profiles, and browse movie lists, while enjoying a responsive design with multi-language support.

---

## **Installation & Setup**
1. **Create React App**  
   Create a new React app using the following command:
   ```bash
   npx create-react-app "name-of-the-folder"
   ```

2. **Tailwind CSS Setup**  
   - Configured Tailwind CSS for styling and responsiveness.

---

## **Project Structure**
- **Header**  
  - Displays navigation elements and user info.

- **Routing**  
  - Setup React Router for navigation between different pages (e.g., Login, Signup, Browse).

- **Login Form**  
  - User authentication form to sign in.

- **Sign Up Form**  
  - Form for creating a new user account.

- **Form Validation**  
  - Validates user inputs for both Login and Sign Up forms.

- **useRef Hook**  
  - Implemented useRef hook for form field management.

- **Firebase Setup**  
  - Firebase authentication setup for user management.

- **Deploying to Production**  
  - Deployed the application to production using a hosting service like Netlify.

---

## **Features**
### **Login/Sign Up**
- **Sign In / Sign Up Form**  
  - Users can sign in or create a new account with Firebase Authentication.

- **Redirect to Browse Page**  
  - Upon successful login, users are redirected to the browse page.

### **Browse (After Authentication)**
- **Header**  
  - Display the header with navigation options and user info.

- **Main Movie**  
  - Displays a featured movie with the trailer as the background, title, and description.

- **Movie Suggestions**  
  - A list of recommended movies based on the user's interests, fetched from TMDB API.

### **NetflixGPT**
- **Search Bar**  
  - Allows users to search for movies based on their preferences.

- **Movie Suggestions**  
  - Personalized movie suggestions using the GPT-3.5 integration, making the movie search more intelligent and user-centric.

---

## **Tech Stack**
- **Frontend**: React, Redux, Tailwind CSS, Vite Bundler
- **Backend**: Firebase (Authentication)
- **APIs**: TMDB API, GPT-3.5 (Movie recommendations)
- **State Management**: Redux Toolkit

---

## **Live Demo**
You can access the live demo of the project [here](https://netfilxx-gpt.netlify.app).

---

## **Contributing**
Feel free to fork the repository, submit issues, and open pull requests for improvements. Your contributions are welcome!

---

