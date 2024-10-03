import React, { useState } from 'react';

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className="faq-item">
            <div className="faq-header" onClick={onToggle}>
            {question} <span className='signs'>{isOpen ? '-' : '+'}</span> 
            </div>
            {isOpen && <div className="faq-content">{answer}</div>}
        </div>
    );
};

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            question: 'Does Fluid AI increase wellbeing and meaning in life?',
            answer: 'Curiosity is an often overlooked key to greater fulfillment in life. It’s correlated with higher levels of positive emotions, lower levels of anxiety, and greater psychological wellbeing. Of the 24 character strengths measured by the Via Institute On Character, curiosity was one of the most strongly linked to life satisfaction, work satisfaction, living a pleasurable life, living an engaging life, and living a meaningful life.'
        },
        {
            question: 'Does Fluid AI increase wellbeing and meaning in life?',
            answer: 'Curiosity is an often overlooked key to greater fulfillment in life. It’s correlated with higher levels of positive emotions, lower levels of anxiety, and greater psychological wellbeing. Of the 24 character strengths measured by the Via Institute On Character, curiosity was one of the most strongly linked to life satisfaction, work satisfaction, living a pleasurable life, living an engaging life, and living a meaningful life.'
        },
        ,
        {
            question: 'Does Fluid AI increase wellbeing and meaning in life?',
            answer: 'Curiosity is an often overlooked key to greater fulfillment in life. It’s correlated with higher levels of positive emotions, lower levels of anxiety, and greater psychological wellbeing. Of the 24 character strengths measured by the Via Institute On Character, curiosity was one of the most strongly linked to life satisfaction, work satisfaction, living a pleasurable life, living an engaging life, and living a meaningful life.'
        },
        ,
        {
            question: 'Does Fluid AI increase wellbeing and meaning in life?',
            answer: 'Curiosity is an often overlooked key to greater fulfillment in life. It’s correlated with higher levels of positive emotions, lower levels of anxiety, and greater psychological wellbeing. Of the 24 character strengths measured by the Via Institute On Character, curiosity was one of the most strongly linked to life satisfaction, work satisfaction, living a pleasurable life, living an engaging life, and living a meaningful life.'
        },
        ,
        {
            question: 'Does Fluid AI increase wellbeing and meaning in life?',
            answer: 'Curiosity is an often overlooked key to greater fulfillment in life. It’s correlated with higher levels of positive emotions, lower levels of anxiety, and greater psychological wellbeing. Of the 24 character strengths measured by the Via Institute On Character, curiosity was one of the most strongly linked to life satisfaction, work satisfaction, living a pleasurable life, living an engaging life, and living a meaningful life.'
        },
        {
            question: 'Does Fluid AI increase wellbeing and meaning in life?',
            answer: 'Curiosity is an often overlooked key to greater fulfillment in life. It’s correlated with higher levels of positive emotions, lower levels of anxiety, and greater psychological wellbeing. Of the 24 character strengths measured by the Via Institute On Character, curiosity was one of the most strongly linked to life satisfaction, work satisfaction, living a pleasurable life, living an engaging life, and living a meaningful life.'
        },
        {
            question: 'Does Fluid AI increase wellbeing and meaning in life?',
            answer: 'Curiosity is an often overlooked key to greater fulfillment in life. It’s correlated with higher levels of positive emotions, lower levels of anxiety, and greater psychological wellbeing. Of the 24 character strengths measured by the Via Institute On Character, curiosity was one of the most strongly linked to life satisfaction, work satisfaction, living a pleasurable life, living an engaging life, and living a meaningful life.'
        },
        {
            question: 'Does Fluid AI increase wellbeing and meaning in life?',
            answer: 'Curiosity is an often overlooked key to greater fulfillment in life. It’s correlated with higher levels of positive emotions, lower levels of anxiety, and greater psychological wellbeing. Of the 24 character strengths measured by the Via Institute On Character, curiosity was one of the most strongly linked to life satisfaction, work satisfaction, living a pleasurable life, living an engaging life, and living a meaningful life.'
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <div className='faq-div'>
        <div>
          <p className='faq-heading'>What can curiosity,<br/> wonder, and awe<br/> do for you?</p>  
          <p className='faq-text'>Research shows that experiencing curiosity and awe can<br/> immensely benefit our mental, physical, and professional health.<br/>
           Here’s a brief overview of what curiosity and awe can do for you.</p>
        </div>
        <div className="faq-accordion">
           
            {faqItems.map((item, index) => (
                <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
      </div>
    );
};

export default Faq;