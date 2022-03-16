function footer1() {
    return `<div class="footer_s" >
    <div class="footer">
        <h4>NEW TO YOOX</h4>
        <div style="border:1px solid black;width:25%;margin:auto"></div>
        <p>Shopping guide</p>
        <p>iPhone/iPad/Android</p>
        <p>Browse all Designers</p>
        <p>Browse all Categories</p>
    
    </div>
    <div class="footer">
        <h4>HELP</h4>
        <div style="border:1px solid black;width:25%;margin:auto"></div>
        <p>Shipping times & costs</p>
        <p>Payments and web security</p>
        <p>Product quality</p>
        <p>Track ypur order</p>
        <p>Returns & refunds</p>
        <p>FAQs</p>
        <p>Size Guide</p>
    </div>
</div>
<div class="footer_m">
    <h4>YOOX NEWS</h4>
    <p style="text-align:center">Sign up for the newsletter and discover the latest arrivals and promotions</p>
    <input type="text" placeholder="INSERT YOUR E-MAIL ADDRESS" style="height:15%;margin-bottom: 5%;width:90%">
    <div>
        <label class="radio">
          <input type="radio" name="answer" checked >
         Woman
        </label>
        
        <label class="radio">
          <input type="radio" name="answer">
          Man
        </label>
    </div>

    <div id="checkbox">
        <div style="padding-top: 40%;">
            <label class="checkbox">
                <input type="checkbox" class="checkmark">
            </label>
        </div>
        <div >
            <span style="text-align: justify;">I consent to receive YOOX newletters via email. For further information, please consult the PrivacyPolicy</span>
        </div>        
    </div>
   
   <button id="signup"> SIGNUP</button>
 
        
</div>
<div class="footer_s">
    <div class="footer">
        <h4>MYOOX</h4>
        <div style="border:1px solid black;width:25%;margin:auto"></div>
        <p>Login</p>
        <p>My Orders</p>
        <p>My Details</p>
        <p>Dream Box</p>
        <p>Premiere</p>            
    </div>
    <div class="footer">
        <h4>ABOUT US</h4>
        <div style="border:1px solid black;width:25%;margin:auto"></div>
        <p>Company Info</p>
        <p>Press</p>
        <p>Affiliation</p>
        <p>Careers</p>
    </div>
</div>`
}


function footer2() {
    return `<hr>
    <div id="Media_icons" >
        <div id="socail_icon" class="media_icons">
           <span style="font-size: 12px">CONNECT WITH US</span>
           <span><i class="fab fa-facebook-f"></i></span>
           <span><i class="fab fa-twitter"></i></span>
           <span><i class="fab fa-instagram"></i></span>
           <span><i class="fab fa-youtube"></i></span>
           <span><i class="fab fa-pinterest-p"></i></span>
        </div>
        <div id="Phone_icon" class="media_icons">
            <span><i class="fas fa-mobile-alt"></i></span>
            <span style="font-size: 12px">DOWNLOAD THE APP FOR iOS/ANDROID</span>
            
        </div>`
}




function footer3() {
    return `        <p>POWERED BY YOOX NET-A-PORTER GROUP - COPYWRIGHT 2000-2022 YOOX NET-A-PORTER GROUP S.P.A.-ALL RIGHTS RESERVED</p>
    <p style="color:rgb(160, 158, 158)">LEGAL AREA / PRIVACY POLICY</p>
`
}

export { footer1, footer2, footer3 };