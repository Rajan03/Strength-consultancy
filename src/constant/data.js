import {LOGO_IMG, HERO_IMG, STATS_BG, SECTION2CARD1, SECTION2CARD3, SECTION2CARD2, CASE_STUDY} from './Images'
import {
	ArrowTrendingUpIcon, ArrowUpOnSquareIcon, ChatBubbleLeftRightIcon,
	ClipboardDocumentIcon,
	PresentationChartBarIcon,
	RocketLaunchIcon,
	TrophyIcon,
	UserGroupIcon
} from "@heroicons/react/20/solid";

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
		description: 'Become stronger and more confident, both in and outside the workplace',
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
				icon: <RocketLaunchIcon />,
				heading: 'Increased Resilience',
				subHeading: 'Handle challenges more effectively',
				description: 'The combination of strength training and leadership coaching can result in increased mental toughness and resilience, allowing individuals to handle challenges and stress more effectively',
			},
			{
				image: SECTION2CARD2,
				icon: <TrophyIcon />,
				heading: 'Improved Employee Retention',
				subHeading: 'Improve employee satisfaction and reduce turnover',
				description: 'By investing in the personal and professional development of employees, organizations can improve employee satisfaction and reduce turnover, which can result in lower costs and higher productivity',
			},
			{
				image: SECTION2CARD3,
				icon: <PresentationChartBarIcon />,
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
				icon: <ClipboardDocumentIcon />,
				text: 'Boost up the strength & talent potential of your greatest resource'
			},
			{
				icon: <UserGroupIcon />,
				text: 'Increase productivity and employee engagement'
			},
			{
				icon: <ArrowTrendingUpIcon />,
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
	HowItWorks: {
		heading: 'HOW IT WORKS',
		subHeading: 'key is to provide a comprehensive and holistic approach that combines strength training, leadership ' +
			'development, and organizational growth to help individuals and organizations reach their full potential',
		steps: [
			{
				title: 'Assessment',
				icon: <ClipboardDocumentIcon />,
				description: 'Thorough assessment of the individuals strengths,weaknesses,and goals allows us to create a customized'
					+ 'plan that addresses their specific needs and helps them reach their full potential'
			},
			{
				title: 'Strength Coaching',
				icon: <ArrowUpOnSquareIcon />,
				description: 'Coaching program focuses on developing the key skills, such as communication, emotional intelligence,' +
					' decision making, and problem-solving. Our coaches work one-on-one with individuals to help them identify and ' +
					'overcome their challenges and reach their full potential'
			},
			{
				title: 'Follow-up and support:',
				icon: <ChatBubbleLeftRightIcon />,
				description: 'We believe in providing ongoing support and guidance to our clients. After completing the program, ' +
					'we offer follow-up coaching and training to help individuals maintain their progress and continue to develop ' +
					'as leaders'
			},
		]
	},
}

