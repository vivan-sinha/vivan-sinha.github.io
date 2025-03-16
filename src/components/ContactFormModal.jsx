
import { useState, useRef, useEffect } from 'react'
import { CardSpotlightEffect } from './CardSpotlightEffect';

export default function ContactFormModal({contactToggled, toggleContactForm, modalRef, textBoxClicked}) {

    
    useEffect(() => {
        document.body.style.overflow = contactToggled ? 'hidden' : 'auto';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape' || event.code === 'Esc') {
                toggleContactForm();
            }
        };

        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) && contactToggled) {
              toggleContactForm();
            }
        };
        

        if (contactToggled) {
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [contactToggled]);


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
            if (contactToggled) {
                toggleContactForm();
                setResult("");
            };
        }, 800);
    };

    return (
        <div id="contactFormModal" className={"fixed z-10 inset-0 overflow-y-auto backdrop-blur-lg " + (contactToggled ? "" : "hidden")}>
            <div className="flex items-center justify-center min-h-screen">
                {/* <CardSpotlightEffect customCSS={'w-1/2 rounded-2xl'}> */}
                <div ref={modalRef} className="flex flex-col w-[70%] 2xl:w-[50%] bg-black/85 p-15 rounded-2xl">
                {/* <CardSpotlightEffect> */}
                    <div className='flex flex-row w-full justify-end text-3xl'>
                        <i className="fa-solid fa-xmark text-white cursor-pointer" onClick={() => toggleContactForm()}/>
                    </div>
                    <h1 className='text-5xl font-bold mb-15'>Contact Me</h1>
                    <form onSubmit={onSubmit}>
                        <div className='flex flex-col items-start space-y-10 px-2 text-2xl [&>*]:placeholder:text-gray-400'>
                            
                            <input className='w-full focus:width-min px-3 py-2 border-b-2 border-white/0 focus:border-white/75 outline-none' type='text' name='name' placeholder='Name' required
                            onFocus={() => textBoxClicked.current = true}/>
                            <input className='w-full px-3 py-2 border-b-2 border-white/0 focus:border-white/75 outline-none' type='email' name='email' placeholder='Email' required
                            onFocus={() => textBoxClicked.current = true}/>
                            <textarea rows={1} className='w-full h-auto px-3 py-2 border-b-2 border-white/0 focus:border-white/75 outline-none' name='message' placeholder='Message' required
                            onFocus={() => textBoxClicked.current = true}/>

                            <div className='flex flex-row justify-between items-center w-full'>

                                <p>{result}</p>
                                <CardSpotlightEffect intensity='0.08' customCSS={'w-fit rounded-lg self-end'}>
                                    <button type="submit" 
                                    className='w-fit bg-white/8 text-white font-bold py-3 px-7 rounded-lg'
                                    >Submit</button>
                                </CardSpotlightEffect>

                            </div>
                        </div>

                        
                    </form>
                </div>
            </div>
        </div>
    )
}