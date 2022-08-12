// import { useState } from "react";
// import { send } from "emailjs-com";
import "./DefaultPagestyle.css";
// import IconDance from "../images/dancing.png";
export function FeedbackPage() {
  //   const [toSend, setToSend] = useState({
  //     satisfied: "",
  //     neutral: "",
  //     unsatisfied: "",
  //     satisfaction: "",
  //     message: "",
  //   });

  //   function onSubmit(e) {
  //     e.preventDefault();
  //     send("service_hanitra", "template_bz43xep", toSend, "urjKfsvZ_ujuW0A8F")
  //       .then((response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //       })
  //       .catch((err) => {
  //         console.log("FAILED...", err);
  //       });
  //   }

  //   function handleChange(e) {
  //     setToSend({ ...toSend, [e.target.name]: e.target.value });
  //   }
  //   function Thanks() {
  //     alert("thanks for your feedback");
  //   }

  //   return (
  //     <div>
  //       <div className="Question-header">
  //         {/* <img id="icon" src={IconDance} alt="A sillhouette of a girl dancing" /> */}
  //         <h1>We value your feedback</h1>
  //       </div>
  //       <div className="form">
  //         <form onSubmit={onSubmit}>
  //           {/* <label>
  //             {" "}
  //             Satisfied{" "}
  //             <input
  //               className="selection-div"
  //               type="checkbox"
  //               name="satisfaction"
  //               value={toSend.satisfied}
  //               onChange={handleChange}
  //             />
  //           </label>
  //           <label>
  //             {" "}
  //             Neutral{" "}
  //             <input
  //               className="selection-div"
  //               type="checkbox"
  //               name="satisfaction"
  //               value={toSend.neutral}
  //               onChange={handleChange}
  //             />
  //           </label>
  //           <label>
  //             {" "}
  //             Unsatisfied{" "}
  //             <input
  //               className="selection-div"
  //               type="checkbox"
  //               name="satisfaction"
  //               value={toSend.unsatisfied}
  //               onChange={handleChange}
  //             />
  //           </label> */}

  //           <input
  //             className="selection-div"
  //             type="text"
  //             name="satisfaction"
  //             placeholder="Are you satisfied ? Y/N"
  //             value={toSend.satisfaction}
  //             onChange={handleChange}
  //           />

  //           <textarea
  //             rows="4"
  //             cols="50"
  //             className="selection-div"
  //             type="text"
  //             name="message"
  //             placeholder=" Tell us how we can improve ?"
  //             value={toSend.message}
  //             onChange={handleChange}
  //           />

  //           <button id="ButtonMood" type="submit" onClick={Thanks}>
  //             {" "}
  //             Submit{" "}
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <form name="contact" method="post" action="/">
      <input type="hidden" name="form-name" value="feedbackform" />
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            console.log(event);

            fetch("/", { body: new FormData(event.target), method: "POST" })
              .then(() => alert("worked"))
              .catch(() => alert("didnt work"));
          }}
        >
          Send
        </button>
      </p>
    </form>
  );
}

export default FeedbackPage;
