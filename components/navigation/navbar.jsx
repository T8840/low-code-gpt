import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import { Global, css } from '@emotion/react';

const fontUrl = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap';

export default function Navbar() {
	return (
		<>
			<Global
				styles={css`
					@import url(${fontUrl});
					.logo {
						font-family: 'Roboto', sans-serif;
						color: #fff;
						font-size: 1.5rem;
						text-decoration: none;
					}
				`}
			/>
			<nav className={styles.navbar}>
				<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"} className="logo">
					Profile
				</a>
				<ConnectButton></ConnectButton>
			</nav>
		</>
	);
}