'use client';
import Input from "../Inputs/Input";
import {LayerButton} from "@/components";

export default function ContactForm(): JSX.Element {
    return (
        <>
            <div className="flex-[95%] flex flex-col justify-start items-center
                            bg-neutral-50 shadow-xl gap-y-20 rounded-xl p-16 relative z-10">
                <div className={"flex-1 flex flex-col justify-start gap-y-16 items-stretch w-full"}>
                    <Input value={''} onChange={(v) => console.log(v)} label={'Name'}/>
                    <Input value={''} onChange={(v) => console.log(v)} label={'Email'} type={'email'}/>
                    <Input value={''} onChange={(v) => console.log(v)} label={'Message'}/>
                </div>

                <div className={"flex-[5%] w-full flex justify-end items-end"}>
                    <LayerButton text={"Submit"} onClick={() => console.log("Submit")} />
                </div>
            </div>
        </>
    );
}
