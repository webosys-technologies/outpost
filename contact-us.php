<?php include 'header.php'; ?>
<?php
//if($_POST["contactform"])
//{
//    $name=$_POST["full_name"];
//    $email=$_POST["email"];
//    $phone=$_POST["phone"];
//    $comments=$_POST["comments"];
//    
//    // the message
//    $msg = "Name: $name <br>Email: $email <br> Phone: $phone <br>Inquiry msg: $comments";
//
//    // use wordwrap() if lines are longer than 70 characters
//    $msg = wordwrap($msg,70);
//    $headers = "From: team@webosys.com" . "\r\n" .
//    "CC: sunilkhandare88@gmail.com";
//    // send email
//     //outpostatalibaug@futuregroup.in
//    if(mail("outpostatalibaug@futuregroup.in","outpost Website Inquiry",$msg,$headers))
//    {
//        echo "Inquiry sent successfully to Oupost";
//    }
//    else
//    {
//        echo "Inquiry was not sent,Please try again";
//    }
//}

?>
<!-- start breadcrumb -->
<div class="breadcrumb-wrapper">
	<div class="section-title">
		<h2>Contact Us</h2>
		<ol class="breadcrumb">
			<li><a href="#">Home</a></li>
			<li class="active">Contact Us</li>
		</ol>
	</div>
	<div class="overlay"></div>
</div>
<!-- end breadcrumb -->


<!-- =========================
CONTACT SECTION
============================== -->
<section id="contact" class="">
	<div class="container clearfix">
	
		<div class="row">
			<div class="section-header-3 col-md-8 col-md-offset-2">

				<h2 class="text-color-02">GET IN TOUCH</h2>
				<!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! Lorem ipsum dolor sit amet, consectetur.</p>-->

            </div> <!-- end of .section-header -->
        </div> <!-- end of .row -->

        <!--<div id="address-map-1" class="gmap3 footer-map-full"></div>-->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.818826295948!2d72.89958981404638!3d18.716927687294895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0fd33b011c5%3A0xbcabbe22d19ebd51!2sOutpost!5e0!3m2!1sen!2sin!4v1530621221747" width="1100" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
		<div class="row contact-detail">
			
			<div class="col-xs-12 col-sm-6 col-md-6 wow fadeInLeft ">
			
				<div class="contact-form-holder">
					
					<div id="contact-form">

						<div id="contactform-error-msg"></div>
						
						<form method="post" action="#" name="contactform" id="contactform">

							<div class="form-group">
								<input name="full_name" type="text" class="name form-control" placeholder="Name *" required>
							</div>
							
							<div class="form-group">
								<input name="email" type="email" class="email form-control" placeholder="E-mail *" required> 
						   </div>
							
							<div class="form-group">
								<input name="phone" type="text" class="phone form-control"  placeholder="Phone *" required>
							</div>
							
							<div class="form-group">
								<textarea name="comments" rows="4" class="comments form-control" placeholder="Message *" required></textarea>  
							</div>
								
							<input type="submit" class="btn btn-primary" id="submit" value="Send Message">          										           											
						</form>
					
					</div>
				
				</div>
				
			</div>
			
			
			<div class="col-xs-12 col-sm-6 col-md-6 wow fadeInRight" data-wow-duration="1s">
				
				<p class="address-item">
					<span class="icon"><i class="fa fa-map-marker"></i></span>
					Chorande, Mapgaon, Alibaug, Raigad - 402208 
				</p>
				<p class="address-item">
					<span class="icon"><i class="glyphicon glyphicon-earphone"></i></span>
					Phone: 02141-232630 <br />
				</p>
				<p class="address-item">
					<span class="icon"><i class="fa fa-envelope"></i></span>
					Support: <a href="mailto:outpostatalibaug@futuregroup.in">outpostatalibaug@futuregroup.in</a> <br/>
<!--					Booking: <a href="mailto:dowebstation@gamil.com">info@outpostalibaug.com</a>-->
				</p>
				<p class="address-item">
					<span class="icon"><i class="fa fa-globe"></i></span>
					Website: <a href="#">www.outpostalibaug.com</a> <br/>
				</p>
				
			</div>
			
		</div>
		
	</div>
	
</section>
<!-- /END CONTACT SECTION --> 	
<?php include 'footer.php'; ?>