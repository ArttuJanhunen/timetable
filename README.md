# Timetable app for eficode summer internship

[Timetable in Heroku](https://timetable-2020.herokuapp.com/)

### Idea of the application

This application shows the next two commuting connections from Ruskeasanta, Vantaa, to Eficode office
in Helsinki. Information is fetched from hsl api every minute and updated. Optimal usage is to run this
app on a big screen. It also behaves quite well on different platforms, such as laptops. Mobile phone 
requires some scrolling. Applications optimization included events like coding on the floor with
laptop connected to 45" TV and fiddling around with CSS.

### To run locally

* Clone repository
* Run `npm install` in repository root
* Run `npm start`, app will open to `localhost:3000`

### To run with docker

* Clone repository
* Run `docker build -t <preferred-image-name> .` in repository root
* Run `docker run -p 3000:3000 <preferred-image-name>`
* Go to localhost port `3000`
* Enjoy
