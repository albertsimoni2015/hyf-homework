# hyf-homework
If we creat a cv page, we will already want to insert a photograph with a presentation paragraph and contact information.
Then we will want to present our work expeiencees, then our education and skill's and finally finish with our areas of intrest.
we will start with mobile version of our CV which  will be the standard version. To creat this version we will use the flexible boxes, chossing one column orientation mainly.
As usual, we start by creating the HTML structure before defining the specific styles in CSS.
We will already start here with the minimum structure of a valid page and will also fill in the meta name="viewport" and link our Html file to a CSS file.we will use
Google fonts for making awesome web page.
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Vartan  Simoni Resume</title>
     <!-- Google Fonts-->
   <script src= "https://kit.fontawesome.com/6ef55de7e7.js"></script>
    
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <link rel="stylesheet" href="cv.css">
</head>
Next, we're going to create a header  area for our page with a header element and just put the main title of our resume page here
<body>
    <header >
        <h1>Vartan Simoni resume</h1>
         </header>
After our header, we want  to creat a first presentation section for our CV. This section will contain:
A block containing a profile photo;
A block containing a presentation paragraph and a link to download the CV in PDF format;
A block of contacts information and links to our social networks.
 <section>
        <div class="photo">
            <img src="cv-profil.jpg" alt="Profile picture">
        </div>
        <div class="pres">
            <h2>About me</h2>
            <p>I am originally Armenian and have lived and worked in several countries. For this reason I speak six different languages .
                 I am electronic engineer by profession and have experience  in electronics field. Before my education I worked as a mathematics teacher</p>
            <a href="Resume.pdf" download>Download my CV</a>
        </div>
        <div class="contact">
            <h2>Contact</h2>
            <div class="contact-flex">
                <p>Name : </p>
                <p>Vartan Simoni</p>
            </div>
            <div class="contact-flex">
                <p>Address : </p>
                <p>Troensevej 1, 23, Naestved, Denmark</p>
            </div>
            <div class="contact-flex">
                <p>Mobile :</p>
                <p>+45 91 42 31 34</p>
            </div>
            <div class="contact-flex">
                <p>Mail : </p>
                <p><a href="mailto:albertsimoni2015@gmail.com">albertsimoni2015@gmail.com</a></p>
            </div>

            <div class="social">
                <a href="https://www.facebook.com/vartan.simoni.3"><img src="fb.png" alt="Logo Fb"></a>
                <a href="#"><img src="tw.png" alt="Logo Tweeter"></a>
                <a href="#"><img src="lk.png" alt="Logo Linkdin"></a>
                <a href="#"><img src="yt.png" alt="Logo Youtube"></a>
            </div>
        </div>
    </section>

Our first block of content has a very simple structure: a title, a paragraph and a link.
The structure of our second block is a little more complex: we place the different contact information in different div with 
class  name ="contact-flex". The idea will be to creat flexible containers to align the elements.
We creat a block with our social icons which will be clickable.
After presentation section coming two other sections which have a similar structure:
second place coming a section describing our work experiences and a third section with eductional background.
Each of these two sections will be divided into blocks representing an experience.
Each experience block will follow the same pattern: a   logo, "meta" information about the experience and a description of it.
Work experience section
<section>
        <h2>Work experience </h2>
        <div class="exp">
            <div class="exp-icon">
                <i class="far fa-building"></i>
            </div>
            <div class="exp-info">
                <h3>Technician</h3>
                <h4>Denmark:</h4>
                <h4>2016-2017</h4>
            </div>
            <div class="exp-desc">
                <p>Worked as technician for repair of electronic devices.</p>
            </div>
        </div>
        <div class="exp">
            <div class="exp-icon">
                <i class="fas fa-laptop-house"></i>
            </div>
            <div class="exp-info">
                <h3>Technician</h3>
                <h4>Russia:</h4>
                <h4>2002-2013</h4>
            </div>
            <div class="exp-desc">
                <p>Worked  as  technician,  installed satellite internet  and  tv Dishes.</p>
            </div>
        </div>
        <div class="exp">
            <div class="exp-icon">
                <i class="fas fa-cogs"></i>
            </div>
            <div class="exp-info">
                <h3>Technician</h3>
                <h4>Russia:</h4>
                <h4>1998-2000</h4>
            </div>
            <div class="exp-desc">
                <p>Worked  as technician  in "Moscom paging "   and   "Radio Page" British company, 
                     change the frequency for pagers and tuned and repair them.</p>
            </div>
        </div>
    </section>
    third section eduction
     <section>
        <h2>Education</h2>
        <div class="exp">
            <div class="exp-icon">
                <i class="fas fa-university"></i>
            </div>
            <div class="exp-info">
                <h3>Electronics Engineer </h3>
                <h4>1985 – 1993</h4>
            </div>
            <div class="exp-desc">
                <p>Master in electronic science,  from Armenia</p>
            </div>
        </div>
        
        <div class="exp">
            <div class="exp-icon">
                <i class="fas fa-school"></i>
            </div>
            <div class="exp-info">
                <h3>Diplom</h3>
                <h4>1970-1982 </h4>
            </div>
            <div class="exp-desc">
                <p>High School,  Mathematical field,  from Iran</p>
            </div>
        </div>
    </section>

Fourth section presenting our skill's with filled bars
 <section>
        <h2>Skill's</h2>
        
        <div class="comp">
            <p>HTML5</p>
            <div class="conteneur-barre"><span class="barre c100"></span></div>
        </div>
        <div class="comp">
            <p>CSS3</p>
            <div class="conteneur-barre"><span class="barre c95"></span></div>
        </div>
        <div class="comp">
            <p>JavaScript</p>
            <div class="conteneur-barre"><span class="barre c90"></span></div>
        </div>
        <div class="comp">
            <p>Nodjs</p>
            <div class="conteneur-barre"><span class="barre c100"></span></div>
        </div>
        <h3 class="h3left">Personality</h3>
        <div class="comp2">
            <p>Problem-Solving Skills</p>
            <p>90%</p>
            <div class="conteneur-barre2"><span class="barre c90"></span></div>
        </div>
        <div class="comp2">
            <p>Honesty</p>
            <p>95%</p>
            <div class="conteneur-barre2"><span class="barre c95"></span></div>
        </div>
        <div class="comp2">
            <p>Flexibility</p>
            <p>95%</p>
            <div class="conteneur-barre2"><span class="barre c95"></span></div>
        </div>
        <div class="comp2">
            <p>Cheerful</p>
            <p>95%</p>
            <div class="conteneur-barre2"><span class="barre c95"></span></div>
        </div>
    </section>
    Finally, our last section will allow us to present our areas of interest through thumbnails.
     <section>
        <h2>Hobby </h2>
        <figure class="interest">
            <img src="chess.jpg" alt="Chess">
            <figcaption>Chess</figcaption>
        </figure>
        <figure class="interest">
            <img src="diving.jpg" alt="Diving">
            <figcaption>Diving</figcaption>
       
    </section>
    We finishing with footer to CV to have symmetry effect with the header.
    <footer>
        <p><a href="#">©VartanSimoni</a> 2020</p>
        
    
    </footer>
    CSS STYLES OF THE MOBILE VERSION OF OUR CV
    We will start by creating the styles of the mobile version of our CV which
    will be the standard style and then we will use Media Queries for the styles of the desktop version
    Here  we are already going to take care of performing a CSS resetof the internal and external margins
    on all our elements to have the same behavior in all browsers  and to be able to position them precisely then.
    We will also take advantage of this to define some default styles such as the font, the default alignment of texts,
    how the size of elements will be calculated or the display of link elements.
    
/*reset*/
*{
    font-family: Avenir, sans-serif;
    padding: 0px;
    margin: 0px;
    text-align: justify;
    box-sizing: border-box;
}
body{
    background: #ededed;
}
p{
    font-size: 1em;
    line-height: 1.5em; 
}
a{
    text-decoration: none;
    color: #000;
}
