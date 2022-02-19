import React, { useEffect, useRef, useState } from 'react';
import "./ContactSection.css"

const ContactSection = ({ scroll }) => {

    const elm = useRef(null);
    const elm_ = useRef(null);
    const contentsElm = useRef(null);

    const [top, setTop] = useState("initial");
    const [bottom, setBottom] = useState();
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(1);

    const [canClick, setCanClick] = useState(true)

    useEffect(() => {
        const posY = elm.current.getBoundingClientRect().y;
        const contentsHeight = elm.current.getBoundingClientRect().height;
        const conHeight = elm_.current.getBoundingClientRect().height;


        if (top === "initial" && posY === 0) {
            setTop(scroll);
            setBottom(scroll + conHeight - contentsHeight);
        }

        if (scroll >= top && scroll <= top + 300) {
            setScale((scroll - top) / 300);
            setOpacity((scroll - top) / 300);
            console.log("anim1")
            setCanClick(false)
        }
        else if (scroll >= bottom - 300 && scroll <= bottom) {
            setScale(1 + (scroll - (bottom - 300)) / 300);
            setOpacity((bottom - scroll) / 300);
            console.log("anim2")
            setCanClick(false)
        }
        else if (scroll > top + 300 && scroll < bottom - 300) {
            setOpacity(1);
            setScale(1);
            setCanClick(true)
        }

        else
            setOpacity(0);

        console.log(canClick)

    }, [scroll]);


    const Contents = () => {
        return (
            <>
                <div className='contact-contents' style={{}} ref={contentsElm}>
                    <h1>
                        CONTACT
                    </h1>
                    <form id="contact-form">
                        <div className="name">
                            <label for="name"></label>
                            <input type="name" placeholder="お名前" name="name" id="name_input" required />
                        </div>
                        <div className="email">
                            <label for="email"></label>
                            <input type="email" placeholder="メールアドレス" name="email" id="email_input" required />
                        </div>
                        <div className='text'>
                            <label for="text"></label>
                            <textarea type="text" placeholder='お問い合わせ内容' rows={10} name='text' id='text_input' required />
                        </div>
                        <button>
                            送信
                        </button>
                    </form>
                </div>
            </>
        );
    }

    return (
        <div className='contact-wrapper' ref={elm_}>
            <div className={`block block-one`} ref={elm} style={{ pointerEvents: `${canClick ? "auto" : "none"}`, transform: `scale(${scale})`, opacity: opacity }}>
                <Contents />
            </div>

        </div >
    )
};

export default ContactSection;
