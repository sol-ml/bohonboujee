<style>
	header {
		position: relative;
	}

	.position {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.logo {
		position: absolute;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.icons {
		height: 25px;
	}

	.menu {
		height: 23px;
	}

	@media (max-width: 767.88px) {
		.logo {
			height: 75px;
			top: 13px;
		}

		.container {
			height: 101px;
			flex-direction: row-reverse;
			padding-left: 25px;
			padding-right: 30px;
		}

		nav {
			display: none;
		}
	}

	@media (min-width: 768px) {
		.logo {
			width: 9%;
			top: 17px;
		}

		.container {
			height: 85px;
			max-width: 1620px;
			margin: auto;
			width: 89%;
		}

		nav {
			font-family: Prompt;
			font-size: 16px;
			line-height: 24px;
			letter-spacing: 0.03em;
			color: #000000;
			width: 40%;
			max-width: 370px;
		}

		ul {
			margin: 0;
			display: flex;
			justify-content: space-between;
			padding: 0;
		}

		li {
			display: inline;
		}

		.menu {
			display: none;
		}
	}
</style>

<header>
	<div class="position"><img class="logo" alt="" src="/menu/logo.png" /></div>
	<div class="container">
		<nav>
			<ul>
				<li><a href="www.google.com.ar">HOME</a></li>
				<li><a href="www.google.com.ar">ABOUT</a></li>
				<li><a href="www.google.com.ar">SHOP</a></li>
				<li><a href="www.google.com.ar">CONTACT</a></li>
			</ul>
		</nav>
		<img class="menu" alt="" src="/menu/Menu.png" />
		<img class="icons" alt="" src="/menu/icons.png" />
	</div>
</header>
