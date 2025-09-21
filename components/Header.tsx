// This header is from Bootstraps example site

export default function Header() {
    return (
        <>
            <header className="fixed-top d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-opacity-100 bg-white">
                <div className="container d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none fs-4">The Cabaret Club Management Team</span>
                    {/*<a href="/"*/}
                    {/*   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">*/}
                    {/*    <svg className="bi me-2" width="40" height="32">*/}
                    {/*        <use xlinkHref="#bootstrap"></use>*/}
                    {/*    </svg>*/}
                    {/*</a>*/}

                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="#Top" className="nav-link" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item"><a href="#experts" className="nav-link">Experts</a></li>
                        <li className="nav-item"><a href="#testimonials" className="nav-link">Testimonials</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact Us</a></li>
                    </ul>
                </div>
            </header>
        </>
);
}