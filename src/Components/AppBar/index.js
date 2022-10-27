import styled from 'styled-components';
import breakpoint from '../Commons/breakpoints';
import NavbarNav from './NavbarNav';

const Header = styled.header`
	background-color: rgb(255 255 255);
	box-shadow: 0px 1px 0px rgb(15 23 42 / 0.1);
`;

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 72rem;

	@media only screen and ${breakpoint.device.lg} {
		display: flex;
	}
`;

const FlexCenter = styled.div`
	display: flex;
	align-items: center;
`;

const Nav = styled(FlexCenter)`
	padding: 0.75rem 1rem;
`;

const Logo = styled.div`
	display: flex;
	flex-grow: 0;
`;

const SearchBar = styled(FlexCenter)`
	background-color: rgb(239 239 239);
	margin: 0 1rem;
	border-radius: 0.5rem;
	flex-grow: 1;

	@media only screen and ${breakpoint.device.lg} {
		flex-basis: 20rem;
		margin-left: 2rem;
		border-radius: 1.5rem;
		flex-grow: 0;
	}
`;

const Icon = styled.div`
	flex: none;
	padding-left: 0.5rem;
	color: rgb(148 163 184);
`;

const FormGroup = styled(FlexCenter)`
	flex: 1 1 auto;
	padding: 0.25rem 0.5rem;

	@media only screen and ${breakpoint.device.lg} {
		height: 2.5rem;
	}
`;

const FormControl = styled.input`
	flex: 1 1 auto;
	background-color: rgb(239 239 239);
	color: rgb(148 163 184);
	outline: 2px solid transparent;
	outline-offset: 2px;
	border-style: none;

	&:focus {
		color: rgb(82 82 82);
	}
`;

const MenuToggle = styled.button`
	color: rgb(100 116 139);

	@media only screen and ${breakpoint.device.lg} {
		display: none;
	}
`;

const SecondaryNav = styled(Nav)`
	overflow-x: scroll;

	@media only screen and ${breakpoint.device.lg} {
		margin-left: auto;
		overflow-x: visible;
	}
`;

const AppBar = () => {
	return (
		<Header>
			<Container>
				<Nav>
					<Logo>
						<img className="w-8 lg:w-10" src="https://s0.bukalapak.com/marketplace/images/logo/bukalapak-icon-secondary.png" alt="Logo"/>
					</Logo>
					<SearchBar>
						<Icon>
							<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="m19 19-3.5-3.5"></path>
								<circle cx="11" cy="11" r="6"></circle>
							</svg>
						</Icon>
						<FormGroup>
							<FormControl />
						</FormGroup>
					</SearchBar>
					<MenuToggle>
						<svg width="24" height="24">
							<path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
					</MenuToggle>
				</Nav>
				<SecondaryNav>
					<NavbarNav />
				</SecondaryNav>
			</Container>
		</Header>
	);
}

export default AppBar;