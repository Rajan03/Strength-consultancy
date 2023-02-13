import {LOGO_IMG, HERO_IMG, STATS_BG, SECTION2CARD1, SECTION2CARD3, SECTION2CARD2, CASE_STUDY} from './Images';

export const Icons = {
	ARROW_TRENDING_UP: (className) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
		<path fillRule="evenodd" d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z" clipRule="evenodd" />
	</svg>,
	ARROW_UP_ON_SQUARE: (className) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
		<path d="M9.97.97a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 01-1.06-1.06l3-3zM9.75 6.75v6a.75.75 0 001.5 0v-6h3a3 3 0 013 3v7.5a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3h3z" />
		<path d="M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" />
	</svg>,
	CHAT_BUBBLE_LEFT_RIGHT: (className) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
		<path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
		<path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
	</svg>,
	CLIPBOARD_DOCUMENT: (className) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
		<path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
		<path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clipRule="evenodd" />
	</svg>,
	PRESENTATION_CHART_BAR: (className) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
		<path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clipRule="evenodd" />
	</svg>,
	ROCKET_LAUNCH: (className) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
		<path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
		<path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
	</svg>,
	TROPHY: (className) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
		<path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
	</svg>,
	USER_GROUP: (className) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
		<path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
		<path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
	</svg>,
}

export const NavLinks = {
	TEAM: 'team',
	RESOURCES: 'resources',
	ABOUT: 'about',
	CONTACT: 'contact',
}

export const NavData = [
	{
		name: 'Team',
		route: '/' + NavLinks.TEAM
	},
	{
		name: 'Resources',
		route: '/' + NavLinks.RESOURCES
	},
	{
		name: 'About Us',
		route: '/' + NavLinks.ABOUT
	},
	{
		name: 'Contact',
		route: '/' + NavLinks.CONTACT
	},
]
export const FooterData = {
	logo: LOGO_IMG,
	links: NavData,
	location: {
		address: '745 Peterson Marg, Suite 40 | Sydney, Aus',
		phone: 'P: 787-484-5456',
		mail: 'info@sokasc.com'
	}
}

export const HomeData = {
	hero: {
		heading: 'Boost Productivity and Unleash Your Inner Strength',
		description: 'Looking to develop your leadership skills, build a stronger team, or enhance your personal' +
			' strength, ' +
			'we have the tools and expertise you need to succeed',
		cta: {
			text: 'Get started',
			link: '/contact'
		},
		image: HERO_IMG
	},
	howWeEnhanceEffectiveness: {
		heading: 'How we enhances effectiveness of your team',
		description: 'By focusing on both physical and mental development, we can help individuals and organizations reach ' +
			'their full potential and drive business growth',
		cards: [
			{
				image: SECTION2CARD1,
				icon: Icons.ROCKET_LAUNCH,
				heading: 'Increased Resilience',
				subHeading: 'Handle challenges more effectively',
				description: 'The combination of strength training and leadership coaching can result in increased mental toughness and resilience, allowing individuals to handle challenges and stress more effectively',
			},
			{
				image: SECTION2CARD2,
				icon: Icons.TROPHY,
				heading: 'Improved Employee Retention',
				subHeading: 'Improve employee satisfaction and reduce turnover',
				description: 'By investing in the personal and professional development of employees, organizations can improve employee satisfaction and reduce turnover, which can result in lower costs and higher productivity',
			},
			{
				image: SECTION2CARD3,
				icon: Icons.PRESENTATION_CHART_BAR,
				heading: 'Better Decision Making',
				subHeading: 'Make better decisions, solve problems more effectively',
				description: 'The leadership coaching component of the consultancy can help individuals develop critical decision-making skills, allowing them to make better decisions, solve problems more effectively, and drive positive outcomes for the organization',
			},
		]
	},
	freeResources: {
		heading: 'Right Strength based solution',
		subHeading: 'You feel the challenge of finding the right strengths-based solutions for your organization ?',
		description: 'By having clear and concise documentation, organizations can ensure that their strength-based solution is ' +
			'well-structured and sustainable, and that it supports the long-term growth and success of the organization.',
		oneLine: 'If these elements come together, we will likely hit it out of the park.',
		points: [
			{
				icon: 	Icons.CLIPBOARD_DOCUMENT,
				text: 'Boost up the strength & talent potential of your greatest resource'
			},
			{
				icon: Icons.USER_GROUP,
				text: 'Increase productivity and employee engagement'
			},
			{
				icon: Icons.CHAT_BUBBLE_LEFT_RIGHT,
				text: 'Improve leadership, coaching, & entrepreneurial excellence'
			},
		],
		action: {
			text: 'Download case study',
			link: '/' + NavLinks.RESOURCES,
		},
		image: CASE_STUDY
	},
	stats: {
		image: STATS_BG,
		heading: 'Drive long-term growth and success',
		stats: [
			{
				title: 'Increased Productivity',
				percent: 25,
				description: 'Leadership development programs saw a 25% increase in productivity'
			},
			{
				title: 'Improved Employee Engagement',
				percent: 147,
				description: 'Highly engaged employees outperform their competitors by 147% in earnings per share'
			},
			{
				title: 'Decreased Employee Turnover',
				percent: 30,
				description: 'Investing in employee development can help improve job satisfaction and reduce turnove'
			}
		],
		ourData: {
			consultants: {
				count: '300+',
				text: 'Certified and professional consultants'
			},
			hours: {
				count: '4000+',
				text: 'Hours Developing leaders MCC - ICF'
			},
			description: 'Get Strength consultancy from highly certified and professionals building Leaders & ' +
				'their teams for over past few Years'
		},
	},
	howItWorks: {
		heading: 'HOW IT WORKS',
		subHeading: 'key is to provide a comprehensive and holistic approach that combines strength training, leadership ' +
			'development, and organizational growth to help individuals and organizations reach their full potential',
		steps: [
			{
				title: 'Assessment',
				icon: Icons.CLIPBOARD_DOCUMENT,
				description: 'Thorough assessment of the individuals strengths, weaknesses and goals allows us to create a' +
					' customized'
					+ 'plan that addresses their specific needs and helps them reach their full potential'
			},
			{
				title: 'Strength Coaching',
				icon: Icons.ARROW_UP_ON_SQUARE,
				description: 'Coaching program focuses on developing the key skills, such as communication, emotional intelligence,' +
					' decision making, and problem-solving. Our coaches work one-on-one with individuals to help them identify and ' +
					'overcome their challenges and reach their full potential'
			},
			{
				title: 'Follow-up and support',
				icon: Icons.CHAT_BUBBLE_LEFT_RIGHT,
				description: 'We believe in providing ongoing support and guidance to our clients. After completing the program, ' +
					'we offer follow-up coaching and training to help individuals maintain their progress and continue to develop ' +
					'as leaders'
			},
		]
	},
}

