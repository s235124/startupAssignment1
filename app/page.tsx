import Image from "next/image";

import Header from "@/components/Header"

export default function Home() {
    return (
        <>
            <Header></Header>

            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72"
                     height="57"/>
                <h1 className="display-5 fw-bold">Get help to manage your very own Cabaret Club</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">If you have ever wanted to grow you Cabaret Club business to compete with
                        the other great Cabaret Clubs, you have come to the right place.
                        With the help of our experts, you can exponentially increase your customer base, as well as your
                        revenue.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4">Contact Us Now</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3">Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="/MajimaCropped.jpg" className="d-block mx-lg-auto img-fluid" alt="Goro Majima"
                             width="400" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Goro Majima</h1>
                        <h2 className="display-7 fw-bold lh-1 mb-3">King of the Night</h2>
                        <p className="lead">Goro Majima is an expert at the CCMT. During his time at the Grand Cabaret,
                            he made it the number 1 establishment in town. He has also taken the cabaret club Shine,
                            which was on its last leg, and turned it around.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4">Contact Us Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Kazuma Kiryu</h1>
                        <h2 className="display-7 fw-bold lh-1 mb-3">The Dragon of Sotenbori</h2>
                        <p className="lead">Kazuma Kiryu is an expert at the CCMT. With unmatched skill and unwavering
                            dedication, Kiryu Kazuma turns struggling cabaret clubs into thriving entertainment hotspots.
                            Under his guidance, every venue flourishes, staff excel, and guests experience
                            unforgettable nights.</p>
                        {/*The above paragraph was generated using AI, except for the first sentence*/}
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4">Contact Us Now
                            </button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="/Kiryu.jpg" className="d-block mx-lg-auto img-fluid" alt="Kazuma Kiryu"
                             width="400" loading="lazy"/>
                    </div>
                </div>
            </div>
        </>
    );
}
