import './style.css';

const Footer = () => {
	return(
		<div className="site-footer">
			<div className="copyright">
				<div className="attribution">
					<a href={'#'}>Privacy Policy</a>
					<span className="sep"></span>
					<a href={'#'}>Disclaimer</a>
					<span className="sep"></span>
					<a href={'#'}>Term of Service</a>
					<span className="sep"></span>
					<a href={'#'}>Sitemap</a>
				</div>
			</div>
			<div className="logo">
				<a>Logo</a>
			</div>
		</div>
	);
}

export default Footer;
