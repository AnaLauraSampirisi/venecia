import { Textarea, Container } from "@chakra-ui/react";
import { useState } from "react";

const Contact = () => {
    let [value, setValue] =e.target.value;

    let handleInputChange =(e) => {
        let inputValue = e.target.value;
        setValue(inputValue);
    };

    return (
        <div>
            <div className="contact_box">
                <h2 id="title">Dejanos un mensaje</h2>
                <div className="text_area">
                    <Textarea
                    value={value}
                    onChange={handleInputChange}
                    placeholder="Dejanos tu mensaje"
                    size="lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;