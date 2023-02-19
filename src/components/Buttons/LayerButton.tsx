import Link from "next/link";

type Props = {
	text: string,
	onClick?: () => void,
	classes?: string,
	link?: string,
}

export default function LayerButton(props: Props): JSX.Element {

	if (props.link) return (
		<div className={`flex items-stretch justify-start min-w-[15rem] min-h-[4rem] relative shadow-2xl ${props.classes}`}>
			<Link href={props.link} className={'flex-1 text-2xl min-w-full min-h-full flex items-center' +
				' justify-center bg-primary-100 rounded-xl text-primary-500 font-bold px-4 shadow-xl'}>
				{props.text}
			</Link>

			<div className="absolute bottom-0 left-0 right-0 top-0 bg-secondary-100 rounded-xl z-[-1]
			rotate-3"></div>
		</div>
	)

	return (
		<div className={`flex items-stretch justify-start min-w-[15rem] min-h-[4rem] relative shadow-2xl ${props.classes}`}>
			<button onClick={props.onClick} className={'flex-1 text-[1.6rem] min-w-full min-h-full flex items-center' +
				' justify-center bg-primary-100 rounded-xl text-primary-500 font-bold px-4 shadow-xl'}>
				{props.text}
			</button>

			<div className="absolute bottom-0 left-0 right-0 top-0 bg-secondary-100 rounded-xl z-[-1]
			rotate-3"></div>
		</div>
	)
}
