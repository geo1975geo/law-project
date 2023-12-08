
var project = [ {
}
]   

var dok = " ";
project.forEach((card) => {

dok +=`<div class="section">
    <div class="inside_section">
        <h3>429</h3>
        <p>Exclusive clients</p>
    </div>

    <div class="inside_section">
        <h3>85</h3>
        <p>Completed Projects</p>
    </div>

    <div class="inside_section">
        <h3>27</h3>
        <p>Finance Experts</p>
    </div>

    <div class="inside_section">
        <h3>99%</h3>
        <p>Success Rate</p>
    </div>
</div>
</div> `;
});

document.getElementById("main_content").innerHTML = dok;








let product = [{
    image: "image/background.jpg"
     }]
    
 let duta = document.getElementById("main-top");
  var doc = "";
  
  async function showAvatar() {
      let response = await fetch("https://jsonplaceholder.typicode.com/photos");
      let user = await response.json();
      for await (const duta of product) {
      doc += `<div>
      <div class="main-top">
      <img class="main-top_background" src="${duta.image}" width="100%", height="100%">
      </div>
    </div>`;
   }
  duta.innerHTML = doc;
  }
  showAvatar();



  let object = [{
   
  
    
  }]
  
  var html = " ";
  object.forEach((card) => {

  html +=`<div class="main-information_inner">
  <div class="main-information_side">
  <div class="left_side">
     <h2 class="header-block_title information-header">Get information<br> about our company</h2>
     <div class="header-block_text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus pharetra, neque, gravida dui. 
         Suspendisse dignissim mauris faucibus auctor in consectetur pellentesque phasellus blandit. 
         Id a, habitant vulputate tortor nulla malesuada 
     </div>
     <button type="submit" class="submit">Read more</button>
 </div>
 <div class="right_side">
     <img class="main-information_image_first" src="image/photo01.jpg" alt="Rectangle-01" style="height: 340px; margin-top: 220px;">
          <div class="main-informacion_image">
         <img class="main-information_image_last" src="image/photo02.jpg" alt="Rectangle 1306">
         <img class="main-information_image" src="image/photo03.jpg" alt="Rectangle 1308">
     </div>
 </div>
</div>
             </div>`;
});
document.getElementById("main_information").innerHTML = html;





    var objects = [ 
        {
    number: '1',
    title: 'Banking & Finance',
    text: 'With lots of unique blocks you can easily create a page without coding with Appmax'
    },
        {
    number: '2',
    title: 'Business Immigration',
    text: 'With lots of unique blocks you can easily create a page without coding with Appmax'


    },
        {
    number: '3',
    title: 'Debt Collection',
    text: 'With lots of unique blocks you can easily create a page without coding with Appmax'

    },
    
        {
    number: '4',
    title: 'Debt Collection',
    text: 'With lots of unique blocks you can easily create a page without coding with Appmax'

    },
    ]   


    var fold = " ";
    objects.forEach((card) => {

    fold +=`<div class="left-side">
    <div class="card">
    <p class="services-number"> ${card.number}</p>
    <h2 class="services-title">${card.title}</h2>
     <p class="services-text"> ${card.text}</p>
  </div>
   </div>`;
});
 document.getElementById("main-services").innerHTML = fold;





 var content = [ {

    }]  

    var folder = " ";
    content.forEach((card) => {

   folder +=`<div class="right_side">
<h2 class="header-block_title services-header">Services we provide<br> all over the world</h2>
  <div class="header-block_text">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus pharetra, neque, gravida dui. 
       Suspendisse dignissim mauris faucibus auctor in consectetur pellentesque phasellus blandit. 
       Id a, habitant vulputate tortor nulla malesuada 
   </div>
   <button type="submit" class="submit_one">Sell all services</button>
</div>
  </div> `;
});
document.getElementById("services-info").innerHTML = folder;





var team_header = [{

}]



let  cards = " ";
team_header.forEach((card) => {

  
   cards +=` <h2 class="header-block_title services-header">Our Team</h2>
   <div class="header-block_text">
   Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh<br> magna. Proin risus erat, fringilla vel purus.
    </div>
    `;

   });


document.getElementById("team-top").innerHTML =  cards;











var team_image = [ 
    {
name: 'George Butler',
image: 'image/photo04.jpg',
text: 'Financial Advisor'
},
    {
name: 'Eli Bennet',
image: 'image/photo05.jpg',
text: 'Financial Advisor'
},
    {
name: 'Eli Bennet',
image: 'image/photo06.jpg',
text: 'Financial Advisor'
},
 
    {
name: 'George Butler',
image: 'image/photo07.jpg',
text: 'Financial Adviso'
}
 ]   





var team = " ";
team_image.forEach((card) => {

   team +=`<div class="col-3 mt-6">
   <div class="team-column">
   <div class="team-image">
    <img src="${card.image}" alt="" class="team-card_image">
   </div>
   <div class="team-iniciall">
    <div class="team-info">
        <div class="team-info_title">${card.name}</div>
        <div class="team-info_text">${card.text}</div>
    </div>
   </div>
</div>
    </div> 
     `;

    });

    
 document.getElementById("team-image").innerHTML = team;








 var testimonials = [{

 }]


 
let  buyer = " ";
testimonials.forEach((card) => {

   
    buyer +=` <div class="main-testimonials_inner">
    <div class="main-testimonials-side">
        <div class="left-side">
            <div class="testimonials-header">
                <h2 class="header-block_title">Testimonials from lovely<br> previous buyers.</h2>
                <div class="header-block_text testimonials-header_block">
                    Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus.
                </div>
                </div>
                <div class="main-testimonials_image">
                    <img src="image/image08.jpg" alt="" class="testimonials-image">
                </div>
        </div>
        <div class="right-side">
              <div class="main-testimonials_images">
                <div class="testimonials-image_block-top">
                <img src="image/image09.jpg" alt="" class="testimonials-image_top">
                <div class="testimonials-inicial">
                    <div class="more_title">
                <div class="testimonials-image_top-title">Demi moore</div>
                <div class="testimonials-image_top-text">West London, UK</div>
            </div>
                </div>
             </div>
            </div>
                <div class="testimonials-image_block-bottom">
                    <div class="testimonials-image_block-bottom_inner">
                <img src="image/image010.jpg" alt="" class="testimonials-image_bottom">
                
                <div class="testimonials-image_bottom_title">Ashton Kutcher</div>
                <div class="testimonials-image_bottom_text">“Saya tuh kalau pengin beli rumah pasti yagn selalu mahal. 
                    Saya tuh gak pengin rumah yang jelek kaya punya kau. Pokoknya saya ganteng.”</div>
                
            </div>
              </div>
            </div>
        </div>
    </div>
     `;

    });


 document.getElementById("buyer").innerHTML =  buyer;






 var footer = [{
   
  
    
 }]
 
 
 let podval = document.getElementById("footer");
 let cont = "";

 
 async function showTitle() {
 
     let response = await fetch("https://jsonplaceholder.typicode.com/photos");
     let user = await response.json();
    for await (const podval of footer) {
     cont += ` <div class="footer-inner" id="footer">
     <div class="footer-inner_body">
         <div class="footer-left_side">
       <ul class="footer-item_list">
        <li class="footer-item_link item-link_footer">COMPANY NAME</li>
         <li class="footer-item_link link-item_footer"><a href="">We make furniture with love and<br> passions. 
             No doubt, really.</a></li>
         <li class="footer-item_link footer-link-item"><a href="">© FinestDevs</a></li>
      </ul>
       <ul class="footer-item_list">
         <li class="footer-item_link item-link_footer">CONTACT</li>
         <li class="footer-item_link"><a href="">62 Orp St, Seattle, USA</a></li>
         <li class="footer-item_link"><a href="">sales@furnatur.com</a></li>
         <li class="footer-item_link"><a href="">+1 800 726 915273</a></li>
       </ul>
     </div>
     <div class="footer-right_side">
       <ul class="footer-item_list">
         <li class="footer-item_link item-link_footer">PRODUCT</li>
         <li class="footer-item_link"><a href="">Living Room</a></li>
         <li class="footer-item_link"><a href="">Bed Room</a></li>
         <li class="footer-item_link"><a href="">Office Room</a></li>
       </ul>
       <ul class="footer-item_list">
         <li class="footer-item_link item-link_footer">OUR COMPANY</li>
         <li class="footer-item_link"><a href="">About us</a></li>
         <li class="footer-item_link"><a href="">Services</a></li>
         <li class="footer-item_link"><a href="">Products</a></li>
       </ul>
     </div>
     </div>
 </div>
     
     `;
 }
 podval.innerHTML = cont;
 }
 
 showTitle();





let links = document.querySelectorAll(".menu_list-item > a");
for (let i = 0; i < links.length; i++ ) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"})
    }; 
}