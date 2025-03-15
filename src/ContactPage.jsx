import React from 'react'
import {useState} from 'react'
import { CardSpotlightEffect } from './components/CardSpotlightEffect';

export default function ContactPage() {
    const [result, setResult] = useState("");
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "6c1f30e8-7207-424b-bf25-2b7bd9a3a294");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }

        setTimeout(() => {
            setResult("");
        }, 800);
    };
  return (
    <CardSpotlightEffect customCSS={'w-[100vw] h-[100vh] pt-25'}>
        <div className='justify-self-center w-[90vw] xl:w-[65vw] 2xl:w-[50vw] space-y-10 mb-20'>
        <h1 className='text-5xl font-bold mb-10'>Contact Me</h1>
        <form onSubmit={onSubmit}>
            <div className='flex flex-col space-y-4 px-2 text-lg'>
                
                <input className='w-full px-3 py-2 outline-none' type='text' name='name' placeholder='Name' required></input>
                <input className='w-full px-3 py-2 outline-none' type='email' name='email' placeholder='Email' required></input>
                <textarea className='w-full px-3 py-2 outline-none' name='message' placeholder='Message' required></textarea>

                <div className='flex flex-row justify-between items-center w-full'>

                    <p>{result}</p>
                    <CardSpotlightEffect customCSS={'w-fit rounded self-end'}>
                        <CardSpotlightEffect customCSS={'w-fit rounded '}>
                            <button type="submit" 
                            className='w-fit bg-white/10 text-white font-bold py-2 px-4 rounded'
                            >Submit</button>
                        </CardSpotlightEffect>
                    </CardSpotlightEffect>

                </div>
            </div>
        </form>
        </div>
    </CardSpotlightEffect>
  )
}
