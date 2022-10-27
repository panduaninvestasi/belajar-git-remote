import styled from 'styled-components';
import breakpoint from '../Commons/breakpoints';

const Nav = styled.nav`
	color: rgb(100 116 139);
	
	@media only screen and ${breakpoint.device.lg} {
		font-weight: 600;
	}
`;

const List = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;
`;

const ListItem = styled.li`
	margin-left: 0.75rem;
	border: 1px solid rgb(15 23 42 / 0.1);
	border-radius: 1.5rem;
	padding: 0.5rem 1.25rem;
	white-space: nowrap;

	&:first-child {
		margin-left: 0;
	}

	@media only screen and ${breakpoint.device.lg} {
		margin-left: 2rem;
		border: none;
		padding: 0;
	}
`;

const NavbarNav = () => {
	return (
		<Nav>
			<List>
				<ListItem>
					<a>All</a>
				</ListItem>
				<ListItem>
					<a>News</a>
				</ListItem>
				<ListItem>
					<a>Entertainment</a>
				</ListItem>
			</List>
		</Nav>
	);
}

export default NavbarNav;