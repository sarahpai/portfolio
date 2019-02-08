import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react';

class NavBar extends React.Component {

	state = { activeItem: 'about' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
	render() {
		 const { activeItem } = this.state

		return (
			<>
				<Menu>
					<Container>
						<Menu.Item as="a" header>
							<Image
							size="small"
							src="https://pbs.twimg.com/profile_images/960980981892214785/KaSVZO2q_400x400.jpg"
							/>
						</Menu.Item>

						<Menu.Menu position="right">
							<Menu.Item as="a" name="about">
							about
							</Menu.Item>

							<Menu.Item as="a" name="Work">
							Work
							</Menu.Item>
												
							<Menu.Item as="a" name="Blog">
							Blog
							</Menu.Item>
						
						</Menu.Menu>
					</Container>
				</Menu>
			</>
	)
}

}
export default NavBar;