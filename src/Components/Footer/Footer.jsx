const Footer = () => {
    return (
        <footer className="sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <div className="max-w-6xl space-y-10 mx-auto lg:flex justify-between">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <div className="flex flex-col gap-2">
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>

                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <div className="flex flex-col gap-2">
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <div className="flex flex-col gap-2">
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;