"use client";

const MessageBoxIcon = () => {
    return (
        <>
        <div className="chat">
            <div className="background" />
            <svg viewBox="0 0 113 110" height="90" width="90" className="chat-bubble">
                <g className={`bubble`}>
                    <path
                        d="M 30.7873,85.113394 30.7873,46.556405 C 30.7873,41.101961 36.826342,35.342 40.898074,35.342 H 59.113981 C 63.73287,35.342 69.29995,40.103201 69.29995,46.784744"
                        className="line line1"
                    />
                    <path
                        d="M 13.461999,65.039335 H 58.028684 C 63.483128,65.039335 69.243089,59.000293 69.243089,54.928561 V 45.605853 C 69.243089,40.986964 65.02087,35.419884 58.339327,35.419884"
                        className="line line2"
                    />
                </g>
                <circle cx="42.5" cy="50.7" r="1.9" className="circle circle1" />
                <circle cx="49.9" cy="50.7" r="1.9" className="circle circle2" />
                <circle cx="57.3" cy="50.7" r="1.9" className="circle circle3" />
            </svg>
        </div>
        <style jsx>
            {`
            /* From Uiverse.io by DevPTG */ 
.chat {
  display: flex;
  position: fixed;
  left:6vw;
  top:80vh;
}

.background {
  background-color: #6c63ff;
  border-radius: 50%;
  box-shadow: 0 2.1px 1.3px rgba(0, 0, 0, 0.044),
    0 5.9px 4.2px rgba(0, 0, 0, 0.054), 0 12.6px 9.5px rgba(0, 0, 0, 0.061),
    0 25px 20px rgba(0, 0, 0, 0.1);
  height: 60px;
  left: 10px;
  position: absolute;
  top: 10px;
  width: 60px;
}

.chat-bubble {
  cursor: pointer;
  position: relative;
}

.bubble {
  transform-origin: 50%;
  transition: transform 500ms cubic-bezier(0.17, 0.61, 0.54, 0.9);
}

.line {
  fill: none;
  stroke: #ffffff;
  stroke-width: 2.75;
  stroke-linecap: round;
  transition: stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line1 {
  stroke-dasharray: 60 90;
  stroke-dashoffset: -20;
}

.line2 {
  stroke-dasharray: 67 87;
  stroke-dashoffset: -18;
}

.circle {
  fill: #ffffff;
  stroke: none;
  transform-origin: 50%;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.active .bubble {
  transform: translateX(24px) translateY(4px) rotate(45deg);
}

.active .line1 {
  stroke-dashoffset: 21;
}

.active .line2 {
  stroke-dashoffset: 30;
}

.active .circle {
  transform: scale(0);
}
            `}
        </style>
        </>
    );
};

export { MessageBoxIcon };