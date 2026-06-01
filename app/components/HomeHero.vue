<template>
	<section class="hero" aria-label="Apresentação">
		<div class="hero__glow"></div>
		<div class="hero__inner">
			<div class="hero__tag">
				<svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
					<circle cx="5" cy="5" r="5" />
				</svg>
				Plataforma de profissionais
			</div>

			<h1 class="hero__title">
				Encontre o profissional
				<span>ideal para você</span>
			</h1>

			<p class="hero__subtitle">
				Conectamos você a profissionais autônomos verificados,
				prontos para atender com qualidade e agilidade.
			</p>

			<div class="hero__actions">
				<NuxtLink
					to="/professionals"
					class="hero__button hero__button--primary"
				>
					Encontrar profissionais
				</NuxtLink>

				<button class="hero__button hero__button--secondary">
					Como funciona
				</button>
			</div>

			<div class="hero__stats">
				<div class="hero__stat">
					<span class="hero__stat-value">400+</span>
					<p class="hero__stat-label">
						Profissionais cadastrados
					</p>
				</div>

				<div class="hero__stat">
					<span class="hero__stat-value">9</span>
					<p class="hero__stat-label">
						Categorias disponíveis
					</p>
				</div>

				<div class="hero__stat">
					<span class="hero__stat-value">
						4.8 <span class="hero__stat-star">★</span>
					</span>

					<p class="hero__stat-label">
						Avaliação média
					</p>
				</div>
			</div>
		</div>
	</section>
</template>