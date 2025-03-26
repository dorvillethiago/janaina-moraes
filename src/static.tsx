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
	},
	{
		name: 'Yves Kalume',
		role: 'GDE - Android',
		image: 'https://randomuser.me/api/portraits/men/6.jpg',
		quote: 'With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.',
	},
	{
		name: 'Yucel Faruksahan',
		role: 'Tailkits Creator',
		image: 'https://randomuser.me/api/portraits/men/7.jpg',
		quote: 'Great work on tailfolio template. This is one of the best personal website that I have seen so far :)',
	},
	{
		name: 'Anonymous author',
		role: 'Doing something',
		image: 'https://randomuser.me/api/portraits/men/8.jpg',
		quote: 'I am really new to Tailwind and I want to give a go to make some page on my own. I searched a lot of hero pages and blocks online. However, most of them are not giving me a clear view or needed some HTML/CSS coding background to make some changes from the original or too expensive to have. I downloaded the one of Tailus template which is very clear to understand at the start and you could modify the codes/blocks to fit perfectly on your purpose of the page.',
	},
	{
		name: 'Shekinah Tshiokufila',
		role: 'Senior Software Engineer',
		image: 'https://randomuser.me/api/portraits/men/4.jpg',
		quote: 'Tailus is redefining the standard of web design, with these blocks it provides an easy and efficient way for those who love beauty but may lack the time to implement it. I can only recommend this incredible wonder.',
	},
	{
		name: 'Oketa Fred',
		role: 'Fullstack Developer',
		image: 'https://randomuser.me/api/portraits/men/2.jpg',
		quote: 'I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.',
	},
	{
		name: 'Zeki',
		role: 'Founder of ChatExtend',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
		quote: "Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.",
	},
	{
		name: 'Joseph Kitheka',
		role: 'Fullstack Developer',
		image: 'https://randomuser.me/api/portraits/men/9.jpg',
		quote: 'Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development!',
	},
	{
		name: 'Khatab Wedaa',
		role: 'MerakiUI Creator',
		image: 'https://randomuser.me/api/portraits/men/10.jpg',
		quote: "Tailus is an elegant, clean, and responsive tailwind css components it's very helpful to start fast with your project.",
	},
	{
		name: 'Rodrigo Aguilar',
		role: 'TailwindAwesome Creator',
		image: 'https://randomuser.me/api/portraits/men/11.jpg',
		quote: 'I love Tailus ❤️. The component blocks are well-structured, simple to use, and beautifully designed. It makes it really easy to have a good-looking website in no time.',
	},
	{
		name: 'Eric Ampire',
		role: 'Mobile Engineer at @BRPNews • @GoogleDevExpert for Android',
		image: 'https://randomuser.me/api/portraits/men/12.jpg',
		quote: 'Tailus templates are the perfect solution for anyone who wants to create a beautiful and functional website without any web design experience. The templates are easy to use, customizable, and responsive, and the support team is always available to help. I highly recommend Tailus templates to anyone who is looking to create a website.',
	},
	{
		name: 'Roland Tubonge',
		role: 'Software Engineer',
		image: 'https://randomuser.me/api/portraits/men/13.jpg',
		quote: 'Tailus is so well designed that even with a very poor knowledge of web design you can do miracles. Let yourself be seduced!',
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