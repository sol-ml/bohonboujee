<script lang="ts">
	export let segment: string;
</script>

<style>
	header {
		position: relative;
	}

	.logoContainer {
		display: flex;
		justify-content: center;
	}

	.logo {
		position: absolute;
	}

	.menuContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.icons {
		height: 25px;
	}

	a {
		text-decoration: none;
	}

	.underline {
		text-decoration: underline;
	}

	@media (max-width: 767.88px) {
		.logo {
			height: 75px;
			top: 13px;
		}

		.menuContainer {
			height: 101px;
			flex-direction: row-reverse;
			padding: 0 25px;
		}

		nav {
			display: none;
		}

		.menu {
			height: 23px;
		}
	}

	@media (min-width: 768px) {
		.logo {
			width: 9%;
			top: 17px;
			max-width: 168px;
		}

		.menuContainer {
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
	<div class="logoContainer">
		<img class="logo" alt="" src="/menu/logo.png" />
	</div>
	<div class="menuContainer">
		<nav>
			<ul>
				<li><a href="." class:underline="{segment === undefined}">HOME</a></li>
				<li>
					<a href="about" class:underline="{segment === 'about'}">ABOUT</a>
				</li>
				<li><a href="shop" class:underline="{segment === 'shop'}">SHOP</a></li>
				<li>
					<a
						href="contact"
						class:underline="{segment === 'contact'}"
					>CONTACT</a>
				</li>
			</ul>
		</nav>
		<img class="menu" alt="" src="/menu/Menu.png" />
		<img class="icons" alt="" src="/menu/icons.png" />
	</div>
</header>
