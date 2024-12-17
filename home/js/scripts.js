const dialogContents = {
  aboutMe: '<h2>About Me</h2><p>I am a passionate individual who loves basketball and cooking. Currently, I am a varsity student taking Information Technology. My dreams include having a comfortable life and being happy. I enjoy spending time with friends and family, and I am always looking for new adventures and experiences.</p>',
  education: '<h2>Education</h2><p>As a varsity student, I have achieved significant milestones in my educational journey. I have participated in various academic competitions and have been recognized for my achievements. I am dedicated to continuous learning and personal growth.</p>',
  course: '<h2>Course</h2><p>I am currently enrolled in an Information Technology course, where I am gaining valuable knowledge and skills. The course covers a wide range of topics, including programming, database management, and network security. I am excited to apply what I have learned in real-world scenarios.</p>',
  experience: '<h2>IT Experience</h2><p>Details about my IT experience: Java, Python. I have worked on several projects that have honed my skills in these languages. I have also gained experience in web development and have contributed to open-source projects. I am always eager to learn new technologies and tools.</p>',
  hobbies: '<h2>Hobbies</h2><p>In my free time, I enjoy playing basketball and cooking. These hobbies bring me joy and relaxation. I also enjoy reading books and watching movies. I believe that having a balanced life is important for overall well-being.</p>',
  goals: '<h2>Goals</h2><p>My goals in life are to have a comfortable life and to be happy. I strive to achieve these dreams through hard work and dedication. I want to make a positive impact on the world and inspire others to do the same. I am committed to continuous learning and personal growth.</p>',
  photo: '<h2>Photos</h2><div class="image-container"><img src="images/image1.jpg" alt="Photo 1" width="300" height="400"><img src="images/image2.jpg" alt="Photo 2" width="300" height="400"></div>'
};

function openDialog(contentKey) {
  const dialogContent = dialogContents[contentKey];
  if (dialogContent) {
    document.getElementById('dialogContent').innerHTML = dialogContent;
    document.getElementById('dialogOverlay').style.display = 'block';
    document.getElementById('dialogBox').style.display = 'block';
    document.getElementById('dialogBox').classList.add('open-animation');
  }
}

function closeDialog() {
  document.getElementById('dialogOverlay').style.display = 'none';
  document.getElementById('dialogBox').style.display = 'none';
  document.getElementById('dialogBox').classList.remove('open-animation');
}
