'use client';
import Input from "../Inputs/Input";
import {LayerButton} from "@/components";
import {useEffect, useState} from "react";

type Props = {
    className?: string

    onClose?: () => void
    resource: {
        id: number
        title: string
    }
}

export default function BuyResourceForm(props: Props): JSX.Element {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resource, setResource] = useState({title: '', id: 0});

    useEffect(() => {
        setResource(props.resource)
    }, [props.resource])

    return (
        <>
            <div className={"flex-[95%] flex flex-col justify-start items-center " +
                "bg-neutral-50 gap-y-20 rounded-xl p-10 relative z-10 " + props.className}>
                <div className={"flex-1 flex flex-col justify-start gap-y-16 items-stretch w-full"}>
                    <Input inputValue={name} OnInputChange={(v) => setName(v)} label={'Name'}/>
                    <Input inputValue={email} OnInputChange={(v) => setEmail(v)} label={'Email'} type={'email'}/>
                    <Input inputValue={resource.title} label={'Resources'} OnInputChange={() => null}
                           otherProps={{disabled: true}}/>
                </div>

                <div className={"flex-[5%] w-full flex justify-end items-end gap-12"}>
                    <button onClick={() => console.log('Purchase')} className={'flex flex-row justify-center' +
                        ' items-center p-2 bg-primary-400 rounded shadow'}>
                        <div className={'text-neutral-50 text-xl font-normal'}>Submit</div>
                    </button>

                    <button onClick={props.onClose} className={'flex flex-row justify-start' +
                        ' items-center gap-2 relative pb-1'}>
                        <div className={'text-primary-500 text-xl font-normal'}>Close</div>
                    </button>
                </div>
            </div>
        </>
    );
}
