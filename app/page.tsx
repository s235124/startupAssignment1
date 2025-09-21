import Header from "@/components/Header"

export default function Home() {
    return (
        <>
            <Header></Header>

            <section id={"Top"}>
                <div className="px-4 py-5 my-5 bg-secondary bg-opacity-10 text-center">
                    <h1 className="display-5 fw-bold">Get help to manage your very own Cabaret Club</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">If you have ever wanted to grow you Cabaret Club business to compete
                            with
                            the other great Cabaret Clubs, you have come to the right place.
                            With the help of our experts, you can exponentially increase your customer base, as well as
                            your
                            revenue.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a href="#contact" className="btn btn-primary btn-lg px-4">Contact Us Now</a>
                            <a href="#experts" className="btn btn-outline-secondary btn-lg px-4 gap-3">Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id={"experts"}>
                <div className="container bg-secondary bg-opacity-10 col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="/MajimaCropped.jpg" className="d-block mx-lg-auto img-fluid" alt="Goro Majima"
                                 width="400" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Goro Majima</h1>
                            <h2 className="display-7 fw-bold lh-1 mb-3">King of the Night</h2>
                            <p className="lead">Goro Majima is an expert at the CCMT. During his time at the Grand
                                Cabaret,
                                he made it the number 1 establishment in town. He has also taken the cabaret club Shine,
                                which was on its last leg, and turned it around.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <a href="#contact" className="btn btn-primary btn-lg px-4">Contact Us Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container bg-secondary bg-opacity-10 col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Kazuma Kiryu</h1>
                        <h2 className="display-7 fw-bold lh-1 mb-3">The Dragon of Sotenbori</h2>
                        <p className="lead">Kazuma Kiryu is an expert at the CCMT. With unmatched skill and unwavering
                            dedication, Kiryu Kazuma turns struggling cabaret clubs into thriving entertainment
                            hotspots.
                            Under his guidance, every venue flourishes, staff excel, and guests experience
                            unforgettable nights.</p>
                        {/*The above paragraph was generated using AI, except for the first sentence*/}
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="#contact" className="btn btn-primary btn-lg px-4">Contact Us Now
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="/Kiryu.jpg" className="d-block mx-lg-auto img-fluid" alt="Kazuma Kiryu"
                             width="400" loading="lazy"/>
                    </div>
                </div>
            </div>

            <section id={"testimonials"}>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Hear firsthand from our satisfied customers</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                             style={{backgroundImage: "url('/youda.png')",
                             backgroundSize: "cover",
                             backgroundRepeat: "no-repeat",
                             backgroundPosition: "center"}}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 className="pt-2 mt-2 mb-4 display-8 lh-1 fw-bold">Thanks to Majima-san’s fearless drive,
                                    Shine rose from the brink and now shines brighter than ever!</h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"
                                             className="rounded-circle border border-white"/>
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                        <svg className="bi me-2" width="1em" height="1em">
                                            <use href="#geo-fill"></use>
                                        </svg>
                                        <small>Youda</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <svg className="bi me-2" width="1em" height="1em">
                                            <use href="#calendar3"></use>
                                        </svg>
                                        <small>Owner of Club Shine</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                             style={{backgroundImage: "url('/yuki.png')",
                                 backgroundSize: "cover",
                                 backgroundRepeat: "no-repeat",
                                 backgroundPosition: "center"}}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 className="pt-2 mt-2 mb-4 display-8 lh-1 fw-bold">Thanks to Majima-san, I’ve conquered my fear
                                    and can greet every guest with confidence!</h2>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"
                                         className="rounded-circle border border-white"/>
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="1em" height="1em">
                                        <use href="#geo-fill"></use>
                                    </svg>
                                    <small>Yuki</small>
                                </li>
                                <li className="d-flex align-items-center">
                                    <svg className="bi me-2" width="1em" height="1em">
                                        <use href="#calendar3"></use>
                                    </svg>
                                    <small>Hostess at Club Shine</small>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                             style={{
                                 backgroundImage: "url('/koyuki.png')",
                                 backgroundSize: "cover",
                                 backgroundRepeat: "no-repeat",
                                 backgroundPosition: "center"}}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h2 className="pt-2 mt-2 mb-4 display-8 lh-1 fw-bold">Thanks to Kiryu-san,
                                    I finally earned my first top hostess award and found my true confidence!</h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"
                                             className="rounded-circle border border-white"/>
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                        <svg className="bi me-2" width="1em" height="1em">
                                            <use href="#geo-fill"></use>
                                        </svg>
                                        <small>Koyuki</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <svg className="bi me-2" width="1em" height="1em">
                                            <use href="#calendar3"></use>
                                        </svg>
                                        <small>Hostess at Club Four Shine</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            {/*======= Contact Section =======*/}
            <section id="contact" className="contact">
                <div className="container">

                    <div className="text-center px-2 position-relative">
                        <h2>Contact Us</h2>
                        <p>Contact us now with the form below to make your Cabaret Club a contender for the number 1 Club</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                    frameBorder="0" allowFullScreen></iframe>
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name"
                                               required></input>
                                    </div>
                                    <div className="form-group col-md-6 mt-3 mt-md-0">
                                        <label htmlFor="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email"
                                               required></input>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject"
                                           required></input>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control" name="message" rows={10} required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg px-4">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Contact Section */}

            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="text-muted">© 2025 The Cabaret Club Management Team</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="#">
                            <img src="/twitter.svg" alt="Twitter Logo" className="img-fluid" width="24"/>
                        </a></li>
                        <li className="ms-3"><a className="text-muted" href="#">
                            <img src="/instagram.svg" alt="Instagram Logo" className="img-fluid" width="24"/>
                        </a></li>
                        <li className="ms-3"><a className="text-muted" href="#">
                            <img src="/facebook.svg" alt="Facebook Logo" className="img-fluid" width="24"/>
                        </a></li>
                    </ul>
                </footer>
            </div>
        </>
    );
}
