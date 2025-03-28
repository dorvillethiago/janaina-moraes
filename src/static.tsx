import { ArrowRight } from "lucide-react";

export const menuItems = [
	{ name: "Início", href: "#inicio" },
	{ name: "Serviços", href: "#servicos" },
	{ name: "Sobre", href: "#sobre" },
	{ name: "Contato", href: "#contato" },
];

export const hero = {
	header: "Segurança e Eficiência",
	h1: "Seu parceiro contábil para cada etapa.",
	h2: "Deixe a burocracia conosco. Garantimos que você esteja sempre em dia com as obrigações fiscais, otimizando seus resultados e simplificando sua gestão financeira.",
	actions: {
		main: "Agendar Consultoria",
		secondary: "Abrir Empresa",
	},
};

export const featuresSection = {
	header: "O que podemos fazer por você?",
	small: "Nossos Serviços",
};

export type Testimonial = {
	name: string
	role: string
	image: string
	quote: string
}

export const testimonials = [
	{
		name: 'Jonathan Yombo',
		role: 'Software Engineer',
		image: 'https://randomuser.me/api/portraits/men/1.jpg',
		quote: 'Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.',
		mainDescription: 'I Ghost to the down cool'
	},
	{
		name: 'Yves Kalume',
		role: 'GDE - Android',
		image: 'https://randomuser.me/api/portraits/men/6.jpg',
		quote: 'With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.',
		mainDescription: 'I Ghost to the down cool'
	},
	{
		name: 'Yucel Faruksahan',
		role: 'Tailkits Creator',
		image: 'https://randomuser.me/api/portraits/men/7.jpg',
		quote: 'Great work on tailfolio template. This is one of the best personal website that I have seen so far :)',
		mainDescription: 'I Ghost to the down cool'
	},
]

export const information1 = {
	id: "sobre",
	title: "Uma contabilidade criada para descomplicar a burocracia para você! ",
	description: [
		"Com mais de 10 anos de atuação, nossos profissionais são capacitados para atender as demandas burocráticas da sua empresa, e para falar a língua que você entende! ",
		"Aqui o nosso foco sempre é na AGILIDADE dos serviços e na ECONOMIA de impostos para os nossos clientes! ",
	],
	callToAction: {
		href: "#",
		jsx: <>Agendar Consultoria <ArrowRight /></>,
	},
	imageSrc: "/feat-1.jpg",
}

export const information2 = {
	title: "Uma contabilidade criada para descomplicar a burocracia para você! ",
	description: [
		"Com mais de 10 anos de atuação, nossos profissionais são capacitados para atender as demandas burocráticas da sua empresa, e para falar a língua que você entende! ",
		"Aqui o nosso foco sempre é na AGILIDADE dos serviços e na ECONOMIA de impostos para os nossos clientes! ",
	],
	callToAction: {
		href: "#",
		jsx: <>Agendar Consultoria <ArrowRight /></>,
	},
	imageSrc: "/feat-2.jpg",
}

export const cta = {
	heading: "Pronto para começar?",
	description: "Junte-se a milhares de clientes satisfeitos que usam nossa consultoria para construir o futuro.",
	buttons: {
		primary: {
			text: "Agendar Consultoria",
			url: "#",
		},
		secondary: {
			text: "Abrir Empresa",
			url: "#",
		},
	},
}